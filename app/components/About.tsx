'use client';

export default function About() {
  return (
    <section style={{
      maxWidth: '1200px',
      margin: '60px auto',
      padding: '40px 20px',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '40px',
      alignItems: 'start',
    }}>
      {/* Bild */}
      <div style={{
        textAlign: 'center',
      }}>
        <img
          src="/cv-profile-image.jpeg"
          alt="Angelica Gomez"
          style={{
            width: '100%',
            maxWidth: '350px',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(57, 135, 184, 0.2)',
          }}
        />
      </div>

      {/* CV Inhalt */}
      <div style={{ color: '#333' }}>
        <h1 style={{ fontSize: '36px', margin: '0 0 8px 0', color: '#3987b8' }}>
          Angelica Gomez
        </h1>
        <p style={{ fontSize: '18px', color: '#666', margin: '0 0 24px 0' }}>
          IT/AI-Quereinsteigerin
        </p>

        {/* Kontakt */}
        <div style={{ marginBottom: '24px' }}>
          <p style={{ margin: '8px 0', fontSize: '16px' }}>📞 0157 3923 1128</p>
          <a
            href="mailto:AnjelicFilms@hotmail.com"
            style={{
              display: 'inline-block',
              padding: '12px 24px',
              background: '#3987b8',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '4px',
              fontWeight: 'bold',
            }}
          >
            ✉️ Email schreiben
          </a>
        </div>

        {/* Kurzprofil */}
        <div style={{ marginBottom: '32px' }}>
          <h3 style={{ color: '#3987b8', marginBottom: '12px' }}>Kurzprofil</h3>
          <p style={{ lineHeight: '1.6' }}>
            IT/AI-Quereinsteigerin mit Grundkenntnissen in Python, KI und 3D-Modellierung.
            Als neurodivergente Macherin kombiniere ich analytisches Denken, Neugierde und
            Learning-by-Doing. Selbstständigkeit und zwei erlernte Berufe belegen meine
            Präzision, Kreativität und Verantwortungsbereitschaft. Meine Stärke liegt darin,
            Probleme schnell zu verstehen und IT-/AI-Tools effektiv zur Lösung einzusetzen.
          </p>
        </div>

        {/* Soft Skills */}
        <div style={{ marginBottom: '32px' }}>
          <h3 style={{ color: '#3987b8', marginBottom: '12px' }}>Soft Skills</h3>
          <ul style={{ lineHeight: '1.8', margin: 0, paddingLeft: '20px' }}>
            <li>Systemdenken & Projektmanagement (80/20-Prinzip)</li>
            <li>Teamleitung & Kommunikation (Trainererfahrung)</li>
            <li>Resilienz & Lernhunger</li>
            <li>Neurodivergente Stärken: Hyperfokus, schnelle Mustererkennung</li>
            <li>Schnelle Auffassungsgabe und praxisorientiertes Arbeiten</li>
            <li>Zielstrebigkeit und Lösungsorientierung</li>
          </ul>
        </div>

        {/* Sprachkenntnisse */}
        <div>
          <h3 style={{ color: '#3987b8', marginBottom: '12px' }}>Sprachkenntnisse</h3>
          <p>🇩🇪 Deutsch – Muttersprache</p>
          <p>🇪🇸 Catalan – A2</p>
        </div>
      </div>
    </section>
  );
}
