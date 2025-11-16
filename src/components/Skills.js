import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['C#', 'JavaScript', 'TypeScript', 'SQL']
    },
    {
      title: 'Frameworks & Libraries',
      skills: ['.NET Core 5 (Web API)', '.NET Framework', 'Entity Framework', 'Angular', 'React.js', 'Express.js']
    },
    {
      title: 'APIs & Integrations',
      skills: ['REST APIs', 'MQTT (Mosquitto)', 'Windows Services', 'Serial Communication', 'Swagger/OpenAPI']
    },
    {
      title: 'Databases',
      skills: ['MongoDB', 'MySQL', 'Query Optimization', 'Indexing', 'Redis (Caching)', 'Database Upgrade Mongo Shell Scripts']
    },
    {
      title: 'DevOps & Cloud',
      skills: ['Git', 'GitHub', 'IIS Deployments', 'AWS EC2', 'Production Deployments & Release Coordination']
    },
    {
      title: 'AI & Developer Tools',
      skills: ['Cursor AI', 'GitHub Copilot', 'OpenAI API', 'Claude']
    },
    {
      title: 'Security',
      skills: ['JWT Authentication', 'Role-Based Authorization']
    },
    {
      title: 'Practices',
      skills: ['Agile/Scrum', 'Code Reviews', 'Requirement Analysis', 'Performance Optimization']
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skill-tags">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">
                    <span>{skill}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

