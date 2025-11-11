// Paksa halaman ini jadi dinamis
export const dynamic = "force-dynamic";

import Breadcrumb from "@/components/Breadcrumb";
import LaporanHarianClient from "@/components/LaporanHarianClient";
import { prisma } from "@/lib/prisma";
import React from "react";

const TIMEZONE = "Asia/Makassar"; // WITA

// fungsi ambil hari ini wita
const getToday = () => {
  const todayString = new Date().toLocaleDateString("en-CA", {
    timeZone: TIMEZONE,
  });
  return new Date(todayString);
};

const LaporanHarianPage = async ({ searchParams }) => {
  const { tanggal, kelasId } = await searchParams;
  // cari tanggal yg dipilih
  const selectedDate = tanggal
    ? new Date(tanggal) // Kalo ada tanggal di URL
    : getToday(); // Kalo nggak, pake hari ini

  // cari kelas yg dipilih
  const selectedKelasId = kelasId || null;

  //    ambil semua data siswa, guru, dan data absen harian di tanggal yg dipilih
  const [dataKelas, semuaGuru, absenSiswaHariIni, absenGuruHariIni] =
    await prisma.$transaction([
      prisma.kelas.findMany({ orderBy: { nama: "asc" } }),
      prisma.guru.findMany({ orderBy: { nama: "asc" } }),
      prisma.absenHarian.findMany({
        where: { tanggal: selectedDate },
      }),
      prisma.absenGuruHarian.findMany({
        where: { tanggal: selectedDate },
      }),
    ]);

  // 3. Ambil data siswa kalo kelas sudah dipilih
  let siswaDiKelas = []; // Default array kosong
  if (selectedKelasId) {
    siswaDiKelas = await prisma.siswa.findMany({
      where: {
        kelasId: selectedKelasId, // <-- Filter di sini
      },
      include: { kelas: true },
      orderBy: { nama: "asc" },
    });
  }

  //   gabungkan data siswa
  const formattedDataSiswa = siswaDiKelas.map((siswa) => {
    const absen = absenSiswaHariIni.find((a) => a.siswaId === siswa.id);
    return {
      id: siswa.id,
      nama: siswa.nama,
      nisn: siswa.nisn,
      kode: siswa.kode,
      kelas: siswa.kelas.nama,
      kelasId: siswa.kelasId,
      tanggal: absen?.tanggal || null,
      status: absen?.status || null,
      jamMasuk: absen?.jamMasuk || null,
      jamPulang: absen?.jamPulang || null,
    };
  });

  // Gabungkan data guru
  const formattedDataGuru = semuaGuru.map((guru) => {
    const absen = absenGuruHariIni.find((a) => a.guruId === guru.id);
    return {
      id: guru.id,
      nama: guru.nama,
      nip: guru.nip,
      nuptk: guru.nuptk,
      kode: guru.kode,
      tanggal: absen?.tanggal || null,
      status: absen?.status || null, // null = Belum Absen
      jamMasuk: absen?.jamMasuk || null,
      jamPulang: absen?.jamPulang || null,
    };
  });

  //  Hitung Statistik Cepat
  const totalSiswa = await prisma.siswa.count(); // Total semua siswa;
  const siswaHadir = formattedDataSiswa.filter(
    (s) => s.status === "HADIR"
  ).length;

  const siswaSakit = formattedDataSiswa.filter(
    (s) => s.status === "SAKIT"
  ).length;

  const siswaIzin = formattedDataSiswa.filter(
    (s) => s.status === "IZIN"
  ).length;

  const siswaAlpa = formattedDataSiswa.filter(
    (s) => s.status === "ALPA"
  ).length;

  const totalGuru = semuaGuru.length;
  const guruHadir = formattedDataGuru.filter(
    (g) => g.status === "HADIR"
  ).length;

  const guruSakit = formattedDataGuru.filter(
    (g) => g.status === "SAKIT"
  ).length;

  const guruIzin = formattedDataGuru.filter((g) => g.status === "IZIN").length;

  const guruAlpa = formattedDataGuru.filter((g) => g.status === "ALPA").length;

  const stats = {
    siswa: {
      total: totalSiswa,
      hadir: siswaHadir,
      sakit: siswaSakit,
      izin: siswaIzin,
      alpa: siswaAlpa,
    },
    guru: {
      total: totalGuru,
      hadir: guruHadir,
      sakit: guruSakit,
      izin: guruIzin,
      alpa: guruAlpa,
    },
  };

  return (
    <div>
      <Breadcrumb />

      <div className="flex-1 space-y-4 p-8 pt-6">
        <LaporanHarianClient
          dataSiswa={formattedDataSiswa}
          dataGuru={formattedDataGuru}
          dataKelas={dataKelas}
          statistik={stats}
          selectedDate={selectedDate.toISOString()}
          selectedKelasId={selectedKelasId}
        />
      </div>
    </div>
  );
};

export default LaporanHarianPage;
