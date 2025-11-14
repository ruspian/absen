import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { getTodayNameWITA } from "@/lib/formatTime";

const TIMEZONE = "Asia/Makassar"; // WITA

const getToday = () => {
  const nowWITA = new Date(
    new Date().toLocaleString("en-US", { timeZone: TIMEZONE })
  );
  const tahun = nowWITA.getFullYear();
  const bulanIndex = nowWITA.getMonth();
  const tanggal = nowWITA.getDate();
  const todayWITA = new Date(Date.UTC(tahun, bulanIndex, tanggal, -8));
  return todayWITA;
};

export const GET = async (req) => {
  try {
    // Otorisasi Hanya Admin atau Guru Piket Hari ini
    const session = await auth();
    if (!session || !session.user) {
      return NextResponse.json({ message: "Akses ditolak" }, { status: 401 });
    }

    const userRole = session.user.role;
    const guruId = session.user.guruId;
    const hariIni = getTodayNameWITA();

    let isGuruPiket = false;
    if (userRole === "GURU" && guruId) {
      const cekPiket = await prisma.jadwalPiket.findFirst({
        where: { guruId: guruId, hari: hariIni },
      });
      if (cekPiket) isGuruPiket = true;
    }

    const isAuthorized = userRole === "ADMIN" || isGuruPiket;

    if (!isAuthorized) {
      return NextResponse.json(
        {
          message: `Akses ditolak. Anda bukan Admin atau Guru Piket hari ${hariIni}.`,
        },
        { status: 403 }
      );
    }

    // Kalo lolos, ambil statistik
    const today = getToday();

    const [
      totalSiswa,
      totalGuru,
      siswaHadir,
      guruHadir,
      siswaAbsenManual, // (Sakit, Izin, Alfa)
    ] = await prisma.$transaction([
      prisma.siswa.count(),
      prisma.guru.count(),
      prisma.absenHarian.count({
        where: { tanggal: today, status: "HADIR" },
      }),
      prisma.absenGuruHarian.count({
        where: { tanggal: today, status: "HADIR" },
      }),
      // [FIX] Ganti query 'BelumAbsen' dengan 'AbsenManual'
      prisma.absenHarian.count({
        where: {
          tanggal: today,
          status: { in: ["SAKIT", "IZIN", "ALFA"] },
        },
      }),
    ]);

    const siswaBelumDiProses = totalSiswa - siswaHadir - siswaAbsenManual;

    return NextResponse.json({
      siswa: {
        total: totalSiswa,
        hadir: siswaHadir,
        belumAbsen: siswaBelumDiProses,
      },
      guru: {
        total: totalGuru,
        hadir: guruHadir,
      },
    });
  } catch (error) {
    console.log("Gagal mengambil statistik piket:", error);
    return NextResponse.json({ message: "Kesalahan Server" }, { status: 500 });
  }
};
