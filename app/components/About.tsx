'use client';

import { useState } from 'react';

export default function About() {
  const [activeTab, setActiveTab] = useState('profil');

  return (
    <section className="about">
      <div className="about-container">
        {/* HEADER SECTION */}
        <div className="cv-header" style={{ flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <div className="cv-header-left" style={{ alignItems: 'center' }}>
            <h1>Angelica Gomez</h1>
            <img
              src="/cv-skills-chart.jpeg"
              alt="Skills Chart"
              style={{ maxWidth: '250px', height: 'auto', borderRadius: '8px', marginTop: '15px' }}
            />
            <p className="cv-title">IT/AI-Quereinsteigerin</p>
            <p className="cv-location">📍 Fürth, Deutschland</p>
          </div>
          <div className="cv-header-contact" style={{ marginTop: '20px' }}>
            <p>📱 0157 3923 1128</p>
            <p>📧 AnjelicFilms@hotmail.com</p>
          </div>
        </div>

        {/* KURZPROFIL */}
        <div className="cv-section profil-section">
          <h2>🎯 Kurzprofil</h2>
          <p>
            Kreative IT-/AI-Quereinsteigerin mit Erfahrung in Videoproduktion, Animation und Design sowie
            Grundkenntnissen in Python, KI und 3D-Modellierung. Als neurodivergente Macherin kombiniere ich
            analytisches Denken, Neugierde und Learning-by-Doing.
          </p>
          <p style={{ marginTop: '12px', fontWeight: 600 }}>
            💡 Meine Stärke: Probleme schnell verstehen & IT-/AI-Tools effektiv zur Lösung einsetzen
          </p>
        </div>

        {/* TAB NAVIGATION */}
        <div className="cv-tabs">
          <button
            className={`cv-tab ${activeTab === 'profil' ? 'active' : ''}`}
            onClick={() => setActiveTab('profil')}
          >
            💼 Beruflich
          </button>
          <button
            className={`cv-tab ${activeTab === 'skills' ? 'active' : ''}`}
            onClick={() => setActiveTab('skills')}
          >
            🛠️ Skills
          </button>
          <button
            className={`cv-tab ${activeTab === 'ausbildung' ? 'active' : ''}`}
            onClick={() => setActiveTab('ausbildung')}
          >
            🎓 Ausbildung
          </button>
          <button
            className={`cv-tab ${activeTab === 'sprachen' ? 'active' : ''}`}
            onClick={() => setActiveTab('sprachen')}
          >
            🌍 Sprachen
          </button>
        </div>

        {/* BERUFLICH TAB */}
        {activeTab === 'profil' && (
          <div className="cv-section experience-section">
            <h2>💼 Professionelles Portfolio</h2>

            <div className="experience-card">
              <div className="experience-header">
                <h3>🎥 Freiberufliche Videografin</h3>
                <span className="experience-date">01/2022 – heute</span>
              </div>
              <p className="experience-company">Deutschlandweit, Remote & vor Ort</p>
              <ul className="experience-list">
                <li>Kundenorientierte Konzeption, Planung und Umsetzung von Videoprojekten für Unternehmen, politische Kampagnen, Kunstausstellungen und Social Media</li>
                <li>Beratung von Kunden bei digitalen Content-Strategien</li>
                <li>AI-gestützte Videobearbeitung (z.B. Color Grading in DaVinci)</li>
                <li>3D-Animationen in Blender und Fusion für Logoanimation</li>
                <li>KI-unterstützte Videoprojekte und Webentwicklung (AnjelicFilms)</li>
              </ul>

              <div style={{ marginTop: '20px', paddingTop: '20px', borderTop: '1px solid #ddd' }}>
                <h4 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '12px' }}>📋 Beispiele für IT-/AI-bezogene Projekte:</h4>
                <ul className="experience-list">
                  <li>AI-autonome Erstellung eigener Website (AnjelicFilms) durch Prompting in Netlify</li>
                  <li>Coding für die Erstellung von 3D-Design in Blender</li>
                  <li>Erstellung einer Neurodivergenten App für den Alltag (HTML, CSS, Java & Python)</li>
                </ul>
              </div>

              <div style={{ marginTop: '20px', paddingTop: '20px', borderTop: '1px solid #ddd' }}>
                <h4 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '12px' }}>✨ Anwendbare Kenntnisse aus Videografie → IT:</h4>
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                  <span className="skill-tag">Technische Softwarekompetenz</span>
                  <span className="skill-tag">Kreatives Storytelling</span>
                  <span className="skill-tag">Projektmanagement</span>
                  <span className="skill-tag">Kommunikation & Präsentation</span>
                  <span className="skill-tag">Umgang mit komplexen Programmen</span>
                </div>
              </div>
            </div>

            <div className="experience-card">
              <div className="experience-header">
                <h3>💎 Freiberufliche Goldschmiedin</h3>
                <span className="experience-date">10/2009 – 05/2011</span>
              </div>
              <p className="experience-company">Deutschlandweit</p>
              <ul className="experience-list">
                <li>Verkauf eigener Designs und Kundenaufträge</li>
                <li>Luxusschmuck-Design & Reparaturen (u.a. für Juwelier Krieger, Regensburg)</li>
                <li>Präzises und detailgenaues Arbeiten mit hochwertigen Materialien</li>
              </ul>

              <div style={{ marginTop: '20px', paddingTop: '20px', borderTop: '1px solid #ddd' }}>
                <h4 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '12px' }}>✨ Anwendbare Kenntnisse aus Goldschmiede:</h4>
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                  <span className="skill-tag">Präzises & detailgenaues Arbeiten</span>
                  <span className="skill-tag">Geduld & Ausdauer</span>
                  <span className="skill-tag">Kreatives Designverständnis</span>
                  <span className="skill-tag">Manuelles Geschick</span>
                  <span className="skill-tag">Sorgfältige Materialverarbeitung</span>
                </div>
              </div>
            </div>

            <div className="cv-highlight">
              <h3>✨ Anwendbare Kenntnisse aus Videografie → IT</h3>
              <div className="skills-tags-inline">
                <span className="skill-tag">Technische Softwarekompetenz</span>
                <span className="skill-tag">Kreatives Storytelling</span>
                <span className="skill-tag">Projektmanagement</span>
                <span className="skill-tag">Kommunikation</span>
              </div>
            </div>
          </div>
        )}

        {/* SKILLS TAB */}
        {activeTab === 'skills' && (
          <div className="cv-section skills-section">
            <h2>🛠️ Technical & Creative Skills</h2>

            <div className="skills-grid">
              <div className="skill-category">
                <h3>💻 Programmierung</h3>
                <div className="skill-tags">
                  <span className="skill-tag-large">Python</span>
                  <span className="skill-tag-large">HTML & CSS</span>
                  <span className="skill-tag-large">JavaScript</span>
                  <span className="skill-tag-large">Java</span>
                  <span className="skill-tag-large">C#</span>
                </div>
              </div>

              <div className="skill-category">
                <h3>🤖 AI & Data Science</h3>
                <div className="skill-tags">
                  <span className="skill-tag-large">Machine Learning</span>
                  <span className="skill-tag-large">TensorFlow</span>
                  <span className="skill-tag-large">NLP</span>
                  <span className="skill-tag-large">Transformers</span>
                  <span className="skill-tag-large">LLMs</span>
                  <span className="skill-tag-large">LangChain</span>
                </div>
              </div>

              <div className="skill-category">
                <h3>🎨 Creative & Design</h3>
                <div className="skill-tags">
                  <span className="skill-tag-large">DaVinci Resolve</span>
                  <span className="skill-tag-large">Blender</span>
                  <span className="skill-tag-large">3D Animation</span>
                  <span className="skill-tag-large">Video Editing</span>
                  <span className="skill-tag-large">Motion Design</span>
                  <span className="skill-tag-large">CAD</span>
                </div>
              </div>

              <div className="skill-category">
                <h3>⚡ Professional & Soft Skills</h3>
                <div className="skill-tags">
                  <span className="skill-tag-large">Projektmanagement</span>
                  <span className="skill-tag-large">Kreativität</span>
                  <span className="skill-tag-large">Analytisches Denken</span>
                  <span className="skill-tag-large">Hyperfokus</span>
                  <span className="skill-tag-large">Mustererkennung</span>
                  <span className="skill-tag-large">Lernhunger</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* AUSBILDUNG TAB */}
        {activeTab === 'ausbildung' && (
          <div className="cv-section education-section">
            <h2>🎓 Ausbildung & Weiterbildung</h2>

            <div className="education-card">
              <div className="education-header">
                <h3>🚀 Full Stack Developer & AI Engineering</h3>
                <span className="education-date">01/2025 – heute</span>
              </div>
              <p className="education-place">Online Weiterbildung</p>
              <div className="education-content">
                <p><strong>Inhalte:</strong></p>
                <ul>
                  <li>Python für Machine Learning und Data Science</li>
                  <li>Regression, Klassifikation, NLP, Neuronale Netze mit TensorFlow</li>
                  <li>Deep Learning & KI Engineering</li>
                  <li>Android Development & C# Programmierung</li>
                  <li>Spieleentwicklung mit Unity</li>
                </ul>
              </div>
            </div>

            <div className="education-card">
              <div className="education-header">
                <h3>🏅 Goldschmiede-Ausbildung</h3>
                <span className="education-date">09/2016 – 05/2019</span>
              </div>
              <p className="education-place">Goldschmiede Dötzer Forchheim</p>
              <div className="education-content">
                <p><strong>Abschlussnote:</strong> 1,0 (summa cum laude) ⭐</p>
                <p><strong>Schwerpunkte:</strong> Design mit Technischen Bauteilen, CAD, Schmuckherstellung</p>
                <p><strong>Besonderheit:</strong> Erasmus-Programm in Finnland</p>
              </div>
            </div>
          </div>
        )}

        {/* SPRACHEN TAB */}
        {activeTab === 'sprachen' && (
          <div className="cv-section languages-section">
            <h2>🌍 Sprachkenntnisse</h2>

            <div className="language-grid">
              <div className="language-card">
                <h3>🇩🇪 Deutsch</h3>
                <p className="language-level">Muttersprache</p>
              </div>
              <div className="language-card">
                <h3>🇪🇸 Spanisch</h3>
                <p className="language-level">Muttersprache</p>
              </div>
              <div className="language-card">
                <h3>🇬🇧 Englisch</h3>
                <p className="language-level">B2</p>
              </div>
              <div className="language-card">
                <h3>🇨🇦 Catalan</h3>
                <p className="language-level">A2</p>
              </div>
            </div>
          </div>
        )}

        {/* CTA BUTTONS */}
        <div className="cv-cta">
          <a href="mailto:AnjelicFilms@hotmail.com" className="cv-button primary">
            ✉️ Email schreiben
          </a>
          <a href="tel:+491573923112" className="cv-button secondary">
            📱 Anrufen
          </a>
        </div>
      </div>
    </section>
  );
}
