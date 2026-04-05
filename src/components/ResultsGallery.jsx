import React from 'react';
import { motion } from 'framer-motion';

const achievements = [
  { year: '2021', title: 'First Batch of Toppers', desc: '8 students scored 95%+ in Class 10 Board Exams under Shreyansh\'s mentorship.', stat: '95%+', label: 'Avg Score' },
  { year: '2022', title: 'Expanded to Senior Secondary', desc: 'Launched Class 11-12 programs with a focus on JEE Foundation and Board mastery.', stat: '50+', label: 'Students' },
  { year: '2023', title: 'Record-Breaking Results', desc: '3 students qualified for prestigious Olympiad rounds. 100% pass rate maintained.', stat: '100%', label: 'Pass Rate' },
  { year: '2024', title: 'Community Trust', desc: 'Over 100 families served. Received "Most Trusted Tutor" recognition in the local community.', stat: '100+', label: 'Families' },
];

const ResultsGallery = () => (
  <section id="results" style={{ background: 'var(--dark)', color: 'white', position: 'relative', overflow: 'hidden' }}>
    {/* Background glow */}
    <div style={{ position: 'absolute', top: '-200px', left: '50%', transform: 'translateX(-50%)', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(79,70,229,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />

    <div className="container">
      <div style={{ textAlign: 'center', marginBottom: '80px' }}>
        <span className="section-tag" style={{ background: 'var(--accent)' }}>Track Record</span>
        <h2 className="section-title" style={{ color: 'white' }}>
          A Legacy of <span style={{ color: 'var(--accent)' }}>Academic Excellence</span>
        </h2>
        <p style={{ fontSize: '1.15rem', opacity: 0.7, maxWidth: '600px', margin: '0 auto' }}>
          Real milestones from real students. Here's how we've been making a difference, year after year.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '30px' }}>
        {achievements.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '20px',
              padding: '40px',
              position: 'relative',
              overflow: 'hidden',
              backdropFilter: 'blur(10px)',
            }}
          >
            <span style={{ color: 'var(--accent)', fontWeight: '900', fontSize: '0.85rem', letterSpacing: '2px' }}>{item.year}</span>
            <h3 style={{ fontSize: '1.3rem', fontWeight: '800', margin: '16px 0 12px', color: 'white' }}>{item.title}</h3>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.7', opacity: 0.7, marginBottom: '24px' }}>{item.desc}</p>
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '20px', display: 'flex', alignItems: 'baseline', gap: '8px' }}>
              <b style={{ fontSize: '2rem', color: 'var(--primary)', fontFamily: 'Outfit' }}>{item.stat}</b>
              <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', opacity: 0.5 }}>{item.label}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ResultsGallery;
