export const Research_Experiences = () => {
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
    <section className="skill" id="research_experiences">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Research Experiences</h2>
                        <p>Department of Computer Science, City University of HongKong<br></br> Research Intern <br></br> June 2024 - Aug. 2024</p>
                        <p>Artificial Intelligence Department, Foxconn (Hon Hai) Research Institute<br></br> AI Research Intern (Computer Vision)<br></br>June 2023 - Feb. 2024</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}