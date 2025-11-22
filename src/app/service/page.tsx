import { services } from '../../data/servicesData';
import styles from './services.module.scss';
import Link from 'next/link';

const ServicesPage = () => {
    return (
        <div className={styles.servicesPage}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.container}>
                    <div className={styles.heroContent}>
                        <div className={styles.heroText}>
                            <div className={styles.sectionLabel}>
                                <span className={styles.labelLine}></span>
                                <span className={styles.labelText}>OUR SERVICES</span>
                            </div>
                            <h1 className={styles.heroTitle}>
                                Accelerate Your Career. 
                                <span className={styles.highlight}> Achieve Your Goals.</span>
                            </h1>
                            <p className={styles.heroDescription}>
                                Discover how our top career coach can empower you for success and help you achieve your professional goals.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className={styles.servicesSection}>
                <div className={styles.container}>
                    <div className={styles.servicesGrid}>
                        {services.map((service, index) => (
                            <div key={service.id} className={styles.serviceCard}>
                                <div className={styles.cardContent}>
                                    <div className={styles.cardIcon}>
                                        {service.icon || (
                                            <div className={styles.defaultIcon}>
                                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                                                </svg>
                                            </div>
                                        )}
                                    </div>
                                    <h3 className={styles.cardTitle}>{service.title}</h3>
                                    <p className={styles.cardDescription}>{service.description}</p>
                                    <Link href={`/service/${service.slug}`} className={styles.learnMoreLink}>
                                        Learn More →
                                    </Link>
                                </div>
                                <div className={styles.cardHoverEffect}></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className={styles.ctaSection}>
                <div className={styles.container}>
                    <div className={styles.ctaContent}>
                        <h2 className={styles.ctaTitle}>Ready to Transform Your Career?</h2>
                        <p className={styles.ctaDescription}>
                            Take the first step towards achieving your professional goals with our expert career coaching services.
                        </p>
                        <div className={styles.ctaButtons}>
                            <button className={styles.ctaPrimary}>Get Started Today</button>
                            <button className={styles.ctaSecondary}>Schedule Consultation</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServicesPage;