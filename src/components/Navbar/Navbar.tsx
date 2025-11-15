// src/components/Navbar/Navbar.tsx
'use client';

import { useState, useEffect } from 'react';
import styles from  './Navbar.module.scss'
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../../public/mentor-partners-images/cropped-cropped-MP-Logo-PNG-new-Photoroom.png';
import CTAButton from '../ui/button/button';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 100);
    };

    // Close mobile menu when scrolling
    const handleScrollCloseMenu = () => {
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleScrollCloseMenu);
    
    handleScroll(); // Check initial scroll position

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleScrollCloseMenu);
    };
  }, [isMenuOpen]);

  const navItems = [
    { href: '#Home', label: 'Home' },
    { href: '#Programs', label: 'Programs' },
    { href: '#Mentor-Network', label: 'Mentor Network' },
    { href: '#Newsroom', label: 'Newsroom' },
    { href: '#About-Us', label: 'About Us' },
  ];

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        {/* Logo */}
        <Link href='/' className={styles.logoLink}>
          <Image 
            src={Logo} 
            alt='Mentor Partners Logo'   
            width={50}
            height={50}
            priority
          />
        </Link>

        {/* Navigation Links - Desktop */}
        <div className={styles.navLinks}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href} 
              className={styles.navLink}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* CTA Button - Desktop */}
        <div className={styles.ctaContainer}>
          <CTAButton 
            href="https://tidycal.com/3e0nwzm/introcall-minute-meeting-1xgv629" 
            variant="primary" 
            size="sm"
            className={styles.ctaButton}
          >
           Start your journey
          </CTAButton>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={`${styles.menuButton} ${isMenuOpen ? styles.active : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Mobile Menu */}
        <div 
          className={`${styles.mobileMenu} ${isMenuOpen ? styles.active : ''}`}
          aria-hidden={!isMenuOpen}
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href} 
              className={styles.mobileNavLink}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          {/* CTA Button in Mobile Menu */}
          <div className={styles.mobileCTA}>
            <CTAButton 
              href="#contact" 
              variant="primary" 
              size="md"
              onClick={() => setIsMenuOpen(false)}
            >
             Start your journey
            </CTAButton>
          </div>
        </div>
      </div>
    </nav>
  );
}