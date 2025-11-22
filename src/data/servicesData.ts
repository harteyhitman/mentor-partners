export interface Service {
    id: number;
    slug: string;
    title: string;
    description: string;
    icon?: string;
    longDescription?: string;
    features?: string[];
    benefits?: string[];
    process?: string[];
    price?: string;
    duration?: string;
}

export const services: Service[] = [
    {
        id: 1,
        slug: "career-consultation",
        title: "Career Consultation",
        description: "Consectetuer adipiscing elit. Morbi tristique senectus.",
        longDescription: "Get personalized career guidance from our expert coaches. We'll help you identify your strengths, define your career path, and create a strategic plan to achieve your professional aspirations.",
        features: [
            "Personalized career assessment",
            "Strengths and skills analysis",
            "Career path planning",
            "Goal setting and strategy"
        ],
        benefits: [
            "Clear career direction",
            "Increased confidence",
            "Strategic action plan",
            "Professional guidance"
        ],
        process: [
            "Initial consultation and assessment",
            "Skills and strengths analysis",
            "Career path development",
            "Action plan creation"
        ],
        price: "$199",
        duration: "2 sessions"
    },
    {
        id: 2,
        slug: "cv-revamp",
        title: "CV Revamp",
        description: "Gravida a, lectus, sed. Velit praesent. Vitae, wisi, ac, proin-contaner.",
        longDescription: "Transform your CV into a powerful marketing tool that gets you noticed by recruiters and hiring managers. Our experts will optimize your resume for ATS systems and modern hiring practices.",
        features: [
            "ATS-optimized formatting",
            "Achievement-focused content",
            "Modern design templates",
            "Industry-specific keywords"
        ],
        benefits: [
            "Higher interview call rate",
            "Professional presentation",
            "Stand out from competition",
            "Increased confidence"
        ],
        process: [
            "Current CV analysis",
            "Content restructuring",
            "Design optimization",
            "Final review and delivery"
        ],
        price: "$299",
        duration: "3-5 business days"
    },
    {
        id: 3,
        slug: "linkedin-optimization",
        title: "LinkedIn Optimization",
        description: "Commodo ground erat et FSS. Integer sed, the est, cenean, morbi.",
        longDescription: "Maximize your professional presence on LinkedIn with our comprehensive optimization service. We'll enhance your profile to attract recruiters and build your professional brand.",
        features: [
            "Profile headline optimization",
            "About section rewriting",
            "Skills and endorsements",
            "Connection strategy"
        ],
        benefits: [
            "Increased profile views",
            "More recruiter outreach",
            "Strong professional brand",
            "Networking opportunities"
        ],
        process: [
            "Profile audit and analysis",
            "Content optimization",
            "Visual enhancements",
            "Strategy implementation"
        ],
        price: "$249",
        duration: "2 sessions"
    },
    {
        id: 4,
        slug: "leadership-coaching",
        title: "Leadership Coaching",
        description: "Dapibus. Amet diam a, euismod elementum, et. Industrius.",
        longDescription: "Develop the leadership skills needed to advance your career and inspire your team. Our executive coaches will help you become a more effective and confident leader.",
        features: [
            "Leadership style assessment",
            "Communication skills",
            "Team management",
            "Strategic thinking"
        ],
        benefits: [
            "Enhanced leadership abilities",
            "Better team performance",
            "Career advancement",
            "Increased influence"
        ],
        process: [
            "Leadership assessment",
            "Skill development plan",
            "Practical exercises",
            "Progress evaluation"
        ],
        price: "$499",
        duration: "6 sessions"
    },
    {
        id: 5,
        slug: "interview-preparation",
        title: "Interview Preparation",
        description: "Tiholdunt, Nisi S2 S3, carrie coach own, own profession.",
        longDescription: "Ace your next job interview with our comprehensive preparation program. We'll equip you with the skills and confidence to impress hiring managers and land your dream job.",
        features: [
            "Mock interview sessions",
            "Common question practice",
            "Behavioral interview training",
            "Salary negotiation guidance"
        ],
        benefits: [
            "Increased confidence",
            "Better interview performance",
            "Higher offer rates",
            "Strong negotiation skills"
        ],
        process: [
            "Interview strategy session",
            "Mock interviews",
            "Feedback and improvement",
            "Final preparation"
        ],
        price: "$349",
        duration: "3 sessions"
    },
    {
        id: 6,
        slug: "skill-development",
        title: "Skill Development",
        description: "Gravida erat, amare ac in. Orei at cras causser. Doneclorem.",
        longDescription: "Identify and develop the skills that will accelerate your career growth. Our personalized skill development programs are tailored to your industry and career goals.",
        features: [
            "Skills gap analysis",
            "Personalized learning plan",
            "Industry-relevant skills",
            "Progress tracking"
        ],
        benefits: [
            "Enhanced capabilities",
            "Career advancement",
            "Increased market value",
            "Confidence in abilities"
        ],
        process: [
            "Skills assessment",
            "Learning plan creation",
            "Skill development sessions",
            "Progress evaluation"
        ],
        price: "$399",
        duration: "4 sessions"
    }
];