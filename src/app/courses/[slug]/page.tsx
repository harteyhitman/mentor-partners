// app/courses/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { Course } from '../../../types/course';
import { coursesData } from '../../../data/courses';
import Link from 'next/link';
import styles from './[slug].module.scss';
import Image from 'next/image';

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate static params for all courses
export async function generateStaticParams() {
  return coursesData.map((course) => ({
    slug: course.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params; // ✅ await the params
  const course = coursesData.find((c) => c.slug === slug);

  if (!course) {
    return {
      title: 'Course Not Found',
    };
  }

  return {
    title: `${course.title} | Our Courses`,
    description: course.description,
  };
}

const CourseDetailPage = async ({ params }: PageProps) => {
  const { slug } = await params; // ✅ fix: unwrap the promise
  const course = coursesData.find((c) => c.slug === slug);

  if (!course) {
    notFound();
  }

  return (
    <div className={styles.courseDetail}>
      <div className={styles.container}>
        {/* Header Section */}
        <div className={styles.header}>
          <nav className={styles.breadcrumb}>
            <Link href="/">Home</Link> &gt; <Link href="/courses">Courses</Link> &gt; <span>{course.title}</span>
          </nav>

          <div className={styles.hero}>
            <div className={styles.heroContent}>
              <span className={styles.category}>{course.category}</span>
              <h1 className={styles.title}>{course.title}</h1>
              <p className={styles.subtitle}>{course.description}</p>

              <div className={styles.meta}>
                <div className={styles.rating}>
                  <span className={styles.ratingStars}>
                    {'★'.repeat(Math.floor(course.rating))}
                    {'☆'.repeat(5 - Math.floor(course.rating))}
                  </span>
                  <span className={styles.ratingValue}>
                    {course.rating} ({course.students.toLocaleString()} students)
                  </span>
                </div>

                <div className={styles.details}>
                  <span className={styles.detailItem}>
                    <strong>Level:</strong> {course.level}
                  </span>
                  <span className={styles.detailItem}>
                    <strong>Duration:</strong> {course.duration}
                  </span>
                  <span className={styles.detailItem}>
                    <strong>Lessons:</strong> {course.lessons}
                  </span>
                  <span className={styles.detailItem}>
                    <strong>Instructor:</strong> {course.instructor}
                  </span>
                </div>
              </div>

              <div className={styles.priceSection}>
                {course.originalPrice ? (
                  <>
                    <span className={styles.currentPrice}>${course.price}</span>
                    <span className={styles.originalPrice}>${course.originalPrice}</span>
                    <span className={styles.discount}>
                      {Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100)}% off
                    </span>
                  </>
                ) : (
                  <span className={styles.currentPrice}>${course.price}</span>
                )}
              </div>

              <div className={styles.ctaButtons}>
                <button className={styles.enrollButton}>Enroll Now</button>
                <button className={styles.wishlistButton}>Add to Wishlist</button>
              </div>
            </div>

            <div className={styles.heroImage}>
              <Image src={course.image} alt={course.title} />
              {course.featured && <span className={styles.featuredBadge}>Featured</span>}
            </div>
          </div>
        </div>

        {/* Course Content */}
        <div className={styles.content}>
          <div className={styles.mainContent}>
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>What You'll Learn</h2>
              <ul className={styles.objectivesList}>
                {course.learningObjectives.map((objective, index) => (
                  <li key={index} className={styles.objectiveItem}>
                    <span className={styles.checkmark}>✓</span>
                    {objective}
                  </li>
                ))}
              </ul>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Requirements</h2>
              <ul className={styles.requirementsList}>
                {course.requirements.map((requirement, index) => (
                  <li key={index} className={styles.requirementItem}>
                    {requirement}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <div className={styles.sidebar}>
            <div className={styles.courseCard}>
              <div className={styles.cardImage}>
                <Image src={course.image} alt={course.title} />
              </div>
              <div className={styles.cardContent}>
                <div className={styles.price}>
                  {course.originalPrice ? (
                    <>
                      <span className={styles.currentPrice}>${course.price}</span>
                      <span className={styles.originalPrice}>${course.originalPrice}</span>
                    </>
                  ) : (
                    <span className={styles.currentPrice}>${course.price}</span>
                  )}
                </div>
                <button className={styles.enrollButton}>Enroll Now</button>
                <button className={styles.wishlistButton}>Add to Wishlist</button>

                <div className={styles.guarantee}>
                  <span>30-day money-back guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailPage;
