import React from 'react';
import './Extras.css';

const Extras = () => {
  const extras = [
    {
      title: 'Open Source Contributions',
      description: 'Contributing to open source projects and sharing knowledge with the developer community.',
      icon: '💻'
    },
    {
      title: 'Technical Blogging',
      description: 'Writing about software development, best practices, and technical insights.',
      icon: '✍️'
    },
    {
      title: 'Code Reviews',
      description: 'Participating in code reviews to maintain code quality and share knowledge.',
      icon: '🔍'
    },
    {
      title: 'Mentoring',
      description: 'Helping junior developers grow and learn through guidance and knowledge sharing.',
      icon: '🎓'
    }
  ];

  return (
    <section id="extras" className="extras">
      <div className="container">
        <h2 className="section-title">
          <span className="title-prefix">&gt;</span> Extras
        </h2>
        <p className="extras-subtitle">
          Beyond coding, here are some additional activities and interests that shape my professional journey.
        </p>
        <div className="extras-grid">
          {extras.map((extra, index) => (
            <div key={index} className="extra-card">
              <div className="extra-icon">{extra.icon}</div>
              <h3 className="extra-title">{extra.title}</h3>
              <p className="extra-description">{extra.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Extras;

