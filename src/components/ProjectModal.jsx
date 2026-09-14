import React from 'react';
import { X, ExternalLink } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import '../styles/Modal.css';
import '../styles/ProjectModal.css';
import { handleImageError } from '../utils/handleImageError';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

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
            src={project.image}
            alt={project.title}
            onError={handleImageError}
          />
        </div>

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

        <div className="project-modal-tech-section">
          <div className="project-modal-tech-label">
            TECHNOLOGIES & TOOLS USED:
          </div>
          <div className="project-modal-tech-tags">
            {project.tags.map((t, idx) => (
              <span key={idx} className="project-modal-tech-tag">
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="modal-actions">
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary project-modal-demo-btn"
          >
            <span>Live Interactive Demo</span>
            <ExternalLink size={18} />
          </a>

          <a
            href={project.githubUrl}
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
