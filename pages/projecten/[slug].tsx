import { useRouter } from "next/router";
import { projecten } from "./projecten";
import styles from "../../styles/ProjectPagina.module.css";
import ScrollNav from "../../components/ScrollNav";
import CustomCursor from "../../components/CustomCursor";
import { FaGithub } from "react-icons/fa";

export default function ProjectPagina() {
  const router = useRouter();
  const { slug } = router.query;

  const project = projecten.find((p) => p.slug === slug);

  if (!project) return <p>Project niet gevonden...</p>;

  return (
    <>
      <CustomCursor />
      <main className={styles.container}>
        <h1 className={styles.title}>{project.titel}</h1>
        <p className={styles.content}>{project.inhoud}</p>

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.githubLink}
          >
            <FaGithub style={{ marginRight: "0.5rem" }} />
            Bekijk op GitHub
          </a>
        )}

        {project.video ? (
          <video
            src={project.video}
            className={styles.video}
            autoPlay
            loop
            muted
            playsInline
          />
        ) : project.afbeeldingen ? (
          <div className={styles.gallery}>
            {project.afbeeldingen.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`${project.titel} afbeelding ${index + 1}`}
                className={styles.galleryImage}
              />
            ))}
          </div>
        ) : null}
      </main>
      <ScrollNav />
    </>
  );
}
