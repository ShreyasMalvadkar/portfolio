import React, { useState } from 'react';
import './Projects.css';
import { use3DTilt } from '../hooks/use3DTilt';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const projects = [
    {
      title: 'Manufacturing Traceability System',
      company: 'sfHawk Solutions',
      companyUrl: 'https://sfhawk.com',
      description: 'Developed core modules of sfHawk\'s smart manufacturing traceability system, enabling 100% automation via MQTT, Windows Services, serial, and Bluetooth integrations for real-time manufacturing data tracking and Industry 4.0 compliance.',
      technologies: ['C#', '.NET Core', 'MQTT', 'Windows Services', 'Bluetooth', 'IoT'],
      category: 'Full Stack',
      highlight: true
    },
    {
      title: 'SPC Analytics Workflows',
      company: 'sfHawk Solutions',
      companyUrl: 'https://sfhawk.com',
      description: 'Built statistical process control (SPC) analytics workflows with 100% accurate defect detection for sfHawk\'s quality management system, improving quality insights and reducing operator dependency in smart manufacturing environments.',
      technologies: ['C#', '.NET Core', 'Entity Framework', 'Data Analytics', 'SPC'],
      category: 'Full Stack',
      highlight: true
    },
    {
      title: 'Production Planning Calendar',
      company: 'sfHawk Solutions',
      companyUrl: 'https://sfhawk.com',
      description: 'Enhanced sfHawk\'s Production Planning Calendar (PPC) module by integrating live production & OEE (Overall Equipment Effectiveness) metrics, improving scheduling accuracy and visibility for smart digital factory automation.',
      technologies: ['C#', '.NET Core', 'Angular', 'REST APIs', 'Real-time Data', 'OEE'],
      category: 'Full Stack',
      highlight: false
    },
    {
      title: 'CSV Ingestion Pipeline',
      company: 'sfHawk Solutions',
      companyUrl: 'https://sfhawk.com',
      description: 'Optimized CSV ingestion pipelines for sfHawk\'s manufacturing data platform to achieve millisecond-level processing speeds for high-volume measurement data, enabling real-time analytics and reporting.',
      technologies: ['C#', '.NET Core', 'Performance Optimization', 'Data Processing', 'ETL'],
      category: 'Backend',
      highlight: false
    }
  ];

  const categories = ['All', 'Full Stack', 'Backend'];
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  const ProjectCard = ({ project, index }) => {
    const cardRef = use3DTilt(8);
    const [cardRefAnim, isVisible] = useScrollAnimation({ threshold: 0.1 });

    // Combine refs
    const combinedRef = (el) => {
      cardRef.current = el;
      cardRefAnim.current = el;
    };

    return (
      <div 
        ref={combinedRef}
        className={`project-card ${project.highlight ? 'highlight' : ''} ${isVisible ? 'visible' : ''}`}
        style={{ animationDelay: `${index * 0.1}s` }}
      >
              {project.highlight && <div className="project-badge">Featured</div>}
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <span className="project-category">{project.category}</span>
              </div>
              {project.company && (
                <div className="project-company">
                  <span>at </span>
                  {project.companyUrl ? (
                    <a 
                      href={project.companyUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="company-link"
                    >
                      {project.company}
                    </a>
                  ) : (
                    <span className="company-name">{project.company}</span>
                  )}
                </div>
              )}
              <p className="project-description">{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
    );
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">
          <span className="title-prefix">&gt;</span> Projects
        </h2>
        <div className="projects-filter">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

