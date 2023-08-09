import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Projects.css';


function Projects() {

    const data = [
        {
          title: 'PG-DAC (CDAC) Project',
          link:"/projcdac",          
        },
        {
          title: 'BE Project',
          link:"/projbe"
          
        },
        {
          title: 'SAE Supra Competition',
          link:"/projsae"
          
        },
        {
          title: 'FMAE Quad Bike Competition',
          link:"/projquad"
          
        },
        // {
        //   title: 'Other Project',
        //   link:"/projother"
          
        // },
      ];

  return (
    <div className='container-fluid'>
        <h1>Projects</h1>

      <div>
      {data.map((item, idx) => (
        <div className="division" key={idx}>
          <NavLink to={item.link} className="nav-link">{item.title}</NavLink>
        </div>
        ))}
        </div>
    </div>
  )
}

export default Projects