import React from "react";
import "./Project.css";
import Card from "../Card/Card";
import projects from "../../data/projects";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Project = () => {
  useGSAP(() => {
    gsap.from("#para", {
      y: 100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: "#para",
        scrub: 2,
        start: "top 80%",
        end: "top 30%",
      },
    });

    gsap.from(".slider", {
      y: 100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: ".slider",
        scrub: 2,
        start: "top 70%",
        end: "top 30%",
      },
    });
  });

  return (
    <div id="projects">
      <h1 id="para">
        A responsive portfolio website showcasing my web development projects
        and skills
      </h1>
      <p className="projects-hint">Hover a project to view the repo or the live demo</p>

      <div className="slider">
        {projects.map((project) => (
          <Card
            key={project.id}
            title={project.title}
            image={project.image}
            description={project.description}
            github={project.github}
            live={project.live}
            type="project"
          />
        ))}
      </div>
    </div>
  );
};

export default Project;
