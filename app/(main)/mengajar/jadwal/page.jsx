"use client";

import React, { useState, useEffect } from "react";
import { getTimeFromDate, getWaktuSekarang } from "@/lib/formatTime";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Breadcrumb from "@/components/Breadcrumb";
import { Skeleton } from "@/components/ui/skeleton";
import { getGuru } from "@/lib/data";
import AksesDitolak from "@/components/AksesDitolak";

const AbsenMapelListPage = () => {
  const [jadwal, setJadwal] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  // Fetch data jadwal ngajar hari ini
  useEffect(() => {
    const fetchJadwal = async () => {
      try {
        const response = await fetch(`
          ${process.env.NEXT_PUBLIC_BASE_URL}/api/jadwal`);

        if (!response.ok) {
          const data = await response.json();
          throw new Error(data.message || "Gagal mengambil data jadwal");
        }

        const data = await response.json();
        setJadwal(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchJadwal();
  }, []);

  const waktuSekarang = getWaktuSekarang();

  //   loading
  if (isLoading) {
    return (
      <div>
        <Breadcrumb />
        <div className="flex-1 space-y-4 p-8 pt-6">
          {/* Skeleton Judul */}
          <Skeleton className="h-10 w-1/3 mb-2" />
          <Skeleton className="h-5 w-1/2" />

          {/* Skeleton Card Jadwal */}
          <div className="mt-6 flex flex-col gap-4">
            {/* Card 1 */}
            <div className="border rounded-lg p-4 flex items-center justify-between">
              <div className="flex-1 space-y-2">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-6 w-1/2" />
                <Skeleton className="h-5 w-1/4" />
              </div>
              <div className="flex flex-col items-end gap-2">
                <Skeleton className="h-5 w-20" />
                <Skeleton className="h-9 w-32" />
              </div>
            </div>
            {/* Card 2 */}
            <div className="border rounded-lg p-4 flex items-center justify-between">
              <div className="flex-1 space-y-2">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-6 w-1/2" />
                <Skeleton className="h-5 w-1/4" />
              </div>
              <div className="flex flex-col items-end gap-2">
                <Skeleton className="h-5 w-20" />
                <Skeleton className="h-9 w-32" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-8">
        <Breadcrumb />
        <AksesDitolak teks={error} />
      </div>
    );
  }

  return (
    <div>
      <Breadcrumb />
      <div className="flex-1 space-y-4 p-8 pt-6">
        <h1 className="font-bold text-3xl mb-4">Absen Mata Pelajaran</h1>

        {jadwal.length === 0 ? (
          <div className="mt-8 p-4 border rounded-md text-center text-muted-foreground">
            Tidak ada jadwal mengajar hari ini.
          </div>
        ) : (
          <div className="mt-6 flex flex-col gap-4">
            {jadwal.map((item) => {
              const jamMulai = new Date(item.jamMulai).getTime();
              const jamSelesai = new Date(item.jamSelesai).getTime();

              let statusJadwal = "SELESAI";
              if (waktuSekarang < jamMulai) {
                statusJadwal = "AKAN DATANG";
              } else if (
                waktuSekarang >= jamMulai &&
                waktuSekarang <= jamSelesai
              ) {
                statusJadwal = "BERLANGSUNG";
              }

              return (
                <div
                  key={item.id}
                  className="border rounded-lg p-4 flex items-center justify-between"
                >
                  {/* Info Jadwal */}
                  <div className="flex-1">
                    <span className="text-sm text-muted-foreground">
                      {getTimeFromDate(item.jamMulai)} -{" "}
                      {getTimeFromDate(item.jamSelesai)}
                    </span>
                    <h3 className="text-xl font-semibold">{item.mapel.nama}</h3>
                    <p className="text-lg">{item.kelas.nama}</p>
                  </div>

                  {/* Status & Tombol Aksi */}
                  <div className="flex flex-col items-end gap-2">
                    {statusJadwal === "BERLANGSUNG" && (
                      <span className="text-xs font-medium text-green-600 bg-green-100 px-2 py-1 rounded-full">
                        SEDANG BERLANGSUNG
                      </span>
                    )}
                    {statusJadwal === "AKAN DATANG" && (
                      <span className="text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                        AKAN DATANG
                      </span>
                    )}
                    {statusJadwal === "SELESAI" && (
                      <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                        SELESAI
                      </span>
                    )}

                    <Button
                      size="sm"
                      // disabled={statusJadwal !== "BERLANGSUNG"}
                      onClick={() => router.push(`/absensi/mapel/${item.id}`)}
                    >
                      Ambil Absen Mapel
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default AbsenMapelListPage;
