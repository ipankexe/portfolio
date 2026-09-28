import React, { useState } from 'react';
import {
  ArrowRight,
  FileDown,
  Mail,
  Terminal,
  Cpu,
  Search
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { personalInfo } from '../../data/personalInfo';
import { useLanguage } from '../../context/LanguageContext';

export function Hero({ onOpenCommandMenu }) {
  const { language, t } = useLanguage();
  const [activeTab, setActiveTab] = useState('profile');
  const [cliOutput, setCliOutput] = useState([
    { text: 'irfan-os v2.4.0 (x86_64-udinus-engine)', type: 'info' },
    { text: 'Type "help" or click one of the quick commands below:', type: 'muted' },
  ]);
  const [cliInput, setCliInput] = useState('');

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const topOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const executeCliCommand = (cmd) => {
    const trimmed = cmd.trim().toLowerCase();
    const newHistory = [...cliOutput, { text: `$ ${cmd}`, type: 'command' }];

    if (trimmed === 'help') {
      newHistory.push(
        { text: 'Available commands:', type: 'system' },
        { text: '  projects   - List top featured projects', type: 'info' },
        { text: '  stack      - Show core full-stack technologies', type: 'info' },
        { text: '  education  - Display academic qualifications', type: 'info' },
        { text: '  contact    - Output direct email and channels', type: 'info' },
        { text: '  clear      - Clear terminal screen', type: 'info' }
      );
    } else if (trimmed === 'projects') {
      newHistory.push(
        { text: '1. Waterfall POS RM Kulu Asri (Laravel 10, MySQL, Black-box tested)', type: 'success' },
        { text: '2. Damkar Diskominfo Portal & GIS (Node.js, Express, MongoDB, Leaflet)', type: 'success' },
        { text: '3. StuntingCareNet Public Health Platform (React, Tailwind)', type: 'success' }
      );
    } else if (trimmed === 'stack') {
      newHistory.push(
        { text: 'Core Stack: Laravel, React, Node.js, Express, MySQL, MongoDB, Tailwind', type: 'success' },
        { text: 'Specialties: ACID Transactions, GIS Integration, Exploratory Data Analysis', type: 'info' }
      );
    } else if (trimmed === 'education') {
      newHistory.push(
        { text: 'Degree: Sarjana Komputer (S.Kom) - Teknik Informatika', type: 'success' },
        { text: 'Institution: Universitas Dian Nuswantoro (UDINUS)', type: 'info' },
        { text: 'Focus: Software Engineering, Web Dev & Data Science', type: 'info' }
      );
    } else if (trimmed === 'contact') {
      newHistory.push(
        { text: `Email: ${personalInfo.email}`, type: 'success' },
        { text: `WhatsApp: ${personalInfo.phone} (${personalInfo.whatsapp})`, type: 'success' },
        { text: `GitHub: https://github.com/ipankexe`, type: 'info' },
        { text: `Instagram: @irfaanstwn`, type: 'info' },
        { text: 'Location: Semarang, Central Java (Open to Jakarta & Remote)', type: 'muted' }
      );
    } else if (trimmed === 'clear') {
      setCliOutput([]);
      setCliInput('');
      return;
    } else if (trimmed === '') {
      // do nothing
    } else {
      newHistory.push({
        text: `Command not recognized: "${cmd}". Type "help" for a list of valid commands.`,
        type: 'error'
      });
    }

    setCliOutput(newHistory);
    setCliInput('');
  };

  const handleCliSubmit = (e) => {
    e.preventDefault();
    if (cliInput.trim()) {
      executeCliCommand(cliInput);
    }
  };

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background Tech Grid */}
      <div className="absolute inset-0 tech-grid-pattern opacity-40 dark:opacity-20 pointer-events-none" />

      {/* Ambient Lighting Orbs */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 dark:bg-blue-600/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-2/3 right-10 w-[350px] h-[350px] bg-indigo-500/10 dark:bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Live Availability Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 text-emerald-700 dark:text-emerald-300 text-xs font-semibold mb-6 shadow-xs"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span>{t('hero.statusBadge', personalInfo.status)}</span>
            </motion.div>

            {/* Professional Monospace Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="font-mono text-xs sm:text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-3 flex items-center gap-2"
            >
              <Cpu className="w-3.5 h-3.5" />
              <span>{t('hero.role', personalInfo.heroLabel)}</span>
            </motion.div>

            {/* Main Heading with High-Impact Typography */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.12] mb-5 font-display"
            >
              {language === 'id' ? 'Halo, Saya ' : "Hi, I'm "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 dark:from-blue-400 dark:via-indigo-300 dark:to-cyan-300">
                Muhammad Irfan Setiawan.
              </span>
            </motion.h1>

            {/* Supporting Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-lg sm:text-xl font-semibold text-slate-700 dark:text-slate-200 mb-4 leading-snug"
            >
              {language === 'id'
                ? 'Lulusan Teknik Informatika yang membangun solusi digital praktis melalui rekayasa perangkat lunak dan teknologi berbasis data.'
                : personalInfo.heroSupporting}
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed mb-8"
            >
              {t('hero.description', personalInfo.heroDescription)}
            </motion.p>

            {/* CTA Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto"
            >
              <Button
                onClick={() => handleScrollTo('projects')}
                variant="primary"
                size="lg"
                icon={ArrowRight}
                iconPosition="right"
                className="w-full sm:w-auto shadow-md shadow-blue-500/10 cursor-pointer"
              >
                {t('hero.ctaExplore', 'Explore Projects')}
              </Button>

              <Button
                as="a"
                href={personalInfo.cvDocumentPath}
                download="Muhammad-Irfan-Setiawan-CV.pdf"
                variant="outline"
                size="lg"
                icon={FileDown}
                className="w-full sm:w-auto cursor-pointer"
              >
                {t('nav.downloadCv', 'Download CV')}
              </Button>

              <Button
                onClick={() => handleScrollTo('contact')}
                variant="ghost"
                size="lg"
                icon={Mail}
                className="w-full sm:w-auto cursor-pointer"
              >
                {t('hero.ctaContact', "Let's Connect")}
              </Button>

              <button
                type="button"
                onClick={onOpenCommandMenu}
                className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl border border-slate-200/80 dark:border-slate-800 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer bg-white/70 dark:bg-slate-900/50 backdrop-blur-xs shadow-2xs"
                title="Open Spotlight Search Palette (Ctrl+K or ⌘K)"
              >
                <Search className="w-3.5 h-3.5 text-blue-500" />
                <span>Spotlight</span>
                <kbd className="px-1 py-0.2 rounded text-[10px] font-mono bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">⌘K</kbd>
              </button>
            </motion.div>

            {/* Subtle Tech Badges Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-10 pt-6 border-t border-slate-200/80 dark:border-slate-800/80 flex items-center flex-wrap gap-2 text-xs text-slate-500 dark:text-slate-400 w-full"
            >
              <span className="font-mono text-[11px] uppercase tracking-wider text-slate-400 font-semibold mr-1">
                Core Stack:
              </span>
              {['Laravel', 'React.js', 'Node.js', 'Express', 'MySQL', 'MongoDB', 'Tailwind', 'Data & ML'].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/90 font-mono text-[11px] text-slate-700 dark:text-slate-300 shadow-2xs hover:border-blue-400 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Interactive Tech Terminal / Diagnostics Console (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full max-w-lg"
            >
              {/* Terminal Container */}
              <div className="rounded-2xl bg-[#0b0f19] border border-slate-800 shadow-2xl overflow-hidden font-mono text-xs">
                
                {/* Window Bar with Tabs */}
                <div className="px-4 py-3 bg-[#070a12] border-b border-slate-800/90 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  </div>

                  {/* Terminal Tabs */}
                  <div className="flex items-center gap-1 bg-slate-900/90 p-0.5 rounded-lg border border-slate-800 text-[11px]">
                    <button
                      type="button"
                      onClick={() => setActiveTab('profile')}
                      className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                        activeTab === 'profile'
                          ? 'bg-blue-600 text-white font-medium'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      profile.ts
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab('stack')}
                      className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                        activeTab === 'stack'
                          ? 'bg-blue-600 text-white font-medium'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      stack.json
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab('cli')}
                      className={`flex items-center gap-1 px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                        activeTab === 'cli'
                          ? 'bg-blue-600 text-white font-medium'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <Terminal className="w-3 h-3" />
                      cli
                    </button>
                  </div>

                  <div className="w-4" />
                </div>

                {/* Tab 1: TypeScript Profile */}
                {activeTab === 'profile' && (
                  <div className="p-5 space-y-4">
                    {/* Header Card */}
                    <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                      <div className="relative shrink-0">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-400 flex items-center justify-center text-white text-xl font-bold font-sans shadow-md">
                          {personalInfo.initials}
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-[#0b0f19] flex items-center justify-center">
                          <span className="w-1.5 h-1.5 rounded-full bg-white" />
                        </div>
                      </div>

                      <div className="min-w-0">
                        <h4 className="text-white font-bold text-sm font-sans truncate">
                          Muhammad Irfan Setiawan
                        </h4>
                        <p className="text-[11px] text-blue-400 font-mono">
                          UDINUS Graduate (S.Kom)
                        </p>
                        <p className="text-[10px] text-slate-400 flex items-center gap-1.5 mt-0.5">
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400" />
                          Ready for Full-Time / Entry-Level Roles
                        </p>
                      </div>
                    </div>

                    {/* Typed Code */}
                    <div className="p-4 rounded-xl bg-[#060910] border border-slate-800/80 text-slate-300 leading-relaxed text-[11px] font-mono">
                      <p><span className="text-purple-400">interface</span> <span className="text-yellow-300">SoftwareEngineer</span> &#123;</p>
                      <p className="pl-4"><span className="text-blue-300">name</span>: <span className="text-emerald-300">"Muhammad Irfan Setiawan"</span>;</p>
                      <p className="pl-4"><span className="text-blue-300">degree</span>: <span className="text-emerald-300">"S1 Teknik Informatika (S.Kom)"</span>;</p>
                      <p className="pl-4"><span className="text-blue-300">campus</span>: <span className="text-emerald-300">"Universitas Dian Nuswantoro"</span>;</p>
                      <p className="pl-4"><span className="text-blue-300">tracks</span>: [<span className="text-emerald-300">"Web"</span>, <span className="text-emerald-300">"Backend"</span>, <span className="text-emerald-300">"Data & ML"</span>];</p>
                      <p className="pl-4"><span className="text-blue-300">practicalExp</span>: <span className="text-cyan-300">"Diskominfo Damkar Portal"</span>;</p>
                      <p className="pl-4"><span className="text-blue-300">certified</span>: <span className="text-cyan-300">"Cisco Cybersecurity"</span>;</p>
                      <p className="pl-4"><span className="text-blue-300">status</span>: <span className="text-emerald-400">"Ready to Contribute"</span>;</p>
                      <p>&#125;</p>
                    </div>

                    {/* Quick Highlights */}
                    <div className="grid grid-cols-2 gap-2 text-center text-[11px]">
                      <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800">
                        <div className="text-blue-400 font-bold">5+ Core Systems</div>
                        <div className="text-[10px] text-slate-400">Web, API & GIS Projects</div>
                      </div>
                      <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800">
                        <div className="text-emerald-400 font-bold">Black Box Tested</div>
                        <div className="text-[10px] text-slate-400">Production-Ready Rigor</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Tab 2: stack.json */}
                {activeTab === 'stack' && (
                  <div className="p-5 space-y-4">
                    <div className="p-4 rounded-xl bg-[#060910] border border-slate-800/80 text-slate-300 leading-relaxed text-[11px] font-mono overflow-x-auto max-h-[310px]">
                      <p>&#123;</p>
                      <p className="pl-4"><span className="text-blue-400">"backend"</span>: [</p>
                      <p className="pl-8"><span className="text-emerald-300">"Laravel (PHP)"</span>, <span className="text-emerald-300">"Node.js"</span>, <span className="text-emerald-300">"Express.js"</span>, <span className="text-emerald-300">"REST APIs"</span></p>
                      <p className="pl-4">],</p>
                      <p className="pl-4"><span className="text-blue-400">"frontend"</span>: [</p>
                      <p className="pl-8"><span className="text-emerald-300">"React.js"</span>, <span className="text-emerald-300">"JavaScript ES6+"</span>, <span className="text-emerald-300">"Tailwind CSS"</span>, <span className="text-emerald-300">"Framer Motion"</span></p>
                      <p className="pl-4">],</p>
                      <p className="pl-4"><span className="text-blue-400">"databases"</span>: [</p>
                      <p className="pl-8"><span className="text-emerald-300">"MySQL (Relational, Replication)"</span>, <span className="text-emerald-300">"MongoDB (Document, Mongoose)"</span></p>
                      <p className="pl-4">],</p>
                      <p className="pl-4"><span className="text-blue-400">"data_and_ml"</span>: [</p>
                      <p className="pl-8"><span className="text-emerald-300">"Data Cleaning"</span>, <span className="text-emerald-300">"EDA"</span>, <span className="text-emerald-300">"Supervised ML"</span>, <span className="text-emerald-300">"Model Evaluation"</span></p>
                      <p className="pl-4">],</p>
                      <p className="pl-4"><span className="text-blue-400">"tooling"</span>: [</p>
                      <p className="pl-8"><span className="text-emerald-300">"Git"</span>, <span className="text-emerald-300">"Postman"</span>, <span className="text-emerald-300">"Vite"</span>, <span className="text-emerald-300">"Cisco Networking"</span></p>
                      <p className="pl-4">]</p>
                      <p>&#125;</p>
                    </div>

                    <div className="flex items-center justify-between text-[11px] text-slate-400 px-1">
                      <span>Synthesized from academic & practical work</span>
                      <button
                        type="button"
                        onClick={() => handleScrollTo('skills')}
                        className="text-blue-400 hover:text-blue-300 underline cursor-pointer"
                      >
                        View Full Skills Matrix →
                      </button>
                    </div>
                  </div>
                )}

                {/* Tab 3: Interactive CLI */}
                {activeTab === 'cli' && (
                  <div className="p-5 flex flex-col justify-between h-[360px]">
                    {/* CLI Screen */}
                    <div className="overflow-y-auto space-y-1.5 flex-1 pr-1 font-mono text-[11px]">
                      {cliOutput.map((item, index) => {
                        let colorClass = 'text-slate-300';
                        if (item.type === 'command') colorClass = 'text-yellow-400 font-bold';
                        else if (item.type === 'success') colorClass = 'text-emerald-400';
                        else if (item.type === 'error') colorClass = 'text-rose-400';
                        else if (item.type === 'info') colorClass = 'text-blue-300';
                        else if (item.type === 'muted') colorClass = 'text-slate-500';

                        return (
                          <div key={index} className={colorClass}>
                            {item.text}
                          </div>
                        );
                      })}
                    </div>

                    {/* Quick Command Chips */}
                    <div className="pt-3 border-t border-slate-800 space-y-2">
                      <div className="flex flex-wrap gap-1.5">
                        {['help', 'projects', 'stack', 'education', 'contact', 'clear'].map((cmd) => (
                          <button
                            key={cmd}
                            type="button"
                            onClick={() => executeCliCommand(cmd)}
                            className="px-2 py-0.5 rounded bg-slate-800/80 hover:bg-blue-600 hover:text-white text-slate-400 text-[10px] font-mono transition-colors cursor-pointer"
                          >
                            ${cmd}
                          </button>
                        ))}
                      </div>

                      {/* Interactive Command Input Form */}
                      <form onSubmit={handleCliSubmit} className="flex items-center gap-2 pt-1">
                        <span className="text-emerald-400 font-bold">$</span>
                        <input
                          type="text"
                          value={cliInput}
                          onChange={(e) => setCliInput(e.target.value)}
                          placeholder="type command & press enter..."
                          className="w-full bg-transparent text-slate-200 text-[11px] focus:outline-none"
                        />
                        <button
                          type="submit"
                          className="px-2 py-0.5 bg-blue-600 text-white rounded text-[10px] cursor-pointer"
                        >
                          Run
                        </button>
                      </form>
                    </div>
                  </div>
                )}

              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
