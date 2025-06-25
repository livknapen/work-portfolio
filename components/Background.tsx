import { useEffect } from 'react';
import styles from './Background.module.css';

export default function Background() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const circles = document.querySelectorAll(`.${styles.circle}`);
      circles.forEach((circle, index) => {
        const speed = (index + 1) * 0.1;
        (circle as HTMLElement).style.transform = `translateY(${scrollY * speed}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.background}>
      <div className={`${styles.circle} ${styles.circle1}`}></div>
      <div className={`${styles.circle} ${styles.circle2}`}></div>
      <div className={`${styles.circle} ${styles.circle3}`}></div>
    </div>
  );
}
