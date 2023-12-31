import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from '@mui/material'
import quad from './Quad.jpg'
import quad_low from './Quad_low.jpg'
import './ProjQuad.css'
import YouTubeIcon from '@mui/icons-material/YouTube';
import { LazyLoadImage } from 'react-lazy-load-image-component'
import ProgressiveImage from '../../ImageLoader/ProgressiveImage'

function ProjQuad() {
    const project = {
        heading:"Quad Bike Design Challenge",
        duration:"8 Months",
        title: 'Design, Analysis and Fabrication of Quad Bike (ATV)',
        description: `QBDC is a one-of-a-kind competition that offers engineering students an exceptional 
          opportunity to dive deep into the fascinating world of vehicle design.`,
        awards: ["Runner Up","Traction Test","CAE","Acceleration Test","Suspension Test"],
        imageUrl:quad ,
        team_id:"Q170808",
        teamSize:"28",
        youtube_link:"https://youtu.be/F0D1x4HY8A4?t=170",
        journey_ytLink:"https://www.youtube.com/watch?v=ZaBgRhd_qP0"
      };

  return (
    <div className='container-fluid '>
       <h3 className='center p-2'>{project.heading}</h3>

       <div className='row project-card'>
       <div className='col-lg-3 cneter'>
       <ProgressiveImage src={project.imageUrl} alt={project.title} className="project-image" placeholder={quad_low}/>
        {/* <LazyLoadImage effect='blur' src={project.imageUrl} alt={project.title} className="project-image" /> */}
      </div>
      
      <div className='col-lg-8'>
        <div className="project-content">
        <h2 className="project-title text-center p-3 ">{project.title}</h2>
        <p className="project-description"><u><strong>Team Size</strong></u>:{project.teamSize}</p>
        <p className="project-description"><u><strong>Duration</strong></u>:{project.duration}</p>
        <p className="project-technologies">
          <u><strong>Awards</strong></u>:{project.awards.join(', ')}
        </p>
        <p className="project-description"><u><strong>Description</strong></u>:{project.description}</p>
        {/* <p className="project-description"><u><strong>USP</strong></u>:{project.USP}</p> */}
        <div className="d-flex justify-content-end">
        <a
          href={project.youtube_link}
         
          target="_blank"x
          rel="noreferrer"
          style={{textDecoration:'none'}}
          className='nav-link'
          >   
            <div className="contact-item m-2" >
              <h3><YouTubeIcon fontSize='large'/>Competition Video</h3>
            </div>
        </a>
        &nbsp;
        <a
          href={project.journey_ytLink}
         
          target="_blank"x
          rel="noreferrer"
          style={{textDecoration:'none'}}
          className='nav-link'
          >   
            <div className="contact-item m-2" >
              <h3><YouTubeIcon fontSize='large'/>Team Video</h3>
            </div>
        </a>
        </div>
        </div>
        </div>
       </div>
    <NavLink to='/projects' className="nav-link d-flex justify-content-end">
      <Button fontSize='large' style={{color:"white"}}>Back</Button>
    </NavLink>
    </div>
  )
}

export default ProjQuad
