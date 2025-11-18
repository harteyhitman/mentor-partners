// components/VideoTestimonials/VideoTestimonials.tsx
'use client';

import { useState, useRef } from 'react';
import styles from './VideoTestimonials.module.scss';
import NextVideo from 'next-video';
// Import your video files
import MrsMarvellowsVideo from '../../../videos/angella-watermark-remover-fulll.mp4';
import ChiefNwogbeVideo from '../../../videos/gideon-veed.mp4';

const VideoTestimonials = () => {
    const [activeVideo, setActiveVideo] = useState<number | null>(null);
    const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

    const testimonials = [
        {
            id: 1,
            name: "Angela",
            role: "Parent & Education Advocate",
            company: "Global Learning Initiative",
            video: MrsMarvellowsVideo,
            thumbnail: "/images/testimonials/mrs-marvellows-thumb.jpg",
            quote: "To see what Mrs Marvellows has to say about Little",
            description: "Hear firsthand experience about the transformative impact on early childhood education and development."
        },
        {
            id: 2,
            name: "Gideon",
            role: "Community Leader",
            company: "Traditional Council",
            video: ChiefNwogbeVideo,
            thumbnail: "/images/testimonials/chief-nwogbe-thumb.jpg",
            quote: "To see what Chief Nwogbe has to say about Little",
            description: "Discover how our programs are making a difference in communities and creating lasting positive change."
        },
    ];

    const handleVideoPlay = (index: number) => {
        // Pause all other videos
        videoRefs.current.forEach((video, i) => {
            if (video && i !== index) {
                video.pause();
            }
        });
        setActiveVideo(index);
    };

    const handleVideoEnd = (index: number) => {
        setActiveVideo(null);
    };

    return (
        <section className={styles.videoTestimonials}>
            {/* Animated Background Elements */}
            <div className={styles.backgroundElements}>
                <div className={styles.floatingOrb1}></div>
                <div className={styles.floatingOrb2}></div>
                <div className={styles.floatingOrb3}></div>
            </div>

            <div className={styles.container}>
                {/* Section Header - Matching FoundersNote Style */}
                <div className={styles.header}>
                    <div className={styles.sectionLabel}>
                        <span className={styles.labelLine}></span>
                        <span className={styles.labelText}>TESTIMONIALS</span>
                    </div>
                    <h2 className={styles.title}>
                        Hear From Our
                        <span className={styles.highlight}> Community</span>
                    </h2>
                    <p className={styles.subtitle}>
                        Discover how we're making a difference through the voices of those who matter most -
                        our partners, parents, and community leaders.
                    </p>
                </div>

                {/* Video Testimonials Grid */}
                <div className={styles.testimonialsGrid}>
                    {testimonials.map((testimonial, index) => (
                        <div key={testimonial.id} className={styles.testimonialCard}>
                            {/* Video Container - Fixed for full display */}
                            <div className={styles.videoSection}>
                                <div className={styles.videoContainer}>
                                    <div className={styles.videoWrapper}>
                                        <NextVideo
                                            ref={(el) => {
                                                videoRefs.current[index] = el;
                                            }}
                                            src={testimonial.video}
                                            className={styles.videoPlayer}
                                            // poster={testimonial.thumbnail}
                                            controls
                                            onPlay={() => handleVideoPlay(index)}
                                            onEnded={() => handleVideoEnd(index)}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Testimonial Content */}
                            <div className={styles.testimonialContent}>
                                <div className={styles.quoteSection}>
                                    <div className={styles.quoteIcon}>❝</div>
                                    <blockquote className={styles.quote}>
                                        {testimonial.quote}
                                    </blockquote>
                                </div>

                                <div className={styles.testimonialInfo}>
                                    <div className={styles.personInfo}>
                                        <h3 className={styles.personName}>{testimonial.name}</h3>
                                        <p className={styles.personRole}>{testimonial.role}</p>
                                        <p className={styles.personCompany}>{testimonial.company}</p>
                                    </div>

                                    <div className={styles.description}>
                                        <p>{testimonial.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Stats Section - Enhanced Styling */}
                <div className={styles.statsSection}>
                    <div className={styles.statItem}>
                        <div className={styles.statNumber}>500+</div>
                        <div className={styles.statLabel}>Happy Families</div>
                    </div>
                    <div className={styles.statItem}>
                        <div className={styles.statNumber}>98%</div>
                        <div className={styles.statLabel}>Satisfaction Rate</div>
                    </div>
                    <div className={styles.statItem}>
                        <div className={styles.statNumber}>50+</div>
                        <div className={styles.statLabel}>Communities Served</div>
                    </div>
                    <div className={styles.statItem}>
                        <div className={styles.statNumber}>5★</div>
                        <div className={styles.statLabel}>Average Rating</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VideoTestimonials;