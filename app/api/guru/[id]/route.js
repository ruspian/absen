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

    const guru = await prisma.guru.findUnique({
      where: { id },
    });

    if (!guru) {
      return NextResponse.json(
        { message: "Guru tidak ditemukan" },
        { status: 404 } // 404 Not Found
      );
    }

    return NextResponse.json(guru, { status: 200 });
  } catch (error) {
    console.log("gagal mengambil data guru berdasarkan id:", error);

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
    const { nama, kode, gender, nip, nuptk } = body;

    if (!nama || !kode || !gender || !nip || !nuptk) {
      return NextResponse.json(
        { message: "Semua field harus diisi!" },
        { status: 400 }
      );
    }

    const updatedGuru = await prisma.guru.update({
      where: { id },
      data: {
        nama,
        kode,
        gender,
        nip,
        nuptk,
      },
    });

    return NextResponse.json(
      { updatedGuru, message: "Guru berhasil diupdate!" },
      { status: 200 }
    );
  } catch (error) {
    console.log("gagal edit data guru:", error);

    return NextResponse.json(
      {
        message: "Kesalahan Server, silahkan coba lagi!",
      },
      { status: 500 }
    );
  }
};

export const DELETE = async (req, { params }) => {
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

  try {
    const { id } = await params;

    if (!id) {
      return NextResponse.json(
        { message: "Guru tidak ditemukan!" },
        { status: 400 }
      );
    }

    const deleteGuru = await prisma.guru.delete({
      where: { id },
    });

    return NextResponse.json(
      { deleteGuru, message: "Guru berhasil dihapus!" },
      { status: 200 }
    );
  } catch (error) {
    console.log("gagal menghapus guru:", error);

    return NextResponse(
      {
        message: "Kesalahan Pada Server, Silahkan Coba Lagi!",
      },
      { status: 500 }
    );
  }
};
