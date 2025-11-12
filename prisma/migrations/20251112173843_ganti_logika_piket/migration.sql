/*
  Warnings:

  - You are about to drop the column `isPiket` on the `Guru` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Guru" DROP COLUMN "isPiket";

-- CreateTable
CREATE TABLE "JadwalPiket" (
    "id" TEXT NOT NULL,
    "hari" TEXT NOT NULL,
    "guruId" TEXT NOT NULL,

    CONSTRAINT "JadwalPiket_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "JadwalPiket_hari_guruId_key" ON "JadwalPiket"("hari", "guruId");

-- AddForeignKey
ALTER TABLE "JadwalPiket" ADD CONSTRAINT "JadwalPiket_guruId_fkey" FOREIGN KEY ("guruId") REFERENCES "Guru"("id") ON DELETE CASCADE ON UPDATE CASCADE;
