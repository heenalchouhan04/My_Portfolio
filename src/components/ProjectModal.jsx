import React, { useState, useEffect } from 'react';
import { X, ExternalLink, CheckCircle2 } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './SocialIcons';
import '../styles/Modal.css';
import '../styles/ProjectModal.css';
import { handleImageError } from '../utils/handleImageError';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  const [activeImage, setActiveImage] = useState(project.image);

  useEffect(() => {
    if (project) {
      setActiveImage(project.image);
    }
  }, [project]);

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
    >
      <div
        className="modal-card modal-card--lg"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="modal-close-btn"
        >
          <X size={20} />
        </button>

        <div className="project-modal-image">
          <img
            src={activeImage}
            alt={project.title}
            onError={handleImageError}
          />
        </div>

        {/* Gallery Thumbnails Switcher */}
        {project.gallery && project.gallery.length > 1 && (
          <div className="project-modal-gallery-thumbs">
            {project.gallery.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImage(item.url)}
                className={`project-modal-thumb-btn ${activeImage === item.url ? 'active' : ''}`}
              >
                <span>{item.title}</span>
              </button>
            ))}
          </div>
        )}

        <div className="project-modal-meta">
          <span className="project-modal-category">
            {project.category}
          </span>
        </div>

        <h2 className="project-modal-title">
          {project.title}
        </h2>

        <p className="project-modal-summary">
          {project.summary}
        </p>

        {project.highlights && (
          <div className="project-modal-highlights">
            <div className="project-modal-tech-label">
              KEY HIGHLIGHTS:
            </div>
            <ul className="project-modal-highlights-list">
              {project.highlights.map((h, i) => (
                <li key={i}>
                  <CheckCircle2 size={16} />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="project-modal-tech-section">
          <div className="project-modal-tech-label">
            TOOLS &amp; TECHNOLOGIES USED:
          </div>
          <div className="project-modal-tech-tags">
            {project.tags.map((t, idx) => (
              <span key={idx} className="project-modal-tech-tag">
                #{t}
              </span>
            ))}
          </div>
        </div>

        <div className="modal-actions">
          <a
            href={project.linkedinUrl || 'https://linkedin.com/in/heenal'}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary project-modal-demo-btn"
          >
            <LinkedinIcon size={18} />
            <span>View on LinkedIn</span>
          </a>

          <a
            href={project.githubUrl || 'https://github.com/heenalchouhan04'}
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary project-modal-github-btn"
          >
            <GithubIcon size={18} />
            <span>GitHub Repository</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
