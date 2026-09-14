import React from 'react';
import { Briefcase, Star, Smile, Award } from 'lucide-react';
import '../styles/Achievements.css';

const Achievements = () => {
  const stats = [
    {
      id: 1,
      number: '6+',
      label: 'YEARS EXPERIENCE',
      Icon: Briefcase
    },
    {
      id: 2,
      number: '40+',
      label: 'PROJECTS COMPLETED',
      Icon: Star
    },
    {
      id: 3,
      number: '18+',
      label: 'HAPPY CLIENTS',
      Icon: Smile
    },
    {
      id: 4,
      number: '12',
      label: 'AWARDS RECEIVED',
      Icon: Award
    }
  ];

  return (
    <section className="achievements-section">
      <div className="container">
        <div className="stats-card-container">
          {stats.map((stat) => (
            <div key={stat.id} className="stat-card-item">
              <div className="stat-icon-wrapper">
                <stat.Icon size={20} />
              </div>

              <div className="stat-number">
                {stat.number}
              </div>

              <div className="stat-label">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
