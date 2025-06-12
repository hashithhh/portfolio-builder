import React from "react";
import "./Projects.css"; // We'll create this for styles

const projectList = [
  {
    title: "Portfolio Builder",
    desc: "A React-based tool that lets developers build and publish custom portfolios using pre-made templates.",
    tech: "React, Bootstrap, PHP, MySQL",
    github: "https://github.com/your-username/portfolio-builder",
    demo: "https://yourdemo.vercel.app"
  },
  {
    title: "AI Chatbot",
    desc: "An AI assistant built using OpenAI APIs and trained on custom data.",
    tech: "Python, Flask, OpenAI API",
    github: "https://github.com/your-username/ai-chatbot",
    demo: "#"
  },
  {
    title: "AR Product Viewer",
    desc: "An immersive AR app to view and interact with products in 3D using your camera.",
    tech: "Unity, ARCore, C#",
    github: "#",
    demo: "#"
  }
];

function Projects() {
  return (
    <section className="projects-section container py-5">
      <h2 className="text-center mb-4">My Projects</h2>
      <div className="row g-4">
        {projectList.map((project, index) => (
          <div key={index} className="col-md-4">
            <div className="card project-card h-100 shadow-sm">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-primary fw-bold">{project.title}</h5>
                <p className="card-text text-muted flex-grow-1">{project.desc}</p>
                <p className="badge bg-dark mb-3">{project.tech}</p>
                <div className="mt-auto d-flex justify-content-between">
                  <a href={project.github} className="btn btn-outline-primary btn-sm" target="_blank" rel="noreferrer">GitHub</a>
                  <a href={project.demo} className="btn btn-primary btn-sm" target="_blank" rel="noreferrer">Live Demo</a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
