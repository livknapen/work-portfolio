import styles from './ProjectCard.module.css';

type Props = {
  titel: string;
  beschrijving: string;
  afbeelding: string;
  link: string;
  tags: string[];
};

export default function ProjectCard({ titel, beschrijving, afbeelding, link, tags }: Props) {
  return (
   <div className={styles.card}>
  <img src={afbeelding} alt={titel} className={styles.image} />
  <div className={styles.content}>
    <h3 className={styles.title}>{titel}</h3>
    <p className={styles.desc}>{beschrijving}</p>
    <div className={styles.tags}>
      {tags.map((tag, index) => (
        <span key={index} className={styles.tag}>{tag}</span>
      ))}
    </div>
    <div className={styles.buttonWrapper}>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.button}
      >
        Bekijk project
      </a>
    </div>
  </div>
</div>

  );
}

