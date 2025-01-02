import React from 'react';

export const Experiences = () => {
  return (
    <div className="experience-page">
      <div className="experience-section">
        <div className="container">
          <div className="experience-container">
            {/* Research Experiences */}
            <div className="experience-half">
              <h2>Research Experiences</h2>

              <div className="experience-item">
                <h3>The Adaptive Cognition and Interaction Design Lab</h3>
                <p>University of Illinois Urbana Champaign</p>
                <p>Position: <span className="highlight">Research Intern (Human Computer Interaction)</span></p>
                <p>Guided By: <a href='https://ischool.illinois.edu/people/jessie-chin'>Prof. Jessie Chin</a></p>
                <p className="date">Aug. 2024 - Dec. 2024</p>
              </div>
              
              <div className="experience-item">
                <h3>Department of Computer Science</h3>
                <p>City University of HongKong</p>
                <p>Position: <span className="highlight">Research Intern (Algorithm Design)</span></p>
                <p>Guided By: <a href='https://www.cs.cityu.edu.hk/~minmli/'>Prof. Li Minming</a></p>
                <p className="date">June 2024 - Aug. 2024</p>
              </div>

              <div className="experience-item">
                <h3>Hon Hai (Foxconn) Research Institute</h3>
                <p>Hon Hai Precision Industry</p>
                <p>Position: <span className="highlight">AI Research Intern (Computer Vision)</span></p>
                <p>Guided By: <a href='https://www.hh-ri.com/hhri/people/栗永徽/'>Dr. Li Yung-Hui</a></p>
                <p className="date">June 2023 - Feb. 2024</p>
              </div>

              
            </div>

            {/* Work Experiences */}
            <div className="experience-half">
              <h2>Work Experiences</h2>
              
              <div className="experience-item">
                <h3>Applied Technologies For Learning in Arts & Sciences</h3>
                <p>University of Illinois Urbana Champaign</p>
                <p>Position: <span className="highlight">Data Team Intern</span></p>
                <p className="date">Aug. 2024 - Dec. 2024</p>
              </div>

              <div className="experience-item">
                <h3>Technology Services Help Desk</h3>
                <p>University of Illinois at Urbana Champaign</p>
                <p>Position: <span className="highlight">IT Consultant</span></p> 
                <p className="date">Jan. 2023 - Mar. 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};