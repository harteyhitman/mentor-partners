'use client';

import { useState } from 'react';
import NextVideo from 'next-video';
import styles from './Videotestimonials.module.scss';

// Import your video files
import MrsMarvellowsVideo from '../../../videos/angella-watermark-remover-fulll.mp4';
import ChiefNwogbeVideo from '../../../videos/gideon-veed.mp4';

const TestimonialsPage = () => {
    const [selectedVideo, setSelectedVideo] = useState<any>(null);
    const [activeCategory, setActiveCategory] = useState('all');

    const testimonials = [
        // Video testimonials
        {
            id: 1,
            type: 'video',
            name: "Angela",
            role: "Parent & Education Advocate",
            company: "Global Learning Initiative",
            video: MrsMarvellowsVideo,
            thumbnail: "/images/testimonials/mrs-marvellows-thumb.jpg",
            quote: "To see what Mrs Marvellows has to say about Little",
            description: "Hear firsthand experience about the transformative impact on early childhood education and development.",
            category: "parents"
        },
        {
            id: 2,
            type: 'video',
            name: "Gideon",
            role: "Community Leader", 
            company: "Traditional Council",
            video: ChiefNwogbeVideo,
            thumbnail: "/images/testimonials/chief-nwogbe-thumb.jpg",
            quote: "To see what Chief Nwogbe has to say about Little",
            description: "Discover how our programs are making a difference in communities and creating lasting positive change.",
            category: "community"
        },
        // Text testimonials from screenshot
        {
            id: 3,
            type: 'text',
            name: "Sarah Chen",
            role: "Senior Product Manager",
            company: "",
            quote: "After just 6 months in the program, I was promoted to Senior Product Manager. My mentor's guidance was invaluable in navigating corporate challenges and developing my leadership skills.",
            category: "career",
            featured: true
        },
        {
            id: 4,
            type: 'text',
            name: "Mark J.",
            role: "",
            company: "",
            quote: "Landed my dream startup role!",
            category: "career"
        },
        {
            id: 5,
            type: 'text',
            name: "Priya S.",
            role: "",
            company: "",
            quote: "Negotiated a 30% salary increase.",
            category: "career"
        },
        {
            id: 6,
            type: 'text',
            name: "David L.",
            role: "",
            company: "",
            quote: "Finally launched our own business.",
            category: "entrepreneurship"
        },
        {
            id: 7,
            type: 'text',
            name: "Jessica W.",
            role: "",
            company: "",
            quote: "Gained the confidence to lead my team.",
            category: "leadership"
        },
        {
            id: 8,
            type: 'text',
            name: "Michael B.",
            role: "",
            company: "",
            quote: "Successfully transitioned into a new industry.",
            category: "career"
        },
        {
            id: 9,
            type: 'text',
            name: "Emily R.",
            role: "",
            company: "",
            quote: "Built a network of invaluable contacts.",
            category: "networking"
        }
    ];

    const categories = [
        { id: 'all', label: 'All Testimonials' },
        { id: 'career', label: 'Career Growth' },
        { id: 'leadership', label: 'Leadership' },
        { id: 'entrepreneurship', label: 'Entrepreneurship' },
        { id: 'networking', label: 'Networking' },
        { id: 'parents', label: 'Parents' },
        { id: 'community', label: 'Community' }
    ];

    const filteredTestimonials = activeCategory === 'all' 
        ? testimonials 
        : testimonials.filter(testimonial => testimonial.category === activeCategory);

    const featuredTestimonial = testimonials.find(t => t.featured);

    const handleVideoSelect = (testimonial: any) => {
        if (testimonial.type === 'video') {
            setSelectedVideo(testimonial);
        }
    };

    const handleCloseVideo = () => {
        setSelectedVideo(null);
    };

    return (
        <div className={styles.testimonialsPage}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroBackground}>
                    <div className={styles.floatingOrb1}></div>
                    <div className={styles.floatingOrb2}></div>
                    <div className={styles.floatingOrb3}></div>
                </div>
                
                <div className={styles.heroContent}>
                    <div className={styles.heroText}>
                        <h1 className={styles.heroTitle}>
                            Hear From Our Successful Mentees
                        </h1>
                        <p className={styles.heroSubtitle}>
                            Discover how our mentorship programs have transformed careers.
                        </p>
                    </div>
                </div>
            </section>

            {/* Featured Testimonial Section */}
            {/* {featuredTestimonial && (
                <section className={styles.featuredSection}>
                    <div className={styles.container}>
                        <div className={styles.featuredHeader}>
                            <span className={styles.featuredLabel}>FEATURED MENTEE</span>
                        </div>
                        <div className={styles.featuredCard}>
                            <div className={styles.featuredContent}>
                                <h2 className={styles.featuredName}>{featuredTestimonial.name}</h2>
                                <p className={styles.featuredRole}>{featuredTestimonial.role}</p>
                                <blockquote className={styles.featuredQuote}>
                                    {featuredTestimonial.quote}
                                </blockquote>
                            </div>
                            <div className={styles.featuredActions}>
                                <button className={styles.primaryButton}>
                                    Get Started
                                </button>
                                <button className={styles.secondaryButton}>
                                    View more success stories
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            )} */}

            {/* Main Content Area */}
            <section className={styles.mainContent}>
                <div className={styles.container}>
                    {/* Selected Video Section */}
                    {selectedVideo && (
                        <div className={styles.selectedVideoSection}>
                            <div className={styles.selectedVideoHeader}>
                                <h2 className={styles.selectedVideoTitle}>
                                    Now Playing: {selectedVideo.name}'s Story
                                </h2>
                                <button 
                                    className={styles.closeButton}
                                    onClick={handleCloseVideo}
                                >
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M18 6L6 18M6 6l12 12"/>
                                    </svg>
                                </button>
                            </div>
                            <div className={styles.selectedVideoContainer}>
                                <div className={styles.videoPlayerWrapper}>
                                    <NextVideo
                                        src={selectedVideo.video}
                                        className={styles.videoPlayer}
                                        controls
                                        autoPlay
                                    />
                                </div>
                                <div className={styles.videoDetails}>
                                    <h3 className={styles.videoPersonName}>{selectedVideo.name}</h3>
                                    <p className={styles.videoPersonRole}>{selectedVideo.role}</p>
                                    <p className={styles.videoPersonCompany}>{selectedVideo.company}</p>
                                    <div className={styles.videoDescription}>
                                        <p>{selectedVideo.description}</p>
                                    </div>
                                    <blockquote className={styles.videoQuote}>
                                        "{selectedVideo.quote}"
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Filter Section */}
                    <div className={styles.filterSection}>
                        <div className={styles.filterTabs}>
                            {categories.map(category => (
                                <button
                                    key={category.id}
                                    className={`${styles.filterTab} ${
                                        activeCategory === category.id ? styles.active : ''
                                    }`}
                                    onClick={() => setActiveCategory(category.id)}
                                >
                                    {category.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Testimonials Grid */}
                    <div className={styles.testimonialsGrid}>
                        {filteredTestimonials.map((testimonial) => (
                            <div 
                                key={testimonial.id} 
                                className={`${styles.testimonialCard} ${
                                    testimonial.type === 'video' ? styles.videoCard : styles.textCard
                                } ${selectedVideo?.id === testimonial.id ? styles.active : ''}`}
                                onClick={() => handleVideoSelect(testimonial)}
                            >
                                {testimonial.type === 'video' ? (
                                    // Video testimonial card
                                    <div className={styles.videoCardContent}>
                                        <div className={styles.videoThumbnail}>
                                            <NextVideo
                                                src={testimonial.video}
                                                className={styles.thumbnailVideo}
                                                muted
                                                loop
                                                playsInline
                                            />
                                            <div className={styles.playButton}>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path d="M5 3l14 9-14 9V3z"/>
                                                </svg>
                                            </div>
                                            <div className={styles.videoOverlay}></div>
                                        </div>
                                        <div className={styles.videoCardInfo}>
                                            <h4 className={styles.cardName}>{testimonial.name}</h4>
                                            <p className={styles.cardRole}>{testimonial.role}</p>
                                            <p className={styles.cardQuote}>"{testimonial.quote}"</p>
                                        </div>
                                    </div>
                                ) : (
                                    // Text testimonial card
                                    <div className={styles.textCardContent}>
                                        <div className={styles.quoteIcon}>❝</div>
                                        <blockquote className={styles.textQuote}>
                                            "{testimonial.quote}"
                                        </blockquote>
                                        <div className={styles.textCardInfo}>
                                            <h4 className={styles.cardName}>{testimonial.name}</h4>
                                            {testimonial.role && (
                                                <p className={styles.cardRole}>{testimonial.role}</p>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className={styles.ctaSection}>
                <div className={styles.container}>
                    <div className={styles.ctaContent}>
                        <h2 className={styles.ctaTitle}>Ready to Start Your Success Story?</h2>
                        <p className={styles.ctaDescription}>
                            Join thousands of mentees who have transformed their careers and lives through our mentorship programs.
                        </p>
                        <div className={styles.ctaButtons}>
                            <button className={styles.ctaPrimary}>Get Started Today</button>
                            <button className={styles.ctaSecondary}>Schedule a Consultation</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TestimonialsPage;