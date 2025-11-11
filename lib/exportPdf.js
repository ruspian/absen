import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { format } from "date-fns";
import { id as localeID } from "date-fns/locale";
import { formatTanggalID, getTimeFromDate } from "./formatTime";

export const handleExportPDFSiswa = (
  selectedKelasId,
  currentDate,
  dataSiswa,
  dataKelas
) => {
  const doc = new jsPDF({
    orientation: "landscape",
    unit: "mm",
    format: [330, 210],
  });

  // Ambil nama kelas yang lagi dipilih
  const namaKelasTerpilih =
    dataKelas.find((k) => k.id === selectedKelasId)?.nama || "Semua Siswa";
  const tanggalLaporan = format(currentDate, "eeee, dd MMMM yyyy", {
    locale: localeID,
  });

  // Bikin Judul di Tengah
  const pageWidth = doc.internal.pageSize.getWidth(); // Ini 330
  const centerX = pageWidth / 2; // Ini 165

  doc.setFontSize(18);
  doc.text("LAPORAN ABSENSI HARIAN SISWA", centerX, 22, { align: "center" });
  doc.setFontSize(12);
  doc.text(`Tanggal: ${tanggalLaporan}`, centerX, 30, { align: "center" });

  doc.text(`Kelas: ${namaKelasTerpilih}`, 14, 38);

  // Siapin data buat tabel siswa
  const headSiswa = [
    [
      "No",
      "Tanggal",
      "Nama Siswa",
      "Kelas",
      "NISN",
      "Status",
      "Jam Masuk",
      "Jam Pulang",
    ],
  ];
  const bodySiswa = dataSiswa.map((item, index) => [
    index + 1,
    item.tanggal ? formatTanggalID(item.tanggal) : "-",
    item.nama,
    item.kelas,
    item.nisn,
    item.status || "Belum Absen",
    item.jamMasuk ? getTimeFromDate(item.jamMasuk) : "-",
    item.jamPulang ? getTimeFromDate(item.jamPulang) : "-",
  ]);

  // Buat tabel siswa
  autoTable(doc, {
    startY: 40,
    head: headSiswa,
    body: bodySiswa,
  });

  // Simpen file PDF-nya
  doc.save(
    `Laporan-Harian-Siswa-${namaKelasTerpilih}-${format(
      currentDate,
      "yyyy-MM-dd"
    )}.pdf`
  );
};

export const handleExportPDFGuru = (dataGuru, currentDate) => {
  const doc = new jsPDF({
    orientation: "landscape",
    unit: "mm",
    format: [330, 210],
  });

  const tanggalLaporan = format(currentDate, "eeee, dd MMMM yyyy", {
    locale: localeID,
  });

  // Bikin Judul di Tengah
  const pageWidth = doc.internal.pageSize.getWidth(); // Ini 330
  const centerX = pageWidth / 2; // Ini 165

  doc.setFontSize(18);
  doc.text("LAPORAN ABSENSI HARIAN GURU", centerX, 22, { align: "center" });
  doc.setFontSize(12);
  doc.text(`Tanggal: ${tanggalLaporan}`, centerX, 30, { align: "center" });

  // Siapin data buat tabel guru
  const headGuru = [
    [
      "No",
      "Tanggal",
      "Nama Guru",
      "NIP",
      "NUPTK",
      "Status",
      "Jam Masuk",
      "Jam Pulang",
    ],
  ];
  const bodyGuru = dataGuru.map((item, index) => [
    index + 1,
    item.tanggal ? formatTanggalID(item.tanggal) : "-",
    item.nama,
    item.nip,
    item.nuptk,
    item.status || "Belum Absen",
    item.jamMasuk ? getTimeFromDate(item.jamMasuk) : "-",
    item.jamPulang ? getTimeFromDate(item.jamPulang) : "-",
  ]);

  // buat tabel guru
  autoTable(doc, {
    startY: 35,
    head: headGuru,
    body: bodyGuru,
  });

  // Simpen file PDF-nya
  doc.save(`Laporan-Harian-Guru-${format(currentDate, "yyyy-MM-dd")}.pdf`);
};
