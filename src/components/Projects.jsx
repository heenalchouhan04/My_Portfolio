import React, { useState } from 'react';
import { ExternalLink, Eye, CheckCircle2 } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './SocialIcons';
import '../styles/Projects.css';
import { handleImageError } from '../utils/handleImageError';

const Projects = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projectsData = [
    {
      id: 1,
      title: 'Netflix Content Insights Dashboard',
      category: 'Power BI',
      image: '/images/netflix_dashboard_2.png',
      gallery: [
        { id: 'trends', title: 'Analytics & Trends View', url: '/images/netflix_dashboard_2.png' },
        { id: 'overview', title: 'Overview & KPI Metrics', url: '/images/netflix_dashboard_1.png' }
      ],
      tags: ['Power BI', 'Excel/CSV', 'Data Analytics', 'Dashboards'],
      summary: 'Built an interactive dashboard analyzing Netflix’s catalog of movies and TV shows. It visualizes ratings distribution, content growth over time, and global viewership trends.',
      highlights: [
        'Movies vs. TV Shows split',
        'Ratings breakdown (TV‑MA, TV‑14, PG, etc.)',
        'Global viewership map',
        'Content growth trend since 1925'
      ],
      linkedinUrl: 'https://linkedin.com/in/heenal',
      githubUrl: 'https://github.com/heenalchouhan04',
      demoUrl: 'https://linkedin.com/in/heenal',
      featured: true
    }
  ];

  const [activeImageMap, setActiveImageMap] = useState({
    1: '/images/netflix_dashboard_2.png'
  });

  const handleSelectImage = (projectId, imgUrl) => {
    setActiveImageMap(prev => ({ ...prev, [projectId]: imgUrl }));
  };

  const categories = ['All', 'Power BI'];

  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="section-padding">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">PROJECTS SHOWCASE</span>
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
                  src={activeImageMap[project.id] || project.image}
                  alt={project.title}
                  className="project-img"
                  onError={handleImageError}
                />

                <span className="project-category-badge">
                  {project.category}
                </span>

                {project.gallery && project.gallery.length > 1 && (
                  <div className="project-card-gallery-tabs">
                    {project.gallery.map((g) => (
                      <button
                        key={g.id}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSelectImage(project.id, g.url);
                        }}
                        className={`project-card-gallery-tab ${(activeImageMap[project.id] || project.image) === g.url ? 'active' : ''}`}
                      >
                        {g.title}
                      </button>
                    ))}
                  </div>
                )}

                <div className="project-overlay">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="btn btn-primary project-overlay-btn"
                  >
                    <Eye size={16} /> Quick View
                  </button>

                  <a
                    href={project.linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-secondary project-overlay-btn"
                  >
                    <LinkedinIcon size={16} /> LinkedIn
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

                  {/* Highlights List */}
                  {project.highlights && (
                    <div className="project-highlights-box">
                      <div className="project-highlights-title">Key Highlights:</div>
                      <ul className="project-highlights-list">
                        {project.highlights.map((item, idx) => (
                          <li key={idx}>
                            <CheckCircle2 size={14} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="project-tags">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="project-tag">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="project-card-footer">
                  <a
                    href={project.linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link-btn project-linkedin-link"
                  >
                    <LinkedinIcon size={16} />
                    <span>View on LinkedIn</span>
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="project-demo-link"
                  >
                    <span>GitHub Repo</span>
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
