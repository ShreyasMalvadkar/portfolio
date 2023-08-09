import React from 'react'
import projectImg from './projectImage.png'
import erdDiagram from './VSMSDatabaseERD.png'
import '../ProjectDetails.css'
import { NavLink } from 'react-router-dom'
import { Button } from '@mui/material'
import ImageIcon from '@mui/icons-material/Image';
import ForwardIcon from '@mui/icons-material/Forward';

function ProjCDAC() {
    const project = {
        heading:"CDAC Project",
        title: 'The Vehicle Service Management System',
        description: `A web site provides common paltform for service centers and customers. 
                      It enables vehicle service centers to enlist details of service facilities. 
                      It facilitates customers to view service options and book an appointment.`,
        USP:"Customer can track the Service Progress of their Vehicle.",
        technologies: ["Java", "Spring Boot REST API", "JPA", "ReactJS", "Bootstrap", "MySQL"],
        imageUrl: projectImg, // Replace with your image URL
        teamSize:"4",
        duration:"1 Month"
      };

  return (
    <div>
      <h3 className='center p-2'>{project.heading}</h3>
      <div className="project-card">
      <img src={project.imageUrl} alt={project.title} className="project-image" />
      <div className="project-content">
        <h2 className="project-title text-center p-3">{project.title}</h2>
        <p className="project-description"><u><strong>Team Size</strong></u>:{project.teamSize}</p>
        <p className="project-description"><u><strong>Duration</strong></u>:{project.duration}</p>
        <p className="project-technologies">
          <u><strong>Technologies</strong></u>:{project.technologies.join(', ')}
        </p>
        <p className="project-description"><u><strong>Description</strong></u>:{project.description}</p>
        <p className="project-description"><u><strong>USP</strong></u>:{project.USP}</p>
        <p className="d-flex justify-content-end">
          <a
          href={erdDiagram}
          download="Example-PDF-document"
          target="_blank"
          rel="noreferrer"
          style={{textDecoration:'none'}}
          className='nav-link'
          >   
            <div className="contact-item m-2" >
              <h3><ImageIcon fontSize='large'/>Database ERD</h3>
            </div>
          </a>
        </p>
      </div>
    </div>
    <NavLink to='/projbe' className="nav-link d-flex justify-content-end">
      <Button fontSize='large' style={{color:"white", fontSize:"1rem"}}>
        BE Project <ForwardIcon fontSize='large'/>
      </Button>
    </NavLink>
    </div>
  )
}

export default ProjCDAC