"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToaster } from "@/providers/ToasterProvider";
import { useRouter } from "next/navigation";
import React, { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"; //

export const ManualMode = ({ dataSiswa, dataKelas }) => {
  const [filterKelas, setFilterKelas] = useState("semua");
  const [filterStatus, setFilterStatus] = useState("semua");
  const [isLoading, setIsLoading] = useState(null);
  const router = useRouter();
  const toaster = useToaster();

  // Filter data berdasarkan dropdown
  const filteredData = useMemo(() => {
    // Terapkan filter dropdown ke data ASLI
    return dataSiswa.filter((siswa) => {
      const matchKelas =
        filterKelas === "semua" || siswa.kelasId === filterKelas;

      const matchStatus = () => {
        if (filterStatus === "semua") {
          // Kalo filter Semua, tampilin semua
          return true;
        }

        if (filterStatus === null) {
          return siswa.status === null;
        }
        if (filterStatus === "HADIR") {
          return siswa.status === "HADIR";
        }
        if (filterStatus === "ALFA") {
          return siswa.status === "ALFA";
        }
        if (filterStatus === "IZIN") {
          return siswa.status === "IZIN";
        }
        if (filterStatus === "SAKIT") {
          return siswa.status === "SAKIT";
        }
      };

      return matchKelas && matchStatus();
    });
  }, [dataSiswa, filterKelas, filterStatus]);

  console.log("filteredData", filteredData);

  // Fungsi kirim absen manual (Sakit/Izin/Alfa)
  const handleAbsen = async (siswaId, status) => {
    setIsLoading(siswaId);

    try {
      const payload = {
        siswaId: siswaId,
        status: status,
      };

      // [PERBAIKAN 1] API endpoint salah, harusnya '/harian-manual'
      const response = await fetch(`/api/absen/manual`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Gagal mencatat absen");
      }

      toaster.current.show({
        title: "Sukses",
        message: data.message,
        type: "success",
        position: "top-center",
        duration: 5000,
      });
      router.refresh(); // refresh data di 'page.jsx'
    } catch (error) {
      toaster.current.show({
        title: "Error",
        message: error.message,
        type: "error",
        position: "top-center",
        duration: 5000,
      });
    } finally {
      setIsLoading(null);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Bagian Filter */}
      <div className="flex gap-4">
        {/* Filter per Kelas */}
        <Select value={filterKelas} onValueChange={setFilterKelas}>
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

        {/* Filter per Status */}
        <Select value={filterStatus} onValueChange={setFilterStatus}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="semua">Semua Status</SelectItem>
            <SelectItem value="ALFA">Belum Absen / Alfa</SelectItem>
            <SelectItem value="HADIR">Hadir</SelectItem>
            <SelectItem value="SAKIT">Sakit</SelectItem>
            <SelectItem value="IZIN">Izin</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Bagian Daftar Siswa */}
      <div className="rounded-md border h-96 overflow-y-auto">
        <div className="bg-background rounded-sm">
          <Table>
            <TableHeader className="bg-transparent">
              <TableRow className="hover:bg-transparent">
                <TableHead>No</TableHead>
                <TableHead>Kode</TableHead>
                <TableHead>Nama Siswa</TableHead>
                <TableHead>NISN</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Kelas</TableHead>
                <TableHead>Aksi</TableHead>
              </TableRow>
            </TableHeader>
            <tbody aria-hidden="true" className="table-row h-2"></tbody>
            <TableBody className="[&_td:first-child]:rounded-l-lg [&_td:last-child]:rounded-r-lg">
              {filteredData.length > 0 ? (
                filteredData.map((item, index) => (
                  <TableRow
                    key={item.id}
                    className="border-none odd:bg-muted/50 hover:bg-transparent odd:hover:bg-muted/50"
                  >
                    <TableCell className="py-2.5 font-medium">
                      {index + 1}
                    </TableCell>
                    <TableCell className="py-2.5 font-medium">
                      {item.kode}
                    </TableCell>
                    <TableCell className="py-2.5 font-medium">
                      {item.nama}
                    </TableCell>
                    <TableCell className="py-2.5 font-medium">
                      {item.nisn || "-"}
                    </TableCell>
                    <TableCell className="py-2.5 font-medium">
                      {item.status === null ? (
                        <span className="text-gray-500">- Belum Absen -</span>
                      ) : (
                        item.status
                      )}
                    </TableCell>

                    <TableCell className="py-2.5 font-medium">
                      {item.kelas}
                    </TableCell>

                    <TableCell className="py-2.5 font-medium">
                      {/* Tombol Aksi  */}
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant={
                            item.status === "SAKIT" ? "secondary" : "outline"
                          }
                          className={cn(
                            item.status === "SAKIT" && "bg-blue-600 text-white"
                          )}
                          disabled={isLoading === item.id}
                          onClick={() => handleAbsen(item.id, "SAKIT")}
                        >
                          Sakit
                        </Button>
                        <Button
                          size="sm"
                          variant={
                            item.status === "IZIN" ? "secondary" : "outline"
                          }
                          className={cn(
                            item.status === "IZIN" && "bg-yellow-500 text-white"
                          )}
                          disabled={isLoading === item.id}
                          onClick={() => handleAbsen(item.id, "IZIN")}
                        >
                          Izin
                        </Button>
                        <Button
                          size="sm"
                          variant={
                            item.status === "ALFA" ? "destructive" : "outline"
                          }
                          disabled={isLoading === item.id}
                          onClick={() => handleAbsen(item.id, "ALFA")}
                        >
                          Alfa
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    className="py-2.5 font-medium text-center"
                    colSpan={7}
                  >
                    Tidak ada data siswa
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
            <tbody aria-hidden="true" className="table-row h-2"></tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default ManualMode;
