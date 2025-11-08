import Breadcrumb from "@/components/Breadcrumb";
import FormTambahKelas from "@/components/form/FormTambahKelas";
import React from "react";
import { prisma } from "@/lib/prisma";

const TambahKelasPage = async () => {
  const getGuru = await prisma.guru.findMany();

  const formatedData = getGuru.map((guru) => ({
    id: guru.id,
    nama: guru.nama,
  }));
  return (
    <div>
      <Breadcrumb />

      <div className="mt-6">
        <h1 className="font-bold text-3xl mb-4">Tambah Data Kelas</h1>
        <FormTambahKelas dataGuru={formatedData} />
      </div>
    </div>
  );
};

export default TambahKelasPage;
