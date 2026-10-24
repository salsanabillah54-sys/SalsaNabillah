# Salsa Nabillah — Personal Portfolio

Website portfolio profesional berbahasa Indonesia untuk menampilkan profil, pengalaman, proyek Industrial Engineering, publikasi, pencapaian, dan karya kreatif.

## Menjalankan lokal

```bash
npm install
npm run dev
```

Buka http://localhost:3000

## Build

```bash
npm run build
npm start
```

## Deploy ke Vercel

1. Upload project ini ke GitHub.
2. Di Vercel pilih **Add New → Project**.
3. Import repository GitHub.
4. Vercel akan mendeteksi Next.js secara otomatis.
5. Deploy.

## Struktur aset

Semua foto dan video ada di `public/media/`:

- `profile/` — pas foto (logo navbar), foto hero (`portrait-b`), foto Tentang (`portrait-a`)
- `education/` — foto kuliah dan SMA
- `experience/internship/`, `experience/panitia/<kegiatan>/`, `experience/training/<pelatihan>/` — dokumentasi pengalaman (foto `.webp`, video `.mp4`)
- `projects/<proyek>/` — `foto-1..3.webp` dan `video.mp4` (jika ada)
- `achievement/` — sertifikat/penghargaan (`1..5.webp`) dan `sep-t.webp`
- `creative/` — poster dan infografis (`poster-1..7.webp`)
- `publications/` — PDF essay

Untuk menambah poster baru: simpan sebagai `poster-8.webp` lalu tambahkan nomornya pada daftar `creativeWorks` di `app/page.tsx`.

CV yang diunduh ada di `public/downloads/Salsa-Nabillah-CV.docx`.

Latest responsive build includes universal mobile overflow hardening for small phones, tablets, and desktop widths.

## Portfolio updates

- Layout, marquee poster animation, reveal effects, and rounded component style follow the original V13 design.
- Section headings use the refreshed serif typography style.
- Added dedicated Sertifikasi and Bahasa sections.
- The BSN SNI ISO 45001:2018 certificate PDF and preview are in `public/media/certifications/`.
