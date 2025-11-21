// components/TestimonialsSlider/TestimonialsSlider.tsx
'use client';

import { useState, useRef, useEffect } from 'react';
import styles from './Testimonials.module.scss'

interface Testimonial {
  id: number;
  number: string;
  text: string;
  name: string;
  position: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    number: "11",
    text: "The career consultation was a game-changer. I gained clarity and confidence, which led to a promotion within three months.",
    name: "Sarah L.",
    position: "Marketing Manager",
    image: "https://i.pravatar.cc/150?img=2"
  },
  {
    id: 2,
    number: "11",
    text: "Thanks to the LinkedIn optimization, my profile views skyrocketed, and I started receiving inquiries from top recruiters.",
    name: "Michael B.",
    position: "Software Engineer",
    image: "https://i.pravatar.cc/150?img=2"
  },
  {
    id: 3,
    number: "11",
    text: "The interview preparation was incredibly thorough. I felt so prepared and confident, and I landed my dream job!",
    name: "Jessica P.",
    position: "UX Designer",
    image: "https://i.pravatar.cc/150?img=2"
  },
  {
    id: 4,
    number: "11",
    text: "The resume writing service helped me stand out from hundreds of applicants. I got three interviews in the first week!",
    name: "David K.",
    position: "Project Manager",
    image: "https://i.pravatar.cc/150?img=2"
  },
  {
    id: 5,
    number: "11",
    text: "I was stuck in my career for years. The coaching sessions gave me the direction I needed to pivot successfully.",
    name: "Emily R.",
    position: "Sales Director",
    image: "https://i.pravatar.cc/150?img=2"
  },
  {
    id: 6,
    number: "11",
    text: "The salary negotiation guidance was invaluable. I secured a 20% higher offer than my initial expectation.",
    name: "Robert T.",
    position: "Data Scientist",
    image: "https://i.pravatar.cc/150?img=2"
  },
  {
    id: 7,
    number: "11",
    text: "The career transition program helped me move from finance to tech. I couldn't have done it without their support.",
    name: "Olivia M.",
    position: "Product Manager",
    image: "https://i.pravatar.cc/150?img=2"
  },
  {
    id: 8,
    number: "11",
    text: "The networking strategies I learned opened doors I didn't know existed. My career has taken off since working with them.",
    name: "James W.",
    position: "Business Analyst",
    image: "https://i.pravatar.cc/150?img=2"
  }
];

const colorVariants = ['primary', 'secondary', 'accent', 'highlight', 'info', 'success'];

export default function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollToTestimonial = async (index: number) => {
    if (isAnimating || !trackRef.current) return;
    
    setIsAnimating(true);
    const card = trackRef.current.children[0] as HTMLElement;
    if (!card) return;
    
    const cardWidth = card.offsetWidth + 24;
    trackRef.current.style.transform = `translateX(-${index * cardWidth}px)`;
    setCurrentIndex(index);
    
    setTimeout(() => setIsAnimating(false), 500);
  };

  const nextTestimonial = () => {
    const nextIndex = (currentIndex + 1) % (testimonials.length - 2);
    scrollToTestimonial(nextIndex);
  };

  const prevTestimonial = () => {
    const prevIndex = (currentIndex - 1 + (testimonials.length - 2)) % (testimonials.length - 2);
    scrollToTestimonial(prevIndex);
  };

  // Auto-scroll every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        nextTestimonial();
      }
    }, 6000);

    return () => clearInterval(interval);
  }, [currentIndex, isAnimating]);

  return (
    <section className={styles.testimonialsSection}>
      <div className={`container ${styles.container}`}>
        <header className={styles.header}>
          <h2 className={styles.title}>What Our Clients Say</h2>
          <p className={styles.subtitle}>
            Hear from professionals who have transformed their careers with our guidance and support.
          </p>
        </header>

        <div className={styles.testimonialsContainer}>
          <div className={styles.testimonialsTrack} ref={trackRef}>
            {testimonials.map((testimonial, index) => {
              const colorClass = colorVariants[index % colorVariants.length];
              return (
                <article 
                  key={testimonial.id} 
                  className={`${styles.testimonialCard} ${styles[colorClass]}`}
                >
                  <div className={styles.cardGlow}></div>
                  <div className={styles.cardContent}>
                    <div className={styles.testimonialNumber}>{testimonial.number}</div>
                    <blockquote className={styles.testimonialText}>
                      "{testimonial.text}"
                    </blockquote>
                    <div className={styles.clientInfo}>
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className={styles.clientAvatar}
                        width={44}
                        height={44}
                      />

                      <div className={styles.clientDetails}>
                        <h3 className={styles.clientName}>{testimonial.name}</h3>
                        <p className={styles.clientPosition}>{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className={styles.controls}>
          <div className={styles.navButtons}>
            <button 
              className={styles.navBtn} 
              onClick={prevTestimonial}
              disabled={isAnimating}
              aria-label="Previous testimonial"
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
                <path d="M10.5 12L6 8l4.5-4z"/>
              </svg>
            </button>
            <button 
              className={styles.navBtn} 
              onClick={nextTestimonial}
              disabled={isAnimating}
              aria-label="Next testimonial"
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
                <path d="M5.5 12L10 8 5.5 4z"/>
              </svg>
            </button>
          </div>

          <div className={styles.scrollIndicator}>
            {testimonials.slice(0, testimonials.length - 2).map((_, index) => (
              <button
                key={index}
                className={`${styles.dot} ${index === currentIndex ? styles.active : ''}`}
                onClick={() => scrollToTestimonial(index)}
                disabled={isAnimating}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}