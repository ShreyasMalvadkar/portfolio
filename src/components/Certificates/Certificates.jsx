import cdac from './CDAC Certificate.jpg'
import ansys from './Ansys.jpg'
import catia from './Catia.jpg'
import React, { useState } from 'react';
import './Certificates.css'; // Import your CSS file for styling

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const certificates = [
    { title: 'CDAC', imageSrc: cdac },
    { title: 'ANSYS', imageSrc: ansys },
    { title: 'CATIA', imageSrc:catia },
  ];

  const handleCertificateClick = (index) => {
    setSelectedCertificate(index);
    setIsFullScreen(true);
  };

  const handleBackButtonClick = () => {
    setIsFullScreen(false);
  };

  return (
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
            <img src={certificate.imageSrc} alt={certificate.title} />
          </div>
        ))
      )}
    </div>
  );
};

export default Certificates;
