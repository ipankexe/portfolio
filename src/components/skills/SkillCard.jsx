import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Badge } from '../ui/Badge';

export function SkillCard({ skill }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const getLevelVariant = (level) => {
    switch (level) {
      case 'Experienced':
      case 'Proficient':
      case 'Certified':
        return 'primary';
      case 'Competent':
        return 'indigo';
      case 'Foundational':
      case 'Foundational Concept':
        return 'cyan';
      default:
        return 'default';
    }
  };

  return (
    <div
      onClick={() => setIsExpanded(!isExpanded)}
      className="group relative p-4 rounded-xl bg-white dark:bg-[#0f172a] border border-slate-200/90 dark:border-slate-800/90 hover:border-blue-400 dark:hover:border-blue-500/50 shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer select-none"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h4 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {skill.name}
            </h4>
          </div>

          <p className="text-xs text-slate-600 dark:text-slate-400 mt-1.5 line-clamp-2 leading-relaxed">
            {skill.context}
          </p>
        </div>

        <div className="flex flex-col items-end gap-1.5 shrink-0">
          <Badge variant={getLevelVariant(skill.level)} size="sm">
            {skill.level}
          </Badge>
          <ChevronDown
            className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${
              isExpanded ? 'rotate-180' : ''
            }`}
          />
        </div>
      </div>

      {/* Expanded Details */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-800 overflow-hidden"
          >
            <p className="text-xs text-slate-700 dark:text-slate-300 mb-2 leading-relaxed">
              {skill.context}
            </p>

            {skill.projects && skill.projects.length > 0 && (
              <div className="flex items-center flex-wrap gap-1.5 pt-1">
                <span className="text-[11px] font-mono text-slate-400">Used in:</span>
                {skill.projects.map((proj) => (
                  <span
                    key={proj}
                    className="text-[11px] font-medium px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-blue-600 dark:text-blue-400"
                  >
                    {proj}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
