import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { getToday } from "@/lib/formatTime";

export const GET = async (req) => {
  try {
    // Otorisasi => hanya user yang punya siswaId bisa akses
    const session = await auth();
    if (session?.user?.role !== "USER" || !session?.user?.siswaId) {
      return NextResponse.json(
        { message: "Akun Anda bukan akun siswa." },
        { status: 403 }
      );
    }

    const loggedInSiswaId = session.user.siswaId;

    const today = getToday();

    // Ambil data absen HARI INI
    const absenHarian = await prisma.absenHarian.findUnique({
      where: {
        siswaId_tanggal: {
          siswaId: loggedInSiswaId,
          tanggal: today,
        },
      },
      select: {
        status: true,
        jamMasuk: true,
        jamPulang: true,
      },
    });

    // Ambil data absen MAPEL
    const thirtyDaysAgo = new Date(today);
    thirtyDaysAgo.setDate(today.getDate() - 30);

    const absenMapel = await prisma.absenMapel.findMany({
      where: {
        siswaId: loggedInSiswaId,
        tanggal: {
          gte: thirtyDaysAgo,
          lte: today,
        },
      },
      include: {
        jadwal: {
          select: {
            mapel: { select: { nama: true } },
          },
        },
      },
      orderBy: {
        tanggal: "desc",
      },
    });

    //  Ambil data Pengaturan Jam
    const pengaturan = await prisma.pengaturan.findFirst({
      select: { jamMasukSekolah: true },
    });

    // Kembalikan semua data
    return NextResponse.json({
      absenHarian: absenHarian || null, // Kirim null kalo belum absen
      absenMapel: absenMapel,
      jamMasukSekolah: pengaturan?.jamMasukSekolah || "07:15",
    });
  } catch (error) {
    console.log("Gagal mengambil data dashboard siswa:", error);
    return NextResponse.json({ message: "Kesalahan Server" }, { status: 500 });
  }
};
