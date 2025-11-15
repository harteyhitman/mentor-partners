import { useState, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';
import styles from './HeroSection.module.scss'
import Slider1 from '../../../public/heroSlider-img/intership2-scaled.jpg'
import Slider2 from '../../../public/heroSlider-img/career1-scaled.jpg'
import Slider3 from '../../../public/heroSlider-img/mentor1.jpg'
import Slider4 from '../../../public/heroSlider-img/coaching1-scaled.jpg'
import Slider5 from '../../../public/heroSlider-img/gap-analysis-scaled.jpg'
import Slider6 from '../../../public/heroSlider-img/career-gap-analysis-scaled.jpg'
interface Slide {
  id: number;
  image: StaticImageData;
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
}

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const slides: Slide[] = [
    {
      id: 1,
      image: Slider1,
      title: 'Global Internship Program',
      subtitle: 'Gain Real-World Experience',
      description: 'Work with international companies and build market readiness through industry-specific projects.',
      ctaText: 'Learn More'
    },
    {
      id: 2,
      image: Slider2,
      title: 'Career Development',
      subtitle: 'Personalized Career Plan',
      description: 'Get expert guidance with cap analysis, coaching, and mentorship to achieve your professional goals.',
      ctaText: 'Get Started'
    },
    {
      id: 3,
      image: Slider3,
      title: 'Industry Mentorship',
      subtitle: 'Learn from Experts',
      description: 'Connect with mentors from top global companies including Google, Microsoft, Meta, and more.',
      ctaText: 'Find a Mentor'
    },
    {
      id: 4,
      image: Slider4,
      title: 'Job Support',
      subtitle: 'Career Transition Support',
      description: 'Comprehensive job support and interview preparation to land your dream role.',
      ctaText: 'Explore Opportunities'
    },
    {
      id: 5,
      image: Slider5,
      title: 'Job Support',
      subtitle: 'Career Transition Support',
      description: 'Comprehensive job support and interview preparation to land your dream role.',
      ctaText: 'Explore Opportunities'
    },
    {
      id: 6,
      image: Slider6,
      title: 'Job Support',
      subtitle: 'Career Transition Support',
      description: 'Comprehensive job support and interview preparation to land your dream role.',
      ctaText: 'Explore Opportunities'
    },
  ];

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentSlide) return;
    setIsAnimating(true);
    setCurrentSlide(index);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [currentSlide]);

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide, isAnimating]);

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.sliderWrapper}>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`${styles.slide} ${
              index === currentSlide ? styles.active : ''
            } ${isAnimating ? styles.animating : ''}`}
          >
            <div className={styles.imageContainer}>
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className={styles.slideImage}
                priority={index === 0}
              />
              <div className={styles.imageOverlay}></div>
            </div>

            <div className={styles.content}>
              <div className={styles.textContent}>
                <div className={styles.textWrapper}>
                  <h2 className={styles.title}>{slide.title}</h2>
                  <h3 className={styles.subtitle}>{slide.subtitle}</h3>
                  <p className={styles.description}>{slide.description}</p>
                  <button className={styles.ctaButton}>
                    {slide.ctaText}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button className={`${styles.navButton} ${styles.prevButton}`} onClick={prevSlide}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <button className={`${styles.navButton} ${styles.nextButton}`} onClick={nextSlide}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* Dots Navigation */}
      <div className={styles.dotsContainer}>
        {slides.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${
              index === currentSlide ? styles.active : ''
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className={styles.progressBar}>
        <div 
          className={styles.progressFill} 
          key={currentSlide}
        />
      </div>
    </div>
  );
};

export default ImageSlider;