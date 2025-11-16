// Paksa dinamis biar datanya selalu baru
export const dynamic = "force-dynamic";

import Breadcrumb from "@/components/Breadcrumb";
import FormTambahAkun from "@/components/form/FormTambahAkun";
import { prisma } from "@/lib/prisma";
import React from "react";

const TambahAkunPage = async () => {
  // ambil data siswa dan guru yang belum punya akun
  const [guruBelumPunyaAkun, siswaBelumPunyaAkun] = await prisma.$transaction([
    prisma.guru.findMany({
      where: { userId: null },
      select: { id: true, nama: true },
      orderBy: { nama: "asc" },
    }),
    prisma.siswa.findMany({
      where: { userId: null },
      select: { id: true, nama: true, kelas: { select: { nama: true } } },
      orderBy: { kelas: { nama: "asc" }, nama: "asc" }, // Urut berdasarkan kelas, lalu nama
    }),
  ]);

  // Format data siswa untuk mempermudah pencarian
  const formattedAvailableSiswa = siswaBelumPunyaAkun.map((s) => ({
    id: s.id,
    nama: `${s.nama} (${s.kelas.nama})`,
  }));

  return (
    <div>
      <Breadcrumb />
      <div className="flex-1 space-y-4 p-8 pt-6">
        {/* Judul */}
        <div>
          <h1 className="text-3xl font-bold">Tambah Akun Pengguna</h1>
          <p className="text-sm text-muted-foreground">
            Buat akun login baru untuk Admin atau Guru
          </p>
        </div>

        {/* Kirim daftar guru ke form */}
        <FormTambahAkun
          dataGuru={guruBelumPunyaAkun}
          dataSiswa={formattedAvailableSiswa}
        />
      </div>
    </div>
  );
};

export default TambahAkunPage;
