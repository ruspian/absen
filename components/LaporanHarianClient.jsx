"use client";

import React from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { format } from "date-fns";
import { id as localeID } from "date-fns/locale"; // Untuk format tanggal Indonesia
import StatistikLaporanHarian from "./StatistikLaporanHarian";
import FilterKalender from "./FilterKalender";
import { TabelLaporanHarianSiswa } from "./tabel/TabelLaporanHarianSiswa";
import { TabelLaporanHarianGuru } from "./tabel/TabelLaporanHarianGuru";
import { Button } from "./ui/button";
import { BiSolidFilePdf } from "react-icons/bi";
import { handleExportPDFGuru, handleExportPDFSiswa } from "@/lib/exportPdf";

// Terima semua prop dari server
const LaporanHarianClient = ({
  dataSiswa,
  dataGuru,
  dataKelas,
  statistik,
  selectedDate,
  selectedKelasId,
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Ubah string ISO jadi objek Date
  const currentDate = new Date(selectedDate);

  // Fungsi buat ganti tanggal di URL
  const handleDateChange = (date) => {
    const dateString = format(date, "yyyy-MM-dd");
    const params = new URLSearchParams(searchParams); // <-- Bikin params baru

    params.set("tanggal", dateString);

    router.replace(`${pathname}?${params.toString()}`);
  };

  //   Fungsi buat ganti kelas di URL
  const handleClassChange = (kelasId) => {
    const params = new URLSearchParams(searchParams); // Bikin params baru

    if (kelasId !== "semua") {
      params.set("kelasId", kelasId);
    } else {
      params.delete("kelasId"); // Hapus kalo milih "Pilih Kelas"
    }

    router.replace(`${pathname}?${params.toString()}`);
  };

  // Fungsi buat nampilin status
  const getStatusBadge = (status) => {
    if (status === null) {
      return <span className="text-gray-500">Belum Absen</span>;
    }
    if (status === "HADIR") {
      return <span className="font-medium text-green-600">{status}</span>;
    }
    if (status === "SAKIT") {
      return <span className="font-medium text-blue-600">{status}</span>;
    }
    if (status === "IZIN") {
      return <span className="font-medium text-yellow-600">{status}</span>;
    }
    if (status === "ALFA") {
      return <span className="font-medium text-red-600">{status}</span>;
    }
    return status;
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Judul & Statistik */}
      <div>
        <h1 className="text-3xl font-bold">Laporan Harian</h1>
        <p className="text-muted-foreground text-sm">
          Ringkasan absensi untuk tanggal:{" "}
          <span className="font-semibold text-primary">
            {format(currentDate, "eeee, dd MMMM yyyy", { locale: localeID })}
          </span>
        </p>
      </div>

      {/* statistik */}
      <StatistikLaporanHarian statistik={statistik} />

      {/* Filter Bar */}
      <div className="flex justify-between items-center">
        <FilterKalender
          currentDate={currentDate}
          handleDateChange={handleDateChange}
        />
        {/*  Tombol Export PDF */}
        <div className="flex gap-2">
          <Button
            onClick={() =>
              handleExportPDFSiswa(
                selectedKelasId,
                currentDate,
                dataSiswa,
                dataKelas
              )
            }
            variant="outline"
            // Disable kalo kelas belum dipilih (karena dataSiswa-nya kosong)
            disabled={!selectedKelasId}
          >
            <BiSolidFilePdf className="mr-2 h-4 w-4" />
            Siswa
          </Button>
          <Button
            onClick={() => handleExportPDFGuru(dataGuru, currentDate)}
            variant="outline"
            // Disable kalo kelas belum dipilih (karena dataSiswa-nya kosong)
            disabled={!selectedKelasId}
          >
            <BiSolidFilePdf className="mr-2 h-4 w-4" />
            Guru
          </Button>
        </div>
      </div>

      {/* Tabs & Tabel */}
      <Tabs defaultValue="siswa" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="siswa">Laporan Siswa</TabsTrigger>
          <TabsTrigger value="guru">Laporan Guru</TabsTrigger>
        </TabsList>

        {/* TAB SISWA */}
        <TabsContent value="siswa" className="mt-4 flex flex-col gap-4">
          <div className="flex justify-end">
            <Select
              value={selectedKelasId || "semua"}
              onValueChange={handleClassChange}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter Kelas" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="semua">Semua Kelas</SelectItem>
                {dataKelas.map((kelas) => (
                  <SelectItem key={kelas.id} value={kelas.id}>
                    {kelas.nama}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <TabelLaporanHarianSiswa
            data={dataSiswa}
            getStatusBadge={getStatusBadge}
            kelasDipilih={!!selectedKelasId}
          />
        </TabsContent>

        {/* TAB GURU */}
        <TabsContent value="guru" className="mt-4">
          <TabelLaporanHarianGuru
            data={dataGuru}
            getStatusBadge={getStatusBadge}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default LaporanHarianClient;
