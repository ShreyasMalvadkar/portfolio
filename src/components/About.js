import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">Career Summary</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="about-description">
              Full Stack Developer skilled in <strong>C#, .NET Core, EF Core, REST APIs, and microservices</strong>, 
              with frontend experience in <strong>Angular and React</strong>. Proficiency in data-driven workflows, 
              MQTT integration, database design, performance optimization, and building scalable industrial and web applications.
            </p>
            <p className="about-description">
              Developed important modules of the <strong><a href="https://sfhawk.com" target="_blank" rel="noopener noreferrer" className="company-link-inline">sfHawk</a> product</strong> including Traceability, SPC, Production 
              Planning Calendar and maintenance, while collaborating with QA, PMs, domain experts, and machine operators 
              to align features with real manufacturing needs. Contributed to resolving production issues across client 
              sites and received recognition for integrating Bluetooth gauges into the smart manufacturing platform.
            </p>
            <p className="about-description">
              Also helped modernize the platform by upgrading legacy <strong>.NET Framework components to .NET Core</strong> 
              for improved reliability and performance.
            </p>
            <div className="about-highlights">
              <div className="highlight-item">
                <div className="highlight-icon">🚀</div>
                <div>
                  <h3>Scalable Solutions</h3>
                  <p>Building high-performance applications</p>
                </div>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon">⚡</div>
                <div>
                  <h3>Performance Focus</h3>
                  <p>Optimizing for speed and efficiency</p>
                </div>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon">🔧</div>
                <div>
                  <h3>Full Stack</h3>
                  <p>End-to-end development expertise</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

