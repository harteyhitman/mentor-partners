// src/components/CTAButton/CTAButton.tsx
'use client';

import { ButtonHTMLAttributes } from 'react';
import styles from './button.module.scss'
interface CTAButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  href?: string;
}

const CTAButton: React.FC<CTAButtonProps> = ({ 
  variant = 'primary', 
  size = 'md',
  children, 
  href,
  className = '',
  ...props 
}) => {
  const buttonClass = `${styles.ctaButton} ${styles[variant]} ${styles[size]} ${className}`;
  
  // If href is provided, render as link, otherwise as button
  if (href) {
    return (
      <a 
        href={href} 
        className={buttonClass}
        {...props as any}
      >
        <span className={styles.buttonText}>{children}</span>
        <div className={styles.buttonGlow}></div>
      </a>
    );
  }

  return (
    <button 
      className={buttonClass}
      {...props}
    >
      <span className={styles.buttonText}>{children}</span>
      <div className={styles.buttonGlow}></div>
    </button>
  );
};

export default CTAButton;