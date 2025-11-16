import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { Prisma } from "@prisma/client";
import { getToday } from "@/lib/formatTime";

export const POST = async (req) => {
  try {
    //  Otorisasi
    const session = await auth();
    if (session?.user?.role !== "USER" || !session?.user?.siswaId) {
      return NextResponse.json(
        { message: "Akses ditolak. Akun Anda bukan akun siswa." },
        { status: 403 }
      );
    }
    const loggedInSiswaId = session.user.siswaId;

    //  Ambil data
    const body = await req.json();
    const { tanggal, status, alasan, buktiUrl } = body;

    if (!tanggal || !status || !alasan || !buktiUrl) {
      return NextResponse.json(
        { message: "Data tidak lengkap" },
        { status: 400 }
      );
    }

    // Konversi 'tanggal' ke format WITA 00:00
    const tanggalIzin = getToday(tanggal);
    console.log("tanggal", tanggal);

    console.log("tanggalIzin", tanggalIzin);

    // Buat pengajuan baru
    const pengajuan = await prisma.pengajuanIzin.create({
      data: {
        tanggal: tanggalIzin,
        tipe: status,
        status: "PENDING",
        alasan: alasan,
        buktiUrl: buktiUrl,
        siswaId: loggedInSiswaId,
      },
    });

    return NextResponse.json(
      { pengajuan, message: "Pengajuan izin berhasil dikirim" },
      { status: 201 }
    );
  } catch (error) {
    console.log("Gagal mengajukan izin:", error);
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      // Nangkep error '@@unique([siswaId, tanggal])'
      if (error.code === "P2002") {
        return NextResponse.json(
          { message: "Anda sudah mengajukan izin di tanggal tersebut." },
          { status: 400 }
        );
      }
    }
    return NextResponse.json({ message: "Kesalahan Server" }, { status: 500 });
  }
};
