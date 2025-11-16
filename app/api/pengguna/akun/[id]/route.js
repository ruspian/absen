import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import bcrypt from "bcryptjs";
import { Prisma } from "@prisma/client";

export const PATCH = async (req, { params }) => {
  const { id: userIdToEdit } = await params; // ID user yang mau diedit

  try {
    // Otorisasi
    const session = await auth();
    if (session?.user?.role !== "ADMIN") {
      return NextResponse.json({ message: "Akses ditolak" }, { status: 403 });
    }

    //  Ambil data
    const body = await req.json();
    const { name, email, password, role, guruId, isPiket, siswaId } = body;

    const updatedUser = await prisma.$transaction(async (tx) => {
      // Ambil data user saat ini
      const currentUser = await tx.user.findUnique({
        where: { id: userIdToEdit },
        include: { guruProfil: true, siswaProfil: true },
      });
      const oldGuruId = currentUser.guruProfil?.id;
      const oldSiswaId = currentUser.siswaProfil?.id;

      // Siapin data user baru
      const userData = {
        name,
        email,
        role,
        siswaId: role === "USER" ? siswaId : null,
      };

      // Cek kalo password diisi, baru di-hash
      if (password && password.length > 0) {
        userData.password = await bcrypt.hash(password, 10);
      }

      // Update User-nya
      const user = await tx.user.update({
        where: { id: userIdToEdit },
        data: userData,
      });

      // unlink akun lama
      // ganti role
      if (role === "GURU" && guruId) {
        if (oldSiswaId) {
          // Unlink siswa lama
          await tx.siswa.update({
            where: { id: oldSiswaId },
            data: { userId: null },
          });
        }
        if (oldGuruId && oldGuruId !== guruId) {
          // Unlink guru lama
          await tx.guru.update({
            where: { id: oldGuruId },
            data: { userId: null },
          });
        }
        // Link guru baru
        await tx.guru.update({
          where: { id: guruId },
          data: { userId: user.id },
        });
      }
      // 2. Kalo role ganti jadi USER
      else if (role === "USER" && siswaId) {
        if (oldGuruId) {
          // Unlink guru lama
          await tx.guru.update({
            where: { id: oldGuruId },
            data: { userId: null },
          });
        }
        if (oldSiswaId && oldSiswaId !== siswaId) {
          // Unlink siswa lama
          await tx.siswa.update({
            where: { id: oldSiswaId },
            data: { userId: null },
          });
        }
        // Link siswa baru
        await tx.siswa.update({
          where: { id: siswaId },
          data: { userId: user.id },
        });
      }
      // 3. Kalo role ganti jadi ADMIN
      else if (role === "ADMIN") {
        if (oldGuruId) {
          // Unlink guru lama
          await tx.guru.update({
            where: { id: oldGuruId },
            data: { userId: null },
          });
        }
        if (oldSiswaId) {
          // Unlink siswa lama
          await tx.siswa.update({
            where: { id: oldSiswaId },
            data: { userId: null },
          });
        }
      }

      return user;
    });

    return NextResponse.json(updatedUser, { status: 200 });
  } catch (error) {
    console.log("Gagal update akun:", error);

    // jika email sudah digunakan
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        return NextResponse.json(
          { message: "Error P2002: Email ini sudah terdaftar." },
          { status: 400 }
        );
      }
    }
    return NextResponse.json({ message: "Kesalahan Server" }, { status: 500 });
  }
};

export const DELETE = async (req, { params }) => {
  const { id: userIdToDelete } = await params;

  try {
    // Otorisasi
    const session = await auth();
    if (session?.user?.role !== "ADMIN") {
      return NextResponse.json({ message: "Akses ditolak" }, { status: 403 });
    }

    //  Validasi Super Admin
    // Pastiin email ini sama dengan akun yang sudah ditentukan / login
    const user = await prisma.user.findUnique({
      where: { id: userIdToDelete },
      select: { email: true },
    });

    if (user?.email === "otong@gmail.com") {
      return NextResponse.json(
        { message: "Akun Admin utama tidak bisa dihapus" },
        { status: 400 }
      );
    }

    //  Hapus Akun Guru Tapi kita harus 'unlink' 'Guru' manual
    await prisma.$transaction(async (tx) => {
      // Unlink Guru
      await tx.guru.updateMany({
        where: { userId: userIdToEdit },
        data: { userId: null },
      });
      //  Unlink Siswa
      await tx.siswa.updateMany({
        where: { userId: userIdToEdit },
        data: { userId: null },
      });

      // Hapus User
      await tx.user.delete({
        where: { id: userIdToEdit },
      });
    });

    return NextResponse.json(
      { message: "Akun berhasil dihapus!" },
      { status: 200 }
    );
  } catch (error) {
    console.log("Gagal menghapus akun:", error);
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2025") {
        // kalo Gak nemu
        return NextResponse.json(
          { message: "Akun tidak ditemukan" },
          { status: 404 }
        );
      }
    }
    return NextResponse.json({ message: "Kesalahan Server" }, { status: 500 });
  }
};
