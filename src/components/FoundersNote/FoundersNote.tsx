// components/FoundersNote/FoundersNote.tsx
'use client';

import { useState, useRef, useEffect } from 'react';
import MuxPlayer from '@mux/mux-player-react';
import styles from './FoundersNote.module.scss';

const FoundersNote = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [activeAchievement, setActiveAchievement] = useState(0);
  const videoRef = useRef<any>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const achievements = [
    {
      number: "1000+",
      title: "Students Trained & Mentored",
      description: "Transforming careers through personalized guidance and industry-relevant training",
      icon: "🎓"
    },
    {
      number: "5",
      title: "Continents Presence",
      description: "Global impact with strong presence across North America, Europe, Asia, Africa, and Australia",
      icon: "🌍"
    },
    {
      number: "50+",
      title: "Industry Partners",
      description: "Collaborating with leading tech companies for real-world experience",
      icon: "🤝"
    },
    {
      number: "95%",
      title: "Success Rate",
      description: "Of our students achieve their career transition goals within 6 months",
      icon: "🚀"
    }
  ];

  const founderStats = [
    { value: "15+", label: "Years Industry Experience" },
    { value: "500+", label: "Projects Delivered" },
    { value: "12", label: "International Awards" },
    { value: "∞", label: "Passion for Mentoring" }
  ];

  const toggleVideoPlay = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  const handlePlay = () => {
    setIsVideoPlaying(true);
  };

  const handlePause = () => {
    setIsVideoPlaying(false);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveAchievement((prev) => (prev + 1) % achievements.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.foundersNote} ref={sectionRef}>
      {/* Animated Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.floatingOrb1}></div>
        <div className={styles.floatingOrb2}></div>
        <div className={styles.floatingOrb3}></div>
        <div className={styles.circuitLines}></div>
      </div>

      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.header}>
          <div className={styles.sectionLabel}>
            <span className={styles.labelLine}></span>
            <span className={styles.labelText}>FOUNDER'S NOTE</span>
          </div>
          <h2 className={styles.title}>
            From Vision to 
            <span className={styles.highlight}> Global Impact</span>
          </h2>
          <p className={styles.subtitle}>
            Transforming careers and building futures through innovative education and mentorship
          </p>
        </div>

        {/* Main Content - Video and Timeline Side by Side */}
        <div className={styles.mainContent}>
          {/* Video Section */}
          <div className={styles.videoSection}>
            <div className={styles.videoContainer}>
              <div className={styles.videoWrapper}>
                {/* Mux Player */}
                <MuxPlayer
                  ref={videoRef}
                  streamType="on-demand"
                  playbackId="YOUR_MUX_PLAYBACK_ID_HERE" // Replace with your actual Mux playback ID
                  className={styles.videoPlayer}
                  poster="../videos/medium-vecteezy_technology-artificial-intelligence-concept_4747810_medium.mp4"
                  muted
                  loop
                  onPlay={handlePlay}
                  onPause={handlePause}
                  style={{
                    '--controls': 'none', // Hide default controls
                  }}
                />
                
                <div className={styles.videoOverlay}>
                  <button 
                    className={`${styles.playButton} ${isVideoPlaying ? styles.playing : ''}`}
                    onClick={toggleVideoPlay}
                  >
                    <div className={styles.playIcon}>
                      {isVideoPlaying ? '❚❚' : '▶'}
                    </div>
                    <span className={styles.playText}>
                      {isVideoPlaying ? 'Pause Story' : 'Play Founder Story'}
                    </span>
                  </button>
                </div>

                <div className={styles.videoProgress}>
                  <div className={styles.progressBar}>
                    <div className={styles.progressFill}></div>
                  </div>
                </div>
              </div>

              <div className={styles.founderQuote}>
                <div className={styles.quoteIcon}>❝</div>
                <blockquote className={styles.quoteText}>
                  "Our mission is to bridge the gap between ambition and achievement. Every student's success story is a testament to the power of quality education and dedicated mentorship."
                </blockquote>
                <div className={styles.founderSignature}>
                  <span className={styles.signatureName}>— Alex Mentor</span>
                  <span className={styles.signatureTitle}>Founder & CEO</span>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline Section - Beside Video */}
          <div className={styles.timelineSection}>
            <h3 className={styles.timelineTitle}>Our Journey Through Time</h3>
            <div className={styles.timeline}>
              <div className={styles.timelineItem}>
                <div className={styles.timelineYear}>2018</div>
                <div className={styles.timelineContent}>
                  <h4>Foundation Laid</h4>
                  <p>Started with a vision to transform tech education</p>
                </div>
              </div>
              <div className={styles.timelineItem}>
                <div className={styles.timelineYear}>2020</div>
                <div className={styles.timelineContent}>
                  <h4>Global Expansion</h4>
                  <p>Expanded our reach to international markets</p>
                </div>
              </div>
              <div className={styles.timelineItem}>
                <div className={styles.timelineYear}>2023</div>
                <div className={styles.timelineContent}>
                  <h4>1000+ Milestone</h4>
                  <p>Celebrated transforming 1000+ careers worldwide</p>
                </div>
              </div>
              <div className={styles.timelineItem}>
                <div className={styles.timelineYear}>2024</div>
                <div className={styles.timelineContent}>
                  <h4>Innovation Era</h4>
                  <p>Pioneering AI-powered personalized learning</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements Section - Below Video and Timeline */}
        <div className={styles.achievementsSection}>
          {/* Rotating Main Achievement */}
          <div className={styles.mainAchievement}>
            <div className={styles.achievementDisplay}>
              <div className={styles.achievementIcon}>
                {achievements[activeAchievement].icon}
              </div>
              <div className={styles.achievementContent}>
                <div className={styles.achievementNumber}>
                  {achievements[activeAchievement].number}
                </div>
                <h3 className={styles.achievementTitle}>
                  {achievements[activeAchievement].title}
                </h3>
                <p className={styles.achievementDescription}>
                  {achievements[activeAchievement].description}
                </p>
              </div>
            </div>

            <div className={styles.achievementDots}>
              {achievements.map((_, index) => (
                <button
                  key={index}
                  className={`${styles.dot} ${index === activeAchievement ? styles.active : ''}`}
                  onClick={() => setActiveAchievement(index)}
                />
              ))}
            </div>
          </div>

          {/* Founder Personal Stats and Global Presence */}
          <div className={styles.statsAndGlobal}>
            <div className={styles.founderStats}>
              <h4 className={styles.statsTitle}>Founder's Journey</h4>
              <div className={styles.statsGrid}>
                {founderStats.map((stat, index) => (
                  <div key={index} className={styles.statItem}>
                    <div className={styles.statValue}>{stat.value}</div>
                    <div className={styles.statLabel}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.globalPresence}>
              <h4 className={styles.presenceTitle}>Global Reach</h4>
              <div className={styles.worldMap}>
                <div className={styles.mapPin} style={{ top: '30%', left: '25%' }}>
                  <div className={styles.pinPulse}></div>
                  <span className={styles.pinLabel}>North America</span>
                </div>
                <div className={styles.mapPin} style={{ top: '40%', left: '50%' }}>
                  <div className={styles.pinPulse}></div>
                  <span className={styles.pinLabel}>Europe</span>
                </div>
                <div className={styles.mapPin} style={{ top: '50%', left: '75%' }}>
                  <div className={styles.pinPulse}></div>
                  <span className={styles.pinLabel}>Asia</span>
                </div>
                <div className={styles.mapPin} style={{ top: '70%', left: '45%' }}>
                  <div className={styles.pinPulse}></div>
                  <span className={styles.pinLabel}>Africa</span>
                </div>
                <div className={styles.mapPin} style={{ top: '80%', left: '85%' }}>
                  <div className={styles.pinPulse}></div>
                  <span className={styles.pinLabel}>Australia</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoundersNote;