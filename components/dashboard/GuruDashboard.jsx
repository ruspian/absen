import React from "react";
import TabelSiswaAlfa from "../tabel/TabelSiswaAlfa";
import TabelJadwalGuruHariIni from "../tabel/TabelJadwalGuruHariIni";

const GuruDashboard = () => {
  return (
    <div className="mt-8">
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
