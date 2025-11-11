"use client";

import React, { useState, useMemo } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useToaster } from "@/providers/ToasterProvider";
import { getTimeFromDate } from "@/lib/formatTime";
import { id as localeID } from "date-fns/locale";
import { format, getDaysInMonth, getDay } from "date-fns";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { BiSolidFilePdf } from "react-icons/bi";
import { IoSearch } from "react-icons/io5";

// item dropdown bulan
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

// Ambil 3 tahun terakhir
const TAHUN_INI = new Date().getFullYear();
const MASA_TAHUN = [
  String(TAHUN_INI),
  String(TAHUN_INI - 1),
  String(TAHUN_INI - 2),
];

const LaporanBulananClient = ({ dataSiswa, dataGuru, dataKelas }) => {
  const toaster = useToaster();

  // State untuk semua filter
  const [tipe, setTipe] = useState("siswa");
  const [bulan, setBulan] = useState(String(new Date().getMonth() + 1)); // Default bulan ini
  const [tahun, setTahun] = useState(String(TAHUN_INI));
  const [selectedKelasId, setSelectedKelasId] = useState("semua");
  const [selectedTargetId, setSelectedTargetId] = useState("");
  const [isPdfLoading, setIsPdfLoading] = useState(false);

  // State untuk hasil
  const [laporanData, setLaporanData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // State turunan dari state utama
  const daftarNama = useMemo(() => {
    if (tipe === "guru") {
      return dataGuru; // Kalo tipe guru, langsung pake dataGuru
    }
    if (tipe === "siswa") {
      if (selectedKelasId === "semua") {
        return []; // Kosongin kalo kelas belum dipilih
      }
      return dataSiswa.filter((s) => s.kelasId === selectedKelasId);
    }
  }, [tipe, selectedKelasId, dataSiswa, dataGuru]);

  // Fungsi handle submit laporan
  const handleSubmitLaporan = async () => {
    if (!selectedTargetId) {
      toaster.current.show({
        title: "Error",
        message: "Silakan pilih nama Siswa atau Guru terlebih dahulu.",
        type: "error",
      });
      return;
    }

    setIsLoading(true);
    setLaporanData([]); // Kosongin data lama

    try {
      const payload = {
        tipe: tipe,
        targetId: selectedTargetId,
        bulan: bulan,
        tahun: tahun,
      };

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/laporan/bulanan`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Gagal mengambil data");
      }

      setLaporanData(data); // Simpan hasil ke state
    } catch (error) {
      toaster.current.show({
        title: "Error",
        message: error.message,
        type: "error",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Hitung statistik dari hasil
  const statistik = useMemo(() => {
    return {
      hadir: laporanData.filter((d) => d.status === "HADIR").length,
      sakit: laporanData.filter((d) => d.status === "SAKIT").length,
      izin: laporanData.filter((d) => d.status === "IZIN").length,
      alfa: laporanData.filter((d) => d.status === "ALFA").length,
    };
  }, [laporanData]);

  // fungsi buat reset
  const resetNama = () => {
    setSelectedTargetId("");
    setLaporanData([]);
  };

  //   fungsi export pdf
  const handleExportKelasPDF = async () => {
    // Validasi dulu (harus milih kelas)
    if (selectedKelasId === "semua") {
      toaster.current.show({
        title: "Error",
        message: "Silakan pilih kelas terlebih dahulu.",
        type: "error",
      });
      return;
    }

    setIsPdfLoading(true);

    try {
      // Fetch data dari API baru
      const payload = {
        kelasId: selectedKelasId,
        bulan: bulan,
        tahun: tahun,
      };
      // Panggil API
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/laporan/bulanan-kelas`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Gagal mengambil data kelas");
      }

      const { students, attendance } = data;
      const bulanIndex = parseInt(bulan) - 1;
      const tgl = new Date(tahun, bulanIndex, 1);
      const daysInMonth = getDaysInMonth(tgl); // Total hari di bulan itu

      // Setup Dokumen PDF ukuran F4 Landscape
      const doc = new jsPDF({
        orientation: "landscape",
        unit: "mm",
        format: [330, 210],
      });
      const pageWidth = doc.internal.pageSize.getWidth();
      const centerX = pageWidth / 2;
      const namaKelas =
        dataKelas.find((k) => k.id === selectedKelasId)?.nama || "";
      const namaBulan = MASA_BULAN.find((b) => b.value === bulan)?.label || "";

      doc.setFontSize(16);
      doc.text(`REKAP ABSEN BULANAN KELAS ${namaKelas}`, centerX, 15, {
        align: "center",
      });
      doc.setFontSize(12);
      doc.text(`Bulan: ${namaBulan} ${tahun}`, centerX, 22, {
        align: "center",
      });

      //  Header Tabel
      const head = [["No", "Nama Siswa"]];
      for (let i = 1; i <= daysInMonth; i++) {
        head[0].push(String(i));
      }
      head[0].push(...["H", "S", "I", "A"]);

      //  Body Tabel
      const body = [];
      students.forEach((student, index) => {
        const row = [index + 1, student.nama];
        let totalH = 0,
          totalS = 0,
          totalI = 0,
          totalA = 0;

        for (let i = 1; i <= daysInMonth; i++) {
          const tglCek = new Date(Date.UTC(tahun, bulanIndex, i)); // Pakai UTC biar 'getDay' konsisten
          const hari = getDay(tglCek); // 0 = Minggu, ..., 5 = JUMAT

          // Cek kalo hari Jumat = Libur
          if (hari === 5) {
            // 5 adalah Jumat
            row.push("L");
            continue; // Lanjut ke hari berikutnya
          }

          // Cari data absen
          const absen = attendance.find(
            (a) =>
              a.siswaId === student.id && new Date(a.tanggal).getUTCDate() === i
          );

          if (absen) {
            const status = absen.status[0]; // "H", "S", "I", "A"
            row.push(status);
            // Hitung total
            if (status === "H") totalH++;
            else if (status === "S") totalS++;
            else if (status === "I") totalI++;
            else if (status === "A") totalA++;
          } else {
            // Kalo nggak libur dan gak ada data, berarti ALFA
            row.push("-");
            // totalA++;
          }
        }

        row.push(totalH, totalS, totalI, totalA);
        body.push(row);
      });

      // buat Tabel
      autoTable(doc, {
        startY: 30,
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
        message: error.message,
        type: "error",
      });
    } finally {
      setIsPdfLoading(false);
    }
  };

  const handleExportGuruPDF = async () => {
    setIsPdfLoading(true);

    try {
      // Fetch data dari API
      const payload = { bulan: bulan, tahun: tahun };
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/laporan/bulanan-guru`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Gagal mengambil data guru");
      }

      const { gurus, attendance } = data;
      const bulanIndex = parseInt(bulan) - 1;
      const tgl = new Date(tahun, bulanIndex, 1);
      const daysInMonth = getDaysInMonth(tgl);

      // Setup Dokumen PDF
      const doc = new jsPDF({
        orientation: "landscape",
        unit: "mm",
        format: [330, 210],
      });
      const pageWidth = doc.internal.pageSize.getWidth();
      const centerX = pageWidth / 2;
      const namaBulan = MASA_BULAN.find((b) => b.value === bulan)?.label || "";

      doc.setFontSize(16);
      doc.text(`Rekap Absensi Bulanan - Guru`, centerX, 15, {
        align: "center",
      });
      doc.setFontSize(12);
      doc.text(`Bulan: ${namaBulan} ${tahun}`, centerX, 22, {
        align: "center",
      });

      // Header Tabel
      const head = [["No", "Nama Guru"]];
      for (let i = 1; i <= daysInMonth; i++) {
        head[0].push(String(i));
      }
      head[0].push(...["H", "S", "I", "A"]); // Kolom Total

      // Body Tabel
      const body = [];
      gurus.forEach((guru, index) => {
        const row = [index + 1, guru.nama];
        let totalH = 0,
          totalS = 0,
          totalI = 0,
          totalA = 0;

        for (let i = 1; i <= daysInMonth; i++) {
          const tglCek = new Date(Date.UTC(tahun, bulanIndex, i));
          const hari = getDay(tglCek); // 0 = Minggu, ..., 5 = JUMAT

          if (hari === 5) {
            // Libur hari Jumat
            row.push("L");
            continue;
          }

          const absen = attendance.find(
            (a) =>
              a.guruId === guru.id && new Date(a.tanggal).getUTCDate() === i
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
            // totalA++;
          }
        }

        row.push(totalH, totalS, totalI, totalA);
        body.push(row);
      });

      // buat Tabel
      autoTable(doc, {
        startY: 30,
        head: head,
        body: body,
        theme: "grid",
        headStyles: { fillColor: [41, 128, 185], fontSize: 8 },
        styles: { fontSize: 8, cellPadding: 1 },
      });

      // Simpen
      doc.save(`Rekap-Guru-${namaBulan}.pdf`);
    } catch (error) {
      toaster.current.show({
        title: "Error",
        message: error.message,
        type: "error",
      });
    } finally {
      setIsPdfLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold">Laporan Bulanan</h1>

      {/* --- Bagian Filter --- */}
      <div className="flex gap-4 p-4 rounded-lg items-center ">
        {/* Filter Tipe */}
        <Select
          value={tipe}
          onValueChange={(value) => {
            setTipe(value);
            setSelectedKelasId("semua");
            resetNama();
          }}
        >
          <SelectTrigger>
            <SelectValue placeholder="Pilih Tipe" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="siswa">Siswa</SelectItem>
            <SelectItem value="guru">Guru</SelectItem>
          </SelectContent>
        </Select>

        {/* Filter Bulan */}
        <Select value={bulan} onValueChange={setBulan}>
          <SelectTrigger>
            <SelectValue placeholder="Pilih Bulan" />
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
        <Select value={tahun} onValueChange={setTahun}>
          <SelectTrigger>
            <SelectValue placeholder="Pilih Tahun" />
          </SelectTrigger>
          <SelectContent>
            {MASA_TAHUN.map((t) => (
              <SelectItem key={t} value={t}>
                {t}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Filter Kelas  */}
        <Select
          value={selectedKelasId}
          onValueChange={(value) => {
            setSelectedKelasId(value);
            resetNama();
          }}
          disabled={tipe === "guru"} // Mati kalo tipe-nya 'guru'
        >
          <SelectTrigger>
            <SelectValue placeholder="Pilih Kelas" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="semua">Pilih Kelas</SelectItem>
            {dataKelas.map((k) => (
              <SelectItem key={k.id} value={k.id}>
                {k.nama}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Filter Nama  */}
        <Select
          value={selectedTargetId}
          onValueChange={setSelectedTargetId}
          disabled={!daftarNama.length} // Mati kalo 'daftarNama' kosong
        >
          <SelectTrigger>
            <SelectValue placeholder="Pilih Nama" />
          </SelectTrigger>
          <SelectContent>
            {daftarNama.map((item) => (
              <SelectItem key={item.id} value={item.id}>
                {item.nama}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* tombil */}
      <div className="flex gap-4 justify-between">
        <Button
          onClick={handleSubmitLaporan}
          disabled={isLoading || isPdfLoading || !selectedTargetId}
          className="flex items-center gap-2"
        >
          <IoSearch size={20} />
          {isLoading ? "Memuat..." : "Tampilkan Laporan Individu"}
        </Button>

        {/* Tombol PDF Per-Kelas  */}
        {tipe === "siswa" && (
          <Button
            onClick={handleExportKelasPDF}
            disabled={isPdfLoading || isLoading || selectedKelasId === "semua"}
            variant="outline"
            className="flex items-center gap-2"
          >
            <BiSolidFilePdf size={20} />
            {isPdfLoading ? "Membuat PDF..." : "Export Data Siswa"}
          </Button>
        )}

        {/* Tombol PDF Guru */}
        {tipe === "guru" && (
          <Button
            onClick={handleExportGuruPDF}
            disabled={isPdfLoading || isLoading}
            variant="outline"
            className="flex items-center gap-2"
          >
            <BiSolidFilePdf size={20} />
            {isPdfLoading ? "Membuat PDF..." : "Export Data Guru"}
          </Button>
        )}
      </div>

      {/* --- Bagian Hasil Laporan --- */}
      {laporanData.length > 0 ? (
        <div className="flex flex-col w-full gap-4">
          {/* Statistik Ringkas */}
          <div className="flex w-full gap-4">
            <div className="p-4 border rounded-lg text-center w-full">
              <h3 className="text-sm font-medium">HADIR</h3>
              <p className="text-2xl font-bold">{statistik.hadir}</p>
            </div>
            <div className="p-4 border rounded-lg text-center w-full">
              <h3 className="text-sm font-medium">SAKIT</h3>
              <p className="text-2xl font-bold">{statistik.sakit}</p>
            </div>
            <div className="p-4 border rounded-lg text-center w-full">
              <h3 className="text-sm font-medium">IZIN</h3>
              <p className="text-2xl font-bold">{statistik.izin}</p>
            </div>
            <div className="p-4 border rounded-lg text-center w-full">
              <h3 className="text-sm font-medium">ALFA</h3>
              <p className="text-2xl font-bold">{statistik.alfa}</p>
            </div>
          </div>

          {/* Tabel Detail */}
          <div className="rounded-md border h-96 overflow-y-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Tanggal</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Jam Masuk</TableHead>
                  <TableHead>Jam Pulang</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {laporanData.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>
                      {format(new Date(item.tanggal), "eeee, dd-MM-yyyy", {
                        locale: localeID,
                      })}
                    </TableCell>
                    <TableCell>{item.status}</TableCell>
                    <TableCell>
                      {item.jamMasuk ? getTimeFromDate(item.jamMasuk) : "-"}
                    </TableCell>
                    <TableCell>
                      {item.jamPulang ? getTimeFromDate(item.jamPulang) : "-"}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      ) : (
        <div className="flex items-start justify-center h-96">
          <p className="text-sm text-muted-foreground">Belum Ada Laporan!</p>
        </div>
      )}
    </div>
  );
};

export default LaporanBulananClient;
