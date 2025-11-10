-- CreateTable
CREATE TABLE "AbsenGuruHarian" (
    "id" TEXT NOT NULL,
    "tanggal" DATE NOT NULL,
    "jamMasuk" TIME(6),
    "jamPulang" TIME(6),
    "status" "StatusHarian" NOT NULL DEFAULT 'ALFA',
    "guruId" TEXT NOT NULL,

    CONSTRAINT "AbsenGuruHarian_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "AbsenGuruHarian_guruId_tanggal_key" ON "AbsenGuruHarian"("guruId", "tanggal");

-- AddForeignKey
ALTER TABLE "AbsenGuruHarian" ADD CONSTRAINT "AbsenGuruHarian_guruId_fkey" FOREIGN KEY ("guruId") REFERENCES "Guru"("id") ON DELETE CASCADE ON UPDATE CASCADE;
