import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { getToday, getTodayNameWITA } from "@/lib/formatTime";

export const POST = async (req) => {
  try {
    // Autentikasi & Otorisasi
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

    const isAuthorized = userRole === "ADMIN" || isGuruPiket;

    if (!isAuthorized) {
      return NextResponse.json(
        { message: "Akses ditolak. Anda bukan Admin atau Guru Piket." },
        { status: 403 }
      );
    }

    // Ambil data dari body
    const body = await req.json();
    const { siswaId, guruId: bodyGuruId, status } = body;

    const today = getToday();

    // cek apakah data lengkap
    if (!status || (!siswaId && !bodyGuruId)) {
      return NextResponse.json(
        {
          message:
            "Data tidak lengkap. Butuh status dan (siswaId atau guruId).",
        },
        { status: 400 }
      );
    }

    if (siswaId) {
      const absenSiswa = await prisma.$transaction(async (tx) => {
        //  Upsert AbsenHarian  => update and insert
        const absenHarian = await tx.absenHarian.upsert({
          where: {
            siswaId_tanggal: { siswaId: siswaId, tanggal: today },
          },
          update: {
            status: status,
            jamMasuk: status === "HADIR" ? new Date() : null,
            jamPulang: null,
          },
          create: {
            siswaId: siswaId,
            tanggal: today,
            status: status,
            jamMasuk: status === "HADIR" ? new Date() : null,
          },
        });

        // Singkoron kan dengan data AbsenMapel
        // Kalo statusnya SAKIT, IZIN, atau ALFA
        if (status === "SAKIT" || status === "IZIN" || status === "ALFA") {
          // Ambil 'kelasId' siswa
          const siswa = await tx.siswa.findUnique({
            where: { id: siswaId },
            select: { kelasId: true },
          });

          if (siswa && siswa.kelasId) {
            // Ambil jadwal siswa HARI INI
            const jadwalSiswaHariIni = await tx.jadwalPelajaran.findMany({
              where: {
                kelasId: siswa.kelasId,
                hari: hariIni,
              },
            });

            // Bikin data buat 'AbsenMapel'
            const dataAbsenMapel = jadwalSiswaHariIni.map((jadwal) => ({
              siswaId: siswaId,
              jadwalId: jadwal.id,
              tanggal: today,
              status: status, // <== statusnya SAKIT, IZIN, atau ALFA
              hari: jadwal.hari,
              jamMulai: jadwal.jamMulai,
              jamSelesai: jadwal.jamSelesai,
            }));

            // Pake 'upsert' buat nimpah data mapel yg mungkin udah ada
            if (dataAbsenMapel.length > 0) {
              for (const data of dataAbsenMapel) {
                await tx.absenMapel.upsert({
                  where: {
                    siswaId_jadwalId_tanggal: {
                      siswaId: data.siswaId,
                      jadwalId: data.jadwalId,
                      tanggal: data.tanggal,
                    },
                  },
                  update: { status: data.status },
                  create: data,
                });
              }
            }
          }
        }

        return absenHarian;
      });

      return NextResponse.json(
        { absenSiswa, message: `Absen ${status} (Siswa) berhasil dicatat` },
        { status: 201 }
      );
    } else if (bodyGuruId) {
      // jika ini guru
      const absenGuru = await prisma.absenGuruHarian.upsert({
        where: {
          guruId_tanggal: {
            guruId: bodyGuruId,
            tanggal: today,
          },
        },
        update: {
          status: status,
          jamMasuk: status === "HADIR" ? new Date() : null,
          jamPulang: null,
        },
        create: {
          guruId: bodyGuruId,
          tanggal: today,
          status: status,
          jamMasuk: status === "HADIR" ? new Date() : null,
        },
      });

      return NextResponse.json(
        { absenGuru, message: `Absen ${status} (Guru) berhasil dicatat` },
        { status: 201 }
      );
    }
  } catch (error) {
    console.log("Gagal mencatat absen manual:", error);

    if (error.code === "P2003") {
      return NextResponse.json(
        { message: "Error: ID Siswa atau Guru tidak ditemukan di database." },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: "Kesalahan Server" }, { status: 500 });
  }
};
