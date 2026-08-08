import React, { useState } from 'react';
import { motion } from 'framer-motion';

const BookingForm = () => {
  const [formData, setFormData] = useState({ parentName: '', studentClass: '', phoneNumber: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/xzdkyprz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ parentName: '', studentClass: '', phoneNumber: '', message: '' });
      } else {
        alert('Something went wrong. Please try again or call us directly.');
      }
    } catch (error) {
      alert('Network error. Please check your connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <section id="booking" style={{ background: 'var(--bg-soft)' }}>
      <div className="container">
        <div className="booking-hub-grid">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-tag" style={{ background: '#F59E0B' }}>Join the Journey</span>
            <h2 className="section-title">Schedule Your <span className="text-gradient">Complimentary</span> <br /> Assessment.</h2>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-main)', marginBottom: '50px', lineHeight: '1.8' }}>
              We'll start with a personalized session to understand your child's current academic status and identify their unique potential. No commitment required.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
              <a 
                href="tel:+916392199108"
                className="premium-card" 
                style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '30px', textDecoration: 'none', transition: 'var(--transition)' }}
              >
                <div style={{ fontSize: '2.4rem', color: 'var(--primary)' }}>📞</div>
                <div>
                  <b style={{ color: 'var(--text-dark)', display: 'block', fontSize: '1.2rem' }}>Direct Line</b>
                  <span style={{ fontSize: '1rem', color: 'var(--text-main)' }}>+91-63921 99108</span>
                </div>
              </a>
              <a 
                href="mailto:shriyanshnarayanpandey0214@gmail.com"
                className="premium-card" 
                style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '30px', textDecoration: 'none', transition: 'var(--transition)' }}
              >
                <div style={{ fontSize: '2.4rem', color: 'var(--accent)' }}>📧</div>
                <div>
                  <b style={{ color: 'var(--text-dark)', display: 'block', fontSize: '1.2rem' }}>Official Support</b>
                  <span style={{ fontSize: '1rem', color: 'var(--text-main)' }}>shriyansh...gmail.com</span>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div 
            className="premium-card"
            style={{ padding: '60px', background: 'white' }}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {isSubmitted ? (
              <div style={{ textAlign: 'center', padding: '60px 0' }}>
                <div style={{ fontSize: '5rem', marginBottom: '30px' }}>🎓</div>
                <h3 className="section-title" style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Request Success!</h3>
                <p style={{ fontSize: '1.2rem', color: 'var(--text-main)' }}>Our team will connect with you via WhatsApp within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                <div className="form-split-grid">
                  <div>
                    <label style={{ display: 'block', fontWeight: '800', marginBottom: '12px', color: 'var(--text-dark)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Parent Name</label>
                    <input name="parentName" type="text" placeholder="e.g., Rajesh Sharma" required className="input-modern" value={formData.parentName} onChange={handleChange} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontWeight: '800', marginBottom: '12px', color: 'var(--text-dark)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Student Class</label>
                    <select name="studentClass" required className="input-modern" value={formData.studentClass} onChange={handleChange}>
                      <option value="">Select Class</option>
                      {['6th', '7th', '8th', '9th', '10th', '11th', '12th'].map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>
                </div>
                
                <div>
                  <label style={{ display: 'block', fontWeight: '800', marginBottom: '12px', color: 'var(--text-dark)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>WhatsApp Number</label>
                  <input name="phoneNumber" type="tel" placeholder="91 XXXXX XXXXX" required className="input-modern" value={formData.phoneNumber} onChange={handleChange} />
                </div>

                <div>
                  <label style={{ display: 'block', fontWeight: '800', marginBottom: '12px', color: 'var(--text-dark)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Current Challenges</label>
                  <textarea name="message" placeholder="Optional: Any specific academic help needed?" rows="4" className="input-modern" style={{ resize: 'none' }} value={formData.message} onChange={handleChange}></textarea>
                </div>

                <button 
                  type="submit" 
                  className="btn-primary" 
                  disabled={isSubmitting}
                  style={{ 
                    padding: '24px', 
                    fontSize: '1.2rem', 
                    justifyContent: 'center',
                    opacity: isSubmitting ? 0.7 : 1,
                    cursor: isSubmitting ? 'not-allowed' : 'pointer'
                  }}
                >
                  {isSubmitting ? 'Submitting...' : 'Secure Your Free Demo →'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
