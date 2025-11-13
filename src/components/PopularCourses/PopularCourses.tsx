// components/PopularCourses.tsx
import { Course } from '../../types/course';
import CourseCard from './CourseCard';
import styles from './PopularCourses.module.scss';

interface PopularCoursesProps {
  courses: Course[];
  title?: string;
  subtitle?: string;
  viewAllLink?: string;
}

const PopularCourses: React.FC<PopularCoursesProps> = ({
  courses,
  title = "Popular Courses",
  subtitle = "Master new skills with our expert-led courses",
  viewAllLink = "/courses"
}) => {
  const featuredCourses = courses.filter(course => course.featured);

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
          {featuredCourses.map(course => (
            <CourseCard key={course.id} course={course} layout="grid" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCourses;