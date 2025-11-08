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

    const kelas = await prisma.kelas.findUnique({
      where: { id },
    });

    if (!kelas) {
      return NextResponse.json(
        { message: "Kelas tidak ditemukan" },
        { status: 404 } // 404 Not Found
      );
    }

    return NextResponse.json(kelas, { status: 200 });
  } catch (error) {
    console.log("gagal mendapatkan data kelas berdasarkan id", error);

    return NextResponse.json(
      {
        message: "Kesalahan Server, silahkan coba lagi!",
      },
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
    const { id } = await params;
    const { nama, waliKelasId } = body;

    if (!waliKelasId || !nama) {
      return NextResponse.json(
        { message: "Semua field harus diisi!" },
        { status: 400 }
      );
    }

    const updatedKelas = await prisma.kelas.update({
      where: { id },
      data: {
        nama,
        waliKelasId,
      },
    });

    return NextResponse.json(
      { updatedKelas, message: "Kelas berhasil diupdate" },
      { status: 200 }
    );
  } catch (error) {
    console.log("gagal edit data Kelas", error);

    return NextResponse.json(
      {
        message: "Kesalahan Server, silahkan coba lagi!",
      },
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
        { status: 401 }
      );
    }

    if (session.user.role !== "ADMIN" && session.user.role !== "GURU") {
      return NextResponse.json({ message: "Akses ditolak" }, { status: 403 });
    }

    const { id } = await params;

    const deletedKelas = await prisma.kelas.delete({
      where: { id },
    });

    return NextResponse.json(
      { deletedKelas, message: "Kelas berhasil dihapus" },
      { status: 200 }
    );
  } catch (error) {
    console.log("gagal menghapus data kelas", error);

    return NextResponse.json(
      {
        message: "Kesalahan Server, silahkan coba lagi!",
      },
      { status: 500 }
    );
  }
};
