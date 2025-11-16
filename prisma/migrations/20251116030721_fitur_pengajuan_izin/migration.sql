/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `Siswa` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[siswaId]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "StatusPengajuan" AS ENUM ('PENDING', 'APPROVED', 'REJECTED');

-- AlterTable
ALTER TABLE "Siswa" ADD COLUMN     "userId" TEXT;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "siswaId" TEXT;

-- CreateTable
CREATE TABLE "PengajuanIzin" (
    "id" TEXT NOT NULL,
    "tanggal" DATE NOT NULL,
    "status" "StatusPengajuan" NOT NULL DEFAULT 'PENDING',
    "alasan" TEXT NOT NULL,
    "buktiUrl" TEXT,
    "siswaId" TEXT NOT NULL,
    "diProsesOlehId" TEXT,
    "komentarAdmin" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PengajuanIzin_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "PengajuanIzin_siswaId_idx" ON "PengajuanIzin"("siswaId");

-- CreateIndex
CREATE INDEX "PengajuanIzin_diProsesOlehId_idx" ON "PengajuanIzin"("diProsesOlehId");

-- CreateIndex
CREATE UNIQUE INDEX "PengajuanIzin_siswaId_tanggal_key" ON "PengajuanIzin"("siswaId", "tanggal");

-- CreateIndex
CREATE UNIQUE INDEX "Siswa_userId_key" ON "Siswa"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "User_siswaId_key" ON "User"("siswaId");

-- AddForeignKey
ALTER TABLE "Siswa" ADD CONSTRAINT "Siswa_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PengajuanIzin" ADD CONSTRAINT "PengajuanIzin_siswaId_fkey" FOREIGN KEY ("siswaId") REFERENCES "Siswa"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PengajuanIzin" ADD CONSTRAINT "PengajuanIzin_diProsesOlehId_fkey" FOREIGN KEY ("diProsesOlehId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
