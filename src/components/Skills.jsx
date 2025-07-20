import React, { useEffect, useRef } from 'react';

const skills = [
 
  { 
    img: '/images/js.png', 
    name: 'JavaScript', 
    desc: 'Expert in modern JavaScript ES6+, creating dynamic and interactive web applications.',
    level: 95
  },
   { 
    img: '/images/python.png', 
    name: 'Python', 
    desc: 'Advanced proficiency in Python for data analysis, machine learning, and backend development.',
    level: 90
  },
  { 
    img: '/images/react.png', 
    name: 'React', 
    desc: 'Building scalable, component-based user interfaces with React and modern hooks.',
    level: 90
  },
   { 
    img: 'https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg', 
    name: 'Bootstrap', 
    desc: 'Creating responsive, mobile-first websites with Bootstrap framework.',
    level: 90
  },
  { 
    img: '/images/nodejs.png', 
    name: 'Node.js', 
    desc: 'Developing high-performance server-side applications and RESTful APIs.',
    level: 85
  },
  { 
    img: '/images/express.png', 
    name: 'Express.js', 
    desc: 'Creating robust backend services and middleware with Express framework.',
    level: 85
  },
  { 
    img: '/images/MongoDB_Logomark_ForestGreen.png', 
    name: 'MongoDB', 
    desc: 'Designing and implementing scalable NoSQL database architectures.',
    level: 80
  },
  { 
    img: 'https://www.mysql.com/common/logos/logo-mysql-170x115.png', 
    name: 'MySQL', 
    desc: 'Advanced SQL queries, database optimization, and relational database design.',
    level: 85
  },
 
];

const Skills = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            
            // Animate skill bars
            const skillBars = entry.target.querySelectorAll('.skill-progress-bar');
            skillBars.forEach((bar, index) => {
              setTimeout(() => {
                const level = skills[index % skills.length].level;
                bar.style.width = `${level}%`;
              }, index * 100);
            });
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
    <section id="skills" className="skills-section" ref={sectionRef}>
      <div className="container">
        <div className="animate-on-scroll">
          <h2 className="skills-title">My Skills & Expertise</h2>
          <p className="text-center text-muted mb-5" style={{ fontSize: '1.1rem' }}>
            Technologies and tools I use to bring ideas to life
          </p>
        </div>
        
        <div className="row g-4">
          {skills.map((skill, idx) => (
            <div className="col-lg-3 col-md-4 col-sm-6" key={idx}>
              <div className="skill-card animate-on-scroll" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="skill-icon-wrapper mb-3">
                  <img 
                    className="skill-icon" 
                    src={skill.img} 
                    alt={`${skill.name} icon`}
                    loading="lazy"
                  />
                </div>
                
                <h3 className="skill-name">{skill.name}</h3>
                <p className="skill-description">{skill.desc}</p>
                
                {/* Skill Level Progress Bar */}
                <div className="skill-progress mt-3">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <span className="skill-level-text">Proficiency</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-progress-track">
                    <div 
                      className="skill-progress-bar"
                      style={{
                        width: '0%',
                        height: '4px',
                        background: 'linear-gradient(90deg, var(--primary), var(--secondary))',
                        borderRadius: '2px',
                        transition: 'width 1s ease-out'
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional Skills Tags */}
        <div className="animate-on-scroll mt-5">
          <h4 className="text-center mb-4" style={{ color: 'var(--text-secondary)' }}>
            Additional Technologies
          </h4>
          <div className="d-flex flex-wrap justify-content-center gap-3">
            {[
              'Git & GitHub', 'RESTful APIs', 'Responsive Design', 'Agile Development',
              'Problem Solving', 'Data Structures', 'UI/UX Design',
              'Version Control', 'Deployment', 'Performance Optimization'
            ].map((tech, idx) => (
              <span 
                key={idx}
                className="badge"
                style={{
                  background: 'linear-gradient(135deg, var(--primary), var(--primary-dark))',
                  color: 'white',
                  padding: '8px 16px',
                  fontSize: '0.9rem',
                  borderRadius: '20px',
                  fontWeight: '500',
                  animation: `fadeInUp 0.6s ease-out ${idx * 0.05}s both`
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .skill-progress-track {
          width: 100%;
          height: 4px;
          background: rgba(0, 0, 0, 0.1);
          border-radius: 2px;
          overflow: hidden;
        }
        
        .skill-level-text {
          font-size: 0.8rem;
          color: var(--text-muted);
          font-weight: 500;
        }
        
        .skill-percentage {
          font-size: 0.8rem;
          color: var(--primary);
          font-weight: 600;
        }
      `}</style>
    </section>
  );
};

export default Skills;