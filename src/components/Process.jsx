import React from 'react';
import { Search, Compass, Cpu, Rocket } from 'lucide-react';
import '../styles/Process.css';

const Process = () => {
  const steps = [
    {
      step: '01',
      title: 'DISCOVER',
      subtitle: 'Research & Goal Analysis',
      desc: 'Deep-diving into user needs, business objectives, competitors, and defining clear target project milestones.',
      Icon: Search,
      colorClass: 'lavender'
    },
    {
      step: '02',
      title: 'PLAN & WIREFRAME',
      subtitle: 'Architecture & Strategy',
      desc: 'Mapping out user journeys, low-fidelity wireframes, information architecture, and core system design.',
      Icon: Compass,
      colorClass: 'skyblue'
    },
    {
      step: '03',
      title: 'DESIGN & CODE',
      subtitle: 'UI Concepts & Engineering',
      desc: 'Creating high-fidelity Figma components, interactive prototypes, and clean scalable React code.',
      Icon: Cpu,
      colorClass: 'mint'
    },
    {
      step: '04',
      title: 'DELIVER & LAUNCH',
      subtitle: 'Testing & Hand-off',
      desc: 'Comprehensive responsiveness testing, SEO polish, performance optimization, and seamless deployment.',
      Icon: Rocket,
      colorClass: 'peach'
    }
  ];

  return (
    <section id="process" className="section-padding process-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">WORKFLOW METHODOLOGY</span>
          <h2 className="section-title">My Structured Design & Dev Process</h2>
          <p className="section-desc">
            A proven 4-step framework engineered to take projects smoothly from initial concept to launch.
          </p>
        </div>

        <div className="process-grid">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="glass-card process-card"
            >
              <div className="process-card-header">
                <div className="process-card-icon-wrap">
                  <item.Icon size={22} className={`process-step-icon process-step-icon--${item.colorClass}`} />
                </div>

                <span className={`process-step-number process-step-number--${item.colorClass}`}>
                  {item.step}
                </span>
              </div>

              <div>
                <h3 className="process-card-title">
                  {item.title}
                </h3>
                <div className={`process-card-subtitle process-card-subtitle--${item.colorClass}`}>
                  {item.subtitle}
                </div>
                <p className="process-card-desc">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
