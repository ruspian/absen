"use client";

import Breadcrumb from "@/components/Breadcrumb";
import React, { useEffect, useState } from "react";
import FormTambahJadwal from "@/components/form/FormTambahJadwal";
import { getGuru, getKelas, getMapel } from "@/lib/data";
import { useToaster } from "@/providers/ToasterProvider";

const TambahJadwalPage = () => {
  const [dataGuru, setDataGuru] = useState([]);
  const [dataKelas, setDataKelas] = useState([]);
  const [dataMapel, setDataMapel] = useState([]);

  const toaster = useToaster();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [guru, kelas, mapel] = await Promise.all([
          getGuru(),
          getKelas(),
          getMapel(),
        ]);

        setDataGuru(guru);
        setDataKelas(kelas);
        setDataMapel(mapel);
      } catch (error) {
        toaster.current.show({
          title: "Error",
          message: error.message,
          type: "error",
          position: "top-center",
          duration: 5000,
        });
      }
    };

    fetchData();
  }, [toaster]);

  return (
    <div>
      <Breadcrumb />

      <div className="mt-6">
        <h1 className="font-bold text-3xl mb-4">Tambah Jadwal Pelajaran</h1>
        <FormTambahJadwal
          dataGuru={dataGuru}
          dataKelas={dataKelas}
          dataMapel={dataMapel}
        />
      </div>
    </div>
  );
};

export default TambahJadwalPage;
