import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";

const TIMEZONE = "Asia/Makassar"; // WITA

// fungsi untuk dapat awal & akhir bulan
const getMonthRangeWITA = (bulan, tahun) => {
  const bulanIndex = parseInt(bulan) - 1;

  // Awal bulan
  const startDate = new Date(Date.UTC(tahun, bulanIndex, 1, -8)); // -8 jam => 00:00 WITA

  // Akhir bulan
  const endDate = new Date(Date.UTC(tahun, bulanIndex + 1, 0, -8)); // tgl 0 => hari terakhir
  endDate.setHours(23, 59, 59, 999);

  return { startDate, endDate };
};

export const POST = async (req) => {
  try {
    const session = await auth();
    if (
      !session ||
      (session.user.role !== "ADMIN" && session.user.role !== "GURU")
    ) {
      return NextResponse.json({ message: "Akses ditolak" }, { status: 403 });
    }

    // ambil id guru yang login
    const loggedInGuruId = session.user.guruId;

    const body = await req.json();
    const { kelasId, bulan, tahun, sumber, mapelId } = body;

    if (!kelasId || !bulan || !tahun) {
      return NextResponse.json(
        { message: "Data tidak lengkap" },
        { status: 400 }
      );
    }

    const { startDate, endDate } = getMonthRangeWITA(bulan, tahun);

    // Ambil semua siswa di kelas itu
    const students = await prisma.siswa.findMany({
      where: { kelasId: kelasId },
      select: { id: true, nama: true },
      orderBy: { nama: "asc" },
    });

    const studentIds = students.map((s) => s.id);

    let attendance;

    // jika sumber 'mapel'
    if (sumber === "mapel" && loggedInGuruId) {
      // buat where dinamis buat mapel
      const whereMapel = {
        jadwal: {
          guruId: loggedInGuruId,
          kelasId: kelasId,
        },
        tanggal: { gte: startDate, lte: endDate },
      };
      // Kalo 'mapelId' dikirim, tambahin ke filter
      if (mapelId && mapelId !== "semua") {
        whereMapel.jadwal.mapelId = mapelId;
      }

      attendance = await prisma.absenMapel.findMany({
        where: whereMapel,
        select: { siswaId: true, tanggal: true, status: true },
      });
    } else {
      // Ambil semua data absen di kelas itu di bulan itu
      attendance = await prisma.absenHarian.findMany({
        where: {
          siswaId: {
            in: studentIds,
          },
          tanggal: {
            gte: startDate,
            lte: endDate,
          },
        },
        select: {
          siswaId: true,
          tanggal: true,
          status: true,
        },
      });
    }

    return NextResponse.json({ students, attendance });
  } catch (error) {
    console.log("Gagal mengambil laporan kelas:", error);
    return NextResponse.json({ message: "Kesalahan Server" }, { status: 500 });
  }
};
