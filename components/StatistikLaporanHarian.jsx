import React from "react";

const StatistikLaporanHarian = ({ statistik }) => {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <div className="p-4 border rounded-lg">
        <h3 className="font-semibold text-lg">Statistik Siswa</h3>
        <p className="text-2xl font-bold">
          {statistik.siswa.hadir} / {statistik.siswa.total}
        </p>
        <p className="text-sm text-muted-foreground">Siswa Hadir</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-semibold text-lg">Statistik Guru</h3>
        <p className="text-2xl font-bold">
          {statistik.guru.hadir} / {statistik.guru.total}
        </p>
        <p className="text-sm text-muted-foreground">Guru Hadir</p>
      </div>
    </div>
  );
};

export default StatistikLaporanHarian;
