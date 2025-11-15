// components/FAQAccordion.tsx
import { FAQItem } from '../../types/faqs';
import styles from './FAQAccordion.module.scss';

interface FAQAccordionProps {
  faq: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQAccordion: React.FC<FAQAccordionProps> = ({ faq, isOpen, onToggle }) => {
  return (
    <div className={`${styles.faqAccordion} ${isOpen ? styles.open : ''}`}>
      <button 
        className={styles.accordionHeader}
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <h3 className={styles.question}>{faq.question}</h3>
        <span className={styles.accordionIcon}>
          {isOpen ? '−' : '+'}
        </span>
      </button>
      
      <div className={styles.accordionContent}>
        <div className={styles.answer}>
          <p>{faq.answer}</p>
        </div>
      </div>
    </div>
  );
};

export default FAQAccordion;