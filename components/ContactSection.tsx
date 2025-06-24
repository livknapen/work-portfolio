import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import styles from './ContactSection.module.css';

export default function ContactSection() {
  return (
    <section id="contact" className={styles.contact}>
      <h2 className={styles.title}>Contact</h2>
      <p className={styles.subtitle}>
        Interesse in samenwerking of gewoon even sparren? Neem gerust contact op.
      </p>
      <div className={styles.card}>
        <a href="mailto:liv.knapen@gmail.com" className={styles.link}>
          <FaEnvelope className={styles.icon} />
          <span>liv.knapen@gmail.com</span>
        </a>
        <a href="https://www.linkedin.com/in/liv-knapen-78041a1a5" className={styles.link} target="_blank" rel="noopener noreferrer">
          <FaLinkedin className={styles.icon} />
          <span>LinkedIn</span>
        </a>
        <a href="https://github.com/livknapen" className={styles.link} target="_blank" rel="noopener noreferrer">
          <FaGithub className={styles.icon} />
          <span>GitHub</span>
        </a>
      </div>
    </section>
  );
}
