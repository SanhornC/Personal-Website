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
                <a href="https://www.idea-isail.com"><h3>iDEA-iSAIL Joint Laboratory</h3></a>
                <p>University of Illinois - Urbana Champaign, Urbana, IL, USA</p>
                <p>Position: <span className="highlight">Undergraduate Research Assistant</span></p>
                <p>Guided By: <a href="http://tonghanghang.org" target="_blank">Prof. Hanghang Tong</a></p>
                <p className="date">Mar. 2025 - Present</p>
              </div>

              <div className="experience-item">
                <a href="https://salt.ischool.illinois.edu"><h3>Social Computing Systems Lab</h3></a>
                <p>University of Illinois - Urbana Champaign, Urbana, IL, USA</p>
                <p>Position: <span className="highlight">Undergraduate Research Assistant</span></p>
                <p>Guided By: <a href='https://yunhuang.web.illinois.edu' target="_blank">Prof. Yun Huang</a></p>
                <p className="date">Mar. 2025 - Present</p>
              </div>

              <div className="experience-item">
                <a href="https://jessiechinlab.ischool.illinois.edu"><h3>The Adaptive Cognition and Interaction Design Lab</h3></a>
                <p>University of Illinois - Urbana Champaign, Urbana, IL, USA</p>
                <p>Position: <span className="highlight">Undergraduate Research Assistant</span></p>
                <p>Guided By: <a href='https://ischool.illinois.edu/people/jessie-chin' target="_blank">Prof. Jessie Chin</a></p>
                <p className="date">Aug. 2024 - Present</p>
              </div>

              <div className="experience-item">
                <a href="https://publish.illinois.edu/econdatalab/"><h3>Econ Data Lab</h3></a>
                <p>University of Illinois - Urbana Champaign, Urbana, IL, USA</p>
                <p>Position: <span className="highlight">Undergraduate Research Assistant</span></p>
                <p>Guided By: <a href='https://economics.illinois.edu/profile/dafontes' target="_blank">Prof. Daniela Alonso Fontes</a></p>
                <p className="date">Jan. 2025 - May 2025</p>
              </div>

              <div className="experience-item">
                <h3>Department of Computer Science</h3>
                <p>City University of Hong Kong, Kowloon, Hong Kong S.A.R.</p>
                <p>Position: <span className="highlight">Summer Research Intern</span></p>
                <p>Guided By: Prof. Li Min Ming</p>
                <p className="date">Jun. 2024 - Aug. 2024</p>
              </div>
            </div>

            {/* Work Experiences */}
            <div className="experience-half">
              <h2>Work Experiences</h2>
              
              <div className="experience-item">
                <h3>Taiwan Semiconductor Manufacturing Company (TSMC)</h3>
                <p>Hsinchu City, Taiwan</p>
                <p>Position: <span className="highlight">Data Engineer Intern / CPO AI4BI Division</span></p>
                <p className="date">May 2025 - Aug. 2025</p>
              </div>

              <div className="experience-item">
                <h3>Applied Technologies for Learning in Arts & Sciences</h3>
                <p>University of Illinois - Urbana Champaign, Urbana, IL, USA</p>
                <p>Position: <span className="highlight">AI/ML Intern</span></p>
                <p className="date">Jan. 2025 - May 2025</p>
              </div>

              <div className="experience-item">
                <h3>Applied Technologies for Learning in Arts & Sciences</h3>
                <p>University of Illinois - Urbana Champaign, Urbana, IL, USA</p>
                <p>Position: <span className="highlight">Data Analyst Intern</span></p>
                <p className="date">Aug. 2024 - Dec. 2024</p>
              </div>

              <div className="experience-item">
                <h3>Foxconn (Hon Hai) Research Institute</h3>
                <p>Taipei City, Taiwan</p>
                <p>Position: <span className="highlight">AI Research Intern / Computer Vision Group</span></p>
                <p className="date">Jun. 2023 - Feb. 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
