import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";

export const GET = async (req) => {
  try {
    // Cek apakah user sudah login
    const session = await auth();

    if (!session || !session.user) {
      return NextResponse.json(
        { message: "Anda harus login terlebih dahulu" },
        { status: 401 } // 401 Unauthorized
      );
    }

    // Pastikan hanya Admin atau Guru yang bisa lihat data ini
    if (session.user.role !== "ADMIN" && session.user.role !== "GURU") {
      return NextResponse.json(
        { message: "Akses ditolak" },
        { status: 403 } // 403 Forbidden
      );
    }

    const kelas = await prisma.kelas.findMany();

    if (!kelas) {
      return NextResponse.json(
        { message: "Kelas tidak ditemukan" },
        { status: 404 } // 404 Not Found
      );
    }

    return NextResponse.json(kelas, { status: 200 });
  } catch (error) {
    console.log("gagal mengambil data kelas :", error);

    return NextResponse.json(
      { message: "Kesalahan Pada Server, Silahkan Coba Lagi!" },
      { status: 500 }
    );
  }
};
