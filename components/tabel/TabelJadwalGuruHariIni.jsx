import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getTimeFromDate } from "@/lib/formatTime";

export default function TabelJadwalGuruHariIni({ data, jamSekarang }) {
  return (
    <div className="bg-background">
      <Table>
        <TableHeader className="bg-transparent">
          <TableRow className="hover:bg-transparent">
            <TableHead>Hari</TableHead>
            <TableHead>Mata Pelajaran</TableHead>
            <TableHead>Kelas</TableHead>
            <TableHead>Jam</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <tbody aria-hidden="true" className="table-row h-2"></tbody>
        <TableBody className="[&_td:first-child]:rounded-l-lg [&_td:last-child]:rounded-r-lg">
          {data.length > 0 && data[0] !== undefined ? (
            data.map((item) => (
              <TableRow
                key={item?.id}
                className="border-none odd:bg-muted/50 hover:bg-transparent odd:hover:bg-muted/50"
              >
                <TableCell className="py-2.5 font-medium">
                  {item?.hari}
                </TableCell>
                <TableCell className="py-2.5 font-medium">
                  {item?.mapel?.nama}
                </TableCell>
                <TableCell className="py-2.5">{item?.kelas?.nama}</TableCell>
                <TableCell className="py-2.5">
                  {item?.jamMulai &&
                    item?.jamSelesai &&
                    `${getTimeFromDate(item?.jamMulai)} - ${getTimeFromDate(
                      item?.jamSelesai
                    )} WITA`}
                </TableCell>
                <TableCell className="py-2.5">
                  {jamSekarang <= getTimeFromDate(item?.jamMulai) ? (
                    <p className="text-sm  text-blue-500 ">Belum Dimulai</p>
                  ) : getTimeFromDate(item?.jamMulai) <= jamSekarang &&
                    getTimeFromDate(item?.jamSelesai) >= jamSekarang ? (
                    <p className="text-sm text-yellow-500 ">
                      Sedang Berlangsung
                    </p>
                  ) : (
                    <p className="text-sm p-1 rounded-sm bg-emerald-500 border items-center flex justify-center text-white ">
                      Selesai
                    </p>
                  )}
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow className="border-none odd:bg-muted/50 hover:bg-transparent odd:hover:bg-muted/50">
              <TableCell className="py-2.5 font-medium text-center" colSpan={5}>
                Tidak Ada Jadwal Hari Ini
              </TableCell>
            </TableRow>
          )}
        </TableBody>
        <tbody aria-hidden="true" className="table-row h-2"></tbody>
      </Table>
    </div>
  );
}
