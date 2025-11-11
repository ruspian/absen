export const revalidate = 60; // Revalidasi tiap 60 detik

import Breadcrumb from "@/components/Breadcrumb";
import { prisma } from "@/lib/prisma";
import React from "react";
import LaporanBulananClient from "@/components/LaporanBulananClient";

const LaporanBulananPage = async () => {
  // Ambil SEMUA data master untuk filter
  const [dataSiswa, dataGuru, dataKelas] = await prisma.$transaction([
    prisma.siswa.findMany({
      select: {
        id: true,
        nama: true,
        kelasId: true,
      },
      orderBy: { nama: "asc" },
    }),
    prisma.guru.findMany({
      select: {
        id: true,
        nama: true,
      },
      orderBy: { nama: "asc" },
    }),
    prisma.kelas.findMany({
      orderBy: { nama: "asc" },
    }),
  ]);

  return (
    <div>
      <Breadcrumb />
      <div className="flex-1 space-y-4 p-8 pt-6">
        <LaporanBulananClient
          dataSiswa={dataSiswa}
          dataGuru={dataGuru}
          dataKelas={dataKelas}
        />
      </div>
    </div>
  );
};

export default LaporanBulananPage;
