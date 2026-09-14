import React, { useState } from 'react';
import { Code2, Server, Layers, BarChart3, Users, ArrowRight, X } from 'lucide-react';
import '../styles/Expertise.css';
import '../styles/Modal.css';
import { handleImageError } from '../utils/handleImageError';

const Expertise = () => {
  const [activeModal, setActiveModal] = useState(null);

  const services = [
    {
      id: '01',
      title: 'Frontend Development',
      tagline: 'Building responsive, interactive user interfaces with HTML, CSS, JavaScript & React.',
      description: 'Crafting clean, accessible, and high-performance frontend components with modern frameworks like React and Tailwind CSS.',
      icon: Code2,
      image: '/images/service1.jpg',
      imageIdea: 'Developer working on a laptop with a code editor open displaying HTML/React code',
      features: ['HTML5 & CSS3 Layouts', 'React.js Component Architecture', 'Tailwind CSS Styling', 'Responsive Mobile Design']
    },
    {
      id: '02',
      title: 'Backend Development',
      tagline: 'Connecting frontend interfaces to server logic, APIs & MongoDB databases.',
      description: 'Designing RESTful APIs and server-side application logic using Node.js, Express, and MongoDB for seamless data flow.',
      icon: Server,
      image: '/images/service2.jpg',
      imageIdea: 'Server room or developer writing backend code in Node.js/Express on a dark IDE screen',
      features: ['Node.js & Express.js APIs', 'MongoDB Database Schema Design', 'CRUD Operations & Routing', 'Authentication Basics']
    },
    {
      id: '03',
      title: 'Full‑Stack Projects',
      tagline: 'Combining client and server development to turn ideas into working web apps.',
      description: 'Building end-to-end web applications that bridge intuitive frontend UIs with robust backend systems.',
      icon: Layers,
      image: '/images/service3.jpg',
      imageIdea: 'Developer team collaborating at a desk with laptops showing frontend code and database queries',
      features: ['MERN Stack Foundations', 'API Integration & State Management', 'Deployment & Git Version Control', 'End-to-End Application Flow']
    },
    {
      id: '04',
      title: 'Data Visualization (Power BI)',
      tagline: 'Transforming raw data into clear, interactive dashboards & actionable reports.',
      description: 'Designing intuitive Power BI reports and dashboards that analyze metrics and present data insights clearly.',
      icon: BarChart3,
      image: '/images/service4.jpg',
      imageIdea: 'Person presenting a Power BI dashboard on a monitor with charts, graphs, and KPIs',
      features: ['Power BI Interactive Dashboards', 'Data Modeling & Analysis', 'Visual KPI Reports', 'Transforming Raw Data into Insights']
    },
    {
      id: '05',
      title: 'Collaboration & Learning',
      tagline: 'Continuously growing skills, exploring new tools & working with development teams.',
      description: 'Enthusiastic about teamwork, code reviews, open-source learning, and adapting to modern software engineering practices.',
      icon: Users,
      image: '/images/service5.jpg',
      imageIdea: 'Group of developers in a meeting room brainstorming with sticky notes, laptops, and a whiteboard',
      features: ['Git & GitHub Workflow', 'Team Collaboration & Communication', 'Problem Solving & Debugging', 'Continuous Technical Learning']
    }
  ];

  return (
    <section id="expertise" className="section-padding services-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">SERVICES &amp; CAPABILITIES</span>
          <h2 className="section-title">What I Offer</h2>
          <p className="section-desc">
            Combining full-stack web development with data analytics to build modern solutions.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="services-card"
              onClick={() => setActiveModal(service)}
            >
              <div className="services-card-top">
                <span className="services-card-number">{service.id}</span>
                <div className="services-card-icon">
                  <service.icon size={22} />
                </div>
              </div>

              <div className="services-card-image-box">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="services-card-img"
                  onError={handleImageError}
                />
              </div>

              <div className="services-card-body">
                <h3 className="services-card-title">{service.title}</h3>
                <p className="services-card-tagline">{service.tagline}</p>
              </div>

              <div className="services-card-footer">
                <span className="services-card-action">
                  <span>Learn More</span>
                  <ArrowRight size={16} />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeModal && (
        <div
          className="modal-overlay"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="modal-card modal-card--sm"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveModal(null)}
              className="modal-close-btn"
            >
              <X size={18} />
            </button>

            <div className="services-modal-header">
              <span className="services-card-number">{activeModal.id}</span>
              <h3 className="modal-title">{activeModal.title}</h3>
            </div>

            <div className="services-modal-image-box">
              <img 
                src={activeModal.image} 
                alt={activeModal.title} 
                className="services-modal-img"
                onError={handleImageError}
              />
            </div>

            <div className="modal-subtitle">
              {activeModal.tagline}
            </div>

            <p className="modal-description">
              {activeModal.description}
            </p>

            <div className="modal-section-label">
              Key Skill Highlights:
            </div>
            <ul className="modal-feature-list">
              {activeModal.features.map((feat, i) => (
                <li key={i} className="modal-feature-item">
                  <span className="modal-feature-dot" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={() => setActiveModal(null)}
              className="btn btn-primary modal-btn-full"
            >
              Close Details
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Expertise;
