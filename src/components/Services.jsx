import React from 'react';
import { motion } from 'framer-motion';

const classesData = [
  { icon: '🏫', title: 'Class 6th', desc: 'Developing strong fundamentals and analytical skills.' },
  { icon: '📚', title: 'Class 7th', desc: 'Concept mastery and interactive problem-solving.' },
  { icon: '✍️', title: 'Class 8th', desc: 'Preparing for higher-level academic challenges.' },
  { icon: '🔬', title: 'Class 9th', desc: 'Deep-diving into core science and mathematics.' },
  { icon: '🎓', title: 'Class 10th', desc: 'Strategic Board Exam preparation and excellence.' },
  { icon: '🧮', title: 'Class 11th', desc: 'Advanced stream specialization for higher ed.' },
  { icon: '🚀', title: 'Class 12th', desc: 'Final Board Exam mastery and success planning.' }
];

const Services = () => {
  return (
    <section id="services" className="bg-soft">
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 80px' }}>
          <span className="section-tag" style={{ background: 'var(--primary-dark)', color: 'white' }}>Programs</span>
          <h2 className="section-title">Academic Curriculums</h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-main)' }}>
            Tailored 1-on-1 programs for every grade level, ensuring individual student mastery.
          </p>
        </div>
        
        <div className="curriculum-grid">
          {classesData.map((cls, index) => (
            <motion.div 
              key={index}
              className="premium-card"
              style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div 
                style={{ 
                  fontSize: '2.5rem', 
                  marginBottom: '24px', 
                  background: 'var(--gray-light)', 
                  width: '70px', height: '70px', 
                  display: 'flex', alignItems: 'center', justifyContent: 'center', 
                  borderRadius: '16px' 
                }}
              >
                {cls.icon}
              </div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: '800', color: 'var(--text-dark)', marginBottom: '12px' }}>{cls.title}</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', marginBottom: '24px', flex: '1' }}>{cls.desc}</p>
              <button 
                style={{ 
                  background: 'none', border: 'none', 
                  color: 'var(--primary)', fontWeight: '800', 
                  fontSize: '0.9rem', cursor: 'pointer', textAlign: 'left',
                  display: 'flex', alignItems: 'center', gap: '8px'
                }}
                onClick={() => document.getElementById('booking').scrollIntoView({ behavior: 'smooth' })}
              >
                Join Program →
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
