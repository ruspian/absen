// Paksa dinamis biar datanya selalu baru
export const dynamic = "force-dynamic";

import Breadcrumb from "@/components/Breadcrumb";
import FormTambahAkun from "@/components/form/FormTambahAkun";
import { prisma } from "@/lib/prisma";
import React from "react";

const TambahAkunPage = async () => {
  // 1. Ambil data guru yang belum punya 'userId'
  const guruBelumPunyaAkun = await prisma.guru.findMany({
    where: {
      userId: null, // Cuma ambil guru yang belum ke-link
    },
    select: {
      id: true,
      nama: true,
    },
    orderBy: {
      nama: "asc",
    },
  });

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
        <FormTambahAkun dataGuru={guruBelumPunyaAkun} />
      </div>
    </div>
  );
};

export default TambahAkunPage;
