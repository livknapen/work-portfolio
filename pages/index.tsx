import styles from "../styles/Home.module.css";
import ScrollNav from "../components/ScrollNav";
import ProjectCard from "../components/ProjectCard";
import ContactSection from "../components/ContactSection";
import Background from "../components/Background";
import CustomCursor from "../components/CustomCursor";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <main className={styles.main}>
        <Background />
        <section id="hello" className={styles.section}>
          <div className={`${styles.intro} ${styles.fadeInUp}`}>
            <h1>
              Hey,
              <br />
              Ik ben{" "}
              <span className={styles["gradient-name"]}>Liv Knapen.</span>
            </h1>
            <h3>
              Student ICT & Media Design
              <br />
              met een passie voor design en front-end development.
            </h3>
          </div>
          <div className={styles.imageBox}>
            <div className={styles.imageWrapper}>
              <img
                src="./images/liv.jpeg"
                alt="Liv"
                className={`${styles.portrait} ${styles.fadeInLeft}`}
              />
              <img
                src="./images/image copy.png"
                alt="CSS Preview"
                className={`${styles.overlayBox} ${styles.fadeInLeft}`}
              />
              <img
                src="./images/image copy 2.png"
                alt="Image Settings"
                className={`${styles.overlayBox} ${styles.fadeInLeft}`}
              />
            </div>
          </div>
        </section>

        <section
          id="projecten"
          style={{ padding: "4rem 2rem", background: "#f9f9f9" }}
        >
          <div className={styles.projectTitleWrapper}>
            <h2 className={styles.projectTitle}>Projecten</h2>
            <p className={styles.subtitle}>
              Check de projecten waar ik aan heb (mee-)gewerkt.
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "5rem",
              justifyContent: "center",
              marginTop: "7rem",
            }}
          >
            <ProjectCard
              titel="AI-Weirdness"
              beschrijving="Een project waarbij er een presedientele verkiezing is tussen mens en AI."
              afbeelding="./images/ai-weirdness.png"
              slug="ai-weirdness"
              tags={["Design", "Creative Coding", "Vue.js"]}
            />
            <ProjectCard
              titel="Project Auto verhuur in Curacao"
              beschrijving="Herontwerp van de website met betere usability en moderne stijl."
              afbeelding="./images/autohurencaracao.png"
              slug="project-auto-verhuur-curacao"
              tags={["Design", "Creative Coding"]}
            />
            <ProjectCard
              titel="ProjectX Three.js"
              beschrijving="Een website waarbij ik gebruik maak van Three.js voor 3D visualisaties."
              afbeelding="./images/threejs.png"
              slug="projectx-threejs"
              tags={["Creative Coding", "Three.js"]}
            />
            <ProjectCard
              titel="Project Brand a Band"
              beschrijving="Een passende stijl en branding voor een opkomende band."
              afbeelding="./images/bab.png"
              slug="project-brand-a-band"
              tags={["Design", "Branding"]}
            />
            <ProjectCard
              titel="Escapetalk Dashboard"
              beschrijving="Herontwerp van het dashboard met betere usability en moderne stijl."
              afbeelding="./images/escapetalk-dashboard.png"
              slug="escapetalk-dashboard"
              tags={["Design", "Creative Coding", "SASS"]}
            />
            <ProjectCard
              titel="Mind Feelings"
              beschrijving="Work in progress: een website voor kinder- en tienercoaching."
              afbeelding="./images/mindfeelings.png"
              slug="mind-feelings"
              tags={["Design"]}
            />
          </div>
        </section>

        <section id="over-mij" className={styles.aboutSection}>
          <div className={styles.aboutContent}>
            <h2 className={styles.projectTitle}>Over mij</h2>
            <h3>
              Ik ben Liv Knapen, een student ICT & Media Design met een passie
              voor design en front-end development. Ik hou van het creëren van
              interactieve, gebruiksvriendelijke interfaces en ben altijd op
              zoek naar manieren om techniek en creativiteit samen te brengen.
            </h3>
          </div>
          <div className={styles.aboutContent}>
            <h2 className={styles.projectTitle}>Design en Development</h2>
            <h3>
              Mijn favoriete tools zijn Figma, HTML/CSS, JavaScript en
              frameworks zoals React of Vue. Ook het werken met SASS en Tailwind
              CSS gaat me goed af. Daarnaast werk ik graag aan visuele details,
              animatie en responsive design voor een soepele gebruikerservaring.
            </h3>
          </div>
        </section>

        <ContactSection />

        <ScrollNav />
      </main>
    </>
  );
}
