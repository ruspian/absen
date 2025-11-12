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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Label } from "@/components/ui/label";
import { useToaster } from "@/providers/ToasterProvider";
import { useRouter } from "next/navigation";
import { MdDeleteOutline } from "react-icons/md";
import Heading from "./ui/Heading";

// Daftar hari
const HARI = ["Senin", "Selasa", "Rabu", "Kamis", "Sabtu", "Minggu"];

const JadwalPiketClient = ({ dataJadwal, dataGuru }) => {
  const [formData, setFormData] = useState({ guruId: "", hari: "" });
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const toaster = useToaster();

  // Fungsi Tambah Jadwal
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.guruId || !formData.hari) {
      toaster.current.show({
        title: "Error",
        message: "Guru dan Hari harus dipilih.",
        type: "error",
        position: "top-center",
        duration: 5000,
      });
      return;
    }

    setIsLoading(true);

    const payload = {
      guruId: formData.guruId,
      hari: formData.hari,
    };

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/jadwal-piket`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Gagal menambah jadwal");
      }

      toaster.current.show({
        title: "Sukses",
        message: "Jadwal piket berhasil ditambah",
        type: "success",
        position: "top-center",
        duration: 5000,
      });

      setFormData({ guruId: "", hari: "" }); // Reset form
      router.refresh(); // Ambil data baru
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

  // Fungsi Hapus Jadwal
  const onDelete = async (jadwal) => {
    const confirmed = window.confirm(
      `Yakin ingin menghapus ${jadwal.namaGuru} dari piket hari ${jadwal.hari}?`
    );
    if (!confirmed) return;

    try {
      const response = await fetch(`/api/jadwal-piket/${jadwal.id}`, {
        method: "DELETE",
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Gagal menghapus jadwal");
      }

      toaster.current.show({
        title: "Sukses",
        message: "Jadwal piket berhasil dihapus",
        type: "success",
        position: "top-center",
        duration: 5000,
      });
      router.refresh();
    } catch (error) {
      toaster.current.show({
        title: "Error",
        message: error.message,
        type: "error",
        position: "top-center",
        duration: 5000,
      });
    }
  };

  return (
    <>
      <Heading title="Manajemen Jadwal Piket" description="" />

      {/* Form Tambah Jadwal */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-4 border rounded-lg"
      >
        <div className="flex gap-2 w-full">
          <div className="flex-1">
            <Select
              value={formData.guruId}
              onValueChange={(value) =>
                setFormData((prev) => ({ ...prev, guruId: value }))
              }
              disabled={isLoading}
            >
              <SelectTrigger id="guru" className="w-full">
                <SelectValue placeholder="Pilih Guru..." />
              </SelectTrigger>
              <SelectContent>
                {dataGuru.map((guru) => (
                  <SelectItem key={guru.id} value={guru.id}>
                    {guru.nama}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex-1">
            <Select
              value={formData.hari}
              onValueChange={(value) =>
                setFormData((prev) => ({ ...prev, hari: value }))
              }
              disabled={isLoading}
            >
              <SelectTrigger id="hari" className="w-full">
                <SelectValue placeholder="Pilih Hari..." />
              </SelectTrigger>
              <SelectContent>
                {HARI.map((hari) => (
                  <SelectItem key={hari} value={hari}>
                    {hari}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <Button
          type="submit"
          disabled={isLoading}
          className="self-end cursor-pointer"
        >
          {isLoading ? "Menyimpan..." : "Simpan"}
        </Button>
      </form>

      {/* Tabel Daftar Jadwal */}
      <div className="rounded-md border mt-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Hari</TableHead>
              <TableHead>Nama Guru Piket</TableHead>
              <TableHead className="text-right">Aksi</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {dataJadwal.length > 0 ? (
              dataJadwal.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.hari}</TableCell>
                  <TableCell>{item.namaGuru}</TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => onDelete(item)}
                      className="cursor-pointer"
                    >
                      <MdDeleteOutline className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={3} className="h-24 text-center">
                  Belum ada jadwal piket.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default JadwalPiketClient;
