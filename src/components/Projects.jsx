import React, { useEffect, useRef } from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'DocSahayak Application',
    desc: 'A comprehensive full-stack document management solution built with React and Express. Features are secure authentication, real-time updates.',
    img: '/src/assets/DocSewa.jpg',
    tech: ['React', 'Express', 'PostgreSQL'],
    code: 'https://github.com/Paresh-Patil-11/DocSahayak',
    demo: 'https://github.com/Paresh-Patil-11/DocSahayak',
    featured: true
  },
  {
    title: 'Zerodha Clone Platform',
    desc: 'A sophisticated trading platform clone with real-time market data, interactive charts, and responsive design. Built with modern React patterns and Material-UI.',
    img: '/src/assets/Zerodha.jpg',
    tech: ['React.js', 'Material-UI', 'Vercel'],
    code: 'https://github.com/Paresh-Patil-11/ZerodhaClone',
    demo: 'https://zerodha-clone-rose.vercel.app/',
    featured: true
  },
  {
    title: 'Talkconnect Application',
    desc: 'An intelligent chat interface powered by Google\'s Gemini AI. Features real-time conversations, context awareness, and beautiful UI with smooth animations.',
    img: '/src/assets/google-gemini.webp',
    tech: ['React.js', 'Gemini AI'],
    code: 'https://github.com/Paresh-Patil-11/TalkConnect',
    demo: 'https://talk-connect.vercel.app/',
    featured: true
  },
];

const Projects = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    const animateElements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    animateElements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="project-section" id="projects" ref={sectionRef}>
      <div className="container">
        <div className="animate-on-scroll">
          <h2 className="project-section-title">Featured Projects</h2>
          <p className="text-center text-muted mb-4" style={{ fontSize: '1.1rem' }}>
            A showcase of my recent work and technical expertise
          </p>
        </div>

        {/* Horizontal Scroll Projects */}
        <div className="project-scroll-wrapper animate-on-scroll">
          {projects.map((project, idx) => (
            <div className="project-card-wrapper" key={idx} style={{ animationDelay: `${idx * 0.2}s` }}>
              <ProjectCard {...project} featured />
            </div>
          ))}
        </div>

        {/* You can keep the other stats or CTA if needed */}
      </div>

      {/* Inline styles for horizontal scroll */}
      <style jsx>{`
        .project-scroll-wrapper {
          display: flex;
          gap: 2rem;
          overflow-x: auto;
          padding-bottom: 1rem;
          margin-bottom: 2rem;
          scroll-snap-type: x mandatory;
        }

        .project-scroll-wrapper::-webkit-scrollbar {
          height: 8px;
        }

        .project-scroll-wrapper::-webkit-scrollbar-thumb {
          background-color: rgba(255, 255, 255, 0.2);
          border-radius: 4px;
        }

        .project-card-wrapper {
          flex: 0 0 auto;
          scroll-snap-align: start;
          width: 350px; /* Or adjust as needed */
        }
      `}</style>
    </section>
  );
};

export default Projects;
