// Paksa halaman ini jadi dinamis
export const dynamic = "force-dynamic";

import { prisma } from "@/lib/prisma";
import Breadcrumb from "@/components/Breadcrumb";
import HarianGuruClient from "@/components/HarianGuruClient";
import { getToday } from "@/lib/formatTime";

const AbsenHarianSiswaPage = async () => {
  const today = getToday();

  // Ambil semua data siswa dan kelas
  const guru = await prisma.guru.findMany();

  // Ambil data absen yang sudah masuk hari ini
  const absenHariIni = await prisma.absenGuruHarian.findMany({
    where: {
      tanggal: today,
    },
  });

  // mapping semua guru dan tambahkan status absennya
  const formattedData = guru.map((g) => {
    // Cari data absen siswa ini di absenHariIni
    const absen = absenHariIni.find((a) => a.guruId === g.id);

    return {
      id: g.id,
      nama: g.nama,
      nip: g.nip || "-",
      nuptk: g.nuptk || "-",
      kode: g.kode,
      status: absen?.status || null,
      jamMasuk: absen?.jamMasuk || null,
      jamPulang: absen?.jamPulang || null,
    };
  });

  return (
    <div>
      <Breadcrumb />
      <div className="flex-1 space-y-4 p-8 pt-6">
        <HarianGuruClient dataGuru={formattedData} />
      </div>
    </div>
  );
};

export default AbsenHarianSiswaPage;
