'use client'

import { useEffect, useMemo, useState } from 'react'

type MediaItem = { type?: 'image' | 'video'; src: string; alt: string; caption?: string }

type Experience = { id: string; period: string; title: string[]; org: string; bullets: string[]; media: MediaItem[] }

type Project = {
  id: string
  title: string
  shortTitle: string
  category: string[]
  meta: string
  location?: string
  intro: string
  activities: string[]
  results: string[]
  tools: string[]
  images: { src: string; alt: string; caption?: string }[]
  video?: { src: string; title: string }
}

const projects: Project[] = [
  {
    id: 'qc',
    title: 'Penerapan PCA, Hotelling’s T² Control Chart, dan Contribution Plot Dalam Pengendalian Kualitas Proses Produksi Pad PT XYZ',
    shortTitle: 'Multivariate Quality Control',
    category: ['Quality', 'Manufacturing'],
    meta: 'Industrial Engineering Project · Individual · 2026',
    location: 'Bekasi, Jawa Barat',
    intro:
      'Menganalisis ketidakstabilan proses produksi pad pada line urethane PT XYZ yang mengalami permasalahan cacat keropos. Proyek ini menggunakan pendekatan statistik multivariat untuk mengidentifikasi variabel proses utama, mengevaluasi kestabilan proses, serta menentukan faktor yang paling berkontribusi terhadap penyimpangan kualitas.',
    activities: [
      'Mengolah dan menganalisis data dari 8 variabel proses produksi, meliputi parameter suhu dan tekanan.',
      'Menerapkan Principal Component Analysis (PCA) untuk mereduksi 8 variabel menjadi 3 komponen utama yang merepresentasikan 76,51% variansi data.',
      'Menggunakan Hotelling’s T² Control Chart untuk mengevaluasi kestabilan proses secara multivariat dan mengidentifikasi observasi out of control.',
      'Menggunakan Contribution Plot untuk mengidentifikasi variabel yang paling dominan terhadap penyimpangan proses.',
      'Melakukan 5 Whys Analysis untuk menelusuri akar masalah dan menyusun rekomendasi perbaikan.',
    ],
    results: [
      'Mengidentifikasi 8 dari 216 observasi (3,7%) berada dalam kondisi out of control.',
      'Menentukan suhu work tank iso 2 (X2.2) dan suhu heat exchange iso 2 (X1.2) sebagai variabel dengan kontribusi terbesar terhadap penyimpangan.',
      'Menghasilkan rekomendasi berupa penyempurnaan SOP warm-up dengan kriteria kestabilan suhu minimum serta penyusunan SOP tindakan korektif ketika alarm suhu iso aktif.',
    ],
    tools: ['R Studio', 'PCA', 'Hotelling’s T²', 'Contribution Plot', '5 Whys'],
    images: [
      { src: '/media/projects/qc/foto-1.webp', alt: 'Skor komponen utama hasil PCA', caption: 'Skor komponen utama (PCA)' },
      { src: '/media/projects/qc/foto-2.webp', alt: 'Hotelling T2 Control Chart', caption: 'Hotelling’s T² Control Chart' },
      { src: '/media/projects/qc/foto-3.webp', alt: 'Contribution Plot variabel proses', caption: 'Contribution Plot variabel proses' },
    ],
  },
  {
    id: 'conveyor',
    title: 'Rancang Bangun Counter Conveyor Berbasis Sensor Dengan Integrasi Sistem Untuk Monitoring Produk Secara Real-Time',
    shortTitle: 'Sensor-Based Counter Conveyor',
    category: ['Manufacturing', 'Operations'],
    meta: 'Industrial Engineering Project · Team · 2025',
    location: 'Purwakarta, Jawa Barat',
    intro:
      'Merancang dan mengembangkan sistem counter conveyor otomatis untuk UMKM peyek sebagai solusi terhadap proses penghitungan produk yang masih dilakukan secara manual. Sistem dirancang untuk mengurangi human error, meningkatkan efisiensi proses pengemasan, serta menyediakan monitoring jumlah produksi secara real-time.',
    activities: [
      'Merancang dan merakit prototipe counter conveyor.',
      'Melakukan pemrograman NodeMCU ESP8266 menggunakan Arduino IDE untuk membaca sinyal sensor, menghitung jumlah produk, mengatur kecepatan conveyor, serta mengirimkan data melalui jaringan Wi-Fi.',
      'Mengintegrasikan perangkat keras dengan web server berbasis PHP dan database MySQL untuk penyimpanan serta monitoring data produksi secara real-time.',
      'Mengembangkan website monitoring yang dilengkapi login authentication, dashboard produksi real-time, dan fitur pengunduhan laporan.',
      'Menerapkan Rapid Application Development (RAD), NASA-TLX, serta evaluasi aspek keselamatan, kualitas website, dan ergonomi berdasarkan acuan yang digunakan pada proyek.',
    ],
    results: [
      'Akurasi penghitungan mencapai 100% pada kecepatan rendah, 97% pada kecepatan sedang, dan 88% pada kecepatan tinggi.',
      'Mengurangi waktu penghitungan dari 5 menit menjadi 1,5 menit per 100 produk.',
      'Menurunkan tingkat kesalahan penghitungan dari 7% menjadi 3%.',
      'Menurunkan beban kerja mental operator dari kategori tinggi menjadi rendah.',
    ],
    tools: ['PHP', 'MySQL', 'NodeMCU ESP8266', 'AutoCAD', 'Microsoft Excel', 'NASA-TLX'],
    images: [
      { src: '/media/projects/conveyor/foto-1.webp', alt: 'Hasil analisis dan tampilan akhir counter conveyor', caption: 'Hasil analisis dan tampilan akhir counter conveyor' },
      { src: '/media/projects/conveyor/foto-2.webp', alt: 'Dashboard monitoring counter conveyor', caption: 'Dashboard monitoring produksi real-time' },
      { src: '/media/projects/conveyor/foto-3.webp', alt: 'Hasil evaluasi NASA-TLX', caption: 'Evaluasi beban kerja operator (NASA-TLX)' },
    ],
    video: { src: '/media/projects/conveyor/video.mp4', title: 'Demo sistem counter conveyor' },
  },
  {
    id: 'parking',
    title: 'Usulan Pengembangan Area Parkir Dengan Menggunakan Metode Kansei Engineering dan Principal Component Analysis (PCA)',
    shortTitle: 'Parking Area Quality Improvement',
    category: ['Quality', 'Operations'],
    meta: 'Quality Engineering Project · Individual · 2025',
    location: 'Universitas Singaperbangsa Karawang',
    intro:
      'Menganalisis kualitas dan pengalaman pengguna pada area parkir Universitas Singaperbangsa Karawang yang menghadapi permasalahan keterbatasan kapasitas, penumpukan kendaraan, serta rendahnya kenyamanan dan keamanan pengguna. Proyek ini mengintegrasikan Kansei Engineering dan PCA untuk mengidentifikasi kebutuhan emosional pengguna dan menerjemahkannya menjadi usulan pengembangan fasilitas parkir.',
    activities: [
      'Melakukan observasi lapangan dan pengumpulan persepsi pengguna melalui kuesioner kepada 20 responden pengguna area parkir Unsika.',
      'Mengidentifikasi dan menyaring Kansei Words berdasarkan persepsi pengguna, kemudian merumuskannya menjadi enam pasangan atribut Semantic Differential.',
      'Mengolah data persepsi menggunakan PCA.',
      'Mengintegrasikan hasil Kansei Engineering dan PCA untuk menerjemahkan faktor emosional menjadi spesifikasi desain teknis menggunakan Kansei Engineering Type IV.',
      'Menyusun prioritas rekomendasi pengembangan berdasarkan faktor dominan hasil analisis.',
    ],
    results: [
      'Mereduksi enam variabel persepsi menjadi dua Kansei Factor utama yang secara kolektif menjelaskan 83,44% variasi data.',
      'Faktor 1: Efisiensi Operasional dan Spasial — prioritas pada tata letak, sirkulasi, marka, zonasi kendaraan, dan optimalisasi kapasitas parkir.',
      'Faktor 2: Infrastruktur dan Proteksi Keamanan — rekomendasi pengawasan, CCTV, kualitas permukaan lahan, pembatas, dan zona pejalan kaki.',
      'Kebutuhan kenyamanan termal juga diidentifikasi sebagai isu independen dengan solusi kanopi/struktur peneduh dan penanaman pohon rindang.',
    ],
    tools: ['Google Colab', 'Kansei Engineering', 'PCA'],
    images: [
      { src: '/media/projects/parking/foto-1.webp', alt: 'Atribut Kansei area parkir', caption: 'Atribut persepsi pengguna (Kansei Words)' },
      { src: '/media/projects/parking/foto-2.webp', alt: 'Scree plot hasil PCA area parkir', caption: 'Scree Plot hasil PCA' },
      { src: '/media/projects/parking/foto-3.webp', alt: 'Loading faktor dan variansi kumulatif PCA', caption: 'Loading faktor dan variansi kumulatif' },
    ],
  },
  {
    id: 'customer',
    title: 'Analisis Persaingan dan Kepuasan Konsumen Dengan Menggunakan Metode Correspondence Analysis dan Importance Performance Analysis',
    shortTitle: 'Competitive Analysis & Customer Satisfaction',
    category: ['Quality', 'Operations'],
    meta: 'Multivariate Analysis Project · Team · 2025',
    intro:
      'Menganalisis posisi kompetitif dan kepuasan konsumen Cafe dibandingkan tiga café kompetitor menggunakan Correspondence Analysis (CA) dan Importance Performance Analysis (IPA). Proyek mencakup proses data preprocessing, penyusunan mixed data, analisis atribut layanan berdasarkan persepsi konsumen, serta perbandingan hasil analisis ulang dengan penelitian acuan.',
    activities: [
      'Mengolah data dari 75 responden yang menilai 23 atribut layanan untuk Cafe dan tiga kompetitor.',
      'Menerapkan Importance Performance Analysis (IPA) untuk mengelompokkan atribut ke dalam empat kuadran dan menentukan atribut yang membutuhkan prioritas perbaikan.',
      'Menerapkan Correspondence Analysis (CA) untuk memetakan hubungan antara cafe dan atribut layanan serta mengevaluasi posisi kompetitif masing-masing cafe.',
    ],
    results: [
      'IPA mengidentifikasi atribut pada Kuadran I (prioritas perbaikan): fasilitas TV, sound system & WiFi, kesesuaian harga dengan buku menu, keramahan pegawai, serta penyampaian informasi menu promo.',
      'CA menunjukkan Dimensi I dan II menjelaskan 84,3% keragaman data.',
      'Analisis ulang menunjukkan jumlah atribut kritis meningkat dari 1 menjadi 4 setelah data dibersihkan dan dianalisis kembali.',
    ],
    tools: ['Google Colab', 'IBM SPSS Statistics', 'IPA', 'Correspondence Analysis'],
    images: [
      { src: '/media/projects/customer/foto-1.webp', alt: 'Importance Performance Analysis', caption: 'Importance Performance Analysis' },
      { src: '/media/projects/customer/foto-2.webp', alt: 'Correspondence Analysis', caption: 'Correspondence Analysis' },
      { src: '/media/projects/customer/foto-3.webp', alt: 'Pola visual dan makna hasil analisis', caption: 'Pola visual dan makna hasil analisis' },
    ],
  },
  {
    id: 'automation',
    title: 'Otomatisasi Proses Bisnis Pada CV Angkasa Jaya Melalui Penerapan Sistem Informasi',
    shortTitle: 'Business Process Automation',
    category: ['Information Systems', 'Operations'],
    meta: 'Information Systems Project · Team · 2024',
    intro:
      'Merancang konsep sistem informasi pemasaran ragum mini “SiRaGuMi” untuk membantu CV Angkasa Jaya mengatasi proses pendataan pelanggan dan pencatatan pesanan yang masih dilakukan secara manual. Proyek mencakup analisis kebutuhan pengguna, pemodelan proses bisnis, perancangan arsitektur data, desain UI/UX, serta evaluasi kelayakan proyek.',
    activities: [
      'Melakukan requirement gathering melalui wawancara, observasi, kuesioner, dan survei.',
      'Melakukan stakeholder analysis dan menyusun kebutuhan fungsional maupun nonfungsional sistem.',
      'Menyusun BRD, SRS, user stories, dan functional decomposition.',
      'Memodelkan alur dan interaksi sistem menggunakan DFD, Use Case Diagram, Activity Diagram, State Machine Diagram, Sequence Diagram, dan flowchart.',
      'Merancang arsitektur database, normalisasi, ERD, database schema, dan data warehouse.',
      'Mengembangkan wireframe dan high-fidelity prototype menggunakan prinsip UI/UX serta melakukan usability testing.',
      'Mengevaluasi kelayakan proyek melalui analisis teknis, operasional, ekonomi, SWOT, ROI, NPV, IRR, BEP, analisis risiko, mitigasi risiko, dan kepatuhan.',
    ],
    results: [
      'Menghasilkan konsep sistem informasi pemasaran SiRaGuMi dengan fitur dashboard, profil usaha, katalog produk, pembelian/keranjang, pembayaran, pengiriman, login, ulasan, dan informasi tambahan.',
      'Menghasilkan rancangan sistem terintegrasi mulai dari analisis kebutuhan hingga desain proses, database, UI/UX, dan evaluasi kelayakan.',
      'Analisis kelayakan menunjukkan potensi manfaat finansial dan peningkatan efisiensi operasional, dengan estimasi keuntungan bersih tahunan sekitar Rp240 juta berdasarkan asumsi proyek yang digunakan.',
    ],
    tools: ['MySQL', 'Figma', 'DFD', 'ERD', 'BRD/SRS', 'Analisis Kelayakan'],
    images: [
      { src: '/media/projects/automation/foto-1.webp', alt: 'Model database dan ERD', caption: 'Perancangan arsitektur data (ERD)' },
      { src: '/media/projects/automation/foto-2.webp', alt: 'Model data warehouse', caption: 'Model data warehouse' },
      { src: '/media/projects/automation/foto-3.webp', alt: 'Rancangan UI UX sistem informasi', caption: 'Rancangan antarmuka UI/UX' },
    ],
    video: { src: '/media/projects/automation/video.mp4', title: 'Video simulasi sistem informasi SiRaGuMi' },
  },
  {
    id: 'gallon',
    title: 'Optimasi Pendistribusian Galon Dengan Menggunakan Metode Assignment (Pinalti) dan Metode Networking (Spanning Tree)',
    shortTitle: 'Optimasi Distribusi Galon',
    category: ['Supply Chain', 'Operations'],
    meta: 'Operations Research Project · Team · 2024',
    location: 'Karawang, Jawa Barat',
    intro:
      'Menganalisis dan mengoptimalkan proses penugasan karyawan serta rute distribusi galon pada Depot Air Isi Ulang H. Ganda 2, Karawang. Proyek dilakukan untuk meningkatkan efisiensi operasional dengan menentukan alokasi penugasan yang optimal dan membangun jaringan distribusi dengan jarak serta waktu tempuh yang lebih efisien.',
    activities: [
      'Menganalisis kondisi eksisting proses distribusi berdasarkan wawancara langsung dengan pemilik depot.',
      'Menerapkan Metode Assignment (Pinalti) untuk menentukan penugasan optimal dari 3 karyawan ke 5 warung dalam mendistribusikan galon.',
      'Melakukan penyelesaian secara manual dan melakukan validasi menggunakan POM-QM for Windows.',
      'Menerapkan Minimum Spanning Tree untuk menentukan jaringan/rute distribusi yang menghubungkan seluruh titik dengan total jarak minimum.',
      'Menganalisis implikasi hasil optimasi terhadap efisiensi waktu, jarak, biaya operasional, dan kualitas layanan distribusi.',
    ],
    results: [
      'Menghasilkan alokasi penugasan karyawan yang lebih optimal berdasarkan kondisi dan kebutuhan distribusi depot.',
      'Menghasilkan jaringan distribusi dengan pendekatan Minimum Spanning Tree untuk meminimalkan total jarak antar titik distribusi.',
      'Hasil perhitungan manual dan menggunakan POM-QM menunjukkan hasil yang konsisten dalam penyelesaian masalah operasional.',
    ],
    tools: ['Microsoft Excel', 'POM-QM', 'Assignment Method', 'Minimum Spanning Tree'],
    images: [
      { src: '/media/projects/gallon/foto-1.webp', alt: 'Hasil Assignment Method', caption: 'Optimasi penugasan (Assignment)' },
      { src: '/media/projects/gallon/foto-2.webp', alt: 'Jaringan distribusi Spanning Tree', caption: 'Jaringan distribusi Minimum Spanning Tree' },
      { src: '/media/projects/gallon/foto-3.webp', alt: 'Validasi Assignment dengan POM-QM', caption: 'Validasi menggunakan POM-QM' },
    ],
  },
]

const achievements = [
  { title: 'Juara 2 Infografis Gizi 2026', org: 'Universitas Aisyiyah Yogyakarta', year: '2026', image: '/media/achievement/1.webp' },
  { title: 'Presenter Seminar Nasional Teknik 2025', org: 'Universitas Singaperbangsa Karawang', year: '2025', image: '/media/achievement/2.webp' },
  { title: 'Juara 1 Poster Digital Chemical Engineering Champions (CHEMPION) 2024', org: 'Universitas Singaperbangsa Karawang', year: '2024', image: '/media/achievement/3.webp' },
  { title: 'Presenter Seminar Pesona Pariwisata (SEMESTA) 2024', org: 'Universitas Pembangunan Nasional “Veteran” Jawa Timur', year: '2024', image: '/media/achievement/4.webp' },
  { title: '10 Besar Grand Finalis Lomba Karya Tulis Ilmiah Safety Competition 2023', org: 'Politeknik Perkapalan Negeri Surabaya', year: '2023', image: '/media/achievement/5.webp' },
]

const publications = [
  {
    title: 'Quality Control Analysis of Pads Using Statistical Quality Control to Reduce Product Defects',
    journal: 'BAROMETER: Jurnal Ilmu dan Aplikasi Teknik',
    year: '2026',
    doi: 'https://doi.org/10.35261/barometer.v11i1.13171',
    tags: ['Quality Control', 'SQC', 'Manufacturing'],
  },
  {
    title: 'Reliability Analysis of The Stacking Sladge Machine at Station 10 of the Body Welding Shop Using a Probabilistic Method at PT PQR',
    journal: 'BAROMETER: Jurnal Ilmu dan Aplikasi Teknik',
    year: '2026',
    doi: 'https://doi.org/10.35261/barometer.v11i1.13183',
    tags: ['Reliability', 'Manufacturing'],
  },
  {
    title: 'Quality Control Analysis of Pad Products Using the Six Sigma DMAIC Method in the Urethane Production Line',
    journal: 'BAROMETER: Jurnal Ilmu dan Aplikasi Teknik',
    year: '2026',
    doi: 'https://doi.org/10.35261/barometer.v11i1.13180',
    tags: ['Six Sigma', 'Quality Control'],
  },
  {
    title: 'Revolusi Teknologi: Implementasi Museum Teknologi Dalam Menciptakan Pariwisata Interaktif di Era Society 5.0',
    journal: 'PETA: Jurnal Pesona Pariwisata',
    year: '2024',
    doi: 'https://doi.org/10.33005/peta.v3i1.61',
    tags: ['Society 5.0', 'Technology'],
  },
]

const creativeWorks: MediaItem[] = [1, 2, 3, 4, 5, 6, 7].map(n => ({ src: `/media/creative/poster-${n}.webp`, alt: `Poster dan infografis ${n}`, caption: `Poster dan infografis ${n} dari 7` }))

const certificateItems: MediaItem[] = [
  ...achievements.map(a => ({ src: a.image, alt: a.title, caption: `${a.title} · ${a.org}` })),
  { src: '/media/achievement/sep-t.webp', alt: 'Sertifikat SEP-T', caption: 'SEP-T · Skor 483 · Universitas Singaperbangsa Karawang' },
]

const bsnCertificateItems: MediaItem[] = [
  {
    src: '/media/certifications/sni-iso-45001-preview.jpg',
    alt: 'Sertifikat BSN Sistem Manajemen Keselamatan dan Kesehatan Kerja Berbasis SNI ISO 45001:2018',
    caption: 'SNI ISO 45001:2018 · Badan Standardisasi Nasional (BSN) · Predikat Sangat Baik',
  },
]

const skills = {
  'Data & Quality': ['Microsoft Excel', 'Minitab', 'RStudio', 'IBM SPSS', 'Google Colab'],
  'Operations & Optimization': ['POM-QM', 'Gantt Project'],
  Engineering: ['Nice Label', 'AutoCAD', 'ErgoFellow'],
  'Design & Documentation': ['Figma', 'Canva'],
}

const mediaSet = (dir: string, files: string[], label: string): MediaItem[] =>
  files.map((f, i) => ({ type: f.endsWith('.mp4') ? 'video' : 'image', src: `/media/experience/${dir}/${f}`, alt: `${label} ${i + 1}`, caption: `${label} · ${i + 1} dari ${files.length}` }))

const internshipMedia: MediaItem[] = [
  { src: '/media/experience/internship/1.webp', alt: 'Bersama tim Engineering Service TBINA', caption: 'Bersama tim Engineering Service' },
  { src: '/media/experience/internship/2.webp', alt: 'Sertifikat magang PT Toyota Boshoku Indonesia', caption: 'Sertifikat magang' },
  { src: '/media/experience/internship/3.webp', alt: 'Daftar nilai kegiatan kerja praktik', caption: 'Daftar nilai kegiatan kerja praktik' },
  { src: '/media/experience/internship/4.webp', alt: 'Aktivitas magang di area produksi', caption: 'Aktivitas di area produksi' },
  { src: '/media/experience/internship/5.webp', alt: 'Aktivitas kanban pada pengalaman magang', caption: 'Aktivitas kanban' },
  { src: '/media/experience/internship/6.webp', alt: 'Pengelolaan Master List of Kanban', caption: 'Pengelolaan Master List of Kanban' },
]

const experiences: Experience[] = [
  {
    id: 'asisten',
    period: 'Des 2025 — Jul 2026',
    title: ['Asisten Praktikum Perancangan Tata Letak Fasilitas Tahun Akademik 2025/2026'],
    org: 'Universitas Singaperbangsa Karawang',
    bullets: [
      'Menyediakan media pembelajaran dan bertanggung jawab dalam proses belajar mengajar bagi 100+ peserta praktikum.',
      'Memfasilitasi komunikasi antara dosen pengampu dan mahasiswa untuk mendukung kelancaran kegiatan belajar mengajar serta pencapaian Capaian Pembelajaran Mata Kuliah.',
    ],
    media: mediaSet('panitia/asisten', ['1.webp', '2.webp', '3.webp'], 'Dokumentasi asisten praktikum'),
  },
  {
    id: 'kkn',
    period: 'Jun — Jul 2025',
    title: ['Divisi Acara Kuliah Kerja Nyata (KKN)'],
    org: 'Desa Ciherang, Purwakarta',
    bullets: [
      'Membuat tema, konsep, dan rundown kegiatan.',
      'Membuat Terms of References.',
      'Memimpin Focus Group Discussion antar divisi.',
      'Menyusun Matriks RPKKN.',
    ],
    media: mediaSet('panitia/kkn', ['1.mp4', '2.mp4', '3.mp4'], 'Dokumentasi KKN'),
  },
  {
    id: 'iestf',
    period: 'Jul — Okt 2024',
    title: ['Koordinator Divisi Acara & Koorlap', 'Industrial Engineering Scientific And Technology Fest 2024'],
    org: 'Universitas Singaperbangsa Karawang',
    bullets: [
      'Melakukan koordinasi antar koordinator divisi.',
      'Melakukan pembagian tugas pokok dan fungsi (tupoksi) antar anggota divisi.',
      'Memastikan output divisi sesuai target, baik dari segi hasil maupun tenggat waktu.',
      'Memastikan setiap kegiatan terlaksana sesuai tema, konsep, dan rundown.',
    ],
    media: mediaSet('panitia/iestf', ['1.webp', '2.mp4', '3.mp4'], 'Dokumentasi IESTF 2024'),
  },
  {
    id: 'pkkmb',
    period: 'Jun 2023 — Feb 2024',
    title: ['Anggota Divisi Acara', 'Panitia Pelaksana PKKMB, LDKM & Inaugurasi Fakultas Teknik UNSIKA 2023'],
    org: 'Universitas Singaperbangsa Karawang',
    bullets: [
      'Membuat tema, konsep, dan rundown rangkaian kegiatan.',
      'Membuat Terms of References untuk pemateri yang akan menjadi pengisi acara.',
      'Melakukan konsolidasi dengan pengisi acara serta stakeholder terkait.',
      'Memimpin Focus Group Discussion antar divisi.',
    ],
    media: mediaSet('panitia/pkkmb', ['1.webp', '2.mp4', '3.mp4', '4.mp4'], 'Dokumentasi PKKMB, LDKM & Inaugurasi 2023'),
  },
]

const trainings: Experience[] = [
  {
    id: 'ietsc-poster',
    period: 'Mei — Des 2024',
    title: ['Industrial Engineering Teach and Share Club (IETSC) Poster Digital'],
    org: 'Himpunan Mahasiswa Teknik Industri UNSIKA · Bidang Pengembangan Minat dan Bakat',
    bullets: [
      'Pelatihan pembuatan poster secara digital menggunakan Photoshop dan Canva yang diselenggarakan secara online melalui Google Meet.',
      'Merancang poster digital berdasarkan pelatihan dan diikutsertakan dalam perlombaan poster digital.',
    ],
    media: mediaSet('training/ietsc-poster', ['1.webp', '2.webp', '3.webp', '4.webp'], 'Dokumentasi IETSC Poster Digital'),
  },
  {
    id: 'iee',
    period: 'Sep — Des 2023',
    title: ['Industrial Engineering Entrepreneurship (IEE)'],
    org: 'Himpunan Mahasiswa Teknik Industri UNSIKA · Bidang Kewirausahaan',
    bullets: [
      'Pelatihan kewirausahaan yang membahas strategi berbisnis, tahapan berwirausaha, dan cara mengembangkan usaha, diselenggarakan secara online melalui Google Meet.',
      'Output pelatihan berupa praktik berwirausaha langsung pada acara yang diselenggarakan himpunan.',
    ],
    media: mediaSet('training/iee', ['1.webp', '2.webp', '3.webp'], 'Dokumentasi IEE'),
  },
  {
    id: 'ietsc-ttki',
    period: 'Sep 2022 — Feb 2023',
    title: ['Industrial Engineering Teach and Share Club (IETSC) Tata Tulis Karya Ilmiah'],
    org: 'Himpunan Mahasiswa Teknik Industri UNSIKA · Bidang Pengembangan Minat dan Bakat',
    bullets: [
      'Mempelajari karakteristik, struktur penyusunan, dan perbedaan jenis-jenis karya ilmiah.',
      'Menyusun karya ilmiah berdasarkan pelatihan dan diikutsertakan dalam perlombaan karya tulis ilmiah.',
    ],
    media: mediaSet('training/ietsc-ttki', ['1.webp', '2.webp', '3.webp'], 'Dokumentasi IETSC Tata Tulis Karya Ilmiah'),
  },
]

const education: (MediaItem & { name: string; detail: string })[] = [
  { src: '/media/education/kuliah.webp', alt: 'Wisuda Universitas Singaperbangsa Karawang', name: 'Universitas Singaperbangsa Karawang', detail: 'S1 Teknik Industri · 2022–2026', caption: 'Universitas Singaperbangsa Karawang · S1 Teknik Industri' },
  { src: '/media/education/sma.webp', alt: 'Wisuda purna siswa SMAN 3 Cikarang Utara', name: 'SMAN 3 Cikarang Utara', detail: 'IPA · 2019–2022', caption: 'SMAN 3 Cikarang Utara · Wisuda purna siswa' },
]

function Icon({ name }: { name: 'arrow' | 'external' | 'mail' | 'phone' | 'down' | 'close' | 'play' | 'prev' | 'next' }) {
  const common = { width: 18, height: 18, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }
  if (name === 'arrow') return <svg {...common}><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg>
  if (name === 'external') return <svg {...common}><path d="M14 5h5v5"/><path d="M10 14 19 5"/><path d="M19 14v4a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4"/></svg>
  if (name === 'mail') return <svg {...common}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>
  if (name === 'phone') return <svg {...common}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z"/></svg>
  if (name === 'prev') return <svg {...common}><path d="m15 6-6 6 6 6"/></svg>
  if (name === 'next') return <svg {...common}><path d="m9 6 6 6-6 6"/></svg>
  if (name === 'down') return <svg {...common}><path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M5 21h14"/></svg>
  if (name === 'play') return <svg {...common} fill="currentColor" stroke="none"><path d="m8 5 11 7-11 7V5Z"/></svg>
  return <svg {...common}><path d="m6 6 12 12M18 6 6 18"/></svg>
}

function Reveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`reveal ${className}`}>{children}</div>
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div className="metric-card">
      <div className="metric-value">{value}</div>
      <div className="metric-label">{label}</div>
    </div>
  )
}

function ExperienceRow({ exp, delay, onOpen }: { exp: Experience; delay: number; onOpen: () => void }) {
  return (
    <Reveal className={`experience-item delay-${delay}`}>
      <div>
        <span className="item-year">{exp.period}</span>
        <h3>{exp.title.map(line => <span className="title-line" key={line}>{line}</span>)}</h3>
        <p>{exp.org}</p>
      </div>
      <ul className="clean-list exp-bullets">{exp.bullets.map(b => <li key={b}>{b}</li>)}</ul>
      <button type="button" className="icon-link" onClick={onOpen} aria-label={`Lihat dokumentasi: ${exp.title[0]}`} title="Lihat dokumentasi"><Icon name="external" /></button>
    </Reveal>
  )
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeFilter, setActiveFilter] = useState('Semua')
  const [openProject, setOpenProject] = useState<Project | null>(null)
  const [lightbox, setLightbox] = useState<{ items: MediaItem[]; index: number } | null>(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const els = Array.from(document.querySelectorAll('.reveal'))
    const obs = new IntersectionObserver(
      entries => entries.forEach(entry => entry.isIntersecting && entry.target.classList.add('in-view')),
      { threshold: 0.12 }
    )
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [activeFilter])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (lightbox) setLightbox(null)
        else setOpenProject(null)
      }
      if (lightbox && (e.key === 'ArrowRight' || e.key === 'ArrowLeft')) {
        const n = lightbox.items.length
        setLightbox({ ...lightbox, index: (lightbox.index + (e.key === 'ArrowRight' ? 1 : -1) + n) % n })
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [lightbox])

  const openGallery = (items: MediaItem[], index = 0) => setLightbox({ items, index })
  const stepLightbox = (dir: number) => setLightbox(cur => (cur ? { ...cur, index: (cur.index + dir + cur.items.length) % cur.items.length } : cur))

  const filters = ['Semua', 'Quality', 'Manufacturing', 'Supply Chain', 'Operations', 'Information Systems']
  const filteredProjects = useMemo(() => {
    if (activeFilter === 'Semua') return projects
    return projects.filter(project => project.category.includes(activeFilter))
  }, [activeFilter])

  const closeMenu = () => setMenuOpen(false)

  return (
    <main>
      <header className={`site-nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-inner">
          <a href="#home" className="brand" onClick={closeMenu}>
            <img className="brand-mark" src="/media/profile/pas-photo.webp" alt="Foto Salsa Nabillah" width={38} height={38} />
            <span>Salsa Nabillah</span>
          </a>
          <button className="mobile-toggle" aria-label="Buka menu" onClick={() => setMenuOpen(v => !v)}>
            <span></span><span></span><span></span>
          </button>
          <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
            {['home', 'about', 'experience', 'projects', 'achievements', 'certifications', 'publications', 'skills', 'languages', 'contact'].map(id => (
              <a key={id} href={`#${id}`} onClick={closeMenu}>{id === 'home' ? 'Beranda' : id === 'about' ? 'Tentang' : id === 'experience' ? 'Pengalaman' : id === 'projects' ? 'Proyek' : id === 'achievements' ? 'Pencapaian' : id === 'certifications' ? 'Sertifikasi' : id === 'publications' ? 'Publikasi' : id === 'skills' ? 'Keahlian' : id === 'languages' ? 'Bahasa' : 'Kontak'}</a>
            ))}
          </nav>
        </div>
      </header>

      <section id="home" className="hero section-pad">
        <div className="hero-glow glow-one"></div>
        <div className="hero-glow glow-two"></div>
        <div className="container hero-grid">
          <Reveal className="hero-copy">
            <div className="eyebrow">Portofolio Profesional · Teknik Industri</div>
            <h1>Salsa<br /><em>Nabillah</em></h1>
            <p className="hero-role">Industrial Engineering Graduate</p>
            <p className="hero-focus">Quality Control <span>·</span> Supply Chain <span>·</span> Process Improvement</p>
            <p className="hero-description">Lulusan S1 Teknik Industri Universitas Singaperbangsa Karawang dengan pengalaman di lingkungan manufaktur serta minat pada Quality Control, Supply Chain, dan Process Improvement.</p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#projects">Jelajahi Proyek</a>
              <a className="btn btn-ghost" href="/downloads/Salsa-Nabillah-CV.pdf" target="_blank" rel="noreferrer">Unduh CV <Icon name="down" /></a>
            </div>
            <div className="hero-proof">
              <Metric value="3,93/4,00" label="IPK" />
              <Metric value="100+" label="Nomor kanban dikelola" />
              <Metric value="+50%" label="Efisiensi scan QR" />
            </div>
          </Reveal>

          <Reveal className="hero-visual delay-2">
            <div className="portrait-frame">
              <img src="/media/profile/portrait-b.webp" alt="Salsa Nabillah" />
            </div>
            <div className="floating-note note-one"><span>DATA</span> Driven</div>
            <div className="floating-note note-two"><span>PROCESS</span> Improvement</div>
          </Reveal>
        </div>
      </section>

      <section id="about" className="section section-light section-pad">
        <div className="container split-grid">
          <Reveal>
            <div className="section-kicker">01 · Tentang Saya</div>
            <h2>Menghubungkan <em>data, proses,</em> dan perbaikan.</h2>
            <p className="lead">Saya merupakan lulusan dari Program Studi Teknik Industri Universitas Singaperbangsa Karawang yang memiliki minat pada Quality Control, Supply Chain, dan Process Improvement.</p>
            <p>Selama menempuh pendidikan, saya mengembangkan kemampuan analisis data, pemecahan masalah, dan pengambilan keputusan melalui berbagai proyek akademik. Kompetensi tersebut didukung oleh kemampuan komunikasi, kerja sama tim, kemampuan bekerja secara mandiri, serta komitmen terhadap pembelajaran dan pengembangan diri secara berkelanjutan.</p>
            <p>Dengan pengalaman di lingkungan manufaktur, proyek pengendalian kualitas, optimasi distribusi, serta pengembangan sistem, saya siap menerapkan kompetensi analitis dan teknis untuk mendukung peningkatan kualitas, efisiensi, dan produktivitas perusahaan.</p>
          </Reveal>
          <Reveal className="about-side delay-1">
            <div className="photo-stack">
              <img className="about-photo-main" src="/media/profile/portrait-a.webp" alt="Salsa Nabillah pada momen kelulusan" />
              <div className="photo-card"><strong>Universitas Singaperbangsa Karawang</strong><span>S1 Teknik Industri · 2022–2026</span><b>IPK 3,93/4,00</b></div>
            </div>
          </Reveal>
        </div>
        <div className="container">
          <Reveal className="edu-strip">
            <div className="section-kicker">Pendidikan</div>
            <div className="edu-grid">
              {education.map((e, i) => (
                <button type="button" key={e.name} className="edu-card" onClick={() => openGallery(education, i)} aria-label={`Lihat foto ${e.name}`}>
                  <img src={e.src} alt={e.alt} loading="lazy" />
                  <span><strong>{e.name}</strong><em>{e.detail}</em></span>
                </button>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section id="experience" className="section section-dark section-pad">
        <div className="container">
          <Reveal>
            <div className="section-kicker">02 · Pengalaman</div>
            <div className="section-head-row">
              <h2>Pengalaman Profesional dan <em>Akademik</em></h2>
              <p>Exposure manufaktur, pengelolaan kanban, pembelajaran praktikum, dan koordinasi kegiatan.</p>
            </div>
          </Reveal>

          <Reveal className="experience-feature delay-1">
            <div className="experience-main">
              <div className="experience-meta"><span>Desember 2024 — Juni 2025</span><span>Bekasi, Jawa Barat</span></div>
              <h3>Engineering Service Intern</h3>
              <div className="experience-company">PT Toyota Boshoku Indonesia (TBINA)</div>
              <div className="experience-metrics">
                <Metric value="100+" label="Nomor kanban" />
                <Metric value="4" label="Line produksi" />
                <Metric value="+50%" label="Efisiensi scan QR" />
              </div>
              <ul className="clean-list">
                <li>Melakukan update Master List of Kanban untuk 100+ nomor kanban di 4 line produksi menggunakan Nice Label berdasarkan data part, memastikan distribusi kanban akurat dan tepat waktu.</li>
                <li>Melakukan improvement quantity kanban sehingga dapat meningkatkan efisiensi scan QR code kanban sebesar 50%.</li>
                <li>Mengidentifikasi potensi human error terbesar dalam proses perancangan kanban dan merancang guidebook kanban sebagai salah satu upaya mengurangi terjadinya human error.</li>
                <li>Menganalisis temuan 5R, membuat MIFC/gambaran alur sistem produksi, melakukan update stok dan Master List of Kanban, serta merancang layout dolly.</li>
              </ul>
            </div>
            <div className="experience-media">
              <img src="/media/experience/internship/1.webp" alt="Aktivitas magang di lingkungan TBINA" />
              <img src="/media/experience/internship/6.webp" alt="Pengelolaan Master List of Kanban pada magang" />
              <div className="media-caption">Selected documentation · Engineering Service</div>
              <button type="button" className="icon-link media-action" onClick={() => openGallery(internshipMedia)} aria-label="Lihat dokumentasi magang" title="Lihat dokumentasi"><Icon name="external" /></button>
            </div>
          </Reveal>

          <div className="experience-list">
            {experiences.map((exp, i) => <ExperienceRow key={exp.id} exp={exp} delay={Math.min(i, 3)} onOpen={() => openGallery(exp.media)} />)}
          </div>

          <Reveal className="experience-subhead"><span>Pelatihan</span></Reveal>
          <div className="experience-list">
            {trainings.map((exp, i) => <ExperienceRow key={exp.id} exp={exp} delay={Math.min(i, 3)} onOpen={() => openGallery(exp.media)} />)}
          </div>
        </div>
      </section>

      <section id="projects" className="section section-light section-pad">
        <div className="container">
          <Reveal>
            <div className="section-kicker">03 · Proyek</div>
            <div className="section-head-row projects-head">
              <div><h2>Proyek <em>Industri dan Akademik</em></h2></div>
              <p>Dari statistical quality control hingga optimasi distribusi, setiap proyek saya bangun dengan fokus pada analisis, keputusan, dan hasil.</p>
            </div>
            <div className="filter-row" role="tablist" aria-label="Filter proyek">
              {filters.map(filter => <button key={filter} className={activeFilter === filter ? 'filter active' : 'filter'} onClick={() => setActiveFilter(filter)}>{filter}</button>)}
            </div>
          </Reveal>

          <div className="project-grid">
            {filteredProjects.map((project, i) => (
              <Reveal key={project.id} className={`project-card ${i === 0 && activeFilter === 'Semua' ? 'featured' : ''}`}>
                <div className="project-image-wrap">
                  <img src={project.images[0].src} alt={project.images[0].alt} />
                  <div className="project-overlay"><button onClick={() => setOpenProject(project)}>Lihat studi kasus <Icon name="arrow" /></button></div>
                </div>
                <div className="project-body">
                  <div className="project-tags">{project.category.map(tag => <span key={tag}>{tag}</span>)}</div>
                  <div className="project-meta">{project.meta}</div>
                  <h3>{project.shortTitle}</h3>
                  <p>{project.intro}</p>
                  <button className="text-link" onClick={() => setOpenProject(project)}>Buka detail <Icon name="arrow" /></button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="achievements" className="section section-dark section-pad">
        <div className="container">
          <Reveal><div className="section-kicker">04 · Pencapaian</div><div className="section-head-row"><h2>Prestasi <em>dan Penghargaan</em></h2><p>Selain kemampuan analitis, saya juga aktif dalam kompetisi, presentasi ilmiah, dan karya visual.</p></div></Reveal>
          <div className="achievement-grid">
            {achievements.map((item, i) => (
              <Reveal key={item.title} className={`achievement-card delay-${Math.min(i, 2)}`}>
                <div className="achievement-image">
                  <img src={item.image} alt={item.title} loading="lazy" />
                  <button type="button" className="zoom-btn" onClick={() => openGallery(certificateItems, i)} aria-label={`Lihat ${item.title} lebih jelas`} title="Lihat lebih jelas"><Icon name="external" /></button>
                </div>
                <div className="achievement-year">{item.year}</div>
                <h3>{item.title}</h3>
                <p>{item.org}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="certifications" className="section section-light section-pad certification-section">
        <div className="container">
          <Reveal>
            <div className="section-kicker">05 · Sertifikasi</div>
            <div className="section-head-row">
              <h2>Sertifikasi <em>dan Pelatihan</em></h2>
              <p>Sertifikat pelatihan dan asesmen yang melengkapi pengalaman akademik serta praktik di bidang teknik industri.</p>
            </div>
          </Reveal>
          <div className="credential-grid">
            <Reveal className="credential-card">
              <button type="button" className="credential-preview credential-preview-button" onClick={() => openGallery(bsnCertificateItems, 0)} aria-label="Lihat Sertifikat SNI ISO 45001:2018">
                <img src="/media/certifications/sni-iso-45001-preview.jpg" alt="Pratinjau sertifikat kursus Sistem Manajemen Keselamatan dan Kesehatan Kerja Berbasis SNI ISO 45001:2018 dari BSN" loading="lazy" />
                <span className="preview-label">Lihat dokumen</span>
              </button>
              <div className="credential-body">
                <div className="credential-meta">Badan Standardisasi Nasional (BSN) <span>·</span> 1 Oktober 2026</div>
                <h3>Sistem Manajemen Keselamatan dan Kesehatan Kerja Berbasis SNI ISO 45001:2018</h3>
                <p className="credential-result">Predikat <strong>Sangat Baik</strong></p>
                <p className="credential-validity">No. sertifikat: ELSDS/BSN/21778/XXVI</p>
                <p className="credential-validity">Berlaku sampai 1 Oktober 2027</p>
                <button type="button" className="text-link credential-action" onClick={() => openGallery(bsnCertificateItems, 0)}>Lihat Sertifikat <Icon name="external" /></button>
              </div>
            </Reveal>
            <Reveal className="credential-card delay-1">
              <button type="button" className="credential-preview credential-preview-button" onClick={() => openGallery(certificateItems, certificateItems.length - 1)} aria-label="Lihat sertifikat SEP-T">
                <img src="/media/achievement/sep-t.webp" alt="Sertifikat Singaperbangsa English Proficiency Test" loading="lazy" />
                <span className="preview-label">Lihat dokumen</span>
              </button>
              <div className="credential-body">
                <div className="credential-meta">Universitas Singaperbangsa Karawang</div>
                <h3>Singaperbangsa English Proficiency Test (SEP-T)</h3>
                <p className="credential-result">Skor <strong>483</strong></p>
                <p className="credential-validity">Asesmen kemampuan Bahasa Inggris · Tingkat menengah.</p>
                <button type="button" className="text-link credential-action" onClick={() => openGallery(certificateItems, certificateItems.length - 1)}>Lihat sertifikat <Icon name="external" /></button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="publications" className="section section-light section-pad">
        <div className="container">
          <Reveal><div className="section-kicker">06 · Publikasi</div><div className="section-head-row"><h2>Publikasi <em>Ilmiah</em></h2><p>Publikasi menjadi bukti bahwa analisis dan project yang dikerjakan dapat diterjemahkan menjadi karya ilmiah.</p></div></Reveal>
          <div className="publication-list">
            {publications.map((pub, i) => (
              <Reveal className="publication-card" key={pub.doi}>
                <div className="pub-number">0{i + 1}</div>
                <div className="pub-content"><div className="pub-year">{pub.year} · {pub.journal}</div><h3>{pub.title}</h3><div className="tag-row">{pub.tags.map(t => <span key={t}>{t}</span>)}</div></div>
                <a className="icon-link" href={pub.doi} target="_blank" rel="noreferrer" aria-label="Buka publikasi"><Icon name="external" /></a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="section section-soft section-pad">
        <div className="container split-grid skills-grid">
          <Reveal><div className="section-kicker">07 · Keahlian</div><h2>Software dan <em>Toolkit yang Digunakan</em></h2><p className="lead">Saya memadukan software analisis, tools optimasi, dan kemampuan komunikasi untuk memahami masalah secara menyeluruh.</p><div className="competency-row"><span>Quality Control</span><span>Supply Chain</span><span>Process Improvement</span><span>Data Analysis</span><span>Problem Solving</span><span>Operations</span></div></Reveal>
          <Reveal className="skills-panels delay-1">{Object.entries(skills).map(([group, items]) => <div className="skill-group" key={group}><h3>{group}</h3><div className="skill-chips">{items.map(item => <span key={item}>{item}</span>)}</div></div>)}<div className="skill-group"><h3>Interpersonal</h3><div className="skill-chips"><span>Berpikir Kritis</span><span>Manajemen Waktu</span><span>Komunikatif</span><span>Kerja Sama Tim</span><span>Manajemen Konflik</span><span>Adaptif</span><span>Kreatif</span></div></div></Reveal>
        </div>
      </section>

      <section id="languages" className="section section-soft section-pad language-section">
        <div className="container">
          <Reveal>
            <div className="section-kicker">08 · Bahasa</div>
            <div className="section-head-row">
              <h2>Kemampuan <em>Bahasa</em></h2>
              <p>Bahasa yang digunakan dalam komunikasi dan pengembangan profesional.</p>
            </div>
          </Reveal>
          <div className="language-card-grid">
            <Reveal className="language-card">
              <div className="language-initial" aria-hidden="true">ID</div>
              <div className="language-card-copy"><h3>Bahasa Indonesia</h3><p>Fasih</p></div>
              <span className="language-level">Fasih</span>
            </Reveal>
            <Reveal className="language-card delay-1">
              <div className="language-initial" aria-hidden="true">EN</div>
              <div className="language-card-copy"><h3>Bahasa Inggris</h3><p>Skor SEP-T 483 · Tingkat menengah</p></div>
              <span className="language-level">Menengah</span>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="creative" className="section section-light section-pad creative-section">
        <div className="container">
          <Reveal><div className="section-kicker">09 · Karya Kreatif</div><div className="section-head-row"><h2>Karya <em>Lainnya</em></h2><p>Keterampilan desain poster, infografis, maupun karya tulis yang berkembang melalui pelatihan serta kompetisi tingkat nasional.</p></div></Reveal>
        </div>
        <div className="creative-marquee" aria-label="Galeri poster dan infografis">
          <div className="creative-track">
            {[...creativeWorks, ...creativeWorks].map((item, i) => (
              <div className="creative-card" key={`${item.src}-${i}`} aria-hidden={i >= creativeWorks.length}>
                <button type="button" tabIndex={i >= creativeWorks.length ? -1 : 0} onClick={() => openGallery(creativeWorks, i % creativeWorks.length)} aria-label={`Lihat ${item.alt}`}>
                  <img src={item.src} alt={item.alt} loading="lazy" draggable={false} />
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="container">
          <Reveal className="creative-links"><a href="/media/publications/essay-biohybrid-sack.pdf" target="_blank" rel="noreferrer">Biohybrid Sack <Icon name="external" /></a><a href="/media/publications/essay-jerami-padi.pdf" target="_blank" rel="noreferrer">Limbah Jerami Padi <Icon name="external" /></a><a href="/media/publications/essay-ccus.pdf" target="_blank" rel="noreferrer">Teknologi CCUS <Icon name="external" /></a><a href="/media/publications/essay-umkm.pdf" target="_blank" rel="noreferrer">Peningkatan Keterampilan Digital UMKM <Icon name="external" /></a></Reveal>
        </div>
      </section>

      <section id="contact" className="contact-section section-dark">
        <div className="container contact-grid">
          <Reveal>
            <div className="section-kicker">10 · Kontak</div>
            <h2>Mari <em>Terhubung</em></h2>
            <p>Saya terbuka untuk kesempatan di bidang Quality Control, Supply Chain, Operations, Manufacturing, dan Process Improvement.</p>
            <div className="contact-actions">
              <a className="contact-line" href="https://www.linkedin.com/in/salsa-nabillah03" target="_blank" rel="noreferrer"><span className="contact-mini">in</span><span>Salsa Nabillah</span></a>
              <a className="contact-line" href="mailto:salsanabillah35@gmail.com"><Icon name="mail" /><span>salsanabillah35@gmail.com</span></a>
              <a className="contact-line" href="tel:+6288213398003"><Icon name="phone" /><span>+62 882-1339-8003</span></a>
              <a className="contact-line" href="https://www.instagram.com/salssann_/" target="_blank" rel="noreferrer"><span className="contact-mini">IG</span><span>@salssann_</span></a>
            </div>
          </Reveal>
          <Reveal className="contact-cta delay-1">
            <p className="contact-quote">“Siap menerapkan kompetensi analitis dan teknis untuk mendukung peningkatan kualitas, efisiensi, dan produktivitas perusahaan.”</p>
            <div className="contact-buttons"><a className="btn btn-primary" href="mailto:salsanabillah35@gmail.com">Kirim Email</a><a className="btn btn-ghost light" href="/downloads/Salsa-Nabillah-CV.pdf" target="_blank" rel="noreferrer">Unduh CV <Icon name="down" /></a></div>
          </Reveal>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner"><span>© {new Date().getFullYear()} Salsa Nabillah</span><span>Industrial Engineering · Quality · Supply Chain · Process Improvement</span></div>
      </footer>

      {openProject && (
        <div className="modal-backdrop" role="presentation" onMouseDown={e => { if (e.target === e.currentTarget) setOpenProject(null) }}>
          <div className="project-modal" role="dialog" aria-modal="true" aria-labelledby="project-title">
            <button className="modal-close" onClick={() => setOpenProject(null)} aria-label="Tutup"><Icon name="close" /></button>
            <div className="modal-head"><div className="project-tags">{openProject.category.map(tag => <span key={tag}>{tag}</span>)}</div><div className="project-meta">{openProject.meta}</div><h2 id="project-title">{openProject.title}</h2>{openProject.location && <p className="modal-location">{openProject.location}</p>}</div>
            <div className="modal-body">
              <section><h3>Ringkasan</h3><p>{openProject.intro}</p></section>
              <section><h3>Aktivitas Utama</h3><ul className="clean-list">{openProject.activities.map(x => <li key={x}>{x}</li>)}</ul></section>
              <section><h3>Hasil</h3><ul className="clean-list result-list">{openProject.results.map(x => <li key={x}>{x}</li>)}</ul></section>
              <section><h3>Tools & Metode</h3><div className="skill-chips">{openProject.tools.map(x => <span key={x}>{x}</span>)}</div></section>
              <section><h3>Visualisasi Proyek</h3><div className="modal-gallery">{openProject.images.map((image, i) => <button key={image.src} onClick={() => openGallery(openProject.images, i)}><img src={image.src} alt={image.alt} /><span>{image.caption}</span></button>)}</div>{openProject.video && <div className="project-video"><div className="video-label"><Icon name="play" /> {openProject.video.title}</div><video src={openProject.video.src} controls playsInline preload="metadata" /></div>}</section>
            </div>
          </div>
        </div>
      )}

      {lightbox && (() => {
        const item = lightbox.items[lightbox.index]
        const many = lightbox.items.length > 1
        return (
          <div className="lightbox" role="dialog" aria-modal="true" onMouseDown={e => { if (e.target === e.currentTarget) setLightbox(null) }}>
            <button className="lightbox-close" onClick={() => setLightbox(null)} aria-label="Tutup"><Icon name="close" /></button>
            {many && <button className="lightbox-nav prev" onClick={() => stepLightbox(-1)} aria-label="Sebelumnya"><Icon name="prev" /></button>}
            <div className="lightbox-stage" onMouseDown={e => { if (e.target === e.currentTarget) setLightbox(null) }}>
              {item.type === 'video' ? <video key={item.src} src={item.src} controls autoPlay playsInline /> : <img key={item.src} src={item.src} alt={item.alt} />}
            </div>
            {many && <button className="lightbox-nav next" onClick={() => stepLightbox(1)} aria-label="Berikutnya"><Icon name="next" /></button>}
            <div className="lightbox-bar">{item.caption && <span>{item.caption}</span>}{many && <b>{lightbox.index + 1} / {lightbox.items.length}</b>}</div>
          </div>
        )
      })()}
    </main>
  )
}
