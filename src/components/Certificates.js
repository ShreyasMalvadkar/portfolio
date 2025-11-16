import React from 'react';
import './Certificates.css';

const Certificates = () => {
  const certificates = [
    {
      title: 'PG-DAC (Post Graduate Diploma in Advanced Computing)',
      issuer: 'CDAC, Pune',
      date: 'March 2023',
      description: 'Comprehensive program covering advanced computing concepts, software development, and modern technologies.',
      category: 'Education'
    },
    {
      title: 'B.E. Mechanical Engineering',
      issuer: 'Solapur University',
      date: '2019',
      description: 'Bachelor\'s degree in Mechanical Engineering with focus on engineering principles and problem-solving.',
      category: 'Education'
    }
    // Add more certificates here as needed
    // Example:
    // {
    //   title: 'Microsoft Certified: Azure Developer Associate',
    //   issuer: 'Microsoft',
    //   date: '2024',
    //   description: 'Certification demonstrating expertise in developing cloud applications on Microsoft Azure.',
    //   category: 'Professional'
    // }
  ];

  return (
    <section id="certificates" className="certificates">
      <div className="container">
        <h2 className="section-title">
          <span className="title-prefix">&gt;</span> Certificates & Qualifications
        </h2>
        <div className="certificates-grid">
          {certificates.map((cert, index) => (
            <div key={index} className="certificate-card">
              <div className="certificate-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
                  <polyline points="14 2 14 8 20 8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                  <polyline points="10 9 9 9 8 9"/>
                </svg>
              </div>
              <div className="certificate-content">
                <div className="certificate-header">
                  <h3 className="certificate-title">{cert.title}</h3>
                  <span className="certificate-category">{cert.category}</span>
                </div>
                <p className="certificate-issuer">{cert.issuer}</p>
                <p className="certificate-date">{cert.date}</p>
                {cert.description && (
                  <p className="certificate-description">{cert.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
        {certificates.length === 0 && (
          <div className="empty-state">
            <p>Certificates will be displayed here</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certificates;

