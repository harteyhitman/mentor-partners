// src/components/Footer/Footer.tsx
'use client';

import { FaXTwitter } from "react-icons/fa6";
import styles from "./Footer.module.scss";
import { IoLogoInstagram } from "react-icons/io";
import { CiFacebook, CiLinkedin } from "react-icons/ci";
import Image from "next/image";
import Logo from '../../../public/mentor-partners-images/cropped-cropped-MP-Logo-PNG-new-Photoroom.png';
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Main Footer Content */}
        <div className={styles.mainContent}>
          {/* Mission Section */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Our Mission</h3>
            <p className={styles.missionText}>
              Empowering professionals to launch and elevate their careers through real-world mentorship, 
              hands-on training, and guided workplace experience. We help you grow faster – and confidently 
              build the future you want.
            </p>
            <div className={styles.socialSection}>
              <h4 className={styles.socialTitle}>Connect With Us</h4>
              <div className={styles.socials}>
                <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <FaXTwitter />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <IoLogoInstagram />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <CiFacebook />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <CiLinkedin />
                </a>
              </div>
            </div>
          </div>

          {/* Explore Section */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Explore</h3>
            <div className={styles.links}>
              <Link href="/courses">Courses</Link>
              <Link href="/events">Events</Link>
              <Link href="/mentors">Meet the Mentors</Link>
              <Link href="/become-mentor">Become a Mentor</Link>
              <Link href="/book-call">Book a Call</Link>
              <Link href="/newsletter">Newsletter</Link>
              <Link href="/blog">Blog</Link>
            </div>
          </div>

          {/* Trending Section */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Trending</h3>
            <div className={styles.trendingLinks}>
              <Link href="/top-skills">Top Skills to Boost Your Career</Link>
              <Link href="/industry-trends">Industry Trends to Watch: Expert Insights</Link>
            </div>
          </div>

          {/* Contact Section */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Contact</h3>
            <div className={styles.contactInfo}>
              <p className={styles.contactItem}>
                Warrington, United Kingdom
              </p>
              <p className={styles.contactItem}>
                +44 7380 102555
              </p>
              <p className={styles.contactItem}>
                +234 707 511 8971
              </p>
              <p className={styles.contactItem}>
                <a href="mailto:info@mentorpartners.co.uk" className={styles.emailLink}>
                  info@mentorpartners.co.uk
                </a>
              </p>
            </div>
          </div>

          {/* Legal Section */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Legal</h3>
            <div className={styles.legalLinks}>
              <Link href="/privacy-policy">Privacy Policy</Link>
              <Link href="/terms-conditions">Terms & Conditions</Link>
              <Link href="/disclaimer">Website Disclaimer</Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className={styles.divider} />

        {/* Bottom Section */}
        <div className={styles.bottomSection}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              <Image 
                src={Logo} 
                alt="Mentor Partners Logo" 
                width={40}
                height={40}
              />
            </div>
            <span className={styles.brandText}>
              <strong>Mentor Partners</strong> | Empowering Professional Growth
            </span>
          </div>
          
          <div className={styles.copyright}>
            <p>Mentor Partners ©2025. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;