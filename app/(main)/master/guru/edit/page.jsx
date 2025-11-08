"use client";

import Breadcrumb from "@/components/Breadcrumb";
import FormEditGuru from "@/components/form/FormEditGuru";
import { useToaster } from "@/providers/ToasterProvider";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

// Fungsi getGuru
const getGuru = async (id) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/guru/${id}`,
      {
        method: "GET",
        cache: "no-store",
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Gagal mengambil data guru");
    }

    return data;
  } catch (error) {
    throw new Error(error.message || "Kesalahan Server, silahkan coba lagi!");
  }
};

const EditGuruPage = () => {
  const [dataGuru, setDataGuru] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const toaster = useToaster();

  useEffect(() => {
    const fetchData = async () => {
      if (!id) {
        toaster.current.show({
          title: "Error",
          message: "Guru tidak ditemukan, Coba lagi!",
          type: "error",
          position: "top-center",
          duration: 5000,
        });
        setError("ID Guru tidak valid.");
        setIsLoading(false);
        return;
      }

      try {
        setError(null);

        const guru = await getGuru(id);

        setDataGuru(guru);
      } catch (error) {
        setError(error.message);
        toaster.current.show({
          title: "Error",
          message: error.message,
          type: "error",
          position: "top-center",
          duration: 5000,
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id, toaster]);

  // Handle state UI
  if (isLoading) {
    return <div className="p-8">Memuat data guru...</div>;
  }

  if (error) {
    return <div className="p-8 text-red-500">Error: {error}</div>;
  }

  if (!dataGuru) {
    return <div className="p-8">Data guru tidak ditemukan.</div>;
  }

  return (
    <div>
      <Breadcrumb />

      <div className="mt-6">
        <h1 className="font-bold text-3xl mb-4">Edit Data Guru</h1>

        <FormEditGuru initialData={dataGuru} />
      </div>
    </div>
  );
};

export default EditGuruPage;
