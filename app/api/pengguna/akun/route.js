import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import bcrypt from "bcryptjs";
import { Prisma } from "@prisma/client";

export const POST = async (req) => {
  try {
    //  Otorisasi
    const session = await auth();
    if (!session || session?.user?.role !== "ADMIN") {
      return NextResponse.json(
        { message: "Akses ditolak. Hanya Admin." },
        { status: 403 }
      );
    }

    // Ambil data
    const body = await req.json();
    const { name, email, password, role, guruId } = body;

    if (!name || !email || !password || !role) {
      return NextResponse.json(
        { message: "Data tidak lengkap" },
        { status: 400 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Kalo rolenya admin, gak perlu transaksi
    if (role === "ADMIN") {
      const newAdmin = await prisma.user.create({
        data: {
          name,
          email,
          password: hashedPassword,
          role: "ADMIN",
        },
      });
      return NextResponse.json(newAdmin, { status: 201 });
    }

    // Kalo rolenya guru, kita wajib pake transaksi
    if (role === "GURU" && guruId) {
      const [newUser] = await prisma.$transaction(async (tx) => {
        // Bikin User baru
        const user = await tx.user.create({
          data: {
            name,
            email,
            password: hashedPassword,
            role: "GURU",
          },
        });

        // Update Guru, tambahkan userId
        await tx.guru.update({
          where: { id: guruId },
          data: {
            userId: user.id,
          },
        });

        return [user];
      });

      return NextResponse.json(newUser, { status: 201 });
    }

    // Kalo role guru tapi guruId gak ada
    return NextResponse.json(
      { message: "Role Guru harus di-link ke Profil Guru" },
      { status: 400 }
    );
  } catch (error) {
    console.log("Gagal membuat akun:", error);
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
