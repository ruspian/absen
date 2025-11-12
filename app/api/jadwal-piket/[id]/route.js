import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { Prisma } from "@prisma/client";

export const DELETE = async (req, { params }) => {
  const { id } = await params; // ID dari JadwalPiket

  try {
    // Otorisasi
    const session = await auth();
    if (session?.user?.role !== "ADMIN") {
      return NextResponse.json({ message: "Akses ditolak" }, { status: 403 });
    }

    // Hapus jadwal
    await prisma.jadwalPiket.delete({
      where: { id: id },
    });

    return NextResponse.json(
      { message: "Jadwal piket berhasil dihapus" },
      { status: 200 }
    );
  } catch (error) {
    console.log("Gagal menghapus jadwal piket:", error);
    // Kalo ID-nya gak ketemu
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2025") {
        return NextResponse.json(
          { message: "Jadwal tidak ditemukan" },
          { status: 404 }
        );
      }
    }
    return NextResponse.json({ message: "Kesalahan Server" }, { status: 500 });
  }
};
