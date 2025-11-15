// Paksa dinamis
export const dynamic = "force-dynamic";

import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import Breadcrumb from "@/components/Breadcrumb";
import { redirect } from "next/navigation";
import JadwalReportClient from "@/components/JadwalReportClient";

const TIMEZONE = "Asia/Makassar"; // WITA

const getMonthRangeWITA = (bulan, tahun) => {
  const bulanIndex = parseInt(bulan) - 1;
  const tahunNum = parseInt(tahun);

  // Awal bulan
  const startDate = new Date(Date.UTC(tahunNum, bulanIndex, 1, -8)); // 00:00 WITA
  // Akhir bulan
  const endDate = new Date(Date.UTC(tahunNum, bulanIndex + 1, 0, -8)); // Hari terakhir
  endDate.setHours(23, 59, 59, 999);

  return { startDate, endDate };
};

const RekapMapelPage = async ({ searchParams }) => {
  // Cek Sesi Guru
  const session = await auth();
  if (session?.user?.role !== "GURU" || !session?.user?.guruId) {
    redirect("/");
  }
  const loggedInGuruId = session.user.guruId;

  // Ambil SEMUA filter dari URL
  const { kelasId, mapelId, bulan, tahun } = await searchParams;
  const filterKelasId = kelasId || null;
  const filterMapelId = mapelId || null;
  // Ambil bulan & tahun hari ini sebagai default
  const nowWITA = new Date(
    new Date().toLocaleString("en-US", { timeZone: TIMEZONE })
  );
  const filterBulan = bulan || String(nowWITA.getMonth() + 1);
  const filterTahun = tahun || String(nowWITA.getFullYear());

  // ambil rentang tanggal
  const { startDate, endDate } = getMonthRangeWITA(filterBulan, filterTahun);

  // buat kondisi filter where database
  const whereClause = {
    jadwal: {
      guruId: loggedInGuruId,
    },
    tanggal: {
      gte: startDate,
      lte: endDate,
    },
  };

  // Tambahin filter kelas dan mapel kalo ada
  if (filterKelasId) {
    whereClause.jadwal.kelasId = filterKelasId;
  }
  if (filterMapelId) {
    whereClause.jadwal.mapelId = filterMapelId;
  }

  // Ambil data
  const [absenData, dataKelas, dataMapel] = await prisma.$transaction([
    // Ambil data laporannya (pake 'whereClause' baru)
    prisma.absenMapel.findMany({
      where: whereClause,
      include: {
        siswa: { select: { nama: true } },
        jadwal: {
          include: {
            kelas: { select: { nama: true } },
            mapel: { select: { nama: true } },
          },
        },
      },
      orderBy: {
        tanggal: "desc",
      },
    }),

    // Ambil data kelas yang di ajar guru ini
    prisma.kelas.findMany({
      where: {
        jadwal: { some: { guruId: loggedInGuruId } },
      },
      select: { id: true, nama: true },
      distinct: ["id"],
    }),

    // Ambil data Mapel yang di ajar guru ini
    prisma.mataPelajaran.findMany({
      where: {
        jadwal: { some: { guruId: loggedInGuruId } },
      },
      select: { id: true, nama: true },
      distinct: ["id"],
    }),
  ]);

  //  Format data buat tabel
  const formattedData = absenData.map((item) => ({
    id: item.id,
    tanggal: item.tanggal,
    status: item.status,
    namaSiswa: item.siswa.nama,
    namaKelas: item.jadwal.kelas.nama,
    namaMapel: item.jadwal.mapel.nama,
  }));

  // buat filter data
  const filters = {
    kelasId: filterKelasId,
    mapelId: filterMapelId,
    bulan: filterBulan,
    tahun: filterTahun,
  };

  return (
    <div>
      <Breadcrumb />
      <div className="flex-1 space-y-4 p-8 pt-6">
        <JadwalReportClient
          absenData={formattedData}
          dataKelas={dataKelas}
          dataMapel={dataMapel}
          filters={filters}
        />
      </div>
    </div>
  );
};

export default RekapMapelPage;
