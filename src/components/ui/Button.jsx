import React from 'react';
import { motion } from 'framer-motion';

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  href,
  download,
  target,
  rel,
  disabled = false,
  type = 'button',
  icon: Icon,
  iconPosition = 'left',
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 select-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-2 min-h-[38px] gap-1.5',
    md: 'text-sm px-4.5 py-2.5 min-h-[44px] gap-2',
    lg: 'text-base px-6 py-3.5 min-h-[48px] gap-2.5',
  };

  const variantStyles = {
    primary:
      'bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-600/20 hover:shadow-lg hover:shadow-blue-600/30 border border-blue-500/30',
    secondary:
      'bg-slate-900 hover:bg-slate-800 text-white dark:bg-white dark:hover:bg-slate-100 dark:text-slate-950 shadow-sm',
    outline:
      'border border-slate-300 dark:border-slate-700/80 hover:border-slate-400 dark:hover:border-slate-600 text-slate-800 dark:text-slate-200 bg-white/50 dark:bg-slate-900/40 hover:bg-slate-100 dark:hover:bg-slate-800/60',
    ghost:
      'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/60 hover:text-slate-900 dark:hover:text-white',
    glass:
      'bg-white/80 dark:bg-slate-900/70 backdrop-blur-md border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-100 hover:border-blue-500/50 hover:bg-white dark:hover:bg-slate-800/90 shadow-sm',
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${variantStyles[variant] || variantStyles.primary} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        download={download}
        target={target}
        rel={target === '_blank' ? (rel || 'noopener noreferrer') : rel}
        className={combinedClasses}
        onClick={onClick}
        {...props}
      >
        {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0" aria-hidden="true" />}
        <span>{children}</span>
        {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0" aria-hidden="true" />}
      </a>
    );
  }

  return (
    <motion.button
      type={type}
      disabled={disabled}
      className={combinedClasses}
      onClick={onClick}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      {...props}
    >
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0" aria-hidden="true" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0" aria-hidden="true" />}
    </motion.button>
  );
};
