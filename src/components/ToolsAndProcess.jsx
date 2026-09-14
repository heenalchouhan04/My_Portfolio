import React from 'react';
import '../styles/ToolsAndProcess.css';

const ToolsAndProcess = () => {
  const tools = [
    { name: 'HTML5', icon: '🌐' },
    { name: 'CSS3', icon: '🎨' },
    { name: 'JavaScript', icon: '⚡' },
    { name: 'React', icon: '⚛️' },
    { name: 'Node.js', icon: '🚀' },
    { name: 'Express.js', icon: '⚙️' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'Power BI', icon: '📊' },
    { name: 'Git', icon: '🔀' },
    { name: 'GitHub', icon: '🐙' },
    { name: 'REST APIs', icon: '🔌' },
    { name: 'Figma', icon: '📐' }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'DISCOVER',
      desc: 'Understand the problem and user needs'
    },
    {
      step: '02',
      title: 'PLAN',
      desc: 'Outline solution, wireframes, and tech stack'
    },
    {
      step: '03',
      title: 'DEVELOP',
      desc: 'Build frontend + backend, connect APIs & database'
    },
    {
      step: '04',
      title: 'VISUALIZE',
      desc: 'Create dashboards in Power BI for insights'
    },
    {
      step: '05',
      title: 'DELIVER',
      desc: 'Test, deploy, and refine'
    }
  ];

  return (
    <section id="tools" className="section-padding">
      <div className="container">
        <div className="tools-process-grid">
          {/* Tools & Technologies (Flat Grid) */}
          <div>
            <div className="tools-section-header">
              <span className="tools-subtitle-badge">
                TOOLS &amp; TECHNOLOGIES
              </span>
            </div>

            <div className="tools-grid">
              {tools.map((tool, idx) => (
                <div key={idx} className="glass-card tool-card">
                  <span className="tool-icon">{tool.icon}</span>
                  <span className="tool-name">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* My Process */}
          <div>
            <div className="tools-section-header">
              <span className="tools-subtitle-badge">
                MY PROCESS
              </span>
            </div>

            <div className="process-list">
              {processSteps.map((item, idx) => (
                <div key={idx} className="glass-card process-card">
                  <div className="process-step-badge">
                    {item.step}
                  </div>

                  <div>
                    <h4 className="process-title">{item.title}</h4>
                    <p className="process-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsAndProcess;
