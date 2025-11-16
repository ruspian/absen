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
    },
  });

  if (!userToEdit) {
    return <div className="p-8">Akun tidak ditemukan.</div>;
  }

  // Ambil daftar guru yang tersedia untuk di-link
  const availableGurus = await prisma.guru.findMany({
    where: {
      OR: [
        { userId: null }, //  Yang belum punya akun
        { userId: id }, // 2. atau yang udah nempel sama akun INI
      ],
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
        <div>
          <h1 className="text-3xl font-bold">Edit Akun Pengguna</h1>
          <p className="text-sm text-muted-foreground">
            Mengedit akun: {userToEdit.email}
          </p>
        </div>

        <FormEditAkun
          initialData={userToEdit} // Data user yang mau diedit
          dataGuru={availableGurus} // Daftar guru buat dropdown
        />
      </div>
    </div>
  );
};

export default EditAkunPage;
