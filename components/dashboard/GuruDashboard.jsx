import React, { useEffect, useState } from "react";
import TabelSiswaAlfa from "../tabel/TabelSiswaAlfa";
import TabelJadwalGuruHariIni from "../tabel/TabelJadwalGuruHariIni";
import { useToaster } from "@/providers/ToasterProvider";
import { getGuruById } from "@/lib/data";
import { getTimeFromDate, getTodayNameWITA } from "@/lib/formatTime";
import TabelJadwalSaya from "../tabel/TabelJadwalSaya";

const GuruDashboard = ({ session }) => {
  const { user } = session;
  const [dataJadwalHariIni, setDataJadwalHariIni] = useState([]);

  const toaster = useToaster();
  const jamSekarang = getTimeFromDate(new Date());

  useEffect(() => {
    const fetchData = async () => {
      try {
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
      }
    };

    fetchData();
  }, [toaster, user.guruId]);

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
