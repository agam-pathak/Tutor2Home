import React from 'react';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '60px', marginBottom: '80px' }}>
        <div>
          <div className="logo" style={{ color: 'white', marginBottom: '20px', fontSize: '2rem' }}>
            Tutor<span style={{ color: 'var(--accent)' }}>to</span>Home
          </div>
          <p style={{ opacity: 0.6, lineHeight: '1.8', maxWidth: '360px', fontSize: '1rem' }}>
            Premium 1-on-1 home tuition empowering students from Class 6th to 12th with personalized academic mentorship.
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--accent)', marginBottom: '8px' }}>Navigate</h4>
          <a href="#home" style={{ color: 'white', textDecoration: 'none', opacity: 0.6, fontSize: '0.95rem' }}>Home</a>
          <a href="#services" style={{ color: 'white', textDecoration: 'none', opacity: 0.6, fontSize: '0.95rem' }}>Programs</a>
          <a href="#about-founder" style={{ color: 'white', textDecoration: 'none', opacity: 0.6, fontSize: '0.95rem' }}>About Shreyansh</a>
          <a href="#testimonials" style={{ color: 'white', textDecoration: 'none', opacity: 0.6, fontSize: '0.95rem' }}>Reviews</a>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--accent)', marginBottom: '8px' }}>Contact</h4>
          <span style={{ opacity: 0.6, fontSize: '0.95rem' }}>📞 +91-63921 99108</span>
          <span style={{ opacity: 0.6, fontSize: '0.85rem' }}>📧 shriyanshnarayanpandey0214@gmail.com</span>
        </div>
      </div>
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '30px', textAlign: 'center', opacity: 0.4, fontSize: '0.9rem' }}>
        © {new Date().getFullYear()} TutortoHome. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
