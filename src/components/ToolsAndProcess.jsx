import React from 'react';
import '../styles/ToolsAndProcess.css';

const ToolsAndProcess = () => {
  const tools = [
    { name: 'Figma', icon: '🎨' },
    { name: 'Photoshop', icon: '🖼️' },
    { name: 'Illustrator', icon: '✒️' },
    { name: 'Adobe XD', icon: '📐' },
    { name: 'Canva', icon: '✨' },
    { name: 'React', icon: '⚛️' },
    { name: 'Node.js', icon: '🚀' },
    { name: 'MongoDB', icon: '🍃' }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'DISCOVER',
      desc: 'Understanding user goals and the core problem.'
    },
    {
      step: '02',
      title: 'PLAN',
      desc: 'Outlining the best solution, wireframes & strategy.'
    },
    {
      step: '03',
      title: 'DESIGN',
      desc: 'Designing prototypes & writing clean React code.'
    },
    {
      step: '04',
      title: 'DELIVER',
      desc: 'Releasing the final product with extreme care.'
    }
  ];

  return (
    <section id="tools" className="section-padding">
      <div className="container">
        <div className="tools-process-grid">
          <div>
            <div className="tools-section-header">
              <span className="tools-subtitle-badge">
                TOOLS & TECHNOLOGIES
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
