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

  if (session.user.role !== "ADMIN") {
    return NextResponse.json(
      { message: "Akses ditolak. Anda bukan Admin." },
      { status: 403 } // 403 Forbidden
    );
  }

  try {
    const body = await req.json();

    const { nama, nisn, kelasId, gender } = body;

    if (!kelasId || !gender || !nama || !nisn) {
      return NextResponse.json(
        { message: "Semua field harus diisi!" },
        { status: 400 }
      );
    }

    // Hitung total siswa yang ada
    const totalSiswa = await prisma.siswa.count();

    // buat nomor baru untuk kode
    const newNumber = totalSiswa + 1;

    // buat format kode
    // 'padStart(3, '0')' -> "1" jadi "001", "12" jadi "012", "123" jadi "123"
    const newKode = "SW" + String(newNumber).padStart(4, "0");

    const createSiswa = await prisma.siswa.create({
      data: {
        nama,
        nisn,
        kode: newKode,
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
