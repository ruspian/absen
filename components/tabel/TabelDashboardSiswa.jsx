import React from "react";
import { format, parseISO } from "date-fns";
import { id as localeID } from "date-fns/locale";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

const TabelDashboardSiswa = ({ data }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Tanggal</TableHead>
          <TableHead>Mata Pelajaran</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.absenMapel.length > 0 ? (
          data.absenMapel.map((item) => (
            <TableRow key={item.id}>
              <TableCell>
                {format(new Date(item.tanggal), "eeee, dd-MM-yyyy", {
                  locale: localeID,
                })}
              </TableCell>
              <TableCell className="font-medium">
                {item.jadwal.mapel.nama}
              </TableCell>
              <TableCell
                className={cn(
                  item.status === "HADIR" && "text-green-600",
                  item.status === "SAKIT" && "text-blue-600",
                  item.status === "IZIN" && "text-yellow-600",
                  item.status === "ALFA" && "text-red-600 font-bold"
                )}
              >
                {item.status}
              </TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell
              colSpan={3}
              className="h-24 text-center text-muted-foreground"
            >
              Tidak ada riwayat absen mapel 30 hari terakhir.
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default TabelDashboardSiswa;
