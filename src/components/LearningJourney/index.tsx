"use client";

import { useRef } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, useInView } from "framer-motion";
import styles from './LearningJourney.module.scss'

import Student1 from '../../../public/hero-section/Learning-journey/student1.jpg'
import Student2 from '../../../public/hero-section/Learning-journey/student2.jpg'
import Student3 from '../../../public/hero-section/Learning-journey/student3.jpg'
import Student4 from '../../../public/hero-section/Learning-journey/student4.jpg'
type Service = {
    title: string;
    price: string;
    desc: string;
    img: StaticImageData;
};

const SERVICES: Service[] = [
    {
        title: `Phase1: Discovery`,
        price: "$75",
        desc: `Engage our experts to explore your goals, assess your current skills and uncover growth opportunities through curated guidance and self-reflection.`,
        img: Student1,
    },
    {
        title: `Phase2: Discovery`,
        price: "$90",
        desc: `Create a personalized career plan with tailored learning resources, designed to guide you through every step of your career journey.`,
        img: Student2,
    },
    {
        title: `Phase3: Discovery`,
        price: "$50",
        desc: `Enhance your skills and gain practical knowledge through internships, real-world experiences, and mentorship support.`,
        img: Student3,
    },
    {
        title: `Phase4: Discovery`,
        price: "$120",
        desc: `Be equipped with tools & techniques to stand out in the job market in confidence with our expert on the job support.`,
        img: Student4,
    },
];

export default function LearningJourney() {
    const ref = useRef<HTMLDivElement | null>(null);
    const isVisible = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className={styles.section}>
                        <h1 className={styles.header}>STUDENT LEARNING JOURNEY</h1>

            <div
                ref={ref}
                className={styles.grid}
            >
                {SERVICES.map((s, i) => {
                    const bobSettings = {
                        duration: 4 + i,
                        delay: 0.2 * i,
                    };

                    return (
                            <motion.div
                                key={s.title}
                                className={styles.card}
                                initial={{ opacity: 0, y: 40 }}
                                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                                transition={{
                                    delay: i * 0.2,
                                    duration: 0.8,
                                    ease: [0.42, 0, 0.58, 1],
                                }}
                            >
                                {/* IMAGE with OVAL/SQUIRCLE SHAPE */}
                                <motion.div
                                    animate={isVisible ? { y: [0, -10, 0] } : { y: 0 }}
                                    transition={{
                                        repeat: Infinity,
                                        repeatType: "loop",
                                        duration: bobSettings.duration,
                                        delay: bobSettings.delay,
                                        ease: "easeInOut",
                                    }}
                                    className={styles.imageContainer}
                                >
                                    <Image
                                        src={s.img}
                                        alt={s.title}
                                        fill
                                        className={styles.image}
                                        sizes="(max-width: 1024px) 50vw, 25vw"
                                    />
                                </motion.div>

                                {/* TEXT AREA */}
                                <div className={styles.textContent}>
                                    <h3 className={styles.title}>{s.title}</h3>
                                    <p className={styles.description}>
                                        {s.desc}
                                    </p>
                                    {/* <p className={styles.price}>{s.price}</p> */}
                                </div>
                            </motion.div>

                    );
                })}
            </div>
        </section>
    );
}