// data/courses.ts
import { Course } from "../types/course";
import CourseImg from '../../public/mentor-partners-images/data-governance-5-scaled.jpg'

// data/courses.ts
export const coursesData: Course[] = [
  {
    id: '1',
    title: 'Data Business Intelligence Analysis',
    description: 'Master data analysis, visualization, and machine learning.',
    category: 'Data Analytics',
    duration: '16 Weeks',
    level: 'Intermediate',
    rating: 4.7,
    reviewCount: 230,
    students: 1247,
    price: 299,
    originalPrice: 399,
    instructor: 'Sarah Chen',
    image: CourseImg,
    slug: 'data-business-intelligence-analysis',
    lessons: 32,
    tags: ['Data Analysis', 'Visualization', 'Machine Learning'],
    featured: true,
    isPopular: true,
    isFlexible: true,
    learningObjectives: [
      'Develop comprehensive data strategies',
      'Create effective data visualizations',
      'Conduct data analysis and interpretation',
      'Define and track data metrics'
    ],
    requirements: [
      'Basic understanding of data concepts',
      'No prior data analysis experience required'
    ],
    features: [
      'Personalized learning plan',
      'Real-world project guidance',
      'Career path development',
      'Direct mentor access'
    ],
    mentor: {
      name: 'Dilkash Mais',
      role: 'Data Analytics Lead',
      avatar: '/images/mentors/dilkash-mais.jpg'
    }
  },
  {
    id: '2',
    title: 'Data Privacy & Compliance',
    description: 'Master data privacy regulations and compliance frameworks.',
    category: 'Data Governance',
    duration: '16 Weeks',
    level: 'Intermediate',
    rating: 4.7,
    reviewCount: 236,
    students: 892,
    price: 349,
    instructor: 'Marcus Johnson',
    image: CourseImg,
    slug: 'data-privacy-compliance',
    lessons: 28,
    tags: ['Privacy', 'Compliance', 'GDPR'],
    featured: true,
    isPopular: false,
    isFlexible: true,
    learningObjectives: [
      'Understand global data privacy regulations',
      'Implement compliance frameworks',
      'Conduct privacy impact assessments',
      'Manage data subject requests'
    ],
    requirements: [
      'Basic legal or compliance knowledge',
      'Understanding of data management'
    ],
    features: [
      'Personalized learning plan',
      'Real-world compliance scenarios',
      'Regulatory updates',
      'Expert mentor guidance'
    ],
    mentor: {
      name: 'Alex Thompson',
      role: 'Privacy Compliance Lead',
      avatar: '/images/mentors/alex-thompson.jpg'
    }
  },
  {
    id: '3',
    title: 'Data Quality & Master Data Management',
    description: 'Ensure data quality and implement master data management strategies.',
    category: 'Data Management',
    duration: '14 Weeks',
    level: 'Intermediate',
    rating: 4.6,
    reviewCount: 189,
    students: 756,
    price: 399,
    originalPrice: 499,
    instructor: 'David Kim',
    image: CourseImg,
    slug: 'data-quality-master-data-management',
    lessons: 35,
    tags: ['Data Quality', 'MDM', 'Governance'],
    featured: true,
    isPopular: true,
    isFlexible: false,
    learningObjectives: [
      'Implement data quality frameworks',
      'Design master data management solutions',
      'Establish data governance policies',
      'Measure and improve data quality'
    ],
    requirements: [
      'Basic data management knowledge',
      'Understanding of database concepts'
    ],
    features: [
      'Hands-on data quality projects',
      'MDM implementation guidance',
      'Data governance frameworks',
      'Industry best practices'
    ],
    mentor: {
      name: 'Sarah Chen',
      role: 'Data Governance Lead',
      avatar: '/images/mentors/sarah-chen.jpg'
    }
  },
  {
    id: '4',
    title: 'Document Control & Information Management',
    description: 'Master document control processes and information management systems.',
    category: 'Information Management',
    duration: '12 Weeks',
    level: 'Beginner',
    rating: 4.5,
    reviewCount: 156,
    students: 563,
    price: 279,
    instructor: 'Emily Rodriguez',
    image: CourseImg,
    slug: 'document-control-information-management',
    lessons: 30,
    tags: ['Document Control', 'Information Management', 'Compliance'],
    featured: false,
    isPopular: false,
    isFlexible: true,
    learningObjectives: [
      'Implement document control systems',
      'Manage information lifecycle',
      'Ensure regulatory compliance',
      'Optimize information retrieval'
    ],
    requirements: [
      'Basic office software knowledge',
      'No prior document management experience required'
    ],
    features: [
      'Document management systems training',
      'Compliance requirements',
      'Information lifecycle management',
      'Practical implementation guidance'
    ],
    mentor: {
      name: 'Robert Williams',
      role: 'Information Management Specialist',
      avatar: '/images/mentors/robert-williams.jpg'
    }
  },
  {
    id: '5',
    title: 'Cloud Data Engineering',
    description: 'Build scalable data pipelines and architectures in the cloud.',
    category: 'Cloud Computing',
    duration: '18 Weeks',
    level: 'Advanced',
    rating: 4.8,
    reviewCount: 312,
    students: 423,
    price: 599,
    instructor: 'Dr. Michael Brown',
    image: CourseImg,
    slug: 'cloud-data-engineering',
    lessons: 48,
    tags: ['Cloud', 'Data Engineering', 'Big Data'],
    featured: true,
    isPopular: true,
    isFlexible: true,
    learningObjectives: [
      'Design cloud data architectures',
      'Build scalable data pipelines',
      'Implement data processing systems',
      'Optimize cloud data costs'
    ],
    requirements: [
      'Programming experience',
      'Understanding of database systems',
      'Basic cloud knowledge'
    ],
    features: [
      'Hands-on cloud projects',
      'Real-world data pipeline development',
      'Cost optimization strategies',
      'Industry case studies'
    ],
    mentor: {
      name: 'Michael Brown',
      role: 'Cloud Data Architect',
      avatar: '/images/mentors/michael-brown.jpg'
    }
  },
  {
    id: '6',
    title: 'Data Analytics for Business Decisions',
    description: 'Transform data into actionable business insights and decisions.',
    category: 'Business Analytics',
    duration: '10 Weeks',
    level: 'Intermediate',
    rating: 4.6,
    reviewCount: 278,
    students: 934,
    price: 349,
    originalPrice: 449,
    instructor: 'Lisa Wang',
    image: CourseImg,
    slug: 'data-analytics-business-decisions',
    lessons: 32,
    tags: ['Business Analytics', 'Decision Making', 'Insights'],
    featured: true,
    isPopular: false,
    isFlexible: true,
    learningObjectives: [
      'Analyze business data effectively',
      'Create actionable insights',
      'Support data-driven decisions',
      'Communicate findings to stakeholders'
    ],
    requirements: [
      'Basic Excel knowledge',
      'Understanding of business concepts'
    ],
    features: [
      'Real business case studies',
      'Stakeholder communication training',
      'Decision-making frameworks',
      'Business impact analysis'
    ],
    mentor: {
      name: 'Lisa Wang',
      role: 'Business Analytics Director',
      avatar: '/images/mentors/lisa-wang.jpg'
    }
  },
  {
    id: '7',
    title: 'Machine Learning Fundamentals',
    description: 'Learn machine learning algorithms and their practical applications.',
    category: 'Machine Learning',
    duration: '20 Weeks',
    level: 'Advanced',
    rating: 4.9,
    reviewCount: 415,
    students: 678,
    price: 699,
    instructor: 'Dr. James Wilson',
    image: CourseImg,
    slug: 'machine-learning-fundamentals',
    lessons: 52,
    tags: ['Machine Learning', 'AI', 'Algorithms'],
    featured: true,
    isPopular: true,
    isFlexible: false,
    learningObjectives: [
      'Understand ML algorithms and theory',
      'Build and train ML models',
      'Evaluate model performance',
      'Deploy ML solutions in production'
    ],
    requirements: [
      'Programming experience (Python)',
      'Statistics and linear algebra knowledge',
      'Understanding of data structures'
    ],
    features: [
      'Hands-on ML projects',
      'Real-world datasets',
      'Model deployment guidance',
      'Industry applications'
    ],
    mentor: {
      name: 'James Wilson',
      role: 'ML Research Scientist',
      avatar: '/images/mentors/james-wilson.jpg'
    }
  },
  {
    id: '8',
    title: 'Data Visualization & Dashboarding',
    description: 'Create compelling data visualizations and interactive dashboards.',
    category: 'Data Visualization',
    duration: '8 Weeks',
    level: 'Beginner',
    rating: 4.5,
    reviewCount: 192,
    students: 1123,
    price: 249,
    instructor: 'Maria Garcia',
    image: CourseImg,
    slug: 'data-visualization-dashboarding',
    lessons: 24,
    tags: ['Visualization', 'Dashboard', 'BI Tools'],
    featured: false,
    isPopular: true,
    isFlexible: true,
    learningObjectives: [
      'Design effective data visualizations',
      'Build interactive dashboards',
      'Choose appropriate chart types',
      'Tell stories with data'
    ],
    requirements: [
      'Basic data analysis skills',
      'Familiarity with spreadsheet software'
    ],
    features: [
      'Multiple visualization tools',
      'Dashboard design principles',
      'Storytelling with data',
      'User experience considerations'
    ],
    mentor: {
      name: 'Maria Garcia',
      role: 'Data Visualization Expert',
      avatar: '/images/mentors/maria-garcia.jpg'
    }
  }
];