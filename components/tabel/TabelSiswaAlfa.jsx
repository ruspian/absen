import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function TabelSiswaAlfa({ data }) {
  console.log("data", data);

  return (
    <div className="bg-background">
      <Table>
        <TableHeader className="bg-transparent">
          <TableRow className="hover:bg-transparent">
            <TableHead>No</TableHead>
            <TableHead>Nama Siswa</TableHead>
            <TableHead>Kelas</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <tbody aria-hidden="true" className="table-row h-2"></tbody>
        <TableBody className="[&_td:first-child]:rounded-l-lg [&_td:last-child]:rounded-r-lg">
          {data.map((item, index) => (
            <TableRow
              key={item.id}
              className="border-none odd:bg-muted/50 hover:bg-transparent odd:hover:bg-muted/50"
            >
              <TableCell className="py-2.5 font-medium">{index + 1}</TableCell>
              <TableCell className="py-2.5 font-medium">{item.nama}</TableCell>
              <TableCell className="py-2.5">{item.kelas}</TableCell>
              <TableCell className="py-2.5">{item.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <tbody aria-hidden="true" className="table-row h-2"></tbody>
      </Table>
    </div>
  );
}
