"use client";

import React, { useState, useRef, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { useToaster } from "@/providers/ToasterProvider";
import { useRouter } from "next/navigation";
import TabelScanSiswa from "./tabel/TabelScanSiswa";
import { formatTanggalID, getTimeFromDate } from "@/lib/formatTime";
import { useSession } from "next-auth/react";

export const ScanMode = () => {
  const [kode, setKode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [log, setLog] = useState([]);

  const inputRef = useRef(null);
  const toaster = useToaster();
  const router = useRouter();

  const session = useSession();

  // Fokus ke input pas tab ini dibuka
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleScan = async (e) => {
    e.preventDefault();
    if (!kode || isLoading) return;

    setIsLoading(true);

    try {
      const response = await fetch(`/api/absen/scan`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ kode: kode }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message);
      }

      // Sukses
      setLog([data.data, ...log]);
      toaster.current.show({
        title: "Sukses",
        message: data.message,
        type: "success",
        position: "top-center",
        duration: 5000,
      });
      router.refresh(); // Refresh data di Tab 2
    } catch (error) {
      // Gagal
      setLog([error.message, ...log]);
      toaster.current.show({
        title: "Error",
        message: error.message,
        type: "error",
        position: "top-center",
        duration: 5000,
      });
    } finally {
      setIsLoading(false);
      setKode("");
      inputRef.current?.focus();
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl font-semibold text-center">
        Scan Barcode Absensi
      </h2>

      <form onSubmit={handleScan}>
        <Input
          ref={inputRef}
          value={kode}
          onChange={(e) => setKode(e.target.value)}
          placeholder="Arahkan scanner ke barcode..."
          className="text-center text-lg p-4 hidden "
          disabled={isLoading}
        />
        <button type="submit" className="hidden" />
      </form>

      {/* Tampilan Log */}
      <div className="p-4 border rounded-md h-96 overflow-y-auto">
        <div className="mb-4">
          <p className="font-normal text-sm mb-2">
            Hari : {formatTanggalID(new Date())}
          </p>
          <p className="font-normal text-sm mb-2">
            Guru Piket : {session.data?.user?.name}
          </p>
        </div>

        <TabelScanSiswa filteredData={log} />
      </div>
    </div>
  );
};
