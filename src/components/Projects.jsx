import React from 'react';
import ProjectCard from './ProjectCard';
import '../ProjectSection.css';

const projects = [
  {
    title: 'DocSahayak Application',
    desc: 'Full-stack Document updation solution with React and  Express.',
    img: '/src/assets/DocSewa.jpg',
    tech: ['React','Express','PostgreSQL'],
    code: 'https://github.com/Paresh-Patil-11/DocSahayak',
    demo: 'https://github.com/Paresh-Patil-11/DocSahayak',
  },
  {
    title: 'Zerodha Clone Application',
    desc: 'Developed Zerodha Clone trading platform functionality using React.js',
    img: '/src/assets/Zerodha.jpg',
    tech: ['React', 'Material-UI', 'Vercel'],
    code: 'https://github.com/Paresh-Patil-11/ZerodhaClone',
    demo: 'https://zerodha-clone-rose.vercel.app/',
  },
  {
    title: 'Gemini Web Application',
    desc: 'React.js chat interface powered by GenerativeAI.',
    img: '/src/assets/google-gemini.webp',
    tech: ['React.js', 'GenerativeAI'],
    code: 'https://github.com/Paresh-Patil-11/TalkConnect',
    demo: 'https://talk-connect.vercel.app/',
  },
];

const Projects = () => (
  <section className="project-section">
    <h2 className="project-section-title">Projects</h2>
    <div className="project-cards-container">
      {projects.map((project, idx) => (
        <ProjectCard key={idx} {...project} />
      ))}
    </div>
    <div className="project-section-footer">
      <a href="https://github.com/Paresh-Patil-11/" className="view-all-btn">
        <span role="img" aria-label="folder">📁 View All Projects</span> 
      </a>
    </div>
  </section>
);

export default Projects; 