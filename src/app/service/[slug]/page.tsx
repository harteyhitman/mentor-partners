import { notFound } from 'next/navigation';
import { services, Service } from '../../../data/servicesData';
import styles from './serviceDetail.module.scss';
import Link from 'next/link';

interface ServiceDetailPageProps {
    params: {
        slug: string;
    };
}

export async function generateStaticParams() {
    return services.map((service) => ({
        slug: service.slug,
    }));
}

export async function generateMetadata({ params }: ServiceDetailPageProps) {
    const service = services.find((s) => s.slug === params.slug);
    
    if (!service) {
        return {
            title: 'Service Not Found',
        };
    }

    return {
        title: `${service.title} | Career Coaching Services`,
        description: service.description,
    };
}

const ServiceDetailPage = ({ params }: ServiceDetailPageProps) => {
    const service = services.find((s) => s.slug === params.slug);

    if (!service) {
        notFound();
    }

    return (
        <div className={styles.serviceDetailPage}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.container}>
                    <div className={styles.breadcrumb}>
                        <Link href="/service" className={styles.breadcrumbLink}>Services</Link>
                        <span className={styles.breadcrumbSeparator}>/</span>
                        <span className={styles.breadcrumbCurrent}>{service.title}</span>
                    </div>
                    
                    <div className={styles.heroContent}>
                        <div className={styles.heroText}>
                            <h1 className={styles.heroTitle}>{service.title}</h1>
                            <p className={styles.heroDescription}>{service.longDescription}</p>
                            
                            <div className={styles.serviceMeta}>
                                {service.price && (
                                    <div className={styles.metaItem}>
                                        <span className={styles.metaLabel}>Investment:</span>
                                        <span className={styles.metaValue}>{service.price}</span>
                                    </div>
                                )}
                                {service.duration && (
                                    <div className={styles.metaItem}>
                                        <span className={styles.metaLabel}>Duration:</span>
                                        <span className={styles.metaValue}>{service.duration}</span>
                                    </div>
                                )}
                            </div>

                            <div className={styles.heroActions}>
                                <button className={styles.primaryButton}>Get Started</button>
                                <button className={styles.secondaryButton}>Schedule Consultation</button>
                            </div>
                        </div>
                        
                        <div className={styles.heroVisual}>
                            <div className={styles.serviceIcon}>
                                <div className={styles.defaultIcon}>
                                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            {service.features && (
                <section className={styles.featuresSection}>
                    <div className={styles.container}>
                        <h2 className={styles.sectionTitle}>What's Included</h2>
                        <div className={styles.featuresGrid}>
                            {service.features.map((feature, index) => (
                                <div key={index} className={styles.featureItem}>
                                    <div className={styles.featureIcon}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M20 6L9 17l-5-5"/>
                                        </svg>
                                    </div>
                                    <span className={styles.featureText}>{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Benefits Section */}
            {service.benefits && (
                <section className={styles.benefitsSection}>
                    <div className={styles.container}>
                        <h2 className={styles.sectionTitle}>Key Benefits</h2>
                        <div className={styles.benefitsGrid}>
                            {service.benefits.map((benefit, index) => (
                                <div key={index} className={styles.benefitCard}>
                                    <h3 className={styles.benefitTitle}>Benefit {index + 1}</h3>
                                    <p className={styles.benefitDescription}>{benefit}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Process Section */}
            {service.process && (
                <section className={styles.processSection}>
                    <div className={styles.container}>
                        <h2 className={styles.sectionTitle}>Our Process</h2>
                        <div className={styles.processSteps}>
                            {service.process.map((step, index) => (
                                <div key={index} className={styles.processStep}>
                                    <div className={styles.stepNumber}>{index + 1}</div>
                                    <div className={styles.stepContent}>
                                        <h3 className={styles.stepTitle}>Step {index + 1}</h3>
                                        <p className={styles.stepDescription}>{step}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* CTA Section */}
            <section className={styles.ctaSection}>
                <div className={styles.container}>
                    <div className={styles.ctaContent}>
                        <h2 className={styles.ctaTitle}>Ready to Get Started?</h2>
                        <p className={styles.ctaDescription}>
                            Take the first step towards transforming your career with our {service.title} service.
                        </p>
                        <div className={styles.ctaButtons}>
                            <button className={styles.ctaPrimary}>Begin Your Journey</button>
                            <Link href="/service" className={styles.ctaSecondary}>
                                Explore Other Services
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServiceDetailPage;