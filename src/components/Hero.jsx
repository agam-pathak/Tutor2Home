import React from 'react';
import heroImg from '../assets/hero-male.png';
import { motion } from 'framer-motion';

const Hero = () => (
  <section id="home" className="hero-section">
    <div className="container hero-grid">
      <motion.div 
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <span className="section-tag" style={{ background: '#F59E0B', color: 'white' }}>Exclusive Academic Mentorship</span>
        <h1 className="section-title">
          Master Any Subject <br /> with <span className="text-gradient">Personalized</span> Guidance.
        </h1>
        <p className="hero-subtitle">
          Join the exclusive circle of top-performing students. Experience the power of 1-on-1 mentorship designed to unlock your child's highest academic potential through dedicated, personalized support.
        </p>
        <div style={{ display: 'flex', gap: '20px', marginBottom: '50px' }}>
          <button 
            className="btn-primary" 
            onClick={() => document.getElementById('booking').scrollIntoView({ behavior: 'smooth' })}
          >
            Book Free Demo →
          </button>
          <a href="#about-founder" className="btn-secondary" style={{ display: 'inline-flex', alignItems: 'center' }}>Explore Programs</a>
        </div>
        
        <div className="hero-stats">
          <div className="stat"><b>5+</b> <span>Years Exp.</span></div>
          <div className="stat"><b>300+</b> <span>Alumni</span></div>
          <div className="stat"><b>99.9%</b> <span>Satisfied</span></div>
        </div>
      </motion.div>

      <motion.div 
        className="hero-img-container"
        initial={{ opacity: 0, scale: 0.9, x: 40 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
      >
        <img src={heroImg} alt="Academic Excellence" className="hero-img" />
        <div className="floating-stat" style={{ top: '20px', right: '-30px' }}>
          <b>Top 1%</b>
          <span>Verified Educator</span>
        </div>
        <div className="floating-stat" style={{ bottom: '40px', left: '-30px' }}>
          <b>1-on-1</b>
          <span>Dedicated Support</span>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Hero;
