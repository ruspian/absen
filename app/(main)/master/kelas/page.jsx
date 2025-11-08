import Breadcrumb from "@/components/Breadcrumb";
import KelasClient from "@/components/KelasClient";
import { prisma } from "@/lib/prisma";
import React from "react";

const KelasPage = async ({ searchParams }) => {
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
  const [kelas, totalCount] = await prisma.$transaction([
    prisma.kelas.findMany({
      where: whereClause,
      include: {
        waliKelas: {
          select: {
            nama: true,
          },
        },
      },
      orderBy: {
        nama: "asc",
      },
      skip,
      take: limit,
    }),
    prisma.kelas.count({
      where: whereClause,
    }),
  ]);

  //  Hitung total halaman
  const totalPage = Math.ceil(totalCount / limit);

  const formattedData = kelas.map((item) => ({
    id: item.id,
    nama: item.nama,
    waliKelas: item.waliKelas?.nama || "-",
  }));

  return (
    <div>
      <Breadcrumb />

      <div className="flex-1 space-y-4 p-8 pt-6">
        <KelasClient
          data={formattedData}
          totalPage={totalPage}
          currentPage={page}
          totalCount={totalCount}
        />
      </div>
    </div>
  );
};

export default KelasPage;
