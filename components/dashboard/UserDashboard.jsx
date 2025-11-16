"use client";

import React, { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { useSession } from "next-auth/react";

import StatusHarianCard from "../StatusHarianCard";
import TabelDashboardSiswa from "../tabel/TabelDashboardSiswa";
import AksesDitolak from "../AksesDitolak";

// Komponen Skeleton
const DashboardSkeleton = () => (
  <div className="mt-8 space-y-4">
    <Skeleton className="h-32 w-full" />
    <Skeleton className="h-8 w-1/3 mb-2" />
    <Skeleton className="h-64 w-full" />
  </div>
);

const UserDashboard = () => {
  const { data: session } = useSession();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data dashboard siswa
  useEffect(() => {
    // fetch kalo udah pasti login sebagai USER
    if (session?.user?.role === "USER") {
      const fetchData = async () => {
        try {
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/dashboard/siswa`
          );

          if (!response.ok) {
            const errData = await response.json();
            throw new Error(errData.message || "Gagal mengambil data");
          }

          const result = await response.json();
          setData(result);
        } catch (err) {
          setError(err.message);
        } finally {
          setIsLoading(false);
        }
      };
      fetchData();
    } else {
      // Kalo bukan user, tunggu aja
      setIsLoading(true);
    }
  }, [session]); // Jalanin ulang kalo sesi berubah

  //  Tampilan Loading
  if (isLoading) {
    return <DashboardSkeleton />;
  }

  //  Tampilan Error
  if (error) {
    return <AksesDitolak teks={error} />;
  }

  // Tampilan Kalo Akun Belum di-Link
  if (!session?.user?.siswaId) {
    return (
      <div className="mt-8 p-8 border rounded-md text-center">
        <h2 className="text-2xl font-bold text-red-600">
          Akun Belum Terhubung
        </h2>
        <p className="text-muted-foreground">
          Akun Anda belum terhubung ke data siswa. Harap hubungi Admin.
        </p>
      </div>
    );
  }

  // Tampilan Utama
  return (
    <div className="mt-8 space-y-6">
      {/* Kartu Status Hari Ini */}
      <StatusHarianCard
        absen={data.absenHarian}
        jamMasukSekolah={data.jamMasukSekolah}
      />

      {/* Tabel Riwayat Absen Mapel */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Riwayat Absensi Mapel</h2>
        <div className="rounded-md border h-96 overflow-y-auto">
          <TabelDashboardSiswa data={data} />
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
