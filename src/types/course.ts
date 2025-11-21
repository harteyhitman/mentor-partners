import { StaticImageData } from "next/image";

// types/course.ts
export interface Mentor {
  name: string;
  role: string;
  avatar: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  category: string;
  duration: string;
  level: string;
  rating: number;
  reviewCount: number; // Added for modal display
  students: number;
  price: number;
  originalPrice?: number;
  instructor: string;
  image: string | StaticImageData;
  slug: string;
  lessons: number;
  tags: string[];
  featured: boolean;
  isPopular?: boolean; // Added for badges
  isFlexible?: boolean; // Added for badges
  learningObjectives: string[];
  requirements: string[];
  features: string[]; // Added for modal features list
  mentor?: Mentor; // Added for mentor section in modal
}