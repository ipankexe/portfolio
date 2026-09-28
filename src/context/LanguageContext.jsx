import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const translations = {
  id: {
    langName: 'Bahasa Indonesia',
    shortCode: 'ID',
    // Navbar
    nav: {
      home: 'Beranda',
      about: 'Tentang',
      skills: 'Keahlian',
      dataMl: 'Data & ML',
      projects: 'Proyek',
      experience: 'Pengalaman',
      education: 'Pendidikan',
      cv: 'CV',
      contact: 'Kontak',
      quickSearch: 'Cari Cepat',
      searchPrompt: 'Cari perintah & proyek...',
      downloadCv: 'Unduh CV (PDF)',
      toggleLanguage: 'Ganti Bahasa (English / ID)'
    },
    // Hero
    hero: {
      statusBadge: 'Terbuka untuk Peluang Kerja Entry-Level',
      greeting: "Halo, Saya Muhammad Irfan Setiawan",
      role: 'Lulusan Teknik Informatika (S.Kom) • Calon Software Engineer • Web Developer • Data & ML Enthusiast',
      description: 'Lulusan Teknik Informatika dari Universitas Dian Nuswantoro (UDINUS) dengan pengalaman langsung membangun aplikasi web dan sistem informasi. Tertarik pada rekayasa perangkat lunak, web development, analisis data, machine learning, dan teknologi modern.',
      ctaExplore: 'Jelajahi Proyek',
      ctaContact: 'Hubungi Saya',
      ctaCommandMenu: 'Buka Spotlight (Ctrl+K)',
      tabProfile: 'Profil Singkat',
      tabTerminal: 'Terminal Interaktif',
      tabSnapshot: 'Snapshot Tech',
      terminalTitle: 'irfan-os — Simulator CLI Pengembang',
      terminalHint: 'Ketik "help" atau klik salah satu perintah di bawah:',
      cmdHelp: 'help',
      cmdProjects: 'projects',
      cmdStack: 'stack',
      cmdEducation: 'education',
      cmdContact: 'contact',
      cmdClear: 'clear',
      cardStatusTitle: 'Status Ketersediaan',
      cardStatusVal: 'Siap Bergabung Segera',
      cardDegreeTitle: 'Gelar & Almamater',
      cardDegreeVal: 'S.Kom — UDINUS Semarang',
      cardLocationTitle: 'Lokasi & Preferensi',
      cardLocationVal: 'Semarang (Siap Relokasi ke Jakarta / Remote)'
    },
    // QuickStats
    stats: {
      projectsLabel: 'Proyek Inti',
      projectsDesc: 'Sistem Web Produksi & Akademik',
      degreeLabel: 'Pendidikan',
      degreeDesc: 'S1 Teknik Informatika UDINUS (S.Kom)',
      techLabel: 'Tech Stack',
      techDesc: 'Full-Stack, Basis Data & Cloud Tools',
      govLabel: 'Proyek Pemerintah',
      govDesc: 'Portal Pemadam Kebakaran Diskominfo & GIS'
    },
    // About
    about: {
      badge: 'Mengenal Lebih Dekat',
      title: 'Rekayasa Perangkat Lunak & Fondasi Data',
      subtitle: 'Latar belakang pendidikan, keahlian teknis, dan komitmen profesional saya dalam membangun solusi digital yang bermanfaat.',
      bento1Badge: 'Latar Belakang & Profil',
      bento1P1: 'Saya lulusan Teknik Informatika dari Universitas Dian Nuswantoro (UDINUS) dengan ketertarikan tinggi pada pengembangan perangkat lunak, teknologi web, analisis data, machine learning, IT operations, jaringan, dan keamanan siber.',
      bento1P2: 'Sepanjang perjalanan kuliah, saya aktif merancang serta membangun proyek perangkat lunak dan sistem informasi nyata. Saya terbiasa dengan teknologi web, basis data relasional/dokumen, backend API, dan workflow development modern.',
      bento1P3: 'Saya juga memiliki pemahaman dasar dan minat kuat pada analisis data serta machine learning, meliputi penyiapan dataset, pembersihan data, dan eksplorasi algoritma prediktif.',
      bento2Badge: 'Ketersediaan Karier',
      bento2Title: 'Posisi yang Sedang Dicari',
      bento2RoleLabel: 'Peran Sasaran:',
      bento2RoleVal: 'Entry-Level Software Engineer / Web Developer / Data & IT Roles',
      bento2AvailLabel: 'Ketersediaan:',
      bento2AvailVal: 'Segera / Full-Time',
      bento2WorkLabel: 'Preferensi Lokasi:',
      bento2WorkVal: 'On-site (Semarang / Jakarta) / Hybrid / Remote',
      bento3Badge: 'Fokus & Spesialisasi',
      bento3Title: 'Kemampuan Rekayasa Utama',
      spec1Title: 'Pengembangan Web Full-Stack',
      spec1Desc: 'Membangun aplikasi web modular menggunakan Laravel, React.js, PHP, dan Tailwind CSS.',
      spec2Title: 'Backend API & Basis Data',
      spec2Desc: 'Merancang REST API terstruktur menggunakan Node.js/Express, MySQL, dan MongoDB.',
      spec3Title: 'Fondasi Data & Machine Learning',
      spec3Desc: 'Pembersihan data, analisis eksploratif (EDA), visualisasi, dan konsep dasar ML.',
      spec4Title: 'Infrastruktur & Jaringan IT',
      spec4Desc: 'Linux Server, replikasi klaster database MySQL, dan sertifikasi Cisco Cybersecurity Essentials.',
      bento4Badge: 'Nilai Kerja',
      bento4Title: 'Prinsip Rekayasa Saya',
      val1Title: 'Kode Bersih & Terstruktur',
      val1Desc: 'Menulis kode yang mudah dipelihara, berstandar industri, dan terdokumentasi rapi.',
      val2Title: 'Pengujian & Ketepatan Logika',
      val2Desc: 'Menerapkan pengujian Black-box dan validasi menyeluruh pada alur transaksi kritis.',
      val3Title: 'Pembelajar Adaptif',
      val3Desc: 'Cepat beradaptasi dengan stack baru dan aktif memperdalam kapabilitas teknis terkini.'
    },
    // Skills
    skills: {
      badge: 'Keahlian Teknis',
      title: 'Tech Stack & Matriks Kompetensi',
      subtitle: 'Teknologi, bahasa pemrograman, basis data, dan peralatan yang telah saya kuasai dan implementasikan pada proyek nyata.',
      filterAll: 'Semua Kategori',
      filterWeb: 'Web & Frontend',
      filterBackend: 'Backend & Basis Data',
      filterDataMl: 'Data & ML',
      filterIt: 'IT & Jaringan',
      filterTools: 'Tools & Workflow',
      levelAdvanced: 'Tingkat Lanjut',
      levelIntermediate: 'Menengah',
      levelFamiliar: 'Dasar / Familiar'
    },
    // Data & ML
    dataMl: {
      badge: 'Studio Data & AI',
      title: 'Eksplorasi Data & Machine Learning',
      subtitle: 'Kemampuan analitik terapan: alur pembersihan data (data pipeline) dan simulator interaktif evaluasi model machine learning.',
      tabPipeline: 'Alur Pembersihan Data',
      tabMatrix: 'Kalkulator Matriks Konfusi',
      step1Title: '1. Dataset Mentah & Imputasi Missing Values',
      step1Desc: 'Mendeteksi nilai yang hilang (null) dan menerapkan imputasi median/modus atau penghapusan terukur.',
      step2Title: '2. Deteksi & Penanganan Outlier (IQR / Z-Score)',
      step2Desc: 'Mengidentifikasi pencilan ekstrem menggunakan batas interkuartil agar tidak membiaskan bobot model.',
      step3Title: '3. Normalisasi & Penskalaan Fitur',
      step3Desc: 'Standarisasi rentang numerik dengan Min-Max Scaling atau Standard Scaler untuk konvergensi algoritma.',
      step4Title: '4. Encoding Variabel Kategorikal',
      step4Desc: 'Menerapkan One-Hot Encoding atau Label Encoding agar data kategorikal siap diproses model.',
      matrixHeading: 'Evaluasi Model Klasifikasi Interaktif',
      matrixDesc: 'Sesuaikan parameter True Positive (TP), False Positive (FP), True Negative (TN), dan False Negative (FN) untuk melihat metrik secara langsung:',
      tpLabel: 'True Positive (TP)',
      fpLabel: 'False Positive (FP)',
      fnLabel: 'False Negative (FN)',
      tnLabel: 'True Negative (TN)',
      metricAccuracy: 'Akurasi (Accuracy)',
      metricPrecision: 'Presisi (Precision)',
      metricRecall: 'Recall (Sensitivitas)',
      metricF1: 'Skor F1 (F1-Score)',
      presetBalanced: 'Dataset Seimbang',
      presetImbalanced: 'Kasus Medis / Penipuan (Imbalanced)',
      resetDefaults: 'Atur Ulang'
    },
    // Projects
    projects: {
      badge: 'Portofolio Proyek',
      title: 'Proyek Rekayasa & Sistem Informasi',
      subtitle: 'Kumpulan sistem perangkat lunak yang telah saya bangun, mencakup proyek skripsi, proyek praktis pemerintah, dan sistem web interaktif.',
      searchPlaceholder: 'Cari proyek, teknologi (Laravel, React, MySQL, Node.js)...',
      categoryAll: 'Semua',
      btnCaseStudy: 'Lihat Studi Kasus Lengkap',
      btnCaseStudyCard: 'Studi Kasus',
      btnGithub: 'Repositori GitHub',
      btnDemo: 'Demo Langsung',
      btnStudyPage: 'Halaman Detail Lengkap',
      modalProblem: 'Masalah & Latar Belakang',
      modalWorkflow: 'Alur Kerja Lama (Sebelum Sistem)',
      modalSolution: 'Solusi Rekayasa yang Diterapkan',
      modalMethodology: 'Metodologi Pengembangan',
      modalTesting: 'Pengujian & Verifikasi Sistem',
      modalArchitecture: 'Arsitektur & Aliran Data Sistem',
      modalFeatures: 'Fitur Utama & Implementasi',
      modalTech: 'Teknologi & Pustaka',
      modalResult: 'Dampak & Hasil Akhir',
      closeModal: 'Tutup',
      backToAll: 'Kembali ke Semua Proyek',
      ctaTitle: 'Tertarik dengan Arsitektur Proyek Ini?',
      ctaSubtitle: 'Mari diskusikan bagaimana prinsip rekayasa ini dapat diterapkan pada kebutuhan tim Anda.'
    },
    // Experience
    experience: {
      badge: 'Rekam Jejak',
      title: 'Pengalaman Praktis & Kerja',
      subtitle: 'Keterlibatan langsung dalam proyek pengembangan sistem pemerintahan serta pengalaman operasional dunia kerja.',
      periodPresent: 'Sekarang',
      roleIntern: 'Proyek Praktis / Web Development',
      roleOps: 'Dukungan Operasional',
      badgeGov: 'Proyek Pemerintah (Diskominfo)',
      badgeOps: 'Operasional & Layanan Pelanggan'
    },
    // Education
    education: {
      badge: 'Latar Belakang Akademik',
      title: 'Pendidikan & Skripsi Sarjana',
      subtitle: 'Gelar Sarjana Komputer (S.Kom) dari Program Studi Teknik Informatika, Universitas Dian Nuswantoro.',
      degreeName: 'Sarjana Komputer (S.Kom) — Teknik Informatika',
      universityName: 'Universitas Dian Nuswantoro (UDINUS)',
      thesisBadge: 'Judul Skripsi / Tugas Akhir',
      thesisTitle: 'Perancangan Sistem Point of Sales berbasis Web pada Rumah Makan Kulu Asri Menggunakan Metode Waterfall',
      thesisDesc: 'Meneliti dan mengembangkan sistem POS berbasis web menggunakan Laravel & MySQL untuk mendigitalkan pesanan meja, sinkronisasi stok otomatis, dan otorisasi void transaksi guna mencegah kerugian keuangan.',
      competenciesBadge: 'Fokus Kompetensi Akademik',
      statusGraduated: 'Lulus'
    },
    // Certifications
    certifications: {
      badge: 'Lisensi & Kredensial',
      title: 'Sertifikasi Resmi',
      subtitle: 'Kredensial terverifikasi yang mendukung standar kompetensi keamanan siber dan jaringan.',
      verifiedBadge: 'Terverifikasi',
      viewCert: 'Lihat Kredensial Resmi',
      certCiscoTitle: 'Cisco Cybersecurity Essentials',
      certCiscoIssuer: 'Cisco Networking Academy',
      certCiscoDesc: 'Mencakup prinsip keamanan informasi, analisis ancaman siber, kontrol akses jaringan, kriptografi dasar, dan mitigasi kerentanan.'
    },
    // Resume (CV)
    resume: {
      badge: 'Curriculum Vitae',
      title: 'Resume Digital Interaktif',
      subtitle: 'Struktur resume standar ATS dan terverifikasi untuk hiring manager, recruiter, dan engineering lead.',
      verifiedATS: 'Format Terverifikasi & ATS-Compliant',
      btnCopySummary: 'Salin Ringkasan Profil',
      btnSummaryCopied: 'Ringkasan Disalin ✓',
      btnDownloadPdf: 'Unduh PDF',
      btnOpenPdf: 'Buka PDF di Tab Baru',
      btnPrint: 'Cetak Dokumen',
      cvHeaderDegree: 'S.Kom — UDINUS',
      secSummary: 'Ringkasan Profesional',
      secSkills: 'Kompetensi Teknis Inti',
      secEducation: 'Pendidikan',
      secExperience: 'Pengalaman Praktis',
      secProjects: 'Proyek Unggulan'
    },
    // CareerGoal
    careerGoal: {
      badge: 'Visi Karier',
      title: 'Tujuan Profesional',
      subtitle: 'Arah jangka pendek dan jangka panjang dalam berkarier di industri teknologi perangkat lunak.',
      shortTermTitle: 'Sasaran Jangka Pendek (Tahun 1-2)',
      shortTermDesc: 'Memulai karier sebagai Entry-Level Software Engineer atau Full-Stack Web Developer di tim yang solid, berkontribusi aktif dalam penulisan kode berkualitas, dan memperdalam pemahaman best practice arsitektur sistem.',
      longTermTitle: 'Visi Jangka Panjang (Tahun 3-5+)',
      longTermDesc: 'Berkembang menjadi Mid/Senior Engineer dengan keahlian mendalam pada sistem berskala besar (high-availability), integrasi machine learning pada layanan digital, serta kepemimpinan teknis.',
      coreValuesTitle: 'Nilai-Nilai Utama Saya',
      value1: 'Integritas & Kualitas Kode',
      value2: 'Komunikasi & Kolaborasi Terbuka',
      value3: 'Ketekunan Belajar Berkelanjutan'
    },
    // Contact
    contact: {
      badge: 'Hubungi Saya',
      title: 'Mari Bangun Solusi Bersama',
      subtitle: 'Terbuka untuk lowongan software engineering entry-level, kolaborasi proyek teknologi, atau sekadar berdiskusi santai.',
      channelsTitle: 'Saluran Kontak Langsung',
      channelsDesc: 'Jika Anda memiliki lowongan kerja, peluang magang/kolaborasi, atau pertanyaan seputar proyek saya, jangan ragu untuk menghubungi.',
      directEmailTitle: 'Email Langsung',
      directWaTitle: 'WhatsApp & Telepon',
      fastResponseBadge: 'Respons Cepat',
      btnChatWa: 'Chat WA',
      btnCopyWa: 'Salin No. WA',
      btnCopyEmail: 'Salin Email',
      responseTimeText: 'Biasanya merespons dalam waktu 24 jam',
      locationTitle: 'Semarang, Jawa Tengah, Indonesia',
      locationDesc: 'Terbuka untuk Relokasi (Jakarta, dll.) & Kerja Remote',
      socialsTitle: 'Profil Profesional & Media Sosial',
      formTitle: 'Kirim Pesan Langsung',
      formDesc: 'Isi formulir di bawah ini. Pesan akan disiapkan secara otomatis di aplikasi email bawaan Anda.',
      labelName: 'Nama Lengkap',
      placeholderName: 'Contoh: Budi Santoso',
      labelEmail: 'Alamat Email Anda',
      placeholderEmail: 'Contoh: budi@company.com',
      labelMessage: 'Pesan',
      placeholderMessage: 'Halo Irfan, saya ingin berdiskusi mengenai peluang...',
      charsCount: 'karakter',
      btnSend: 'Kirim Pesan Sekarang',
      btnSending: 'Menyiapkan Email...',
      errName: 'Mohon isi nama Anda',
      errEmail: 'Mohon isi alamat email yang valid',
      errMessage: 'Pesan minimal terdiri dari 10 karakter',
      successMessage: 'Membuka klien email Anda untuk mengirim pesan. Terima kasih!',
      toastCopiedEmail: 'Email berhasil disalin ke clipboard ✓',
      toastCopiedPhone: 'Nomor WhatsApp berhasil disalin ke clipboard ✓'
    },
    // Footer
    footer: {
      tagline: 'Lulusan Teknik Informatika yang berfokus pada rekayasa perangkat lunak, full-stack web development, dan implementasi fondasi analisis data & machine learning.',
      navHeading: 'Navigasi Halaman',
      docsHeading: 'Dokumentasi',
      backToTop: 'Kembali ke atas',
      allRightsReserved: 'Hak cipta dilindungi undang-undang.',
      builtWith: 'Dirancang & Dibangun dengan React, Tailwind CSS & Framer Motion'
    },
    // CommandMenu
    command: {
      searchPlaceholder: 'Ketik perintah atau cari (contoh: proyek, skills, whatsapp)...',
      noResults: 'Tidak ada perintah atau item yang sesuai.',
      sectionNav: 'Navigasi Cepat',
      sectionProjects: 'Proyek Rekayasa',
      sectionActions: 'Aksi Cepat',
      sectionExternal: 'Tautan & Kontak Eksternal',
      toggleLangToEn: 'Switch Language to English (EN)',
      toggleLangToId: 'Ganti ke Bahasa Indonesia (ID)',
      openWhatsapp: 'Buka Obrolan WhatsApp',
      copyWhatsapp: 'Salin Nomor WhatsApp',
      copyEmail: 'Salin Alamat Email',
      downloadCv: 'Unduh Curriculum Vitae (PDF)',
      themeLight: 'Ganti ke Mode Terang (Light Mode)',
      themeDark: 'Ganti ke Mode Gelap (Dark Mode)',
      hintNavigate: 'Gunakan ↑ ↓ untuk navigasi, Enter untuk memilih, Esc untuk keluar'
    }
  },

  en: {
    langName: 'English',
    shortCode: 'EN',
    // Navbar
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      dataMl: 'Data & ML',
      projects: 'Projects',
      experience: 'Experience',
      education: 'Education',
      cv: 'CV',
      contact: 'Contact',
      quickSearch: 'Quick Search',
      searchPrompt: 'Search commands & projects...',
      downloadCv: 'Download CV (PDF)',
      toggleLanguage: 'Switch Language (Indonesian / EN)'
    },
    // Hero
    hero: {
      statusBadge: 'Open to Entry-Level Opportunities',
      greeting: "Hi, I'm Muhammad Irfan Setiawan",
      role: 'Informatics Engineering Graduate (S.Kom) • Aspiring Software Engineer • Web Developer • Data & ML Enthusiast',
      description: 'Informatics Engineering graduate from Universitas Dian Nuswantoro (UDINUS) with hands-on experience developing web applications and practical systems. Passionate about software engineering, full-stack web development, data analysis, and machine learning.',
      ctaExplore: 'Explore Projects',
      ctaContact: 'Get in Touch',
      ctaCommandMenu: 'Open Spotlight (Ctrl+K)',
      tabProfile: 'Quick Profile',
      tabTerminal: 'Interactive Terminal',
      tabSnapshot: 'Tech Snapshot',
      terminalTitle: 'irfan-os — Developer CLI Simulator',
      terminalHint: 'Type "help" or click one of the quick commands below:',
      cmdHelp: 'help',
      cmdProjects: 'projects',
      cmdStack: 'stack',
      cmdEducation: 'education',
      cmdContact: 'contact',
      cmdClear: 'clear',
      cardStatusTitle: 'Availability Status',
      cardStatusVal: 'Available for Immediate Start',
      cardDegreeTitle: 'Degree & University',
      cardDegreeVal: 'B.Sc. in Computer Science — UDINUS',
      cardLocationTitle: 'Location & Work Preference',
      cardLocationVal: 'Semarang (Open to Relocation to Jakarta / Remote)'
    },
    // QuickStats
    stats: {
      projectsLabel: 'Core Projects',
      projectsDesc: 'Production & Academic Web Systems',
      degreeLabel: 'Education',
      degreeDesc: 'S1 Informatics UDINUS (S.Kom)',
      techLabel: 'Tech Stack',
      techDesc: 'Full-Stack, Databases & Cloud Tools',
      govLabel: 'Municipal Project',
      govDesc: 'Diskominfo Fire Department & GIS Portal'
    },
    // About
    about: {
      badge: 'Get to Know Me',
      title: 'Software Engineering & Data Foundations',
      subtitle: 'My academic journey, technical capabilities, and engineering commitment to building impactful digital solutions.',
      bento1Badge: 'Background & Profile',
      bento1P1: "I'm an Informatics Engineering graduate from Universitas Dian Nuswantoro (UDINUS) with a keen interest in software engineering, web technologies, data analysis, machine learning, IT operations, networking, and cybersecurity.",
      bento1P2: 'Throughout my academic journey, I actively designed and built practical software applications and information systems. I am well-versed in modern web stacks, relational and document databases, backend APIs, and developer workflows.',
      bento1P3: 'I also have a solid foundational capability and growing passion in data analysis and machine learning, including data cleaning, exploratory data analysis, and predictive modeling concepts.',
      bento2Badge: 'Career Availability',
      bento2Title: 'Currently Looking For',
      bento2RoleLabel: 'Target Roles:',
      bento2RoleVal: 'Entry-Level Software Engineer / Web Developer / Data & IT Roles',
      bento2AvailLabel: 'Availability:',
      bento2AvailVal: 'Immediate / Full-Time',
      bento2WorkLabel: 'Work Preference:',
      bento2WorkVal: 'On-site (Semarang / Jakarta) / Hybrid / Remote',
      bento3Badge: 'Specialties & Focus',
      bento3Title: 'Core Engineering Competencies',
      spec1Title: 'Full-Stack Web Development',
      spec1Desc: 'Building modular web applications using Laravel, React.js, PHP, and Tailwind CSS.',
      spec2Title: 'Backend APIs & Databases',
      spec2Desc: 'Designing structured REST APIs with Node.js/Express, MySQL, and MongoDB.',
      spec3Title: 'Data & Machine Learning Foundations',
      spec3Desc: 'Data cleaning, exploratory data analysis (EDA), visualization, and ML concepts.',
      spec4Title: 'IT Infrastructure & Networking',
      spec4Desc: 'Linux Server administration, MySQL high-availability clustering, and Cisco Cybersecurity Essentials.',
      bento4Badge: 'Working Principles',
      bento4Title: 'My Engineering Philosophy',
      val1Title: 'Clean & Structured Code',
      val1Desc: 'Writing maintainable, industry-standard code with clean comments and documentation.',
      val2Title: 'Rigorous Testing & Logic',
      val2Desc: 'Applying black-box testing and transactional safeguards for critical business workflows.',
      val3Title: 'Adaptive Lifelong Learner',
      val3Desc: 'Quick to adopt new technologies, framework updates, and evolving engineering practices.'
    },
    // Skills
    skills: {
      badge: 'Technical Expertise',
      title: 'Tech Stack & Competency Matrix',
      subtitle: 'Technologies, programming languages, databases, and developer tools applied across real-world projects.',
      filterAll: 'All Categories',
      filterWeb: 'Web & Frontend',
      filterBackend: 'Backend & Databases',
      filterDataMl: 'Data & ML',
      filterIt: 'IT & Networking',
      filterTools: 'Tools & Workflow',
      levelAdvanced: 'Advanced',
      levelIntermediate: 'Intermediate',
      levelFamiliar: 'Familiar / Foundation'
    },
    // Data & ML
    dataMl: {
      badge: 'Data & AI Studio',
      title: 'Data Exploration & Machine Learning',
      subtitle: 'Applied analytics: interactive data cleaning pipeline and live confusion matrix evaluator for classification models.',
      tabPipeline: 'Data Cleaning Pipeline',
      tabMatrix: 'Confusion Matrix Calculator',
      step1Title: '1. Raw Dataset & Missing Value Imputation',
      step1Desc: 'Detecting missing null records and applying targeted median/mode imputation or record filtering.',
      step2Title: '2. Outlier Detection & Handling (IQR / Z-Score)',
      step2Desc: 'Identifying extreme outliers using interquartile range thresholds to prevent model distortion.',
      step3Title: '3. Feature Normalization & Scaling',
      step3Desc: 'Standardizing numerical ranges with Min-Max Scaling or Standard Scaler for smooth gradient convergence.',
      step4Title: '4. Categorical Variable Encoding',
      step4Desc: 'Transforming categorical features using One-Hot Encoding or Label Encoding for model ingestion.',
      matrixHeading: 'Interactive Classification Model Evaluator',
      matrixDesc: 'Tweak True Positives (TP), False Positives (FP), True Negatives (TN), and False Negatives (FN) to compute metrics live:',
      tpLabel: 'True Positive (TP)',
      fpLabel: 'False Positive (FP)',
      fnLabel: 'False Negative (FN)',
      tnLabel: 'True Negative (TN)',
      metricAccuracy: 'Accuracy',
      metricPrecision: 'Precision',
      metricRecall: 'Recall (Sensitivity)',
      metricF1: 'F1-Score',
      presetBalanced: 'Balanced Dataset',
      presetImbalanced: 'Imbalanced Medical / Fraud Case',
      resetDefaults: 'Reset Defaults'
    },
    // Projects
    projects: {
      badge: 'Featured Works',
      title: 'Engineering Projects & Information Systems',
      subtitle: 'Full-stack production applications, municipal government portals, and database infrastructure solutions.',
      searchPlaceholder: 'Search projects, technologies (Laravel, React, MySQL, Node.js)...',
      categoryAll: 'All',
      btnCaseStudy: 'View Full Case Study',
      btnCaseStudyCard: 'Case Study',
      btnGithub: 'GitHub Repository',
      btnDemo: 'Live Demo',
      btnStudyPage: 'Full Study Page',
      modalProblem: 'Problem & Background',
      modalWorkflow: 'Legacy Workflow (Before System)',
      modalSolution: 'Proposed Engineering Solution',
      modalMethodology: 'Development Methodology',
      modalTesting: 'Testing & Verification',
      modalArchitecture: 'System Architecture & Data Flow',
      modalFeatures: 'Core Features & Implementation',
      modalTech: 'Technologies & Libraries',
      modalResult: 'Outcomes & Business Impact',
      closeModal: 'Close',
      backToAll: 'Back to All Projects',
      ctaTitle: 'Interested in this project\'s architecture?',
      ctaSubtitle: 'Let\'s discuss how these technical principles can contribute to your engineering goals.'
    },
    // Experience
    experience: {
      badge: 'Track Record',
      title: 'Practical & Professional Experience',
      subtitle: 'Hands-on contributions to municipal government portals and fast-paced operational workflows.',
      periodPresent: 'Present',
      roleIntern: 'Practical Project / Web Development',
      roleOps: 'Operational Support',
      badgeGov: 'Government Project (Diskominfo)',
      badgeOps: 'Operations & Customer Service'
    },
    // Education
    education: {
      badge: 'Academic Foundation',
      title: 'Education & Bachelor Thesis',
      subtitle: 'Bachelor of Computer Science (S.Kom) in Informatics Engineering, Dian Nuswantoro University.',
      degreeName: 'Bachelor of Computer Science (S1) — Informatics Engineering',
      universityName: 'Universitas Dian Nuswantoro (UDINUS)',
      thesisBadge: 'Undergraduate Thesis Title',
      thesisTitle: 'Design and Development of Web-Based Point of Sales System at Rumah Makan Kulu Asri Using Waterfall Methodology',
      thesisDesc: 'Researched and built a web-based cashier POS system with Laravel & MySQL to eliminate physical paper slips, automate inventory deductions, and incorporate manager void authorizations.',
      competenciesBadge: 'Core Academic Competencies',
      statusGraduated: 'Graduated'
    },
    // Certifications
    certifications: {
      badge: 'Credentials & Badges',
      title: 'Official Certifications',
      subtitle: 'Verified credentials verifying industry-standard cybersecurity and network proficiency.',
      verifiedBadge: 'Verified',
      viewCert: 'View Official Credential',
      certCiscoTitle: 'Cisco Cybersecurity Essentials',
      certCiscoIssuer: 'Cisco Networking Academy',
      certCiscoDesc: 'Covering information security principles, threat analysis, access control mechanisms, cryptography basics, and vulnerability mitigation.'
    },
    // Resume (CV)
    resume: {
      badge: 'Curriculum Vitae',
      title: 'Interactive Digital CV',
      subtitle: 'ATS-compliant, structured digital resume curated for engineering leads, recruiters, and technical hiring managers.',
      verifiedATS: 'Verified & ATS-Compliant Format',
      btnCopySummary: 'Copy Profile Summary',
      btnSummaryCopied: 'Summary Copied ✓',
      btnDownloadPdf: 'Download PDF',
      btnOpenPdf: 'Open PDF in New Tab',
      btnPrint: 'Print Document',
      cvHeaderDegree: 'S.Kom — UDINUS',
      secSummary: 'Professional Summary',
      secSkills: 'Core Technical Competencies',
      secEducation: 'Education',
      secExperience: 'Practical Experience',
      secProjects: 'Key Technical Projects'
    },
    // CareerGoal
    careerGoal: {
      badge: 'Career Vision',
      title: 'Professional Goals',
      subtitle: 'Short-term and long-term milestones in building an impactful software engineering career.',
      shortTermTitle: 'Short-Term Target (Years 1-2)',
      shortTermDesc: 'Kickstart my career as an Entry-Level Software Engineer or Full-Stack Web Developer within a strong team, contributing clean code, writing tests, and mastering architectural best practices.',
      longTermTitle: 'Long-Term Vision (Years 3-5+)',
      longTermDesc: 'Grow into a Mid/Senior Engineer with specialized expertise in high-availability database architectures, seamless machine learning integrations, and technical mentorship.',
      coreValuesTitle: 'My Core Professional Values',
      value1: 'Integrity & Code Quality',
      value2: 'Clear & Open Collaboration',
      value3: 'Relentless Curiosity & Learning'
    },
    // Contact
    contact: {
      badge: 'Get in Touch',
      title: "Let's Build Something Impactful",
      subtitle: 'Currently open to entry-level software engineering openings, collaborative technology projects, or technical conversations.',
      channelsTitle: 'Direct Contact Channels',
      channelsDesc: 'Whether you have a job opening, a collaborative project idea, or simply want to connect, feel free to reach out.',
      directEmailTitle: 'Direct Email',
      directWaTitle: 'WhatsApp & Phone',
      fastResponseBadge: 'Fast Response',
      btnChatWa: 'Chat WA',
      btnCopyWa: 'Copy WA No.',
      btnCopyEmail: 'Copy Email',
      responseTimeText: 'Usually responds within 24 hours',
      locationTitle: 'Semarang, Central Java, Indonesia',
      locationDesc: 'Open to Relocation (Jakarta, etc.) & Remote',
      socialsTitle: 'Professional Profiles & Socials',
      formTitle: 'Send a Direct Message',
      formDesc: 'Fill in your inquiry details below. The message will prepare your default email client with pre-filled fields.',
      labelName: 'Your Name',
      placeholderName: 'e.g. Alex Pratama',
      labelEmail: 'Your Email Address',
      placeholderEmail: 'e.g. alex@company.com',
      labelMessage: 'Message',
      placeholderMessage: 'Hello Irfan, I would like to discuss an opportunity...',
      charsCount: 'chars',
      btnSend: 'Send Message',
      btnSending: 'Preparing Email...',
      errName: 'Please provide your name',
      errEmail: 'Please provide a valid email format',
      errMessage: 'Message must be at least 10 characters',
      successMessage: 'Opening your default mail client to send inquiry. Thank you!',
      toastCopiedEmail: 'Email copied to clipboard ✓',
      toastCopiedPhone: 'WhatsApp number copied to clipboard ✓'
    },
    // Footer
    footer: {
      tagline: 'Informatics Engineering graduate focused on software engineering, full-stack web development, and emerging data analysis & machine learning applications.',
      navHeading: 'Navigation',
      docsHeading: 'Documentation',
      backToTop: 'Back to top',
      allRightsReserved: 'All rights reserved.',
      builtWith: 'Designed & Built with React, Tailwind CSS & Framer Motion'
    },
    // CommandMenu
    command: {
      searchPlaceholder: 'Type a command or search (e.g. projects, skills, whatsapp)...',
      noResults: 'No commands or items found.',
      sectionNav: 'Navigation',
      sectionProjects: 'Projects',
      sectionActions: 'Actions',
      sectionExternal: 'External Links & Channels',
      toggleLangToEn: 'Switch Language to English (EN)',
      toggleLangToId: 'Ganti ke Bahasa Indonesia (ID)',
      openWhatsapp: 'Open WhatsApp Chat',
      copyWhatsapp: 'Copy WhatsApp Number',
      copyEmail: 'Copy Email Address',
      downloadCv: 'Download Curriculum Vitae (PDF)',
      themeLight: 'Switch to Light Mode',
      themeDark: 'Switch to Dark Mode',
      hintNavigate: 'Use ↑ ↓ to navigate, Enter to select, Esc to close'
    }
  }
};

export function LanguageProvider({ children }) {
  // Check localStorage or default to 'id'
  const [language, setLanguageState] = useState(() => {
    try {
      const saved = localStorage.getItem('portfolio_language');
      if (saved === 'en' || saved === 'id') return saved;
      // Default to Indonesian
      return 'id';
    } catch {
      return 'id';
    }
  });

  const setLanguage = (lang) => {
    if (lang === 'id' || lang === 'en') {
      setLanguageState(lang);
      try {
        localStorage.setItem('portfolio_language', lang);
      } catch (e) {
        console.error('Failed to save language to localStorage:', e);
      }
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'id' ? 'en' : 'id');
  };

  // Helper function to get translation by key path, e.g. t('nav.home')
  const t = (path, fallback = '') => {
    const keys = path.split('.');
    let result = translations[language];
    for (const k of keys) {
      if (result && typeof result === 'object' && k in result) {
        result = result[k];
      } else {
        // Fallback to English if missing in current language
        let fallbackResult = translations['en'];
        for (const fk of keys) {
          if (fallbackResult && typeof fallbackResult === 'object' && fk in fallbackResult) {
            fallbackResult = fallbackResult[fk];
          } else {
            return fallback || path;
          }
        }
        return fallbackResult || fallback || path;
      }
    }
    return result || fallback || path;
  };

  // Synchronize document lang attribute
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
