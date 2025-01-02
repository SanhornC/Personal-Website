import React from 'react';
import testgenie from "./../assets/testgenie.png"
import eraimg from "./../assets/era.png"
import cargan from "./../assets/cargan.png"
import atlas from "./../assets/atlas.png"

export const Projects = () => {
  const research = [
    {
        title: "CARGAN",
        image: cargan,
        description: "Diverse Domains Image-to-Image Translation via Contrastive Learning (Proceedings of the ICME Conference)",
        link: "https://github.com/HuangChiEn/sv-wcgan"
    }
  ]

  const works = [
    {
        title: "ATLAS Data Analysis",
        image: atlas,
        description: "Data cleaning scripts and documentation for the UIUC ATLAS Data Team's analysis of computer room usage.", 
        link: "https://github.com/SanhornC/ATLAS---Data-Team-Computer-Rooms-"
    }
  ]

  const projects = [
    {
      title: "Test Genie",
      image: testgenie,
      description: "A web + LLM application that helps students prepare for exams by generating practice tests and lecture summaries from uploaded materials.",
      link: "https://github.com/sliao082/Test-Genie"
    },
    {
      title: "ERA Law Firm Website",
      image: eraimg,
      description: "A website for a law firm located in Hsinchu, Taiwan",
      link: "https://eralaw.web.app"
    }
  ];

  return (
    <div className="projects-page">
      <div className="container">
        <h2 className="projects-title">Research Work</h2>
        <div className="projects-grid">
          {research.map((r, index) => (
            <div className="project-card" key={index}>
              <div className="project-image">
                <img src={r.image} alt={r.title} />
              </div>
              <div className="project-info">
                <h3 className="project-title">{r.title}</h3>
                <p className="project-description">{r.description}</p>
                <a 
                  href={r.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  View Work →
                </a>
              </div>
            </div>
          ))}
        </div>
        <br></br>
        <h2 className="projects-title">Internship Project</h2>
        <div className="projects-grid">
          {works.map((work, index) => (
            <div className="project-card" key={index}>
              <div className="project-image">
                <img src={work.image} alt={work.title} />
              </div>
              <div className="project-info">
                <h3 className="project-title">{work.title}</h3>
                <p className="project-description">{work.description}</p>
                <a 
                  href={work.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  View Work →
                </a>
              </div>
            </div>
          ))}
        </div>
        <br></br>
        <h2 className="projects-title">Personal Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};