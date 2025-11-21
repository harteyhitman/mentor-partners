// components/PopularCourses/PopularCourses.tsx
'use client';

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
  title = "Popular Programs",
  subtitle = "Master new skills with our expert-led programs",
  viewAllLink = "/courses",
  maxCards = 6 // Default to 6 cards
}) => {
  // Get popular courses (featured or isPopular), then take up to maxCards
  const displayCourses = courses
    .filter(course => course.featured || course.isPopular)
    .slice(0, maxCards);

  // If we don't have enough popular courses, fill with regular courses
  if (displayCourses.length < maxCards) {
    const remainingSlots = maxCards - displayCourses.length;
    const additionalCourses = courses
      .filter(course => !course.featured && !course.isPopular)
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
            View All Programs →
          </a>
        </div>
        
        <div className={styles.coursesGrid}>
          {displayCourses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCourses;