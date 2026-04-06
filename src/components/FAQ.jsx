import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqData = [
  {
    question: 'What subjects and classes do you cover?',
    answer: 'We offer expert mentorship for all core subjects — Mathematics, Science, English, Social Studies, Hindi — for Classes 6th through 12th (CBSE/ICSE). We also provide specialized coaching for competitive exams like JEE Foundation and Olympiads.'
  },
  {
    question: 'How does the free demo class work?',
    answer: 'Simply fill out the booking form on our website with your details. We\'ll reach out within 24 hours to schedule a complimentary 45-minute session. This allows us to assess the student\'s current level and demonstrate our teaching methodology — zero obligation.'
  },
  {
    question: 'Is the tuition conducted at home or online?',
    answer: 'We offer both! Our core offering is personalized home tuition in your city. However, we also provide high-quality online sessions via Zoom/Google Meet for students who prefer remote learning or are located outside our service area.'
  },
  {
    question: 'What are the fees and payment terms?',
    answer: 'Our fees are competitive and vary based on the class level and number of sessions per week. We offer flexible monthly payment plans. Exact pricing is discussed during the free demo call to ensure a package that fits your needs.'
  },
  {
    question: 'How is Tutor2Home different from coaching centers?',
    answer: 'Unlike large coaching centers where students are just a number, we provide dedicated 1-on-1 mentorship. Every lesson plan is customized to the student\'s strengths, weaknesses, and learning pace. Our founder, Shriyansh, personally oversees each student\'s progress.'
  },
  {
    question: 'Can I change the schedule after enrolling?',
    answer: 'Absolutely. We understand that student schedules can be dynamic. You can reschedule or adjust your session timings with at least 24 hours\' notice at no extra cost.'
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" style={{ background: 'white' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="section-tag">Support</span>
          <h2 className="section-title">Frequently Asked <span className="text-gradient">Questions</span></h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {faqData.map((item, i) => (
            <div
              key={i}
              className="premium-card"
              style={{ padding: 0, cursor: 'pointer', overflow: 'hidden' }}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <div style={{
                padding: '28px 32px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '20px'
              }}>
                <h4 style={{
                  fontSize: '1.1rem',
                  fontWeight: '700',
                  color: openIndex === i ? 'var(--primary)' : 'var(--text-dark)',
                  transition: 'color 0.3s',
                  margin: 0
                }}>
                  {item.question}
                </h4>
                <span style={{
                  fontSize: '1.5rem',
                  color: 'var(--primary)',
                  transition: 'transform 0.3s',
                  transform: openIndex === i ? 'rotate(45deg)' : 'rotate(0deg)',
                  flexShrink: 0
                }}>
                  +
                </span>
              </div>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p style={{
                      padding: '0 32px 28px',
                      fontSize: '1rem',
                      color: 'var(--text-main)',
                      lineHeight: '1.8',
                      margin: 0
                    }}>
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
