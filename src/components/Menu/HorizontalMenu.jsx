// HorizontalMenu.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './HorizontalMenu.css';

const HorizontalMenu = () => {
  const [activeItem, setActiveItem] = useState('about');

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div className="horizontal-menu ">
      
      <NavLink to='/about' className='nav-link'>
      <div
        className={`menu-item ${activeItem === 'about' ? 'active' : ''}`}
        onClick={() => handleItemClick('about')}
      >
        <div className="menu-item">
          <i className="fas fa-user"></i>
          <span>About</span>
        </div>
      </div>
      </NavLink>

      <NavLink to='/techskills' className='nav-link'>
      <div
        className={`menu-item ${activeItem === 'technicalSiklls' ? 'active' : ''}`}
        onClick={() => handleItemClick('technicalSiklls')}
      >
        <div className="menu-item">
          <i className="fas fa-code"></i>
          <span>Technical Skills</span>
        </div>

      </div>
      </NavLink>

      <NavLink to='/projects' className='nav-link'>
      <div
        className={`menu-item ${activeItem === 'projects' ? 'active' : ''} `}
        onClick={() => handleItemClick('projects')}
      >
        <div className="menu-item">
          <i className="fas fa-project-diagram"></i>
          <span>Project Details</span>
        </div>
      </div>
      </NavLink>

      <NavLink to='/education' className='nav-link'>
      <div
        className={`menu-item ${activeItem === 'education' ? 'active' : ''}`}
        onClick={() => handleItemClick('education')}
      >
        <div className="menu-item">
          <i className="fas fa-graduation-cap"></i>
          <span>Education</span>
        </div>
      </div>
      </NavLink>

      <NavLink to='/certificates' className='nav-link'>
      <div
        className={`menu-item ${activeItem === 'certificates' ? 'active' : ''}`}
        onClick={() => handleItemClick('certificates')}
      >
        <div className="menu-item">
          <i className="fas fa-certificate"></i>
          <span>Certificates</span>
        </div>
      </div>
      </NavLink>

      <NavLink to='/extras' className='nav-link'>
      <div
        className={`menu-item ${activeItem === 'extraCurricular' ? 'active' : ''}`}
        onClick={() => handleItemClick('extraCurricular')}
      >
        <div className="menu-item">
          <i className="fas fa-plus"></i>
          <span>Extra</span>
        </div>
      </div>
      </NavLink>


      <NavLink to='/contact' className='nav-link'>
      <div
        className={`menu-item ${activeItem === 'contact' ? 'active' : ''}`}
        onClick={() => handleItemClick('contact')}
      >
        <div className="menu-item">
          <i className="fas fa-envelope"></i>
          <span>Contact</span>
        </div>
      </div>
      </NavLink>
    </div>
  );
};

export default HorizontalMenu;
