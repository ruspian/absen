"use client";

import Breadcrumb from "@/components/Breadcrumb";
import React, { useEffect, useState } from "react";
import { getGuru, getJadwalById, getKelas, getMapel } from "@/lib/data";
import { useToaster } from "@/providers/ToasterProvider";
import { useSearchParams } from "next/navigation";
import FormEditJadwal from "@/components/form/formEditJadwal";

const EditJadwalPage = () => {
  const [dataGuru, setDataGuru] = useState([]);
  const [dataKelas, setDataKelas] = useState([]);
  const [dataMapel, setDataMapel] = useState([]);
  const [dataJadwal, setDataJadwal] = useState(null);

  const toaster = useToaster();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [guru, kelas, mapel, jadwal] = await Promise.all([
          getGuru(),
          getKelas(),
          getMapel(),
          getJadwalById(id),
        ]);

        setDataGuru(guru);
        setDataKelas(kelas);
        setDataMapel(mapel);
        setDataJadwal(jadwal);
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
  }, [toaster, id]);

  return (
    <div>
      <Breadcrumb />

      <div className="mt-6">
        <h1 className="font-bold text-3xl mb-4">Edit Jadwal Pelajaran</h1>
        <FormEditJadwal
          dataGuru={dataGuru}
          dataKelas={dataKelas}
          dataMapel={dataMapel}
          dataJadwal={dataJadwal}
        />
      </div>
    </div>
  );
};

export default EditJadwalPage;
