"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import { Plus, Printer } from "lucide-react";
import { Input } from "./ui/input";
import { Separator } from "@radix-ui/react-separator";
import TabelDataGuru from "./tabel/TabelDataGuru";
import Pagination from "./Pagination";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { useToaster } from "@/providers/ToasterProvider";
import { useReactToPrint } from "react-to-print";
import { getGuru } from "@/lib/data";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Barcode from "react-barcode";

const GuruClient = ({ data, totalPage, totalCount, currentPage }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const toaster = useToaster();

  const [dataGuruPrint, setDataGuruPrint] = useState([]);
  const [isFetchingPrint, setIsFetchingPrint] = useState(false);
  const [isPrinting, setIsPrinting] = useState(false);
  const printRef = useRef(null);

  const handlePrint = useReactToPrint({
    contentRef: printRef,
    documentTitle: `Barcode-Semua-Guru`,
    onAfterPrint: () => {
      setDataGuruPrint([]);
      setIsPrinting(false);
    },
  });

  useEffect(() => {
    if (isPrinting && dataGuruPrint.length > 0) {
      const printTimeout = setTimeout(() => {
        if (printRef.current) {
          handlePrint();
        } else {
          toaster.current.show({
            title: "Error Print",
            message: "Gagal memuat preview cetak.",
            type: "error",
            position: "top-center",
            duration: 5000,
          });
          setIsPrinting(false);
        }
      }, 0);
      return () => clearTimeout(printTimeout);
    }
  }, [isPrinting, dataGuruPrint, handlePrint, toaster]);

  const fetchSemuaGuru = async () => {
    setIsFetchingPrint(true);
    try {
      // Panggil API '/api/guru/all'
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/guru/barcode-print`
      );

      if (!response.ok) {
        const data = await response.json();
        toaster.current.show({
          title: "Error",
          message: data.message || "Terjadi kesalahan",
          type: "error",
          position: "top-center",
          duration: 5000,
        });
        return;
      }

      const data = await response.json();
      setDataGuruPrint(data); // 1. Set data
      setIsPrinting(true); // 2. Set trigger
    } catch (err) {
      toaster.current.show({
        title: "Error",
        message: err.message,
        type: "error",
        position: "top-center",
        duration: 5000,
      });
    } finally {
      setIsFetchingPrint(false);
    }
  };

  // fungsi handle search
  const handleSearch = useDebouncedCallback((value) => {
    // buat url parameter baru
    const params = new URLSearchParams(searchParams);

    // jika query search ada, reset ke halaman 1
    params.set("page", "1");

    // jika value ada
    if (value) {
      params.set("search", value);
    } else {
      params.delete("search");
    }

    // ubah pathname
    router.replace(`${pathname}?${params.toString()}`);
  }, 300); // delay 300ms

  // fungsi handle pagination
  const handlePagination = (direction) => {
    // buat url parameter baru
    const params = new URLSearchParams(searchParams);

    let newPage;

    if (direction === "next") {
      newPage = currentPage + 1;
    } else {
      newPage = currentPage - 1;
    }

    // Pastikan halaman nggak minus atau lebih dari total
    if (newPage > 0 && newPage <= totalPage) {
      params.set("page", newPage.toString());
      router.replace(`${pathname}?${params.toString()}`);
    }
  };

  return (
    <div>
      <>
        <div className="flex items-center justify-between">
          <Link href="/master/guru/tambah">
            <Button className="cursor-pointer">
              <Plus className="mr-2 h-4 w-4 " />
              Tambah Guru
            </Button>
          </Link>

          {/* Input  Search  */}
          <div className="flex items-center py-4 gap-2">
            <Input
              placeholder={`Cari Guru`}
              defaultValue={searchParams.get("search") || ""}
              onChange={(e) => handleSearch(e.target.value)}
              className="max-w-sm"
            />

            <Button
              variant="outline"
              onClick={fetchSemuaGuru}
              disabled={isFetchingPrint}
            >
              <Printer className="mr-2 h-4 w-4" />
              {isFetchingPrint ? "Loading..." : "Export Barcode Guru"}
            </Button>
          </div>
        </div>
        <Separator />

        <TabelDataGuru filteredData={data} />

        <Pagination
          totalPage={totalPage}
          currentPage={currentPage}
          handlePagination={handlePagination}
        />

        {isPrinting && dataGuruPrint.length > 0 && (
          <div className="hidden">
            <div ref={printRef} className="print-container p-10">
              <h1 className="text-2xl font-bold text-center mb-6">
                Daftar Barcode Guru
              </h1>
              <div className="grid grid-cols-2 gap-4">
                {dataGuruPrint.map((guru) => (
                  <div
                    key={guru.id}
                    className="p-4 border rounded-md flex flex-col items-center"
                  >
                    <Barcode
                      value={guru.kode}
                      width={2}
                      height={50}
                      fontSize={14}
                    />
                    <p className="font-semibold mt-2">{guru.nama}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </>
    </div>
  );
};

export default GuruClient;
