import styles from '../styles/Home.module.css';
import ScrollNav from '../components/ScrollNav';
import ProjectCard from '../components/ProjectCard';
import ContactSection from '../components/ContactSection';

export default function Home() {
  return (
<>
    <main className={styles.main}>
      <section id="hello" className={styles.section}>
        <div className={styles.intro}>
          <h1>Hallo,<br />Ik ben <span className={styles["gradient-name"]}>Liv Knapen.</span></h1>
          <p>Student ICT & Media Design<br />met een passie voor design en front-end development.</p>
        </div>
        <div className={styles.imageBox}>
          <img src="/liv.jpg" alt="Liv" className={styles.portrait} />
        </div>
      </section>

      <section id="projecten" style={{ padding: '4rem 2rem', background: '#f9f9f9' }}>
      <div className={styles.projectTitleWrapper}>
        <h2 className={styles.projectTitle}>Mijn Projecten</h2>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center', marginTop: '2rem' }}>
        <ProjectCard
          titel="AI-Weirdness"
          beschrijving="Een project waarbij er een presedientele verkiezing is tussen mens en AI."
          afbeelding="./images/ai-weirdness.png"
          link="https://jouwprojectlink.nl"
        />
        <ProjectCard
          titel="Project Auto verhuur in Curacao"
          beschrijving="Herontwerp van de website met betere usability en moderne stijl."
          afbeelding="./images/autohurencaracao.png"
          link="https://jouwandereproject.nl"
        />
        <ProjectCard
          titel="ProjectX Three.js"
          beschrijving="Een website waarbij ik gebruik maak van Three.js voor 3D visualisaties."
          afbeelding="./images/threejs.png"
          link="https://jouwandereproject.nl"
        />
        <ProjectCard
          titel="Project Brand a Band"
          beschrijving="Een passende stijl en branding voor een opkomende band."
          afbeelding="./images/bab.png"
          link="https://jouwandereproject.nl"
        />
        <ProjectCard
          titel="Dashboard vernieuwen voor Escapetalk"
          beschrijving="Herontwerp van het dashboard met betere usability en moderne stijl."
          afbeelding="./images/escapetalk-dashboard.png"
          link="https://jouwandereproject.nl"
        />
        <ProjectCard
          titel="Mind Feelings"
          beschrijving="Work in progress: een website voor kinder- tiener coaching."
          afbeelding="./images/mindfeelings.png"
          link="https://jouwandereproject.nl"
        />
      </div>
    </section>

    <ContactSection />

    <ScrollNav />
    </main>
    </>
  );
}
