import headerImg from "../assets/sanhorn.jpeg";

export const AboutMe = () => {
    return (
      <section className="banner" id="home">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xs-12 col-md-6 col-xl-7">
              <h1>Hi! This is Sanhorn Chen</h1>
              <p>I am a junior year student at the University of Illinois Urbana-Champaign, majoring in Computer Science and Economics. I have a strong interest in advancing artificial intelligence through both language models and computer vision models, driven by their potential to transform industries and solve complex problems.</p>
              <br></br>
              <p>While I am deeply intrigued by the capabilities of language models in processing and generating human-like text, as well as computer vision models in analyzing, interpreting, and generating visual data, I am still exploring which specific area to focus on. My academic and professional journey is fueled by curiosity and a desire to contribute to impactful research that bridges these domains. I am excited to learn, grow, and collaborate with others in these innovative fields!</p>
              <button onClick={() => window.open('https://drive.google.com/file/d/1f2iXhPLwCyZFD4Xxhx4ldJE-0idI4zF0/view?usp=share_link', '_blank')}>
                <span>View Resume</span>
              </button>
            </div>
            <div className="col-xs-12 col-md-6 col-xl-5">
                <img src={headerImg} alt="Header Img"/>
            </div>
          </div>
        </div>
      </section>
    );
  }