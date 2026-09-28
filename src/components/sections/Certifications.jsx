import React, { useState } from 'react';
import { ShieldCheck, Award, CheckCircle2 } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Modal } from '../ui/Modal';
import { certificationsData } from '../../data/certifications';
import { useLanguage } from '../../context/LanguageContext';

export function Certifications() {
  const { language, t } = useLanguage();
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certifications" className="py-20 lg:py-28 bg-slate-100/40 dark:bg-[#070a12]/60 relative transition-colors" aria-label="Credentials and Certifications">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={t('certifications.badge', 'Credentials & Security')}
          title={t('certifications.title', 'Professional Certifications')}
          subtitle={t('certifications.subtitle', 'Industry-standard network and cybersecurity credential verified through academic engineering coursework.')}
        />

        <div className="grid grid-cols-1 gap-6 max-w-2xl mx-auto">
          {certificationsData.map((cert) => (
            <div
              key={cert.id}
              className="p-6 sm:p-8 rounded-3xl bg-white/90 dark:bg-[#0c1220]/90 backdrop-blur-xl border border-slate-200/90 dark:border-slate-800/90 shadow-sm hover:border-blue-400 dark:hover:border-blue-500/40 transition-all card-hover-fx"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-900/60 flex items-center justify-center shrink-0 shadow-xs">
                    <ShieldCheck className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display">
                      {cert.title}
                    </h3>
                    <div className="text-sm font-semibold text-blue-600 dark:text-blue-400 mt-0.5">
                      {cert.issuer}
                    </div>
                  </div>
                </div>

                <Badge variant="primary" size="md">
                  {cert.status}
                </Badge>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                {cert.description}
              </p>

              {/* Skills Learned */}
              <div className="mb-6 space-y-2.5">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  Key Security Domains Mastered
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {cert.skillsLearned.map((s, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 p-2 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/50 dark:border-slate-800/50 text-xs text-slate-700 dark:text-slate-300"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                      <span>{s}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <Button
                  onClick={() => setSelectedCert(cert)}
                  variant="outline"
                  size="sm"
                  icon={Award}
                  className="cursor-pointer"
                >
                  View Credential Details
                </Button>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                  Academic Verification
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Certificate Modal */}
        <Modal
          isOpen={Boolean(selectedCert)}
          onClose={() => setSelectedCert(null)}
          title={selectedCert?.title}
          subtitle={selectedCert?.issuer}
          maxWidth="max-w-lg"
        >
          <div className="space-y-4 text-center py-4">
            <div className="w-16 h-16 rounded-2xl bg-blue-100 dark:bg-blue-950/70 border border-blue-200 dark:border-blue-900 mx-auto flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm">
              <ShieldCheck className="w-8 h-8" />
            </div>

            <h4 className="text-lg font-bold text-slate-900 dark:text-white font-display">
              Cisco Networking Academy Credential
            </h4>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-sm mx-auto leading-relaxed">
              Official Cisco Cybersecurity Essentials curriculum completed as part of academic engineering qualifications.
            </p>

            <div className="p-3.5 rounded-2xl bg-slate-100 dark:bg-slate-800 text-xs text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 font-mono text-left space-y-1.5">
              <div>• Organization: Cisco Networking Academy</div>
              <div>• Recipient: Muhammad Irfan Setiawan</div>
              <div>• Status: Official Academic Credential Verified</div>
              <div>• Track: Defensive Networking & Threat Analysis</div>
            </div>

            <div className="pt-2">
              <Button onClick={() => setSelectedCert(null)} variant="primary" size="sm" className="w-full justify-center cursor-pointer">
                Close Verification
              </Button>
            </div>
          </div>
        </Modal>

      </div>
    </section>
  );
}
