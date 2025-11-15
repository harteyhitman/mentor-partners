import InfiniteCarousel from '../components/Alumni/Alumni'
import CoreFeatures from '../components/CoreFeatures/CoreFeatures'
import FAQSection from '../components/FAQSection/FAQSection'
import FoundersNote from '../components/FoundersNote/FoundersNote'
import HeroSection from '../components/HeroSection/HeroSection'
import LearningJourney from '../components/LearningJourney'
import PopularCourses from '../components/PopularCourses/PopularCourses'
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
        title="Popular Courses"
        subtitle="Boost productivity, reduce costs, 
        and drive growth with our specialized courses"
      />
      <PendoSections />
      <FoundersNote />
       <FAQSection />
    </div>
  )
}

export default Features