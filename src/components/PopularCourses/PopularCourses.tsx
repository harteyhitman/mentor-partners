// components/PopularCourses.tsx
import { Course } from '../../types/course';
import CourseCard from './CourseCard';
import styles from './PopularCourses.module.scss';

interface PopularCoursesProps {
  courses: Course[];
  title?: string;
  subtitle?: string;
  viewAllLink?: string;
  maxCards?: number;
}

const PopularCourses: React.FC<PopularCoursesProps> = ({
  courses,
  title = "Popular Courses",
  subtitle = "Master new skills with our expert-led courses",
  viewAllLink = "/courses",
  maxCards = 6 // Default to 6 cards
}) => {
  // Get featured courses first, then take up to maxCards
  const displayCourses = courses
    .filter(course => course.featured)
    .slice(0, maxCards);

  // If we don't have enough featured courses, fill with regular courses
  if (displayCourses.length < maxCards) {
    const remainingSlots = maxCards - displayCourses.length;
    const additionalCourses = courses
      .filter(course => !course.featured)
      .slice(0, remainingSlots);
    
    displayCourses.push(...additionalCourses);
  }

  return (
    <section className={styles.popularCourses}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.subtitle}>{subtitle}</p>
          <a href={viewAllLink} className={styles.viewAllLink}>
            View All Courses →
          </a>
        </div>
        
        <div className={styles.coursesGrid}>
          {displayCourses.map(course => (
            <CourseCard key={course.id} course={course} layout="grid" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCourses;