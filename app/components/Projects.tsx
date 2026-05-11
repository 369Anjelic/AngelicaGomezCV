'use client';

import { useState } from 'react';

interface Project {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: string;
  status: 'completed' | 'wip' | 'planning';
  technologies: string[];
  link: string;
}

const PROJECTS: Project[] = [
  {
    id: 'fly-game',
    title: 'Flight Trainer - 2 Player',
    description: 'Interaktiver Flight Simulator für Piloten-Training.',
    icon: '✈️',
    category: 'game',
    status: 'completed',
    technologies: ['HTML5', 'Canvas', 'JavaScript', 'WebGL'],
    link: '/project/fly%20game/index.html',
  },
  {
    id: 'kaspar-hauser',
    title: 'Kaspar Hauser Quest',
    description: 'Interaktives Stadträtsel-Spiel über die Kaspar Hauser Geschichte.',
    icon: '🎭',
    category: 'game',
    status: 'completed',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    link: '/project/Kaspar%20hauser/kaspar-mittelalter-quest.html',
  },
  {
    id: 'glitch-game',
    title: 'Glitch verbessert',
    description: 'Verbessertes Action-Game mit neuen Features.',
    icon: '⚡',
    category: 'game',
    status: 'completed',
    technologies: ['Next.js', 'React', 'Node.js', 'Docker'],
    link: '/project/Glitch%20verbessert/index.html',
  },
  {
    id: 'moi-bot',
    title: 'MOI Bot',
    description: 'Intelligenter Chatbot mit natürlicher Sprachverarbeitung.',
    icon: '💬',
    category: 'ai',
    status: 'completed',
    technologies: ['Claude API', 'React', 'Node.js'],
    link: '/project/MOI%20bot/index.html',
  },
  {
    id: 'python-ubungen',
    title: 'Python Coding Übungen',
    description: 'Sammlung von 20 Python-Programmierübungen.',
    icon: '🐍',
    category: 'education',
    status: 'completed',
    technologies: ['Python', 'OOP', 'Algorithms'],
    link: '/project/python%20coden%20%C3%BCbungen/index.html',
  },
  {
    id: 'umfrage',
    title: 'Umfrage App',
    description: 'Umfrage-Anwendung für Erfassung und Auswertung von Daten.',
    icon: '📊',
    category: 'web',
    status: 'completed',
    technologies: ['HTML5', 'JavaScript', 'CSS'],
    link: '/project/umfrage/index.html',
  },
];

const CATEGORIES = [
  { id: 'all', label: 'Alle Projekte' },
  { id: 'game', label: '🎮 Games' },
  { id: 'ai', label: '🤖 AI/Bot' },
  { id: 'education', label: '📚 Bildung' },
  { id: 'web', label: '🌐 Web' },
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  // Force redeploy - only 6 active projects

  const filteredProjects = selectedCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedCategory);

  return (
    <section className="projects-section">
      <div className="category-filters">
        {CATEGORIES.map(cat => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`category-btn ${selectedCategory === cat.id ? 'active' : ''}`}
            style={{
              padding: '8px 16px',
              margin: '4px',
              borderRadius: '4px',
              background: selectedCategory === cat.id ? 'var(--primary)' : '#f0f0f0',
              color: selectedCategory === cat.id ? 'white' : '#333',
              border: 'none',
              cursor: 'pointer',
              fontWeight: selectedCategory === cat.id ? 'bold' : 'normal',
            }}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="projects-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '24px',
        marginTop: '32px',
      }}>
        {filteredProjects.map((project) => (
          <article
            key={project.id}
            className="project-card"
            style={{
              border: '2px solid #3987b8',
              borderRadius: '8px',
              padding: '20px',
              background: 'white',
              cursor: 'pointer',
            }}
          >
            <div style={{ marginBottom: '12px' }}>
              <span style={{ fontSize: '32px' }}>{project.icon}</span>
              <span
                style={{
                  marginLeft: '12px',
                  padding: '4px 8px',
                  background: '#3987b8',
                  color: 'white',
                  borderRadius: '4px',
                  fontSize: '12px',
                  fontWeight: 'bold',
                }}
              >
                ✅ {project.status}
              </span>
            </div>

            <h3 style={{ fontSize: '18px', fontWeight: 'bold', margin: '12px 0' }}>
              {project.title}
            </h3>
            <p style={{ color: '#666', marginBottom: '12px' }}>
              {project.description}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  style={{
                    padding: '4px 8px',
                    background: '#e8f1f8',
                    color: '#3987b8',
                    borderRadius: '4px',
                    fontSize: '12px',
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>

            <a
              href={project.link}
              className="project-link"
              style={{
                display: 'block',
                width: '100%',
                padding: '12px',
                background: '#3987b8',
                color: 'white',
                textAlign: 'center',
                borderRadius: '4px',
                textDecoration: 'none',
                fontWeight: 'bold',
              }}
            >
              🚀 Projekt öffnen
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
