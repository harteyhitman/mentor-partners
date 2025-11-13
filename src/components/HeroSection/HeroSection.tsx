import Image from 'next/image'
import styles from './HeroSection.module.scss'
import HeroBg from '../../../public/hero-section/hero1.jpg'

const HeroSection = () => {
    return (
        <div className={styles.HeroSectionContainer}>
            {/* Video Background */}
            <div className={styles.videoBackground}>
                {/* <video autoPlay muted loop playsInline className={styles.heroVideo}>
                    <source src="public/hero-section/medium-vecteezy_technology-artificial-intelligence-concept_4747810_medium.mp4" type="video/mp4" />
                    {/* Fallback image if video doesn't load */}
                    <div className={styles.videoFallback}></div>
                {/* </video> */} 
                <Image src={HeroBg} alt='hero'/>
                <div className={styles.videoOverlay}></div>
            </div>

            {/* Hero Content */}
            <div className={styles.heroContent}>
                <div className={styles.contentWrapper}>
                    <h1 className={styles.heroTitle}>
                        Your Next Breakthrough
                        <span className={styles.highlight}>Starts Here</span>
                    </h1>

                    <p className={styles.heroSubtitle}>
                        Unlock Your Potential with Expert-Led Courses. Our platform connects you
                        with industry leaders and comprehensive resources to help you achieve your
                        professional goals.
                    </p>

                    {/* Trusted Partners Section */}
                    <div className={styles.trustedPartners}>
                        <p className={styles.partnersLabel}>Trusted by mentors from</p>
                        <div className={styles.partnersGrid}>
                            {/* Add your partner logos here */}
                            <div className={styles.partnerLogo}>Google</div>
                            <div className={styles.partnerLogo}>Microsoft</div>
                            <div className={styles.partnerLogo}>Meta</div>
                            <div className={styles.partnerLogo}>Apple</div>
                            <div className={styles.partnerLogo}>Amazon</div>
                        </div>
                    </div>

                    <button className={styles.ctaButton}>
                        Explore Our Courses
                    </button>
                </div>
            </div>
        </div>
    )
}

export default HeroSection