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
import { getTimeFromDate } from "@/lib/formatTime";

const TabelDataJadwal = ({ filteredData }) => {
  const [openDelete, setOpenDelete] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const toaster = useToaster();
  const router = useRouter();

  const handleDelete = async (id) => {
    try {
      setLoading(true);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/jadwal/${id}`,
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

  // fungsi confirm delete
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
              <TableHead>Hari</TableHead>
              <TableHead>Jam Mulai</TableHead>
              <TableHead>Jam Selesai</TableHead>
              <TableHead>Mata Pelajaran</TableHead>
              <TableHead>Kelas</TableHead>
              <TableHead>Guru</TableHead>
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
                    {item.hari}
                  </TableCell>
                  <TableCell className="py-2.5 font-medium">
                    {getTimeFromDate(item.jamMulai)}
                  </TableCell>
                  <TableCell className="py-2.5 font-medium">
                    {getTimeFromDate(item.jamSelesai)}
                  </TableCell>
                  <TableCell className="py-2.5 font-medium">
                    {item.mapel}
                  </TableCell>
                  <TableCell className="py-2.5 font-medium">
                    {item.kelas}
                  </TableCell>
                  <TableCell className="py-2.5 font-medium">
                    {item.guru}
                  </TableCell>
                  <TableCell className="py-2.5 flex gap-2">
                    <Link href={`/master/jadwal/edit?id=${item.id}`}>
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
                  colSpan={8}
                >
                  Jadwal Pelajaran Kosong!
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
            <h3 className="font-bold text-lg">Hapus Jadwal Pelajaran Ini?</h3>
            <div className="flex gap-4 justify-between">
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
};

export default TabelDataJadwal;
