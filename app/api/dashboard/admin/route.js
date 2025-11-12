import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth"; // Pastiin path ini bener

const TIMEZONE = "Asia/Makassar"; // WITA

const getToday = () => {
  const todayString = new Date().toLocaleDateString("en-CA", {
    timeZone: TIMEZONE,
  });
  return new Date(todayString);
};

export const GET = async (req) => {
  try {
    // Otorisasi
    const session = await auth();
    if (session?.user?.role !== "ADMIN") {
      return NextResponse.json({ message: "Akses ditolak" }, { status: 403 });
    }

    const today = getToday();

    // Ambil semua data statistik
    const [
      totalSiswa,
      totalSiswaLaki,
      totalSiswaPerempuan,
      totalGuru,
      absenSiswaHariIni,
      absenGuruHariIni,
      semuaSiswa,
    ] = await prisma.$transaction([
      prisma.siswa.count(),
      prisma.siswa.count({ where: { gender: "LAKI_LAKI" } }),
      prisma.siswa.count({ where: { gender: "PEREMPUAN" } }),
      prisma.guru.count(),
      prisma.absenHarian.findMany({
        where: { tanggal: today },
        select: { status: true, siswaId: true },
      }),
      prisma.absenGuruHarian.findMany({
        where: { tanggal: today },
        select: { status: true, guruId: true },
      }),
      prisma.siswa.findMany({
        include: { kelas: { select: { nama: true } } },
        orderBy: { nama: "asc" },
      }),
    ]);

    // Hitung Persentase
    const siswaHadir = absenSiswaHariIni.filter(
      (a) => a.status === "HADIR"
    ).length;
    const persenSiswa = totalSiswa > 0 ? (siswaHadir / totalSiswa) * 100 : 0;

    const guruHadir = absenGuruHariIni.filter(
      (a) => a.status === "HADIR"
    ).length;
    const persenGuru = totalGuru > 0 ? (guruHadir / totalGuru) * 100 : 0;

    // Gabungkan data buat nyari yang ALFA
    const formattedSiswa = semuaSiswa.map((s) => {
      const absen = absenSiswaHariIni.find((a) => a.siswaId === s.id);
      return {
        id: s.id,
        nama: s.nama,
        kelas: s.kelas.nama,
        status: absen?.status || null, // null = Belum Absen
      };
    });

    // Filter siswa yang ALFA atau Belum Absen
    const siswaAlfa = formattedSiswa.filter((s) => s.status === "ALFA");

    // Siapin 'props'
    const statistik = {
      totalSiswa: totalSiswa,
      totalSiswaLaki: totalSiswaLaki,
      totalSiswaPerempuan: totalSiswaPerempuan,
      totalGuru: totalGuru,
      persenSiswa: `${persenSiswa.toFixed(0)}%`, // Format jadi "60%"
      persenGuru: `${persenGuru.toFixed(0)}%`,
    };

    return NextResponse.json({ statistik, siswaAlfa });
  } catch (error) {
    console.log("Error di API Admin Dashboard:", error);
    return NextResponse.json({ message: "Kesalahan Server" }, { status: 500 });
  }
};
