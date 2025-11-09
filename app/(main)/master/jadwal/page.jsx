import Breadcrumb from "@/components/Breadcrumb";
import JadwalClient from "@/components/JadwalClient";
import { prisma } from "@/lib/prisma";
import React from "react";

const JadwalPage = async ({ searchParams }) => {
  const queryParam = await searchParams;

  // Definisikan parameter pencarian
  const search = queryParam.search || "";
  const page = Number(queryParam.page) || 1;
  const limit = Number(queryParam.limit) || 10;
  const skip = (page - 1) * limit;

  // jika query search kosong, tampilkan semua data
  const whereClause = search
    ? {
        OR: [
          {
            hari: {
              contains: search,
              mode: "insensitive",
            },
          },
          {
            guru: {
              nama: {
                contains: search,
                mode: "insensitive",
              },
            },
          },
          {
            mapel: {
              nama: {
                contains: search,
                mode: "insensitive",
              },
            },
          },
        ],
      }
    : {};

  // Jalankan query
  const [jadwal, totalCount] = await prisma.$transaction([
    prisma.jadwalPelajaran.findMany({
      where: whereClause,
      include: {
        guru: true,
        mapel: true,
        kelas: true,
      },
      orderBy: {
        hari: "asc",
      },
      skip,
      take: limit,
    }),
    prisma.jadwalPelajaran.count({
      where: whereClause,
    }),
  ]);

  //  Hitung total halaman
  const totalPage = Math.ceil(totalCount / limit);

  const formattedData = jadwal.map((item) => ({
    id: item.id,
    hari: item.hari,
    jamMulai: item.jamMulai,
    jamSelesai: item.jamSelesai,
    mapel: item.mapel.nama,
    kelas: item.kelas.nama,
    guru: item.guru.nama,
  }));

  return (
    <div>
      <Breadcrumb />

      <div className="flex-1 space-y-4 p-8 pt-6">
        <JadwalClient
          data={formattedData}
          totalPage={totalPage}
          currentPage={page}
          totalCount={totalCount}
        />
      </div>
    </div>
  );
};

export default JadwalPage;
