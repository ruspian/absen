"use client";

import React, { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { ScanBarcode, UserCheck } from "lucide-react";
import StatCard from "../StatCard";
import ActionCard from "../ActionCard";
import { getDashboardGuruPiket, getGuruById } from "@/lib/data";
import { useToaster } from "@/providers/ToasterProvider";
import TabelJadwalGuruHariIni from "../tabel/TabelJadwalGuruHariIni";
import { getTodayNameWITA, getWaktuSekarang } from "@/lib/formatTime";
import AksesDitolak from "../AksesDitolak";
import { useRouter } from "next/navigation";

const PiketDashboard = ({ session }) => {
  const [stats, setStats] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [dataJadwalHariIni, setDataJadwalHariIni] = useState([]);

  const { user } = session;

  const toaster = useToaster();
  const router = useRouter();
  const jamSekarang = getWaktuSekarang();

  // Fetch data statistik piket
  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [piketResponse, jadwalResponse] = await Promise.all([
          fetch("/api/dashboard/piket"),
          fetch("/api/jadwal"),
        ]);

        if (!piketResponse.ok) {
          const errData = await piketResponse.json();
          throw new Error(
            `Statistik: ${errData.message || "Gagal mengambil data"}`
          );
        }
        const dataPiket = await piketResponse.json();
        setStats(dataPiket);

        if (!jadwalResponse.ok) {
          const errData = await jadwalResponse.json();
          setDataJadwalHariIni([]); // Set jadi array kosong
        } else {
          const dataJadwal = await jadwalResponse.json();
          setDataJadwalHariIni(dataJadwal);
        }
      } catch (err) {
        console.log("Error", err);

        setError(err.message);
        toaster.current.show({
          title: "Error",
          message: err.message,
          type: "error",
          position: "top-center",
          duration: 5000,
        });
      } finally {
        setIsLoading(false);
      }
    };
    fetchStats();
  }, [toaster, user]);

  // jika Loading
  if (isLoading) {
    return (
      <div className="mt-8 space-y-4">
        <Skeleton className="h-20 w-full" />
        <Skeleton className="h-20 w-full" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Skeleton className="h-24 w-full" />
          <Skeleton className="h-24 w-full" />
          <Skeleton className="h-24 w-full" />
        </div>
      </div>
    );
  }

  if (error) {
    return <AksesDitolak teks={error} />;
  }

  return (
    <div className="mt-8 space-y-6">
      {/* Tombol Aksi Utama */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ActionCard
          title="Absensi Harian Siswa"
          desc="Scan barcode atau input manual absen siswa."
          href="/absensi/harian-siswa"
        />
        <ActionCard
          title="Absensi Harian Guru"
          desc="Scan barcode atau input manual absen guru."
          href="/absensi/harian-guru"
        />
      </div>

      {/* Statistik Cepat */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard
          title="Siswa Hadir"
          value={`${stats?.siswa?.hadir || 0} / ${stats?.siswa?.total || 0}`}
          desc="Total siswa yang hadir hari ini"
          icon={<UserCheck className="h-6 w-6 text-primary" />}
        />
        <StatCard
          title="Guru Hadir"
          value={`${stats?.guru?.hadir || 0} / ${stats?.guru?.total || 0}`}
          desc="Total guru yang hadir hari ini"
          icon={<UserCheck className="h-6 w-6 text-primary" />}
        />
        <StatCard
          title="Siswa Belum Absen"
          value={stats?.siswa?.belumAbsen || 0}
          desc="Siswa yang belum di-scan / di-input"
          icon={<ScanBarcode className="h-6 w-6 text-primary" />}
        />
      </div>

      <div className="mt-8">
        <h1 className="font-bold text-xl mb-2">JADWAL SAYA HARI INI</h1>
        <TabelJadwalGuruHariIni
          data={dataJadwalHariIni}
          jamSekarang={jamSekarang}
          router={router}
        />
      </div>
    </div>
  );
};

export default PiketDashboard;
