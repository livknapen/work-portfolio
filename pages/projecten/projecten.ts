export const projecten = [
  {
    slug: 'ai-weirdness',
    titel: 'AI-Weirdness',
    beschrijving: 'Een project waarbij een presidentsverkiezing plaatsvindt tussen mens en AI.',
    inhoud:   `<p><strong>Rolverdeling:</strong> <em>groepsproject</em>, <em>verantwoordelijk voor UX</em> (research, wireframes, UI), <em>prototyping</em> en <em>development</em> (Voting Guide in Vue.js)</p>

              <p>Voor dit project hebben we een <em>interactieve campagne</em> ontwikkeld rond de verkiezing van de eerste president op de maan: een menselijke president (Emily Adams) versus een AI-president (MAIchael). De website vertelt het verhaal, bevat een Voting Guide met stellingen en biedt quests waarmee gebruikers punten kunnen verdienen voor hun gekozen kandidaat.</p>

              <p><strong>UX-design:</strong><br>
              Ik begon met <em>onderzoek</em> naar AI en vertrouwen in technologie via <em>literatuurstudie</em>, <em>survey</em> en <em>persona’s</em>. Dit leverde inzichten op die we vertaalden naar content en tone of voice. Daarna heb ik gewerkt aan wireframes en high-fidelity designs (mobile-first) in Figma. De stijl was consistent: <em>futuristische fonts</em>, <em>maan/space-achtergronden</em> en een <em>professionele blauwe kleurlijn</em>.</p>

              <p>In de <em>usability tests</em> hebben we het prototype getest bij studenten. Hieruit bleek dat de <em>navigatie</em> logisch was, maar dat er verbeteringen nodig waren in consistentie (menu zichtbaar op elke pagina) en <em>button states</em> (duidelijkere feedback bij keuzes). Deze punten heb ik doorgevoerd in het design.</p>

              <p><strong>Development</strong><br>
              Tijdens de <em>developmentfase</em> hebben we de website gebouwd in Vue.js met een GitLab-workflow (<em>branches → Frontend → Dev → Main</em>). Ik werkte aan de Voting Guide Page, waarin gebruikers stellingen doorlopen en een match krijgen met een kandidaat. Hierbij heb ik gelet op <em>duidelijke code-documentatie</em>, <em>component-gebruik</em> en <em>logische commit messages</em>.</p>

              <p><strong>Resultaat:</strong><br>
              Een interactieve, toekomstgerichte campagne-ervaring die gebruikers meeneemt in een fictieve presidentsverkiezing op de maan. Met een consistente visuele stijl, heldere user flow en werkende Vue.js-implementatie is dit project een combinatie van design, UX en development.</p>
              `,
    afbeeldingen: ['/images/ai-weirdness-groot.png', '/images/ai-weirdness-voting.png'],
    tags: ['Vue.js', 'Creative Coding'],
    github: 'https://github.com/livknapen/ai-weirdness.git'
  },
  {
    slug: 'project-auto-verhuur-curacao',
    titel: 'Project Auto verhuur in Curacao',
    beschrijving: 'Herontwerp van de website met betere usability en moderne stijl.',
    inhoud:  `<p><strong>Rolverdeling:</strong> <em>groepsproject</em>, <em>verantwoordelijk voor research</em>, <em>wireframes</em>, <em>UI</em>, <em>prototyping</em> en <em>development</em> (filterpagina)</p>

              <p>Voor dit project heb ik samen met mijn groep gewerkt aan een <em>gebruiksvriendelijke website</em> voor Auto Huren Curaçao. Het doel was om bezoekers snel en betrouwbaar een auto te laten reserveren, zowel via desktop als mobiel.</p>

              <p><strong>UX-design:</strong><br>
              Ik begon met onderzoek naar vergelijkbare websites (SunnyCars en Bed &amp; Breakfast) om <em>CTA’s</em>, <em>navigatiestructuur</em> en <em>bestelprocessen</em> te analyseren. Vanuit daar koos ik mijn invalshoek: goedkoop. Ik onderzocht hoe je een betaalbare uitstraling kunt neerzetten zonder onbetrouwbaar te lijken, met nadruk op <em>transparante prijzen</em>, <em>eenvoudige navigatie</em> en <em>vertrouwen via reviews</em>.</p>

              <p>Daarna heb ik via <em>card sorting</em> de informatiearchitectuur aangescherpt en een overzichtelijke navigatie en filterstructuur opgesteld (standaard, groot, off-road). Vanuit een <em>mobile-first</em> aanpak heb ik wireframes uitgewerkt en vertaald naar high-fidelity designs in Figma. Belangrijke elementen waren een duidelijke <em>CTA boven de vouw</em>, <em>filteropties</em>, <em>stap-indicatoren</em> en <em>WhatsApp-integratie</em> als contactkanaal.</p>

              <p>Met <em>usability tests</em> heb ik de prototypes gevalideerd. Gebruikers konden eenvoudig een auto reserveren, al leverde dit verbeterpunten op zoals het toevoegen van een <em>vaste samenvattingskolom</em>, <em>klikbare telefoonnummers</em> en <em>verfijning van de desktop-layout</em>. Deze feedback heb ik verwerkt in de eindversie van het prototype.</p>

              <p><strong>Development:</strong><br>
              In duo’s hebben we het design vertaald naar een werkende website. Via GitLab werkten we met branches zodat we zonder conflicten konden samenwerken. Zelf was ik verantwoordelijk voor de filterpagina van de webversie. Hierbij maakte ik gebruik van <em>data-attributen</em> en duidelijke <em>variabelen</em> in JavaScript. Na feedback heb ik mijn code verbeterd met onder andere het gebruik van <em>Engelse classnames</em>, <em>semantic HTML5</em> en de <em>BEM-methodiek</em>.</p>

              <p>Daarnaast hebben we onze site <em>getest met scenario’s</em>, zoals het boeken van een standaardauto met kinderzitje of het vinden van het Nederlandse telefoonnummer. Uit de tests bleek dat de belangrijkste CTA’s goed werden gevonden, maar dat de extra opties en contactinformatie nog duidelijker gepresenteerd konden worden. Deze inzichten hebben geleid tot gerichte verbeteringen.</p>

              <p><strong>Resultaat:</strong><br>
              Het eindproduct was een volledig functionele website (desktop en mobiel) waarin de belangrijkste processen – auto reserveren, filters gebruiken en contact opnemen – soepel verlopen. Met een duidelijke structuur, een consistente visuele stijl en technische implementatie hebben we een gebruiksvriendelijke oplossing neergezet.</p>
              `,
    afbeeldingen: ['/images/autohurencuracao-groot.png'],
    tags: ['Design', 'Creative Coding'],
    github: 'https://github.com/livknapen/autohurencuracao.git'
  },
  {
    slug: 'projectx-threejs',
    titel: 'ProjectX Three.js',
    beschrijving: 'Een website waarbij ik gebruik maak van Three.js voor 3D visualisaties.',
    inhoud:  `<p><strong>Technologieën:</strong> <em>HTML</em>, <em>CSS</em>, <em>JavaScript</em>, <em>Three.js</em></p>

              <p>Voor ProjectX heb ik een interactieve experience website ontworpen en ontwikkeld waarin de gebruiker een 3D-wereld kan betreden.</p>

              <p>Het uitgangspunt was om de beleving van een arcade-game tot leven te brengen door middel van animaties, interactieve elementen en scene-transitions.</p>

              <p>In dit project heb ik uitgebreid onderzoek gedaan naar Three.js, waarbij ik werkte met de kernconcepten <em>scene</em>, <em>camera</em> en <em>renderer</em>.
              Ik heb geleerd hoe objecten worden opgebouwd uit <em>geometry</em>, <em>material</em> en <em>mesh</em>, en hoe deze samen een 3D-wereld vormen.</p>

              <p>Ook heb ik experimenten gedaan met <em>third-person camera-controls</em>, <em>keyboard controls</em> (WASD) en <em>het inladen van 3D-modellen</em>.</p>

              <p>De ervaring begint met een karakter dat je kunt besturen richting een arcade machine. Zodra je de arcade binnengaat, activeert dit een teleportatie naar een nieuwe scene: een <em>Street Fighter</em>-wereld, waarin de speler verder kan bewegen binnen het spel.</p>

              <p>Dit overgangseffect is mogelijk gemaakt door onderzoek naar scene-transitions en het positioneren van nieuwe 3D-omgevingen.</p>

              <p>Naast het technische onderzoek heb ik ook aandacht besteed aan design: <em>thema</em>, <em>kleuren</em>, <em>karakterkeuze</em> en <em>stijl</em>. Door middel van wireframes en snelle schetsen kreeg ik een beeld van het eindproduct, waarna ik dit vertaalde naar een interactief prototype.</p>

              <p><strong>Resultaat:</strong><br>
              Een interactieve 3D-website die de bezoeker meeneemt in een arcade-ervaring.<br>
              Het project combineert designonderzoek met technische ontwikkeling en laat zien hoe je met Three.js een meeslepende digitale beleving kunt creëren.</p>`,
    video: '/images/ryu-film.mov',
    afbeelding: '',
    tags: ['Creative Coding', 'Three.js'],
    github: 'https://github.com/livknapen/projectX.git'
  },
  {
    slug: 'project-brand-a-band',
    titel: 'Project Brand a Band',
    beschrijving: 'Een passende stijl en branding voor een opkomende band.',
    inhoud:  `<p><strong>Rolverdeling</strong>: <em>groepsproject</em>, <em>verantwoordelijk voor styleguides</em>, <em>design</em> en <em>visuele uitwerking</em>.</p> 
              
              <p>Voor het project BRAND A BAND hebben we een complete <em>visuele identiteit</em> ontwikkeld voor een jonge band. Samen met mijn team werkte ik vanuit een duidelijke communicatiestructuur (dagelijkse stand-ups en groepsapp) en hielden we de band zelf nauw betrokken bij de keuzes. </p> 
              
              <p>Ik heb verschillende stylescapes ontworpen en beargumenteerd, waarbij <em>kleurgebruik</em>, <em>fonts</em> en <em>fotografie</em> een belangrijke rol speelden. Zo gaven combinaties van pastelkleuren en retro-accenten een zachte maar rebelse uitstraling, terwijl graffiti-achtige fonts het urban en ‘spijbelaar’-karakter van de band benadrukten.</p> 
              
              <p>Op basis van feedback van de band en docenten hebben we de stijl verder aangescherpt en uitgebreid naar een <em>brandguide</em>, waarin logo, typografie en kleuren consistent zijn vastgelegd. Daarnaast heb ik gewerkt aan <em>cd-covers</em>, <em>merch designs</em> en <em>lp-hoezen</em>, waarin de speelse, rebelse identiteit van de band tot uitdrukking komt. Hierbij heb ik gebruikgemaakt van zowel hun eigen fotografie als door henzelf gemaakte doodles, zodat de huisstijl echt persoonlijk en authentiek werd.</p> 
              
              <p><strong>Resultaat:</strong><br> 
              Het project resulteerde in een complete visuele toolkit waarmee de band zichzelf professioneel en herkenbaar kan presenteren, online én offline.</p>`,
    afbeeldingen: ['/images/bab.png', '/images/bab2.png'],
    tags: ['Design', 'Branding'],
  },
  {
    slug: 'escapetalk-dashboard',
    titel: 'Escapetalk Dashboard',
    beschrijving: 'Herontwerp van het dashboard met betere usability en moderne stijl.',
    inhoud: `<p><strong>Rolverdeling:</strong> afstudeerproject (<em>PID</em>, <em>research</em>, <em>UX-design</em>, <em>prototyping</em> en <em>front-end implementatie</em>)</p>

              <p>Voor Escapetalk.n heb ik een <em>Project Initiatie Document (PID)</em> opgesteld voor het vernieuwen van het <em>abonnementen-dashboard</em>. Doel: drie nieuwe abonnementen (<em>Kennis</em>, <em>Vriend</em>, <em>BFF</em>) met oplopende voordelen helder presenteren in een <em>modern</em>, <em>gebruiksvriendelijk</em> en <em>datagedreven</em> dashboard, zodat escaperoom-eigenaren sneller inzicht krijgen in prestaties en gestimuleerd worden tot (upgrade)conversie.</p>

              <p><strong>Aanleiding &amp; doel:</strong><br>
              Escapetalk groeide van Benelux-platform naar internationale database met reviews en games. Het bestaande dashboard sluit niet meer aan op de nieuwe abonnementsstructuur. Binnen <em>16 weken</em> lever ik nieuwe pagina’s en een geüpdatet dashboard op, met tussentijdse validatie bij stakeholders.</p>

              <p><strong>Aanpak (Double Diamond)</strong></p>
              <ul>
                <li><strong>Discover:</strong> literature &amp; trendanalyse van dashboards, analyse huidige IST-situatie, stakeholderinterviews.</li>
                <li><strong>Define:</strong> gap-analyse (IST→SOLL), persona &amp; customer journey, MoSCoW-prioritering, design specification.</li>
                <li><strong>Develop:</strong> wireframes → high-fidelity prototypes, proof of concept, iteratieve peer reviews.</li>
                <li><strong>Deliver:</strong> usability- &amp; quality reviews, test report, advisory report en overdrachtsdocumentatie.</li>
              </ul>

              <p><strong>Scope &amp; content:</strong></p>
              <ul>
                <li>Nieuwe <em>abonnementenweergave</em> (wel/niet beschikbare voordelen).</li>
                <li><em>Dashboardmodules</em> met o.a. statistieken: reviews, ontsnappingspercentage, aantal plays, wishlist-counts, volgers, likes, pageviews en doorklikratio.</li>
                <li><em>Promotie-/upgrade-sectie</em> binnen het dashboard (commerciële conversies).</li>
                <li>Niet in scope: andere websitepagina’s en externe klantcontacten (alle communicatie via product owner).</li>
              </ul>

              <p><strong>Projectorganisatie &amp; middelen:</strong></p>
              <ul>
                <li><strong>Werk locatie:</strong> Lift 3 (Cuijk). Agile werkwijze met <em>sprints</em>, Trello voor planning.</li>
                <li><strong>Tech stack &amp; tools:</strong> Visual Studio Code, Bitbucket (git), Twig &amp; SCSS in eigen CMS (Bold), MAMP PRO/NAS voor lokale omgeving, Figma voor design.</li>
                <li><strong>Code-richtlijnen:</strong> duidelijke repo-structuur, semantische HTML, consistente naamgeving, versiebeheer met feature branches.</li>
              </ul>

              <p><strong>Resultaat:</strong><br>
              Een gedragen plan + prototype voor een modern, responsive abonnementen-dashboard met duidelijke waarde-communicatie per tier, focus op inzicht (statistieken) en conversie (upgrades). De deliverables maken livegang</em> en doorontwikkeling door het dev-team efficiënt en onderhoudbaar.</p>
              `,
    afbeeldingen: ['/images/escapetalk-groot.png'],
    tags: ['Design', 'Creative Coding', 'SASS'],
    github: 'https://github.com/livknapen/Escapetalk-dashboard.git'
  },
  {
    slug: 'mind-feelings',
    titel: 'Mind Feelings',
    beschrijving: 'Work in progress: een website voor kinder- en tienercoaching.',
    inhoud: 'Hier schrijf je een lange uitleg over het project met visuals, uitdagingen en oplossingen.',
    afbeeldingen: ['/images/mindfeelings.png'],
    tags: ['Design'],
  }
];
