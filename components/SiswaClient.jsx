"use client";

import React, { useMemo, useState } from "react";
import { Button } from "./ui/button";
import { Separator } from "@radix-ui/react-separator";
import { Plus } from "lucide-react";
import TabelDataSiswa from "./tabel/TabelDataSiswa";
import { Input } from "./ui/input";
import Link from "next/link";

const SiswaClient = ({ data }) => {
  //  state search dan filter
  const [search, setSearch] = useState("");
  const searchKey = "nama";

  // Filter data pakai useMemo
  const filteredData = useMemo(() => {
    if (!search) return data; // Kalau search kosong, tampilkan semua

    return data.filter((item) =>
      // Cek apakah data di kolom searchKey => misalnya nama
      item[searchKey]?.toLowerCase().includes(search.toLowerCase())
    );
  }, [data, search, searchKey]); // Hitung ulang HANYA jika data/filter berubah

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
            placeholder={`Cari ${searchKey} siswa`}
            value={search} // hubungkan ke state search
            onChange={(event) => setSearch(event.target.value)}
            className="max-w-sm"
          />
        </div>
      </div>
      <Separator />

      <TabelDataSiswa filteredData={filteredData} />
    </>
  );
};

export default SiswaClient;
