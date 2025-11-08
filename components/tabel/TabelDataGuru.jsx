"use client";

import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import Link from "next/link";
import { Button } from "../ui/button";
import { BiEdit } from "react-icons/bi";
import { MdDeleteOutline } from "react-icons/md";
import { useToaster } from "@/providers/ToasterProvider";
import { useRouter } from "next/navigation";

const TabelDataGuru = ({ filteredData }) => {
  const toaster = useToaster();
  const router = useRouter();

  const handleDelete = async (id) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/guru/${id}`,
        {
          method: "DELETE",
        }
      );

      const data = await response.json();

      if (!response.ok) {
        toaster.current.show({
          title: "Error",
          message: data.message,
          type: "error",
          position: "top-center",
          duration: 5000,
        });
        return;
      }

      toaster.current.show({
        title: "Success",
        message: data.message,
        type: "success",
        position: "top-center",
        duration: 5000,
      });

      router.refresh();
    } catch (error) {
      toaster.current.show({
        title: "Error",
        message: error.message,
        type: "error",
        position: "top-center",
        duration: 5000,
      });
    }
  };

  return (
    <div className="bg-background rounded-sm">
      <Table>
        <TableHeader className="bg-transparent">
          <TableRow className="hover:bg-transparent">
            <TableHead>No</TableHead>
            <TableHead>Kode</TableHead>
            <TableHead>Nama Guru</TableHead>
            <TableHead>Jenis Kelamin</TableHead>
            <TableHead>NIP</TableHead>
            <TableHead>NUPTK</TableHead>
            <TableHead>Aksi</TableHead>
          </TableRow>
        </TableHeader>
        <tbody aria-hidden="true" className="table-row h-2"></tbody>
        <TableBody className="[&_td:first-child]:rounded-l-lg [&_td:last-child]:rounded-r-lg">
          {filteredData.length > 0 ? (
            filteredData.map((item, index) => (
              <TableRow
                key={item.id}
                className="border-none odd:bg-muted/50 hover:bg-transparent odd:hover:bg-muted/50"
              >
                <TableCell className="py-2.5 font-medium">
                  {index + 1}
                </TableCell>
                <TableCell className="py-2.5 font-medium">
                  {item.kode}
                </TableCell>
                <TableCell className="py-2.5 font-medium">
                  {item.nama}
                </TableCell>
                <TableCell className="py-2.5 font-medium">
                  {item.gender}
                </TableCell>
                <TableCell className="py-2.5">{item.nip || "-"}</TableCell>
                <TableCell className="py-2.5">{item.nuptk || "-"}</TableCell>
                <TableCell className="py-2.5 flex gap-2">
                  <Link href={`/master/guru/edit?id=${item.id}`}>
                    <Button
                      variant="default"
                      size="sm"
                      className="cursor-pointer"
                    >
                      <BiEdit className="size-5" />
                    </Button>
                  </Link>

                  <Button
                    variant="destructive"
                    size="sm"
                    className="cursor-pointer"
                    onClick={() => handleDelete(item.id)}
                  >
                    <MdDeleteOutline className="size-5 text-white" />
                  </Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell className="py-2.5 font-medium text-center" colSpan={7}>
                Data Siswa Kosong!
              </TableCell>
            </TableRow>
          )}
        </TableBody>
        <tbody aria-hidden="true" className="table-row h-2"></tbody>
      </Table>
    </div>
  );
};

export default TabelDataGuru;
