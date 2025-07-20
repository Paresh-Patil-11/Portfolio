import React, { useEffect, useRef } from 'react';

const Intro = () => {
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
    <section className="intro-section" id="top" ref={sectionRef}>
      <div className="container">
        <div className="row align-items-center justify-content-center flex-column-reverse flex-lg-row">
          {/* Left: Text Content */}
          <div className="col-lg-6 intro-content">
            <div className="animate-on-scroll">
              <h1 className="intro-title">
                Hi, I'm <span className="text-black">Paresh</span>
                <span className="wave" role="img" aria-label="wave">👋</span>
              </h1>
            </div>

            <div className="animate-on-scroll" style={{ animationDelay: '0.2s' }}>
              <h2 className="intro-subtitle">
                Full-Stack Web Developer
              </h2>
            </div>

            <div className="animate-on-scroll" style={{ animationDelay: '0.4s' }}>
              <p className="intro-description">
                I craft modern, scalable, and user-friendly web applications that make a difference. 
                Passionate about creating innovative solutions that positively impact people's lives.
              </p>
            </div>

            <div className="animate-on-scroll" style={{ animationDelay: '0.6s' }}>
              <p className="intro-description">
                As a dedicated Computer Science student and self-taught developer, I'm committed to 
                excellence and staying updated with the latest technologies. I specialize in full-stack 
                development and have a strong foundation in data structures and algorithms.
              </p>
            </div>

            <div className="animate-on-scroll" style={{ animationDelay: '0.8s' }}>
              <div className="d-flex gap-3 flex-wrap">
                <a 
                  href="#projects" 
                  className="btn btn-primary btn-lg"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  View My Work
                </a>
                <a 
                  href="#contact" 
                  className="btn btn-outline-light btn-lg"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Get In Touch
                </a>
              </div>
            </div>
          </div>

          {/* Right: Profile Image */}
          <div className="col-lg-6 text-center mb-5 mb-lg-0">
            <div className="intro-image-wrapper animate-on-scroll" style={{ animationDelay: '1s' }}>
              <div className="position-relative d-inline-block">
                <img
                  src="/images/Paresh_Pic_1.png"
                  alt="Paresh Patil - Full Stack Developer"
                  className="intro-image img-fluid"
                />
                <div className="position-absolute top-0 start-0 w-100 h-100 rounded-circle" 
                     style={{
                       background: 'linear-gradient(45deg, rgba(99, 102, 241, 0.2), rgba(236, 72, 153, 0.2))',
                       animation: 'pulse 2s infinite'
                     }}>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
