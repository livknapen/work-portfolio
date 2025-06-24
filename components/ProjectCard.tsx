import styles from './ProjectCard.module.css';

type Props = {
  titel: string;
  beschrijving: string;
  afbeelding: string;
  link: string;
};

export default function ProjectCard({ titel, beschrijving, afbeelding, link }: Props) {
  return (
    <a href={link} className={styles.card} target="_blank" rel="noopener noreferrer">
      <img src={afbeelding} alt={titel} className={styles.image} />
      <div className={styles.content}>
        <h3 className={styles.title}>{titel}</h3>
        <p className={styles.desc}>{beschrijving}</p>
      </div>
    </a>
  );
}
