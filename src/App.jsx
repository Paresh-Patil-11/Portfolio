import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import AOS from 'aos';

import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './theme.css';
import './ProjectSection.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 100,
    });

    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Loading Screen Component
  const LoadingScreen = () => (
    <div className={`loading-overlay ${!loading ? 'fade-out' : ''}`}>
      <div className="loading-content">
        <div className="loading-spinner"></div>
        <h2 className="loading-text">Paresh Patil</h2>
        <p className="loading-subtitle">Full-Stack Developer</p>
      </div>
    </div>
  );

  return (
    <div className="App">
      {loading && <LoadingScreen />}
      
      <div className={`main-content ${loading ? 'hidden' : 'visible'}`}>
        <Navbar />
        <main>
          <Intro />
          <Skills />
          <Projects />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
      
      {/* Scroll to Top Button */}
      <ScrollToTopButton />
      
      <style>{`
        .loading-overlay.fade-out {
          opacity: 0;
          pointer-events: none;
        }
        
        .main-content {
          transition: opacity 0.5s ease-out;
        }
        
        .main-content.hidden {
          opacity: 0;
        }
        
        .main-content.visible {
          opacity: 1;
        }
      `}</style>
    </div>
  );
}

// Scroll to Top Button Component
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      className={`scroll-to-top ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"/>
      </svg>
      
      <style>{`
        .scroll-to-top {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, var(--primary), var(--primary-dark));
          color: white;
          border: none;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: var(--shadow-lg);
          transition: all var(--transition-normal);
          opacity: 0;
          visibility: hidden;
          transform: translateY(20px);
          z-index: 1000;
        }
        
        .scroll-to-top.visible {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }
        
        .scroll-to-top:hover {
          transform: translateY(-3px) scale(1.1);
          box-shadow: var(--shadow-xl);
        }
        
        @media (max-width: 768px) {
          .scroll-to-top {
            bottom: 1rem;
            right: 1rem;
            width: 45px;
            height: 45px;
          }
        }
      `}</style>
    </button>
  );
};

export default App;