-- DropIndex
DROP INDEX "Siswa_nisn_key";

-- AlterTable
ALTER TABLE "Siswa" ALTER COLUMN "nisn" DROP NOT NULL;
