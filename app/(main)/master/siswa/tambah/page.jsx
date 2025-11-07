import Breadcrumb from "@/components/Breadcrumb";
import FormTambahSiswa from "@/components/form/FormTambahSiswa";
import { prisma } from "@/lib/prisma";
import React from "react";

const TambahSiswaPage = async () => {
  const kelas = await prisma.kelas.findMany();

  return (
    <div>
      <Breadcrumb />

      <div className="mt-6">
        <h1 className="font-bold text-3xl mb-4">Tambah Data Siswa</h1>
        <FormTambahSiswa kelas={kelas} />
      </div>
    </div>
  );
};

export default TambahSiswaPage;
