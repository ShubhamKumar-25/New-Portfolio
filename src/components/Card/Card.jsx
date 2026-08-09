import React from "react";
import "./Card.css";
import { Github, ExternalLink } from "lucide-react";

const Card = ({ title, image, type, github, live, description }) => {
  const isProject = type === "project";

  const stop = (e) => e.stopPropagation();

  return (
    <div className={`card ${isProject ? "project-card" : ""}`}>
      <h1>{title}</h1>

      <div className="hovercard">
        <img src={image} alt={title} />

        {isProject && (
          <div className="card-overlay">
            {description && <p className="card-desc">{description}</p>}
            <div className="card-links">
              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                  className="card-link-btn"
                  onClick={stop}
                  aria-label={`${title} GitHub repository`}
                >
                  <Github size={18} />
                  <span>Code</span>
                </a>
              )}
              {live && (
                <a
                  href={live}
                  target="_blank"
                  rel="noreferrer"
                  className="card-link-btn card-link-live"
                  onClick={stop}
                  aria-label={`${title} live demo`}
                >
                  <ExternalLink size={18} />
                  <span>Live</span>
                </a>
              )}
              {!github && !live && (
                <span className="card-link-soon">Links coming soon</span>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
