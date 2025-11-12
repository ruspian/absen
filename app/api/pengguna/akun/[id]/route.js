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
    const { name, email, password, role, guruId, isPiket } = body;

    const updatedUser = await prisma.$transaction(async (tx) => {
      // Ambil data user saat ini
      const currentUser = await tx.user.findUnique({
        where: { id: userIdToEdit },
        include: { guruProfil: true },
      });
      const oldGuruId = currentUser.guruProfil?.id;

      // Siapin data user baru
      const userData = {
        name,
        email,
        role,
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

      // ganti role
      if (role === "GURU" && guruId) {
        // Kalo dia jadi guru

        // Cek kalo link gurunya ganti
        if (oldGuruId && oldGuruId !== guruId) {
          // Unlink guru lama
          await tx.guru.update({
            where: { id: oldGuruId },
            data: { userId: null, isPiket: false },
          });
        }

        // Link guru baru & set status piket
        await tx.guru.update({
          where: { id: guruId },
          data: {
            userId: user.id, // Sambungin
            isPiket: isPiket, // Set status piket
          },
        });
      } else if (role === "ADMIN") {
        // Kalo dia jadi admin dan sebelumnya guru
        if (oldGuruId) {
          // Unlink guru lama
          await tx.guru.update({
            where: { id: oldGuruId },
            data: { userId: null, isPiket: false },
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

    // 3. Hapus Akun Guru Tapi kita harus 'unlink' 'Guru' manual

    await prisma.$transaction(async (tx) => {
      // set akun guru jadi null / unlink guru
      await tx.guru.updateMany({
        where: { userId: userIdToDelete },
        data: { userId: null },
      });

      // Hapus User
      await tx.user.delete({
        where: { id: userIdToDelete },
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
