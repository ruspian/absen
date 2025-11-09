"use client";

import { Label } from "@radix-ui/react-label";
import React, { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useToaster } from "@/providers/ToasterProvider";
import { useRouter } from "next/navigation";
import { getTimeFromDate } from "@/lib/formatTime";

const FormEditJadwal = ({ dataGuru, dataKelas, dataMapel, dataJadwal }) => {
  const [formData, setFormData] = useState({
    hari: "",
    jamMulai: "",
    jamSelesai: "",
    mataPelajaran: "",
    guru: "",
    kelas: "",
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const toaster = useToaster();
  const router = useRouter();

  useEffect(() => {
    if (dataJadwal) {
      setFormData({
        hari: dataJadwal.hari,
        jamMulai: getTimeFromDate(dataJadwal.jamMulai),
        jamSelesai: getTimeFromDate(dataJadwal.jamSelesai),
        mataPelajaran: dataJadwal.mapelId,
        guru: dataJadwal.guruId,
        kelas: dataJadwal.kelasId,
      });
    }
  }, [dataJadwal]);

  //   fungsi validasi form
  const validateForm = () => {
    const newErrors = {};

    if (!formData.hari.trim() || !formData.hari) {
      newErrors.hari = "Hari harus diisi!";
    }

    if (!formData.jamMulai.trim() || !formData.jamMulai) {
      newErrors.jamMulai = "Jam mulai harus diisi!";
    }

    if (!formData.jamSelesai.trim() || !formData.jamSelesai) {
      newErrors.jamSelesai = "Jam Selesai harus diisi!";
    }

    if (!formData.mataPelajaran.trim() || !formData.mataPelajaran) {
      newErrors.mataPelajaran = "Mata Pelajaran harus diisi!";
    }

    if (!formData.guru.trim() || !formData.guru) {
      newErrors.guru = "Guru harus diisi!";
    }

    if (!formData.kelas.trim() || !formData.kelas) {
      newErrors.kelas = "Kelas harus diisi!";
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

      const jamMulaiISO = new Date();
      jamMulaiISO.setHours(
        parseInt(formData.jamMulai.split(":")[0]), // Jam
        parseInt(formData.jamMulai.split(":")[1]), // Menit
        0,
        0 // Set detik & milidetik ke 0
      );

      const jamSelesaiISO = new Date();
      jamSelesaiISO.setHours(
        parseInt(formData.jamSelesai.split(":")[0]), // Jam
        parseInt(formData.jamSelesai.split(":")[1]), // Menit
        0,
        0 // Set detik & milidetik ke 0
      );

      const payload = {
        hari: formData.hari,
        jamMulai: jamMulaiISO.toISOString(),
        jamSelesai: jamSelesaiISO.toISOString(),
        mataPelajaran: formData.mataPelajaran,
        guru: formData.guru,
        kelas: formData.kelas,
      };

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/jadwal/${dataJadwal.id}`,
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
          message: "Gagal edit jadwal",
          type: "error",
          position: "top-center",
          duration: 5000,
        });
        return; // berhenti eksekusi
      }

      // jika berhasil tampilkan toast sukses
      toaster.current.show({
        title: "Sukses",
        message: "Jadwal berhasil diedit",
        type: "success",
        position: "top-center",
        duration: 5000,
      });

      // arahkan ke halaman siswa
      router.push("/master/jadwal");

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
        {/* hari */}
        <div className="flex flex-col gap-2">
          <Label htmlFor="hari" className="text-xs">
            Hari
          </Label>
          <Input
            id="hari"
            type="text"
            placeholder="Hari"
            value={formData.hari}
            onChange={(e) => handleInputChange("hari", e.target.value)}
            disabled={isLoading}
            className="rounded-sm"
          />
          {errors.hari && <p className="text-sm text-red-600">{errors.hari}</p>}
        </div>

        <div className="flex gap-4">
          {/* jam mulai */}
          <div className="flex-1 gap-2">
            <Label htmlFor="jamMulai" className="text-xs">
              Jam Mulai
            </Label>
            <Input
              id="jamMulai"
              type="time"
              placeholder="Jam Mulai"
              value={formData.jamMulai}
              onChange={(e) => handleInputChange("jamMulai", e.target.value)}
              disabled={isLoading}
              className="rounded-sm"
            />
            {errors.jamMulai && (
              <p className="text-sm text-red-600">{errors.jamMulai}</p>
            )}
          </div>

          {/* jam selesai */}
          <div className="flex-1 gap-2">
            <Label htmlFor="jamSelesai" className="text-xs">
              Jam Selesai
            </Label>
            <Input
              id="jamSelesai"
              type="time"
              placeholder="Jam Selesai"
              value={formData.jamSelesai}
              onChange={(e) => handleInputChange("jamSelesai", e.target.value)}
              disabled={isLoading}
              className="rounded-sm"
            />
            {errors.jamSelesai && (
              <p className="text-sm text-red-600">{errors.jamSelesai}</p>
            )}
          </div>
        </div>

        {/* Mata Pelajaran */}
        <div className="flex flex-col gap-2">
          <Label htmlFor="mataPelajaran" className="text-xs">
            Mata Pelajaran
          </Label>
          <select
            name="mataPelajaran"
            id="mataPelajaran"
            className="p-2 border rounded-sm bg-background"
            value={formData.mataPelajaran}
            onChange={(e) => handleInputChange("mataPelajaran", e.target.value)}
            disabled={isLoading}
          >
            <option value="">Pilih Mata Pelajaran</option>
            {dataMapel.map((mapel) => (
              <option key={mapel.id} value={mapel.id}>
                {mapel.nama}
              </option>
            ))}
          </select>
          {errors.mataPelajaran && (
            <p className="text-sm text-red-600">{errors.mataPelajaran}</p>
          )}
        </div>

        {/* guru */}
        <div className="flex flex-col gap-2">
          <Label htmlFor="guru" className="text-xs">
            Guru Mapel
          </Label>
          <select
            name="guru"
            id="guru"
            className="p-2 border rounded-sm bg-background"
            value={formData.guru}
            onChange={(e) => handleInputChange("guru", e.target.value)}
            disabled={isLoading}
          >
            <option value="">Pilih Guru</option>
            {dataGuru.map((guru) => (
              <option key={guru.id} value={guru.id}>
                {guru.nama}
              </option>
            ))}
          </select>
          {errors.guru && <p className="text-sm text-red-600">{errors.guru}</p>}
        </div>

        {/* kelas */}
        <div className="flex flex-col gap-2">
          <Label htmlFor="kelas" className="text-xs">
            Kelas
          </Label>
          <select
            name="kelas"
            id="kelas"
            className="p-2 border rounded-sm bg-background"
            value={formData.kelas}
            onChange={(e) => handleInputChange("kelas", e.target.value)}
            disabled={isLoading}
          >
            <option value="">Pilih Kelas</option>
            {dataKelas.map((kelas) => (
              <option key={kelas.id} value={kelas.id}>
                {kelas.nama}
              </option>
            ))}
          </select>
          {errors.kelas && (
            <p className="text-sm text-red-600">{errors.kelas}</p>
          )}
        </div>

        <Button type="submit" disabled={isLoading} className="cursor-pointer">
          {isLoading ? "Tunggu Sebentar..." : "Tambah"}
        </Button>
      </form>
    </div>
  );
};

export default FormEditJadwal;
