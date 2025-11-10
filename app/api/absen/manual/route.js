import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";

// Helper
const getToday = () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return today;
};

export const POST = async (req) => {
  try {
    const session = await auth();

    if (!session || !session.user) {
      return NextResponse.json(
        { message: "Akses ditolak, harap login terlebih dahulu!" },
        { status: 401 } // 401 Unauthorized
      );
    }

    const userRole = session.user.role;
    // ambil isPiket dari callback nextauth
    const isPiket = session.user.isPiket;

    // pastikan user adalah admin atau guru piket
    const isAuthorized =
      userRole === "ADMIN" || (userRole === "GURU" && isPiket);

    if (!isAuthorized) {
      return NextResponse.json(
        { message: "Akses ditolak. Anda bukan Admin atau Guru Piket." },
        { status: 403 } // 403 Forbidden
      );
    }

    const body = await req.json();
    const { siswaId, status } = body;

    if (!siswaId || !status) {
      return NextResponse.json(
        { message: "Data tidak lengkap" },
        { status: 400 }
      );
    }

    const today = getToday();

    // Jika manual, jamMasuk/jamPulang di-null-kan
    const absen = await prisma.absenHarian.upsert({
      // Upsert = update or create/insert
      where: {
        siswaId_tanggal: {
          siswaId: siswaId,
          tanggal: today,
        },
      },
      update: {
        status: status,
        jamMasuk: status === "HADIR" ? new Date() : null, // Jaga-jaga kalo guru piket neken 'Hadir'
        jamPulang: null,
      },
      create: {
        siswaId: siswaId,
        tanggal: today,
        status: status,
        jamMasuk: status === "HADIR" ? new Date() : null,
      },
    });

    return NextResponse.json(
      { absen, message: `Absen ${status} berhasil dicatat` },
      { status: 201 }
    );
  } catch (error) {
    console.log("Gagal mencatat absen manual:", error);
    return NextResponse.json({ message: "Kesalahan Server" }, { status: 500 });
  }
};
