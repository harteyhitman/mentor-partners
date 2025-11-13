// components/PendoSections.tsx
'use client';

import { pendoSections } from '../../data/WhoWeServe';
import PendoCard from './PendoCard';
import styles from './PendoSections.module.scss';

const PendoSections = () => {
  return (
    <section className={styles.pendoSections}>
      <div className={styles.backgroundGlow}></div>
      <div className={styles.container}>
        <div className={styles.grid}>
          {pendoSections.map((section, index) => (
            <PendoCard 
              key={section.id} 
              section={section}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PendoSections;