'use client';

export default function About() {
  return (
    <section className="about">
      <div className="about-container">
        <h2>Über mich</h2>

        <div className="about-intro">
          <p>
            Kreative IT-/AI-Quereinsteigerin mit Erfahrung in Videoproduktion, Animation, Design
            und Grundkenntnissen in Python, KI und 3D-Modellierung. Als neurodivergente Macherin
            kombiniere ich analytisches Denken, Neugierde und Learning-by-Doing.
          </p>
          <p style={{ marginTop: '15px' }}>
            <strong>Meine Stärke:</strong> Probleme schnell verstehen und IT-/AI-Tools effektiv zur Lösung einsetzen.
          </p>
        </div>

<h3>🎓 Ausbildung & Weiterbildung</h3>

        <div className="education-grid">
          <div className="education-item">
            <h4>Full Stack Developer Fundamentals</h4>
            <p>Aktuell in Weiterbildung</p>
            <p style={{ fontSize: '13px', marginTop: '8px' }}>
              Python, Machine Learning, Data Science, AI Engineering,
              Android Development, C#, Spieleentwicklung mit Unity
            </p>
            <p className="education-date">2025</p>
          </div>

          <div className="education-item">
            <h4>Goldschmiede-Ausbildung</h4>
            <p>Goldschmiede Dötzer Forchheim</p>
            <p style={{ fontSize: '13px', marginTop: '8px' }}>
              Design mit technischen Bauteilen, CAD, Schmuckherstellung,
              Erasmus-Programm in Finnland
            </p>
            <p className="education-date">Note: 1,0 (summa cum laude)</p>
          </div>

          <div className="education-item">
            <h4>IHK Programmierung & AI</h4>
            <p>Verschiedene Online-Kurse</p>
            <p style={{ fontSize: '13px', marginTop: '8px' }}>
              Python, NLP, Transformers, LLMs, LangChain, Hugging Face APIs
            </p>
            <p className="education-date">2025</p>
          </div>
        </div>

        <h3>🛠️ Technical Skills</h3>

        <div className="skills-section">
          <div className="skills-grid">
            <div className="skill-category">
              <h4>Programmierung</h4>
              <div className="skill-tags">
                <span className="skill-tag">Python</span>
                <span className="skill-tag">HTML/CSS</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">Java</span>
                <span className="skill-tag">C#</span>
                <span className="skill-tag">TypeScript</span>
              </div>
            </div>

            <div className="skill-category">
              <h4>Web & Full Stack</h4>
              <div className="skill-tags">
                <span className="skill-tag">Next.js</span>
                <span className="skill-tag">React</span>
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">Tailwind CSS</span>
                <span className="skill-tag">Git/GitHub</span>
                <span className="skill-tag">Vercel</span>
              </div>
            </div>

            <div className="skill-category">
              <h4>AI & Data Science</h4>
              <div className="skill-tags">
                <span className="skill-tag">Machine Learning</span>
                <span className="skill-tag">TensorFlow</span>
                <span className="skill-tag">NLP</span>
                <span className="skill-tag">Claude API</span>
                <span className="skill-tag">LLMs</span>
                <span className="skill-tag">Deepgram</span>
              </div>
            </div>

            <div className="skill-category">
              <h4>Creative & Design</h4>
              <div className="skill-tags">
                <span className="skill-tag">Blender</span>
                <span className="skill-tag">DaVinci Resolve</span>
                <span className="skill-tag">3D Modeling</span>
                <span className="skill-tag">CAD</span>
                <span className="skill-tag">UI/UX Design</span>
                <span className="skill-tag">Video Editing</span>
              </div>
            </div>
          </div>
        </div>

        <h3>⭐ Soft Skills</h3>

        <div className="skills-grid">
          <div className="skill-category">
            <h4>Persönliche Stärken</h4>
            <div className="skill-tags">
              <span className="skill-tag">Kreativität</span>
              <span className="skill-tag">Analytisches Denken</span>
              <span className="skill-tag">Systemdenken</span>
              <span className="skill-tag">Projektmanagement</span>
              <span className="skill-tag">Teamleitung</span>
              <span className="skill-tag">Kommunikation</span>
            </div>
          </div>

          <div className="skill-category">
            <h4>Neurodivergente Superkräfte</h4>
            <div className="skill-tags">
              <span className="skill-tag">Hyperfokus</span>
              <span className="skill-tag">Mustererkennung</span>
              <span className="skill-tag">Schnelle Auffassungsgabe</span>
              <span className="skill-tag">Kreatives Problemlösen</span>
            </div>
          </div>

          <div className="skill-category">
            <h4>Weitere Kompetenzen</h4>
            <div className="skill-tags">
              <span className="skill-tag">Resilienz</span>
              <span className="skill-tag">Lernhunger</span>
              <span className="skill-tag">Selbstständigkeit</span>
              <span className="skill-tag">Zielstrebigkeit</span>
              <span className="skill-tag">Interkulturell</span>
            </div>
          </div>
        </div>

        <h3>🌍 Sprachen</h3>

        <div className="skills-grid">
          <div className="skill-category">
            <div className="skill-tags">
              <span className="skill-tag">Deutsch - Muttersprache</span>
              <span className="skill-tag">Spanisch - Muttersprache</span>
              <span className="skill-tag">Englisch - B2</span>
              <span className="skill-tag">Catalan - A2</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
