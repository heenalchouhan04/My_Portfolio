import React from 'react';
import { 
  Monitor, 
  BarChart3, 
  Rocket, 
  Lightbulb, 
  CheckCircle2
} from 'lucide-react';
import '../styles/About.css';
import { handleImageError } from '../utils/handleImageError';

const About = () => {
  return (
    <section id="about" className="section-padding about-section">
      <div className="container">
        {/* ── Section Header ──────────────────────────────────────────────── */}
        <div className="section-header">
          <span className="section-subtitle">ABOUT ME</span>
        </div>

        {/* ── Top Grid: Profile Column (Left) + Role Cards (Right) ─────────── */}
        <div className="about-main-grid">
          {/* Left Column: Photo & Quick Intro */}
          <div className="about-profile-col">
            <div className="about-photo-card">
              <div className="about-photo-frame">
                <img
                  src="/images/resume-image.jpeg"
                  alt="Heenal Singh Chouhan"
                  className="about-photo-img"
                  onError={handleImageError}
                />
              </div>
            </div>

            <div className="about-intro-card">
              <div className="intro-badge">Quick Intro</div>
              <h3 className="intro-text">
                Beginner Full‑Stack Developer &amp; Power BI Enthusiast
              </h3>
            </div>
          </div>

          {/* Right Column: Full-Stack & Power BI Cards */}
          <div className="about-roles-col">
            {/* Full-Stack Developer Card */}
            <div className="about-card role-card role-card--web">
              <div className="role-card-header">
                <div>
                  <h3 className="role-title">Full‑Stack Developer</h3>
                  <div className="role-subtitle">Building Dynamic Web Apps</div>
                </div>
                <div className="role-icon-box role-icon-box--purple">
                  <Monitor size={22} />
                </div>
              </div>

              <ul className="role-bullets">
                <li>
                  <CheckCircle2 size={16} />
                  <span>I create responsive websites &amp; connect frontend to backend systems.</span>
                </li>
              </ul>

              <div className="role-pills">
                <span className="pill-badge pill-purple">Passion for Coding</span>
                <span className="pill-badge pill-purple">Learning &amp; Growing</span>
              </div>

              <div className="role-tags">
                <span className="tag">#HTML</span>
                <span className="tag">#CSS</span>
                <span className="tag">#JavaScript</span>
                <span className="tag">#React</span>
                <span className="tag">#Node.js</span>
                <span className="tag">#MongoDB</span>
                <span className="tag">#TailwindCSS</span>
              </div>
            </div>

            {/* Power BI Enthusiast Card */}
            <div className="about-card role-card role-card--data">
              <div className="role-card-header">
                <div>
                  <h3 className="role-title">Power BI Enthusiast</h3>
                  <div className="role-subtitle">Turning Data into Insights</div>
                </div>
                <div className="role-icon-box role-icon-box--mint">
                  <BarChart3 size={22} />
                </div>
              </div>

              <ul className="role-bullets">
                <li>
                  <CheckCircle2 size={16} />
                  <span>I design dashboards &amp; analyze data for clear, actionable reports.</span>
                </li>
              </ul>

              <div className="role-pills">
                <span className="pill-badge pill-mint">Data Visualization</span>
                <span className="pill-badge pill-mint">Analytics Skills</span>
              </div>

              <div className="role-tags">
                <span className="tag">#PowerBI</span>
                <span className="tag">#Dashboards</span>
                <span className="tag">#DataAnalytics</span>
                <span className="tag">#Reports</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Middle Grid: My Goals & What I Do ──────────────────────────── */}
        <div className="about-highlights-grid">
          {/* My Goals Card */}
          <div className="about-card highlight-card">
            <div className="highlight-header">
              <div className="highlight-icon-box icon-rocket">
                <Rocket size={20} />
              </div>
              <h3 className="highlight-title">My Goals</h3>
            </div>
            <ul className="highlight-list">
              <li>Building Real-World Projects</li>
              <li>Collaborating on Tech Teams</li>
            </ul>
          </div>

          {/* What I Do Card */}
          <div className="about-card highlight-card">
            <div className="highlight-header">
              <div className="highlight-icon-box icon-idea">
                <Lightbulb size={20} />
              </div>
              <h3 className="highlight-title">What I Do</h3>
            </div>
            <ul className="highlight-list">
              <li>Love for Continuous Learning</li>
              <li>Turning Ideas into Digital Solutions</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
