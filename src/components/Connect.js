export const Connect = () => {
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
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
      <section className="skill" id="connect">
          <div className="container">
              <div className="row">
                  <div className="col-12">
                      <div className="skill-bx wow zoomIn">
                          <h2>Let's Connect</h2>
                          <br></br>
                          <a href="https://github.com/SanhornC" target="_blank">
                                <button><span>Github</span></button>     
                          </a>
                          <span>'\t''\t'</span>
                          <a href="www.linkedin.com/in/sanhorn-chen-898941260" target="_blank">
                                <button><span>Linkedin</span></button>     
                          </a>  
                          <span>'\t''\t'</span>
                          <a href="mailto:sanhorn2@illinois.edu">
                                <button><span>Email</span></button>     
                          </a>   
                      </div>
                  </div>
              </div>
          </div>
      </section>
    )
  }