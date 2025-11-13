// CoreFeatures.js
import { 
  FaSearch, 
  FaRoad, 
  FaGraduationCap, 
  FaUserTie, 
  FaBriefcase, 
  FaHandshake 
} from "react-icons/fa";
import styles from "./CoreFeatures.module.scss";

const coreFeaturesData = [
  {
    id: 1,
    title: "Gap Analysis",
    subtitle: "Strategic Career Gap Analysis for Measurable Growth:",
    paragraph:`Our expert team takes pleasure in understanding your transition & upskilling needs to identify skill, requirement and experience gaps between you and the target market. `,
    icon: FaSearch,
    color: "#3B82F6"
  },
  {
    id: 2,
    title: "Career Plan",
    subtitle: "Customised Plan for Your Unique Career Path",
    paragraph: `Don’t just transition, rather let us build your career upon a sustainable plan that is aimed to align you with the market, give you the best start and help succeed in this journey.`,
    icon: FaRoad,
    color: "#10B981"
  },
  {
    id: 3,
    title: "Coaching & Training",
    subtitle: "Coaching backed by Real-World Case Studies",
    paragraph: `Obtain hands-on trainings driven by practical case studies and led by industry professionals. Build skills & expertise required to solve real-world problems and match the market demands.`,
    icon: FaGraduationCap,
    color: "#8B5CF6"
  },
  {
    id: 4,
    title: "Mentorship",
    subtitle: "Personalized 1:1 Mentorship with Experienced Professionals",
    paragraph: `Get a feel of your future career with 1:1 guidance from Senior Professionals through your transition journey. Grow your experience by working on Live projects.`,
    icon: FaUserTie,
    color: "#F59E0B"
  },
  {
    id: 5,
    title: "Intenship",
    subtitle: "Internship with Global Companies",
    paragraph: `Gain real-world experience through internship and field work with global and international companies. Start building market readiness through Industry-specific Projects.`,
    icon: FaBriefcase,
    color: "#EF4444"
  },
  {
    id: 6,
    title: "Job Support",
    subtitle: "Job Preparation & Support Programs",
    paragraph: "Get equipped with job preparation skills to launch you into the job market. Get the support you need ‘On the Job’ to help you succeed and thrive on your newly transitioned career",
    icon: FaHandshake,
    color: "#06B6D4"
  }
];

const CoreFeatures = () => {
  return (
    <section className={styles.coreFeaturesSection}>
      <div className={styles.container}>
        <h2 className={styles.header}>Our Core Features</h2>

        <div className={styles.cardGrid}>
          {coreFeaturesData.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <div key={feature.id} className={styles.card}>
                <div className={styles.cardNumber}>0{feature.id}</div>
                
                <div 
                  className={styles.cardIcon}
                  style={{ 
                    background: `linear-gradient(135deg, ${feature.color}20, ${feature.color}30)`,
                    color: feature.color 
                  }}
                >
                  <IconComponent />
                </div>
                
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{feature.title}</h3>
                  <h4 className={styles.cardSubtitle}>{feature.subtitle}</h4>
                  <p className={styles.cardParagraph}>{feature.paragraph}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CoreFeatures;