/*
  Warnings:

  - Added the required column `tipe` to the `PengajuanIzin` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PengajuanIzin" ADD COLUMN     "tipe" "StatusHarian" NOT NULL;
