import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatTanggalID, getTimeFromDate } from "@/lib/formatTime";

export const TabelLaporanHarianSiswa = ({
  data,
  getStatusBadge,
  kelasDipilih,
}) => (
  <div className="rounded-md border h-96 overflow-y-auto">
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Tanggal</TableHead>
          <TableHead>Nama</TableHead>
          <TableHead>Kelas</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Jam Masuk</TableHead>
          <TableHead>Jam Pulang</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.length > 0 ? (
          data.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium">
                {item.tanggal ? formatTanggalID(item.tanggal) : "-"}
              </TableCell>
              <TableCell className="font-medium">{item.nama}</TableCell>
              <TableCell>{item.kelas}</TableCell>
              <TableCell>{getStatusBadge(item.status)}</TableCell>
              <TableCell>
                {item.jamMasuk ? getTimeFromDate(item.jamMasuk) : "-"}
              </TableCell>
              <TableCell>
                {item.jamPulang ? getTimeFromDate(item.jamPulang) : "-"}
              </TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell
              colSpan={5}
              className="h-24 text-center text-muted-foreground"
            >
              {/* [PERBAIKAN 2] Tampilkan pesan yang bener */}
              {kelasDipilih
                ? "Tidak ada data absensi untuk kelas ini."
                : "Silakan pilih tanggal dan kelas untuk melihat laporan."}
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  </div>
);
