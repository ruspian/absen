import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { format } from "date-fns";
import { id as localeID } from "date-fns/locale";
import { getToday, getTodayNameWITA } from "@/lib/formatTime";

export const PATCH = async (req) => {
  try {
    //  Otorisasi
    const session = await auth();
    if (!session || !session.user) {
      return NextResponse.json({ message: "Akses ditolak" }, { status: 401 });
    }

    const userRole = session.user.role;
    const guruId = session.user.guruId;
    const hariIni = getTodayNameWITA();

    let isGuruPiket = false;
    if (userRole === "GURU" && guruId) {
      const cekPiket = await prisma.jadwalPiket.findFirst({
        where: { guruId: guruId, hari: hariIni },
      });
      if (cekPiket) isGuruPiket = true;
    }

    const isAuthorized = userRole === "ADMIN" || isGuruPiket;
    if (!isAuthorized) {
      return NextResponse.json(
        {
          message: `Akses ditolak. Anda bukan Admin atau Guru Piket hari ${hariIni}.`,
        },
        { status: 403 }
      );
    }

    // Ambil data dari body
    const body = await req.json();
    const { pengajuanId, newStatus, komentar, siswaId, tanggalIzin, tipeIzin } =
      body;

    if (!pengajuanId || !newStatus || !siswaId || !tanggalIzin || !tipeIzin) {
      return NextResponse.json(
        { message: "Data tidak lengkap." },
        { status: 400 }
      );
    }

    const tanggalIzinWITA = getToday(tanggalIzin);

    // Pake Transaksi
    await prisma.$transaction(async (tx) => {
      // Update status PengajuanIzin
      await tx.pengajuanIzin.update({
        where: { id: pengajuanId },
        data: {
          status: newStatus, // "APPROVED" atau "REJECTED"
          komentarAdmin: komentar,
          diProsesOlehId: session.user.id,
        },
      });

      // Kalo disetujui (APPROVED)
      if (newStatus === "APPROVED") {
        //  Update AbsenHarian
        await tx.absenHarian.upsert({
          where: {
            siswaId_tanggal: {
              siswaId: siswaId,
              tanggal: tanggalIzinWITA, // Pastiin ini objek Date
            },
          },
          update: {
            status: tipeIzin, // "SAKIT" atau "IZIN"
            jamMasuk: null,
            jamPulang: null,
          },
          create: {
            siswaId: siswaId,
            tanggal: tanggalIzinWITA,
            status: tipeIzin,
          },
        });

        const namaHariIzin = format(tanggalIzinWITA, "eeee", {
          locale: localeID,
        });

        //  Sinkronisasi ke AbsenMapel
        const jadwalSiswaHariItu = await tx.jadwalPelajaran.findMany({
          where: {
            kelas: { siswa: { some: { id: siswaId } } },
            hari: namaHariIzin,
          },
        });

        const dataAbsenMapel = jadwalSiswaHariItu.map((jadwal) => ({
          siswaId: siswaId,
          jadwalId: jadwal.id,
          tanggal: tanggalIzinWITA,
          status: tipeIzin, // "SAKIT" atau "IZIN"
          hari: jadwal.hari,
          jamMulai: jadwal.jamMulai,
          jamSelesai: jadwal.jamSelesai,
        }));

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
    });

    return NextResponse.json(
      { message: `Pengajuan ${newStatus.toLowerCase()}` },
      { status: 200 }
    );
  } catch (error) {
    console.log("Gagal memproses izin:", error);
    return NextResponse.json({ message: "Kesalahan Server" }, { status: 500 });
  }
};
