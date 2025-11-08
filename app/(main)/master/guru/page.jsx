import Breadcrumb from "@/components/Breadcrumb";
import GuruClient from "@/components/GuruClient";
import { prisma } from "@/lib/prisma";
import React from "react";

const GuruPage = async ({ searchParams }) => {
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
          {
            nip: {
              contains: search,
              mode: "insensitive",
            },
          },
          {
            nuptk: {
              contains: search,
              mode: "insensitive",
            },
          },
        ],
      }
    : {};

  // Jalankan query
  const [guru, totalCount] = await prisma.$transaction([
    prisma.guru.findMany({
      where: whereClause,
      orderBy: {
        nama: "asc",
      },
      skip,
      take: limit,
    }),
    prisma.guru.count({
      where: whereClause,
    }),
  ]);

  //  Hitung total halaman
  const totalPage = Math.ceil(totalCount / limit);

  const formattedData = guru.map((item) => ({
    id: item.id,
    nama: item.nama,
    gender: item.gender,
    nip: item.nip,
    nuptk: item.nuptk,
    kode: item.kode,
  }));

  return (
    <div>
      <Breadcrumb />

      <div className="flex-1 space-y-4 p-8 pt-6">
        <GuruClient
          data={formattedData}
          totalPage={totalPage}
          currentPage={page}
          totalCount={totalCount}
        />
      </div>
    </div>
  );
};

export default GuruPage;
