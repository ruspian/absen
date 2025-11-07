import React from "react";
import TabelJadwalGuruHariIni from "../tabel/TabelJadwalGuruHariIni";
import TabelSiswaAlfa from "../tabel/TabelSiswaAlfa";
import { FaChalkboardTeacher } from "react-icons/fa";
import { PiStudent } from "react-icons/pi";

const PiketDashboard = () => {
  return (
    <div className="mt-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <div className="border rounded-sm flex items-center gap-2 p-2">
          <PiStudent size={70} />
          <div className="">
            <h3 className="font-bold text-xl">JUMLAH SISWA</h3>
            <h1 className="font-bold text-4xl">100</h1>
          </div>
        </div>

        <div className="border rounded-sm flex items-center gap-2 p-2">
          <PiStudent size={70} />
          <div className="">
            <h3 className="font-bold text-xl">JUMLAH LAKI-LAKI</h3>
            <h1 className="font-bold text-4xl">50</h1>
          </div>
        </div>

        <div className="border rounded-sm flex items-center gap-2 p-2">
          <PiStudent size={70} />
          <div className="">
            <h3 className="font-bold text-xl">JUMLAH PEREMPUAN</h3>
            <h1 className="font-bold text-4xl">50</h1>
          </div>
        </div>

        <div className="border rounded-sm flex items-center gap-2 p-2">
          <PiStudent size={70} />
          <div className="">
            <h3 className="font-bold text-xl">JUMLAH GURU</h3>
            <h1 className="font-bold text-4xl">30</h1>
          </div>
        </div>

        <div className="border rounded-sm flex items-center gap-2 p-2">
          <FaChalkboardTeacher size={70} />
          <div className="">
            <h3 className="font-bold text-xl">ABSENSI SISWA</h3>
            <h1 className="font-bold text-4xl">60%</h1>
          </div>
        </div>

        <div className="border rounded-sm flex items-center gap-2 p-2">
          <FaChalkboardTeacher size={70} />
          <div className="">
            <h3 className="font-bold text-xl">ABSENSI GURU</h3>
            <h1 className="font-bold text-4xl">60%</h1>
          </div>
        </div>
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

export default PiketDashboard;
