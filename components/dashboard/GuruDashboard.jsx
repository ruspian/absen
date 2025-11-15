import React, { useEffect, useState } from "react";
import TabelJadwalGuruHariIni from "../tabel/TabelJadwalGuruHariIni";
import { useToaster } from "@/providers/ToasterProvider";
import { getGuruById } from "@/lib/data";
import { getTimeFromDate, getTodayNameWITA } from "@/lib/formatTime";
import { Skeleton } from "../ui/skeleton";

const GuruDashboard = ({ session }) => {
  const { user } = session;
  const [dataJadwalHariIni, setDataJadwalHariIni] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const toaster = useToaster();
  const jamSekarang = getTimeFromDate(new Date());

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);

        const guru = await getGuruById(user.guruId);

        const hariIni = getTodayNameWITA();
        const jadwalHariIni = guru.mengajarDiJadwal?.find(
          (jadwal) => jadwal.hari === hariIni
        );

        if (!jadwalHariIni) {
          setDataJadwalHariIni([]);
          return;
        }

        setDataJadwalHariIni([jadwalHariIni]);
      } catch (error) {
        toaster.current.show({
          title: "Error",
          message: error.message || "Gagal mengambil data guru",
          type: "error",
          position: "top-center",
          duration: 5000,
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [toaster, user.guruId]);

  if (isLoading) {
    return (
      <div className="mt-8">
        {/* Skeleton Tabel */}
        <div className="mt-8">
          <Skeleton className="h-8 w-1/3 mb-2" />
          <Skeleton className="h-96 w-full" />
        </div>
      </div>
    );
  }

  return (
    <div className="mt-8">
      <div className="mt-8">
        <h1 className="font-bold text-xl mb-2">JADWAL SAYA HARI INI</h1>
        <TabelJadwalGuruHariIni
          data={dataJadwalHariIni}
          jamSekarang={jamSekarang}
        />
      </div>
    </div>
  );
};

export default GuruDashboard;
