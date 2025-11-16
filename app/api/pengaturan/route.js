import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";

export const GET = async (req) => {
  try {
    const session = await auth();
    if (!session) {
      return NextResponse.json({ message: "Akses ditolak" }, { status: 401 });
    }

    let pengaturan = await prisma.pengaturan.findFirst();

    // Kalo data pengaturan belum ada, bikin default-nya
    if (!pengaturan) {
      pengaturan = await prisma.pengaturan.create({
        data: {
          jamMasukSekolah: "07:15",
          jamPulangSekolah: "13:00",
        },
      });
    }

    return NextResponse.json(pengaturan, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Kesalahan Server" }, { status: 500 });
  }
};

export const PATCH = async (req) => {
  try {
    const session = await auth();
    if (session?.user?.role !== "ADMIN") {
      return NextResponse.json({ message: "Akses ditolak" }, { status: 403 });
    }

    const body = await req.json();
    // ambil jam masuk & jam pulangdan id dari body
    const { jamMasukSekolah, jamPulangSekolah, id } = body;

    // kalo salah satu data tidak di isi
    if (!jamMasukSekolah || !jamPulangSekolah || !id) {
      return NextResponse.json(
        { message: "Data tidak lengkap" },
        { status: 400 }
      );
    }

    // update pengaturan
    const updated = await prisma.pengaturan.update({
      where: { id: id },
      data: {
        jamMasukSekolah: jamMasukSekolah,
        jamPulangSekolah: jamPulangSekolah,
      },
    });

    return NextResponse.json(
      { updated, message: "Pengaturan berhasil diperbarui" },
      { status: 200 }
    );
  } catch (error) {
    console.log("gagal saat memperbaharui data pengaturan", error);

    return NextResponse.json({ message: "Kesalahan Server" }, { status: 500 });
  }
};
