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
  link?: string;
  github?: string;
  demo?: string;
}

const PROJECTS: Project[] = [
  {
    id: 'flight-trainer',
    title: 'Flight Trainer - 2 Player',
    description: 'Interaktiver Flight Simulator für Piloten-Training. Zwei Spieler können gemeinsam trainieren.',
    icon: '✈️',
    category: 'game',
    status: 'completed',
    technologies: ['HTML5', 'Canvas', 'JavaScript', 'WebGL'],
    link: '/flight game/index.html',
  },
  {
    id: 'kaspar-hauser',
    title: 'Kaspar Hauser Quest',
    description: 'Interaktives Stadträtsel-Spiel über die Kaspar Hauser Geschichte mit mittelalterlichem Setting.',
    icon: '🎭',
    category: 'game',
    status: 'completed',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com',
    demo: 'https://kaspar-hauser.vercel.app',
  },
  {
    id: 'glitch-game',
    title: 'Glitch verbessert',
    description: 'Verbessertes Action-Game mit neuen Features, besserer Performance und erweiterten Levels.',
    icon: '⚡',
    category: 'game',
    status: 'completed',
    technologies: ['Next.js', 'React', 'Node.js', 'Docker'],
    demo: 'https://glitch-verbessert.vercel.app',
  },
  {
    id: 'portfolio-cv',
    title: 'Portfolio & CV',
    description: 'Professionelle Portfolio-Website mit vollständigem CV und Projekt-Showcase.',
    icon: '📄',
    category: 'web',
    status: 'completed',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    link: 'https://portfolio.example.com',
  },
  {
    id: 'flight-mentor',
    title: 'Flight Mentor Bot',
    description: 'AI-basierter Pilot-Mentor mit Claude API Integration für BZF Training.',
    icon: '🤖',
    category: 'ai',
    status: 'completed',
    technologies: ['Claude API', 'Next.js', 'Node.js', 'WebSocket'],
  },
  {
    id: 'nova-system',
    title: 'NOVA 6.5.2026',
    description: 'Vollständiges Learning Management System mit Portfolio und Community Features.',
    icon: '🚀',
    category: 'system',
    status: 'completed',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Vercel'],
  },
  {
    id: 'moi-bot',
    title: 'MOI Bot',
    description: 'Intelligenter Chatbot mit natürlicher Sprachverarbeitung und Context Management.',
    icon: '💬',
    category: 'ai',
    status: 'completed',
    technologies: ['Claude API', 'React', 'Node.js', 'MongoDB'],
  },
  {
    id: 'kaspar-tts',
    title: 'Kaspar Hauser TTS',
    description: 'Text-to-Speech System mit Deepgram Integration für die Kaspar Hauser Stories.',
    icon: '🎤',
    category: 'ai',
    status: 'completed',
    technologies: ['Deepgram API', 'Node.js', 'Express', 'React'],
  },
];

const CATEGORIES = [
  { id: 'all', label: 'Alle Projekte' },
  { id: 'game', label: '🎮 Games' },
  { id: 'web', label: '🌐 Web' },
  { id: 'ai', label: '🤖 AI/Bot' },
  { id: 'system', label: '🚀 Systeme' },
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProjects = selectedCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedCategory);

  return (
    <section className="projects-section">
      <div className="projects-header">
        <h2>Alle Projekte</h2>
        <p>Entdecke meine neuesten Arbeiten und laufenden Projekte</p>
      </div>

      <div className="filter-tabs">
        {CATEGORIES.map(cat => (
          <button
            key={cat.id}
            className={`filter-btn ${selectedCategory === cat.id ? 'active' : ''}`}
            onClick={() => setSelectedCategory(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map(project => (
          <div key={project.id} className="project-card">
            <div className="project-header">
              <span className="project-icon">{project.icon}</span>
              <span className={`project-status ${project.status}`}>
                {project.status === 'completed' && '✓ Abgeschlossen'}
                {project.status === 'wip' && '⚙️ In Bearbeitung'}
                {project.status === 'planning' && '📋 Geplant'}
              </span>
            </div>

            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>

            <div className="project-meta">
              {project.technologies.map(tech => (
                <span key={tech} className="tech-tag">{tech}</span>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '10px', marginTop: 'auto' }}>
              {project.link && (
                <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                  Demo öffnen
                </a>
              )}
              {project.demo && (
                <a href={project.demo} className="project-link" target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
              )}
              {project.github && (
                <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              )}
              {!project.link && !project.demo && !project.github && (
                <span style={{
                  padding: '10px 20px',
                  background: 'rgba(57, 135, 184, 0.1)',
                  borderRadius: '6px',
                  fontSize: '13px',
                  color: 'var(--text-muted)',
                  textAlign: 'center',
                  width: '100%'
                }}>
                  Weitere Info verfügbar
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
