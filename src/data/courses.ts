// data/courses.ts
import { Course } from "../types/course";
import CourseImg from '../../public/mentor-partners-images/data-governance-5-scaled.jpg'

export const coursesData: Course[] = [
  {
    id: '1',
    title: 'Product Management Fundamentals',
    description: 'Master product strategy, roadmapping, and user-centric design to drive product success.',
    category: 'Product',
    duration: '8 weeks',
    level: 'Beginner',
    rating: 4.8,
    students: 1247,
    price: 299,
    originalPrice: 399,
    instructor: 'Sarah Chen',
    image: CourseImg.src,
    slug: 'product-management-fundamentals',
    lessons: 32,
    tags: ['Product Strategy', 'Roadmapping', 'User Research'],
    featured: true,
    learningObjectives: [
      'Develop comprehensive product strategies',
      'Create effective product roadmaps',
      'Conduct user research and analysis',
      'Define and track product metrics'
    ],
    requirements: [
      'Basic understanding of business concepts',
      'No prior product management experience required'
    ]
  },
  {
    id: '2',
    title: 'Sales Optimization & CRM Mastery',
    description: 'Learn to optimize sales processes, master Salesforce, and accelerate revenue growth.',
    category: 'Sales',
    duration: '6 weeks',
    level: 'Intermediate',
    rating: 4.6,
    students: 892,
    price: 349,
    instructor: 'Marcus Johnson',
    image: CourseImg.src,
    slug: 'sales-optimization-crm-mastery',
    lessons: 28,
    tags: ['Sales Process', 'CRM', 'Revenue Optimization'],
    featured: true,
    learningObjectives: [
      'Optimize sales workflows and processes',
      'Master Salesforce customization',
      'Implement sales analytics and forecasting',
      'Shorten sales cycles effectively'
    ],
    requirements: [
      'Basic sales experience',
      'Familiarity with CRM systems recommended'
    ]
  },
  {
    id: '3',
    title: 'IT Infrastructure & Security',
    description: 'Build robust IT infrastructure, enhance security, and optimize enterprise systems.',
    category: 'IT',
    duration: '10 weeks',
    level: 'Intermediate',
    rating: 4.7,
    students: 756,
    price: 449,
    originalPrice: 549,
    instructor: 'David Kim',
    image: CourseImg.src,
    slug: 'it-infrastructure-security',
    lessons: 40,
    tags: ['Infrastructure', 'Security', 'Enterprise IT'],
    featured: true,
    learningObjectives: [
      'Design scalable IT infrastructure',
      'Implement security best practices',
      'Optimize system performance',
      'Reduce IT support costs'
    ],
    requirements: [
      'Basic IT knowledge',
      'Understanding of networking concepts'
    ]
  },
  {
    id: '4',
    title: 'Digital Marketing Strategy',
    description: 'Create data-driven marketing campaigns and optimize customer journey across channels.',
    category: 'Marketing',
    duration: '7 weeks',
    level: 'Beginner',
    rating: 4.5,
    students: 1563,
    price: 279,
    instructor: 'Emily Rodriguez',
    image: CourseImg.src,
    slug: 'digital-marketing-strategy',
    lessons: 30,
    tags: ['Digital Strategy', 'Analytics', 'Conversion Optimization'],
    featured: false,
    learningObjectives: [
      'Develop comprehensive digital marketing strategies',
      'Analyze and optimize customer journeys',
      'Implement conversion rate optimization',
      'Measure and improve marketing ROI'
    ],
    requirements: [
      'No prior marketing experience required',
      'Basic computer literacy'
    ]
  },
  {
    id: '5',
    title: 'Salesforce Administration & Customization',
    description: 'Become a Salesforce expert with advanced administration and customization techniques.',
    category: 'Salesforce',
    duration: '9 weeks',
    level: 'Advanced',
    rating: 4.9,
    students: 634,
    price: 499,
    originalPrice: 599,
    instructor: 'Alex Thompson',
    image: CourseImg.src,
    slug: 'salesforce-administration-customization',
    lessons: 36,
    tags: ['Salesforce', 'Administration', 'Customization'],
    featured: true,
    learningObjectives: [
      'Master Salesforce administration',
      'Implement custom workflows and automation',
      'Build no-code solutions',
      'Optimize user experience in Salesforce'
    ],
    requirements: [
      'Basic Salesforce knowledge',
      'Experience with CRM systems'
    ]
  },
  {
    id: '6',
    title: 'Enterprise Digital Transformation',
    description: 'Lead successful digital transformation initiatives and maximize technology ROI.',
    category: 'Enterprise',
    duration: '12 weeks',
    level: 'Advanced',
    rating: 4.7,
    students: 423,
    price: 599,
    instructor: 'Dr. Robert Williams',
    image: CourseImg.src,
    slug: 'enterprise-digital-transformation',
    lessons: 48,
    tags: ['Digital Transformation', 'Enterprise', 'ROI'],
    featured: false,
    learningObjectives: [
      'Lead digital transformation initiatives',
      'Maximize technology investments ROI',
      'Create change management strategies',
      'Build future-ready enterprise architecture'
    ],
    requirements: [
      'Management experience',
      'Understanding of enterprise systems'
    ]
  }
];