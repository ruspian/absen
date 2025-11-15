import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { getTimeFromDate } from "@/lib/formatTime";

const TabelScanGuru = ({ filteredData }) => {
  return (
    <div className="bg-background rounded-sm">
      <Table>
        <TableHeader className="bg-transparent">
          <TableRow className="hover:bg-transparent">
            <TableHead>No</TableHead>
            <TableHead>Kode</TableHead>
            <TableHead>Nama Guru</TableHead>
            <TableHead>NIP</TableHead>
            <TableHead>NUPTK</TableHead>
            <TableHead>Jam Masuk</TableHead>
            <TableHead>Jam Pulang</TableHead>
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
                  {item.nip || "-"}
                </TableCell>
                <TableCell className="py-2.5 font-medium">
                  {item.nuptk || "-"}
                </TableCell>
                <TableCell className="py-2.5">
                  {item.absen.jamMasuk
                    ? getTimeFromDate(item.absen.jamMasuk)
                    : "-"}
                </TableCell>
                <TableCell className="py-2.5">
                  {item.absen.jamPulang
                    ? getTimeFromDate(item.absen.jamPulang)
                    : "-"}
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell className="py-2.5 font-medium text-center" colSpan={7}>
                Belum ada data
              </TableCell>
            </TableRow>
          )}
        </TableBody>
        <tbody aria-hidden="true" className="table-row h-2"></tbody>
      </Table>
    </div>
  );
};

export default TabelScanGuru;
