// components/PendoCard.tsx
'use client';

import { PendoSection } from '../../types/pendo';
import styles from './PendoCard.module.scss';

interface PendoCardProps {
  section: PendoSection;
  index: number;
}

const PendoCard: React.FC<PendoCardProps> = ({ section, index }) => {
  // Color rotation based on index for variety
  const colorVariants = [
    styles.primary,    // Blue
    styles.secondary,  // Teal
    styles.accent,     // Sky blue
    styles.highlight,  // Amber
    styles.info,       // Info blue
    styles.success     // Green
  ];
  
  const colorClass = colorVariants[index % colorVariants.length];

  return (
    <div className={`${styles.pendoCard} ${colorClass}`}>
      <div className={styles.cardGlow}></div>
      <div className={styles.content}>
        <h3 className={styles.title}>{section.title}</h3>
        <p className={styles.description}>{section.description}</p>
        <a href={`/pendo/${section.slug}`} className={styles.ctaLink}>
          {section.ctaText}
          <span className={styles.ctaArrow}>→</span>
        </a>
      </div>
    </div>
  );
};

export default PendoCard;