import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";

export const POST = async (req) => {
  try {
    const session = await auth();

    if (!session || !session.user) {
      return NextResponse.json(
        {
          message: "Akses ditolak, harap login terlebih dahulu!",
        },
        { status: 401 }
      );
    }

    if (session.user.role !== "ADMIN" && session.user.role !== "GURU") {
      return NextResponse.json(
        { message: "Akses ditolak" },
        { status: 403 } // 403 Forbidden
      );
    }

    const body = await req.json();
    const { nama, waliKelasId } = body;

    if (!waliKelasId || !nama) {
      return NextResponse.json(
        { message: "Semua field harus diisi!" },
        { status: 400 }
      );
    }

    const createKelas = await prisma.kelas.create({
      data: {
        nama,
        waliKelasId,
      },
    });

    return NextResponse.json(
      { createKelas, message: "Kelas berhasil dibuat!" },
      { status: 201 }
    );
  } catch (error) {
    console.log("gagal menambahkan data kelas", error);

    return NextResponse.json(
      { message: "Kesalahan Pada Server, Silahkan Coba Lagi!" },
      { status: 500 }
    );
  }
};

export const GET = async (req) => {
  try {
    const session = await auth();

    if (!session || !session.user) {
      return NextResponse.json(
        {
          message: "Akses ditolak, harap login terlebih dahulu!",
        },
        { status: 401 }
      );
    }

    if (session.user.role !== "ADMIN" && session.user.role !== "GURU") {
      return NextResponse.json(
        { message: "Akses ditolak" },
        { status: 403 } // 403 Forbidden
      );
    }

    const kelas = await prisma.kelas.findMany({
      include: {
        waliKelas: true,
      },
    });

    return NextResponse.json(kelas, { status: 200 });
  } catch (error) {
    console.log("gagal mengambil data kelas:", error);

    return NextResponse.json(
      { message: "Kesalahan Pada Server, Silahkan Coba Lagi!" },
      { status: 500 }
    );
  }
};
