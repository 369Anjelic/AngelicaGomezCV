'use client';

export default function Hero() {
  return (
    <section className="hero">
      <h1>Hyperfocus • Out of the box denken • Visionär</h1>
      <p className="description">
        Full Stack Developer. Next.js • React • Cloud. Innovative Web Apps • Games • AI Systems.
      </p>

      <div className="stats-grid">
        <div className="stat">
          <div className="stat-number">12+</div>
          <div className="stat-label">Projekte</div>
        </div>
        <div className="stat">
          <div className="stat-number">3+</div>
          <div className="stat-label">Jahre Exp</div>
        </div>
        <div className="stat">
          <div className="stat-number">100%</div>
          <div className="stat-label">Styleguide</div>
        </div>
        <div className="stat">
          <div className="stat-number">15+</div>
          <div className="stat-label">Tech Stack</div>
        </div>
      </div>
    </section>
  );
}
