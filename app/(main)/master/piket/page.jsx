// Paksa dinamis
export const dynamic = "force-dynamic";

import Breadcrumb from "@/components/Breadcrumb";
import JadwalPiketClient from "@/components/JadwalPiketClient";
import { prisma } from "@/lib/prisma";
import React from "react";

const JadwalPiketPage = async () => {
  // Ambil semua guru
  const dataGuru = await prisma.guru.findMany({
    select: {
      id: true,
      nama: true,
    },
    orderBy: {
      nama: "asc",
    },
  });

  // Ambil jadwal piket yang udah ada
  const jadwalPiket = await prisma.jadwalPiket.findMany({
    include: {
      guru: {
        // Ambil nama guru yang nempel
        select: {
          nama: true,
        },
      },
    },
    orderBy: {
      // Urutin berdasarkan hari
      hari: "asc",
    },
  });

  // Format data
  const formattedJadwal = jadwalPiket.map((item) => ({
    id: item.id,
    hari: item.hari,
    namaGuru: item.guru.nama,
    guruId: item.guruId,
  }));

  return (
    <div>
      <Breadcrumb />
      <div className="flex-1 space-y-4 p-8 pt-6">
        <JadwalPiketClient dataJadwal={formattedJadwal} dataGuru={dataGuru} />
      </div>
    </div>
  );
};

export default JadwalPiketPage;
