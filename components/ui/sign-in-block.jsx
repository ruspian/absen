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
import { signIn } from "next-auth/react";

const SignInBlock = () => {
  const [formData, setFormData] = useState({
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

    if (!formData.email.trim()) {
      newErrors.email = "Email tidak boleh kosong!";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Format email tidak valid, isi email dengan benar!";
    }

    if (!formData.password) {
      newErrors.password = "Password tidak boleh kosong!";
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);
    // setErrors({});

    try {
      const result = await signIn("credentials", {
        email: formData.email,
        password: formData.password,
        redirect: false,
      });

      if (result?.error) {
        toaster.current.show({
          title: "Error",
          message: "Email atau password salah",
          type: "error",
          position: "top-center",
          duration: 5000,
        });
        return;
      }

      if (result?.ok) {
        toaster.current.show({
          title: "Sukses",
          message: "Login berhasil!",
          type: "success",
          position: "top-center",
          duration: 5000,
        });

        router.push("/dashboard");
      }
    } catch (error) {
      toaster.current?.show({
        title: "Error",
        message: String(error) || "Terjadi kesalahan, silahkan coba lagi!",
        variant: "error",
        duration: 5000,
        position: "top-center",
      });
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
        <CardContent className="flex flex-col gap-4">
          {errors.general && (
            <div className="p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-md">
              {errors.general}
            </div>
          )}

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

          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              <Link href="#" className="text-sm text-primary hover:underline">
                Lupa password?
              </Link>
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
            {isLoading ? "Tunggu Sebentar!" : "Masuk"}
          </Button>

          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              Belum punya akun?{" "}
              <Link
                href="/daftar"
                className="text-foreground decoration-0 no-underline font-normal"
              >
                Daftar!
              </Link>
            </p>
          </div>
        </CardFooter>
      </form>
    </Card>
  );
};

export default SignInBlock;
