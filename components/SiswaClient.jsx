"use client";

import { Button } from "./ui/button";
import { Separator } from "@radix-ui/react-separator";
import { Plus, Printer } from "lucide-react";
import TabelDataSiswa from "./tabel/TabelDataSiswa";
import { Input } from "./ui/input";
import Link from "next/link";
import { useDebouncedCallback } from "use-debounce";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Pagination from "./Pagination";
import { useReactToPrint } from "react-to-print";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Barcode from "react-barcode";
import { useEffect, useRef, useState } from "react";
import { useToaster } from "@/providers/ToasterProvider";

const SiswaClient = ({
  data,
  totalPage,
  totalCount,
  currentPage,
  dataKelas,
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const toaster = useToaster();

  const [kelasUntukPrint, setKelasUntukPrint] = useState("semua");
  const [dataSiswaPrint, setDataSiswaPrint] = useState([]);
  const [isFetchingPrint, setIsFetchingPrint] = useState(false);
  const [isPrinting, setIsPrinting] = useState(false);
  const printRef = useRef(null);

  // fungsi cetak
  const handlePrint = useReactToPrint({
    contentRef: printRef,
    documentTitle: `Barcode-Kelas-${kelasUntukPrint}`,
    onAfterPrint: () => {
      setDataSiswaPrint([]);
      setIsPrinting(false);
    },
  });

  // useeffect cetak
  useEffect(() => {
    if (isPrinting && dataSiswaPrint.length > 0) {
      const printTimeout = setTimeout(() => {
        // Cek sekali lagi kalo 'printRef.current' beneran ada
        if (printRef.current) {
          handlePrint();
        } else {
          // Kalo masih gak ada (aneh), kasih error
          toaster.current.show({
            title: "Error Print",
            message: "Gagal memuat preview cetak.",
            type: "error",
            position: "top-center",
            duration: 5000,
          });
          setIsPrinting(false); // Reset
        }
      }, 0); // 0ms delay udah cukup

      return () => clearTimeout(printTimeout);
    }
  }, [isPrinting, dataSiswaPrint, handlePrint, toaster]);

  // Fungsi ambil semua siswa di 1 kelas
  const fetchSiswaByKelas = async () => {
    if (kelasUntukPrint === "semua") {
      toaster.current.show({
        title: "Error",
        message: "Pilih kelas terlebih dahulu",
        type: "error",
      });
      return;
    }

    setIsFetchingPrint(true);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/siswa/by-kelas?kelasId=${kelasUntukPrint}`
      );
      const data = await response.json();
      if (!response.ok) throw new Error(data.message);

      setDataSiswaPrint(data); // Set data
      setIsPrinting(true);
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
    <>
      <div className="flex items-center justify-between">
        <Link href="/master/siswa/tambah">
          <Button className="cursor-pointer">
            <Plus className="mr-2 h-4 w-4 " />
            Tambah Siswa
          </Button>
        </Link>

        {/* Input  Search  */}
        <div className="flex items-center py-4 gap-2">
          <Input
            placeholder={`Cari siswa`}
            defaultValue={searchParams.get("search") || ""}
            onChange={(e) => handleSearch(e.target.value)}
            className="max-w-sm"
          />

          <div className="flex gap-2">
            <Select value={kelasUntukPrint} onValueChange={setKelasUntukPrint}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter Kelas" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="semua">Pilih Kelas</SelectItem>
                {dataKelas.map((kelas) => (
                  <SelectItem key={kelas.id} value={kelas.id}>
                    {kelas.nama}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button
              variant="outline"
              onClick={fetchSiswaByKelas}
              disabled={isFetchingPrint || kelasUntukPrint === "semua"}
            >
              <Printer className="mr-2 h-4 w-4" />
              {isFetchingPrint ? "Loading..." : "Export Barcode Kelas"}
            </Button>
          </div>
        </div>
      </div>
      <Separator />

      <TabelDataSiswa filteredData={data} />

      <Pagination
        totalPage={totalPage}
        currentPage={currentPage}
        handlePagination={handlePagination}
      />

      {/* komponen tersembunyi yang akan di print */}
      {isPrinting && dataSiswaPrint.length > 0 && (
        <div className="hidden">
          <div ref={printRef} className="print-container p-10">
            <h1 className="text-2xl font-bold text-center mb-6">
              Daftar Barcode Siswa - Kelas{" "}
              {dataKelas.find((k) => k.id === kelasUntukPrint)?.nama}
            </h1>

            <div className="grid grid-cols-3 gap-4 ">
              {dataSiswaPrint.map((siswa) => (
                <div
                  key={siswa.id}
                  className="p-4 border rounded-md flex flex-col items-center"
                >
                  <Barcode
                    value={siswa.kode}
                    width={2}
                    height={50}
                    fontSize={14}
                  />
                  <p className="font-semibold mt-2">{siswa.nama}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SiswaClient;
