import Breadcrumb from "@/components/Breadcrumb";
import MapelClient from "@/components/MapelClient";
import { prisma } from "@/lib/prisma";
import React from "react";

const MapelPage = async ({ searchParams }) => {
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
            nama: {
              contains: search,
              mode: "insensitive",
            },
          },
        ],
      }
    : {};

  // Jalankan query
  const [mapel, totalCount] = await prisma.$transaction([
    prisma.mataPelajaran.findMany({
      where: whereClause,
      include: {
        jadwal: true,
      },
      orderBy: {
        nama: "asc",
      },
      skip,
      take: limit,
    }),
    prisma.mataPelajaran.count({
      where: whereClause,
    }),
  ]);

  //  Hitung total halaman
  const totalPage = Math.ceil(totalCount / limit);

  const formattedData = mapel.map((item) => ({
    id: item.id,
    nama: item.nama,
    kode: item.kode,
    jadwal: item.jadwal,
  }));

  return (
    <div>
      <Breadcrumb />

      <div className="flex-1 space-y-4 p-8 pt-6">
        <MapelClient
          data={formattedData}
          totalPage={totalPage}
          currentPage={page}
          totalCount={totalCount}
        />
      </div>
    </div>
  );
};

export default MapelPage;
