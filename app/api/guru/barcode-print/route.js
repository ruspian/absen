import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";

export const GET = async (req) => {
  try {
    // Cek Sesi
    const session = await auth();
    if (session?.user?.role !== "ADMIN") {
      return NextResponse.json({ message: "Akses ditolak" }, { status: 403 });
    }

    //  Ambil semua guru
    const guru = await prisma.guru.findMany({
      select: {
        id: true,
        nama: true,
        kode: true,
      },
      orderBy: {
        nama: "asc",
      },
    });

    return NextResponse.json(guru, { status: 200 });
  } catch (error) {
    console.log("Error ambil semua guru:", error);
    return NextResponse.json({ message: "Kesalahan Server" }, { status: 500 });
  }
};
