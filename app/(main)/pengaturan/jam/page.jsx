export const dynamic = "force-dynamic";

import Breadcrumb from "@/components/Breadcrumb";
import { prisma } from "@/lib/prisma";
import React from "react";
import FormPengaturan from "@/components/form/FormPengaturan";
import Heading from "@/components/ui/Heading";

const PengaturanJamPage = async () => {
  // Ambil data pengaturan.
  let pengaturan = await prisma.pengaturan.findFirst();

  // Kalo databasenya kosong,
  //  buat data default
  if (!pengaturan) {
    pengaturan = await prisma.pengaturan.create({
      data: {
        jamMasukSekolah: "07:15",
        jamPulangSekolah: "13:00",
      },
    });
  }

  return (
    <div>
      <Breadcrumb />
      <div className="flex-1 space-y-4 p-8 pt-6">
        <Heading
          title="Pengaturan Jam"
          description="Atur jam masuk dan jam pulang sekolah."
        />

        {/* Kirim data awal ke form client */}
        <FormPengaturan initialData={pengaturan} />
      </div>
    </div>
  );
};

export default PengaturanJamPage;
