import React, { useState, useEffect } from 'react';
import { ExternalLink, Eye, CheckCircle2, Plus, Trash2 } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './SocialIcons';
import AddProjectModal from './AddProjectModal';
import '../styles/Projects.css';
import { handleImageError } from '../utils/handleImageError';

const initialProjects = [
  {
    id: 1,
    title: 'Netflix Content Insights Dashboard',
    category: 'Power BI',
    image: '/images/netflix_dashboard_2.png',
    gallery: [
      { id: 'trends', title: 'Analytics & Trends View', url: '/images/netflix_dashboard_2.png' },
      { id: 'overview', title: 'Overview & KPI Metrics', url: '/images/netflix_dashboard_1.png' }
    ],
    tags: ['Power BI', 'Excel/CSV', 'Data Analytics'],
    summary: 'Interactive Power BI dashboard analyzing Netflix catalog, ratings distribution, and global viewership trends.',
    highlights: [
      'Movies vs. TV Shows split & ratings',
      'Global viewership map & growth trend'
    ],
    linkedinUrl: 'https://www.linkedin.com/posts/heenal-singh-chouhan-7a975133a_powerbi-dataanalytics-datavisualization-activity-7435544281144258561-yQmG?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFUvFDEBHCi50IuPrMRjbW8joTw_kgRoT-I',
    githubUrl: 'https://github.com/heenalchouhan04',
    demoUrl: 'https://www.linkedin.com/posts/heenal-singh-chouhan-7a975133a_powerbi-dataanalytics-datavisualization-activity-7435544281144258561-yQmG?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFUvFDEBHCi50IuPrMRjbW8joTw_kgRoT-I',
    featured: true,
    isDefault: true
  }
];

const Projects = ({ onSelectProject }) => {
  const [projects, setProjects] = useState(() => {
    const saved = localStorage.getItem('heenal_portfolio_projects');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return initialProjects;
      }
    }
    return initialProjects;
  });

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const [activeImageMap, setActiveImageMap] = useState({
    1: '/images/netflix_dashboard_2.png'
  });

  useEffect(() => {
    localStorage.setItem('heenal_portfolio_projects', JSON.stringify(projects));
  }, [projects]);

  const handleSelectImage = (projectId, imgUrl) => {
    setActiveImageMap(prev => ({ ...prev, [projectId]: imgUrl }));
  };

  const handleAddProject = (newProj) => {
    setProjects(prev => [newProj, ...prev]);
  };

  const handleDeleteProject = (id, e) => {
    e.stopPropagation();
    setProjects(prev => prev.filter(p => p.id !== id));
  };

  return (
    <section id="projects" className="section-padding">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">PROJECTS SHOWCASE</span>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
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

                {!project.isDefault && (
                  <button
                    onClick={(e) => handleDeleteProject(project.id, e)}
                    className="project-delete-btn"
                    title="Delete project"
                  >
                    <Trash2 size={15} />
                  </button>
                )}

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
                  {project.highlights && project.highlights.length > 0 && (
                    <div className="project-highlights-box">
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

          {/* ── Add New Project Card on Right Side ──────────────────────── */}
          <div
            className="glass-card add-project-card"
            onClick={() => setIsAddModalOpen(true)}
          >
            <div className="add-project-card-content">
              <div className="add-project-icon-circle">
                <Plus size={32} />
              </div>
              <h3 className="add-project-card-title">Add New Project</h3>
              <p className="add-project-card-desc">
                Click here to add your latest Power BI dashboard or Web App project.
              </p>
              <button className="btn btn-primary add-project-btn-trigger">
                <Plus size={16} /> Add Project
              </button>
            </div>
          </div>
        </div>

        <AddProjectModal
          isOpen={isAddModalOpen}
          onClose={() => setIsAddModalOpen(false)}
          onAddProject={handleAddProject}
        />
      </div>
    </section>
  );
};

export default Projects;
