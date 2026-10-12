export const skillsData = {
  technicalCategories: [
    {
      id: 'languages',
      title: { id: 'Bahasa Pemrograman', en: 'Programming Languages' },
      items: [
        {
          name: 'JavaScript (ES6+)',
          level: 'Advanced',
          projects: ['webdamkar', 'portfolio', 'pos-kulu-asri'],
          icon: 'Code2',
        },
        {
          name: 'PHP',
          level: 'Proficient',
          projects: ['pos-kulu-asri', 'pos-bergegaz', 'ticketing_app'],
          icon: 'FileCode',
        },
        {
          name: 'Node.js',
          level: 'Advanced',
          projects: ['webdamkar'],
          icon: 'Server',
        },
        {
          name: 'Python',
          level: 'Exploratory & Academic',
          projects: ['face-tracker-cv', 'data-mining-eda'],
          icon: 'Binary',
        },
        {
          name: 'SQL',
          level: 'Proficient',
          projects: ['pos-kulu-asri', 'pos-bergegaz', 'ticketing_app'],
          icon: 'Database',
        },
        {
          name: 'HTML5 & CSS3',
          level: 'Advanced',
          projects: ['portfolio', 'pos-kulu-asri', 'webdamkar'],
          icon: 'Layout',
        },
      ],
    },
    {
      id: 'frontend',
      title: { id: 'Frontend Development', en: 'Frontend Development' },
      items: [
        {
          name: 'React.js',
          level: 'Proficient (React 19)',
          projects: ['webdamkar', 'portfolio'],
          icon: 'Atom',
        },
        {
          name: 'Tailwind CSS',
          level: 'Advanced (v3 & v4)',
          projects: ['pos-bergegaz', 'webdamkar', 'portfolio', 'ticketing_app'],
          icon: 'Palette',
        },
        {
          name: 'Bootstrap 5',
          level: 'Proficient',
          projects: ['pos-kulu-asri'],
          icon: 'Grid',
        },
        {
          name: 'Framer Motion',
          level: 'Proficient',
          projects: ['webdamkar', 'portfolio'],
          icon: 'Sparkles',
        },
        {
          name: 'Blade Templating',
          level: 'Proficient',
          projects: ['pos-kulu-asri', 'pos-bergegaz', 'ticketing_app'],
          icon: 'FileText',
        },
      ],
    },
    {
      id: 'backend',
      title: { id: 'Backend Development', en: 'Backend Development' },
      items: [
        {
          name: 'Laravel (12.x)',
          level: 'Proficient',
          projects: ['pos-kulu-asri', 'pos-bergegaz', 'ticketing_app'],
          icon: 'Cpu',
        },
        {
          name: 'Express.js',
          level: 'Proficient (Express 5)',
          projects: ['webdamkar'],
          icon: 'Terminal',
        },
        {
          name: 'RESTful API Architecture',
          level: 'Advanced',
          projects: ['webdamkar', 'pos-kulu-asri', 'pos-bergegaz'],
          icon: 'Network',
        },
        {
          name: 'Database Transactions & Locks',
          level: 'Proficient (lockForUpdate)',
          projects: ['pos-bergegaz', 'pos-kulu-asri'],
          icon: 'ShieldCheck',
        },
      ],
    },
    {
      id: 'database',
      title: { id: 'Database Management', en: 'Database Management' },
      items: [
        {
          name: 'MySQL',
          level: 'Proficient',
          projects: ['pos-kulu-asri', 'pos-bergegaz', 'ticketing_app'],
          icon: 'Database',
        },
        {
          name: 'MongoDB & Mongoose',
          level: 'Proficient',
          projects: ['webdamkar'],
          icon: 'FolderTree',
        },
        {
          name: 'Relational Schema Design & 3NF',
          level: 'Advanced',
          projects: ['pos-kulu-asri', 'pos-bergegaz', 'ticketing_app'],
          icon: 'Layers',
        },
      ],
    },
    {
      id: 'tools',
      title: { id: 'Tools & DevOps', en: 'Tools & DevOps' },
      items: [
        {
          name: 'Git & GitHub',
          level: 'Advanced',
          projects: ['pos-kulu-asri', 'pos-bergegaz', 'webdamkar', 'portfolio'],
          icon: 'GitBranch',
        },
        {
          name: 'PHPUnit Automated Testing',
          level: 'Proficient (21 Tests / 76 Assertions)',
          projects: ['pos-bergegaz'],
          icon: 'CheckCircle2',
        },
        {
          name: 'Vite',
          level: 'Proficient',
          projects: ['portfolio', 'webdamkar', 'pos-kulu-asri'],
          icon: 'Zap',
        },
        {
          name: 'Docker Fundamentals',
          level: 'Coursework Foundation',
          projects: [],
          icon: 'Container',
        },
      ],
    },
    {
      id: 'data-ai',
      title: { id: 'Data Analytics & AI (Exploring)', en: 'Data Analytics & AI (Exploring)' },
      items: [
        {
          name: 'Python for Data Analysis',
          level: 'Academic Focus',
          projects: ['data-mining-eda', 'face-tracker-cv'],
          icon: 'Binary',
        },
        {
          name: 'Pandas & NumPy',
          level: 'Academic Focus',
          projects: ['data-mining-eda'],
          icon: 'Table2',
        },
        {
          name: 'Data Cleaning & Preprocessing',
          level: 'Academic Focus',
          projects: ['data-mining-eda', 'face-tracker-cv'],
          icon: 'Filter',
        },
        {
          name: 'Computer Vision & Data Augmentation',
          level: 'Academic Research',
          projects: ['face-tracker-cv'],
          icon: 'ScanFace',
        },
      ],
    },
  ],
  softSkills: [
    {
      id: 'comm',
      title: { id: 'Communication', en: 'Communication' },
      desc: {
        id: 'Menyampaikan gagasan teknis secara jelas kepada rekan tim dan menyelaraskan kebutuhan pengguna non-teknis.',
        en: 'Articulating technical concepts clearly to peers and translating business needs into clean requirements.',
      },
      source: { id: 'Dikala Kopi & Diskominfo', en: 'Dikala Kopi & Diskominfo' },
    },
    {
      id: 'public-speaking',
      title: { id: 'Public Speaking', en: 'Public Speaking' },
      desc: {
        id: 'Percaya diri dalam berinteraksi, memaparkan demo proyek, dan berkoordinasi dalam pertemuan kerja tim.',
        en: 'Poised interaction, clear project demos, and assertive communication in collaborative discussions.',
      },
      source: { id: 'Dikala Kopi & Presentasi Akademik', en: 'Dikala Kopi & Academic Demos' },
    },
    {
      id: 'teamwork',
      title: { id: 'Teamwork & Collaboration', en: 'Teamwork & Collaboration' },
      desc: {
        id: 'Terbiasa bekerja secara sinergis, mendukung rekan satu tim, dan aktif berkolaborasi via Git.',
        en: 'Working synchronously in sprint rhythms, supporting team members, and collaborating via Git.',
      },
      source: { id: 'Diskominfo & Dikala Kopi Group', en: 'Diskominfo & Dikala Kopi Group' },
    },
    {
      id: 'pressure',
      title: { id: 'Working Under Pressure', en: 'Working Under Pressure' },
      desc: {
        id: 'Tetap tenang, berkepala dingin, dan memprioritaskan penyelesaian tugas saat menghadapi tenggat waktu atau lonjakan kerja.',
        en: 'Maintaining mental composure, accuracy, and clear triage during operational peak rush hours and tight deadlines.',
      },
      source: { id: 'Dikala Kopi (Operational Peak Hours)', en: 'Dikala Kopi (Peak Rush Hours)' },
    },
    {
      id: 'problem-solving',
      title: { id: 'Problem Solving', en: 'Problem Solving' },
      desc: {
        id: 'Menganalisis akar masalah secara sistematis dan mencari solusi yang efisien tanpa menambah kompleksitas yang tidak perlu.',
        en: 'Locating root causes systematically and crafting lean, effective solutions without unnecessary complexity.',
      },
      source: { id: 'Debugging Software & Operasional Riil', en: 'Software Debugging & Operations' },
    },
    {
      id: 'adaptability',
      title: { id: 'Adaptability & Learning', en: 'Adaptability & Learning' },
      desc: {
        id: 'Cepat beradaptasi dengan stack baru, lingkungan kerja yang dinamis, serta tekun mempelajari bidang baru.',
        en: 'Rapidly embracing new frameworks, adapting to shifting priorities, and consistently studying modern tech stacks.',
      },
      source: { id: 'Eksplorasi Mandiri & Akademik', en: 'Independent & Academic Studies' },
    },
  ],
};
