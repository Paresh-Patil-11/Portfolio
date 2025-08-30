import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer-section">
      <div className="container">
        {/* Main Footer Content */}
        <div className="row g-3 mb-3">
          {/* Brand & Description */}
          <div className="col-lg-6 col-md-12">
            <div className="footer-brand">
              <h3 className="brand-name">Paresh Patil</h3>
              <p className="brand-description">
                Full-Stack Developer passionate about creating innovative web solutions.
              </p>
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="col-lg-6 col-md-12">
            <div className="footer-section-content">
              <h4 className="footer-section-title">Contact</h4>
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
          <div className="row align-items-center">
            <div className="col-md-6 text-md-sart">
              <p className="copyright">
               <b>© {currentYear} Paresh Patil. All rights reserved.</b>
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
          margin-bottom: 1rem;
        }
        
        .brand-name {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          font-weight: 700;
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 0.5rem;
        }
        
        .brand-description {
          color: var(--text-secondary);
          line-height: 1.6;
          font-size: 0.9rem;
        }
        
        .footer-section-content {
          margin-bottom: 1rem;
        }
        
        .footer-section-title {
          color: var(--text-primary);
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 0.75rem;
          position: relative;
        }
        
        .footer-section-title::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 25px;
          height: 2px;
          background: var(--primary);
        }
        
        .footer-contact {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        
        .contact-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-secondary);
          font-size: 0.85rem;
        }
        
        .contact-item svg {
          color: var(--primary);
          flex-shrink: 0;
        }
        
        .footer-bottom {
          padding: 1rem 0;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
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
          color: var(--text-muted);
          font-size: 0.8rem;
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
          background: rgba(59, 130, 246, 0.05);
          animation: float 6s ease-in-out infinite;
        }
        
        .bg-element-1 {
          width: 60px;
          height: 60px;
          top: 20%;
          left: 10%;
          animation-delay: 0s;
        }
        
        .bg-element-2 {
          width: 80px;
          height: 80px;
          top: 60%;
          right: 15%;
          animation-delay: 2s;
        }
        
        .bg-element-3 {
          width: 50px;
          height: 50px;
          bottom: 20%;
          left: 60%;
          animation-delay: 4s;
        }
        
        /* Responsive Design */
        @media (max-width: 768px) {
          .footer-section-content, .footer-brand {
            text-align: center;
            margin-bottom: 0.75rem;
          }
          .footer-bottom .row {
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
          }
          .footer-bottom .row > div {
            text-align: center !important;
            margin-bottom: 0;
          }
          .footer-bottom .row > div:last-child {
            margin-bottom: 0;
            text-align: center !important;
          }
          .brand-name {
            font-size: 1.3rem;
          }
          .brand-description {
            font-size: 0.85rem;
          }
          .footer-section-title {
            font-size: 0.9rem;
          }
          .contact-item {
            font-size: 0.8rem;
          }
          .copyright,
          .footer-tagline {
            font-size: 0.75rem;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
