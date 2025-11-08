"use client";

import Breadcrumb from "@/components/Breadcrumb";
import FormEditSiswa from "@/components/form/FormEditSiswa";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState, useCallback } from "react";

const getSiswa = async (id) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/siswa/${id}`,
      {
        method: "GET",
        cache: "no-store",
      }
    );
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "Gagal mengambil data siswa");
    }
    return data;
  } catch (error) {
    // Lempar error yang lebih spesifik
    throw new Error(error.message || "Kesalahan Server, silahkan coba lagi!");
  }
};

const getKelas = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/kelas`,
      {
        method: "GET",
        next: { revalidate: 240 },
      }
    );
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "Gagal mengambil data kelas");
    }
    return data;
  } catch (error) {
    throw new Error(error.message || "Kesalahan Server, silahkan coba lagi!");
  }
};

const EditSiswaPage = () => {
  const [dataSiswa, setDataSiswa] = useState(null);
  const [dataKelas, setDataKelas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const fetchData = useCallback(async () => {
    // Cek jika ID tidak ada

    setIsLoading(false);

    try {
      setIsLoading(true);

      const [siswa, kelas] = await Promise.all([getSiswa(id), getKelas()]);

      setDataSiswa(siswa);
      setDataKelas(kelas);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (isLoading) {
    return <div className="p-8 flex justify-center">Memuat data...</div>;
  }

  if (!dataSiswa) {
    return (
      <div className="p-8 flex justify-center">Data siswa tidak ditemukan.</div>
    );
  }

  return (
    <div>
      <Breadcrumb />

      <div className="mt-6">
        <h1 className="font-bold text-3xl mb-4">Edit Data Siswa</h1>

        <FormEditSiswa kelas={dataKelas} siswa={dataSiswa} />
      </div>
    </div>
  );
};

export default EditSiswaPage;
