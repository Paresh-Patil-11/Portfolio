import React, { useEffect, useRef } from 'react';

const educationData = [
  {
    level: 'Bachelor of Technology',
    field: 'Computer Science Engineering',
    place: 'R. C. Patel Institute of Technology, Shirpur',
    years: '2021 - 2025',
    grade: 'CGPA: 6.2/10',
    description: 'Specialized in software engineering, data structures and full-stack development.',
    achievements: [
      'Dean\'s List for Academic Excellence',
      'Led multiple technical projects',
      'Active member of coding club'
    ]
  },
  {
    level: 'Higher Secondary Certificate',
    // field: 'Science (PCM)',
    place: 'R. C. Patel Arts, Commerce & Science College, Shirpur',
    years: '2019 - 2021',
    grade: '81.83%',
    description: 'Focused on Mathematics, Physics, and Chemistry with strong analytical foundation.',
    achievements: [
      'Mathematics Olympiad Participant',
      'Science Exhibition Winner',
      'Academic Excellence Award'
    ]
  },
  {
    level: 'Secondary School Certificate',
    // field: 'General Studies',
    place: 'R. C. Patel Main Building Secondary School, Shirpur',
    years: '2014 - 2019',
    grade: '88.00%',
    description: 'Strong foundation in core subjects with emphasis on mathematics and science.',
    achievements: [
      'School Topper in Mathematics',
      'Student Council Member',
      'Inter-school Competition Winner'
    ]
  },
];

const Education = () => {
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
    <section id="education" className="education-section" ref={sectionRef}>
      <div className="container">
        <div className="animate-on-scroll">
          <h2 className="education-title">Educational Journey</h2>
          <p className="text-center text-muted mb-5" style={{ fontSize: '1.1rem' }}>
            My academic path and achievements that shaped my technical expertise
          </p>
        </div>
        
        <div className="row g-4">
          {educationData.map((edu, idx) => (
            <div className="col-lg-4 col-md-6" key={idx}>
              <div className="education-card animate-on-scroll" style={{ animationDelay: `${idx * 0.2}s` }}>
                {/* Timeline Indicator */}
                <div className="timeline-indicator">
                  <div className="timeline-dot"></div>
                  <div className="timeline-line"></div>
                </div>
                
                <div className="education-content">
                  <div className="education-header">
                    <h3 className="education-level">{edu.level}</h3>
                    {edu.field && (
                      <p className="education-field">{edu.field}</p>
                    )}
                    <div className="education-grade">{edu.grade}</div>
                  </div>
                  
                  <div className="education-details">
                    <p className="education-place">
                      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" className="me-2">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      </svg>
                      {edu.place}
                    </p>
                    
                    <p className="education-years">
                      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" className="me-2">
                        <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
                      </svg>
                      {edu.years}
                    </p>
                  </div>
                  
                  <p className="education-description">{edu.description}</p>
                  
                  {edu.achievements && (
                    <div className="education-achievements">
                      <h5 className="achievements-title">Key Achievements:</h5>
                      <ul className="achievements-list">
                        {edu.achievements.map((achievement, i) => (
                          <li key={i} className="achievement-item">
                            <svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24" className="me-2">
                              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                            </svg>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional Certifications */}
        <div className="animate-on-scroll mt-5">
          <h4 className="text-center mb-4" style={{ color: 'var(--text-secondary)' }}>
            Certifications & Learning
          </h4>
          <div className="row g-3">
            {[
              { name: 'Full Stack Web Development', provider: 'Self-taught', year: '2023' },
              { name: 'Data Structures & Algorithms', provider: 'Online Courses', year: '2023' },
              { name: 'React.js Development', provider: 'Various Platforms', year: '2024' },
              { name: 'Database Management', provider: 'Academic & Practice', year: '2024' }
            ].map((cert, idx) => (
              <div className="col-md-6" key={idx}>
                <div className="certification-item">
                  <div className="cert-icon">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <div className="cert-details">
                    <h6 className="cert-name">{cert.name}</h6>
                    <p className="cert-provider">{cert.provider} • {cert.year}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .timeline-indicator {
          position: absolute;
          left: -15px;
          top: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        
        .timeline-dot {
          width: 12px;
          height: 12px;
          background: var(--primary);
          border-radius: 50%;
          border: 3px solid white;
          box-shadow: 0 0 0 3px var(--primary);
        }
        
        .timeline-line {
          width: 2px;
          height: 100px;
          background: linear-gradient(180deg, var(--primary), transparent);
          margin-top: 5px;
        }
        
        .education-content {
          position: relative;
          z-index: 1;
        }
        
        .education-header {
          margin-bottom: 1rem;
        }
        
        .education-grade {
          display: inline-block;
          background: linear-gradient(135deg, var(--success), #059669);
          color: white;
          font-size: 0.8rem;
          font-weight: 600;
          padding: 0.25rem 0.75rem;
          border-radius: var(--border-radius-full);
          margin-top: 0.5rem;
        }
        
        .education-details {
          margin-bottom: 1rem;
        }
        
        .education-place,
        .education-years {
          display: flex;
          align-items: center;
          font-size: 0.9rem;
          color: var(--text-secondary);
          margin-bottom: 0.5rem;
        }
        
        .education-description {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1rem;
        }
        
        .achievements-title {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }
        
        .achievements-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .achievement-item {
          display: flex;
          align-items: center;
          font-size: 0.85rem;
          color: var(--text-secondary);
          margin-bottom: 0.25rem;
        }
        
        .achievement-item svg {
          color: var(--success);
          flex-shrink: 0;
        }
        
        .certification-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.5);
          border-radius: var(--border-radius-lg);
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: all var(--transition-normal);
        }
        
        .certification-item:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-lg);
        }
        
        .cert-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, var(--primary), var(--primary-dark));
          border-radius: 50%;
          color: white;
          flex-shrink: 0;
        }
        
        .cert-name {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-primary);
          margin: 0;
        }
        
        .cert-provider {
          font-size: 0.8rem;
          color: var(--text-muted);
          margin: 0;
        }
        
        @media (max-width: 768px) {
          .timeline-indicator {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Education;