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
