import { format } from "date-fns";
import { id as localeID } from "date-fns/locale";

export const getTimeFromDate = (dateObject) => {
  // Pastikan inputnya adalah objek Date
  const date = new Date(dateObject);

  // Ambil jam & menit, ubah ke string, dan paksa jadi 2 digit
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  // Gabungkan
  return `${hours}:${minutes}`;
};

export const formatTanggalID = (date) => {
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  const formattedDate = new Date(date).toLocaleDateString("id-ID", options);
  return formattedDate;
};

const TIMEZONE = "Asia/Makassar"; // WITA

// fungsi ambil nama hari ini
export const getTodayNameWITA = () => {
  // 'eeee' -> "Kamis"
  return format(new Date(), "eeee", {
    locale: localeID,
    timeZone: TIMEZONE,
  });
};

// fungsi ambil hari ini wita
export const getToday = () => {
  // Dapatkan string tanggal hari ini di WITA dengan format 'yyyy-MM-dd'
  const todayStringWITA = new Date().toLocaleDateString("en-CA", {
    timeZone: TIMEZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  const safeDate = new Date(`${todayStringWITA}T12:00:00Z`);
  return safeDate;
};

// fungsi ambil waktu sekarang
export const getWaktuSekarang = () => {
  const now = new Date();
  const timeOnly = new Date(0); // Bikin tanggal '1970'
  // Set jam-nya pake jam UTC
  timeOnly.setUTCHours(now.getUTCHours());
  timeOnly.setUTCMinutes(now.getUTCMinutes());
  timeOnly.setUTCSeconds(now.getUTCSeconds());
  return timeOnly.getTime(); // Balikin milidetik
};
