import { formatTanggalID } from "@/lib/formatTanggalID";
import React from "react";
import { FaChalkboardTeacher } from "react-icons/fa";
import { PiStudent } from "react-icons/pi";
import TabelSiswaAlfa from "../tabel/TabelSiswaAlfa";
import TabelJadwalGuruHariIni from "../tabel/TabelJadwalGuruHariIni";

const GuruDashboard = () => {
  return (
    <div className="mt-8">
      <div className="flex items-center justify-end py-6 ">
        <h1 className=" border rounded-sm px-4 py-2 text-xs">
          {formatTanggalID(new Date())}
        </h1>
      </div>

      <div className="mt-8">
        <h1 className="font-bold text-xl mb-2">JADWAL SAYA HARI INI</h1>
        <TabelJadwalGuruHariIni />
      </div>

      <div className="mt-8">
        <h1 className="font-bold text-xl mb-2">DAFTAR SISWA ALFA HARI INI</h1>
        <TabelSiswaAlfa />
      </div>
    </div>
  );
};

export default GuruDashboard;
