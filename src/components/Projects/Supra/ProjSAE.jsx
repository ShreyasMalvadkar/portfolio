import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from '@mui/material'
import supra from './supra.gif'
import './ProjSAE.css'
import YouTubeIcon from '@mui/icons-material/YouTube';
import ForwardIcon from '@mui/icons-material/Forward';
import { LazyLoadImage } from 'react-lazy-load-image-component'

function ProjSAE() {
    const project = {
        heading:"SAE SUPRA Competition",
        duration:"12 Months",
        title: 'Design, Analysis and Fabrication of Space Frame Chassis for Formula Student Race Car',
        description: `The Supra event, inspired by the Formula SAE known worldwide, is a National Level Engineering Student 
            Competition where Teams from Engineering Colleges pan India participate. 
            The students not only design the race car, but also build them as per the exact design, safety and performance 
            standards accepted for similar competition.`,
        USP:`Our team was first ever from Solapur District to Successfully Participate in the Competition.`,
        imageUrl:supra ,
        teamSize:"21",
        youtube_link:"https://www.youtube.com/watch?v=jT82GAV4HoQ"
      };

  return (
    <div>
      <h3 className='center p-2'>{project.heading}</h3>
      <div className="project-card">
          <LazyLoadImage effect='blur' src={project.imageUrl} alt={project.title} className="project-image"/>
      <div className="project-content">
        <h2 className="project-title text-center p-3">{project.title}</h2>
        <p className="project-description"><u><strong>Team Size</strong></u>:{project.teamSize}</p>
        <p className="project-description"><u><strong>Duration</strong></u>:{project.duration}</p>
        <p className="project-description"><u><strong>Description</strong></u>:{project.description}</p>
        <p className="project-description"><u><strong>USP</strong></u>:{project.USP}</p>

        <p className="d-flex justify-content-end">
          <a
          href={project.youtube_link}
         
          target="_blank"
          rel="noreferrer"
          style={{textDecoration:'none'}}
          className='nav-link'
          >   
            <div className="contact-item m-2" >
              <h3><YouTubeIcon fontSize='large'/>YouTube Link</h3>
            </div>
          </a>
        </p>
      </div>
    </div>
    <NavLink to='/projquad' className="nav-link d-flex justify-content-end">
      <Button fontSize='large' style={{color:"white", fontSize:"1rem"}}>
        Quad Bike Competition <ForwardIcon fontSize='large'/>
      </Button>
    </NavLink>
    </div>
  )
}

export default ProjSAE