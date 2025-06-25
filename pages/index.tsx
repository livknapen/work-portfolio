import styles from '../styles/Home.module.css';
import ScrollNav from '../components/ScrollNav';
import ProjectCard from '../components/ProjectCard';
import ContactSection from '../components/ContactSection';
import Background from '../components/Background';
import CustomCursor from '../components/CustomCursor';

export default function Home() {
  return (
<>
<CustomCursor />
    <main className={styles.main}>
      <Background />
      <section id="hello" className={styles.section}>
        <div className={`${styles.intro} ${styles.fadeInUp}`}>
          <h1>Hallo,<br />Ik ben <span className={styles["gradient-name"]}>Liv Knapen.</span></h1>
          <h3>Student ICT & Media Design<br />met een passie voor design en front-end development.</h3>
        </div>  
        <div className={styles.imageBox}>
          <div className={styles.imageWrapper}>
            <img
              src="./images/liv.jpeg"
              alt="Liv"
              className={`${styles.portrait} ${styles.fadeInLeft}`}
            />
            <img
              src="./images/image-design.png"
              alt="CSS Preview"
              className={`${styles.overlayBox} ${styles.fadeInLeft}`}
            />
            <img
              src="./images/image-develop.png"
              alt="Image Settings"
              className={`${styles.overlayBox} ${styles.fadeInLeft}`}
            />
          </div>
        </div>    
      </section>

      <section id="projecten" style={{ padding: '4rem 2rem', background: '#f9f9f9' }}>
      <div className={styles.projectTitleWrapper}>
        <h2 className={styles.projectTitle}>Projecten</h2>
        <p className={styles.subtitle}>Check de projecten waar ik aan heb (mee-)gewerkt.</p>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5rem', justifyContent: 'center', marginTop: '7rem' }}>
        <ProjectCard
          titel="AI-Weirdness"
          beschrijving="Een project waarbij er een presedientele verkiezing is tussen mens en AI."
          afbeelding="./images/ai-weirdness.png"
          link="https://jouwprojectlink.nl"
          tags={["Design", "Creative Coding", "Vue.js"]}
        />
        <ProjectCard
          titel="Project Auto verhuur in Curacao"
          beschrijving="Herontwerp van de website met betere usability en moderne stijl."
          afbeelding="./images/autohurencaracao.png"
          link="https://jouwandereproject.nl"
          tags={["Design", "Creative Coding"]}
        />
        <ProjectCard
          titel="ProjectX Three.js"
          beschrijving="Een website waarbij ik gebruik maak van Three.js voor 3D visualisaties."
          afbeelding="./images/threejs.png"
          link="https://jouwandereproject.nl"
          tags={["Creative Coding", "Three.js"]}
        />
        <ProjectCard
          titel="Project Brand a Band"
          beschrijving="Een passende stijl en branding voor een opkomende band."
          afbeelding="./images/bab.png"
          link="https://jouwandereproject.nl"
          tags={["Design", "Branding"]}
        />
        <ProjectCard
          titel="Escapetalk Dashboard"
          beschrijving="Herontwerp van het dashboard met betere usability en moderne stijl."
          afbeelding="./images/escapetalk-dashboard.png"
          link="https://jouwandereproject.nl"
          tags={["Design", "Creative Coding", "SASS"]}
        />
        <ProjectCard
          titel="Mind Feelings"
          beschrijving="Work in progress: een website voor kinder- tiener coaching."
          afbeelding="./images/mindfeelings.png"
          link="https://jouwandereproject.nl"
          tags={["Design"]}
        />
      </div>
    </section>

    <section id="over-mij" className={styles.aboutSection}>
      <div className={styles.aboutContent}>
        <h2 className={styles.projectTitle}>Over mij</h2>
        <p>
          Ik ben Liv Knapen, een student ICT & Media Design met een passie voor design en front-end development.
          Ik hou van het creëren van interactieve, gebruiksvriendelijke interfaces en ben altijd op zoek naar manieren
          om techniek en creativiteit samen te brengen. 
        </p>
        </div>
        <div className={styles.aboutContent}>
        <h2 className={styles.projectTitle}>Design en Development</h2>
        <p>
          Mijn favoriete tools zijn Figma, HTML/CSS, JavaScript en frameworks zoals React of Vue.
          Daarnaast werk ik graag aan visuele details, animatie en responsive design voor een soepele gebruikerservaring.
        </p>
      </div>
    </section>

    <ContactSection />

    <ScrollNav />
    </main>
    </>
  );
}
