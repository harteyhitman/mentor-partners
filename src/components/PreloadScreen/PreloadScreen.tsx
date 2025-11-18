// src/components/PreloadScreen/PreloadScreen.tsx
'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './PreloadScreen.module.scss';
import Logo from '../../../public/mentor-partners-images/cropped-MP-Logo-PNG-new-Photoroom.png'

interface PreloadScreenProps {
    onLoadingComplete?: () => void;
    duration?: number;
}

const PreloadScreen: React.FC<PreloadScreenProps> = ({
    onLoadingComplete,
    duration = 3000
}) => {
    const [isVisible, setIsVisible] = useState(true);
    const [animationPhase, setAnimationPhase] = useState<'entering' | 'animating' | 'exiting'>('entering');
    const [percentage, setPercentage] = useState(0);

    useEffect(() => {
        const sequence = {
            enter: 300,
            animate: 2000,
            exit: 500,
        };

        // Percentage counter animation
        const percentageInterval = setInterval(() => {
            setPercentage(prev => {
                if (prev >= 100) {
                    clearInterval(percentageInterval);
                    return 100;
                }
                return prev + 1;
            });
        }, duration / 100);

        const enterTimer = setTimeout(() => {
            setAnimationPhase('animating');
        }, sequence.enter);

        const exitTimer = setTimeout(() => {
            setAnimationPhase('exiting');
        }, sequence.enter + sequence.animate);

        const completeTimer = setTimeout(() => {
            setIsVisible(false);
            onLoadingComplete?.();
        }, sequence.enter + sequence.animate + sequence.exit);

        return () => {
            clearTimeout(enterTimer);
            clearTimeout(exitTimer);
            clearTimeout(completeTimer);
            clearInterval(percentageInterval);
        };
    }, [onLoadingComplete, duration]);

    if (!isVisible) return null;

    return (
        <div className={`${styles.preloadScreen} ${styles[animationPhase]}`}>
            {/* Simple Background */}
            <div className={styles.background}></div>

            {/* Main Content */}
            <div className={styles.content}>
                {/* Logo with Bounce Animation */}
                <div className={styles.logoContainer}>
                    <div className={styles.logoBounce}>
                        <Image
                            src={Logo}
                            alt="Mentor Partners"
                            className={styles.logoImage}
                        />
                    </div>

                    {/* Brand Name */}
                    <div className={styles.brandName}>
                        <h1 className={styles.logoText}>
                            Mentor Partners
                        </h1>
                        <div className={styles.tagline}>
                            The Upskilling Marketplace
                        </div>
                    </div>
                </div>

                {/* Progress Indicator */}
                <div className={styles.progressContainer}>
                    <div className={styles.progressBar}>
                        <div className={styles.progressFill}></div>
                    </div>
                    <div className={styles.percentage}>{percentage}%</div>
                </div>
            </div>
        </div>
    );
};

export default PreloadScreen;