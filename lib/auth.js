import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { format } from "date-fns";
import { id as localeID } from "date-fns/locale";

const TIMEZONE = "Asia/Makassar"; // WITA

// fungsi ambil nama hari ini
const getTodayNameWITA = () => {
  // 'eeee' -> "Senin", "Selasa", ...
  return format(new Date(), "eeee", {
    locale: localeID,
    timeZone: TIMEZONE,
  });
};

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
          include: {
            guruProfil: {
              select: { id: true },
            },
            siswaProfil: { select: { id: true } },
          },
        });

        if (dbUser) {
          token.id = dbUser.id;
          token.role = dbUser.role;
          token.guruId = dbUser.guruProfil?.id || null; // Simpen guruId
          token.siswaId = dbUser.siswaProfil?.id || null; // Simpen siswaId

          // Cek guru piket hari ini
          let isPiketToday = false;
          if (dbUser.role === "GURU" && dbUser.guruProfil?.id) {
            const hariIni = getTodayNameWITA(); // Misal: "Kamis"
            try {
              const cekPiket = await prisma.jadwalPiket.findFirst({
                where: {
                  guruId: dbUser.guruProfil.id,
                  hari: hariIni,
                },
              });
              if (cekPiket) {
                isPiketToday = true;
              }
            } catch (e) {
              console.error("Gagal cek jadwal piket di callback JWT:", e);
              isPiketToday = false; // Gagal =  bukan piket
            }
          }
          // Simpen status piket dinamis ke token
          token.isPiket = isPiketToday;
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
        session.user.guruId = token.guruId;
        session.user.isPiket = token.isPiket;
        session.user.siswaId = token.siswaId;
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
