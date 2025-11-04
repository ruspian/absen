-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'GURU');

-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('LAKI_LAKI', 'PEREMPUAN');

-- CreateEnum
CREATE TYPE "StatusHarian" AS ENUM ('HADIR', 'SAKIT', 'IZIN', 'ALFA');

-- CreateEnum
CREATE TYPE "StatusMapel" AS ENUM ('HADIR', 'SAKIT', 'IZIN', 'ALFA');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT NOT NULL,
    "emailVerified" TIMESTAMP(3),
    "image" TEXT,
    "password" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'GURU',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Account" (
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("provider","providerAccountId")
);

-- CreateTable
CREATE TABLE "Session" (
    "sessionToken" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "VerificationToken" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "VerificationToken_pkey" PRIMARY KEY ("identifier","token")
);

-- CreateTable
CREATE TABLE "Guru" (
    "id" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "kode" TEXT NOT NULL,
    "nip" TEXT,
    "nuptk" TEXT,
    "gender" "Gender" NOT NULL DEFAULT 'LAKI_LAKI',
    "isPiket" BOOLEAN NOT NULL DEFAULT false,
    "userId" TEXT,

    CONSTRAINT "Guru_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Siswa" (
    "id" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "nisn" TEXT NOT NULL,
    "kode" TEXT NOT NULL,
    "gender" "Gender" NOT NULL DEFAULT 'LAKI_LAKI',
    "kelasId" TEXT NOT NULL,

    CONSTRAINT "Siswa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Kelas" (
    "id" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "waliKelasId" TEXT,

    CONSTRAINT "Kelas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MataPelajaran" (
    "id" TEXT NOT NULL,
    "kode" TEXT NOT NULL,
    "nama" TEXT NOT NULL,

    CONSTRAINT "MataPelajaran_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "JadwalPelajaran" (
    "id" TEXT NOT NULL,
    "hari" TEXT NOT NULL,
    "jamMulai" TIMESTAMP(3) NOT NULL,
    "jamSelesai" TIMESTAMP(3) NOT NULL,
    "kelasId" TEXT NOT NULL,
    "mapelId" TEXT NOT NULL,
    "guruId" TEXT NOT NULL,

    CONSTRAINT "JadwalPelajaran_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AbsenHarian" (
    "id" TEXT NOT NULL,
    "tanggal" DATE NOT NULL,
    "jamMasuk" TIME,
    "jamPulang" TIME,
    "status" "StatusHarian" NOT NULL DEFAULT 'ALFA',
    "siswaId" TEXT NOT NULL,

    CONSTRAINT "AbsenHarian_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AbsenMapel" (
    "id" TEXT NOT NULL,
    "tanggal" DATE NOT NULL,
    "status" "StatusMapel" NOT NULL DEFAULT 'ALFA',
    "keterangan" TEXT,
    "hari" TEXT NOT NULL,
    "jamMulai" TIME NOT NULL,
    "jamSelesai" TIME NOT NULL,
    "siswaId" TEXT NOT NULL,
    "jadwalId" TEXT NOT NULL,

    CONSTRAINT "AbsenMapel_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Session_sessionToken_key" ON "Session"("sessionToken");

-- CreateIndex
CREATE UNIQUE INDEX "Guru_kode_key" ON "Guru"("kode");

-- CreateIndex
CREATE UNIQUE INDEX "Guru_nip_key" ON "Guru"("nip");

-- CreateIndex
CREATE UNIQUE INDEX "Guru_nuptk_key" ON "Guru"("nuptk");

-- CreateIndex
CREATE UNIQUE INDEX "Guru_userId_key" ON "Guru"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Siswa_nisn_key" ON "Siswa"("nisn");

-- CreateIndex
CREATE UNIQUE INDEX "Siswa_kode_key" ON "Siswa"("kode");

-- CreateIndex
CREATE UNIQUE INDEX "Kelas_nama_key" ON "Kelas"("nama");

-- CreateIndex
CREATE UNIQUE INDEX "Kelas_waliKelasId_key" ON "Kelas"("waliKelasId");

-- CreateIndex
CREATE UNIQUE INDEX "MataPelajaran_kode_key" ON "MataPelajaran"("kode");

-- CreateIndex
CREATE UNIQUE INDEX "AbsenHarian_siswaId_tanggal_key" ON "AbsenHarian"("siswaId", "tanggal");

-- CreateIndex
CREATE UNIQUE INDEX "AbsenMapel_siswaId_jadwalId_tanggal_key" ON "AbsenMapel"("siswaId", "jadwalId", "tanggal");

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Guru" ADD CONSTRAINT "Guru_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Siswa" ADD CONSTRAINT "Siswa_kelasId_fkey" FOREIGN KEY ("kelasId") REFERENCES "Kelas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Kelas" ADD CONSTRAINT "Kelas_waliKelasId_fkey" FOREIGN KEY ("waliKelasId") REFERENCES "Guru"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JadwalPelajaran" ADD CONSTRAINT "JadwalPelajaran_kelasId_fkey" FOREIGN KEY ("kelasId") REFERENCES "Kelas"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JadwalPelajaran" ADD CONSTRAINT "JadwalPelajaran_mapelId_fkey" FOREIGN KEY ("mapelId") REFERENCES "MataPelajaran"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JadwalPelajaran" ADD CONSTRAINT "JadwalPelajaran_guruId_fkey" FOREIGN KEY ("guruId") REFERENCES "Guru"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AbsenHarian" ADD CONSTRAINT "AbsenHarian_siswaId_fkey" FOREIGN KEY ("siswaId") REFERENCES "Siswa"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AbsenMapel" ADD CONSTRAINT "AbsenMapel_siswaId_fkey" FOREIGN KEY ("siswaId") REFERENCES "Siswa"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AbsenMapel" ADD CONSTRAINT "AbsenMapel_jadwalId_fkey" FOREIGN KEY ("jadwalId") REFERENCES "JadwalPelajaran"("id") ON DELETE CASCADE ON UPDATE CASCADE;
