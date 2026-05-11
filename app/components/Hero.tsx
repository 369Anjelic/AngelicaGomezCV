'use client';

export default function Hero() {
  return (
    <section className="hero">
      <h1>Mein Portfolio</h1>
      <p>Innovation • Kreativität • Technische Exzellenz</p>
      <p className="description">
        Full Stack Developer mit Fokus auf Next.js, React und Cloud Infrastructure.
        Entwicklung von innovativen Web-Anwendungen, Games und AI-integrierten Systemen.
      </p>

      <div className="stats-grid">
        <div className="stat">
          <div className="stat-number">12+</div>
          <div className="stat-label">Projekte</div>
        </div>
        <div className="stat">
          <div className="stat-number">3+</div>
          <div className="stat-label">Jahre Erfahrung</div>
        </div>
        <div className="stat">
          <div className="stat-number">100%</div>
          <div className="stat-label">Styleguide</div>
        </div>
        <div className="stat">
          <div className="stat-number">15+</div>
          <div className="stat-label">Technologies</div>
        </div>
      </div>
    </section>
  );
}
