import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";

const TIMEZONE = "Asia/Makassar";

const getToday = () => {
  const todayString = new Date().toLocaleDateString("en-CA", {
    timeZone: TIMEZONE,
  });
  return new Date(todayString);
};

export const POST = async (req) => {
  try {
    // Cek Sesi
    const session = await auth();
    if (
      (session?.user?.role !== "GURU" && !session.user.isPiket) ||
      !session?.user?.guruId
    ) {
      return NextResponse.json({ message: "Akses Ditolak" }, { status: 403 });
    }
    const loggedInGuruId = session.user.guruId;

    const body = await req.json();
    const { siswaId, jadwalId, status } = body;

    if (!siswaId || !jadwalId || !status) {
      return NextResponse.json(
        { message: "Data tidak lengkap" },
        { status: 400 }
      );
    }

    // Cek lagi kalo guru ini beneran yg ngajar
    const jadwal = await prisma.jadwalPelajaran.findUnique({
      where: { id: jadwalId },
      select: { guruId: true },
    });

    if (jadwal?.guruId !== loggedInGuruId) {
      return NextResponse.json(
        { message: "Akses Ditolak. Anda tidak mengajar di jadwal ini." },
        { status: 403 }
      );
    }

    const today = getToday();

    // Simpen pake 'upsert'
    const absen = await prisma.absenMapel.upsert({
      where: {
        siswaId_jadwalId_tanggal: {
          siswaId: siswaId,
          jadwalId: jadwalId,
          tanggal: today,
        },
      },
      update: {
        status: status,
      },
      create: {
        siswaId: siswaId,
        jadwalId: jadwalId,
        tanggal: today,
        status: status,
      },
    });

    return NextResponse.json(
      { absen, message: `Absen ${status} berhasil dicatat` },
      { status: 201 }
    );
  } catch (error) {
    console.log("Gagal mencatat absen mapel:", error);
    return NextResponse.json({ message: "Kesalahan Server" }, { status: 500 });
  }
};
