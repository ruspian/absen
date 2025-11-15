"use client";

import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { format, getDaysInMonth, getDay } from "date-fns";
import { id as localeID } from "date-fns/locale";

import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { Printer } from "lucide-react";
import { useToaster } from "@/providers/ToasterProvider";
import { Button } from "./ui/button";
import { addKopSurat } from "@/lib/kopSurat";

// array untuk dropdown bulan
const MASA_BULAN = [
  { value: "1", label: "Januari" },
  { value: "2", label: "Februari" },
  { value: "3", label: "Maret" },
  { value: "4", label: "April" },
  { value: "5", label: "Mei" },
  { value: "6", label: "Juni" },
  { value: "7", label: "Juli" },
  { value: "8", label: "Agustus" },
  { value: "9", label: "September" },
  { value: "10", label: "Oktober" },
  { value: "11", label: "November" },
  { value: "12", label: "Desember" },
];

// ambii tahun sekarang
const TAHUN_INI = new Date().getFullYear();
const MASA_TAHUN = [
  String(TAHUN_INI),
  String(TAHUN_INI - 1),
  String(TAHUN_INI - 2),
];

const JadwalReportClient = ({ absenData, dataKelas, dataMapel, filters }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const toaster = useToaster();
  const [isPdfLoading, setIsPdfLoading] = useState(false);

  // Fungsi buat ganti filter di URL
  const handleFilterChange = (type, value) => {
    const params = new URLSearchParams(searchParams);

    if (value && value !== "semua") {
      params.set(type, value);
    } else {
      params.delete(type); // Hapus kalo milih "Semua"
    }

    router.replace(`${pathname}?${params.toString()}`);
  };

  // Fungsi handleExportKelasPDF
  const handleExportKelasPDF = async () => {
    // Validasi
    if (!filters.kelasId || filters.kelasId === "") {
      toaster.current.show({
        title: "Error",
        message: "Pilih Kelas terlebih dahulu untuk export PDF.",
        type: "error",
        position: "top-center",
        duration: 5000,
      });
      return;
    }

    setIsPdfLoading(true);
    try {
      // Fetch data dari API 'bulanan-kelas'
      const payload = {
        kelasId: filters.kelasId,
        bulan: filters.bulan,
        tahun: filters.tahun,
        mapelId: filters.mapelId || "",
        sumber: "mapel",
      };
      const response = await fetch("/api/laporan/bulanan-kelas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Gagal mengambil data kelas");
      }

      const { students, attendance } = data;
      const bulanIndex = parseInt(filters.bulan) - 1;
      const tgl = new Date(filters.tahun, bulanIndex, 1);
      const daysInMonth = getDaysInMonth(tgl);

      // Setup Dokumen PDF
      const doc = new jsPDF({
        orientation: "landscape",
        unit: "mm",
        format: [330, 210], // F4
      });

      // Panggil fungsi Kop Surat
      const startY = addKopSurat(doc);

      // Judul Laporan
      const namaBulan = MASA_BULAN.find(
        (b) => b.value === filters.bulan
      )?.label;
      const namaKelas = dataKelas.find((k) => k.id === filters.kelasId)?.nama;

      doc.setFontSize(14);
      doc.setFont(undefined, "bold");
      doc.text(`Rekap Absensi Bulanan - Kelas ${namaKelas}`, 165, startY + 5, {
        align: "center",
      });
      doc.setFontSize(10);
      doc.setFont(undefined, "normal");
      doc.text(`Periode: ${namaBulan} ${filters.tahun}`, 165, startY + 10, {
        align: "center",
      });

      // Bikin Header Tabel (No, Nama, 1...31, H, S, I, A)
      const head = [["No", "Nama Siswa"]];
      for (let i = 1; i <= daysInMonth; i++) {
        head[0].push(String(i));
      }
      head[0].push(...["H", "S", "I", "A"]);

      //  Bikin Body Tabel
      const body = [];
      students.forEach((student, index) => {
        const row = [index + 1, student.nama];
        let totalH = 0,
          totalS = 0,
          totalI = 0,
          totalA = 0;

        for (let i = 1; i <= daysInMonth; i++) {
          const tglCek = new Date(Date.UTC(filters.tahun, bulanIndex, i));
          const hari = getDay(tglCek); // 0 = Minggu, ..., 5 = JUMAT

          if (hari === 5) {
            // Jumat Libur
            row.push("L");
            continue;
          }

          // Cari data absen
          const absen = attendance.find(
            (a) =>
              a.siswaId === student.id && new Date(a.tanggal).getUTCDate() === i
          );

          if (absen) {
            const status = absen.status[0]; // "H", "S", "I", "A"
            row.push(status);
            if (status === "H") totalH++;
            else if (status === "S") totalS++;
            else if (status === "I") totalI++;
            else if (status === "A") totalA++;
          } else {
            row.push("-");
          }
        }

        row.push(totalH, totalS, totalI, totalA);
        body.push(row);
      });

      // Gambar Tabel
      autoTable(doc, {
        startY: startY + 15, // Kasih jarak 10mm
        head: head,
        body: body,
        theme: "grid",
        headStyles: { fillColor: [41, 128, 185], fontSize: 8 },
        styles: { fontSize: 8, cellPadding: 1 },
      });

      // Simpen
      doc.save(`Rekap-Kelas-${namaKelas}-${namaBulan}.pdf`);
    } catch (error) {
      toaster.current.show({
        title: "Error",
        message: "Gagal membuat PDF: " + error.message,
        type: "error",
      });
    } finally {
      setIsPdfLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div>
        <h1 className="text-3xl font-bold">Rekap Absensi Mapel Saya</h1>
        <p className="text-muted-foreground">
          Lihat riwayat absensi yang telah Anda ambil.
        </p>
      </div>

      <div className="flex gap-4 p-4 border rounded-lg">
        {/* Filter Bulan */}
        <Select
          value={filters.bulan} // <-- Ambil dari prop
          onValueChange={(value) => handleFilterChange("bulan", value)}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter Bulan" />
          </SelectTrigger>
          <SelectContent>
            {MASA_BULAN.map((b) => (
              <SelectItem key={b.value} value={b.value}>
                {b.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Filter Tahun */}
        <Select
          value={filters.tahun}
          onValueChange={(value) => handleFilterChange("tahun", value)}
        >
          <SelectTrigger className="w-[120px]">
            <SelectValue placeholder="Filter Tahun" />
          </SelectTrigger>
          <SelectContent>
            {MASA_TAHUN.map((t) => (
              <SelectItem key={t} value={t}>
                {t}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Filter Kelas */}
        <Select
          value={filters.kelasId || "semua"}
          onValueChange={(value) => handleFilterChange("kelasId", value)}
        >
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Filter Kelas" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="semua">Semua Kelas</SelectItem>
            {dataKelas.map((k) => (
              <SelectItem key={k.id} value={k.id}>
                {k.nama}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Filter Mata Pelajaran */}
        <Select
          value={filters.mapelId || "semua"}
          onValueChange={(value) => handleFilterChange("mapelId", value)}
        >
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Filter Mapel" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="semua">Semua Mapel</SelectItem>
            {dataMapel.map((m) => (
              <SelectItem key={m.id} value={m.id}>
                {m.nama}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Button
          onClick={handleExportKelasPDF}
          disabled={isPdfLoading || filters.kelasId === null}
          variant="outline"
          className="self-end"
        >
          <Printer className="mr-2 h-4 w-4" />
          {isPdfLoading ? "Membuat PDF..." : "Export Rekap Kelas"}
        </Button>
      </div>

      {/* Bagian Tabel Laporan */}
      <div className="rounded-md border h-96 overflow-y-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Tanggal</TableHead>
              <TableHead>Nama Siswa</TableHead>
              <TableHead>Kelas</TableHead>
              <TableHead>Mata Pelajaran</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {absenData.length > 0 &&
            filters.kelasId &&
            filters.mapelId !== "semua" ? (
              absenData.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    {format(new Date(item.tanggal), "eeee, dd-MM-yyyy", {
                      locale: localeID,
                    })}
                  </TableCell>
                  <TableCell className="font-medium">
                    {item.namaSiswa}
                  </TableCell>
                  <TableCell>{item.namaKelas}</TableCell>
                  <TableCell>{item.namaMapel}</TableCell>
                  <TableCell>{item.status}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={5}
                  className="h-24 text-center text-muted-foreground"
                >
                  Tidak ada data rekap untuk filter ini.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default JadwalReportClient;
