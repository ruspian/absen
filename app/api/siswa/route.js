import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";

export const POST = async (req) => {
  const session = await auth();

  if (!session || !session.user) {
    return NextResponse.json(
      { message: "Akses ditolak, harap login terlebih dahulu!" },
      { status: 401 } // 401 Unauthorized
    );
  }

  if (session.user.role !== "ADMIN" && session.user.role !== "GURU") {
    return NextResponse.json(
      { message: "Akses ditolak. Anda bukan Admin." },
      { status: 403 } // 403 Forbidden
    );
  }

  try {
    const body = await req.json();

    const { nama, nisn, kode, kelasId, gender } = body;

    if (!kelasId || !gender || !nama || !nisn || !kode) {
      return NextResponse.json(
        { message: "Semua field harus diisi!" },
        { status: 400 }
      );
    }

    const createSiswa = await prisma.siswa.create({
      data: {
        nama,
        nisn,
        kode,
        kelasId,
        gender,
      },
    });

    return NextResponse.json(
      { createSiswa, message: "Data siswa berhasil ditambahkan!" },
      { status: 201 }
    );
  } catch (error) {
    console.log("gagal menambahkan data siswa:", error);

    return NextResponse.json(
      { message: "Kesalahan pada server, Coba lagi nanti!" },
      { status: 500 }
    );
  }
};
