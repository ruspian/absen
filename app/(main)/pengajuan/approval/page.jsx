// Paksa dinamis
export const dynamic = "force-dynamic";

import Breadcrumb from "@/components/Breadcrumb";
import { prisma } from "@/lib/prisma";
import React from "react";
import ApprovalClient from "@/components/ApprovalClient";
import Heading from "@/components/ui/Heading";
import { formatTanggalID } from "@/lib/formatTime";

const ApprovalPage = async () => {
  // Ambil semua pengajuan yang masih 'PENDING'
  const submissions = await prisma.pengajuanIzin.findMany({
    where: {
      status: "PENDING",
    },
    include: {
      siswa: {
        // Kita butuh data siswa
        select: {
          nama: true,
          kelas: {
            select: {
              nama: true,
            },
          },
        },
      },
    },
    orderBy: {
      tanggal: "asc", // Tampilkan yang paling lama dulu
    },
  });

  // Format data
  const formattedData = submissions.map((item) => ({
    id: item.id,
    tanggal: formatTanggalID(item.tanggal),
    namaSiswa: item.siswa.nama,
    kelas: item.siswa.kelas.nama,
    tipe: item.tipe, // Ini "SAKIT" atau "IZIN"
    alasan: item.alasan,
    buktiUrl: item.buktiUrl,
    siswaId: item.siswaId,
  }));

  return (
    <div>
      <Breadcrumb />
      <div className="flex-1 space-y-4 p-8 pt-6">
        <Heading
          title={`Persetujuan Izin (${formattedData.length})`}
          description="Setujui atau tolak pengajuan izin dan sakit dari siswa."
        />

        <ApprovalClient data={formattedData} />
      </div>
    </div>
  );
};

export default ApprovalPage;
