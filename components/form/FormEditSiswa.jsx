"use client";

import { Label } from "@radix-ui/react-label";
import React, { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useToaster } from "@/providers/ToasterProvider";
import { useRouter } from "next/navigation";

const FormEditSiswa = ({ kelas, siswa }) => {
  const [formData, setFormData] = useState({
    nama: "",
    nisn: "",
    kode: "",
    gender: "",
    kelasId: "",
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const toaster = useToaster();
  const router = useRouter();

  useEffect(() => {
    if (siswa) {
      setFormData({
        nama: siswa.nama || "",
        nisn: siswa.nisn || "",
        kode: siswa.kode || "",
        gender: siswa.gender || "",
        kelasId: siswa.kelasId || "",
      });
    }
  }, [siswa]);

  //   fungsi validasi form
  const validateForm = () => {
    const newErrors = {};

    if (!formData.nama.trim() || !formData.nama) {
      newErrors.nama = "Nama harus diisi!";
    }
    if (!formData.kode.trim() || !formData.kode) {
      newErrors.kode = "Kode harus diisi!";
    }
    if (!formData.nisn.trim() || !formData.nisn) {
      newErrors.nisn = "NISN harus diisi!";
    }
    if (!formData.gender) {
      newErrors.gender = "Pilih jenis kelamin siswa!";
    }
    if (!formData.kelasId) {
      newErrors.kelasId = "Pilih Kelas!";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  //   fungsi saat input berubah
  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: undefined,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    //  Cek apakah 'siswa.id' ada
    if (!siswa || !siswa.id) {
      toaster.current.show({
        title: "Error",
        message: "ID Siswa tidak ditemukan, tidak bisa update.",
        type: "error",
        position: "top-center",
        duration: 5000,
      });
      return;
    }

    try {
      setIsLoading(true);

      const payload = {
        nama: formData.nama,
        kode: formData.kode,
        gender: formData.gender,
        kelasId: formData.kelasId,
        nisn: formData.nisn,
      };

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/siswa/${siswa.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const responseData = await response.json();

      if (!response.ok) {
        toaster.current.show({
          title: "Error",
          message: responseData.message || "Gagal memperbarui siswa",
          type: "error",
          position: "top-center",
          duration: 5000,
        });
        return;
      }

      toaster.current.show({
        title: "Sukses",
        message: "Siswa berhasil diperbarui",
        type: "success",
        position: "top-center",
        duration: 5000,
      });

      router.push("/master/siswa");
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
        {/* kode */}
        <div className="flex flex-col gap-2">
          <Label htmlFor="kode" className="text-xs">
            Kode
          </Label>
          <Input
            id="kode"
            type="text"
            placeholder="Kode"
            value={formData.kode}
            onChange={(e) => handleInputChange("kode", e.target.value)}
            disabled={isLoading}
            className="rounded-sm"
          />
          {errors.kode && <p className="text-sm text-red-600">{errors.kode}</p>}
        </div>

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
          {errors.nisn && <p className="text-sm text-red-600">{errors.nisn}</p>}
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

        {/* Kelas */}
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
            {(kelas || []).map((item, index) => (
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
          {isLoading ? "Memperbarui..." : "Perbarui Data"}
        </Button>
      </form>
    </div>
  );
};

export default FormEditSiswa;
