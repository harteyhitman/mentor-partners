// components/CSSInfiniteCarousel.tsx
'use client';

import styles from './Alumni.module.scss';
import imgslider1 from '../../../public/mentor-partners-images/Ecobank.png';
import imgslider2 from '../../../public/mentor-partners-images/Cisco.png';
import imgslider3 from '../../../public/mentor-partners-images/Dangote.png';
import imgslider4 from '../../../public/mentor-partners-images/Fcmb.png';
import imgslider5 from '../../../public/mentor-partners-images/FirstBank.png';
import imgslider6 from '../../../public/mentor-partners-images/GlobusBank.png';
import imgslider7 from '../../../public/mentor-partners-images/Intrum.png';
import imgslider8 from '../../../public/mentor-partners-images/MTN.png';
import imgslider9 from '../../../public/mentor-partners-images/Mirus.png';
import imgslider10 from '../../../public/mentor-partners-images/NHS.png';
import imgslider11 from '../../../public/mentor-partners-images/Samsung.png';
import imgslider12 from '../../../public/mentor-partners-images/NationalGrid.png';
import imgslider13 from '../../../public/mentor-partners-images/NigeriaBrewery.png';
import imgslider14 from '../../../public/mentor-partners-images/PaloAlto.png';
import imgslider15 from '../../../public/mentor-partners-images/ResourcerGroup.png';
import Image, { StaticImageData } from 'next/image';

interface CSSCarouselLayerProps {
  images: StaticImageData[];
  duration?: number;
  direction?: 'left' | 'right';
  className?: string;
}

const CSSCarouselLayer = ({ images, duration = 40, direction = 'right', className }: CSSCarouselLayerProps) => {
  const duplicatedImages = [...images, ...images, ...images]; // Triple for seamless loop

  return (
    <div className={`${styles.cssCarouselTrack} ${className}`}>
      <div 
        className={`${styles.cssCarousel} ${direction === 'left' ? styles.animateLeft : styles.animateRight}`}
        style={{ 
          animationDuration: `${duration}s`,
        }}
      >
        {duplicatedImages.map((image, index) => (
          <div
            key={`${image.src}-${index}`}
            className={styles.carouselItem}
          >
            <Image
              src={image}
              alt={`Partner logo ${index % images.length + 1}`}
              className={styles.carouselImage}
              loading="eager"
              width={120}
              height={80}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const CSSInfiniteCarousel = () => {
  const carouselImages = [
    imgslider1, imgslider2, imgslider3, imgslider4, imgslider5,
    imgslider6, imgslider7, imgslider8, imgslider9, imgslider10,
  ];

  const carouselImages1 = [
    imgslider11, imgslider12, imgslider13, imgslider14, imgslider15,
    imgslider1, imgslider2, imgslider3, imgslider4, imgslider5,
  ];

  return (
    <section className={styles.alumniSection}>
      <div className={styles.container}>
        {/* Professional Text Section */}
        <div className={styles.textSection}>
          <div className={styles.textContent}>
            <h1 className={styles.header}>OUR ALUMNI FOOTPRINT</h1>
            <div className={styles.divider}></div>
            <p className={styles.subtitle}>Companies where Our Students Work</p>
            {/* <div className={styles.stats}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>500+</span>
                <span className={styles.statLabel}>Companies</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>5,000+</span>
                <span className={styles.statLabel}>Alumni</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>50+</span>
                <span className={styles.statLabel}>Countries</span>
              </div>
            </div> */}
          </div>
        </div>

        {/* Carousel Section */}
        <div className={styles.carouselContainer}>
          <div className={styles.scrollSplit}>
            {/* Top Layer - Scrolling Right */}
            <div className={styles.carouselLayer}>
              <CSSCarouselLayer
                images={carouselImages}
                duration={50}
                direction="right"
                className={styles.topLayer}
              />
            </div>
            
            {/* Bottom Layer - Scrolling Left */}
            <div className={styles.carouselLayer}>
              <CSSCarouselLayer
                images={carouselImages1}
                duration={50}
                direction="left"
                className={styles.bottomLayer}
              />
            </div>
          </div>

          {/* Gradient Overlays */}
          <div className={styles.gradientOverlayLeft}></div>
          <div className={styles.gradientOverlayRight}></div>
        </div>
      </div>
    </section>
  );
};

export default CSSInfiniteCarousel;