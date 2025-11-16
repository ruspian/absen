import { getTimeFromDate } from "@/lib/formatTime";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const StatusHarianCard = ({ absen, jamMasukSekolah }) => {
  let status = "Belum Absen";
  let jam = "-";
  let warna = "text-gray-500"; // Default

  if (absen) {
    if (absen.status === "HADIR") {
      const jamMasuk = getTimeFromDate(absen.jamMasuk);
      if (jamMasuk > jamMasukSekolah) {
        status = "Terlambat";
        jam = jamMasuk;
        warna = "text-orange-500";
      } else {
        status = "Hadir";
        jam = jamMasuk;
        warna = "text-green-600";
      }
    } else {
      // SAKIT, IZIN, atau ALFA
      status = absen.status;
      warna = "text-red-600";
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Absensi Hari Ini</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">Status Kehadiran:</p>
        <p className={cn("text-3xl font-bold", warna)}>{status}</p>
        <p className="text-sm text-muted-foreground mt-2">
          Jam Masuk: {jam}{" "}
          {absen?.jamPulang
            ? `| Jam Pulang: ${getTimeFromDate(absen.jamPulang)}`
            : ""}
        </p>
      </CardContent>
    </Card>
  );
};

export default StatusHarianCard;
