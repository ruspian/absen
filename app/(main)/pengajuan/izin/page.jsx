"use client";

import React, { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon, UploadCloud, X } from "lucide-react";
import { useToaster } from "@/providers/ToasterProvider";
import { useRouter } from "next/navigation";
import { format } from "date-fns";
import { id as localeID } from "date-fns/locale";
import { getToday } from "@/lib/formatTime";

// Impor dari 'next-cloudinary'
import { CldUploadButton, CldImage } from "next-cloudinary";
import Heading from "@/components/ui/Heading";

const PengajuanIzinPage = () => {
  // State untuk form
  const [tanggal, setTanggal] = useState(getToday());
  const [status, setStatus] = useState("IZIN");
  const [alasan, setAlasan] = useState("");
  const [buktiUrl, setBuktiUrl] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const toaster = useToaster();

  // Fungsi upload next-cloudinary kalo upload sukses
  const handleUploadSuccess = (result) => {
    // 'result.info.secure_url' => URL gambar yang udah di-upload
    setBuktiUrl(result.info.secure_url);
    toaster.current.show({
      title: "Sukses Upload",
      message: "Bukti berhasil di-upload.",
      type: "success",
      position: "top-center",
      duration: 5000,
    });
  };

  // Fungsi Submit (manggil API kita sendiri)
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!tanggal || !alasan || !buktiUrl) {
      toaster.current.show({
        title: "Error",
        message: "Semua data temasuk foto wajib diisi.",
        type: "error",
        position: "top-center",
        duration: 5000,
      });
      return;
    }

    setIsLoading(true);
    try {
      const payload = {
        tanggal: tanggal.toISOString(),
        status: status,
        alasan: alasan,
        buktiUrl: buktiUrl,
      };

      // Panggil API
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/izin/ajukan`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Gagal mengajukan izin");
      }

      toaster.current.show({
        title: "Sukses",
        message: "Pengajuan izin berhasil dikirim. Tunggu persetujuan.",
        type: "success",
        position: "top-center",
        duration: 5000,
      });

      //   refresh dan arahkan ke halaman dashboard
      router.push("/dashboard");
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
      <Breadcrumb />
      <div className="flex-1 space-y-4 md:p-8 pt-6">
        <Heading
          title="Pengajuan Izin"
          description="Isi form untuk mengajukan izin"
        />

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 bg-background p-4 rounded-md border "
        >
          {/* Tanggal */}
          <div className="flex flex-col gap-2">
            <Label>Tanggal Izin</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-start text-left font-normal"
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {format(tanggal, "eeee, dd MMMM yyyy", { locale: localeID })}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={tanggal}
                  onSelect={(date) => date && setTanggal(date)} // Update tanggal
                  disabled={(date) =>
                    date < new Date(new Date().setHours(0, 0, 0, 0))
                  } // Gak bisa milih hari kemarin (waktu lokal browser)
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Status */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="status">Keterangan</Label>
            <Select
              value={status}
              onValueChange={setStatus}
              disabled={isLoading}
            >
              <SelectTrigger>
                <SelectValue placeholder="Pilih Keterangan" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="IZIN">Izin</SelectItem>
                <SelectItem value="SAKIT">Sakit</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Alasan */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="alasan">Alasan Singkat</Label>
            <Textarea
              id="alasan"
              placeholder="Cth: Izin acara keluarga / Sakit (surat dokter terlampir)"
              value={alasan}
              onChange={(e) => setAlasan(e.target.value)}
              disabled={isLoading}
            />
          </div>

          {/* Upload Bukti */}
          <div className="flex flex-col gap-2">
            <Label>Bukti (Surat Dokter/Surat Izin)</Label>

            {/* Kalo belum upload, tampilkan tombol */}
            {!buktiUrl && (
              <CldUploadButton
                // [PENTING] Ganti "ml_default" dengan nama "Upload Preset" lo di Cloudinary
                uploadPreset="ml_default"
                className="w-full p-4 border-2 border-dashed rounded-md flex flex-col items-center justify-center text-muted-foreground hover:bg-muted/50"
                onSuccess={handleUploadSuccess}
                disabled={isLoading}
              >
                <UploadCloud className="h-8 w-8 mb-2" />
                <span>Upload Bukti</span>
              </CldUploadButton>
            )}

            {/*  Kalo udah upload, tampilkan preview + tombol hapus */}
            {buktiUrl && (
              <div className="mt-2 border rounded-md p-2 relative w-fit">
                <CldImage
                  width="300"
                  height="300"
                  src={buktiUrl}
                  alt="Bukti Izin"
                  className="rounded-md"
                />
                <Button
                  variant="destructive"
                  size="icon"
                  className="absolute top-2 right-2 rounded-full h-6 w-6"
                  onClick={() => setBuktiUrl("")}
                  disabled={isLoading}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            )}
          </div>

          <Button
            type="submit"
            disabled={isLoading || !buktiUrl}
            className="cursor-pointer mt-4"
          >
            {isLoading ? "Mengirim..." : "Ajukan Izin"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default PengajuanIzinPage;
