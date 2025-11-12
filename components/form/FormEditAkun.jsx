"use client";

import React, { useState, useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToaster } from "@/providers/ToasterProvider";
import { useRouter } from "next/navigation";

const FormEditAkun = ({ initialData, dataGuru }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "GURU",
    guruId: "",
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const toaster = useToaster();

  //   isi form
  useEffect(() => {
    if (initialData) {
      setFormData({
        name: initialData.name || "",
        email: initialData.email || "",
        password: "", // Selalu kosongin password
        role: initialData.role || "GURU",
        guruId: initialData.guruProfil?.id || "",
      });
    }
  }, [initialData]);

  // Fungsi validasi
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Nama harus diisi";
    if (!formData.email) newErrors.email = "Email harus diisi";
    if (formData.role === "GURU" && !formData.guruId) {
      newErrors.guruId = "Pilih Guru!";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Fungsi handle input change
  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  // Fungsi Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      // Siapin payload
      const payload = {
        name: formData.name,
        email: formData.email,
        role: formData.role,
        guruId: formData.role === "GURU" ? formData.guruId : null,
      };

      // Kalo password diisi, baru tambahin ke payload kalau tidak biarkan password lama
      if (formData.password.trim() !== "") {
        payload.password = formData.password;
      }

      // Panggil API PATCH
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/pengguna/akun/${initialData.id}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();
      if (!response.ok) {
        if (response.status === 400 && data.message.includes("P2002")) {
          throw new Error("Email ini sudah terpakai oleh akun lain.");
        }
        throw new Error(data.message || "Gagal update akun");
      }

      toaster.current.show({
        title: "Sukses",
        message: "Akun berhasil di-update",
        type: "success",
        position: "top-center",
        duration: 5000,
      });
      router.push("/pengguna/akun");
      router.refresh();
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
        className="flex flex-col gap-4 bg-background p-4 rounded-md border"
      >
        {/* Nama */}
        <div className="flex flex-col gap-2">
          <Label htmlFor="name">Nama Lengkap</Label>
          <Input
            id="name"
            type="text"
            placeholder="Nama lengkap"
            value={formData.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
            disabled={isLoading}
          />
          {errors.name && <p className="text-sm text-red-600">{errors.name}</p>}
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Email </Label>
          <Input
            id="email"
            type="email"
            placeholder="contoh@email.com"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            disabled={isLoading}
          />
          {errors.email && (
            <p className="text-sm text-red-600">{errors.email}</p>
          )}
        </div>

        {/* Password */}
        <div className="flex flex-col gap-2">
          <Label htmlFor="password">Password Baru (Opsional)</Label>
          <Input
            id="password"
            type="password"
            placeholder="Isi jika ingin ganti password"
            value={formData.password}
            onChange={(e) => handleInputChange("password", e.target.value)}
            disabled={isLoading}
          />
        </div>

        {/* Role */}
        <div className="flex flex-col gap-2">
          <Label htmlFor="role">Role Akun</Label>
          <Select
            value={formData.role}
            onValueChange={(value) => {
              handleInputChange("role", value);
              // Kalo ganti jadi ADMIN, hapus link guru
              if (value === "ADMIN") {
                handleInputChange("guruId", "");
                handleInputChange("isPiket", false);
              }
            }}
            disabled={isLoading}
          >
            <SelectTrigger>
              <SelectValue placeholder="Pilih Role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="GURU">GURU</SelectItem>
              <SelectItem value="ADMIN">ADMIN</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/*  Link ke Guru & Checkbox Piket */}
        {formData.role === "GURU" && (
          <div className="flex flex-col gap-4 p-4 border border-dashed rounded-md">
            {/* Link ke Guru */}
            <div className="flex flex-col gap-2">
              <Label htmlFor="guruId">Link ke Profil Guru</Label>
              <Select
                value={formData.guruId}
                onValueChange={(value) => handleInputChange("guruId", value)}
                disabled={isLoading}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Pilih Profil Guru" />
                </SelectTrigger>
                <SelectContent>
                  {dataGuru.map((guru) => (
                    <SelectItem key={guru.id} value={guru.id}>
                      {guru.nama}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.guruId && (
                <p className="text-sm text-red-600">{errors.guruId}</p>
              )}
            </div>
          </div>
        )}

        <Button type="submit" disabled={isLoading} className="cursor-pointer">
          {isLoading ? "Menyimpan..." : "Update Akun"}
        </Button>
      </form>
    </div>
  );
};

export default FormEditAkun;
