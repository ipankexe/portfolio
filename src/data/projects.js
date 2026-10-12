export const projects = [
  {
    id: 'pos-kulu-asri',
    slug: 'pos-kulu-asri',
    title: 'POS Kulu Asri — Resto Management & QR Self-Order System',
    category: 'web',
    categories: ['web', 'backend'],
    featured: true,
    tag: 'Production Ready • Featured',
    githubUrl: 'https://github.com/ipankexe/pos-kulu-asri',
    liveDemoUrl: null, // Verified: Local production setup documented in README
    repoStatus: 'Active Public Repository',
    techStack: ['Laravel 12', 'PHP 8.2+', 'MySQL', 'Bootstrap 5.3', 'Chart.js', 'Blade', 'REST API'],
    stats: [
      { label: 'Architecture', value: 'Dual-Channel Order' },
      { label: 'Security', value: 'Void Audit Trail' },
      { label: 'Analytics', value: 'Net Profit & DoD/MoM' },
    ],
    summary: {
      id: 'Sistem manajemen restoran terintegrasi dengan Dual-Channel Ordering (Kasir & QR Meja Self-Order), audit void pencegah fraud kasir, dan analitik finansial berbasis Chart.js.',
      en: 'Integrated restaurant management platform featuring Dual-Channel Ordering (Cashier Terminal & QR Table Self-Order), anti-fraud void audit trails, and financial analytics powered by Chart.js.',
    },
    caseStudy: {
      overview: {
        id: 'POS Kulu Asri dirancang untuk mempercepat perputaran pesanan meja, mencegah kecurangan kasir, dan memudahkan manajemen memantau performa omzet serta estimasi laba bersih secara real-time dari perangkat mobile maupun tablet.',
        en: 'POS Kulu Asri is engineered to accelerate table turnover, eliminate cashier leakage, and enable real-time monitoring of revenue and estimated net profit directly from mobile and tablet devices.',
      },
      background: {
        id: 'Operasional restoran konvensional sering mengalami antrean pelayan yang lambat saat jam ramai serta ketidaksinkronan antara nota pesanan manual dan kasir. POS Kulu Asri menjawab kebutuhan digitalisasi dengan arsitektur pesanan dua jalur yang terpusat.',
        en: 'Traditional dining operations face service bottlenecks during peak rush hours and discrepancies between manual paper dockets and cash registers. POS Kulu Asri centralizes dual-channel order streams into a unified kitchen and accounting pipeline.',
      },
      problemStatement: {
        id: 'Bagaimana membangun sistem kasir yang ramah digunakan kasir dan pelanggan meja tanpa instalasi aplikasi, sekaligus menjaga integritas pencatatan kas melalui sistem void audit yang ketat?',
        en: 'How to build an intuitive Point of Sale serving both staff and seated customers without app installation, while strictly preserving financial audit trails via enforced void tracking?',
      },
      goals: {
        id: [
          'Memungkinkan pelanggan meja memesan makanan secara mandiri melalui pemindaian QR Code unik per meja.',
          'Mengintegrasikan pesanan kasir dan pesanan meja ke dalam satu antrean dapur dan pembukuan terpusat.',
          'Mencatat setiap pembatalan pesanan (void item) ke dalam log audit dengan nama petugas, alasan, waktu, dan nominal.',
          'Menyajikan dashboard analitik keuangan dengan kalkulasi estimasi Net Profit (Omzet - HPP) serta grafik komparasi DoD & MoM.',
        ],
        en: [
          'Enable seated guests to self-order by scanning unique table QR codes without app installation.',
          'Synchronize walk-in cashier transactions and table self-orders into unified kitchen tickets and centralized ledgers.',
          'Enforce strict audit logs on all order voids capturing operator identity, timestamp, justification, and amount.',
          'Deliver touch-friendly financial intelligence dashboards calculating estimated Net Profit and DoD/MoM sales trends.',
        ],
      },
      myRole: {
        id: 'Fullstack Web Developer (Perancangan arsitektur database relasional, logika backend Laravel 12, antarmuka Blade responsif, integrasi Chart.js, dan pengujian alur pesanan).',
        en: 'Fullstack Web Developer (Relational schema design, Laravel 12 backend logic, responsive Blade UI, Chart.js financial charts, and end-to-end transaction testing).',
      },
      architecture: {
        id: 'Mengadopsi arsitektur MVC Laravel 12 dengan pemisahan peran (RBAC: Admin/Owner, Kasir, dan Guest QR Meja). Data transaksi disimpan dalam tabel terelasi dengan snapshot harga menu permanen untuk mencegah perubahan nilai historis saat harga menu diperbarui.',
        en: 'Built on Laravel 12 MVC architecture with role-based access boundaries (Owner/Admin, Cashier, and Table Guest). Employs permanent pricing snapshots per line item so historical financial records remain immutable if menu prices change.',
      },
      keyFeatures: {
        id: [
          'Dual-Channel Order Synchronization (Kasir POS + Self-Order QR Meja).',
          'Dashboard Manajemen Responsif Mobile/Tablet dengan grid metrik 2x2 cepat baca.',
          'Otomatisasi kalkulasi Laba Bersih berdasarkan Omset dikurangi HPP (Cost of Goods Sold).',
          'Grafik tren penjualan harian dan bulanan Chart.js dengan filter instan.',
          'Void Audit Logs untuk setiap pembatalan pesanan guna mencegah manipulasi kasir.',
          'Peringatan Stok Minimum (Low Stock Alert) otomatis.',
          'Dukungan cetak struk kasir termal 58mm / 80mm via browser dan RawBT.',
        ],
        en: [
          'Dual-Channel Order Synchronization (Front-desk POS & Table QR Self-Order).',
          'Touch-optimized Mobile/Tablet Management Dashboard with rapid 2x2 metric overview.',
          'Automated Net Profit estimation (Revenue minus COGS/HPP).',
          'Interactive Chart.js daily & monthly trend comparisons (DoD & MoM).',
          'Void Audit Logs detailing operator, reason, timestamp, and amount.',
          'Automated low stock alerts for inventory management.',
          'Thermal receipt printing support for 58mm and 80mm standards.',
        ],
      },
      challengesAndSolutions: {
        id: [
          {
            challenge: 'Mencegah perbedaan data saat pelanggan meja memesan bersamaan dengan transaksi kasir.',
            solution: 'Menerapkan database transaction atomik dan status locking per meja sehingga status meja (Tersedia / Terisi / Menunggu Pembayaran) selalu sinkron secara konsisten.',
          },
          {
            challenge: 'Menyajikan dashboard analitik yang tetap nyaman dan cepat dibaca di layar smartphone pemilik restoran.',
            solution: 'Merancang tata letak bento 2x2 pada bagian atas layar dengan offcanvas navigation drawer dan grafik sentuh yang responsif.',
          },
        ],
        en: [
          {
            challenge: 'Preventing race conditions when multiple table guests and front-desk cashiers order simultaneously.',
            solution: 'Implemented atomic database transactions and table state locks to guarantee accurate table status and kitchen ticket sequencing.',
          },
          {
            challenge: 'Delivering an information-dense financial dashboard that remains readable on smartphone screens for busy owners.',
            solution: 'Engineered a mobile-first 2x2 KPI bento card layout with offcanvas navigation and touch-friendly Chart.js canvases.',
          },
        ],
      },
    },
  },
  {
    id: 'pos-bergegaz',
    slug: 'pos-bergegaz',
    title: 'Bergegas Series POS — Lightweight & Mobile-First Coffee POS',
    category: 'backend',
    categories: ['web', 'backend'],
    featured: true,
    tag: 'Mobile-First PWA • 21 Tests Passed',
    githubUrl: 'https://github.com/ipankexe/pos-bergegaz',
    liveDemoUrl: null, // Local production ready setup documented
    repoStatus: 'Active Public Repository',
    techStack: ['Laravel 12', 'MySQL 8', 'Tailwind CSS v4', 'Alpine.js', 'PWA', 'PHPUnit'],
    stats: [
      { label: 'Automated Tests', value: '21 Tests / 76 Assertions (100%)' },
      { label: 'Security Bar', value: 'Zero Frontend Trust' },
      { label: 'PWA Mode', value: 'Standalone Fullscreen' },
    ],
    summary: {
      id: 'Aplikasi kasir Point of Sales modern bernuansa Cobalt Blue & Clean White untuk street coffee, dilengkapi rekonsiliasi shift kasir transparan, rollback transaksi atomik, dan 21 automated tests.',
      en: 'A modern, mobile-first Point of Sale application designed for street coffee shops featuring transparent shift reconciliation, atomic void rollbacks, and 21 automated PHPUnit tests.',
    },
    caseStudy: {
      overview: {
        id: 'Bergegas Series POS dirancang khusus untuk operasional kedai kopi jalanan yang dinamis dan berkecepatan tinggi. Fokus utama adalah zero bloatware, keamanan transaksi zero frontend trust, dan antarmuka sentuh ergonomis satu tangan (≥48px touch targets).',
        en: 'Bergegas Series POS is tailored specifically for high-velocity street coffee operations. Its core principles are zero bloatware, zero frontend trust transaction security, and ergonomic single-handed touch controls (≥48px targets).',
      },
      background: {
        id: 'Sistem POS konvensional seringkali terlalu lambat dan rumit untuk gerai street coffee yang mengutamakan kecepatan pemrosesan nota dalam hitungan detik. Diperlukan sistem yang ringan, dapat diinstal sebagai PWA di HP kasir, dan memiliki rekonsiliasi kas yang akurat.',
        en: 'Conventional enterprise POS systems are overly complex and bloated for agile street coffee bars where cashiers must finalize drinks in seconds. A lightweight PWA installable on mobile devices with strict cash reconciliation was required.',
      },
      problemStatement: {
        id: 'Bagaimana memastikan transaksi kasir tidak dapat dimanipulasi dari sisi klien browser, sekaligus memberikan rekonsiliasi selisih uang kas laci secara transparan setiap pergantian shift?',
        en: 'How to guarantee cashier transactions cannot be tampered with client-side while providing transparent cash drawer reconciliation at the close of every shift?',
      },
      goals: {
        id: [
          'Menerapkan prinsip Zero Frontend Trust di mana semua harga dan total dihitung ulang di backend di dalam transaksi database atomik (DB::transaction).',
          'Membangun alur Shift Kasir lengkap: Buka Shift (modal awal), Live Tracking penjualan cash/QRIS, dan Closing Shift dengan deteksi selisih uang fisik vs sistem.',
          'Menyediakan fitur Void (Pembatalan) berizin dengan pencatatan audit log dan pengurangan omzet shift secara atomik.',
          'Mencapai 100% kelulusan automated testing fitur dan unit dengan PHPUnit.',
        ],
        en: [
          'Enforce Zero Frontend Trust where prices and subtotals are strictly recalculated server-side inside atomic DB::transaction blocks.',
          'Build end-to-end Cashier Shift management: opening float, real-time cash/QRIS tracking, and closing reconciliation reporting cash discrepancies.',
          'Deliver authorized Void operations backed by audit logs and atomic sales deduction.',
          'Achieve 100% pass rate across automated unit and feature test suites with PHPUnit.',
        ],
      },
      myRole: {
        id: 'Fullstack Software Developer (Arsitektur backend Laravel 12, skema database MySQL, implementasi PWA, penulisan 21 automated tests PHPUnit, dan UI Tailwind CSS v4).',
        en: 'Fullstack Software Developer (Laravel 12 backend architecture, MySQL database schema, PWA configuration, 21 automated PHPUnit tests, and Tailwind CSS v4 UI).',
      },
      architecture: {
        id: 'Arsitektur backend Laravel 12 yang ketat dengan penanganan transaksi database ACID. Menggunakan locking database (lockForUpdate) untuk mencegah race conditions, snapshot data harga menu permanen pada detail transaksi, serta proteksi Soft Delete pada produk.',
        en: 'Strict Laravel 12 backend architecture enforcing ACID transactional guarantees. Utilizes pessimistic database locking (lockForUpdate) to eliminate race conditions, permanent price snapshots on transaction details, and soft deletes on menu items.',
      },
      keyFeatures: {
        id: [
          'Zero Frontend Trust: Semua kalkulasi nominal divalidasi dan dihitung ulang di server.',
          'Manajemen Sesi Shift Kasir (Buka Shift, Live Tracking, Closing Shift dengan deteksi selisih kas transparan).',
          'Multi-Payment Workflow: Uang Tunai (Cash) dengan tombol nominal cepat dan QRIS simulator.',
          'Modal cetak Struk Pembayaran Thermal 58mm / 80mm instan (window.print).',
          'Nomor Transaksi Unik berformat BRG-YYYYMMDD-XXXX.',
          'Log Audit Pembatalan (Void) dengan alasan wajib dan pemotongan omzet otomatis.',
          '21 Automated PHPUnit Tests (76 Assertions, 100% Success).',
          'PWA Ready: Dapat di-install di Android Home Screen dan berjalan mode standalone tanpa address bar.',
        ],
        en: [
          'Zero Frontend Trust: All monetary totals are strictly recalculated and verified on the server.',
          'Cashier Shift Lifecycle: Opening cash, live tracking, and closing reconciliation with transparent cash variance display.',
          'Multi-Payment Flow: Cash with quick change denomination presets and QRIS simulation.',
          'Thermal Receipt printing modal for 58mm / 80mm printers (window.print).',
          'Unique invoice sequencing formatted as BRG-YYYYMMDD-XXXX.',
          'Void Audit Logs requiring justification and automatically adjusting active shift totals.',
          '21 Automated PHPUnit Tests (76 assertions, 100% pass rate).',
          'PWA Ready: Installable on Android home screens running fullscreen without browser bars.',
        ],
      },
      challengesAndSolutions: {
        id: [
          {
            challenge: 'Menjamin rekonsiliasi kas tidak dirusak oleh transaksi yang terlambat dicatat setelah shift ditutup.',
            solution: 'Shift yang telah berstatus closed otomatis dikunci secara ketat di tingkat middleware dan database transaction.',
          },
          {
            challenge: 'Memastikan integritas pembukuan jika ada menu yang diubah harganya di masa depan.',
            solution: 'Menggunakan snapshot nama dan harga satuan pada tabel transaction_details sehingga nilai transaksi lampau tidak pernah terpengaruh.',
          },
        ],
        en: [
          {
            challenge: 'Ensuring closing cash reconciliation cannot be corrupted by delayed or concurrent transactions.',
            solution: 'Closed cashier sessions are strictly locked at both the middleware and database transaction levels.',
          },
          {
            challenge: 'Preserving historical bookkeeping accuracy if menu prices change in the future.',
            solution: 'Captured immutable snapshots of item names and unit prices in transaction_details tables at the exact time of order completion.',
          },
        ],
      },
    },
  },
  {
    id: 'webdamkar',
    slug: 'webdamkar',
    title: 'Sistem Informasi Dinas Pemadam Kebakaran Kota Semarang',
    category: 'web',
    categories: ['web', 'backend'],
    featured: true,
    tag: 'Diskominfo Semarang Internship',
    githubUrl: 'https://github.com/ipankexe/webdamkar',
    liveDemoUrl: null,
    repoStatus: 'Active Public Repository',
    techStack: ['React 19', 'Express.js 5', 'MongoDB', 'Mongoose', 'Tailwind CSS', 'Framer Motion', 'Multer'],
    stats: [
      { label: 'Client / Agency', value: 'Diskominfo Kota Semarang' },
      { label: 'Role', value: 'Fullstack Developer Intern' },
      { label: 'Frontend Stack', value: 'React 19 + Framer Motion' },
    ],
    summary: {
      id: 'Sistem informasi layanan publik berbasis website untuk Dinas Pemadam Kebakaran Kota Semarang yang dikembangkan selama masa magang di Diskominfo Kota Semarang.',
      en: 'Public service web platform developed for the Semarang City Fire Department during an internship at the Semarang City Communications & Informatics Agency (Diskominfo).',
    },
    caseStudy: {
      overview: {
        id: 'Proyek ini merupakan hasil kontribusi teknis selama program magang di Dinas Komunikasi dan Informatika (Diskominfo) Kota Semarang, bertajuk "Pengembangan Sistem Informasi Dinas Pemadam Kebakaran Kota Semarang Berbasis Website di Diskominfo".',
        en: 'Engineered during a software developer internship at the Semarang City Communications and Informatics Agency (Diskominfo), dedicated to modernizing the web presence and service workflow of the Semarang Fire Department.',
      },
      background: {
        id: 'Masyarakat dan institusi pendidikan (sekolah, instansi pemerintah) membutuhkan akses informasi kesiapsiagaan kebakaran yang transparan serta jalur resmi untuk mengajukan permohonan kunjungan edukasi proteksi kebakaran.',
        en: 'Citizens and educational institutions required a transparent portal for fire prevention information and an official digital submission pathway for public educational visit requests.',
      },
      problemStatement: {
        id: 'Bagaimana menyediakan antarmuka modern yang responsif bagi warga Kota Semarang untuk mengajukan permohonan kunjungan resmi disertai dokumen pendukung dan foto ke server secara aman?',
        en: 'How to deliver a modern, accessible web interface for citizens to submit formal institutional visit requests with supporting file and image uploads securely?',
      },
      goals: {
        id: [
          'Membangun antarmuka pengguna responsif menggunakan React 19, Tailwind CSS, dan Framer Motion.',
          'Mengembangkan REST API backend modular dengan Express.js 5 dan Mongoose (MongoDB).',
          'Mengimplementasikan fitur CRUD dan upload file surat permohonan menggunakan Multer.',
          'Membangun modul kontak publik dan integrasi pengelolaan data permohonan kunjungan.',
        ],
        en: [
          'Build a responsive, accessible user interface using React 19, Tailwind CSS, and Framer Motion.',
          'Develop modular backend REST APIs using Express.js 5 and Mongoose (MongoDB).',
          'Implement CRUD functionality and file upload handling for official request letters via Multer.',
          'Deliver public inquiry and visit request management endpoints.',
        ],
      },
      myRole: {
        id: 'Fullstack Web Developer Intern (Pengembangan komponen frontend React, integrasi REST API, pembuatan controller & model MongoDB Mongoose, penanganan upload file Multer, serta kolaborasi tim via Git).',
        en: 'Fullstack Web Developer Intern (React frontend component engineering, REST API integration, MongoDB Mongoose schema design, Multer file upload handling, and Git team collaboration).',
      },
      architecture: {
        id: 'Arsitektur Client-Server terpisah (Decoupled Architecture) dengan backend Express 5 REST API dan frontend React 19 SPA. Basis data NoSQL MongoDB digunakan untuk fleksibilitas penyimpanan data permohonan institusional.',
        en: 'Decoupled Client-Server architecture utilizing an Express 5 REST API backend and a React 19 Single Page Application frontend, backed by MongoDB NoSQL database for flexible document storage.',
      },
      keyFeatures: {
        id: [
          'Formulir Pengajuan Permohonan Kunjungan Edukatif dengan validasi field data instansi, jumlah siswa laki-laki/perempuan, kontak PIC, dan tanggal kunjungan.',
          'Penanganan upload dokumen surat permohonan resmi via Multer middleware.',
          'Formulir Kontak Publik untuk aspirasi dan pertanyaan warga Semarang.',
          'Model Mongoose Permohonan dan Kontak dengan penataan timestamp otomatis.',
          'Antarmuka modern dengan micro-interactions Framer Motion dan notifikasi status real-time.',
        ],
        en: [
          'Educational Visit Request Form with input validation for institution name, student attendance counts, PIC contact, and proposed visit dates.',
          'Official permit letter upload management using Multer backend middleware.',
          'Public Contact & Inquiry form for citizen feedback.',
          'Mongoose schemas for Permohonan and Kontak with automatic timestamps.',
          'Modern UI with Framer Motion micro-interactions and real-time toast feedback.',
        ],
      },
      challengesAndSolutions: {
        id: [
          {
            challenge: 'Memastikan upload file dokumen permohonan kunjungan aman dan tersimpan dengan format nama unik tanpa konflik.',
            solution: 'Mengonfigurasi Multer disk storage dengan timestamp sanitization dan validasi tipe berkas.',
          },
          {
            challenge: 'Menyajikan alur formulir bertahap yang mudah dipahami oleh perwakilan guru atau instansi.',
            solution: 'Merancang form dengan validasi visual jelas, state loading indikatif, dan toast feedback konfirmasi.',
          },
        ],
        en: [
          {
            challenge: 'Ensuring uploaded request documents are safely handled and named uniquely without collision.',
            solution: 'Configured Multer disk storage with unique timestamp prefixes and file type verification.',
          },
          {
            challenge: 'Designing a clear, accessible multi-field submission flow for school teachers and organization representatives.',
            solution: 'Implemented intuitive form field groupings with clear visual validation indicators and informative toast notifications.',
          },
        ],
      },
    },
  },
  {
    id: 'ticketing_app',
    slug: 'ticketing_app',
    title: 'Bimkar Event Ticketing Platform',
    category: 'web',
    categories: ['web', 'backend'],
    featured: false,
    tag: 'Capstone Platform',
    githubUrl: 'https://github.com/ipankexe/ticketing_app',
    liveDemoUrl: null,
    repoStatus: 'Active Public Repository',
    techStack: ['Laravel', 'Blade', 'MySQL', 'Tailwind CSS', 'Vite'],
    stats: [
      { label: 'Domain', value: 'Event Ticketing' },
      { label: 'Database', value: 'MySQL Relational' },
      { label: 'Stack', value: 'Laravel + Blade' },
    ],
    summary: {
      id: 'Platform reservasi dan pembelian tiket acara berbasis Laravel dengan pengelolaan kuota tiket berjenjang, katalog kategori event, dan relasi detail transaksi.',
      en: 'Event reservation and ticket booking platform built with Laravel featuring tiered ticket quotas, event categorization, and relational order tracking.',
    },
    caseStudy: {
      overview: {
        id: 'Aplikasi ticketing acara yang dikembangkan untuk mengelola penyelenggaraan event, alokasi kuota tiket per kategori, dan pemrosesan pesanan pengguna secara terstruktur.',
        en: 'An event ticketing web application engineered to manage event scheduling, ticket tier quotas, and structured customer checkout orders.',
      },
      background: {
        id: 'Pengelolaan tiket acara secara konvensional seringkali rentan terhadap kelebihan kuota (overbooking) dan kesulitan pelacakan status pembayaran pesanan.',
        en: 'Conventional event ticket handling often suffers from overbooking risks and fragmented checkout tracking.',
      },
      problemStatement: {
        id: 'Bagaimana merancang skema database tiket dan order yang dapat memisahkan tiket per acara dan mencatat detail pemesanan pelanggan dengan akurat?',
        en: 'How to structure an event ticket and order schema that segregates tier quotas per event and accurately records order line items?',
      },
      goals: {
        id: [
          'Membuat struktur relasional: kategoris, events, tikets, orders, dan detail_orders.',
          'Mencegah penjualan tiket melampaui kapasitas kuota yang dialokasikan.',
          'Menyediakan antarmuka penjelajahan event yang responsif menggunakan Tailwind CSS.',
        ],
        en: [
          'Create relational schema across categories, events, tickets, orders, and order details.',
          'Prevent ticket sales from exceeding allocated quota capacity.',
          'Deliver an intuitive event catalog and checkout flow using Tailwind CSS.',
        ],
      },
      myRole: {
        id: 'Backend & Fullstack Developer (Perancangan migrasi database relasional Laravel, pembuatan relasi Eloquent, dan alur pemesanan tiket).',
        en: 'Backend & Fullstack Developer (Laravel relational migrations, Eloquent relationship modeling, and checkout order flows).',
      },
      architecture: {
        id: 'Laravel MVC dengan normalisasi database relasional 3NF menghubungkan tabel Events dengan Tickets dan Orders.',
        en: 'Laravel MVC architecture with third-normal-form relational schema linking Events, Ticket tiers, and Customer Orders.',
      },
      keyFeatures: {
        id: [
          'Manajemen Kategori Acara (Konser, Seminar, Workshop, dll).',
          'Alokasi Kuota dan Harga Tiket Berjenjang.',
          'Pencatatan Pesanan dengan Nomor Referensi Order Unik.',
          'Relasi Detail Order per Item Tiket.',
        ],
        en: [
          'Event Category Classification (Concerts, Seminars, Workshops).',
          'Tiered Ticket Quota & Pricing Management.',
          'Order Generation with Unique Tracking Identifiers.',
          'Itemized Detail Order Line Items.',
        ],
      },
      challengesAndSolutions: {
        id: [
          {
            challenge: 'Menjaga integritas data saat satu order mencakup beberapa jenis tiket.',
            solution: 'Menggunakan pemisahan tabel orders dan detail_orders dengan foreign key cascade yang aman.',
          },
        ],
        en: [
          {
            challenge: 'Preserving data consistency when a single order contains multiple ticket types.',
            solution: 'Separated parent orders and detail_orders tables reinforced by strict foreign key relationships.',
          },
        ],
      },
    },
  },
  {
    id: 'face-tracker-cv',
    slug: 'face-tracker-cv',
    title: 'Facial Tracking & Computer Vision Integration',
    category: 'ml',
    categories: ['ml'],
    featured: true,
    tag: 'Academic ML & Computer Vision',
    githubUrl: 'https://github.com/ipankexe/ML-A11202214681-UAS',
    liveDemoUrl: null,
    repoStatus: 'Active Public Repository',
    techStack: ['Python', 'OpenCV', 'ImageDataGenerator', 'Django', 'Jupyter Notebook', 'CNN'],
    stats: [
      { label: 'Domain', value: 'Computer Vision' },
      { label: 'Pipeline', value: 'Data Augmentation' },
      { label: 'Framework', value: 'Django + Python' },
    ],
    summary: {
      id: 'Eksplorasi computer vision dan deep learning untuk deteksi serta pelacakan wajah menggunakan normalisasi citra, augmentasi data gambar, dan dashboard web Django.',
      en: 'Computer vision and deep learning exploration for facial tracking and detection utilizing pixel normalization, data augmentation, and Django web dashboard integration.',
    },
    caseStudy: {
      overview: {
        id: 'Proyek akademik yang berfokus pada implementasi pipeline augmentasi citra dan model pembelajaran mesin untuk pelacakan wajah, dipadukan dengan framework web Django untuk visualisasi hasil model.',
        en: 'An academic machine learning project implementing an image augmentation pipeline and neural network model for face tracking, paired with Django for model output monitoring.',
      },
      background: {
        id: 'Dalam pengolahan citra komputer, variasi pencahayaan, sudut pengambilan gambar, dan orientasi wajah dapat menurunkan akurasi model jika tidak dilakukan prapemrosesan data yang memadai.',
        en: 'In computer vision, variations in lighting, camera angles, and face orientation degrade model accuracy unless robust image preprocessing pipelines are applied.',
      },
      problemStatement: {
        id: 'Bagaimana membangun alur augmentasi data gambar yang efektif untuk meningkatkan ketahanan model pelacak wajah?',
        en: 'How to structure an effective image data augmentation pipeline to bolster model robustness in facial tracking scenarios?',
      },
      goals: {
        id: [
          'Menerapkan normalisasi data citra (X / 255.0) dan one-hot categorical encoding.',
          'Membangun pipeline ImageDataGenerator dengan variasi rotasi (20°), pergeseran lebar/tinggi (0.2), dan horizontal flip.',
          'Mengintegrasikan model hasil pelatihan dengan web controller Django untuk memantau data citra dan riwayat pelatihan model.',
        ],
        en: [
          'Apply image normalization (0.0 to 1.0 floating point scaling) and one-hot categorical encoding.',
          'Construct an ImageDataGenerator augmentation pipeline covering 20° rotation, width/height shifts, and horizontal flips.',
          'Connect the trained computer vision model to a Django web controller to monitor dataset metrics and training timestamps.',
        ],
      },
      myRole: {
        id: 'Machine Learning Student Researcher (Penyusunan notebook Python, perancangan augmentasi data gambar, dan integrasi view controller Django).',
        en: 'Machine Learning Student Researcher (Python Jupyter notebook implementation, image augmentation design, and Django view controller integration).',
      },
      architecture: {
        id: 'Jupyter Notebook untuk eksperimen preprocessing dan model deep learning, dihubungkan dengan aplikasi web Django untuk monitoring status model.',
        en: 'Jupyter Notebook environment for dataset preprocessing and computer vision modeling, integrated with a Django web layer for model metadata inspection.',
      },
      keyFeatures: {
        id: [
          'Pipeline Normalisasi Skala Citra 0-1 untuk stabilitas gradien.',
          'Data Augmentation dinamis mencegah overfitting pada sudut wajah tertentu.',
          'Dashboard Django penampil jumlah foto, jumlah pengguna, dan waktu pembaruan model.',
        ],
        en: [
          'Pixel intensity normalization (0 to 1 scaling) ensuring stable gradient descent.',
          'Dynamic Data Augmentation pipeline preventing overfitting across varied face angles.',
          'Django dashboard monitoring photo count, registered users, and model training freshness.',
        ],
      },
      challengesAndSolutions: {
        id: [
          {
            challenge: 'Keterbatasan variasi sudut wajah pada dataset mentah.',
            solution: 'Mengimplementasikan ImageDataGenerator dengan rotasi dan pergeseran koordinat spasial secara acak.',
          },
        ],
        en: [
          {
            challenge: 'Limited variance in camera angles within the raw image dataset.',
            solution: 'Deployed ImageDataGenerator with random rotations and spatial dimension shifts.',
          },
        ],
      },
    },
  },
  {
    id: 'data-mining-eda',
    slug: 'data-mining-eda',
    title: 'Data Mining & Exploratory Data Analysis Pipelines',
    category: 'data',
    categories: ['data'],
    featured: false,
    tag: 'Academic Data Science',
    githubUrl: 'https://github.com/ipankexe/DataMining24',
    liveDemoUrl: null,
    repoStatus: 'Active Public Repository',
    techStack: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Scikit-Learn'],
    stats: [
      { label: 'Focus', value: 'Data Cleaning & EDA' },
      { label: 'Libraries', value: 'Pandas & NumPy' },
      { label: 'Visualization', value: 'Matplotlib & Seaborn' },
    ],
    summary: {
      id: 'Eksplorasi penambangan data (data mining), teknik pembersihan data tabular, imputasi missing values, dan visualisasi distribusi statistik dengan pustaka Python.',
      en: 'Exploratory data analysis pipelines implementing tabular data cleaning, missing value imputation, and statistical distribution plotting with Python data libraries.',
    },
    caseStudy: {
      overview: {
        id: 'Koleksi tugas dan eksplorasi data mining pada mata kuliah Teknik Informatika UDINUS yang menguji berbagai tahapan pengolahan data mentah hingga siap dianalisis.',
        en: 'A compilation of data mining coursework and independent explorations examining raw data preparation, transformation, and distribution analysis.',
      },
      background: {
        id: 'Dataset dunia nyata hampir selalu mengandung inkonsistensi, nilai kosong (missing values), dan pencilan (outliers) yang dapat membiaskan hasil pemodelan.',
        en: 'Real-world datasets invariably contain noise, missing values, and outliers that can skew analytical findings if unhandled.',
      },
      problemStatement: {
        id: 'Bagaimana membersihkan dan memvisualisasikan data tabular mentah agar karakteristik distribusi data dapat dipahami dengan akurat?',
        en: 'How to clean and visually inspect raw tabular data to accurately comprehend feature distributions and statistical anomalies?',
      },
      goals: {
        id: [
          'Melakukan audit struktur data tabular dan identifikasi missing values.',
          'Menerapkan teknik imputasi atau eliminasi data yang sesuai dengan konteks fitur.',
          'Membuat grafik visualisasi distribusi dan korelasi antar variabel menggunakan Matplotlib dan Seaborn.',
        ],
        en: [
          'Audit tabular dataset structures and pinpoint missing value concentrations.',
          'Apply context-appropriate missing value imputation and cleaning strategies.',
          'Plot distribution curves and correlation heatmaps with Matplotlib and Seaborn.',
        ],
      },
      myRole: {
        id: 'Data Analyst & Student Researcher (Pengembangan notebook analisis data, pembersihan data, dan visualisasi temuan).',
        en: 'Data Analyst & Student Researcher (Data cleaning notebooks, statistical exploration, and insight visualization).',
      },
      architecture: {
        id: 'Alur kerja modular Python data science: Raw Data Loading -> Cleaning & Imputation -> Feature Scaling -> Exploratory Visualization.',
        en: 'Modular Python data science pipeline: Raw Data Loading -> Cleaning & Imputation -> Feature Scaling -> Exploratory Visualization.',
      },
      keyFeatures: {
        id: [
          'Pembersihan missing values dan duplikasi baris.',
          'Pemeriksaan statistik deskriptif mean, median, standard deviation, dan quartiles.',
          'Visualisasi histogram, scatter plot, dan boxplot.',
        ],
        en: [
          'Missing value cleansing and row deduplication.',
          'Descriptive statistical auditing (mean, median, standard deviation, quartiles).',
          'Distribution histograms, scatter plots, and boxplot outlier inspections.',
        ],
      },
      challengesAndSolutions: {
        id: [
          {
            challenge: 'Memilih strategi penanganan missing values yang tidak merusak distribusi asli variabel numerik.',
            solution: 'Membandingkan imputasi median dan mean berdasarkan skewness data sebelum mengambil keputusan.',
          },
        ],
        en: [
          {
            challenge: 'Selecting missing value strategies that preserve natural distribution without introducing bias.',
            solution: 'Evaluated median vs mean imputation based on feature skewness prior to value replacement.',
          },
        ],
      },
    },
  },
];
