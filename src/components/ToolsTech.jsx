import React from 'react';
import '../styles/ToolsTech.css';

const ToolsTech = () => {
  const tools = [
    {
      name: 'Figma',
      category: 'Design & Prototyping',
      icon: '🎨',
      slug: 'figma',
      level: 'Advanced'
    },
    {
      name: 'Photoshop',
      category: 'Photo & Graphic Editing',
      icon: '🖼️',
      slug: 'photoshop',
      level: 'Expert'
    },
    {
      name: 'Illustrator',
      category: 'Vector Branding & Logos',
      icon: '✒️',
      slug: 'illustrator',
      level: 'Expert'
    },
    {
      name: 'Adobe XD',
      category: 'UI/UX Wireframing',
      icon: '📐',
      slug: 'xd',
      level: 'Intermediate'
    },
    {
      name: 'Canva',
      category: 'Marketing Visuals',
      icon: '✨',
      slug: 'canva',
      level: 'Expert'
    },
    {
      name: 'React.js',
      category: 'Frontend Engineering',
      icon: '⚛️',
      slug: 'react',
      level: 'Advanced'
    },
    {
      name: 'Node.js',
      category: 'Backend & APIs',
      icon: '🚀',
      slug: 'nodejs',
      level: 'Intermediate'
    },
    {
      name: 'MongoDB',
      category: 'NoSQL Database',
      icon: '🍃',
      slug: 'mongodb',
      level: 'Intermediate'
    },
    {
      name: 'Tailwind CSS',
      category: 'Utility Styling',
      icon: '🌊',
      slug: 'tailwind',
      level: 'Expert'
    },
    {
      name: 'HTML5 & CSS3',
      category: 'Semantic Web',
      icon: '💻',
      slug: 'htmlcss',
      level: 'Expert'
    }
  ];

  return (
    <section id="tools" className="section-padding">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">TOOLS & TECHNOLOGIES</span>
          <h2 className="section-title">My Creative & Technical Toolkit</h2>
          <p className="section-desc">
            The software and modern technologies I leverage daily to turn ideas into polished digital realities.
          </p>
        </div>

        <div className="tools-tech-grid">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="glass-card tools-tech-card"
            >
              <div className={`tools-tech-icon tools-tech-icon--${tool.slug}`}>
                {tool.icon}
              </div>

              <div className="tools-tech-details">
                <h3 className="tools-tech-name">
                  {tool.name}
                </h3>
                <div className="tools-tech-category">
                  {tool.category}
                </div>
                <span className={`tools-tech-level tools-tech-level--${tool.slug}`}>
                  {tool.level}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsTech;
