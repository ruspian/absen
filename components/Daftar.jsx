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

const SignUpBlock = () => {
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    password: "",
    rememberMe: false,
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);
    setErrors({});

    // 🔹 Simulate a fake request
    setTimeout(() => {
      console.log("Form submitted:", formData);

      if (formData.rememberMe) {
        localStorage.setItem("rememberMe", "true");
      }

      alert("Signed in successfully (demo only)");

      setIsLoading(false);
    }, 1000);
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
        <CardContent className="flex flex-col gap-4">
          {errors.general && (
            <div className="p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-md">
              {errors.general}
            </div>
          )}

          {/* nama */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="email">Nama</Label>
            <Input
              id="nama"
              type="text"
              placeholder="Otong Surotong"
              value={formData.nama}
              onChange={(e) => handleInputChange("email", e.target.value)}
              disabled={isLoading}
              className="rounded-sm"
            />
            {errors.email && (
              <p className="text-sm text-red-600">{errors.email}</p>
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
              <p className="text-sm text-red-600">{errors.email}</p>
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
              <p className="text-sm text-red-600">{errors.password}</p>
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
