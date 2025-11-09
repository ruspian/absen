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
        { message: "Akses ditolak!" },
        { status: 403 } // 403 Forbidden
      );
    }

    const body = await req.json();
    const { kode, nama } = body;

    if (!kode || !nama) {
      return NextResponse.json(
        { message: "Semua field harus diisi!" },
        { status: 400 }
      );
    }

    const createMapel = await prisma.mataPelajaran.create({
      data: {
        kode: kode,
        nama: nama,
      },
    });

    return NextResponse.json(
      { createMapel, message: "Mapel berhasil ditambahkan!" },
      { status: 200 }
    );
  } catch (error) {
    console.log("gagal membuat data mata pelajaran", error);

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

    const mapel = await prisma.mataPelajaran.findMany({
      include: {
        jadwal: true,
      },
    });

    return NextResponse.json(mapel, { status: 200 });
  } catch (error) {
    console.log("gagal mengambil data mapel:", error);

    return NextResponse.json(
      { message: "Kesalahan Pada Server, Silahkan Coba Lagi!" },
      { status: 500 }
    );
  }
};
