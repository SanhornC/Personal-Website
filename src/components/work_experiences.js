export const Experiences = () => {
    const responsive = {
      superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };
  
    return (
      <section className="skill" id="work_experiences">
          <div className="container">
              <div className="row">
                  <div className="col-12">
                      <div className="skill-bx wow zoomIn">
                          <h2>Work Experiences</h2>
                          <p>Applied Technology for Learning in the Arts & Sciences<br></br> Incoming Intern</p> 
                          <p>Technology Services Help Desk, University of Illinois Urbana Champaign<br></br> IT Consultant<br></br>Jan. 2023 - Mar. 2024</p>
                          <p>Technology Services Help Desk, University of Illinois Urbana Champaign<br></br> Mandarin Translator<br></br> Aug. 2023 - Oct. 2023</p>
                        </div>
                  </div>
              </div>
          </div>
      </section>
    )
  }