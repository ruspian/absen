"use client";

import { Label } from "@radix-ui/react-label";
import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useToaster } from "@/providers/ToasterProvider";
import { useRouter } from "next/navigation";

const FormTambahGuru = () => {
  const [formData, setFormData] = useState({
    nama: "",
    gender: "",
    nip: "",
    nuptk: "",
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

    //   jika nip kosong
    if (!formData.nip) {
      newErrors.nip = "NIP harus diisi!";
    }

    // jika nuptk kosong
    if (!formData.nuptk) {
      newErrors.nuptk = "NUPTK harus diisi!";
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
        nip: formData.nip,
        nuptk: formData.nuptk,
      };

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/guru`,
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
          message: "Gagal menambahkan guru",
          type: "error",
          position: "top-center",
          duration: 5000,
        });
        return; // berhenti eksekusi
      }

      // jika berhasil tampilkan toast sukses
      toaster.current.show({
        title: "Sukses",
        message: "Guru berhasil ditambahkan",
        type: "success",
        position: "top-center",
        duration: 5000,
      });

      // arahkan ke halaman siswa
      router.push("/master/guru");

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
            Nama Guru
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

        {/* nip */}
        <div className="flex flex-col gap-2">
          <Label htmlFor="nip" className="text-xs">
            NIP
          </Label>
          <Input
            id="nip"
            type="text"
            placeholder="NIP"
            value={formData.nip}
            onChange={(e) => handleInputChange("nip", e.target.value)}
            disabled={isLoading}
            className="rounded-sm"
          />
        </div>

        {/* nuptk */}
        <div className="flex flex-col gap-2">
          <Label htmlFor="nuptk" className="text-xs">
            NUPTK
          </Label>
          <Input
            id="nuptk"
            type="text"
            placeholder="NUPTK"
            value={formData.nuptk}
            onChange={(e) => handleInputChange("nuptk", e.target.value)}
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

        <Button type="submit" disabled={isLoading} className="cursor-pointer">
          {isLoading ? "Tunggu Sebentar..." : "Tambah"}
        </Button>
      </form>
    </div>
  );
};

export default FormTambahGuru;
