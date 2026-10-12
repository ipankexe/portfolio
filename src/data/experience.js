export const experiences = [
  {
    id: 'capstone-pos',
    type: 'tech',
    role: {
      id: 'Fullstack Web Developer — Capstone Project',
      en: 'Fullstack Web Developer — Capstone Project',
    },
    organization: {
      id: 'Capstone Project (Self-employed / Academic)',
      en: 'Capstone Project (Self-employed / Academic)',
    },
    location: 'Semarang, Indonesia',
    period: {
      id: 'April 2026 – Juni 2026',
      en: 'April 2026 – June 2026',
    },
    badge: {
      id: 'Software Engineering',
      en: 'Software Engineering',
    },
    summary: {
      id: 'Merancang dan mengembangkan aplikasi web Point of Sale (POS) restoran komprehensif menggunakan Laravel 12, Bootstrap 5, Tailwind CSS, dan MySQL untuk menyederhanakan operasional rumah makan.',
      en: 'Designed and engineered a full-featured restaurant Point of Sale (POS) web application utilizing Laravel 12, Bootstrap 5, Tailwind CSS, and MySQL to streamline dining operations.',
    },
    points: {
      id: [
        'Membangun alur pemrosesan pesanan real-time yang menangani transaksi keranjang, pelacakan okupansi meja, kalkulasi diskon, dan pencetakan tiket pesanan dapur.',
        'Mengembangkan sistem rollback transaksi yang aman (Void system) dengan pessimistic database locks (lockForUpdate) untuk menjaga integritas data dan pencatatan log audit.',
        'Merancang dan mengoptimalkan skema database untuk mengelola inventaris produk, melacak log stok keluar, dan memantau status ketersediaan meja.',
        'Membuat dashboard analitik admin interaktif yang memvisualisasikan performa penjualan (harian, mingguan, bulanan) serta tren pertumbuhan menggunakan Chart.js.',
        'Mengimplementasikan Role-Based Access Control (RBAC) untuk menegakkan batasan keamanan pada operasi sensitif seperti pembatalan void dan laporan penjualan.',
      ],
      en: [
        'Engineered a real-time order processing workflow managing cart transactions, table occupancy tracking, discount computations, and kitchen ticket dispatch.',
        'Developed a secure transaction rollback system (Void system) with pessimistic database locks (lockForUpdate) to ensure ACID consistency and audit logs.',
        'Designed and optimized relational schemas to manage inventory stocks, outbound product movement logs, and table availability matrices.',
        'Created an interactive administrative analytics dashboard visualizing daily, weekly, and monthly sales performance using Chart.js.',
        'Enforced Role-Based Access Control (RBAC) restricting high-privilege operations such as transaction voids and financial reporting to administrator accounts.',
      ],
    },
    techStack: ['Laravel 12', 'PHP 8.2+', 'MySQL', 'Tailwind CSS', 'Bootstrap 5', 'Chart.js', 'RBAC'],
  },
  {
    id: 'diskominfo-semarang',
    type: 'tech',
    role: {
      id: 'Fullstack Web Developer — Internship',
      en: 'Fullstack Web Developer — Internship',
    },
    organization: {
      id: 'Dinas Komunikasi dan Informatika (Diskominfo) Kota Semarang',
      en: 'Semarang City Communications & Informatics Agency (Diskominfo)',
    },
    location: 'Semarang, Indonesia',
    period: {
      id: 'Juni 2025 – September 2025',
      en: 'June 2025 – September 2025',
    },
    badge: {
      id: 'Government Agency Internship',
      en: 'Government Agency Internship',
    },
    summary: {
      id: 'Mengembangkan Sistem Informasi Dinas Pemadam Kebakaran Kota Semarang Berbasis Website menggunakan React.js, Express.js, dan MongoDB selama masa magang di Diskominfo Kota Semarang.',
      en: 'Developed the web-based Semarang City Fire Department Information System using React.js, Express.js, and MongoDB during an engineering internship at Diskominfo Kota Semarang.',
    },
    points: {
      id: [
        'Membangun antarmuka frontend yang responsif dan mengintegrasikan REST API untuk komunikasi yang lancar antara klien dan server.',
        'Mengimplementasikan fungsionalitas CRUD, fitur upload gambar/dokumen surat permohonan kunjungan dengan Multer, dan pengelolaan basis data MongoDB Mongoose.',
        'Melakukan debugging, pengujian sistem, serta peningkatan fitur untuk meningkatkan keandalan dan performa aplikasi.',
        'Berkolaborasi aktif dengan tim pengembang menggunakan Git dan GitHub, berpartisipasi dalam analisis kebutuhan, implementasi kode, dan aktivitas deployment.',
      ],
      en: [
        'Built responsive frontend user interfaces and integrated REST APIs to facilitate seamless data communication between client and server.',
        'Implemented CRUD operations, document/image upload handling for public visit requests via Multer, and MongoDB database management with Mongoose.',
        'Conducted systematic debugging, component testing, and feature enhancements to boost application reliability and user experience.',
        'Collaborated with the engineering team using Git, actively participating in requirements analysis, implementation sprints, and deployment tasks.',
      ],
    },
    techStack: ['React.js', 'Express.js', 'MongoDB', 'Mongoose', 'REST API', 'Multer', 'Tailwind CSS', 'Git'],
  },
  {
    id: 'dikala-kopi',
    type: 'transferable',
    role: {
      id: 'Food & Beverage Operations — Professional Experience',
      en: 'Food & Beverage Operations — Professional Experience',
    },
    organization: {
      id: 'Dikala Kopi Group',
      en: 'Dikala Kopi Group',
    },
    location: 'Semarang, Indonesia',
    period: {
      id: 'Pengalaman Profesional F&B',
      en: 'Professional F&B Experience',
    },
    badge: {
      id: 'Transferable Soft Skills',
      en: 'Transferable Soft Skills',
    },
    summary: {
      id: 'Pengalaman kerja nyata di industri Food & Beverage yang secara intensif melatih keterampilan komunikasi interpersonal, koordinasi kerja tim, manajemen prioritas di bawah tekanan, dan pemecahan masalah operasional yang sangat relevan untuk lingkungan engineering profesional.',
      en: 'Real-world professional experience in the Food & Beverage industry that intensively cultivated interpersonal communication, team coordination, crisis prioritization under pressure, and pragmatic problem-solving transferable to professional engineering environments.',
    },
    transferablePillars: [
      {
        title: {
          id: 'Communication & Public Speaking',
          en: 'Communication & Public Speaking',
        },
        desc: {
          id: 'Melatih kemampuan berinteraksi dengan beragam pelanggan, menyampaikan informasi operasional secara lugas dan terstruktur, serta membangun kepercayaan diri dalam berbicara di hadapan publik dan rekan kerja.',
          en: 'Honed clear interpersonal customer interaction, precise operational briefing, and speaking confidence when communicating with diverse stakeholders and team members.',
        },
      },
      {
        title: {
          id: 'Teamwork & Collaboration',
          en: 'Teamwork & Collaboration',
        },
        desc: {
          id: 'Menjaga sinkronisasi antar shift, pembagian tanggung jawab operasional yang dinamis, dan saling mendukung demi kelancaran target bersama — menjadi fondasi kuat untuk kolaborasi software development, sprint planning, dan code review.',
          en: 'Coordinated handoffs across shifts, shared high-volume operational tasks, and supported unified team goals — forming a natural foundation for agile dev sprints and peer code reviews.',
        },
      },
      {
        title: {
          id: 'Working Under Pressure',
          en: 'Working Under Pressure',
        },
        desc: {
          id: 'Menjaga ketenangan, akurasi, dan konsistensi prosedur saat melayani volume pesanan yang melonjak cepat (rush hours), melatih ketahanan mental dan penentuan prioritas yang esensial dalam menangani insiden produksi software.',
          en: 'Maintained composure, procedural rigor, and consistent output during high-traffic operational peak hours, cultivating the resilience needed when triaging production incidents.',
        },
      },
      {
        title: {
          id: 'Problem Solving & Adaptability',
          en: 'Problem Solving & Adaptability',
        },
        desc: {
          id: 'Cepat merespons kendala logistik harian, menyesuaikan diri dengan perubahan jadwal dan kebutuhan pelanggan tanpa mengorbankan standar kualitas.',
          en: 'Quickly responded to unexpected daily operational bottlenecks, adapting dynamically to shifting priorities while safeguarding product and service quality.',
        },
      },
    ],
    techStack: ['Communication', 'Team Coordination', 'Priority Management', 'Adaptability', 'Public Engagement'],
  },
];
