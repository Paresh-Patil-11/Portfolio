import React, { useEffect, useRef, useState } from 'react';

const Contact = () => {
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

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

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can integrate with email service or backend here
  };

  return (
    <section id="contact" className="contact-section" ref={sectionRef}>
      <div className="container">
        <div className="animate-on-scroll">
          <h2 className="contact-title">Let's Work Together</h2>
          <h3 className="contact-subtitle">Ready to bring your ideas to life?</h3>
          <p className="contact-description">
            I'm always excited to collaborate on innovative projects and discuss new opportunities. 
            Let's create something amazing together!
          </p>
        </div>
        
        <div className="row g-5 align-items-center">
          {/* Contact Form */}
          <div className="col-lg-6">
            <div className="contact-form-wrapper animate-on-scroll" style={{ animationDelay: '0.2s' }}>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message" className="form-label">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-control"
                    rows="5"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder="Tell me about your project or just say hello!"
                  ></textarea>
                </div>
                
                <button type="submit" className="contact-form-btn">
                  <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                  </svg>
                  Send Message
                </button>
              </form>
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="col-lg-6">
            <div className="contact-info animate-on-scroll" style={{ animationDelay: '0.4s' }}>
              <div className="contact-info-item">
                <div className="contact-icon">
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <div className="contact-details">
                  <h4>Email Me</h4>
                  <p>pareshpatil.rcpit@gmail.com</p>
                </div>
              </div>
              
              <div className="contact-info-item">
                <div className="contact-icon">
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <div className="contact-details">
                  <h4>Location</h4>
                  <p>Shirpur, Maharashtra, India</p>
                </div>
              </div>
              
              <div className="contact-info-item">
                <div className="contact-icon">
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <div className="contact-details">
                  <h4>Availability</h4>
                  <p>Open for freelance & full-time opportunities</p>
                </div>
              </div>
            </div>
            
            {/* Quick Actions */}
            <div className="quick-actions animate-on-scroll" style={{ animationDelay: '0.6s' }}>
              <h4 className="quick-actions-title">Quick Actions</h4>
              <div className="quick-actions-grid">
                <a 
                  href="https://drive.google.com/file/d/1H4SY4_d3fjT5a7B1TClS4PWZsm8LW72y/view?usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="quick-action-btn"
                >
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                  </svg>
                  Download CV
                </a>
                
                <a 
                  href="https://github.com/Paresh-Patil-11" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="quick-action-btn"
                >
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub Profile
                </a>
                
                <a 
                  href="https://www.linkedin.com/in/pareshpatil11/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="quick-action-btn"
                >
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
                
                <a 
                  href="https://x.com/pareshpatil_11" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="quick-action-btn"
                >
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        .contact-form-wrapper {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border-radius: var(--border-radius-2xl);
          padding: 2rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .form-group {
          margin-bottom: 1.5rem;
        }
        
        .form-label {
          display: block;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
          font-size: 0.9rem;
        }
        
        .form-control {
          width: 100%;
          padding: 0.75rem 1rem;
          border: 2px solid rgba(255, 255, 255, 0.1);
          border-radius: var(--border-radius-lg);
          background: rgba(255, 255, 255, 0.05);
          color: var(--text-primary);
          font-size: 1rem;
          transition: all var(--transition-normal);
          backdrop-filter: blur(10px);
        }
        
        .form-control::placeholder {
          color: var(--text-muted);
        }
        
        .form-control:focus {
          outline: none;
          border-color: var(--primary);
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
          background: rgba(255, 255, 255, 0.1);
        }
        
        .contact-form-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--gradient-primary);
          color: white;
          border: none;
          padding: 0.875rem 2rem;
          border-radius: var(--border-radius-full);
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          transition: all var(--transition-normal);
          width: 100%;
          justify-content: center;
        }
        
        .contact-form-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(59, 130, 246, 0.3);
        }
        
        .contact-info-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2rem;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.05);
          border-radius: var(--border-radius-lg);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .contact-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          background: rgba(59, 130, 246, 0.2);
          border-radius: 50%;
          color: var(--primary);
          flex-shrink: 0;
        }
        
        .contact-details h4 {
          color: var(--text-primary);
          font-size: 1.1rem;
          font-weight: 600;
          margin: 0 0 0.25rem 0;
        }
        
        .contact-details p {
          color: var(--text-secondary);
          margin: 0;
          font-size: 0.95rem;
        }
        
        .quick-actions {
          margin-top: 2rem;
        }
        
        .quick-actions-title {
          color: var(--text-primary);
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }
        
        .quick-actions-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }
        
        .quick-action-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1rem;
          background: rgba(255, 255, 255, 0.05);
          color: var(--text-primary);
          text-decoration: none;
          border-radius: var(--border-radius-lg);
          font-weight: 500;
          font-size: 0.9rem;
          transition: all var(--transition-normal);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          justify-content: center;
        }
        
        .quick-action-btn:hover {
          background: var(--primary);
          transform: translateY(-2px);
          color: white;
          box-shadow: 0 5px 15px rgba(59, 130, 246, 0.3);
        }
        
        @media (max-width: 768px) {
          .quick-actions-grid {
            grid-template-columns: 1fr;
          }
          
          .contact-form-wrapper {
            padding: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;