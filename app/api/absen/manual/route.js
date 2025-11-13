import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { format } from "date-fns";
import { id as localeID } from "date-fns/locale";

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

const getTodayNameWITA = () => {
  // 'eeee' -> "Kamis"
  return format(new Date(), "eeee", {
    locale: localeID,
    timeZone: TIMEZONE,
  });
};

export const POST = async (req) => {
  try {
    // Autentikasi & Otorisasi
    const session = await auth();

    if (!session || !session.user) {
      return NextResponse.json(
        { message: "Akses ditolak, harap login terlebih dahulu!" },
        { status: 401 }
      );
    }

    const userRole = session.user.role;
    const guruId = session.user.guruId; // <-- Ambil 'guruId' dari sesi
    const hariIni = getTodayNameWITA(); // Misal: "Kamis"

    let isGuruPiket = false;
    if (userRole === "GURU" && guruId) {
      const cekPiket = await prisma.jadwalPiket.findFirst({
        where: {
          guruId: guruId,
          hari: hariIni,
        },
      });
      if (cekPiket) {
        isGuruPiket = true;
      }
    }

    const isAuthorized = userRole === "ADMIN" || isGuruPiket;

    if (!isAuthorized) {
      return NextResponse.json(
        { message: "Akses ditolak. Anda bukan Admin atau Guru Piket." },
        { status: 403 }
      );
    }

    // Ambil data dari body
    const body = await req.json();
    const { siswaId, guruId: bodyGuruId, status } = body;

    const today = getToday();

    // cek apakah data lengkap
    if (!status || (!siswaId && !bodyGuruId)) {
      return NextResponse.json(
        {
          message:
            "Data tidak lengkap. Butuh status dan (siswaId atau guruId).",
        },
        { status: 400 }
      );
    }

    if (siswaId) {
      // jika ini siswa
      const absenSiswa = await prisma.absenHarian.upsert({
        where: {
          siswaId_tanggal: {
            siswaId: siswaId,
            tanggal: today,
          },
        },
        update: {
          status: status,
          jamMasuk: status === "HADIR" ? new Date() : null,
          jamPulang: null,
        },
        create: {
          siswaId: siswaId,
          tanggal: today,
          status: status,
          jamMasuk: status === "HADIR" ? new Date() : null,
        },
      });

      return NextResponse.json(
        { absenSiswa, message: `Absen ${status} (Siswa) berhasil dicatat` },
        { status: 201 }
      );
    } else if (bodyGuruId) {
      // jika ini guru
      const absenGuru = await prisma.absenGuruHarian.upsert({
        where: {
          guruId_tanggal: {
            guruId: bodyGuruId,
            tanggal: today,
          },
        },
        update: {
          status: status,
          jamMasuk: status === "HADIR" ? new Date() : null,
          jamPulang: null,
        },
        create: {
          guruId: bodyGuruId,
          tanggal: today,
          status: status,
          jamMasuk: status === "HADIR" ? new Date() : null,
        },
      });

      return NextResponse.json(
        { absenGuru, message: `Absen ${status} (Guru) berhasil dicatat` },
        { status: 201 }
      );
    }
  } catch (error) {
    console.log("Gagal mencatat absen manual:", error);

    if (error.code === "P2003") {
      return NextResponse.json(
        { message: "Error: ID Siswa atau Guru tidak ditemukan di database." },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: "Kesalahan Server" }, { status: 500 });
  }
};
