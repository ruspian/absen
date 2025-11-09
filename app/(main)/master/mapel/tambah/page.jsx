import Breadcrumb from "@/components/Breadcrumb";
import FormTambahKelas from "@/components/form/FormTambahKelas";
import FormTambahMapel from "@/components/form/FormTambahMapel";
import React from "react";

const TambahMapelPage = async () => {
  return (
    <div>
      <Breadcrumb />

      <div className="mt-6">
        <h1 className="font-bold text-3xl mb-4">Tambah Data Mata Pelajaran</h1>
        <FormTambahMapel />
      </div>
    </div>
  );
};

export default TambahMapelPage;
