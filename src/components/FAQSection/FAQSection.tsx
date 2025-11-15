// components/FAQSection.tsx
'use client';

import { useState } from 'react';
import { FAQItem } from '@/src/types/faqs';
import { faqData } from '../..//data/faqs';
import FAQAccordion from './FAQAccordion';
import styles from './FAQSection.module.scss';
import Image from 'next/image';
import faqsImg from '../../../public/mobile-phone-illustration-5277385_640.png'
const FAQSection = () => {
    const [faqs, setFaqs] = useState<FAQItem[]>(faqData);

    const toggleFAQ = (id: string) => {
        setFaqs(faqs.map(faq => ({
            ...faq,
            isOpen: faq.id === id ? !faq.isOpen : false
        })));
    };

    return (
        <section className={styles.faqSection}>
            <div className={styles.container}>
                {/* Header */}
                <div className={styles.header}>
                    <h2 className={styles.title}>Frequently Asked Questions</h2>
                    <p className={styles.subtitle}>
                        Get answers to common questions about scheduling pocket money and managing allowances
                    </p>
                </div>

                {/* Content */}
                <div className={styles.content}>
                    {/* Mobile Image Side */}
                    <div className={styles.imageSide}>
                        <div className={styles.mobileMockup}>
                            <div className={styles.mobileFrame}>
                                <Image
                                    src={faqsImg}
                                    alt="faqs images mobile"
                                    className={styles.mobileImage}
                                //   width={100} height={100}
                                />
                                {/* Fallback placeholder if image doesn't exist */}
                                <div className={styles.placeholderUI}>
                                    <div className={styles.placeholderHeader}>
                                        <div className={styles.placeholderNav}></div>
                                    </div>
                                    <div className={styles.placeholderContent}>
                                        <div className={styles.placeholderCard}>
                                            <div className={styles.placeholderText}></div>
                                            <div className={styles.placeholderText}></div>
                                        </div>
                                        <div className={styles.placeholderList}>
                                            <div className={styles.placeholderItem}></div>
                                            <div className={styles.placeholderItem}></div>
                                            <div className={styles.placeholderItem}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Accordion Side */}
                    <div className={styles.accordionSide}>
                        <div className={styles.accordionContainer}>
                            {faqs.map((faq) => (
                                <FAQAccordion
                                    key={faq.id}
                                    faq={faq}
                                    isOpen={faq.isOpen || false}
                                    onToggle={() => toggleFAQ(faq.id)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;