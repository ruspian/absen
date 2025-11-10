import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";

const getToday = () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return today;
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
    const isPiket = session.user.isPiket;
    const isAuthorized =
      userRole === "ADMIN" || (userRole === "GURU" && isPiket);

    if (!isAuthorized) {
      return NextResponse.json(
        { message: "Akses ditolak. Anda bukan Admin atau Guru Piket." },
        { status: 403 }
      );
    }

    // Ambil data dari body
    const body = await req.json();
    const { siswaId, guruId, status } = body;

    const today = getToday();

    // cek apakah data lengkap
    if (!status || (!siswaId && !guruId)) {
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
    } else if (guruId) {
      // jika ini guru
      const absenGuru = await prisma.absenGuruHarian.upsert({
        where: {
          guruId_tanggal: {
            guruId: guruId,
            tanggal: today,
          },
        },
        update: {
          status: status,
          jamMasuk: status === "HADIR" ? new Date() : null,
          jamPulang: null,
        },
        create: {
          guruId: guruId,
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
