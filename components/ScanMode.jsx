"use client";

import React, { useState, useRef, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { useToaster } from "@/providers/ToasterProvider";
import { useRouter } from "next/navigation";
import TabelScanSiswa from "./tabel/TabelScanSiswa";
import { formatTanggalID } from "@/lib/formatTime";
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
    // Selalu fokus ke input kalo lagi GAK loading
    if (!isLoading) {
      inputRef.current?.focus();
    }
  }, [isLoading]);

  const handleScan = async (e) => {
    e.preventDefault();
    if (!kode || isLoading) return;

    setIsLoading(true);

    try {
      const payload = {
        kode: kode,
        tipe: "siswa",
      };

      const response = await fetch(`/api/absen/scan`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        if (data.data) {
          // Cek kalo datanya udah ada di log
          const alreadyInLog = log.find((item) => item.id === data.data.id);
          if (!alreadyInLog) {
            setLog([data.data, ...log]);
          }
        }
        throw new Error(data.message); // Lempar pesannya aja
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
    <div
      className="flex flex-col gap-4"
      onClick={() => inputRef.current?.focus()}
    >
      <h2 className="text-xl font-semibold text-center">Scan Barcode Siswa</h2>

      <form onSubmit={handleScan}>
        <Input
          ref={inputRef}
          value={kode}
          onChange={(e) => setKode(e.target.value)}
          placeholder="Arahkan scanner ke barcode..."
          className="absolute -top-96 -left-96 w-0 h-0 p-0 m-0 border-0 opacity-0"
          disabled={isLoading}
          onBlur={() => {
            if (!isLoading) {
              inputRef.current?.focus();
            }
          }}
        />
        <button type="submit" className="hidden" />
      </form>

      <div className="text-center text-lg text-muted-foreground p-4 border-2 border-dashed rounded-md">
        {isLoading ? "Memproses..." : "SIAP UNTUK SCAN"}
      </div>

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
