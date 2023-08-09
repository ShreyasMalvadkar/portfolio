import React, { useState } from 'react';
import './Education.css'; // Import your CSS file for styling

const Education = () => {
  const [showPG, setShowPG] = useState(false);
  const [showUG, setShowUG] = useState(false);
  const [show12th, setShow12th] = useState(false);
  const [show10th, setShow10th] = useState(false);

  const togglePG = () => {setShowPG(!showPG)
                          setShow10th(false)
                          setShow12th(false)
                          setShowUG(false)
                        };
  const toggleUG = () => {setShowPG(false)
                          setShow10th(false)
                          setShow12th(false)
                          setShowUG(!showUG)
                        };
  const toggle12th = () => {setShowPG(false)
                            setShow10th(false)
                            setShow12th(!show12th)
                            setShowUG(false)
                          };
  const toggle10th = () => {setShowPG(false)
                            setShow10th(!show10th)
                            setShow12th(false)
                            setShowUG(false)
                          };

  return (
    <div className="education-container container-fluid">
      <h2>Education</h2><hr/>
      <div className="education m-2 p-2 division" onClick={togglePG}>
        <h3 >Post Graduation</h3>
        {showPG && (
          <div className="education-details">
            <table className='table table-striped table-bordered table-hover table-dark shadow' >
              <tbody>
                <tr>
                  <td>Degree</td>
                  <td>Post Graduate Diploma in Advanced Computing (PG-DAC)</td>
                </tr>
                <tr>
                  <td>University</td>
                  <td>Centre for Development of Advanced Computing (CDAC), Pune</td>
                </tr>
                <tr>
                  <td>Grade</td>
                  <td>A+</td>
                </tr>
                <tr>
                  <td>Percentage</td>
                  <td>76.75%</td>
                </tr>
                <tr>
                  <td>Duration</td>
                  <td>15 Sept 2022 - 15 March 2023</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
      <div className="education m-2 p-2 division" onClick={toggleUG}>
        <h3>Graduation</h3>
        {showUG && (
          <div className="education-details">
           <table className='table table-striped table-bordered table-hover table-dark shadow'>
              <tbody>
                <tr>
                  <td>Degree</td>
                  <td>BE Mechanical</td>
                </tr>
                <tr>
                  <td>University</td>
                  <td>PAH Solapur University</td>
                </tr>
                <tr>
                  <td>Grade</td>
                  <td>A+</td>
                </tr>
                <tr>
                  <td>Percentage</td>
                  <td>76.75%</td>
                </tr>
                <tr>
                  <td>Duration</td>
                  <td>2015 - 2019</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
      <div className="education m-2 p-2 division" onClick={toggle12th}>
        <h3>12th Grade</h3>
        {show12th && (
          <div className="education-details">
            <table className='table table-striped table-bordered table-hover table-dark shadow'>
              <tbody>
                <tr>
                  <td>Degree</td>
                  <td>Post Graduate Diploma in Advanced Computing (PG-DAC)</td>
                </tr>
                <tr>
                  <td>University</td>
                  <td>Centre for Development of Advanced Computing (CDAC), Pune</td>
                </tr>
                <tr>
                  <td>Grade</td>
                  <td>A+</td>
                </tr>
                <tr>
                  <td>Percentage</td>
                  <td>76.75%</td>
                </tr>
                <tr>
                  <td>Duration</td>
                  <td>15 Sept 2022 - 15 March 2023</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
      <div className="education m-2 p-2 division" onClick={toggle10th}>
        <h3>10th Grade</h3>
        {show10th && (
          <div className="education-details">
            <table className='table table-striped table-bordered table-hover table-dark shadow'>
              <tbody>
                <tr>
                  <td>Degree</td>
                  <td>Post Graduate Diploma in Advanced Computing (PG-DAC)</td>
                </tr>
                <tr>
                  <td>University</td>
                  <td>Centre for Development of Advanced Computing (CDAC), Pune</td>
                </tr>
                <tr>
                  <td>Grade</td>
                  <td>A+</td>
                </tr>
                <tr>
                  <td>Percentage</td>
                  <td>76.75%</td>
                </tr>
                <tr>
                  <td>Duration</td>
                  <td>15 Sept 2022 - 15 March 2023</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Education;
