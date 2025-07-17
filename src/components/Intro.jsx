import React from 'react';

const Intro = () => (
  <section className="intro-section py-5" id="top">
    <div className="container">
      <div className="row align-items-center justify-content-center flex-column-reverse flex-md-row">
        {/* Left: Text */}
        <div className="col-md-6 text-center text-md-start" data-aos="fade-right">
          <h1 className="display-3 fw-bold mb-2" style={{ color: '#2563eb', fontFamily: 'Montserrat, sans-serif', letterSpacing: '-1px' }}>I'm Paresh</h1>
          <h2 className="mb-3" style={{ color: '#f59e42', fontWeight: 600, fontSize: '2rem', fontFamily: 'Montserrat, sans-serif' }}>A Fullstack Web Developer</h2>
          <p className="lead mb-4" style={{ color: '#64748b', fontSize: '1.15rem', maxWidth: 600 }}>
            I build modern, scalable, and user-friendly web applications. Welcome to my professional portfolio!
          </p>
          <p className="about-me" style={{ maxWidth: 650, textAlign: 'justify', color: '#1a202c', fontSize: '1.1rem', lineHeight: '1.7' }}>
            I'm a passionate and self-taught Computer Science student aspiring to become a full-stack developer. Dedicated to creating innovative solutions that positively impact people's lives. Skilled in web development, practicing Data Structures. Committed to excellence, staying updated with the latest technologies. Seeking opportunities to contribute and make a lasting impact in the field of software engineering.
          </p>
        </div>
        {/* Right: Photo */}
        <div className="col-md-6 text-center mb-4 mb-md-0" data-aos="zoom-in" data-aos-delay="100">
          <img
            src="/images/Paresh_Pic_1.png"
            alt="profile-pic"
            width="260"
            style={{ borderRadius: '1.5rem', boxShadow: '0 8px 32px rgba(37,99,235,0.10)', background: '#fff' }}
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  </section>
);

export default Intro; 