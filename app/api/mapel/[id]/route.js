import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";

export const GET = async (req, { params }) => {
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

    const { id } = await params;

    const mapel = await prisma.mataPelajaran.findUnique({
      where: { id },
    });

    if (!mapel) {
      return NextResponse.json(
        { message: "Mapel tidak ditemukan" },
        { status: 404 } // 404 Not Found
      );
    }

    return NextResponse.json(mapel, { status: 200 });
  } catch (error) {
    console.log("gagal mencari data mata pelajaran sesuai id", error);

    return NextResponse.json(
      { message: "Kesalahan server, silahkan coba lagi!" },
      { status: 500 }
    );
  }
};

export const PUT = async (req, { params }) => {
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
    const { kode, nama } = body;
    const { id } = await params;

    const updatedMapel = await prisma.mataPelajaran.update({
      where: { id },
      data: {
        kode,
        nama,
      },
    });

    return NextResponse.json(
      { updatedMapel, message: "Berhasil edit mata pelajaran" },
      { status: 200 }
    );
  } catch (error) {
    console.log("gagal edit mata pelajaran", error);

    return NextResponse.json(
      { message: "Kesalahan server, silahkan coba lagi!" },
      { status: 500 }
    );
  }
};

export const DELETE = async (req, { params }) => {
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

    const { id } = await params;

    const deletedMapel = await prisma.mataPelajaran.delete({
      where: { id },
    });

    return NextResponse.json(
      { deletedMapel, message: "Mapel berhasil dihapus" },
      { status: 200 }
    );
  } catch (error) {
    console.log("gagal menghapus data mapel", error);

    return NextResponse.json(
      {
        message: "Kesalahan server, silahkan coba lagi!",
      },
      { status: 500 }
    );
  }
};
