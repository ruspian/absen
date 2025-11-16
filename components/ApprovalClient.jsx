"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { useToaster } from "@/providers/ToasterProvider";
import { useRouter } from "next/navigation";
import { format } from "date-fns";
import { id as localeID } from "date-fns/locale";
import { CldImage } from "next-cloudinary";
import { Label } from "@/components/ui/label";

const ApprovalClient = ({ data }) => {
  const [isLoading, setIsLoading] = useState(null);
  const [komentar, setKomentar] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const router = useRouter();
  const toaster = useToaster();

  // Buka modal buat nulis 'komentar'
  const openRejectDialog = (item) => {
    setSelectedItem(item);
    setKomentar("");
  };

  const handleProses = async (item, newStatus) => {
    // Kalo 'REJECTED' tapi alasannya kosong
    if (newStatus === "REJECTED" && !komentar.trim()) {
      toaster.current.show({
        title: "Error",
        message: "Harap isi alasan penolakan.",
        type: "error",
        position: "top-center",
        duration: 5000,
      });
      return;
    }

    setIsLoading(item.id);

    try {
      const payload = {
        pengajuanId: item.id,
        newStatus: newStatus,
        komentar: komentar,
        siswaId: item.siswaId,
        tanggalIzin: item.tanggal,
        tipeIzin: item.tipe, // "SAKIT" atau "IZIN"
      };

      const response = await fetch("/api/izin/approval", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const resData = await response.json();
      if (!response.ok) {
        throw new Error(resData.message || "Gagal memproses pengajuan");
      }

      toaster.current.show({
        title: "Sukses",
        message: `Pengajuan berhasil ${
          newStatus === "APPROVED" ? "disetujui" : "ditolak"
        }.`,
        type: "success",
        position: "top-center",
        duration: 5000,
      });

      setSelectedItem(null); // Tutup dialog
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
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Tanggal Izin</TableHead>
            <TableHead>Siswa</TableHead>
            <TableHead>Kelas</TableHead>
            <TableHead>Tipe</TableHead>
            <TableHead>Alasan</TableHead>
            <TableHead>Bukti</TableHead>
            <TableHead className="text-right">Aksi</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.length > 0 ? (
            data.map((item) => (
              <TableRow key={item.id}>
                <TableCell>
                  {format(new Date(item.tanggal), "dd MMM yyyy", {
                    locale: localeID,
                  })}
                </TableCell>
                <TableCell className="font-medium">{item.namaSiswa}</TableCell>
                <TableCell>{item.kelas}</TableCell>
                <TableCell>{item.tipe}</TableCell>
                <TableCell className="max-w-xs">{item.alasan}</TableCell>
                <TableCell>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm">
                        Lihat Bukti
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Bukti Pengajuan</DialogTitle>
                      </DialogHeader>
                      <CldImage
                        width="450"
                        height="600"
                        src={item.buktiUrl}
                        alt="Bukti Izin"
                        className="rounded-md mx-auto"
                      />
                    </DialogContent>
                  </Dialog>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex gap-2 justify-end">
                    <Button
                      size="sm"
                      variant="destructive"
                      disabled={isLoading === item.id}
                      onClick={() => openRejectDialog(item)}
                      className="cursor-pointer"
                    >
                      Tolak
                    </Button>
                    <Button
                      size="sm"
                      variant="default"
                      disabled={isLoading === item.id}
                      onClick={() => handleProses(item, "APPROVED")}
                      className="cursor-pointer"
                    >
                      {isLoading === item.id ? "..." : "Setujui"}
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell
                colSpan={7}
                className="h-24 text-center text-muted-foreground"
              >
                Tidak ada pengajuan izin yang menunggu.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      {/* Dialog Alasan Penolakan */}
      <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Alasan Penolakan</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-4 py-4">
            <Label htmlFor="komentar">
              Kenapa pengajuan izin {selectedItem?.namaSiswa} ditolak?
            </Label>
            <Textarea
              id="komentar"
              value={komentar}
              onChange={(e) => setKomentar(e.target.value)}
            />
            <Button
              variant="destructive"
              disabled={isLoading === selectedItem?.id}
              onClick={() => handleProses(selectedItem, "REJECTED")}
              className="cursor-pointer"
            >
              {isLoading === selectedItem?.id ? "..." : "Konfirmasi Tolak"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ApprovalClient;
