import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { getTodayNameWITA } from "@/lib/formatTime";

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
        { message: "Akses ditolak" },
        { status: 403 } // 403 Forbidden
      );
    }

    const body = await req.json();
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

    const createdJadwal = await prisma.jadwalPelajaran.create({
      data: {
        hari,
        jamMulai,
        jamSelesai,
        kelasId: kelas,
        mapelId: mataPelajaran,
        guruId: guru,
      },
    });

    return NextResponse.json(
      { createdJadwal, message: "Jadwal berhasil dibuat" },
      { status: 200 }
    );
  } catch (error) {
    console.log("gagal membuat jadwal pelajaran:", error);

    return NextResponse.json(
      { message: "Terjadi kesalahan Server, coba lagi!" },
      { status: 500 }
    );
  }
};

export const GET = async (req) => {
  try {
    // Cek Sesi
    const session = await auth();

    // Cek kalo dia GURU dan punya 'guruId'
    if (session?.user?.role !== "GURU" || !session?.user?.guruId) {
      return NextResponse.json(
        { message: "Akses ditolak. Anda bukan Guru." },
        { status: 403 } // 403 Forbidden
      );
    }

    const guruId = session.user.guruId;
    const hariIni = getTodayNameWITA();

    //  Kalo hari ini "Jumat", langsung return array kosong
    if (hariIni === "Jumat") {
      return NextResponse.json([], { status: 200 }); // Nggak ada jadwal
    }

    // Cari jadwal guru ini HARI INI
    const jadwalHariIni = await prisma.jadwalPelajaran.findMany({
      where: {
        guruId: guruId,
        hari: hariIni,
      },
      include: {
        kelas: { select: { nama: true } },
        mapel: { select: { nama: true } },
      },
      orderBy: {
        jamMulai: "asc",
      },
    });

    return NextResponse.json(jadwalHariIni, { status: 200 });
  } catch (error) {
    console.log("Gagal mengambil jadwal guru:", error);
    return NextResponse.json({ message: "Kesalahan Server" }, { status: 500 });
  }
};
