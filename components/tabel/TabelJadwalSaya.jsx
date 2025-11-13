import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getTimeFromDate } from "@/lib/formatTime";

export default function TabelJadwalSaya({ data }) {
  return (
    <div className="bg-background">
      <Table>
        <TableHeader className="bg-transparent">
          <TableRow className="hover:bg-transparent">
            <TableHead>Hari</TableHead>
            <TableHead>Mata Pelajaran</TableHead>
            <TableHead>Kelas</TableHead>
            <TableHead>Jam</TableHead>
          </TableRow>
        </TableHeader>
        <tbody aria-hidden="true" className="table-row h-2"></tbody>
        <TableBody className="[&_td:first-child]:rounded-l-lg [&_td:last-child]:rounded-r-lg">
          {data.map((item) => (
            <TableRow
              key={item.id}
              className="border-none odd:bg-muted/50 hover:bg-transparent odd:hover:bg-muted/50"
            >
              <TableCell className="py-2.5 font-medium">{item.hari}</TableCell>
              <TableCell className="py-2.5 font-medium">
                {item.mapel.nama}
              </TableCell>
              <TableCell className="py-2.5">{item.kelas.nama}</TableCell>
              <TableCell className="py-2.5">{`${getTimeFromDate(
                item.jamMulai
              )} - ${getTimeFromDate(item.jamSelesai)} WITA`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <tbody aria-hidden="true" className="table-row h-2"></tbody>
      </Table>
    </div>
  );
}
