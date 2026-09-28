import React, { useState } from 'react';
import { FileDown, ExternalLink, Printer, Copy, Check } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { personalInfo } from '../../data/personalInfo';
import { useLanguage } from '../../context/LanguageContext';

export function Resume() {
  const { language, t } = useLanguage();
  const [copiedSummary, setCopiedSummary] = useState(false);
  const cvPath = `${personalInfo.cvDocumentPath}?v=real-cv`;

  const handlePrint = () => {
    window.print();
  };

  const handleCopySummary = () => {
    const text = `MUHAMMAD IRFAN SETIAWAN
+62 857-9947-9834 | ${personalInfo.email} | linkedin.com/in/irfanswettiawan | github.com/ipankexe | Semarang, Indonesia

SUMMARY:
Informatics Engineering graduate from Dian Nuswantoro University (UDINUS) with hands-on experience in full-stack web development through internship and independent software projects. Experienced in building web applications using Laravel, React.js, Express.js, MySQL, and MongoDB, including REST API integration, role-based access control, transaction processing, and database-driven systems. Also developing skills in Python, data analytics, and machine learning for data-driven problem solving. Seeking an entry-level Software Engineer, Full-Stack Developer, Backend Developer, or Data-related role where I can contribute and continue developing my technical expertise.`;

    navigator.clipboard?.writeText(text);
    setCopiedSummary(true);
    setTimeout(() => setCopiedSummary(false), 2500);
  };

  return (
    <section id="cv" className="py-20 lg:py-28 relative" aria-label="Curriculum Vitae and Digital Resume">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={t('resume.badge', 'Curriculum Vitae')}
          title={t('resume.title', 'Interactive Digital CV')}
          subtitle={t('resume.subtitle', 'Comprehensive digital resume structured for engineering hiring managers, recruiters, and technical leads.')}
        />

        {/* Top Controls / Action Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 p-4 rounded-2xl bg-white/90 dark:bg-[#0c1220]/90 backdrop-blur-xl border border-slate-200/90 dark:border-slate-800/90 shadow-sm">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
              {t('resume.verifiedATS', 'Verified & ATS-Compliant Structure')}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 w-full sm:w-auto">
            {/* Copy Summary */}
            <button
              type="button"
              onClick={handleCopySummary}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300 hover:border-blue-400 cursor-pointer transition-colors"
            >
              {copiedSummary ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
              <span>{copiedSummary ? t('resume.btnSummaryCopied', 'Summary Copied') : t('resume.btnCopySummary', 'Copy Summary')}</span>
            </button>

            {/* Download Button */}
            <Button
              as="a"
              href={cvPath}
              download="Muhammad-Irfan-Setiawan-CV.pdf"
              variant="primary"
              size="sm"
              icon={FileDown}
              className="flex-1 sm:flex-initial text-xs cursor-pointer shadow-xs"
            >
              {t('resume.btnDownloadPdf', 'Download PDF')}
            </Button>

            {/* View CV in new tab */}
            <Button
              as="a"
              href={cvPath}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              size="sm"
              icon={ExternalLink}
              className="flex-1 sm:flex-initial text-xs cursor-pointer"
            >
              {t('resume.btnOpenPdf', 'Open PDF')}
            </Button>

            {/* Print Friendly */}
            <button
              onClick={handlePrint}
              type="button"
              aria-label="Print resume"
              title="Print resume"
              className="hidden md:inline-flex p-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
            >
              <Printer className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* CV Paper Preview Container */}
        <div className="bg-white/95 dark:bg-[#0c1220]/95 backdrop-blur-xl border border-slate-200/90 dark:border-slate-800/90 rounded-3xl shadow-xl p-6 sm:p-10 lg:p-12 text-slate-800 dark:text-slate-200 space-y-8 font-sans transition-colors">
          
          {/* Header Block */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight font-display">
                  Muhammad Irfan Setiawan
                </h1>
                <p className="text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400 mt-1">
                  Informatics Engineering Graduate (S.Kom) • Aspiring Software Engineer / Web Developer / Data & ML Enthusiast
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Semarang, Central Java, Indonesia • {personalInfo.email} • WA: {personalInfo.phone} • github.com/ipankexe
                </p>
              </div>

              <div className="hidden sm:block text-right">
                <span className="text-xs font-mono px-3 py-1 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-900/60 font-semibold shadow-2xs">
                  S.Kom — UDINUS
                </span>
              </div>
            </div>
          </div>

          {/* Section: SUMMARY */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed bg-slate-50/70 dark:bg-slate-900/40 p-4 rounded-2xl border border-slate-200/50 dark:border-slate-800/50">
              Informatics Engineering graduate from Dian Nuswantoro University (UDINUS) with hands-on experience in full-stack web development through internship and independent software projects. Experienced in building web applications using Laravel, React.js, Express.js, MySQL, and MongoDB, including REST API integration, role-based access control, transaction processing, and database-driven systems. Also developing skills in Python, data analytics, and machine learning for data-driven problem solving. Seeking an entry-level Software Engineer, Full-Stack Developer, Backend Developer, or Data-related role where I can contribute and continue developing my technical expertise.
            </p>
          </div>

          {/* Section: SKILLS */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
              Technical Core Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 rounded-xl bg-slate-50/50 dark:bg-slate-900/30 border border-slate-200/50 dark:border-slate-800/50">
                <span className="font-bold text-slate-900 dark:text-white block mb-1">Programming Languages:</span>
                <span className="text-slate-600 dark:text-slate-400">JavaScript, PHP, Python, SQL, HTML, CSS</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50/50 dark:bg-slate-900/30 border border-slate-200/50 dark:border-slate-800/50">
                <span className="font-bold text-slate-900 dark:text-white block mb-1">Web Development:</span>
                <span className="text-slate-600 dark:text-slate-400">Laravel, React.js, Express.js, React Native, Bootstrap, Tailwind CSS, REST APIs</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50/50 dark:bg-slate-900/30 border border-slate-200/50 dark:border-slate-800/50">
                <span className="font-bold text-slate-900 dark:text-white block mb-1">Data & Machine Learning:</span>
                <span className="text-slate-600 dark:text-slate-400">Python for Data Analysis, Data Cleaning, EDA, Data Visualization, ML Fundamentals</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50/50 dark:bg-slate-900/30 border border-slate-200/50 dark:border-slate-800/50">
                <span className="font-bold text-slate-900 dark:text-white block mb-1">Databases & Tools:</span>
                <span className="text-slate-600 dark:text-slate-400">MySQL, MongoDB, Git, GitHub, Docker, Chart.js, Linux Server</span>
              </div>
            </div>
          </div>

          {/* Section: EDUCATION */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
              Education
            </h2>
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 p-4 rounded-2xl bg-slate-50/70 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/50">
              <div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white font-display">
                  Universitas Dian Nuswantoro (UDINUS) — Semarang, Indonesia
                </h3>
                <p className="text-xs text-blue-600 dark:text-blue-400 font-semibold mt-0.5">
                  Bachelor of Informatics Engineering (S.Kom) • Cumulative GPA: <strong>3.22 / 4.0</strong>
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-1.5 leading-relaxed">
                  <span className="font-semibold text-slate-800 dark:text-slate-200">Relevant Coursework:</span> Algorithms, Network Fundamentals, Security Essentials, Data Structures, Clean Code and Design Pattern, Object-Oriented Programming, Database Systems, IT Fundamentals
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  <span className="font-semibold">Skripsi:</span> "Perancangan Sistem Point of Sales berbasis Web pada Rumah Makan Kulu Asri Menggunakan Metode Waterfall"
                </p>
              </div>
              <span className="text-xs font-mono font-semibold text-emerald-600 dark:text-emerald-400 shrink-0">
                Graduated (June 2026)
              </span>
            </div>
          </div>

          {/* Section: EXPERIENCE */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
              Experience
            </h2>
            <div className="space-y-4 text-xs sm:text-sm">
              <div className="border-l-2 border-emerald-500 pl-3.5 py-0.5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <h3 className="font-bold text-slate-900 dark:text-white font-display">
                    Fullstack Web Developer — Capstone Project (Self-employed)
                  </h3>
                  <span className="text-xs font-mono text-slate-400">April 2026 — June 2026</span>
                </div>
                <p className="text-xs text-emerald-600 dark:text-emerald-400 font-mono mt-0.5">
                  Stack: Laravel 12, Bootstrap 5, Tailwind CSS, MySQL, lockForUpdate, Chart.js
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-1.5 leading-relaxed">
                  Designed & developed restaurant POS with real-time cart order processing, table occupancy tracking, discount calculations, secure transaction rollback (Void system) with pessimistic database locks (lockForUpdate) for data integrity, inventory audit logs, and interactive Chart.js sales analytics.
                </p>
              </div>

              <div className="border-l-2 border-blue-500 pl-3.5 py-0.5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <h3 className="font-bold text-slate-900 dark:text-white font-display">
                    Fullstack Web Developer — Dinas Komunikasi dan Informatika (Diskominfo) Kota Semarang
                  </h3>
                  <span className="text-xs font-mono text-slate-400">June 2025 — September 2025</span>
                </div>
                <p className="text-xs text-blue-600 dark:text-blue-400 font-mono mt-0.5">
                  Stack: React.js, Express.js, Node.js, MongoDB, REST APIs, Git
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-1.5 leading-relaxed">
                  Developed web-based Fire Department Information System (DAMKAR), built responsive frontend interfaces and REST APIs, implemented CRUD and image upload modules, performed debugging and testing, and collaborated with government supervisors and development team.
                </p>
              </div>
            </div>
          </div>

          {/* Section: PROJECTS */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
              Key Engineering Projects
            </h2>
            <div className="space-y-3 text-xs">
              {[
                { title: "Kulu Asri POS", tech: "Laravel, PHP, MySQL, JavaScript", desc: "Full restaurant POS with table status, automated stock deduction, and secure transaction void logic." },
                { title: "Government Fire Department (DAMKAR) System", tech: "React.js, Node.js, Express.js, MongoDB", desc: "Municipal web portal with real-time fire alerts, geoportal GIS mapping, and public visit booking." },
                { title: "StuntingCareNet", tech: "Laravel, PHP, MySQL, Chart.js", desc: "Child nutritional health platform with WHO growth curve charts and 3-tier role access." },
                { title: "Belajar Pintar", tech: "React.js, React Query, Context API, Tailwind", desc: "Modular e-learning portal with client-side caching and interactive instant quiz validation." },
                { title: "MySQL HA Replication Cluster", tech: "Ubuntu Server 24.04, MySQL 8.0, SQL Proxy", desc: "Master-slave asynchronous replication topology on Ubuntu Linux with read/write routing proxy." }
              ].map((p, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-50/70 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/50">
                  <div className="flex items-center justify-between mb-0.5">
                    <span className="font-bold text-slate-900 dark:text-white font-display">{p.title}</span>
                    <span className="font-mono text-[10px] text-blue-600 dark:text-blue-400">[{p.tech}]</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 leading-snug">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section: CERTIFICATION */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
              Certification
            </h2>
            <div className="flex items-center justify-between text-xs">
              <div>
                <span className="font-bold text-slate-900 dark:text-white font-display">Cisco Cybersecurity Essentials</span>
                <span className="text-slate-500 dark:text-slate-400 block sm:inline sm:ml-2">— Cisco Networking Academy</span>
              </div>
              <span className="text-blue-600 dark:text-blue-400 font-semibold font-mono">Verified Credential</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
