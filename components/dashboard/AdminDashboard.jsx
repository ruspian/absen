import React from "react";
import { PiStudent } from "react-icons/pi";
import { FaChalkboardTeacher } from "react-icons/fa";
import { formatTanggalID } from "@/lib/formatTanggalID";
import TabelSiswaAlfa from "../tabel/TabelSiswaAlfa";

const AdminDashboard = () => {
  return (
    <div className="mt-8">
      <div className="flex items-center justify-end py-6 ">
        <h1 className=" border rounded-sm px-4 py-2 text-xs">
          {formatTanggalID(new Date())}
        </h1>
      </div>

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
        <h1 className="font-bold text-xl mb-2">DAFTAR SISWA ALFA HARI INI</h1>
        <TabelSiswaAlfa />
      </div>
    </div>
  );
};

export default AdminDashboard;
