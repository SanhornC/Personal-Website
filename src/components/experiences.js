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
    <section className="skill" id="experiences">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Experiences</h2>
                        <p>Artificial Intelligence Department, Foxconn (Hon Hai) Research Institute<br></br> AI Research Intern (Computer Vision)<br></br>June 2023 - Present</p>
                        <p>Technology Services Help Desk, University of Illinois Urbana Champaign<br></br> IT Consultant<br></br>Jan 2023 - Present</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}