"use client";

import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";
import { Input } from "./ui/input";
import { Separator } from "@radix-ui/react-separator";
import TabelDataGuru from "./tabel/TabelDataGuru";
import Pagination from "./Pagination";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

const GuruClient = ({ data, totalPage, totalCount, currentPage }) => {
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
          <div className="flex items-center py-4">
            <Input
              placeholder={`Cari Guru`}
              defaultValue={searchParams.get("search") || ""}
              onChange={(e) => handleSearch(e.target.value)}
              className="max-w-sm"
            />
          </div>
        </div>
        <Separator />

        <TabelDataGuru filteredData={data} />

        <Pagination
          totalPage={totalPage}
          currentPage={currentPage}
          handlePagination={handlePagination}
        />
      </>
    </div>
  );
};

export default GuruClient;
