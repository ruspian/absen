"use client";

import { useToaster } from "@/providers/ToasterProvider";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const AbsenMapelClient = ({ dataSiswa, jadwalId }) => {
  const [isLoading, setIsLoading] = useState(null);
  const router = useRouter();
  const toaster = useToaster();

  // Fungsi kirim absen
  const handleAbsen = async (siswaId, status) => {
    setIsLoading(siswaId);

    try {
      const payload = {
        siswaId: siswaId,
        jadwalId: jadwalId,
        status: status,
      };

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/absen/mapel`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

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
      router.refresh(); // Refresh halaman
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
    <div className="flex flex-col gap-4 mt-6">
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>No</TableHead>
              <TableHead>Kode Siswa</TableHead>
              <TableHead>Nama Siswa</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Aksi</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {dataSiswa.length > 0 ? (
              dataSiswa.map((item, index) => (
                <TableRow key={item.id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{item.kode}</TableCell>
                  <TableCell className="font-medium">{item.nama}</TableCell>
                  <TableCell>
                    {/* Tampilan Status */}
                    {item.status === null ? (
                      <span className="text-gray-500">- Belum Absen -</span>
                    ) : (
                      <span
                        className={cn(
                          "font-medium",
                          item.status === "HADIR" && "text-green-600",
                          item.status === "SAKIT" && "text-blue-600",
                          item.status === "IZIN" && "text-yellow-600",
                          item.status === "ALFA" && "text-red-600"
                        )}
                      >
                        {item.status}
                      </span>
                    )}
                  </TableCell>
                  <TableCell className="text-right">
                    {/* Tombol Aksi */}
                    <div className="flex gap-2 justify-end">
                      <Button
                        size="sm"
                        variant={
                          item.status === "HADIR" ? "default" : "outline"
                        }
                        disabled={isLoading === item.id}
                        onClick={() => handleAbsen(item.id, "HADIR")}
                      >
                        Hadir
                      </Button>
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
                          item.status === "ALFA" || item.status === null
                            ? "destructive"
                            : "outline"
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
                <TableCell colSpan={5} className="h-24 text-center">
                  Tidak ada data siswa di kelas ini.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AbsenMapelClient;
