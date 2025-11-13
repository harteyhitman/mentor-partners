// src/app/page.tsx
'use client'
import { useEffect, useState } from "react";
import Features from "../features/Features";
import styles from './page.module.scss';
import PreloadScreen from "../components/PreloadScreen/PreloadScreen";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    // Simulate loading resources
    const timer = setTimeout(() => {
      if (isLoading) {
        handleLoadingComplete();
      }
    }, 4500);

    return () => clearTimeout(timer);
  }, [isLoading]);

  return (
    <>
      <main className={styles.main}>
        {isLoading && <PreloadScreen onLoadingComplete={handleLoadingComplete} />}
        <div className={`${styles.content} ${isLoading ? styles.loading : styles.loaded}`}>
          <div className={styles.homepage}>
            <Navbar />
            <div className={styles.contentWrapper}>
              <div className={styles.featuresMain}>
                <Features />
              </div>
              <Footer />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}