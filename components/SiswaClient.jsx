"use client";

import React, { useMemo, useState } from "react";
import { Button } from "./ui/button";
import { Separator } from "@radix-ui/react-separator";
import { Plus } from "lucide-react";
import TabelDataSiswa from "./tabel/TabelDataSiswa";
import { Input } from "./ui/input";
import Link from "next/link";
import { useDebounce, useDebouncedCallback } from "use-debounce";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Pagination from "./Pagination";

const SiswaClient = ({ data, totalPage, totalCount, currentPage }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

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
        <div className="flex items-center py-4">
          <Input
            placeholder={`Cari siswa (nama/nisn/kelas)...`}
            defaultValue={searchParams.get("search") || ""}
            onChange={(e) => handleSearch(e.target.value)}
            className="max-w-sm"
          />
        </div>
      </div>
      <Separator />

      <TabelDataSiswa filteredData={data} />

      <Pagination
        totalPage={totalPage}
        currentPage={currentPage}
        handlePagination={handlePagination}
      />
    </>
  );
};

export default SiswaClient;
