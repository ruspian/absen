// fetch data guru
export const getGuru = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/guru`,
      {
        method: "GET",
        cache: "no-store",
      }
    );
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "Gagal mengambil data guru");
    }
    return data;
  } catch (error) {
    throw new Error(error.message || "Kesalahan Server, silahkan coba lagi!");
  }
};

// fetch data kelas
export const getKelas = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/kelas`,
      {
        method: "GET",
        cache: "no-store",
      }
    );
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "Gagal mengambil data kelas");
    }
    return data;
  } catch (error) {
    throw new Error(error.message || "Kesalahan Server, silahkan coba lagi!");
  }
};

// fetch mata pelajaran
export const getMapel = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/mapel`,
      {
        method: "GET",
        cache: "no-store",
      }
    );
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "Gagal mengambil mata pelajaran");
    }
    return data;
  } catch (error) {
    throw new Error(error.message || "Kesalahan Server, silahkan coba lagi!");
  }
};

// fetch data jadwal sesuai id
export const getJadwalById = async (id) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/jadwal/${id}`,
      {
        method: "GET",
        cache: "no-store",
      }
    );

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "Gagal mengambil data jadwal");
    }
    return data;
  } catch (error) {
    throw new Error(error.message || "Kesalahan Server, silahkan coba lagi!");
  }
};

// fetch data jadwal sesuai id
export const getGuruById = async (id) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/guru/${id}`,
      {
        method: "GET",
        cache: "no-store",
      }
    );

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "Gagal mengambil data jadwal");
    }
    return data;
  } catch (error) {
    throw new Error(error.message || "Kesalahan Server, silahkan coba lagi!");
  }
};
