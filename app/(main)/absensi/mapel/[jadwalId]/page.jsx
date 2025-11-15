// Paksa dinamis
export const dynamic = "force-dynamic";

import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import Breadcrumb from "@/components/Breadcrumb";
import { redirect } from "next/navigation";
import { getToday } from "@/lib/formatTime";
import AbsenMapelClient from "@/components/AbsenMapelClient";

const AbsenMapelPage = async ({ params }) => {
  const { jadwalId } = await params;

  const today = getToday();

  // Cek Sesi
  const session = await auth();
  if (session?.user?.role !== "GURU" || !session?.user?.guruId) {
    redirect("/"); // Kalo bukan guru, tendang
  }
  const loggedInGuruId = session.user.guruId;

  // Ambil detail Jadwal & Keamanan
  const jadwal = await prisma.jadwalPelajaran.findUnique({
    where: { id: jadwalId },
    include: {
      kelas: { select: { nama: true } },
      mapel: { select: { nama: true } },
    },
  });

  if (!jadwal) {
    return <div className="p-8">Jadwal tidak ditemukan.</div>;
  }

  // 4. Cek kalo guru yang login = guru di jadwal
  if (jadwal.guruId !== loggedInGuruId) {
    return (
      <div className="p-8">Akses ditolak. Ini bukan jadwal mengajar Anda.</div>
    );
  }

  // Ambil semua siswa di kelas ini
  const siswaDiKelas = await prisma.siswa.findMany({
    where: {
      kelasId: jadwal.kelasId,
    },
    orderBy: {
      nama: "asc",
    },
  });

  // Ambil data absen mapel yang udah masuk HARI INI
  const absenMapelHariIni = await prisma.absenMapel.findMany({
    where: {
      jadwalId: jadwalId,
      tanggal: today,
    },
  });

  // Gabungkan data
  const formattedSiswa = siswaDiKelas.map((siswa) => {
    const absen = absenMapelHariIni.find((a) => a.siswaId === siswa.id);
    return {
      id: siswa.id,
      nama: siswa.nama,
      kode: siswa.kode,
      status: absen?.status || null, // null = Belum Absen
    };
  });

  return (
    <div>
      <Breadcrumb />
      <div className="flex-1 space-y-4 p-8 pt-6">
        {/* Info Jadwal */}
        <div>
          <h1 className="text-3xl font-bold">Ambil Absen Mata Pelajaran</h1>
          <p className="text-xl text-muted-foreground">
            {jadwal.mapel.nama} - Kelas {jadwal.kelas.nama}
          </p>
        </div>

        <AbsenMapelClient dataSiswa={formattedSiswa} jadwalId={jadwalId} />
      </div>
    </div>
  );
};

export default AbsenMapelPage;
