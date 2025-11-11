import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";

const TIMEZONE = "Asia/Makassar"; // WITA
const TIMEZONE_OFFSET = "+08:00";

const getMonthRangeWITA = (bulan, tahun) => {
  const bulanIndex = parseInt(bulan) - 1;
  const tahunNum = parseInt(tahun);

  // Awal Bulan
  const startDate = new Date(
    `${tahunNum}-${String(bulanIndex + 1).padStart(
      2,
      "0"
    )}-01T00:00:00${TIMEZONE_OFFSET}`
  );

  // Akhir Bulan
  const lastDayDate = new Date(tahunNum, bulanIndex + 1, 0); // Tgl 0 = hari terakhir bulan sebelumnya
  const lastDay = lastDayDate.getDate(); // 30 (untuk November)

  const endDate = new Date(
    `${tahunNum}-${String(bulanIndex + 1).padStart(2, "0")}-${String(
      lastDay
    ).padStart(2, "0")}T23:59:59${TIMEZONE_OFFSET}`
  );

  return { startDate, endDate };
};

export const POST = async (req) => {
  try {
    // Autentikasi & Otorisasi
    const session = await auth();
    if (!session || !session.user) {
      return NextResponse.json(
        { message: "Akses ditolak, harap login terlebih dahulu!" },
        { status: 401 }
      );
    }
    // Cuma Admin & Guru termasuk Guru Piket yang boleh liat laporan
    const userRole = session.user.role;
    if (userRole !== "ADMIN" && userRole !== "GURU") {
      return NextResponse.json(
        { message: "Akses ditolak. Anda bukan Admin atau Guru." },
        { status: 403 }
      );
    }

    // Ambil data dari body
    const body = await req.json();
    const { targetId, tipe, bulan, tahun } = body;

    if (!targetId || !tipe || !bulan || !tahun) {
      return NextResponse.json(
        { message: "Data tidak lengkap" },
        { status: 400 }
      );
    }

    // Tentukan Awal & Akhir Bulan WITA
    const { startDate, endDate } = getMonthRangeWITA(bulan, tahun);

    let dataAbsen;

    // Query ke database berdasarkan 'tipe'
    if (tipe === "siswa") {
      dataAbsen = await prisma.absenHarian.findMany({
        where: {
          siswaId: targetId,
          tanggal: {
            gte: startDate, // Greater than or equal (>= Awal Bulan)
            lte: endDate, // Less than or equal (<= Akhir Bulan)
          },
        },
        orderBy: {
          tanggal: "asc",
        },
      });
    } else if (tipe === "guru") {
      dataAbsen = await prisma.absenGuruHarian.findMany({
        where: {
          guruId: targetId,
          tanggal: {
            gte: startDate,
            lte: endDate,
          },
        },
        orderBy: {
          tanggal: "asc",
        },
      });
    } else {
      return NextResponse.json(
        { message: "Tipe tidak valid" },
        { status: 400 }
      );
    }

    // Kembalikan datanya
    return NextResponse.json(dataAbsen, { status: 200 });
  } catch (error) {
    console.log("Gagal mengambil laporan bulanan:", error);
    return NextResponse.json({ message: "Kesalahan Server" }, { status: 500 });
  }
};
