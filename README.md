# 🚀 Sistem Absensi Sekolah

Sistem manajemen absensi sekolah modern yang dibangun menggunakan Next.js (App Router) dan Prisma. Aplikasi ini dirancang untuk menangani absensi harian (via scan barcode) dan absensi per mata pelajaran (via input manual guru).

---

## 🌟 Fitur Utama

Sistem ini memiliki 4 level akses dengan fitur yang berbeda-beda:

### 1. Admin (Super User)

- **Dashboard Statistik:** Melihat ringkasan data seluruh sekolah (total siswa, total guru, persentase absensi harian).
- **Daftar Alfa Harian:** Melihat daftar siswa yang berstatus "Alfa" atau "Belum Absen" secara _real-time_.
- **Manajemen Master Data (CRUD):**
  - Kelola Data Siswa
  - Kelola Data Guru
  - Kelola Data Kelas
  - Kelola Data Mata Pelajaran
  - Kelola Jadwal Pelajaran
- **Manajemen Akun Login (CRUD):**
  - Membuat akun login (`User`) untuk Admin dan Guru.
  - Menghubungkan (`link`) akun `User` ke profil `Guru` yang sudah ada.
- **Manajemen Jadwal Piket (Dinamis):**
  - Mengatur guru siapa yang piket di hari apa (Senin, Selasa, dll.).
  - Sistem secara otomatis memberikan "Hak Akses Piket" berdasarkan jadwal ini.
- **Akses Penuh Laporan:** Memiliki akses penuh ke semua fitur Laporan Harian dan Laporan Bulanan.

### 2. Guru Piket

- **Dashboard Piket:** Melihat statistik absensi _real-time_ (Siswa Hadir, Siswa Belum Absen, Guru Hadir).
- **Halaman Absensi Harian (Hybrid):**
  - **Tab 1: Scan Barcode (Mode Kios):**
    - Input tersembunyi yang selalu fokus untuk _scanner_.
    - Logika _scan_ pintar: Scan pertama = **Jam Masuk**. Scan kedua = **Jam Pulang**.
    - Dilengkapi _Time-Gate_ (minimal 3 jam) untuk mencegah "Absen Pulang" terlalu cepat.
    - Mendukung scan Siswa dan Guru di API yang sama.
  - **Tab 2: Input Manual:**
    - Menampilkan daftar siswa yang statusnya **bukan** "HADIR".
    - Tombol aksi cepat untuk menandai "Sakit", "Izin", atau "Alfa".
    - Filter berdasarkan Kelas dan Status (Belum Absen, Sakit, Izin, Alfa).

### 3. Guru Mapel (non-Piket)

- **Dashboard Jadwal:** Melihat daftar jadwal mengajar **hari ini** (WITA-aware).
- **Status Jadwal Dinamis:** Menampilkan status jadwal ("Akan Datang", "Sedang Berlangsung", "Selesai") berdasarkan jam _serverless_.
- **Halaman Absensi Mapel:**
  - Mengambil absensi (Hadir, Sakit, Izin, Alfa) untuk siswa di kelas yang sedang diajar.
  - Dilengkapi _security check_ untuk memastikan hanya guru yang mengajar di jadwal itu yang bisa mengambil absen.
- **Halaman Rekap Mapel:**
  - Melihat _history_ (log) absensi yang pernah di-input.
  - Filter berdasarkan Bulan, Tahun, Kelas, dan Mapel.

### 4. Laporan

- **Laporan Harian:**
  - Filter berdasarkan Tanggal (Kalender) dan Kelas.
  - Menggunakan _Server-Side Filtering_ (data di-fetch ulang dari server) agar ringan.
  - Menampilkan rekap statistik dan tabel absensi Siswa & Guru.
  - **Export PDF (A4 Portrait):** Ekspor laporan harian per kelas yang dipilih.
- **Laporan Bulanan (Crosstab):**
  - Filter berdasarkan Bulan, Tahun, dan Kelas (untuk Siswa) atau Guru (untuk Laporan Individu).
  - **Export PDF (F4 Landscape):**
    - Mencetak laporan rekap bulanan (format kalender 1-31).
    - Lengkap dengan **Kop Surat (Logo & Alamat Sekolah)**.
    - Menghitung total H, S, I, A di akhir.
    - Menghormati hari libur (Jumat = "L").

### 5. User

- _Default role_ saat registrasi (fail-safe).
- Melihat _dashboard_ "Akses Terbatas". Tidak bisa mengakses halaman admin/guru/piket.

---

## 🛠️ Tumpukan Teknologi (Tech Stack)

- **Framework:** Next.js 14+ (App Router)
- **Database:** PostgreSQL (Neon)
- **ORM:** Prisma
- **Autentikasi:** NextAuth.js
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **PDF Generation:** `jspdf` & `jspdf-autotable`
- **Deployment:** Vercel

---

## 🚀 Menjalankan Proyek (Lokal)

1.  **Clone repositori:**

    ```bash
    git clone https://github.com/ruspian/absen.git
    cd absen
    ```

2.  **Install dependensi:**

    ```bash
    npm install
    ```

3.  **Setup file `.env`:**
    buat file `.env` baru.

4.  **Jalankan Migrasi Database:**
    Pastikan `DATABASE_URL` di `.env` lo udah bener.

    ```bash
    npx prisma migrate dev
    ```

5.  **Generate Prisma Client:**

    ```bash
    npx prisma generate
    ```

6.  **Jalankan server development:**
    ```bash
    npm run dev
    ```

---

## 🔑 Variabel Lingkungan (`.env`)

Ini adalah kunci-kunci yang wajib ada di file `.env` lo (dan di Vercel).

```env
# 1. DATABASE (PENTING!)
# Di Vercel, ini harus URL POOLER dari Neon (ada '-pooler')
# Di lokal (buat 'migrate'), pake URL DIRECT (tanpa '-pooler')
DATABASE_URL="postgres://..."

# 2. NEXTAUTH
# Jalanin 'openssl rand -base64 32' di terminal
NEXTAUTH_SECRET="..."
NEXTAUTH_URL="http://localhost:3000" # Ganti di Vercel

# 3. APLIKASI
NEXT_PUBLIC_BASE_URL="http://localhost:3000" # Ganti di Vercel
TIMEZONE="Asia/Makassar" # WAJIB! Jangan diganti
```

**silahkan dikembangkan jika berminat :).**
**selamat mencoba :).**

jangan lupa berkunjung di [**GitHub**](https://github.com/ruspian/) saya :).
pull request di [**GitHub**](https://github.com/ruspian/) saya juga :).

---
