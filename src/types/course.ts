// types/course.ts
export interface Course {
  id: string;
  title: string;
  description: string;
  category: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  rating: number;
  students: number;
  price: number;
  originalPrice?: number;
  instructor: string;
  image: string;
  slug: string;
  lessons: number;
  tags: string[];
  featured: boolean;
  learningObjectives: string[];
  requirements: string[];
}