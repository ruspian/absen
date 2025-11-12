import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";

const TIMEZONE = "Asia/Makassar"; // WITA

// fungsi ambil hari ini wita
const getToday = () => {
  const nowWITA = new Date(
    new Date().toLocaleString("en-US", { timeZone: TIMEZONE })
  );
  const tahun = nowWITA.getFullYear();
  const bulanIndex = nowWITA.getMonth();
  const tanggal = nowWITA.getDate();
  const todayWITA = new Date(Date.UTC(tahun, bulanIndex, tanggal, -8));
  return todayWITA;
};

// fungsi ambil jam wita
const getUTCTime = (date) => {
  const timeOnly = new Date(0); // 1970-01-01T00:00:00Z
  timeOnly.setUTCHours(date.getUTCHours());
  timeOnly.setUTCMinutes(date.getUTCMinutes());
  timeOnly.setUTCSeconds(date.getUTCSeconds());
  return timeOnly;
};

// fungsi ambil nama hari ini
const getTodayNameWITA = () => {
  // 'eeee' -> "Kamis"
  return format(new Date(), "eeee", {
    locale: localeID,
    timeZone: TIMEZONE,
  });
};

const BATAS_MENIT_MINIMAL = 180; // 3 jam

export const POST = async (req) => {
  try {
    //  Autentikasi & Otorisasi
    const session = await auth();
    if (!session || !session.user) {
      return NextResponse.json(
        { message: "Akses ditolak, harap login terlebih dahulu!" },
        { status: 401 }
      );
    }

    const userRole = session.user.role;
    const guruId = session.user.guruId; // <-- Ambil 'guruId' dari sesi
    const hariIni = getTodayNameWITA(); // Misal: "Kamis"

    // Cek ke DB apakah guru ini piket hari ini
    let isGuruPiket = false;
    if (userRole === "GURU" && guruId) {
      const cekPiket = await prisma.jadwalPiket.findFirst({
        where: {
          guruId: guruId,
          hari: hariIni,
        },
      });
      if (cekPiket) {
        isGuruPiket = true;
      }
    }

    // cek Admin ATAU Guru yang piket HARI INI
    const isAuthorized = userRole === "ADMIN" || isGuruPiket;

    if (!isAuthorized) {
      return NextResponse.json(
        { message: "Akses ditolak. Anda bukan Admin atau Guru Piket." },
        { status: 403 }
      );
    }

    //  Ambil data dari body
    const body = await req.json();
    const { kode } = body;
    if (!kode) {
      return NextResponse.json({ message: "Kode tidak ada" }, { status: 400 });
    }

    const today = getToday();
    const jamSekarang = new Date();
    const jamMasukUTC = getUTCTime(jamSekarang);

    // cek siswa berdasarkan kode
    const siswa = await prisma.siswa.findUnique({
      where: { kode: kode },
      include: { kelas: true }, // 'include' kelas di sini
    });

    if (siswa) {
      //  kalo siswa ada, cek absennya
      const absenAda = await prisma.absenHarian.findUnique({
        where: {
          siswaId_tanggal: {
            siswaId: siswa.id,
            tanggal: today,
          },
        },
      });

      if (!absenAda) {
        // kalo absennya belum ada, buat absen baru
        const absenBaru = await prisma.absenHarian.create({
          data: {
            siswaId: siswa.id,
            tanggal: today,
            status: "HADIR",
            jamMasuk: jamMasukUTC,
          },
        });

        // siapkan data response siswa
        const dataSiswaResponse = {
          id: siswa.id,
          nama: siswa.nama,
          kode: siswa.kode,
          nisn: siswa.nisn,
          kelas: siswa.kelas.nama,
          absen: absenBaru,
        };

        return NextResponse.json({
          data: dataSiswaResponse,
          message: `Masuk: ${siswa.nama}`,
        });
      } else if (absenAda && !absenAda.jamPulang) {
        // Ambil 'jamMasuk'
        const jamMasuk_DB = new Date(absenAda.jamMasuk);

        // buat 'jamMasuk' pake tanggal HARI INI
        const jamMasuk_HariIni = new Date(jamSekarang);

        // Pindahin jam/menit/detik dari data DB ke tanggal hari ini
        jamMasuk_HariIni.setUTCHours(jamMasuk_DB.getUTCHours());
        jamMasuk_HariIni.setUTCMinutes(jamMasuk_DB.getUTCMinutes());
        jamMasuk_HariIni.setUTCSeconds(jamMasuk_DB.getUTCSeconds());

        // bandingkan jamMasuk_HariIni dengan jamSekarang
        const selisihMenit =
          (jamSekarang.getTime() - jamMasuk_HariIni.getTime()) / 60000;

        //   cek jika scan lagi terlalu cepat
        if (selisihMenit < BATAS_MENIT_MINIMAL) {
          const dataSiswaResponse = {
            id: siswa.id,
            nama: siswa.nama,
            kode: siswa.kode,
            nisn: siswa.nisn,
            kelas: siswa.kelas.nama,
            absen: absenAda,
          };

          return NextResponse.json(
            {
              data: dataSiswaResponse,
              message: `${siswa.nama} sudah absen MASUK. Belum bisa absen pulang.`,
            },
            { status: 400 } // 400 Bad Request
          );
        }

        // kalo siswa udah absen masuk tapi belum absen pulang, update jam pulang
        const absenUpdate = await prisma.absenHarian.update({
          where: { id: absenAda.id },
          data: { jamPulang: jamMasukUTC },
        });

        // siapkan data response siswa
        const dataSiswaResponse = {
          id: siswa.id,
          nama: siswa.nama,
          kode: siswa.kode,
          nisn: siswa.nisn,
          kelas: siswa.kelas.nama,
          absen: absenUpdate,
        };

        return NextResponse.json({
          data: dataSiswaResponse,
          message: `Pulang: ${siswa.nama}`,
        });
      } else {
        // siapkan data response siswa
        const dataSiswaResponse = {
          id: siswa.id,
          nama: siswa.nama,
          kode: siswa.kode,
          nisn: siswa.nisn,
          kelas: siswa.kelas.nama,
          absen: absenAda,
        };

        return NextResponse.json(
          {
            data: dataSiswaResponse,
            message: `${siswa.nama} sudah absen pulang hari ini.`,
          },
          { status: 400 }
        );
      }
    }

    // cek guru berdasarkan kode
    const guru = await prisma.guru.findUnique({
      where: { kode: kode },
    });

    if (guru) {
      const absenAda = await prisma.absenGuruHarian.findUnique({
        where: {
          guruId_tanggal: {
            guruId: guru.id,
            tanggal: today,
          },
        },
      });

      if (!absenAda) {
        const absenBaru = await prisma.absenGuruHarian.create({
          data: {
            guruId: guru.id,
            tanggal: today,
            status: "HADIR",
            jamMasuk: jamMasukUTC,
          },
        });

        // siapkan data response siswa
        const dataGuruResponse = {
          id: guru.id,
          nama: guru.nama,
          kode: guru.kode,
          nip: guru.nip,
          nuptk: guru.nuptk,
          absen: absenBaru,
        };

        return NextResponse.json({
          data: dataGuruResponse,
          message: `Masuk: ${guru.nama} (Guru)`,
        });
      } else if (absenAda && !absenAda.jamPulang) {
        // Ambil 'jamMasuk'
        const jamMasuk_DB = new Date(absenAda.jamMasuk);

        // buat 'jamMasuk' pake tanggal HARI INI
        const jamMasuk_HariIni = new Date(jamSekarang);

        // Pindahin jam/menit/detik dari data DB ke tanggal hari ini
        jamMasuk_HariIni.setUTCHours(jamMasuk_DB.getUTCHours());
        jamMasuk_HariIni.setUTCMinutes(jamMasuk_DB.getUTCMinutes());
        jamMasuk_HariIni.setUTCSeconds(jamMasuk_DB.getUTCSeconds());

        // bandingkan jamMasuk_HariIni dengan jamSekarang
        const selisihMenit =
          (jamSekarang.getTime() - jamMasuk_HariIni.getTime()) / 60000;

        //   cek jika scan lagi terlalu cepat
        if (selisihMenit < BATAS_MENIT_MINIMAL) {
          const dataGuruResponse = {
            id: guru.id,
            nama: guru.nama,
            kode: guru.kode,
            nip: guru.nip,
            nuptk: guru.nuptk,
            absen: absenAda,
          };

          return NextResponse.json(
            {
              data: dataGuruResponse,
              message: `${guru.nama} sudah absen MASUK. Belum bisa absen pulang.`,
            },
            { status: 400 } // 400 Bad Request
          );
        }
        const absenUpdate = await prisma.absenGuruHarian.update({
          where: { id: absenAda.id },
          data: { jamPulang: jamMasukUTC },
        });

        // siapkan data response siswa
        const dataGuruResponse = {
          id: guru.id,
          nama: guru.nama,
          kode: guru.kode,
          nip: guru.nip,
          nuptk: guru.nuptk,
          absen: absenUpdate,
        };
        return NextResponse.json({
          data: dataGuruResponse,
          message: `Pulang: ${guru.nama} (Guru)`,
        });
      } else {
        const dataGuruResponse = {
          id: guru.id,
          nama: guru.nama,
          kode: guru.kode,
          nip: guru.nip,
          nuptk: guru.nuptk,
          absen: absenAda,
        };
        return NextResponse.json(
          {
            data: dataGuruResponse,
            message: `${guru.nama} sudah absen pulang hari ini.`,
          },
          { status: 400 }
        );
      }
    }

    // 7. Jika 'kode' tidak ditemukan
    return NextResponse.json(
      { message: `Error: Kode "${kode}" tidak terdaftar.` },
      { status: 404 }
    );
  } catch (error) {
    console.log("Gagal scan absen:", error);
    return NextResponse.json({ message: "Kesalahan Server" }, { status: 500 });
  }
};
