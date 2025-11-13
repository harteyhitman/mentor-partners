// app/courses/page.tsx
import { Course } from '../../types/course';
import { coursesData } from '../../data/courses';
import CourseCard from '@/src/components/PopularCourses/CourseCard';
import styles from './Courses.module.scss'

// Generate metadata for SEO
export async function generateMetadata() {
  return {
    title: 'All Courses | Our Platform',
    description: 'Browse all our expert-led courses in software experience management and career development.',
  };
}

const CoursesPage = () => {
  // Get unique categories from courses
  const categories = Array.from(new Set(coursesData.map(course => course.category)));

  return (
    <div className={styles.coursesPage}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>All Courses</h1>
          <p className={styles.subtitle}>
            Master software experience management with our expert-led courses
          </p>
        </div>

        <div className={styles.filters}>
          <div className={styles.filterGroup}>
            <label htmlFor="category" className={styles.filterLabel}>Category:</label>
            <select id="category" className={styles.filterSelect}>
              <option value="all">All Categories</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
          
          <div className={styles.filterGroup}>
            <label htmlFor="level" className={styles.filterLabel}>Level:</label>
            <select id="level" className={styles.filterSelect}>
              <option value="all">All Levels</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>
        </div>

        <div className={styles.coursesGrid}>
          {coursesData.map(course => (
            <CourseCard key={course.id} course={course} layout="grid" />
          ))}
        </div>

        {coursesData.length === 0 && (
          <div className={styles.noResults}>
            <h3>No courses found</h3>
            <p>Try adjusting your filters to see more results.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CoursesPage;