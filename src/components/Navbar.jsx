import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ darkMode, toggleDark }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-content">
        <Link to="/" className="logo">
          Tutor<span>to</span>Home
        </Link>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#services">Curriculum</a>
          <a href="#about-founder">About Me</a>
          <a href="#results">Results</a>
          <a href="#testimonials">Reviews</a>

          {/* Dark mode toggle */}
          <button
            onClick={toggleDark}
            aria-label="Toggle dark mode"
            style={{
              background: 'none',
              border: '2px solid var(--gray-mid)',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              fontSize: '1.1rem',
              transition: 'all 0.3s',
            }}
          >
            {darkMode ? '☀️' : '🌙'}
          </button>

          <button
            className="btn-primary"
            style={{ padding: '12px 30px', fontSize: '0.9rem' }}
            onClick={() => document.getElementById('booking').scrollIntoView({ behavior: 'smooth' })}
          >
            Join Now
          </button>
        </div>

        {/* Mobile toggle - hidden on desktop via CSS */}
        <div className="mobile-controls">
          <button
            onClick={toggleDark}
            aria-label="Toggle dark mode"
            style={{ background: 'none', border: 'none', fontSize: '1.3rem', cursor: 'pointer' }}
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <a href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a>
          <a href="#services" onClick={() => setMobileMenuOpen(false)}>Curriculum</a>
          <a href="#about-founder" onClick={() => setMobileMenuOpen(false)}>About Me</a>
          <a href="#results" onClick={() => setMobileMenuOpen(false)}>Results</a>
          <a href="#testimonials" onClick={() => setMobileMenuOpen(false)}>Reviews</a>
          <a href="#blog" onClick={() => setMobileMenuOpen(false)}>Blog</a>
          <a href="#faq" onClick={() => setMobileMenuOpen(false)}>FAQ</a>
          <button
            className="btn-primary"
            style={{ width: '100%', marginTop: '20px' }}
            onClick={() => { setMobileMenuOpen(false); document.getElementById('booking').scrollIntoView({ behavior: 'smooth' }); }}
          >
            Join Now
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
