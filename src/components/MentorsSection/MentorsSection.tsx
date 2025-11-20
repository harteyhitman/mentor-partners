// src/components/MentorsSection/MentorsSection.tsx
'use client';

import { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import styles from './MentorsSection.module.scss';

import Darlington from '../../../public/mentors-photos/Mentor-bio-Darlington.png';
import Udeze from '../../../public/mentors-photos/UDEZE.jpg';
import Igechi from '../../../public/mentors-photos/IGECHI-MENTOR-PIC.jpg';

interface Mentor {
  id: number;
  name: string;
  role: string;
  image: StaticImageData;
  bio: string;
  expertise: string[];
}

const MentorsSection: React.FC = () => {
  const [selectedMentor, setSelectedMentor] = useState<Mentor | null>(null);

  const mentors: Mentor[] = [
    {
      id: 1,
      name: 'Darlington Anaele',
      role: 'Program Manager',
      image: Darlington,
      bio: 'Experienced program manager with expertise in leading cross-functional teams and delivering complex projects.',
      expertise: ['Project Management', 'Team Leadership', 'Strategic Planning']
    },
    {
      id: 2,
      name: 'Chidi Udeze',
      role: 'Product Manager',
      image: Udeze,
      bio: 'Product management specialist focused on user-centric design and product strategy development.',
      expertise: ['Product Strategy', 'User Research', 'Roadmapping']
    },
    {
      id: 3,
      name: 'Igechi Worlu',
      role: 'Scrum Master',
      image: Igechi,
      bio: 'Agile coach and Scrum Master dedicated to helping teams achieve their full potential through agile practices.',
      expertise: ['Agile Coaching', 'Sprint Planning', 'Team Facilitation']
    }
  ];

  return (
    <section className={styles.mentorsSection}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>MEET OUR MENTORS</h2>
          <div className={styles.underline}></div>
          <p className={styles.subtitle}>
            Learn from industry experts with proven track records in their respective fields
          </p>
        </div>

        {/* Mentors Grid */}
        <div className={styles.mentorsGrid}>
          {mentors.map((mentor, index) => (
            <div
              key={mentor.id}
              className={styles.mentorCard}
              onMouseEnter={() => setSelectedMentor(mentor)}
              onMouseLeave={() => setSelectedMentor(null)}
            >
              {/* Mentor Image */}
              <div className={styles.imageContainer}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={mentor.image}
                    alt={mentor.name}
                    width={300}
                    height={300}
                    className={styles.mentorImage}
                    placeholder="blur"
                    // Load first image eagerly for LCP optimization
                    loading={index === 0 ? "eager" : "lazy"}
                    priority={index === 0} // Priority for first image
                    onError={(e) => {
                      // Fallback for missing images
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        const fallback = document.createElement('div');
                        fallback.className = styles.imageFallback;
                        fallback.textContent = mentor.name.split(' ').map(n => n[0]).join('');
                        parent.appendChild(fallback);
                      }
                    }}
                  />
                </div>
                <div className={styles.imageOverlay}></div>
              </div>

              {/* Mentor Info */}
              <div className={styles.mentorInfo}>
                <h3 className={styles.mentorName}>{mentor.name}</h3>
                <p className={styles.mentorRole}>{mentor.role}</p>
              </div>

              {/* Hover Overlay */}
              <div className={`${styles.cardOverlay} ${selectedMentor?.id === mentor.id ? styles.active : ''}`}>
                <div className={styles.overlayContent}>
                  <h4>About {mentor.name.split(' ')[0]}</h4>
                  <p className={styles.mentorBio}>{mentor.bio}</p>
                  <div className={styles.expertise}>
                    <h5>Areas of Expertise:</h5>
                    <div className={styles.expertiseTags}>
                      {mentor.expertise.map((skill, index) => (
                        <span key={index} className={styles.expertiseTag}>{skill}</span>
                      ))}
                    </div>
                  </div>
                  <button className={styles.profileButton}>View Full Profile</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className={styles.ctaSection}>
          <p className={styles.ctaText}>Ready to accelerate your career with expert guidance?</p>
          <button className={styles.ctaButton}>Browse All Mentors</button>
        </div>
      </div>
    </section>
  );
};

export default MentorsSection;