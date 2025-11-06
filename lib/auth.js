import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";

export const { handlers, auth, signIn, signOut } = NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        // Pastikan input terisi
        if (!credentials?.email || !credentials?.password) {
          return null; // kembalikan null
        }

        const { email, password } = credentials;

        console.log(`email: ${email}, password: ${password}`);

        // Cek user berdasarkan email
        const user = await prisma.user.findUnique({
          where: { email },
        });

        if (!user) {
          return null;
        }

        if (!user.password) {
          return null;
        }

        // Cek password
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
          return null;
        }

        // Update waktu login terakhir
        await prisma.user.update({
          where: { id: user.id },
          data: { lastLogin: new Date() },
        });

        // Return data user tanpa password
        return {
          id: user.id,
          name: user.name,
          email: user.email,
          image: user.image,
          role: user.role,
        };
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user, trigger, session }) {
      // 'user' hanya ada saat pertama kali login
      if (user) {
        // Ambil data lengkap dari DB saat pertama login
        const dbUser = await prisma.user.findUnique({
          where: { id: user.id },
          include: { guruProfil: true }, // Ambil data guruProfil
        });

        if (dbUser) {
          token.id = dbUser.id;
          token.role = dbUser.role;
          token.isPiket = dbUser.guruProfil?.isPiket ?? false; // Suntikkan isPiket
        }
      }

      // Jika ada update session, perbarui token
      if (trigger === "update" && session?.name) {
        token.name = session.name;
      }

      // Kembalikan token yang sudah dimodifikasi
      return token;
    },

    async session({ session, token }) {
      // Ambil data dari 'token' dan masukkan ke 'session'
      if (token) {
        session.user.id = token.id;
        session.user.role = token.role;
        session.user.isPiket = token.isPiket;
      }

      // Kembalikan session yang sudah dimodifikasi
      return session;
    },
  },

  // arahkan ke halaman login dan error custom
  pages: {
    signIn: "/",
    error: "/", // pesan error bisa diambil dari query `?error=`
  },
});
