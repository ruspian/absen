import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
  const { nextUrl } = req;
  const pathname = nextUrl.pathname;

  // Kalo belum login, nilainya 'null'
  const token = req.auth?.user;
  const isLoggedIn = !!token;

  // Rute yang Boleh Dibuka kalo Belum Login
  const publicPageRoutes = [
    "/", // Halaman login
    "/daftar",
  ];

  // Rute API yang Boleh Diakses Publik
  const publicApiRoutes = [
    "/api/daftar", // API daftar
    "/api/auth", // Semua API NextAuth (wajib)
  ];

  // Rute Khusus Admin
  // const adminRoutes = [
  //   "/master",
  //   "/pengguna",
  //   "/api/master",
  //   "/api/pengguna",
  //   "/api/dashboard/admin",
  //   "/api/laporan/bulanan-kelas",
  //   "/api/laporan/bulanan-guru",
  // ];

  // Rute Khusus Guru Piket atau admin
  const piketRoutes = [
    "/dashboard",
    "/pengajuan/approval",
    "/absensi",
    "/api/absen/scan",
    "/api/absen/manual",
    "/api/dashboard/piket",
    "/api/mapel",
    "/api/jadwal",
    "/api/izin/approval",
    "/api/laporan/bulanan-kelas",
  ];

  // Rute Umum Guru atau guru piket
  const guruRoutes = [
    "/mengajar/jadwal",
    "/mengajar/absensi",
    "/laporan",
    "/absen/mapel",

    "/api/jadwal",
    "/api/absen/mapel",
    "/api/laporan/bulanan-kelas",
    "/api/laporan/bulanan-guru",
    "/api/laporan/bulanan",
    "/api/laporan/bulanan-kelas",
  ];

  // Cek Rute Publik
  const isPublicPage = publicPageRoutes.some((route) => pathname === route);
  const isPublicApi = publicApiRoutes.some((route) =>
    pathname.startsWith(route)
  );

  if (isPublicPage) {
    // jika sudah login
    if (isLoggedIn) {
      //tendang ke dashboard
      return NextResponse.redirect(new URL("/dashboard", nextUrl));
    }
    return NextResponse.next(); // Kalo belum login, biarin
  }

  if (isPublicApi) {
    return NextResponse.next(); // Biarin API publik jalan
  }

  // kalo belum login
  if (!isLoggedIn) {
    // Kalo nyoba akses API, kasih 401
    if (pathname.startsWith("/api")) {
      return NextResponse.json({ message: "Akses Ditolak" }, { status: 401 });
    }
    // Kalo nyoba akses Halaman, tendang ke Login
    return NextResponse.redirect(new URL("/", nextUrl));
  }

  // cek Otorisasi
  const { role, isPiket } = token;

  // Kalo ADMIN, boleh ke mana aja
  if (role === "ADMIN") {
    return NextResponse.next();
  }

  // Kalo GURU
  if (role === "GURU") {
    //  Tentukan Whitelist
    const allowedRoutes = [...guruRoutes, "/dashboard"];

    // Kalo dia Guru Piket, tambahin rute piket ke 'allowed'
    if (isPiket) {
      allowedRoutes.push(...piketRoutes);
    }

    //  Cek apakah halaman yang di tuju
    const isRouteAllowed = allowedRoutes.some((route) =>
      pathname.startsWith(route)
    );

    if (isRouteAllowed) {
      return NextResponse.next(); // Boleh masuk
    }

    //  Kalo nggak ada di daftar 'allowed', tendang
    return NextResponse.redirect(new URL("/dashboard", nextUrl));
  }

  // Kalo USER
  if (role === "USER") {
    const allowedRoutes = [
      "/dashboard",
      "/api/dashboard/siswa",
      "/pengajuan/izin",
      "/api/izin/ajukan",
      "/api/cloudinary",
    ];

    const isRouteAllowed = allowedRoutes.some((route) =>
      pathname.startsWith(route)
    );

    if (isRouteAllowed) {
      return NextResponse.next(); // Boleh masuk
    }

    // Kalo nyoba ke tempat lain, tendang
    return NextResponse.redirect(new URL("/dashboard", nextUrl));
  }

  // Fallback jika gak ada kondisi di atas
  return NextResponse.redirect(new URL("/", nextUrl));
});

// Matcher
// tentukan file mana aja yang bakal dijaga sama middleware
export const config = {
  matcher: [
    /*
     * Match semua request, KECUALI:
     * - _next/static (file statis)
     * - _next/image (file gambar)
     * - favicon.ico (file ikon)
     *
     * (Kita sengaja gak nge-blok 'api' di sini biar API kita ikut aman)
     */
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
