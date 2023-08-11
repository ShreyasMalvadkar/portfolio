import React, { useState } from 'react';
import './Certificates.css'; // Import your CSS file for styling
import { LazyLoadImage } from 'react-lazy-load-image-component';

import cdac from './CDAC Certificate.jpg';
import ansys from './Ansys.jpg';
import catia from './Catia.jpg';

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const certificates = [
    { title: 'CDAC', imageSrc: cdac },
    { title: 'ANSYS', imageSrc: ansys },
    { title: 'CATIA', imageSrc: catia },
  ];

  const handleCertificateClick = (index) => {
    setSelectedCertificate(index);
    setIsFullScreen(true);
  };

  const handleBackButtonClick = () => {
    setSelectedCertificate(null);
    setIsFullScreen(false);
  };

  return (
    <div>
      <h2>Certificates</h2>
      <div className="certificate-gallery">
        {isFullScreen ? (
          <div className="full-screen-overlay">
            <button className="back-button" onClick={handleBackButtonClick}>
              Back
            </button>
            <img
              src={certificates[selectedCertificate].imageSrc}
              alt={certificates[selectedCertificate].title}
            />
          </div>
        ) : (
          certificates.map((certificate, index) => (
            <div
              key={index}
              className={`certificate-item ${selectedCertificate === index ? 'active' : ''}`}
              onClick={() => handleCertificateClick(index)}
            >
              <h2>{certificate.title}</h2>
              <LazyLoadImage
                className="img"
                src={certificate.imageSrc}
                alt={certificate.title}
                width="150" // Initial small size
                height="150"
                effect="blur"
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Certificates;
