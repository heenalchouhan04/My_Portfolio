import React, { useState } from 'react';
import { ExternalLink, Eye, Sparkles } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import '../styles/Projects.css';
import { handleImageError } from '../utils/handleImageError';

const Projects = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projectsData = [
    {
      id: 1,
      title: 'NexStore E-Commerce Platform',
      category: 'Web App',
      image: '/images/project1.png',
      tags: ['React.js', 'Node.js', 'MongoDB', 'Tailwind'],
      summary: 'Full-stack e-commerce web application featuring live product filtering, cart checkout, payment gateway integration, and admin analytics dashboard.',
      demoUrl: 'https://example.com/demo1',
      githubUrl: 'https://github.com/heenalsingh/nexstore-ecommerce',
      featured: true
    },
    {
      id: 2,
      title: 'FinVista Financial Analytics Hub',
      category: 'UI/UX',
      image: '/images/project2.png',
      tags: ['Figma', 'UI/UX Design', 'React', 'Recharts'],
      summary: 'Sleek dark & light theme financial dashboard designed for high-frequency trading insights, real-time telemetry charts, and portfolio tracking.',
      demoUrl: 'https://example.com/demo2',
      githubUrl: 'https://github.com/heenalsingh/finvista-dashboard',
      featured: true
    },
    {
      id: 3,
      title: 'PulseFit Health & Fitness Mobile App',
      category: 'Mobile',
      image: '/images/project3.png',
      tags: ['Mobile UI', 'Figma', 'React Native', 'Prototyping'],
      summary: 'Intuitive iOS & Android workout tracker app interface with workout logging, calorie charts, gamified achievements, and social sharing.',
      demoUrl: 'https://example.com/demo3',
      githubUrl: 'https://github.com/heenalsingh/pulsefit-app',
      featured: true
    },
    {
      id: 4,
      title: 'Aura Studio Brand Identity',
      category: 'Branding',
      image: '/images/project1.png',
      tags: ['Adobe Illustrator', 'Branding', 'Photoshop', 'Typography'],
      summary: 'Complete brand guidelines, typography system, business cards, stationery, and packaging design for an upscale architectural design house.',
      demoUrl: 'https://example.com/demo4',
      githubUrl: 'https://github.com/heenalsingh/aura-branding',
      featured: false
    },
    {
      id: 5,
      title: 'NeuralWriter AI Copywriting SaaS',
      category: 'Web App',
      image: '/images/project2.png',
      tags: ['React', 'Node.js', 'OpenAI API', 'CSS Grid'],
      summary: 'AI-driven content generation web app allowing users to write blogs, marketing emails, and social media posts with one click.',
      demoUrl: 'https://example.com/demo5',
      githubUrl: 'https://github.com/heenalsingh/neuralwriter-saas',
      featured: false
    },
    {
      id: 6,
      title: 'Lumina Smart Home IoT Portal',
      category: 'UI/UX',
      image: '/images/project3.png',
      tags: ['Figma', 'System Design', 'Mobile UI', 'Prototyping'],
      summary: 'Smart home device management portal supporting room scene presets, climate automation timers, and energy consumption insights.',
      demoUrl: 'https://example.com/demo6',
      githubUrl: 'https://github.com/heenalsingh/lumina-smarthome',
      featured: false
    }
  ];

  const categories = ['All', 'Web App', 'UI/UX', 'Mobile', 'Branding'];

  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="section-padding">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">PROJECTS SHOWCASE</span>
          <h2 className="section-title">Featured Works & Case Studies</h2>
          <p className="section-desc">
            Explore a curated selection of my design & web development projects crafted for clients and modern products.
          </p>
        </div>

        <div className="projects-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`projects-filter-btn ${activeFilter === cat ? 'active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card project-card"
            >
              <div className="project-image-wrap">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-img"
                  onError={handleImageError}
                />

                <span className="project-category-badge">
                  {project.category}
                </span>

                <div className="project-overlay">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="btn btn-primary project-overlay-btn"
                  >
                    <Eye size={16} /> Quick View
                  </button>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-secondary project-overlay-btn"
                  >
                    <GithubIcon size={16} /> Code
                  </a>
                </div>
              </div>

              <div className="project-card-body">
                <div>
                  <h3 className="project-card-title">
                    {project.title}
                  </h3>
                  <p className="project-card-summary">
                    {project.summary}
                  </p>

                  <div className="project-tags">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="project-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="project-card-footer">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="project-case-study-btn"
                  >
                    <span>View Case Study</span>
                    <Sparkles size={14} />
                  </button>

                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="project-demo-link"
                  >
                    <span>Live Demo</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
