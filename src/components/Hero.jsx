
import React from 'react';
import { ArrowRight, MapPin } from 'lucide-react';
import '../styles/Hero.css';
import { handleImageError } from '../utils/handleImageError';

const Hero = ({ onOpenCvModal }) => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-bg-blob" />

      <div className="container hero-container">
        <div className="hero-grid">
          <div>
            <div className="hero-subtitle">
              <span className="subtitle-dot" />
              HELLO, I'M A CREATIVE
            </div>

            <h1 className="hero-title">
              <span className="hero-title-purple">Hi, I'm</span> <br />
              <span className="hero-title-main">Heenal Singh Chouhan</span>
            </h1>

            <p className="hero-tagline">
              Passionate about creating interactive web experiences and transforming raw data into clear, actionable stories.
            </p>

            <div className="hero-actions">
              <a
                href="#projects"
                className="btn btn-primary hero-btn-primary"
              >
                <span>View My Work</span>
                <ArrowRight size={18} />
              </a>

              <a
                href="#contact"
                className="btn btn-secondary hero-btn-secondary"
              >
                <span>Get in Touch</span>
              </a>
            </div>
          </div>

          <div className="hero-portrait-wrapper">
            <div className="hero-circle-backdrop" />

            <div className="hero-portrait-card">
              <img
                src="/images/resume-image.jpeg"
                alt="Heenal Singh Chouhan"
                className="hero-portrait-img"
                onError={handleImageError}
              />
            </div>

            <div className="hero-location-badge">
              <MapPin size={16} />
              <span>Based in <strong>UDAIPUR, RJ</strong></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
