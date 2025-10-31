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
    inline-block rounded-lg font-medium
    bg-white text-gray-700 border-2 border-gray-300
    hover:bg-gray-50 hover:border-gray-400
    transform transition-all duration-300 hover:scale-105
    shadow-sm hover:shadow-md
    disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
    ${className}
  `.trim();

  // type="submit" または onClick が指定されている場合は button として描画
  if (type === 'submit' || type === 'reset' || onClick) {
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

  // href が指定されている場合は Link として描画
  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {children}
      </Link>
    );
  }

  // デフォルトは button
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