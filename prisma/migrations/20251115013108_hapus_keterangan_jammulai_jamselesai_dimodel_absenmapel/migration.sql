/*
  Warnings:

  - You are about to drop the column `jamMulai` on the `AbsenMapel` table. All the data in the column will be lost.
  - You are about to drop the column `jamSelesai` on the `AbsenMapel` table. All the data in the column will be lost.
  - You are about to drop the column `keterangan` on the `AbsenMapel` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "AbsenMapel" DROP COLUMN "jamMulai",
DROP COLUMN "jamSelesai",
DROP COLUMN "keterangan";
