import React, { useState } from 'react';
import { Send, Copy, Check, MapPin, Clock } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon, WhatsAppIcon } from '../ui/Icons';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { Toast } from '../ui/Toast';
import { useCopyToClipboard } from '../../hooks/useCopyToClipboard';
import { personalInfo } from '../../data/personalInfo';
import { useLanguage } from '../../context/LanguageContext';

export function Contact() {
  const { language, t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const { copied, copyToClipboard } = useCopyToClipboard();

  const handleCopyEmail = async () => {
    const success = await copyToClipboard(personalInfo.email);
    if (success) {
      setToastMessage(t('contact.toastCopiedEmail', 'Email copied to clipboard ✓'));
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }
  };

  const handleCopyPhone = async () => {
    const success = await copyToClipboard(personalInfo.phone);
    if (success) {
      setToastMessage(t('contact.toastCopiedPhone', 'WhatsApp number copied to clipboard ✓'));
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Please provide your name';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email format';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please enter a message';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters';
    }
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate sending with mailto dispatch fallback
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      
      const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
      const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
      window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    }, 600);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative" aria-label="Contact and Collaboration">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={t('contact.badge', 'Get in Touch')}
          title={t('contact.title', "Let's Build Something Impactful")}
          subtitle={t('contact.subtitle', 'Currently open to entry-level software engineering positions, collaborations, and interesting technology projects.')}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Left Column: Direct Contact & Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-7 rounded-3xl bg-white/90 dark:bg-[#0c1220]/90 backdrop-blur-xl border border-slate-200/90 dark:border-slate-800/90 shadow-sm space-y-5">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display">
                {t('contact.channelsTitle', 'Contact Channels')}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {t('contact.channelsDesc', 'Whether you have an entry-level software engineer opening, a collaborative project idea, or simply want to connect, feel free to reach out.')}
              </p>

              {/* Direct Email Card */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800/70 space-y-2">
                <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold">
                  {t('contact.directEmailTitle', 'Direct Email')}
                </div>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white truncate">
                    {personalInfo.email}
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    type="button"
                    aria-label="Copy email address"
                    className="p-1.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors cursor-pointer shrink-0 shadow-2xs"
                    title={t('contact.btnCopyEmail', 'Copy email to clipboard')}
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Direct WhatsApp Card */}
              <div className="p-4 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200/70 dark:border-emerald-800/60 space-y-2">
                <div className="text-[11px] font-mono uppercase tracking-wider text-emerald-700 dark:text-emerald-300 font-semibold flex items-center justify-between">
                  <span>{t('contact.directWaTitle', 'WhatsApp & Phone')}</span>
                  <span className="text-[10px] bg-emerald-100 dark:bg-emerald-900/80 px-2 py-0.5 rounded-full text-emerald-800 dark:text-emerald-200">
                    {t('contact.fastResponseBadge', 'Fast Response')}
                  </span>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <a
                    href={personalInfo.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors flex items-center gap-1.5"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-emerald-500" />
                    <span>{personalInfo.phone}</span>
                  </a>
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={handleCopyPhone}
                      type="button"
                      aria-label="Copy WhatsApp number"
                      className="p-1.5 rounded-xl border border-emerald-200 dark:border-emerald-800 hover:bg-emerald-100 dark:hover:bg-emerald-900/50 text-slate-600 dark:text-slate-300 transition-colors cursor-pointer shadow-2xs"
                      title={t('contact.btnCopyWa', 'Copy number')}
                    >
                      <Copy className="w-4 h-4" />
                    </button>
                    <a
                      href={personalInfo.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2.5 py-1 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-[11px] font-semibold transition-colors shadow-2xs"
                    >
                      {t('contact.btnChatWa', 'Chat')}
                    </a>
                  </div>
                </div>
              </div>

              {/* Response Time Badge */}
              <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-900/50 p-2.5 rounded-xl border border-slate-200/60 dark:border-slate-800/60">
                <Clock className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                <span>{t('contact.responseTimeText', 'Usually responds within 24 hours')}</span>
              </div>

              {/* Location Card */}
              <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 shadow-2xs">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900 dark:text-white">
                    {t('contact.locationTitle', 'Semarang, Central Java')}
                  </div>
                  <div className="text-[11px] text-slate-400">
                    {t('contact.locationDesc', 'Open to Relocation (Jakarta, etc.) & Remote')}
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2">
                <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold">
                  {t('contact.socialsTitle', 'Professional Profiles & Socials')}
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <a
                    href={personalInfo.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp chat"
                    className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-emerald-200 dark:border-emerald-800/80 bg-emerald-50/50 dark:bg-emerald-950/30 text-xs font-semibold text-emerald-700 dark:text-emerald-300 hover:border-emerald-400 transition-colors shadow-2xs cursor-pointer"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-emerald-500" />
                    <span>WhatsApp</span>
                  </a>
                  <a
                    href={personalInfo.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub profile"
                    className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-400 transition-colors shadow-2xs cursor-pointer"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={personalInfo.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn profile"
                    className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-400 transition-colors shadow-2xs cursor-pointer"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={personalInfo.socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram profile"
                    className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-rose-600 dark:hover:text-rose-400 hover:border-rose-400 transition-colors shadow-2xs cursor-pointer"
                  >
                    <InstagramIcon className="w-4 h-4" />
                    <span>Instagram</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-white/90 dark:bg-[#0c1220]/90 backdrop-blur-xl border border-slate-200/90 dark:border-slate-800/90 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 font-display">
                {t('contact.formTitle', 'Send a Direct Message')}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
                {t('contact.formDesc', 'Fill in your inquiry details below. The message will prepare your default email client with pre-filled fields.')}
              </p>

              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    {t('contact.labelName', 'Your Name')} <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={t('contact.placeholderName', 'e.g. Alex Pratama')}
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:bg-white dark:focus:bg-slate-950 focus:outline-hidden transition-colors ${
                      errors.name ? 'border-rose-500 focus:border-rose-500' : 'border-slate-200 dark:border-slate-700 focus:border-blue-500'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-rose-500 text-xs mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    {t('contact.labelEmail', 'Your Email Address')} <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder={t('contact.placeholderEmail', 'e.g. alex@company.com')}
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:bg-white dark:focus:bg-slate-950 focus:outline-hidden transition-colors ${
                      errors.email ? 'border-rose-500 focus:border-rose-500' : 'border-slate-200 dark:border-slate-700 focus:border-blue-500'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-rose-500 text-xs mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label htmlFor="message" className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                      {t('contact.labelMessage', 'Message')} <span className="text-rose-500">*</span>
                    </label>
                    <span className="text-[11px] text-slate-400 font-mono">
                      {formData.message.length} {t('contact.charsCount', 'chars')}
                    </span>
                  </div>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t('contact.placeholderMessage', 'Hello Irfan, I would like to discuss an opportunity...')}
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:bg-white dark:focus:bg-slate-950 focus:outline-hidden transition-colors resize-none ${
                      errors.message ? 'border-rose-500 focus:border-rose-500' : 'border-slate-200 dark:border-slate-700 focus:border-blue-500'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-rose-500 text-xs mt-1">{errors.message}</p>
                  )}
                </div>

                {/* Submit Feedback */}
                {submitStatus === 'success' && (
                  <div className="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-xs text-emerald-800 dark:text-emerald-300 flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{t('contact.successMessage', 'Opening your default mail client to send inquiry. Thank you!')}</span>
                  </div>
                )}

                {/* Button */}
                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  disabled={isSubmitting}
                  icon={Send}
                  iconPosition="right"
                  className="w-full justify-center shadow-xs cursor-pointer"
                >
                  {isSubmitting ? t('contact.btnSending', 'Preparing Email...') : t('contact.btnSend', 'Send Message')}
                </Button>
              </form>
            </div>
          </div>

        </div>

        {/* Toast Notification */}
        <Toast
          isVisible={showToast}
          message={toastMessage || 'Copied to clipboard ✓'}
          type="success"
          onClose={() => setShowToast(false)}
        />
      </div>
    </section>
  );
}
