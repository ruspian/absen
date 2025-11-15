import Breadcrumb from "@/components/Breadcrumb";
import SiswaClient from "@/components/SiswaClient";
import { prisma } from "@/lib/prisma";
import React from "react";

const SiswaPage = async ({ searchParams }) => {
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
            nisn: {
              contains: search,
              mode: "insensitive",
            },
          },
          {
            kelas: {
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
  const [siswa, totalCount, dataKelas] = await prisma.$transaction([
    prisma.siswa.findMany({
      where: whereClause,
      include: {
        kelas: true,
      },
      orderBy: {
        nama: "asc",
      },
      skip,
      take: limit,
    }),
    prisma.siswa.count({
      where: whereClause,
    }),
    prisma.kelas.findMany({
      orderBy: { nama: "asc" },
    }),
  ]);

  //  Hitung total halaman
  const totalPage = Math.ceil(totalCount / limit);

  // Format data
  const formattedData = siswa.map((item) => ({
    id: item.id,
    nama: item.nama,
    nisn: item.nisn,
    kode: item.kode,
    gender: item.gender,
    kelas: item.kelas.nama,
  }));

  return (
    <div className="flex-col">
      <Breadcrumb />
      <div className="flex-1 space-y-4 p-8 pt-6">
        <SiswaClient
          data={formattedData}
          totalPage={totalPage}
          currentPage={page}
          totalCount={totalCount}
          dataKelas={dataKelas}
        />
      </div>
    </div>
  );
};

export default SiswaPage;
