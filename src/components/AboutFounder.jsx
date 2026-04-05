import React from 'react';
import { motion } from 'framer-motion';
import founderPhoto from '../assets/myphoto.png';

const AboutFounder = () => {
  return (
    <section id="about-founder">
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'minmax(400px, 1fr) 1.2fr', gap: '80px', alignItems: 'center' }}>
        
        <motion.div 
          className="hero-img-container" 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img 
            src={founderPhoto} 
            alt="Shreyansh Narayan Pandey" 
            className="hero-img"
            style={{ 
              objectFit: 'cover', 
              objectPosition: 'top', 
              clipPath: 'inset(0 0 32px 0)',
              marginBottom: '-32px'
            }} 
          />
          <div className="floating-stat" style={{ top: '40px', left: '-40px' }}>
            <b style={{ color: 'var(--accent)' }}>500+</b>
            <span>Success Stories</span>
          </div>
          <div className="floating-stat" style={{ bottom: '20px', right: '-40px' }}>
            <b style={{ color: 'var(--primary)' }}>Expertise</b>
            <span>IIT-JEE / Boards</span>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="section-tag">Lead Mentor</span>
          <h2 className="section-title">Meet <span className="text-gradient">Shreyansh</span> <br /> Narayan Pandey</h2>
          
          <p style={{ fontSize: '1.2rem', color: 'var(--text-dark)', fontWeight: '700', marginBottom: '24px', lineHeight: '1.6' }}>
            Every student has hidden brilliance waiting for the right key. I'm here to provide that key.
          </p>
          
          <p style={{ fontSize: '1.05rem', color: 'var(--text-main)', marginBottom: '32px', lineHeight: '1.8' }}>
            With over 5 years of experience in high-end academic coaching, I've developed a personalized methodology that goes beyond simple textbook learning. I focus on building cognitive confidence, critical thinking, and a mastery of fundamentals that lasts a lifetime. 
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '40px' }}>
            <div className="premium-card" style={{ padding: '24px' }}>
              <b style={{ color: 'var(--primary)', display: 'block', fontSize: '1.1rem', marginBottom: '8px' }}>Individual Focus</b>
              <p style={{ fontSize: '0.85rem' }}>Tailored lesson plans for the unique learning style of every student.</p>
            </div>
            <div className="premium-card" style={{ padding: '24px' }}>
              <b style={{ color: 'var(--accent)', display: 'block', fontSize: '1.1rem', marginBottom: '8px' }}>Concept Mastery</b>
              <p style={{ fontSize: '0.85rem' }}>Focus on deep understanding rather than rote memorization.</p>
            </div>
          </div>

          <button className="btn-primary" onClick={() => document.getElementById('booking').scrollIntoView({ behavior: 'smooth' })}>
            Connect with Me →
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutFounder;
