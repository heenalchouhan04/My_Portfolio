import React from 'react';
import { X, Download, FileText, Award, GraduationCap } from 'lucide-react';
import confetti from 'canvas-confetti';
import '../styles/Modal.css';
import '../styles/CvModal.css';

const CvModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleDownload = () => {
    try {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.5 }
      });
    } catch (e) {}

    const element = document.createElement("a");
    const file = new Blob([
      `HEENAL SINGH CHOUHAN - CURRICULUM VITAE
Location: Udaipur, RJ, India
Phone: +91 8003527592
Email: heenalchauhan06@gmail.com

SUMMARY:
Beginner Full-Stack Developer passionate about building modern web applications with React, Node.js, Express, and MongoDB.

SKILLS:
- Web Development: React.js, Node.js, Express.js, MongoDB, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS
- Tools & Version Control: Git, GitHub, VS Code, Postman
`
    ], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = "Heenal_Singh_Chouhan_CV.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
    >
      <div
        className="modal-card modal-card--md"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="modal-close-btn"
        >
          <X size={20} />
        </button>

        <div className="cv-modal-header">
          <div className="cv-modal-icon">
            <FileText size={28} />
          </div>
          <div>
            <h2 className="cv-modal-title">Resume</h2>
            <div className="cv-modal-subtitle">Heenal Singh Chouhan — Full-Stack Developer</div>
          </div>
        </div>

        <div className="cv-modal-content">
          <div className="cv-modal-card">
            <div className="cv-modal-card-label">
              PROFILE SUMMARY
            </div>
            <p className="cv-modal-card-text">
              Motivated beginner full-stack developer with a solid foundation in React, Node.js, and web technologies. Passionate about building clean, functional, and user-friendly web applications.
            </p>
          </div>

          <div className="cv-modal-grid">
            <div className="cv-modal-card">
              <div className="cv-modal-card-heading cv-modal-card-heading--skyblue">
                <GraduationCap size={18} />
                Education
              </div>
              <div className="cv-modal-card-value">Bachelor of Technology / Computer Science</div>
              <div className="cv-modal-card-detail">Rajasthan, India</div>
            </div>

            <div className="cv-modal-card">
              <div className="cv-modal-card-heading cv-modal-card-heading--mint">
                <Award size={18} />
                Focus
              </div>
              <div className="cv-modal-card-value">Full-Stack Web Engineering</div>
              <div className="cv-modal-card-detail">React, Node.js & Databases</div>
            </div>
          </div>
        </div>

        <div className="modal-actions">
          <button
            onClick={handleDownload}
            className="btn btn-primary cv-modal-download-btn"
          >
            <Download size={18} />
            <span>Download Official Resume (.pdf / .txt)</span>
          </button>

          <button
            onClick={onClose}
            className="btn btn-secondary cv-modal-close-btn"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default CvModal;
