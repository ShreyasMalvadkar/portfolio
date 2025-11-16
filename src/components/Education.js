import React from 'react';
import './Education.css';

const Education = () => {
  const education = [
    {
      degree: 'PG-DAC (Post Graduate Diploma in Advanced Computing)',
      institution: 'CDAC, Pune',
      year: 'Mar 2023'
    },
    {
      degree: 'B.E. Mechanical Engineering',
      institution: 'Solapur University',
      year: '2019'
    }
  ];

  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-grid">
          {education.map((edu, index) => (
            <div key={index} className="education-card">
              <div className="education-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                </svg>
              </div>
              <h3 className="degree">{edu.degree}</h3>
              <p className="institution">{edu.institution}</p>
              <p className="year">{edu.year}</p>
            </div>
          ))}
        </div>
        <div className="career-goal">
          <p>
            <strong>Seeking opportunities</strong> that offer broader technical exposure, challenging engineering problems, 
            and strong career growth as a software developer.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;

