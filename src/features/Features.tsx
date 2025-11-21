import InfiniteCarousel from '../components/Alumni/Alumni'
import CoreFeatures from '../components/CoreFeatures/CoreFeatures'
import FAQSection from '../components/FAQSection/FAQSection'
import FoundersNote from '../components/FoundersNote/FoundersNote'
import HeroSection from '../components/HeroSection/HeroSection'
import LearningJourney from '../components/LearningJourney'
import MentorsSection from '../components/MentorsSection/MentorsSection'
import PopularCourses from '../components/PopularCourses/PopularCourses'
import TestimonialsSlider from '../components/Testimonials/Testimonials'
import VideoTestimonials from '../components/VideoTestimonials/VideoTestimonials'
import PendoSections from '../components/WhoWeServe/WhoWeServe'
import { coursesData } from '../data/courses'
import styles from './Features.module.scss'

const Features = () => {
  return (
    <div className={styles.features}>
      <HeroSection />
      <InfiniteCarousel />
      <LearningJourney />
      <CoreFeatures />
       <PopularCourses 
        courses={coursesData}
        title="Featured Programs"
        subtitle="Start your learning journey with our most popular programs"
        maxCards={6}
      />
      
      <PendoSections />
      <FoundersNote />
       <TestimonialsSlider />
      <VideoTestimonials />
      <MentorsSection />
       <FAQSection />
    </div>
  )
}

export default Features