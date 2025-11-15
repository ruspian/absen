import React, { useEffect, useState } from "react";
import TabelSiswaAlfa from "../tabel/TabelSiswaAlfa";
import { Skeleton } from "../ui/skeleton";
import { StatCardAdmin } from "../StatCard";
import { PiStudent } from "react-icons/pi";
import { FaChalkboardTeacher } from "react-icons/fa";
import { IoMale, IoFemale } from "react-icons/io5";
import { FiPieChart } from "react-icons/fi";

const AdminDashboard = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/dashboard/admin`
        );
        if (!response.ok) {
          throw new Error("Gagal mengambil data dashboard");
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
  }, []);

  // Tanganin state loading
  if (isLoading) {
    return (
      <div className="mt-8">
        {/* Skeleton 6 Card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <Skeleton className="h-[100px] w-full" />
          <Skeleton className="h-[100px] w-full" />
          <Skeleton className="h-[100px] w-full" />
          <Skeleton className="h-[100px] w-full" />
          <Skeleton className="h-[100px] w-full" />
          <Skeleton className="h-[100px] w-full" />
        </div>
        {/* Skeleton Tabel */}
        <div className="mt-8">
          <Skeleton className="h-8 w-1/3 mb-2" />
          <Skeleton className="h-96 w-full" />
        </div>
      </div>
    );
  }

  // Tanganin state Error
  if (error) {
    return <div className="mt-8 text-red-500">Error: {error}</div>;
  }

  // Tanganin kalo data gak ada
  if (!data) {
    return <div className="mt-8">Data tidak ditemukan.</div>;
  }

  const { statistik, siswaAlfa } = data;

  return (
    <div className="mt-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <StatCardAdmin
          title="JUMLAH SISWA"
          value={statistik.totalSiswa || 0}
          icon={<PiStudent />}
        />
        <StatCardAdmin
          title="JUMLAH LAKI-LAKI"
          value={statistik.totalSiswaLaki || 0}
          icon={<IoMale />}
        />
        <StatCardAdmin
          title="JUMLAH PEREMPUAN"
          value={statistik.totalSiswaPerempuan || 0}
          icon={<IoFemale />}
        />
        <StatCardAdmin
          title="JUMLAH GURU"
          value={statistik.totalGuru || 0}
          icon={<FaChalkboardTeacher />}
        />
        <StatCardAdmin
          title="SISWA HADIR"
          value={statistik.persenSiswa}
          icon={<FiPieChart />}
        />
        <StatCardAdmin
          title="GURU HADIR"
          value={statistik.persenGuru}
          icon={<FiPieChart />}
        />
      </div>

      <div className="mt-8">
        <h1 className="font-bold text-xl mb-2">
          DAFTAR SISWA ALFA & BELUM ABSEN HARI INI
        </h1>
        <TabelSiswaAlfa data={siswaAlfa} />
      </div>
    </div>
  );
};

export default AdminDashboard;
