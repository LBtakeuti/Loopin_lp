import Link from 'next/link';
import React from 'react';
import { ButtonColorful } from '@/components/ui/button-colorful';
import { cn } from '@/lib/utils';

interface StartFreeButtonProps {
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export default function StartFreeButton({
  href = '/contact',
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  children = '無料で始める'
}: StartFreeButtonProps) {
  // href が指定されている場合は Link として描画
  if (href && !onClick && type === 'button') {
    return (
      <Link href={href}>
        <ButtonColorful
          label={typeof children === 'string' ? children : '無料で始める'}
          className={cn("font-medium", className)}
          disabled={disabled}
        />
      </Link>
    );
  }

  // type="submit" または onClick が指定されている場合は button として描画
  return (
    <ButtonColorful
      type={type}
      onClick={onClick}
      disabled={disabled}
      label={typeof children === 'string' ? children : '無料で始める'}
      className={cn("font-medium", className)}
    />
  );
}
