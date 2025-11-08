"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import { Button } from "../ui/button";
import { BiEdit } from "react-icons/bi";
import { MdDeleteOutline } from "react-icons/md";
import { useToaster } from "@/providers/ToasterProvider";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function TabelDataSiswa({ filteredData }) {
  const [openDelete, setOpenDelete] = useState(null);
  const [loading, setLoading] = useState(false);
  const toaster = useToaster();
  const router = useRouter();

  const handleDelete = async (id) => {
    try {
      setLoading(true);

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/siswa/${id}`,
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
    } finally {
      setLoading(false);
    }
  };

  // fungsi konfirm delete
  const onConfirmDelete = async () => {
    if (openDelete) {
      await handleDelete(openDelete); // Panggil handleDelete dengan ID

      setOpenDelete(null); // Tutup modal
    }
  };

  return (
    <>
      <div className="bg-background rounded-sm">
        <Table>
          <TableHeader className="bg-transparent">
            <TableRow className="hover:bg-transparent">
              <TableHead>No</TableHead>
              <TableHead>Kode</TableHead>
              <TableHead>Nama Siswa</TableHead>
              <TableHead>Jenis Kelamin</TableHead>
              <TableHead>NISN</TableHead>
              <TableHead>Kelas</TableHead>
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
                  <TableCell className="py-2.5">{item.nisn}</TableCell>
                  <TableCell className="py-2.5">{item.kelas}</TableCell>
                  <TableCell className="py-2.5 flex gap-2">
                    <Link href={`/master/siswa/edit?id=${item.id}`}>
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
                      onClick={() => setOpenDelete(item.id)}
                    >
                      <MdDeleteOutline className="size-5 text-white" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  className="py-2.5 font-medium text-center"
                  colSpan={7}
                >
                  Data Siswa Kosong!
                </TableCell>
              </TableRow>
            )}
          </TableBody>
          <tbody aria-hidden="true" className="table-row h-2"></tbody>
        </Table>
      </div>

      {openDelete !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-background p-6 rounded-lg shadow-lg flex flex-col items-center gap-4">
            <h3 className="font-bold text-lg">Hapus Data Siswa Ini?</h3>
            <div className="flex gap-4">
              <Button variant="outline" onClick={() => setOpenDelete(null)}>
                Tidak
              </Button>
              <Button
                variant="destructive"
                onClick={onConfirmDelete} // Panggil helper
              >
                Ya
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
