'use client';

export default function Hero() {
  return (
    <section className="hero">
      <h1>CV Von Angelica Gomez</h1>
      <p>Innovation • Kreativität • Technische Exzellenz</p>
      <p className="description">
        Full Stack Developer mit Fokus auf Next.js, React und Cloud Infrastructure.
        Entwicklung von innovativen Web-Anwendungen und AI-integrierten Systemen.
      </p>

      <div className="stats-grid">
        <div className="stat">
          <div className="stat-number">8+</div>
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
          <div className="stat-number">10+</div>
          <div className="stat-label">Technologies</div>
        </div>
      </div>
    </section>
  );
}
