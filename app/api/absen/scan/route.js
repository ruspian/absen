import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";

// Helper
const getToday = () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Set ke awal hari
  return today;
};

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
    const isPiket = session.user.isPiket;
    const isAuthorized =
      userRole === "ADMIN" || (userRole === "GURU" && isPiket);

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
            jamMasuk: jamSekarang,
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
        // kalo siswa udah absen masuk tapi belum absen pulang, update jam pulang
        const absenUpdate = await prisma.absenHarian.update({
          where: { id: absenAda.id },
          data: { jamPulang: jamSekarang },
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
        // kalo siswa udah absen masuk dan absen pulang, kirim pesan

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
        await prisma.absenGuruHarian.create({
          data: {
            guruId: guru.id,
            tanggal: today,
            status: "HADIR",
            jamMasuk: jamSekarang,
          },
        });
        return NextResponse.json({
          message: `Masuk: ${guru.nama} (Guru)`,
        });
      } else if (absenAda && !absenAda.jamPulang) {
        await prisma.absenGuruHarian.update({
          where: { id: absenAda.id },
          data: { jamPulang: jamSekarang },
        });
        return NextResponse.json({
          message: `Pulang: ${guru.nama} (Guru)`,
        });
      } else {
        return NextResponse.json(
          { message: `${guru.nama} sudah absen pulang hari ini.` },
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
