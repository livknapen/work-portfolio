import styles from './ScrollNav.module.css';

export default function ScrollNav() {
  return (
    <nav className={styles.nav}>
      <a href="#hello" className={styles.dot}></a>
      <a href="#projecten" className={styles.dot}></a>
      <a href="#contact" className={styles.dot}></a>
    </nav>
  );
}
