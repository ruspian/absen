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
      { message: "Akses ditolak!" },
      { status: 403 } // 403 Forbidden
    );
  }

  try {
    const body = await req.json();

    const { nama, gender, nip, nuptk } = body;

    if (!nama || !gender || !nip || !nuptk) {
      return NextResponse.json(
        { message: "Semua field harus diisi!" },
        { status: 400 }
      );
    }

    // Hitung total siswa yang ada
    const totalGuru = await prisma.guru.count();

    // buat nomor baru untuk kode
    const newNumber = totalGuru + 1;

    // buat format kode
    // 'padStart(3, '0')' -> "1" jadi "001", "12" jadi "012", "123" jadi "123"
    const newKode = "GR" + String(newNumber).padStart(4, "0");

    const createguru = await prisma.guru.create({
      data: {
        nama,
        kode: newKode,
        gender,
        nip,
        nuptk,
      },
    });

    return NextResponse.json(
      { createguru, message: "Guru berhasil ditambahkan!" },
      { status: 200 }
    );
  } catch (error) {
    console.log("gagal menambahkan data guru:", error);

    return NextResponse.json(
      { message: "Kesalahan server, silahkan coba lagi!" },
      { status: 500 }
    );
  }
};

export const GET = async (req) => {
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

    const guru = await prisma.guru.findMany({
      include: {
        mengajarDiJadwal: {
          include: {
            mapel: true,
            kelas: true,
          },
        },
      },
    });

    return NextResponse.json(guru, { status: 200 });
  } catch (error) {
    console.log("gagal mengambil data guru", error);

    return NextResponse.json(
      { message: "Kesalahan server, silahkan coba lagi!" },
      { status: 500 }
    );
  }
};
