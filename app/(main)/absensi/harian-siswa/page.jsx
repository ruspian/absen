// Paksa halaman ini jadi dinamis
export const dynamic = "force-dynamic";

import { prisma } from "@/lib/prisma";
import Breadcrumb from "@/components/Breadcrumb";
import HarianSiswaClient from "@/components/HarianSiswaClient";

// dapatkan tanggal hari ini
const getToday = () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0); // atur waktu menjadi 00:00:00
  return today;
};

const AbsenHarianSiswaPage = async () => {
  const today = getToday();

  // Ambil semua data siswa dan kelas
  const [siswa, kelas] = await prisma.$transaction([
    prisma.siswa.findMany({
      include: {
        kelas: true, // Ambil nama kelasnya
      },
      orderBy: {
        kelas: {
          nama: "asc",
        },
      },
    }),
    prisma.kelas.findMany({
      orderBy: {
        nama: "asc",
      },
    }),
  ]);

  // Ambil data absen yang sudah masuk hari ini
  const absenHariIni = await prisma.absenHarian.findMany({
    where: {
      tanggal: today,
    },
  });

  // GABUNGKAN DATA:
  // mapping semua siswa dan tambahkan status absennya
  const formattedData = siswa.map((s) => {
    // Cari data absen siswa ini di absenHariIni
    const absen = absenHariIni.find((a) => a.siswaId === s.id);

    return {
      id: s.id,
      nama: s.nama,
      nisn: s.nisn,
      kelas: s.kelas.nama,
      kode: s.kode,
      kelasId: s.kelasId,
      status: absen?.status,
      jamMasuk: absen?.jamMasuk || null,
    };
  });

  return (
    <div>
      <Breadcrumb />
      <div className="flex-1 space-y-4 p-8 pt-6">
        <HarianSiswaClient dataSiswa={formattedData} dataKelas={kelas} />
      </div>
    </div>
  );
};

export default AbsenHarianSiswaPage;
