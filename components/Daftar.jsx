"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";
import Link from "next/link";
import { useToaster } from "@/providers/ToasterProvider";
import { useRouter } from "next/navigation";

const SignUpBlock = () => {
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const toaster = useToaster();
  const router = useRouter();

  const validateForm = () => {
    const newErrors = {};

    // validasi nama
    // gunakan trim untuk menghilangkan spasi di awal dan akhir
    if (!formData.nama.trim() || !formData.nama) {
      newErrors.nama = "Nama harus diisi!";
    }

    // validasi email
    if (!formData.email.trim()) {
      newErrors.email = "Email harus diisi!";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email tidak valid, isi email dengan benar!";
    }

    // validasi password
    if (!formData.password) {
      newErrors.password = "Password harus diisi!";
    }

    // set error
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // fungsi saat input berubah
  const handleInputChange = (field, value) => {
    // setformdata
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

  // fungsi handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // jika fungsi validate form tidak terpenuhi
    if (!validateForm()) return;

    setIsLoading(true);
    // setErrors({});

    const payload = {
      name: formData.nama,
      email: formData.email,
      password: formData.password,
    };

    // req ke api
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/daftar`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        const errMessage = await response.json();

        return toaster.current.show({
          title: "Error",
          message: errMessage.message,
          variant: "error",
          position: "top-center",
          duration: 5000,
        });
      }

      // jika berhasil
      toaster.current.show({
        title: "Success",
        message: "Akun berhasil dibuat",
        variant: "success",
        position: "top-center",
        duration: 5000,
      });

      router.push("/");
    } catch (error) {
      return toaster.current.show({
        title: "Error",
        message: error.message,
        variant: "error",
        position: "top-center",
        duration: 5000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-sm mx-auto flex flex-col gap-6 rounded-sm">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold">Selamat Datang!</CardTitle>
        <CardDescription>
          Web Absen Online SMK Salafiyah Syafi&apos;iyah
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <CardContent className="flex flex-col gap-2">
          {errors.general && (
            <div className="p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-md">
              {errors.general}
            </div>
          )}

          {/* nama */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="nama">Nama</Label>
            <Input
              id="nama"
              type="text"
              placeholder="Otong Surotong"
              value={formData.nama}
              onChange={(e) => handleInputChange("nama", e.target.value)}
              disabled={isLoading}
              className="rounded-sm"
            />
            {errors.nama && (
              <p className="text-xs text-red-600">{errors.nama}</p>
            )}
          </div>

          {/* email */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="otong@contoh.com"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              disabled={isLoading}
              className="rounded-sm"
            />
            {errors.email && (
              <p className="text-xs text-red-600">{errors.email}</p>
            )}
          </div>

          {/* password */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
            </div>
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={formData.password}
              onChange={(e) => handleInputChange("password", e.target.value)}
              disabled={isLoading}
              className="rounded-sm"
            />
            {errors.password && (
              <p className="text-xs text-red-600">{errors.password}</p>
            )}
          </div>
        </CardContent>

        <CardFooter className="flex flex-col gap-4">
          <Button
            type="submit"
            className="w-full rounded-sm cursor-pointer"
            disabled={isLoading}
          >
            {isLoading ? "Tunggu Sebentar!" : "Daftar"}
          </Button>

          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              Sudah punya akun?{" "}
              <Link
                href="/"
                className="text-foreground decoration-0 no-underline font-normal"
              >
                Masuk!
              </Link>
            </p>
          </div>
        </CardFooter>
      </form>
    </Card>
  );
};

export default SignUpBlock;
