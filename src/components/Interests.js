import React from 'react';
import './Interests.css';

const Interests = () => {
  const interests = [
    {
      name: 'Playing Cricket',
      icon: '🏏',
      description: 'Passionate about cricket, enjoying both playing and following the sport',
      color: '#10b981'
    },
    {
      name: 'F1 Racing',
      icon: '🏎️',
      description: 'Fascinated by Formula 1 racing, following the latest races and teams',
      color: '#ef4444'
    }
  ];

  return (
    <section id="interests" className="interests">
      <div className="container">
        <h2 className="section-title">
          <span className="title-prefix">&gt;</span> Interests
        </h2>
        <div className="interests-grid">
          {interests.map((interest, index) => (
            <div key={index} className="interest-card" style={{ '--accent-color': interest.color }}>
              <div className="interest-icon">{interest.icon}</div>
              <h3 className="interest-name">{interest.name}</h3>
              <p className="interest-description">{interest.description}</p>
              <div className="interest-glow"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Interests;

