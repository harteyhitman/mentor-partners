// src/components/PreloadScreen/PreloadScreen.tsx
'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './PreloadScreen.module.scss';
import Logo from '../../../public/mentor-partners-images/cropped-MP-Logo-PNG-new-Photoroom.png'

// src/components/PreloadScreen/PreloadScreen.tsx
interface PreloadScreenProps {
    onLoadingComplete?: () => void;
    duration?: number;
}

const PreloadScreen: React.FC<PreloadScreenProps> = ({
    onLoadingComplete,
    duration = 4000
}) => {
    const [isVisible, setIsVisible] = useState(true);
    const [animationPhase, setAnimationPhase] = useState<'entering' | 'animating' | 'exiting' | 'closing'>('entering');
    const [percentage, setPercentage] = useState(0);

    useEffect(() => {
        const sequence = {
            enter: 500,
            animate: 3000,
            exit: 800,
            closing: 1200,
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

        const closingTimer = setTimeout(() => {
            setAnimationPhase('closing');
        }, sequence.enter + sequence.animate + sequence.exit);

        const completeTimer = setTimeout(() => {
            setIsVisible(false);
            onLoadingComplete?.();
        }, sequence.enter + sequence.animate + sequence.exit + sequence.closing);

        return () => {
            clearTimeout(enterTimer);
            clearTimeout(exitTimer);
            clearTimeout(closingTimer);
            clearTimeout(completeTimer);
            clearInterval(percentageInterval);
        };
    }, [onLoadingComplete, duration]);

    if (!isVisible) return null;

    return (
        <div className={`${styles.preloadScreen} ${styles[animationPhase]}`}>
            {/* Cinematic Curtains */}
            <div className={styles.curtainLeft}></div>
            <div className={styles.curtainRight}></div>

            {/* Cinematic Film Grain Overlay */}
            <div className={styles.filmGrain}></div>

            {/* Animated Background */}
            <div className={styles.backgroundElements}>
                <div className={styles.circuitGrid}></div>
                <div className={styles.floatingShapes}>
                    <div className={styles.shape1}></div>
                    <div className={styles.shape2}></div>
                    <div className={styles.shape3}></div>
                    <div className={styles.shape4}></div>
                </div>
                <div className={styles.particleField}></div>

                {/* Cinematic Light Beams */}
                <div className={styles.lightBeam1}></div>
                <div className={styles.lightBeam2}></div>
                <div className={styles.lightBeam3}></div>
            </div>

            {/* Main Content */}
            <div className={styles.content}>
                {/* Animated Logo Container */}
                <div className={styles.logoContainer}>
                    <div className={styles.logoOrbit}>
                        <div className={styles.orbitRing}></div>
                        <div className={styles.orbitDot1}></div>
                        <div className={styles.orbitDot2}></div>
                        <div className={styles.orbitDot3}></div>

                        {/* Company Logo in Center */}
                        <div className={styles.companyLogo}>
                            <div className={styles.logoWrapper}>
                                {/* Replace with actual Mentor Partners logo */}
                                <div>
                                       <Image
                                    src={Logo}
                                    alt="Mentor Partners"
                                    className={styles.logoImage}
                                />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.mainLogo}>
                        <div className={styles.logoReveal}>
                            <h1 className={styles.logoText}>
                                <span className={styles.logoPart1}>Mentor</span>
                                <span className={styles.logoPart2}>Partners</span>
                            </h1>
                        </div>
                        <div className={styles.logoSubtitle}>
                            The Upskilling Marketplace'
                        </div>
                    </div>

                    <div className={styles.logoGlow}></div>
                </div>

                {/* Connection Lines Animation */}
                <div className={styles.connectionLines}>
                    <div className={styles.line1}></div>
                    <div className={styles.line2}></div>
                    <div className={styles.line3}></div>
                </div>

                {/* Progress Indicator */}
                <div className={styles.progressContainer}>
                    <div className={styles.progressInfo}>
                        <div className={styles.percentage}>{percentage}%</div>
                        <div className={styles.statusText}>Initializing Excellence</div>
                    </div>

                    <div className={styles.progressBar}>
                        <div className={styles.progressTrack}></div>
                        <div className={styles.progressFill}></div>
                        <div className={styles.progressPulse}></div>
                    </div>

                    <div className={styles.loadingSteps}>
                        <div className={styles.step}>
                            <div className={styles.stepDot}></div>
                            <span>System Ready</span>
                        </div>
                        <div className={styles.step}>
                            <div className={styles.stepDot}></div>
                            <span>Experience Loading</span>
                        </div>
                        <div className={styles.step}>
                            <div className={styles.stepDot}></div>
                            <span>Welcome</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Signature */}
            <div className={styles.signature}>
                <div className={styles.signatureLine}></div>
                <div className={styles.signatureText}>Connect with expert mentors to elevate your skills and advance your career.</div>
            </div>

            {/* Cinematic Vignette */}
            <div className={styles.vignette}></div>
        </div>
    );
};

export default PreloadScreen;