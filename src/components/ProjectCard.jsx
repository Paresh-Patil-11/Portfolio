import React from 'react';

const ProjectCard = ({ img, title, desc, tech, code, demo }) => (
  <div className="project-card">
    <img src={img} alt={title} className="project-card-img" />
    <div className="project-card-body">
      <h3 className="project-card-title">{title}</h3>
      <p className="project-card-desc">{desc}</p>
      <div className="project-card-tags">
        {tech.map((t, i) => (
          <span className="project-card-tag" key={i}>{t}</span>
        ))}
      </div>
      <div className="project-card-links">
        <a href={code} target="_blank" rel="noopener noreferrer" className="project-card-link">
          <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 18a4 4 0 01-8 0M12 14v4m0 0a4 4 0 01-4-4m4 4a4 4 0 004-4m-4-4V6m0 0a4 4 0 014 4m-4-4a4 4 0 00-4 4" /></svg>
          Code
        </a>
        <a href={demo} target="_blank" rel="noopener noreferrer" className="project-card-link">
          <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 3h7v7m0 0L10 21l-7-7L21 10z" /></svg>
          Live Demo
        </a>
      </div>
    </div>
  </div>
);

export default ProjectCard; 