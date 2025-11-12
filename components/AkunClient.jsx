"use client";

import React, { useState, useMemo } from "react";
import { MoreHorizontal, Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToaster } from "@/providers/ToasterProvider";
import Heading from "./ui/Heading";
import { MdOutlineDeleteOutline, MdOutlineEditNote } from "react-icons/md";

const AkunClient = ({ data }) => {
  const router = useRouter();
  const toaster = useToaster();

  // Bikin state untuk search
  const [search, setSearch] = useState("");

  // Filter data  pake useMemo
  const filteredData = useMemo(() => {
    if (!search) return data; // Kalo search kosong, tampilin semua

    return data.filter(
      (user) =>
        user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase())
    );
  }, [data, search]);

  // Fungsi Delete
  const onDelete = async (user) => {
    // Validasi super admin tidak bisa dihapus
    if (user.email === "otong@gmail.com") {
      toaster.current.show({
        title: "Error",
        message: "Tidak bisa menghapus akun Admin utama.",
        type: "error",
      });
      return;
    }

    const confirmed = window.confirm(
      `Yakin ingin menghapus akun: ${user.name}?`
    );
    if (!confirmed) return;

    try {
      // Panggil API
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/pengguna/akun/${user.id}`,
        {
          method: "DELETE",
        }
      );

      const resData = await response.json();
      if (!response.ok) {
        throw new Error(resData.message || "Gagal menghapus akun");
      }

      toaster.current.show({
        title: "Sukses",
        message: "Akun berhasil dihapus",
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
      <div className="flex items-center justify-between">
        <Heading
          title={`Manajemen Akun`}
          description="Kelola akun login untuk Admin dan Guru"
        />
      </div>

      {/* Input Search */}
      <div className="flex justify-between gap-4 mt-4">
        <Button
          onClick={() => router.push(`/pengguna/akun/tambah`)}
          className="cursor-pointer"
        >
          <Plus className="mr-2 h-4 w-4" />
          Tambah Akun
        </Button>

        <Input
          placeholder="Cari nama atau email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-sm"
        />
      </div>

      {/* Tabel Biasa */}
      <div className="rounded-md border mt-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nama</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead className="text-right">Aksi</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredData.length > 0 ? (
              filteredData.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.name}</TableCell>
                  <TableCell>{item.email}</TableCell>
                  <TableCell>{item.role}</TableCell>
                  <TableCell className="text-right">
                    {/* Tombol Aksi */}
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="default" className="cursor-pointer">
                          <span className="sr-only">Buka menu</span>
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem
                          onClick={() =>
                            router.push(`/pengguna/akun/edit?id=${item.id}`)
                          }
                          className="cursor-pointer flex items-center gap-2"
                        >
                          <MdOutlineEditNote className="h-4 w-4" />
                          <span>Edit</span>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                          onClick={() => onDelete(item)}
                          className="text-red-500 cursor-pointer flex items-center gap-2"
                        >
                          <MdOutlineDeleteOutline className="h-4 w-4 text-red-500" />
                          <span>Hapus</span>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} className="h-24 text-center">
                  Tidak ada data.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default AkunClient;
