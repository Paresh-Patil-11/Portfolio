import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/Paresh-Patil-11',
      icon: (
        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/pareshpatil11/',
      icon: (
        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    {
      name: 'Twitter',
      url: 'https://x.com/pareshpatil_11',
      icon: (
        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      )
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/paresh_.11/?r=nametag',
      icon: (
        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    }
  ];

  return (
    <footer className="footer-section">
      <div className="container">
        {/* Main Footer Content */}
        <div className="row g-4 mb-4">
          {/* Brand & Description */}
          <div className="col-lg-4 col-md-6">
            <div className="footer-brand">
              <h3 className="brand-name">Paresh Patil</h3>
              <p className="brand-description">
                Full-Stack Developer passionate about creating innovative web solutions 
                that make a difference. Always learning, always building.
              </p>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="col-lg-2 col-md-6">
            <div className="footer-section-content">
              <h4 className="footer-section-title">Quick Links</h4>
              <ul className="footer-links">
                <li><a href="#top">Home</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#education">Education</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
          </div>
          
          {/* Services */}
          <div className="col-lg-3 col-md-6">
            <div className="footer-section-content">
              <h4 className="footer-section-title">Services</h4>
              <ul className="footer-links">
                <li>Web Development</li>
                <li>Frontend Development</li>
                <li>Backend Development</li>
                <li>Database Design</li>
                <li>API Development</li>
              </ul>
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="col-lg-3 col-md-6">
            <div className="footer-section-content">
              <h4 className="footer-section-title">Get In Touch</h4>
              <div className="footer-contact">
                <div className="contact-item">
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  <span>pareshpatil.rcpit@gmail.com</span>
                </div>
                <div className="contact-item">
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  <span>Shirpur, Maharashtra, India</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="footer-bottom">
          <div className="row align-items-start">
            <div className="col-md-6 text-md-sart">
              <p className="copyright">
               <b>© {currentYear} Paresh Patil. All rights reserved.</b>
              </p>
            </div>
            <div className="col-md-6 text-md-end">
              <p className="footer-tagline">
                <b>Built with 🤍 Paresh using React & Modern Web Technologies</b>
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Animated Background Elements */}
      <div className="footer-bg-elements">
        <div className="bg-element bg-element-1"></div>
        <div className="bg-element bg-element-2"></div>
        <div className="bg-element bg-element-3"></div>
      </div>
      
      <style>{`
        .footer-brand {
          margin-bottom: 1.5rem;
        }
        
        .brand-name {
          font-family: var(--font-heading);
          font-size: 1.8rem;
          font-weight: 700;
          background: linear-gradient(135deg, var(--primary-light), white);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 1rem;
        }
        
        .brand-description {
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.6;
          font-size: 0.95rem;
        }
        
        .footer-section-content {
          margin-bottom: 1.5rem;
        }
        
        .footer-section-title {
          color: white;
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 1rem;
          position: relative;
        }
        
        .footer-section-title::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 30px;
          height: 2px;
          background: var(--primary-light);
        }
        
        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        
        .footer-links li {
          margin-bottom: 0;
        }
        
        .footer-links a,
        .footer-links li {
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          font-size: 0.9rem;
          transition: color var(--transition-normal);
        }
        
        .footer-links a:hover {
          color: var(--primary-light);
        }
        
        .footer-contact {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        
        .contact-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.9rem;
        }
        
        .contact-item svg {
          color: var(--primary-light);
          flex-shrink: 0;
        }
        
        .footer-bottom {
          padding: 1.5rem 0;
        }
        
        .footer-bottom .row {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
        }
        .footer-bottom .row > div {
          text-align: left;
          margin-bottom: 0;
        }
        .footer-bottom .row > div:last-child {
          text-align: right;
        }
        
        .copyright,
        .footer-tagline {
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.9rem;
          margin: 0;
        }
        
        .footer-tagline {
          font-style: italic;
        }
        
        .footer-bg-elements {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          overflow: hidden;
          pointer-events: none;
        }
        
        .bg-element {
          position: absolute;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
          animation: float 6s ease-in-out infinite;
        }
        
        .bg-element-1 {
          width: 100px;
          height: 100px;
          top: 20%;
          left: 10%;
          animation-delay: 0s;
        }
        
        .bg-element-2 {
          width: 150px;
          height: 150px;
          top: 60%;
          right: 15%;
          animation-delay: 2s;
        }
        
        .bg-element-3 {
          width: 80px;
          height: 80px;
          bottom: 20%;
          left: 60%;
          animation-delay: 4s;
        }
        
        /* Responsive Design */
        @media (max-width: 992px) {
          .row.g-4.mb-4 {
            flex-direction: column !important;
            display: flex !important;
            gap: 2rem !important;
          }
          .footer-section-content, .footer-brand {
            text-align: center;
            margin-bottom: 1.5rem;
          }
          .footer-links {
            align-items: center;
          }
        }
        @media (max-width: 768px) {
          .row.g-4.mb-4 {
            flex-direction: column !important;
            display: flex !important;
            gap: 1.5rem !important;
          }
          .footer-section-content, .footer-brand {
            text-align: center;
            margin-bottom: 1.2rem;
          }
          .footer-links {
            align-items: center;
          }
          .footer-bottom .row {
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
          .footer-bottom .row > div {
            text-align: center !important;
            margin-bottom: 0.5rem;
          }
          .footer-bottom .row > div:last-child {
            margin-bottom: 0;
            text-align: center !important;
          }
        }
        @media (max-width: 576px) {
          .row.g-4.mb-4 {
            gap: 1rem !important;
          }
          .footer-section-content, .footer-brand {
            margin-bottom: 1rem;
          }
          .footer-links {
            align-items: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;