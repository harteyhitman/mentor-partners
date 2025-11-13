// components/CourseCard.tsx
'use client';

import Link from 'next/link';
import { Course } from '../../types/course';
import styles from './CourseCard.module.scss';

interface CourseCardProps {
  course: Course;
  layout?: 'grid' | 'list';
}

const CourseCard: React.FC<CourseCardProps> = ({ course, layout = 'grid' }) => {
  const renderRating = (rating: number) => {
    return (
      <div className={styles.rating}>
        <span className={styles.ratingStars}>
          {'★'.repeat(Math.floor(rating))}
          {'☆'.repeat(5 - Math.floor(rating))}
        </span>
        <span className={styles.ratingValue}>({rating})</span>
      </div>
    );
  };

  const renderPrice = () => {
    if (course.originalPrice) {
      return (
        <div className={styles.price}>
          <span className={styles.currentPrice}>${course.price}</span>
          <span className={styles.originalPrice}>${course.originalPrice}</span>
          <span className={styles.discount}>
            {Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100)}% off
          </span>
        </div>
      );
    }

    return (
      <div className={styles.price}>
        <span className={styles.currentPrice}>${course.price}</span>
      </div>
    );
  };

  return (
    <Link href={`/courses/${course.slug}`} className={`${styles.courseCard} ${styles[layout]}`}>
      <div className={styles.cardImage}>
        <img src={course.image} alt={course.title} />
        {course.featured && <span className={styles.featuredBadge}>Featured</span>}
        <div className={styles.categoryTag}>{course.category}</div>
      </div>
      
      <div className={styles.cardContent}>
        <h3 className={styles.courseTitle}>{course.title}</h3>
        <p className={styles.courseDescription}>{course.description}</p>
        
        <div className={styles.courseMeta}>
          <div className={styles.instructor}>
            <span className={styles.instructorLabel}>Instructor:</span>
            <span className={styles.instructorName}>{course.instructor}</span>
          </div>
          
          <div className={styles.details}>
            <span className={styles.duration}>{course.duration}</span>
            <span className={styles.lessons}>{course.lessons} lessons</span>
            <span className={styles.level}>{course.level}</span>
          </div>
        </div>
        
        <div className={styles.ratingSection}>
          {renderRating(course.rating)}
          <span className={styles.students}>{course.students.toLocaleString()} students</span>
        </div>
        
        <div className={styles.cardFooter}>
          {renderPrice()}
          <button 
            className={styles.enrollButton}
            onClick={(e) => {
              e.preventDefault();
              // Handle enroll logic here
              console.log('Enroll in course:', course.title);
            }}
          >
            Enroll Now
          </button>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;