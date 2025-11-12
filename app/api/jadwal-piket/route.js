import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { Prisma } from "@prisma/client";

export const POST = async (req) => {
  try {
    // Otorisasi
    const session = await auth();
    if (session?.user?.role !== "ADMIN") {
      return NextResponse.json({ message: "Akses ditolak" }, { status: 403 });
    }

    // Ambil data
    const body = await req.json();
    const { guruId, hari } = body;

    if (!guruId || !hari) {
      return NextResponse.json(
        { message: "Data tidak lengkap" },
        { status: 400 }
      );
    }

    // Buat jadwal baru
    const newJadwal = await prisma.jadwalPiket.create({
      data: {
        guruId,
        hari,
      },
    });

    return NextResponse.json(
      { newJadwal, message: "Jadwal piket berhasil ditambahkan" },
      { status: 201 }
    );
  } catch (error) {
    console.log("Gagal menambah jadwal piket:", error);
    // error jika guru sudah dijadwalkan pada hari yang sama
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        return NextResponse.json(
          { message: "Guru ini sudah dijadwalkan piket di hari tersebut." },
          { status: 400 }
        );
      }
    }
    return NextResponse.json({ message: "Kesalahan Server" }, { status: 500 });
  }
};
