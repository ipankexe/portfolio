import React, { useState } from 'react';
import {
  MessageCircle,
  Mail,
  Copy,
  Check,
  Send,
  FileDown,
  Sparkles,
} from 'lucide-react';
import { Linkedin, Github, Instagram } from '../ui/BrandIcons';
import confetti from 'canvas-confetti';
import { useLanguage } from '../../hooks/useLanguage';
import { copyToClipboard } from '../../utils/helpers';
import { Button } from '../ui/Button';

export const Contact = () => {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [senderName, setSenderName] = useState('');
  const [senderCompany, setSenderCompany] = useState('');
  const [senderMessage, setSenderMessage] = useState('');

  const emailAddress = 'irfaanmuh27@gmail.com';
  const whatsappNumber = '6285799479834';

  const handleCopyEmail = async () => {
    const success = await copyToClipboard(emailAddress);
    if (success) {
      setCopied(true);
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
      });
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleSendWhatsApp = (e) => {
    e.preventDefault();
    let text = 'Halo Irfan, ';
    if (senderName) {
      text += `saya ${senderName}${senderCompany ? ` dari ${senderCompany}` : ''}. `;
    }
    if (senderMessage) {
      text += senderMessage;
    } else {
      text += 'saya tertarik untuk berdiskusi mengenai portofolio dan peluang kerja sama.';
    }

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${whatsappNumber}?text=${encoded}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-200/60 dark:border-emerald-800/60 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t('contact.badge')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            {t('contact.subtitle')}
          </p>
        </div>

        {/* Contact Grid: Direct Cards + WhatsApp Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          
          {/* Left: Contact Channels Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* WhatsApp Direct Card */}
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Halo Irfan, saya tertarik untuk berdiskusi mengenai portofolio dan peluang kerja sama.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-white dark:bg-[#0c101d] border border-slate-200/80 dark:border-slate-800/80 hover:border-emerald-500/50 shadow-xs hover:shadow-lg transition-all duration-300 flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/60 dark:border-emerald-800/60 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0 group-hover:scale-105 transition-transform">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {t('contact.whatsappCard.title')}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                  +62 857-9947-9834
                </p>
              </div>
            </a>

            {/* Email Copy Card */}
            <div className="p-5 rounded-2xl bg-white dark:bg-[#0c101d] border border-slate-200/80 dark:border-slate-800/80 shadow-xs flex items-center justify-between gap-4">
              <div className="flex items-center gap-4 min-w-0">
                <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-800/60 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="truncate">
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    {t('contact.emailCard.title')}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 truncate font-mono">
                    {emailAddress}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-300 transition-all cursor-pointer flex items-center gap-1.5 shrink-0"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Tersalin!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Salin</span>
                  </>
                )}
              </button>
            </div>

            {/* LinkedIn Card */}
            <a
              href="https://www.linkedin.com/in/irfanswettiawan"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-white dark:bg-[#0c101d] border border-slate-200/80 dark:border-slate-800/80 hover:border-blue-500/50 shadow-xs hover:shadow-lg transition-all duration-300 flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-800/60 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0 group-hover:scale-105 transition-transform">
                <Linkedin className="w-6 h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {t('contact.linkedinCard.title')}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                  linkedin.com/in/irfanswettiawan
                </p>
              </div>
            </a>

            {/* GitHub Card */}
            <a
              href="https://github.com/ipankexe"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-white dark:bg-[#0c101d] border border-slate-200/80 dark:border-slate-800/80 hover:border-slate-500/50 shadow-xs hover:shadow-lg transition-all duration-300 flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-800 dark:text-slate-200 shrink-0 group-hover:scale-105 transition-transform">
                <Github className="w-6 h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {t('contact.githubCard.title')}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                  github.com/ipankexe
                </p>
              </div>
            </a>

            {/* Instagram Card */}
            <a
              href="https://instagram.com/irfaanstwn"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-white dark:bg-[#0c101d] border border-slate-200/80 dark:border-slate-800/80 hover:border-pink-500/50 shadow-xs hover:shadow-lg transition-all duration-300 flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-pink-50 dark:bg-pink-950/60 border border-pink-200/60 dark:border-pink-800/60 flex items-center justify-center text-pink-600 dark:text-pink-400 shrink-0 group-hover:scale-105 transition-transform">
                <Instagram className="w-6 h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
                  {t('contact.instagramCard.title')}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                  @irfaanstwn
                </p>
              </div>
            </a>

            {/* Direct CV Download Action */}
            <div className="pt-2">
              <Button
                variant="primary"
                size="lg"
                href="/Muhammad-Irfan-Setiawan-CV.pdf"
                download="Muhammad-Irfan-Setiawan-CV.pdf"
                icon={FileDown}
                className="w-full justify-center"
              >
                {t('contact.downloadCvButton')}
              </Button>
            </div>
          </div>

          {/* Right: Quick Direct WhatsApp Composer Form (7 cols) */}
          <div className="lg:col-span-7 p-8 rounded-3xl bg-white dark:bg-[#0c101d] border border-slate-200/80 dark:border-slate-800/80 shadow-xs">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
              {t('contact.formTitle')}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
              {t('contact.formDesc')}
            </p>

            <form onSubmit={handleSendWhatsApp} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    {t('contact.nameLabel')}
                  </label>
                  <input
                    type="text"
                    required
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder={t('contact.namePlaceholder')}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/80 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Instansi / Perusahaan (Opsional)
                  </label>
                  <input
                    type="text"
                    value={senderCompany}
                    onChange={(e) => setSenderCompany(e.target.value)}
                    placeholder="Contoh: PT Teknologi Indonesia"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/80 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  {t('contact.messageLabel')}
                </label>
                <textarea
                  rows="4"
                  required
                  value={senderMessage}
                  onChange={(e) => setSenderMessage(e.target.value)}
                  placeholder={t('contact.messagePlaceholder')}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/80 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                icon={Send}
                iconPosition="right"
                className="w-full justify-center bg-emerald-600 hover:bg-emerald-500 border-emerald-500/30 shadow-emerald-600/20"
              >
                {t('contact.sendButton')}
              </Button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
