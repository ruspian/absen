import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";

export const POST = async (req) => {
  try {
    const session = await auth();

    if (!session || !session.user) {
      return NextResponse.json(
        { message: "Akses ditolak, harap login terlebih dahulu!" },
        { status: 401 } // 401 Unauthorized
      );
    }

    if (session.user.role !== "ADMIN" && session.user.role !== "GURU") {
      return NextResponse.json(
        { message: "Akses ditolak" },
        { status: 403 } // 403 Forbidden
      );
    }

    const body = await req.json();
    const { hari, jamMulai, jamSelesai, mataPelajaran, guru, kelas } = body;

    if (
      !hari ||
      !jamMulai ||
      !jamSelesai ||
      !mataPelajaran ||
      !guru ||
      !kelas
    ) {
      return NextResponse.json(
        { message: "Semua field harus diisi!" },
        { status: 400 }
      );
    }

    const createdJadwal = await prisma.jadwalPelajaran.create({
      data: {
        hari,
        jamMulai,
        jamSelesai,
        kelasId: kelas,
        mapelId: mataPelajaran,
        guruId: guru,
      },
    });

    return NextResponse.json(
      { createdJadwal, message: "Jadwal berhasil dibuat" },
      { status: 200 }
    );
  } catch (error) {
    console.log("gagal membuat jadwal pelajaran:", error);

    return NextResponse.json(
      { message: "Terjadi kesalahan Server, coba lagi!" },
      { status: 500 }
    );
  }
};
