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

export default function TabelDataSiswa({ filteredData }) {
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
                  <TableCell className="py-2.5">
                    <Link href={`/dashboard/siswa/${item.id}`}>
                      <button className="btn btn-primary">Detail</button>
                    </Link>
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
    </>
  );
}
