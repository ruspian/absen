import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { getToday, getTodayNameWITA } from "@/lib/formatTime";

const TIMEZONE = "Asia/Makassar"; // WITA

// fungsi ambil jam wita
const getUTCTime = (date) => {
  const timeOnly = new Date(0); // 1970-01-01T00:00:00Z
  timeOnly.setUTCHours(date.getUTCHours());
  timeOnly.setUTCMinutes(date.getUTCMinutes());
  timeOnly.setUTCSeconds(date.getUTCSeconds());
  return timeOnly;
};

// const BATAS_MENIT_MINIMAL = 180; // 3 jam

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
    const { kode, tipe } = body;
    if (!kode || !tipe) {
      return NextResponse.json({ message: "Kode tidak ada" }, { status: 400 });
    }

    const today = getToday();
    const jamSekarang = new Date();
    const jamScanUTC = getUTCTime(jamSekarang);

    const pengaturan = await prisma.pengaturan.findFirst();
    if (!pengaturan) {
      throw new Error("Pengaturan jam sekolah belum di-set di database.");
    }

    if (tipe === "siswa") {
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
          const jamMasukSettingWITA = pengaturan.jamMasukSekolah;

          // Ambil jam scan (WITA)
          const jamSekarangWITA = new Date().toLocaleTimeString("en-GB", {
            timeZone: TIMEZONE,
            hour: "2-digit",
            minute: "2-digit",
          }); // Format "07:20"

          let pesanResponse = `Masuk: ${siswa.nama}`;

          if (jamSekarangWITA > jamMasukSettingWITA) {
            pesanResponse = `TERLAMBAT: ${siswa.nama}, Masuk: Pukul ${jamSekarangWITA} Wita.`;
          }

          // kalo absennya belum ada, buat absen baru
          const absenBaru = await prisma.absenHarian.create({
            data: {
              siswaId: siswa.id,
              tanggal: today,
              status: "HADIR",
              jamMasuk: jamScanUTC,
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
            message: pesanResponse,
          });
        } else if (absenAda && !absenAda.jamPulang) {
          //  Ambil jam pulang sekolah (misal "13:00")
          const [jPulang, mPulang] = pengaturan.jamPulangSekolah
            .split(":")
            .map(Number);

          // Bikin "13:00" WITA jadi Date object (1970 UTC)
          //    "13:00" WITA = "05:00" UTC
          const jamPulangSekolahUTC = new Date(
            Date.UTC(1970, 0, 1, jPulang - 8, mPulang)
          );

          if (jamScanUTC.getTime() < jamPulangSekolahUTC.getTime()) {
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
                message: `${siswa.nama} sudah absen MASUK. Belum jam pulang (${pengaturan.jamPulangSekolah} WITA).`,
              },
              { status: 400 } // 400 Bad Request
            );
          }

          // kalo siswa udah absen masuk tapi belum absen pulang, update jam pulang
          const absenUpdate = await prisma.absenHarian.update({
            where: { id: absenAda.id },
            data: { jamPulang: jamScanUTC },
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
    }

    if (tipe === "guru") {
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
          const jamMasukSettingWITA = pengaturan.jamMasukSekolah;

          // Ambil jam scan (WITA)
          const jamSekarangWITA = new Date().toLocaleTimeString("en-GB", {
            timeZone: TIMEZONE,
            hour: "2-digit",
            minute: "2-digit",
          }); // Format "07:20"

          let pesanResponse = `Masuk: ${guru.nama}`;

          if (jamSekarangWITA > jamMasukSettingWITA) {
            pesanResponse = `TERLAMBAT: ${guru.nama}, Masuk: Pukul ${jamSekarangWITA} Wita.`;
          }

          const absenBaru = await prisma.absenGuruHarian.create({
            data: {
              guruId: guru.id,
              tanggal: today,
              status: "HADIR",
              jamMasuk: jamScanUTC,
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
            message: pesanResponse,
          });
        } else if (absenAda && !absenAda.jamPulang) {
          const [jPulang, mPulang] = pengaturan.jamPulangSekolah
            .split(":")
            .map(Number);
          const jamPulangSekolahUTC = new Date(
            Date.UTC(1970, 0, 1, jPulang - 8, mPulang)
          );

          //   cek jika scan lagi terlalu cepat
          if (jamScanUTC.getTime() < jamPulangSekolahUTC.getTime()) {
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
                message: `${guru.nama} sudah absen MASUK. Belum jam pulang (${pengaturan.jamPulangSekolah} WITA).`,
              },
              { status: 400 } // 400 Bad Request
            );
          }
          const absenUpdate = await prisma.absenGuruHarian.update({
            where: { id: absenAda.id },
            data: { jamPulang: jamScanUTC },
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
    }

    // Jika 'kode' tidak ditemukan
    return NextResponse.json(
      { message: `Kode "${kode}" tidak terdaftar.` },
      { status: 404 }
    );
  } catch (error) {
    console.log("Gagal scan absen:", error);
    return NextResponse.json({ message: "Kesalahan Server" }, { status: 500 });
  }
};
