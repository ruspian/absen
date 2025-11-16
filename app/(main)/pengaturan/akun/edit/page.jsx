// Paksa dinamis
export const dynamic = "force-dynamic";

import Breadcrumb from "@/components/Breadcrumb";
import FormEditAkun from "@/components/form/FormEditAkun";
import { prisma } from "@/lib/prisma";
import React from "react";

const EditAkunPage = async ({ searchParams }) => {
  const { id } = await searchParams;

  if (!id) {
    return (
      <div className="p-8">
        <h1 className="text-3xl font-bold">Error</h1>
        <p>ID Akun tidak ditemukan!</p>
      </div>
    );
  }

  // Ambil data akun user yang mau diedit
  const userToEdit = await prisma.user.findUnique({
    where: { id: id },
    include: {
      guruProfil: {
        select: {
          id: true,
        },
      },
      siswaProfil: { select: { id: true } },
    },
  });

  const [availableGurus, availableSiswa] = await prisma.$transaction([
    prisma.guru.findMany({
      where: { OR: [{ userId: null }, { userId: id }] },
      select: { id: true, nama: true },
      orderBy: { nama: "asc" },
    }),
    prisma.siswa.findMany({
      where: { OR: [{ userId: null }, { userId: id }] },
      select: { id: true, nama: true, kelas: { select: { nama: true } } },
      orderBy: { kelas: { nama: "asc" }, nama: "asc" },
    }),
  ]);

  const formattedAvailableSiswa = availableSiswa.map((s) => ({
    id: s.id,
    nama: `${s.nama} (${s.kelas.nama})`,
  }));

  if (!userToEdit) {
    return <div className="p-8">Akun tidak ditemukan.</div>;
  }

  return (
    <div>
      <Breadcrumb />
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div>
          <h1 className="text-3xl font-bold">Edit Akun Pengguna</h1>
          <p className="text-sm text-muted-foreground">
            Mengedit akun: {userToEdit.email}
          </p>
        </div>

        <FormEditAkun
          initialData={userToEdit}
          dataGuru={availableGurus}
          dataSiswa={formattedAvailableSiswa}
        />
      </div>
    </div>
  );
};

export default EditAkunPage;
