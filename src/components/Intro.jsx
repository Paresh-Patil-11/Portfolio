import React, { useEffect, useRef } from "react";

const Intro = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      },
      { threshold: 0.1 }
    );

    const animateElements =
      sectionRef.current?.querySelectorAll(".animate-on-scroll");
    animateElements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="intro-section" id="top" ref={sectionRef}>
      <div className="container">
        <div className="row align-items-center justify-content-center min-vh-100 flex-column-reverse flex-lg-row">
          {/* Left: Text Content */}
          <div className="col-lg-7 intro-content">
            <div className="animate-on-scroll">
              <h1 className="intro-title">
                Hi, I'm <span className="text-gradient">Paresh</span>
                <span className="wave" role="img" aria-label="wave">
                  👋
                </span>
              </h1>
            </div>

            <div
              className="animate-on-scroll"
              style={{ animationDelay: "0.2s" }}
            >
              <h2 className="intro-subtitle">
                <span className="typing-text">Full-Stack Web Developer</span>
              </h2>
            </div>

            <div
              className="animate-on-scroll"
              style={{ animationDelay: "0.4s" }}
            >
              <p className="intro-description"  style={{ textAlign: "justify" }}>
                I craft modern, scalable, and user-friendly web applications
                that make a difference. Passionate about creating innovative
                solutions that positively impact people's lives.
              </p>
            </div>

            <div
              className="animate-on-scroll"
              style={{ animationDelay: "0.6s" }}
            >
              <p className="intro-description"  style={{ textAlign: "justify" }}>
                As a dedicated Computer Science student and self-taught
                developer, I'm committed to excellence and staying updated with
                the latest technologies. I specialize in full-stack development
                and have a strong foundation in data structures and algorithms.
              </p>
            </div>

            <div
              className="animate-on-scroll"
              style={{ animationDelay: "0.8s" }}
            >
              <div className="d-flex gap-3 flex-wrap justify-content-center justify-content-lg-start">
                <a
                  href="#projects"
                  className="btn btn-primary btn-lg"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("projects")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0l-4-4m4 4l-4 4"/>
                  </svg>
                  View My Work
                </a>
                <a
                  href="#contact"
                  className="btn btn-outline-light btn-lg"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                  </svg>
                  Get In Touch
                </a>
              </div>
            </div>
          </div>

          {/* Right: Profile Image */}
          <div className="col-lg-5 text-center mb-5 mb-lg-0">
            <div
              className="intro-image-wrapper animate-on-scroll"
              style={{ animationDelay: "1s" }}
            >
              <div className="position-relative d-inline-block">
                <img
                  src="/images/photo.png"
                  alt="Paresh Patil"
                  className="intro-image img-fluid"
                />
                
                {/* Floating elements */}
                <div className="floating-element floating-element-1">
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <div className="floating-element floating-element-2">
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                </div>
                <div className="floating-element floating-element-3">
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        .typing-text {
          position: relative;
          display: inline-block;
        }
        
        .floating-element {
          position: absolute;
          width: 50px;
          height: 50px;
          background: rgba(59, 130, 246, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary);
          animation: float 3s ease-in-out infinite;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(59, 130, 246, 0.2);
        }
        
        .floating-element-1 {
          top: 10%;
          right: -10%;
          animation-delay: 0s;
        }
        
        .floating-element-2 {
          bottom: 20%;
          left: -15%;
          animation-delay: 1s;
        }
        
        .floating-element-3 {
          top: 50%;
          right: -20%;
          animation-delay: 2s;
        }
        
        @media (max-width: 768px) {
          .floating-element {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Intro;
