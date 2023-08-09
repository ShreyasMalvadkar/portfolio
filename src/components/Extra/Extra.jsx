import React, { useState } from 'react';
import './Extra.css'; // Make sure to create this CSS file and add your styles

const Extra = () => {
  const [activeTab, setActiveTab] = useState('Extra Curricular');
  const data = {
    'Extra Curricular': [
      'SAE Collegiate Club- Vice President',
      'AOL, Pune Police Volunteer work',
      'Technical Event Head of Mech Dept. Activities',
    ],
    'Hobbies': [
      'Listning Songs',
      'Podcasts',
    ],
    'Interests': [
      'Indian History',
      'Formula 1 Racing',
      'Reading',
    ],
  };

  return (
    <div className="activities-container container-fluid">

      <div className="tabs">
        {Object.keys(data).map((heading) => (
          <div
            key={heading}
            className={`tab ${activeTab === heading ? 'active' : ''}`}
            onClick={() => setActiveTab(heading)}
          >
            {heading}
          </div>
        ))}
      </div>
      <div className="content">
        {data[activeTab].map((item, index) => (
          <div key={index} className="item">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Extra;
