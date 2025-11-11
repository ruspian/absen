import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";

const TIMEZONE = "Asia/Makassar"; // WITA

const getMonthRangeWITA = (bulan, tahun) => {
  const bulanIndex = parseInt(bulan) - 1;
  const startDate = new Date(Date.UTC(tahun, bulanIndex, 1, -8)); // 00:00 WITA
  const endDate = new Date(Date.UTC(tahun, bulanIndex + 1, 0, -8)); // Hari terakhir
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

    const body = await req.json();
    const { bulan, tahun } = body; // Cuma butuh bulan & tahun

    if (!bulan || !tahun) {
      return NextResponse.json(
        { message: "Data tidak lengkap" },
        { status: 400 }
      );
    }

    const { startDate, endDate } = getMonthRangeWITA(bulan, tahun);

    // Ambil semua guru
    const gurus = await prisma.guru.findMany({
      select: { id: true, nama: true, nip: true },
      orderBy: { nama: "asc" },
    });

    // Ambil semua data absen guru di bulan itu
    const attendance = await prisma.absenGuruHarian.findMany({
      where: {
        tanggal: {
          gte: startDate,
          lte: endDate,
        },
      },
      select: {
        guruId: true,
        tanggal: true,
        status: true,
      },
    });

    return NextResponse.json({ gurus, attendance });
  } catch (error) {
    console.log("Gagal mengambil laporan guru:", error);
    return NextResponse.json({ message: "Kesalahan Server" }, { status: 500 });
  }
};
