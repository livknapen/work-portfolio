import { useEffect, useState } from 'react';
import styles from './ScrollNav.module.css';

const sections = ['hello', 'projecten', 'over-mij', 'contact'];

export default function ScrollNav() {
  const [active, setActive] = useState('hello');

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (!section) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActive(id);
          }
        },
        { rootMargin: '-30% 0px -30% 0px' }
      );

      observer.observe(section);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  return (
    <nav className={styles.nav}>
      {sections.map((id) => (
        <a
          key={id}
          href={`#${id}`}
          className={active === id ? styles.active : ''}
        >
          {id === 'hello' ? 'Home' : id.replace('-', ' ').replace(/^\w/, c => c.toUpperCase())}
        </a>
      ))}
    </nav>
  );
}
