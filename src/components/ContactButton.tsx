import Link from 'next/link';
import React from 'react';

interface ContactButtonProps {
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export default function ContactButton({
  href = '/contact',
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  children = 'お問い合わせ'
}: ContactButtonProps) {
  const baseClasses = `
    inline-block px-8 py-3 rounded-lg font-medium text-white
    bg-gradient-to-r from-purple-500 via-blue-500 to-teal-400
    hover:from-purple-600 hover:via-blue-600 hover:to-teal-500
    transform transition-all duration-300 hover:scale-105
    shadow-lg hover:shadow-xl
    disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
    ${className}
  `.trim();

  if (href && !onClick) {
    return (
      <Link href={href} className={baseClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
    >
      {children}
    </button>
  );
}