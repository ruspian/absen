"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToaster } from "@/providers/ToasterProvider";
import { useRouter } from "next/navigation";

const FormPengaturan = ({ initialData }) => {
  const [formData, setFormData] = useState({
    jamMasukSekolah: initialData.jamMasukSekolah,
    jamPulangSekolah: initialData.jamPulangSekolah,
  });
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const toaster = useToaster();

  // Fungsi handle input
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  // Fungsi Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const payload = {
        id: initialData.id,
        jamMasukSekolah: formData.jamMasukSekolah,
        jamPulangSekolah: formData.jamPulangSekolah,
      };

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/pengaturan`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Gagal menyimpan pengaturan");
      }

      toaster.current.show({
        title: "Sukses",
        message: "Pengaturan jam berhasil disimpan",
        type: "success",
        position: "top-center",
        duration: 5000,
      });
      router.refresh(); // Refresh halaman
    } catch (error) {
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

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 bg-background p-4 rounded-md border "
      >
        <div className="flex items-center gap-4">
          {/* Jam Masuk */}
          <div className="flex flex-col gap-2 w-full">
            <Label htmlFor="jamMasukSekolah">Jam Masuk</Label>
            <Input
              id="jamMasukSekolah"
              type="time"
              value={formData.jamMasukSekolah}
              onChange={handleInputChange}
              disabled={isLoading}
              className="rounded-sm "
            />
          </div>

          {/* Jam Pulang */}
          <div className="flex flex-col gap-2 w-full">
            <Label htmlFor="jamPulangSekolah">Jam Pulang</Label>
            <Input
              id="jamPulangSekolah"
              type="time" // Pake tipe 'time'
              value={formData.jamPulangSekolah}
              onChange={handleInputChange}
              disabled={isLoading}
              className="rounded-sm"
            />
          </div>
        </div>

        <Button
          type="submit"
          disabled={isLoading}
          className="cursor-pointer mt-4"
        >
          {isLoading ? "Menyimpan..." : "Simpan Pengaturan"}
        </Button>
      </form>
    </div>
  );
};

export default FormPengaturan;
