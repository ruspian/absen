import Breadcrumb from "@/components/Breadcrumb";
import SiswaClient from "@/components/SiswaClient";
import { prisma } from "@/lib/prisma";
import React from "react";

const SiswaPage = async () => {
  // ambil data siswa dari database
  const siswa = await prisma.siswa.findMany({
    include: {
      kelas: true,
    },
    orderBy: {
      nama: "asc",
    },
  });

  // format data
  const formatedData = siswa.map((item, index) => ({
    id: item.id,
    nama: item.nama,
    nisn: item.nisn,
    kode: item.kode,
    gender: item.gender,
    kelas: item.kelas.nama,
  }));
  return (
    <div className="flex-col">
      <Breadcrumb />
      <div className="flex-1 space-y-4 p-8 pt-6">
        {/* Kirim data yang sudah diformat ke Client Component */}
        <SiswaClient data={formatedData} />
      </div>
    </div>
  );
};

export default SiswaPage;
