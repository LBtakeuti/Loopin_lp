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
  href = 'https://www.loopin.jp/signup',
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  children = '無料で始める'
}: StartFreeButtonProps) {
  // 外部URLの場合は a タグとして描画
  const isExternalUrl = href && (href.startsWith('http://') || href.startsWith('https://'));

  // href が指定されている場合は Link または a として描画
  if (href && !onClick && type === 'button') {
    if (isExternalUrl) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer">
          <ButtonColorful
            label={typeof children === 'string' ? children : '無料で始める'}
            className={cn("font-medium", className)}
            disabled={disabled}
          />
        </a>
      );
    }
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
