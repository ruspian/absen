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

    if (!session.user.role === "ADMIN" && !session.user.role === "GURU") {
      return NextResponse.json(
        { message: "Akses ditolak" },
        { status: 403 } // 403 Forbidden
      );
    }

    const { id } = await params;

    const jadwal = await prisma.jadwalPelajaran.findUnique({
      where: { id },
    });

    if (!jadwal) {
      return NextResponse.json(
        { message: "Jadwal tidak ditemukan" },
        { status: 404 } // 404 Not Found
      );
    }

    return NextResponse.json(jadwal, { status: 200 });
  } catch (error) {
    console.log("gagal mengambil data jadwal:", error);
    return NextResponse.json(
      { message: "Gagal mengambil data jadwal" },
      { status: 500 } // 500 Internal Server Error
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

    if (!session.user.role === "ADMIN" && !session.user.role === "GURU") {
      return NextResponse.json(
        { message: "Akses ditolak" },
        { status: 403 } // 403 Forbidden
      );
    }

    const body = await req.json();
    const { id } = await params;
    const { hari, jamMulai, jamSelesai, mataPelajaran, guru, kelas } = body;

    if (
      !hari ||
      !jamMulai ||
      !jamSelesai ||
      !mataPelajaran ||
      !guru ||
      !kelas
    ) {
      return NextResponse.json(
        { message: "Semua field harus diisi!" },
        { status: 400 }
      );
    }

    if (!id) {
      return NextResponse.json(
        { message: "Jadwal tidak ditemukan!" },
        { status: 400 }
      );
    }

    const updateJadwal = await prisma.jadwalPelajaran.update({
      where: { id },
      data: {
        hari,
        jamMulai,
        jamSelesai,
        mapelId: mataPelajaran,
        guruId: guru,
        kelasId: kelas,
      },
    });

    return NextResponse.json(
      { updateJadwal, message: "Jadwal berhasil diupdate!" },
      { status: 200 }
    );
  } catch (error) {
    console.log("gagal update data jadwal", error);

    return NextResponse.json(
      { message: "Gagal update data jadwal" },
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

    if (!session.user.role === "ADMIN" && !session.user.role === "GURU") {
      return NextResponse.json(
        { message: "Akses ditolak" },
        { status: 403 } // 403 Forbidden
      );
    }

    const { id } = await params;

    if (!id) {
      return NextResponse.json(
        { message: "Jadwal tidak ditemukan!" },
        { status: 400 }
      );
    }

    const deletedJadwal = await prisma.jadwalPelajaran.delete({
      where: { id },
    });

    return NextResponse.json(
      { deletedJadwal, message: "Jadwal berhasil dihapus" },
      { status: 200 }
    );
  } catch (error) {
    console.log("gagal hapus jadwal", error);

    return NextResponse.json(
      { message: "Gagal hapus jadwal" },
      { status: 500 }
    );
  }
};
