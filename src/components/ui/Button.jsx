import React from 'react';
import { Link } from 'react-router-dom';

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  href,
  to,
  download,
  target,
  rel,
  onClick,
  disabled = false,
  type = 'button',
  icon: Icon,
  iconPosition = 'left',
  ...props
}) {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] select-none cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed disabled:pointer-events-none";

  const sizeStyles = {
    sm: "px-3 py-1.5 text-xs gap-1.5",
    md: "px-4 py-2 text-sm gap-2",
    lg: "px-6 py-3 text-base gap-2.5 font-semibold",
  };

  const variantStyles = {
    primary: "bg-blue-600 hover:bg-blue-500 text-white shadow-sm hover:shadow-md hover:shadow-blue-500/20 focus-visible:outline-blue-500 dark:bg-blue-600 dark:hover:bg-blue-500",
    secondary: "bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white shadow-sm",
    outline: "border border-slate-300 dark:border-slate-700 bg-white/70 dark:bg-slate-800/70 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700/80 backdrop-blur-xs",
    ghost: "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/80 hover:text-slate-900 dark:hover:text-white",
    danger: "bg-rose-600 hover:bg-rose-500 text-white shadow-sm focus-visible:outline-rose-500"
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${variantStyles[variant] || variantStyles.primary} ${className}`;

  const iconElement = Icon ? (
    <Icon className={`${size === 'sm' ? 'w-3.5 h-3.5' : size === 'lg' ? 'w-5 h-5' : 'w-4 h-4'} shrink-0`} />
  ) : null;

  if (to) {
    return (
      <Link to={to} className={combinedClasses} {...props}>
        {iconPosition === 'left' && iconElement}
        <span>{children}</span>
        {iconPosition === 'right' && iconElement}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        download={download}
        target={target}
        rel={target === '_blank' && !rel ? 'noopener noreferrer' : rel}
        onClick={onClick}
        {...props}
      >
        {iconPosition === 'left' && iconElement}
        <span>{children}</span>
        {iconPosition === 'right' && iconElement}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={combinedClasses}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {iconPosition === 'left' && iconElement}
      <span>{children}</span>
      {iconPosition === 'right' && iconElement}
    </button>
  );
}
