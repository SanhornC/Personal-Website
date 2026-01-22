import headerImg from "../assets/sanhorn.jpeg";

export const AboutMe = () => {
    return (
      <section className="banner" id="home">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xs-12 col-md-6 col-xl-7">
              <h1>Hi! This is Sanhorn Chen</h1>
              <p>My name is Sanhorn Chen, and I am a senior-year student at the University of Illinois Urbana-Champaign. My academic interests focus on natural language processing, time series AI, machine learning, and artificial intelligence.</p>
              <br></br>
              <p>Through my past experiences, I have worked across several areas, including training and fine-tuning Large Language Models (LLMs), Vision Language Models (VLMs), and Time Series Foundation Models (TSFM) using PyTorch, LoRA, and A100 GPUs, building multi-agent AI systems with LangChain and LLM APIs, developing end-to-end machine learning pipelines from data preprocessing to modeling and deployment, and creating analytical dashboards and data visualizations using Power BI and Tableau.</p>
              <button onClick={() => window.open('https://drive.google.com/file/d/1kpRnbMpJlrf-wTtieMr-PyR1soPotCWw/view?usp=sharing', '_blank')}>
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