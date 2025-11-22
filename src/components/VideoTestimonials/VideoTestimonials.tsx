'use client';

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import styles from './VideoTestimonials.module.scss';
import NextVideo from 'next-video';
// Import your video files
import MrsMarvellowsVideo from '../../../videos/angella-watermark-remover-fulll.mp4';
import ChiefNwogbeVideo from '../../../videos/gideon-veed.mp4';

const VideoTestimonials = () => {
    const [activeVideo, setActiveVideo] = useState<number | null>(null);
    const [isHovered, setIsHovered] = useState(false);
    const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
    const router = useRouter();

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
                video.currentTime = 0; // Reset to beginning
            }
        });
        setActiveVideo(index);
    };

    const handleVideoPause = (index: number) => {
        if (activeVideo === index) {
            setActiveVideo(null);
        }
    };

    const handleVideoEnd = (index: number) => {
        setActiveVideo(null);
        // Reset the video to beginning
        const video = videoRefs.current[index];
        if (video) {
            video.currentTime = 0;
        }
    };

    const handleCardClick = (index: number) => {
        const video = videoRefs.current[index];
        if (video) {
            if (video.paused) {
                video.play();
            } else {
                video.pause();
            }
        }
    };

    const handleViewAllTestimonials = () => {
        router.push('/testimonials');
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
                        <div 
                            key={testimonial.id} 
                            className={`${styles.testimonialCard} ${activeVideo === index ? styles.playing : ''}`}
                        >
                            <div className={styles.videoCardContent}>
                                <div 
                                    className={styles.videoThumbnail}
                                    onClick={() => handleCardClick(index)}
                                >
                                    <NextVideo
                                        ref={(el) => {
                                            videoRefs.current[index] = el;
                                        }}
                                        src={testimonial.video}
                                        className={styles.thumbnailVideo}
                                        // muted
                                        loop={false}
                                        playsInline
                                        onPlay={() => handleVideoPlay(index)}
                                        onPause={() => handleVideoPause(index)}
                                        onEnded={() => handleVideoEnd(index)}
                                    />
                                    {/* Play/Pause Overlay */}
                                    <div className={`${styles.videoOverlay} ${activeVideo === index ? styles.playing : ''}`}>
                                        {activeVideo !== index && (
                                            <div className={styles.playButton}>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path d="M5 3l14 9-14 9V3z"/>
                                                </svg>
                                            </div>
                                        )}
                                        {activeVideo === index && (
                                            <div className={styles.pauseButton}>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <rect x="6" y="4" width="4" height="16"/>
                                                    <rect x="14" y="4" width="4" height="16"/>
                                                </svg>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className={styles.videoCardInfo}>
                                    <h4 className={styles.cardName}>{testimonial.name}</h4>
                                    <p className={styles.cardRole}>{testimonial.role}</p>
                                    <p className={styles.cardQuote}>"{testimonial.quote}"</p>
                                    <div className={styles.videoControls}>
                                        <button 
                                            className={styles.controlButton}
                                            onClick={() => handleCardClick(index)}
                                        >
                                            {activeVideo === index ? (
                                                <>
                                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                        <rect x="6" y="4" width="4" height="16"/>
                                                        <rect x="14" y="4" width="4" height="16"/>
                                                    </svg>
                                                    Pause
                                                </>
                                            ) : (
                                                <>
                                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                        <path d="M5 3l14 9-14 9V3z"/>
                                                    </svg>
                                                    Play Video
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Navigation Button */}
                <div className={styles.navigationSection}>
                    <button 
                        className={styles.navigationButton}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        onClick={handleViewAllTestimonials}
                    >
                        <span className={styles.buttonText}>View All Testimonials</span>
                        <div className={styles.buttonHoverEffect}></div>
                        <div className={styles.buttonIcon}>
                            <svg 
                                width="20" 
                                height="20" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="currentColor" 
                                strokeWidth="2"
                            >
                                <path d="M5 12h14M12 5l7 7-7 7"/>
                            </svg>
                        </div>
                        <div className={`${styles.buttonSparkle} ${isHovered ? styles.active : ''}`}></div>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default VideoTestimonials;