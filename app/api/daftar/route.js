import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { Prisma } from "@prisma/client";

export const POST = async (req) => {
  try {
    const body = await req.json();

    const { email, password, name } = body;

    // pastikan semua form diisi
    if (!password || !email || !name) {
      return NextResponse.json({ message: "Isi semua form!" }, { status: 400 });
    }

    // pastikan pasword minimal 8 karakter
    if (password.length < 8) {
      return NextResponse.json(
        { message: "Kata sandi minimal 8 karakter" },
        { status: 400 }
      );
    }

    // cek email
    const existingUser = await prisma.user.findUnique({
      where: { email: email },
    });

    // pastikan email belum terdaftar
    if (existingUser) {
      return NextResponse.json(
        { message: "Email sudah terdaftar" },
        { status: 400 }
      );
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // buat user
    const user = await prisma.user.create({
      data: {
        email,
        name,
        password: hashedPassword,
      },
    });

    return NextResponse.json(
      { user, message: "Daftar berhasil!" },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);

    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      // P2002 adalah kode error untuk "Unique constraint failed"
      if (error.code === "P2002") {
        return NextResponse.json(
          { message: "Email ini sudah terdaftar" },
          { status: 409 }
        );
      }
    }

    return NextResponse.json(
      { message: "Terjadi kesalahan pada server" },
      { status: 500 }
    );
  }
};
