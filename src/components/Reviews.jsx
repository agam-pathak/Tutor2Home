import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  { name: 'Dr. Anita Sharma', role: 'Parent, Class 10th Student', text: 'Shreyansh has transformed our son\'s approach to Mathematics. His patience and unique methods achieved results that classes couldn\'t provide in years.' },
  { name: 'Sameer Verma', role: 'Student, Class 12th', text: 'The 1-on-1 focus helped me master complex physics concepts for my boards effortlessly. I felt confident for the first time in my academic career.' },
  { name: 'Priya Kapoor', role: 'Parent, Class 8th Student', text: 'A truly professional mentorship. Not just teaching, but building real confidence. I highly recommend Shreyansh for any student struggling with fundamentals.' }
];

const Reviews = () => (
  <section id="testimonials">
    <div className="container">
      <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 80px' }}>
        <span className="section-tag" style={{ background: 'var(--accent)' }}>Success Stories</span>
        <h2 className="section-title">What <span className="text-gradient">Parents & Students</span> Are Saying.</h2>
      </div>

      <div className="curriculum-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px' }}>
        {testimonials.map((review, i) => (
          <motion.div 
            key={i} 
            className="premium-card"
            style={{ display: 'flex', flexDirection: 'column', padding: '50px 40px' }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <div style={{ fontSize: '2.5rem', color: 'var(--accent)', marginBottom: '24px' }}>★★★★★</div>
            <p style={{ fontStyle: 'italic', fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-dark)', marginBottom: '32px', flex: 1 }}>
              "{review.text}"
            </p>
            <div>
              <b style={{ display: 'block', fontSize: '1.2rem', color: 'var(--text-dark)', fontWeight: '800' }}>{review.name}</b>
              <span style={{ fontSize: '0.9rem', color: 'var(--text-main)', fontWeight: '700' }}>{review.role}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Reviews;
