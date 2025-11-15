-- CreateTable
CREATE TABLE "Pengaturan" (
    "id" TEXT NOT NULL,
    "jamMasukSekolah" TEXT NOT NULL DEFAULT '07:15',
    "jamPulangSekolah" TEXT NOT NULL DEFAULT '13:00',

    CONSTRAINT "Pengaturan_pkey" PRIMARY KEY ("id")
);
