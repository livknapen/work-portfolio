import { useRouter } from "next/router";
import { projecten } from "./projecten";
import styles from "../../styles/ProjectPagina.module.css";
import ScrollNav from "../../components/ScrollNav";
import CustomCursor from "../../components/CustomCursor";
import { FaGithub } from "react-icons/fa";
import DOMPurify from "isomorphic-dompurify";
import Link from "next/link";

export default function ProjectPagina() {
  const router = useRouter();
  const { slug } = router.query;

  const slugStr = Array.isArray(slug) ? slug[0] : slug;
  const project = projecten.find((p) => p.slug === slugStr);

  if (!project) return <p>Project niet gevonden...</p>;

  // inhoud kan string of string[] zijn → normaliseren
  const inhoud: string = Array.isArray(project.inhoud)
    ? project.inhoud.join("\n\n")
    : (project.inhoud ?? "");

  const safeHtml = DOMPurify.sanitize(inhoud, { USE_PROFILES: { html: true } });

  return (
    <>
      <CustomCursor />
      <Link href="/#projecten" className={styles.backButton}>
        ← Terug
      </Link>
      <main className={styles.container}>
        <h1 className={styles.title}>{project.titel}</h1>

        {project.beschrijving && (
          <p className={styles.desc}>{project.beschrijving}</p>
        )}

        {/* HTML-inhoud met enters, bold, etc. */}
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: safeHtml }}
        />

        {project.video && (
        <video
          src={project.video}
          className={styles.video}
          autoPlay
          loop
          muted
          playsInline
        />
      )}

      {project.afbeeldingen && project.afbeeldingen.length > 0 && (
        <div className={styles.gallery}>
          {project.afbeeldingen.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`${project.titel} afbeelding ${i + 1}`}
              className={styles.galleryImage}
            />
          ))}
        </div>
      )}

      </main>
      <ScrollNav />
    </>
  );
}
