import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";

export const GET = async (req, { params }) => {
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

    const { id } = await params;

    console.log("id", id);

    const siswa = await prisma.siswa.findUnique({
      where: { id },
      include: { kelas: true },
    });

    if (!siswa) {
      return NextResponse.json(
        { message: "Siswa tidak ditemukan" },
        { status: 404 } // 404 Not Found
      );
    }

    return NextResponse.json(siswa, { status: 200 });
  } catch (error) {
    console.log("gagal mengambil data siswa berdasarkan id:", error);

    return NextResponse.json(
      { message: "Kesalahan Pada Server, Silahkan Coba Lagi!" },
      { status: 500 }
    );
  }
};

export const PUT = async (req, { params }) => {
  const session = await auth();

  if (!session) {
    return NextResponse.json(
      { message: "Akses ditolak, harap login terlebih dahulu!" },
      { status: 401 }
    );
  }

  try {
    const body = await req.json();
    const { id } = await params;

    const { nama, nisn, kode, kelasId, gender } = body;

    if (!kelasId || !gender || !nama || !nisn || !kode) {
      return NextResponse.json(
        { message: "Semua field harus diisi!" },
        { status: 400 }
      );
    }

    if (!id) {
      return NextResponse.json(
        { message: "Siswa tidak ditemukan!" },
        { status: 400 }
      );
    }

    const updateSiswa = await prisma.siswa.update({
      where: { id },
      data: {
        nama,
        nisn,
        kode,
        kelasId,
        gender,
      },
    });

    return NextResponse.json(
      { updateSiswa, message: "Siswa berhasil diupdate!" },
      { status: 200 }
    );
  } catch (error) {
    console.log("gagal edit data siswa:", error);

    return NextResponse(
      {
        message: "Kesalahan Pada Server, Silahkan Coba Lagi!",
      },
      { status: 500 }
    );
  }
};
