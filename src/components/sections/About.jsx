import React from 'react';
import { motion } from 'framer-motion';
import {
  Compass,
  CheckCircle2,
  GraduationCap,
  MapPin,
  Code2,
  ArrowRight,
  Building2
} from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { personalInfo } from '../../data/personalInfo';
import { useLanguage } from '../../context/LanguageContext';

export function About() {
  const { language, t } = useLanguage();
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const topOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-20 lg:py-28 relative overflow-hidden" aria-label="About the engineer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge={t('about.badge', 'Background & Profile')}
          title={t('about.title', 'Engineering Mindset, Practical Solutions')}
          subtitle={t('about.subtitle', 'Informatics Engineering graduate from UDINUS bridging software engineering rigor with data-driven perspective.')}
        />

        {/* Bento Box Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
          
          {/* Bento Item 1: Main Story Narrative (8 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-8 flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-white/90 dark:bg-[#0c1220]/90 backdrop-blur-xl border border-slate-200/90 dark:border-slate-800/90 shadow-sm relative overflow-hidden"
          >
            {/* Ambient Background Accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 dark:bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-4">
                <Code2 className="w-4 h-4" />
                <span>{language === 'id' ? 'Perjalanan Akademik & Praktis' : 'Academic & Practical Journey'}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white leading-snug mb-5 font-display">
                {language === 'id'
                  ? 'Mengubah konsep komputasi menjadi sistem aplikasi yang andal & tepat guna.'
                  : 'Turning abstract computational concepts into reliable production systems.'}
              </h3>

              <div className="space-y-3.5 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {language === 'id' ? (
                  <>
                    <p className="leading-relaxed">{t('about.bento1P1')}</p>
                    <p className="leading-relaxed">{t('about.bento1P2')}</p>
                    <p className="leading-relaxed">{t('about.bento1P3')}</p>
                  </>
                ) : (
                  personalInfo.aboutDescription.map((paragraph, idx) => (
                    <p key={idx} className="leading-relaxed">
                      {paragraph}
                    </p>
                  ))
                )}
              </div>
            </div>

            {/* 4 Pillars Grid */}
            <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                {
                  title: language === 'id' ? 'Rekayasa Perangkat Lunak' : "Practical Software Engineering",
                  desc: language === 'id' ? 'Laravel, React, Node.js & arsitektur MVC bersih' : "Laravel, React, Node.js & clean MVC architecture"
                },
                {
                  title: language === 'id' ? 'Sistem Basis Data & Transaksi' : "Database Systems & ACID",
                  desc: language === 'id' ? 'Perancangan skema, normalisasi, replikasi MySQL & MongoDB' : "Schema design, normalization, MySQL replication & MongoDB"
                },
                {
                  title: language === 'id' ? 'Fondasi Data & Machine Learning' : "Data & ML Foundations",
                  desc: language === 'id' ? 'Pembersihan data, rekayasa fitur & analisis eksploratif' : "Data cleaning, feature preparation & exploratory analysis"
                },
                {
                  title: language === 'id' ? 'Keamanan & Jaringan IT' : "Security & Systems Rigor",
                  desc: language === 'id' ? 'Prinsip jaringan teruji Cisco & fundamental defensif' : "Cisco verified networking & defensive fundamentals"
                }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800/80 shadow-2xs"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Bento Item 2: Target Role & Availability (4 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="lg:col-span-4 flex flex-col justify-between p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white shadow-xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-white/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center gap-2 text-blue-200 text-xs font-mono uppercase tracking-wider mb-3">
                <Compass className="w-4 h-4" />
                <span>{language === 'id' ? 'Sasaran Karier' : 'Career Target'}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black mb-3 font-display">
                {language === 'id' ? 'Posisi yang Dicari' : personalInfo.lookingFor.title}
              </h3>

              <div className="p-3.5 rounded-xl bg-white/15 backdrop-blur-md border border-white/20 text-sm font-semibold leading-snug mb-5">
                {language === 'id' ? 'Entry-Level Software Engineer / Web Developer / Data & IT Roles' : personalInfo.lookingFor.role}
              </div>

              <div className="space-y-2.5 text-xs text-blue-100">
                <div className="flex items-center justify-between py-1 border-b border-white/10">
                  <span className="text-blue-200">{language === 'id' ? 'Ketersediaan:' : 'Availability:'}</span>
                  <span className="font-semibold text-white">{language === 'id' ? 'Segera / Full-Time' : personalInfo.lookingFor.availability}</span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-white/10">
                  <span className="text-blue-200">{language === 'id' ? 'Format Kerja:' : 'Work Setup:'}</span>
                  <span className="font-semibold text-white">{language === 'id' ? 'On-site (Semarang / Jakarta) / Remote' : personalInfo.lookingFor.workPreference}</span>
                </div>
                <div className="flex items-center justify-between py-1">
                  <span className="text-blue-200">{language === 'id' ? 'Fokus Utama:' : 'Focus Areas:'}</span>
                  <span className="font-semibold text-white text-right max-w-[180px] truncate">
                    Full-Stack & Data
                  </span>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => handleScrollTo('contact')}
              className="mt-6 w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white text-blue-900 font-bold text-xs hover:bg-blue-50 transition-colors shadow-md cursor-pointer"
            >
              <span>{language === 'id' ? 'Hubungi untuk Peluang Kerja' : 'Get in Touch for Opportunities'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </motion.div>

          {/* Bento Item 3: Degree & Thesis Spotlight (4 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="lg:col-span-4 p-6 rounded-3xl bg-white/90 dark:bg-[#0c1220]/90 backdrop-blur-xl border border-slate-200/90 dark:border-slate-800/90 shadow-sm flex flex-col justify-between card-hover-fx"
          >
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-900/60 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold">
                    {language === 'id' ? 'Gelar Sarjana' : 'Bachelor Degree'}
                  </span>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    S.Kom — Teknik Informatika
                  </h4>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 text-xs text-slate-700 dark:text-slate-300 leading-relaxed mb-3">
                <span className="font-semibold text-blue-600 dark:text-blue-400">
                  {language === 'id' ? 'Fokus Skripsi: ' : 'Thesis Defense: '}
                </span>
                {language === 'id'
                  ? 'Sistem Point of Sales (POS) berbasis Web untuk RM Kulu Asri menggunakan Metode Waterfall dengan pengujian Black-Box menyeluruh.'
                  : 'Web-Based Point of Sales (POS) for RM Kulu Asri using Waterfall Method with comprehensive Black-Box testing.'}
              </div>

              <p className="text-xs text-slate-500 dark:text-slate-400">
                Universitas Dian Nuswantoro (UDINUS) — Semarang, Indonesia
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs">
              <span className="text-slate-500 dark:text-slate-400 font-mono text-[11px]">{language === 'id' ? 'Riset Akademik' : 'Academic Rigor'}</span>
              <span className="font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> {language === 'id' ? 'Lulus' : 'Completed'}
              </span>
            </div>
          </motion.div>

          {/* Bento Item 4: Government Project Experience (4 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="lg:col-span-4 p-6 rounded-3xl bg-white/90 dark:bg-[#0c1220]/90 backdrop-blur-xl border border-slate-200/90 dark:border-slate-800/90 shadow-sm flex flex-col justify-between card-hover-fx"
          >
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-900/60 flex items-center justify-center shrink-0">
                  <Building2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold">
                    {language === 'id' ? 'Pengalaman Instansi Pemerintah' : 'Government Internship'}
                  </span>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    Diskominfo Kota Semarang
                  </h4>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 text-xs text-slate-700 dark:text-slate-300 leading-relaxed mb-3">
                <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                  {language === 'id' ? 'Portal Damkar & Geoportal GIS: ' : 'Damkar Portal & GIS: '}
                </span>
                {language === 'id'
                  ? 'Membangun backend REST API, alur pendaftaran kunjungan publik edukasi, dan pemetaan koordinat darurat Leaflet GIS.'
                  : 'Engineered municipal backend APIs, visit scheduling workflows, and emergency GIS coordinates mapping.'}
              </div>

              <div className="flex flex-wrap gap-1">
                {['Node.js', 'Express', 'MongoDB', 'Leaflet GIS'].map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 text-[10px] font-mono rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs">
              <span className="text-slate-500 dark:text-slate-400 font-mono text-[11px]">{language === 'id' ? 'Dampak Nyata' : 'Real-World Impact'}</span>
              <span className="font-semibold text-blue-600 dark:text-blue-400">{language === 'id' ? 'Terverifikasi Diskominfo' : 'Diskominfo Approved'}</span>
            </div>
          </motion.div>

          {/* Bento Item 5: Location & Relocation Flexibility (4 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="lg:col-span-4 p-6 rounded-3xl bg-white/90 dark:bg-[#0c1220]/90 backdrop-blur-xl border border-slate-200/90 dark:border-slate-800/90 shadow-sm flex flex-col justify-between card-hover-fx"
          >
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-900/60 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold">
                    {language === 'id' ? 'Domisili Saat Ini' : 'Current Location'}
                  </span>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    {language === 'id' ? 'Semarang, Jawa Tengah' : 'Semarang, Central Java'}
                  </h4>
                </div>
              </div>

              <div className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                  <span>{language === 'id' ? 'Berbasis di Semarang (WIB / GMT+7)' : 'Based in Semarang (GMT+7)'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500 shrink-0" />
                  <span>{language === 'id' ? 'Siap Relokasi: ' : 'Open to Relocation: '}<strong>{language === 'id' ? 'Jakarta / Jabodetabek' : 'Jakarta / Jabodetabek'}</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-500 shrink-0" />
                  <span>{language === 'id' ? 'Siap bekerja untuk tim ' : 'Equipped for '}<strong>{language === 'id' ? 'Remote & Hybrid' : 'Remote & Hybrid'}</strong></span>
                </div>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs">
              <span className="text-slate-500 dark:text-slate-400 font-mono text-[11px]">{language === 'id' ? 'Kesiapan' : 'Mobility'}</span>
              <span className="font-semibold text-emerald-600 dark:text-emerald-400">{language === 'id' ? 'Segera / Langsung' : 'Immediate Start'}</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
