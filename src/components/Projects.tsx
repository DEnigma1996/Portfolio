import { useState } from 'react';
import './Projects.css';

interface Project {
  name: string;
  description: string;
  tech: string[];
  url: string;
  featured: boolean;
}

export default function Projects() {
  const projects: Project[] = [
    {
      name: 'IntelliGrade School Management System',
      description: 'A comprehensive school management system built with Google AI Studio integration for intelligent grading and analytics. Features include student management, course tracking, and AI-powered assessment tools.',
      tech: ['TypeScript', 'React', 'Node.js', 'Google AI'],
      url: 'https://github.com/DEnigma1996/IntelliGrade-School-Management-System',
      featured: true,
    },
    {
      name: 'Event Booking Web Application',
      description: 'Full-featured event booking platform with real-time availability checking, payment integration, and user management. Supports multiple event types and booking workflows.',
      tech: ['TypeScript', 'React', 'Express', 'PostgreSQL'],
      url: 'https://github.com/DEnigma1996/EventBookingWebApplication',
      featured: true,
    },
    {
      name: 'School Management System',
      description: 'Enterprise-grade school administration system with comprehensive modules for student records, attendance tracking, grade management, and reporting.',
      tech: ['TypeScript', 'Node.js', 'MongoDB', 'REST API'],
      url: 'https://github.com/DEnigma1996/School-Management-System',
      featured: true,
    },
    {
      name: 'TheNinjaRPG',
      description: 'Source code for TheNinja-RPG Core 4 - a browser-based RPG game with complex game mechanics, user progression systems, and real-time multiplayer features.',
      tech: ['TypeScript', 'React', 'WebSocket', 'Game Dev'],
      url: 'https://github.com/DEnigma1996/TheNinjaRPG',
      featured: true,
    },
    {
      name: 'ChitChat',
      description: 'Real-time chat application with multiple chat rooms, direct messaging, and user presence features. Built with modern web technologies for seamless communication.',
      tech: ['JavaScript', 'WebSocket', 'Node.js', 'Express'],
      url: 'https://github.com/DEnigma1996/chitchat',
      featured: false,
    },
    {
      name: 'BlackJack Game',
      description: 'Interactive BlackJack card game with smooth animations, game state management, and player statistics tracking.',
      tech: ['JavaScript', 'HTML5', 'CSS3', 'Game Logic'],
      url: 'https://github.com/DEnigma1996/Black-jack_game',
      featured: false,
    },
  ];

  const allTechs = Array.from(new Set(projects.flatMap(p => p.tech)));
  const [selectedTech, setSelectedTech] = useState<string>('All');

  const filteredProjects = selectedTech === 'All'
    ? projects
    : projects.filter(p => p.tech.includes(selectedTech));

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          Explore my recent work showcasing full-stack development expertise
        </p>

        <div className="filter-buttons">
          <button
            className={`filter-btn ${selectedTech === 'All' ? 'active' : ''}`}
            onClick={() => setSelectedTech('All')}
          >
            All
          </button>
          {allTechs.map((tech) => (
            <button
              key={tech}
              className={`filter-btn ${selectedTech === tech ? 'active' : ''}`}
              onClick={() => setSelectedTech(tech)}
            >
              {tech}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div key={index} className={`project-card ${project.featured ? 'featured' : ''}`}>
              {project.featured && <span className="featured-badge">Featured</span>}
              <div className="project-content">
                <h3 className="project-name">{project.name}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="project-footer">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  View on GitHub →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
