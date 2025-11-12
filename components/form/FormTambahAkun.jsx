"use client";

import React, { useState } from "react";
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

const FormTambahAkun = ({ dataGuru }) => {
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

  // Fungsi validasi
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Nama harus diisi";
    if (!formData.email) newErrors.email = "Email harus diisi";
    if (!formData.password) newErrors.password = "Password harus diisi";
    if (formData.role === "GURU" && !formData.guruId) {
      // Kalo role-nya GURU, guruId wajib diisi
      newErrors.guruId = "Pilih profil guru untuk di-link";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Fungsi handle input
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
      const payload = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        role: formData.role,
        guruId: formData.role === "GURU" ? formData.guruId : undefined,
      };

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/pengguna/akun`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();
      if (!response.ok) {
        if (response.status === 400 && data.message.includes("P2002")) {
          throw new Error("Email ini sudah terpakai.");
        }
        throw new Error(data.message || "Gagal membuat akun");
      }

      toaster.current.show({
        title: "Sukses",
        message: "Akun berhasil dibuat",
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
          <Label htmlFor="email">Email</Label>
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
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            placeholder="Minimal 6 karakter"
            value={formData.password}
            onChange={(e) => handleInputChange("password", e.target.value)}
            disabled={isLoading}
          />
          {errors.password && (
            <p className="text-sm text-red-600">{errors.password}</p>
          )}
        </div>

        {/* Role */}
        <div className="flex flex-col gap-2">
          <Label htmlFor="role">Role Akun</Label>
          <Select
            value={formData.role}
            onValueChange={(value) => handleInputChange("role", value)}
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

        {/*  Link ke Guru */}
        {formData.role === "GURU" && (
          <div className="flex flex-col gap-2 p-4 border border-dashed rounded-md">
            <Label htmlFor="guruId">Link ke Profil Guru</Label>
            <p className="text-xs text-muted-foreground">
              Pilih guru yang sesuai untuk akun login.
            </p>
            <Select
              value={formData.guruId}
              onValueChange={(value) => handleInputChange("guruId", value)}
              disabled={isLoading || dataGuru.length === 0}
            >
              <SelectTrigger>
                <SelectValue placeholder="Pilih Profil Guru" />
              </SelectTrigger>
              <SelectContent>
                {dataGuru.length > 0 ? (
                  dataGuru.map((guru) => (
                    <SelectItem key={guru.id} value={guru.id}>
                      {guru.nama}
                    </SelectItem>
                  ))
                ) : (
                  <SelectItem value="none" disabled>
                    Semua guru sudah punya akun.
                  </SelectItem>
                )}
              </SelectContent>
            </Select>
            {errors.guruId && (
              <p className="text-sm text-red-600">{errors.guruId}</p>
            )}
          </div>
        )}

        <Button type="submit" disabled={isLoading} className="cursor-pointer">
          {isLoading ? "Menyimpan..." : "Simpan Akun"}
        </Button>
      </form>
    </div>
  );
};

export default FormTambahAkun;
