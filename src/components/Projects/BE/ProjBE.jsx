import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from '@mui/material'
import chassis from './chassis.jpg'
import './ProjBE.css'
import ForwardIcon from '@mui/icons-material/Forward';
import { LazyLoadImage } from 'react-lazy-load-image-component'

function ProjBE() {
    const project = {
        heading:"BE Project",
        duration:"8 Months",
        title: 'Design, Analysis and Fabrication of Space Frame Chassis for Formula Student Race Car',
        description: `Design, analyze and fabricate a light weight, compact structured chassis without threatening to the safety of the
        driver under dynamic operating condition. For CAD modelling used CATIA V5, SOLIDWORKS 17 and for
        structural analysis used ANSYS 18.1 software.`,
        USP:`The chassis design confirms all the technical requirements set by the
            Formula Society of Automotive Engineers (Formula SAE) with optimized design.`,
        technologies: ["Catia v5","SolidWorks","Ansys","C++"],
        imageUrl:chassis ,
        teamSize:"4"
      };

  return (
    <div className='container-fluid '>
       <h3 className='center p-2'>{project.heading}</h3>

       <div className='row project-card'>
       <div className='col-lg-3'>
        <LazyLoadImage effect='blur' src={project.imageUrl} alt={project.title} className="project-image" />
      </div>
      
      <div className='col-lg-8'>
        <div className="project-content">
        <h2 className="project-title text-center p-3 ">{project.title}</h2>
        <p className="project-description"><u><strong>Team Size</strong></u>:{project.teamSize}</p>
        <p className="project-description"><u><strong>Duration</strong></u>:{project.duration}</p>
        <p className="project-technologies">
          <u><strong>Technologies</strong></u>:{project.technologies.join(', ')}
        </p>
        <p className="project-description"><u><strong>Description</strong></u>:{project.description}</p>
        <p className="project-description"><u><strong>USP</strong></u>:{project.USP}</p>
        </div>
        </div>
       </div>
    <NavLink to='/projsae' className="nav-link d-flex justify-content-end">
      <Button fontSize='large' style={{color:"white", fontSize:"1rem"}}>
        SAE SUPRA Competition <ForwardIcon fontSize='large'/>
      </Button>
    </NavLink>
    </div>
  )
}

export default ProjBE