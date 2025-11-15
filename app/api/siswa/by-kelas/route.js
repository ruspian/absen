import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";

export const GET = async (req) => {
  try {
    // Cek Sesi
    const session = await auth();
    if (!session || session.user.role !== "ADMIN") {
      return NextResponse.json({ message: "Akses ditolak" }, { status: 403 });
    }

    // Ambil kelasId dari URL
    const { searchParams } = new URL(req.url);
    const kelasId = searchParams.get("kelasId");
    console.log("kelasId", kelasId);

    if (!kelasId) {
      return NextResponse.json(
        { message: "Parameter 'kelasId' dibutuhkan" },
        { status: 400 }
      );
    }

    // ambil semua siswa di kelas sesuai kelasId
    const siswa = await prisma.siswa.findMany({
      where: {
        kelasId: kelasId,
      },
      select: {
        id: true,
        nama: true,
        kode: true,
      },
      orderBy: {
        nama: "asc",
      },
    });

    return NextResponse.json(siswa, { status: 200 });
  } catch (error) {
    console.log("Error ambil siswa by kelas:", error);
    return NextResponse.json({ message: "Kesalahan Server" }, { status: 500 });
  }
};
