import Breadcrumb from "@/components/Breadcrumb";
import FormTambahGuru from "@/components/form/FormTambahGuru";
import React from "react";

const TambahGuruPage = () => {
  return (
    <div>
      <Breadcrumb />

      <div className="mt-6">
        <h1 className="font-bold text-3xl mb-4">Tambah Data Guru</h1>
        <FormTambahGuru />
      </div>
    </div>
  );
};

export default TambahGuruPage;
