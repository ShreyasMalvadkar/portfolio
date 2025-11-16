import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      company: 'sfHawk Solutions',
      location: 'Pune, Maharashtra',
      position: 'Software Engineer',
      period: 'March 2024 – Current',
      achievements: [
        'Developed core modules of the manufacturing traceability system, enabling 100% automation via MQTT, Windows Services, serial, and Bluetooth integrations.',
        'Built SPC analytics workflows with 100% accurate defect detection, improving quality insights and reducing operator dependency.',
        'Enhanced the PPC module by integrating live production & OEE metrics, improving scheduling accuracy and visibility.',
        'Optimized CSV ingestion pipelines to achieve millisecond-level processing speeds for high-volume measurement data.',
        'Reduced operator workload by automating data flows across measurement stations and production points.',
        'Collaborated with QA teams, PMs, domain experts, and machine operators for requirement validation and workflow alignment.',
        'Upgraded legacy modules from .NET Framework to .NET Core, increasing performance and maintainability.',
        'DB Performance improvement using Indexing.',
        'Recognized for integrating Bluetooth gauge into the sfHawk product ecosystem.'
      ]
    },
    {
      company: 'The Tech Clan (TTC LLP)',
      location: 'Pune, Maharashtra',
      position: 'Junior Software Engineer',
      period: 'September 2023 – March 2024',
      achievements: [
        'Designed secure REST APIs and responsive React components for a professional networking platform.',
        'Implemented authentication and role-based access using JWT and MongoDB.'
      ]
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="experience-marker"></div>
              <div className="experience-content">
                <div className="experience-header">
                  <div>
                    <h3 className="company-name">{exp.company}</h3>
                    <p className="company-location">{exp.location}</p>
                  </div>
                  <div className="experience-meta">
                    <span className="position">{exp.position}</span>
                    <span className="period">{exp.period}</span>
                  </div>
                </div>
                <ul className="achievements-list">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="achievement-item">
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

