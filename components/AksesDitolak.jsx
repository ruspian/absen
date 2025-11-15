import React from "react";
import { MdLockPerson } from "react-icons/md";

const AksesDitolak = ({ teks }) => {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh]">
      <div className="flex flex-col items-center border rounded-lg p-4 w-2xl">
        <div className="flex flex-col items-center">
          <MdLockPerson className="h-16 w-16 text-red-600" />
          <h2 className="text-2xl font-bold text-red-600">Akses Ditolak!</h2>
        </div>
        <p className="text-muted-foreground">{teks}</p>
      </div>
    </div>
  );
};

export default AksesDitolak;
