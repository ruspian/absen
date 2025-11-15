"use client";

import { Label } from "@radix-ui/react-label";
import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useToaster } from "@/providers/ToasterProvider";
import { useRouter } from "next/navigation";

const FormTambahSiswa = ({ kelas }) => {
  const [formData, setFormData] = useState({
    nama: "",
    gender: "",
    kelasId: "",
    nisn: "",
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const toaster = useToaster();
  const router = useRouter();

  //   fungsi validasi form
  const validateForm = () => {
    const newErrors = {};

    //   jika nama siswa kosong
    if (!formData.nama.trim() || !formData.nama) {
      newErrors.nama = "Nama harus diisi!";
    }

    //   jika gender belum dipilih
    if (!formData.gender) {
      newErrors.gender = "Pilih jenis kelamin siswa!";
    }

    //   jika kelas belum dipilih
    if (!formData.kelasId) {
      newErrors.kelasId = "Pilih Kelas!";
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
        gender: formData.gender,
        kelasId: formData.kelasId,
        nisn: formData.nisn,
      };

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/siswa`,
        {
          method: "POST",
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
          message: "Gagal menambahkan siswa",
          type: "error",
          position: "top-center",
          duration: 5000,
        });
        return; // berhenti eksekusi
      }

      // jika berhasil tampilkan toast sukses
      toaster.current.show({
        title: "Sukses",
        message: "Siswa berhasil ditambahkan",
        type: "success",
        position: "top-center",
        duration: 5000,
      });

      // arahkan ke halaman siswa
      router.push("/master/siswa");

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
            Nama Siswa
          </Label>
          <Input
            id="nama"
            type="text"
            placeholder="Nama Siswa"
            value={formData.nama}
            onChange={(e) => handleInputChange("nama", e.target.value)}
            disabled={isLoading}
            className="rounded-sm"
          />
          {errors.nama && <p className="text-sm text-red-600">{errors.nama}</p>}
        </div>

        {/* nisn */}
        <div className="flex flex-col gap-2">
          <Label htmlFor="nisn" className="text-xs">
            NISN
          </Label>
          <Input
            id="nisn"
            type="text"
            placeholder="NISN"
            value={formData.nisn}
            onChange={(e) => handleInputChange("nisn", e.target.value)}
            disabled={isLoading}
            className="rounded-sm"
          />
        </div>

        {/* Gender */}
        <div className="flex flex-col gap-2">
          <Label htmlFor="gender" className="text-xs">
            Jenis Kelamin
          </Label>
          <select
            name="gender"
            id="gender"
            className="p-2 border rounded-sm bg-background"
            value={formData.gender}
            onChange={(e) => handleInputChange("gender", e.target.value)}
            disabled={isLoading}
          >
            <option value="">Pilih Jenis Kelamin</option>
            <option value="LAKI_LAKI">Laki-laki</option>
            <option value="PEREMPUAN">Perempuan</option>
          </select>
          {errors.gender && (
            <p className="text-sm text-red-600">{errors.gender}</p>
          )}
        </div>

        {/* Gender */}
        <div className="flex flex-col gap-2">
          <Label htmlFor="kelasId" className="text-xs">
            Kelas
          </Label>
          <select
            name="kelasId"
            id="kelasId"
            className="p-2 border rounded-sm bg-background"
            value={formData.kelasId}
            onChange={(e) => handleInputChange("kelasId", e.target.value)}
            disabled={isLoading}
          >
            <option value="">Pilih Kelas</option>
            {kelas.map((item, index) => (
              <option key={index} value={item.id}>
                {item.nama}
              </option>
            ))}
          </select>
          {errors.kelasId && (
            <p className="text-sm text-red-600">{errors.kelasId}</p>
          )}
        </div>

        <Button type="submit" disabled={isLoading} className="cursor-pointer">
          Simpan
        </Button>
      </form>
    </div>
  );
};

export default FormTambahSiswa;
