"use client";

import { Label } from "@radix-ui/react-label";
import React, { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useToaster } from "@/providers/ToasterProvider";
import { useRouter } from "next/navigation";

const FormEditKelas = ({ initialData, dataGuru }) => {
  const [formData, setFormData] = useState({
    nama: "",
    waliKelasId: "",
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const toaster = useToaster();
  const router = useRouter();

  useEffect(() => {
    if (initialData) {
      setFormData({
        nama: initialData.nama,
        waliKelasId: initialData.waliKelasId,
      });
    }
  }, [initialData]);

  //   fungsi validasi form
  const validateForm = () => {
    const newErrors = {};

    //   jika nama siswa kosong
    if (!formData.nama.trim() || !formData.nama) {
      newErrors.nama = "Nama harus diisi!";
    }

    //   jika wali kelas kosong
    if (!formData.waliKelasId.trim() || !formData.waliKelasId) {
      newErrors.waliKelasId = "Wali Kelas harus diisi!";
    }

    //   set error ke state
    setErrors(newErrors);

    //   kembalikan true jika tidak ada error
    return Object.keys(newErrors).length === 0;
  };

  //   fungsi saat input berubah
  const handleInputChange = (field, value) => {
    // set inputan ke state
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    // jika ada error
    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: undefined,
      }));
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    // jika fungsi validate form tidak terpenuhi
    if (!validateForm()) return;

    try {
      setIsLoading(true);

      const payload = {
        nama: formData.nama,
        waliKelasId: formData.waliKelasId,
      };

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/kelas/${initialData.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      // jika gagal
      if (!response.ok) {
        // tampilkan toast gagal
        toaster.current.show({
          title: "Error",
          message: "Gagal edit kelas!",
          type: "error",
          position: "top-center",
          duration: 5000,
        });
        return; // berhenti eksekusi
      }

      // jika berhasil tampilkan toast sukses
      toaster.current.show({
        title: "Sukses",
        message: "Kelas berhasil diedit!",
        type: "success",
        position: "top-center",
        duration: 5000,
      });

      // arahkan ke halaman siswa
      router.push("/master/kelas");

      //   refresh router
      router.refresh();
    } catch (error) {
      console.error("Fetch Error", error);
      toaster.current.show({
        title: "Koneksi Error",
        message: "Gagal terhubung ke server. Coba lagi nanti.",
        type: "error",
        position: "top-center",
        duration: 5000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 bg-background p-4 rounded-md"
      >
        {/* nama */}
        <div className="flex flex-col gap-2">
          <Label htmlFor="nama" className="text-xs">
            Nama Kelas
          </Label>
          <Input
            id="nama"
            type="text"
            placeholder="Nama Kelas"
            value={formData.nama}
            onChange={(e) => handleInputChange("nama", e.target.value)}
            disabled={isLoading}
            className="rounded-sm"
          />
          {errors.nama && <p className="text-sm text-red-600">{errors.nama}</p>}
        </div>

        {/* wali ke;as */}
        <div className="flex flex-col gap-2">
          <Label htmlFor="waliKelasId" className="text-xs">
            Wali Kelas
          </Label>
          <select
            name="waliKelasId"
            id="waliKelasId"
            className="p-2 border rounded-sm bg-background"
            value={formData.waliKelasId}
            onChange={(e) => handleInputChange("waliKelasId", e.target.value)}
            disabled={isLoading}
          >
            <option value="">Pilih Wali Kelas</option>
            {dataGuru.map((guru) => (
              <option key={guru.id} value={guru.id}>
                {guru.nama}
              </option>
            ))}
          </select>
          {errors.gender && (
            <p className="text-sm text-red-600">{errors.gender}</p>
          )}
        </div>

        <Button type="submit" disabled={isLoading} className="cursor-pointer">
          {isLoading ? "Tunggu Sebentar..." : "Tambah"}
        </Button>
      </form>
    </div>
  );
};

export default FormEditKelas;
