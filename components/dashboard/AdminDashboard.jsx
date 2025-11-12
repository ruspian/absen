import React, { useEffect, useState } from "react";
import { PiStudent } from "react-icons/pi";
import { FaChalkboardTeacher } from "react-icons/fa";
import TabelSiswaAlfa from "../tabel/TabelSiswaAlfa";
import { Skeleton } from "../ui/skeleton";

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
    return <Skeleton />;
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
        <div className="border rounded-sm flex items-center gap-2 p-2">
          <PiStudent size={70} />
          <div className="">
            <h3 className="font-bold text-xl">JUMLAH SISWA</h3>
            <h1 className="font-bold text-4xl">{statistik.totalSiswa || 0}</h1>
          </div>
        </div>

        <div className="border rounded-sm flex items-center gap-2 p-2">
          <PiStudent size={70} />
          <div className="">
            <h3 className="font-bold text-xl">JUMLAH LAKI-LAKI</h3>
            <h1 className="font-bold text-4xl">
              {statistik.totalSiswaLaki || 0}
            </h1>
          </div>
        </div>

        <div className="border rounded-sm flex items-center gap-2 p-2">
          <PiStudent size={70} />
          <div className="">
            <h3 className="font-bold text-xl">JUMLAH PEREMPUAN</h3>
            <h1 className="font-bold text-4xl">
              {statistik.totalSiswaPerempuan || 0}
            </h1>
          </div>
        </div>

        <div className="border rounded-sm flex items-center gap-2 p-2">
          <PiStudent size={70} />
          <div className="">
            <h3 className="font-bold text-xl">JUMLAH GURU</h3>
            <h1 className="font-bold text-4xl">{statistik.totalGuru || 0}</h1>
          </div>
        </div>

        <div className="border rounded-sm flex items-center gap-2 p-2">
          <FaChalkboardTeacher size={70} />
          <div className="">
            <h3 className="font-bold text-xl">ABSENSI SISWA</h3>
            <h1 className="font-bold text-4xl">{statistik.persenSiswa}</h1>
          </div>
        </div>

        <div className="border rounded-sm flex items-center gap-2 p-2">
          <FaChalkboardTeacher size={70} />
          <div className="">
            <h3 className="font-bold text-xl">ABSENSI GURU</h3>
            <h1 className="font-bold text-4xl">{statistik.persenGuru}</h1>
          </div>
        </div>
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
