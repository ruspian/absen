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
