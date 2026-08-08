import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const blogPosts = [
  {
    tag: 'Mathematics',
    title: 'How to Master Class 10th Maths in 3 Months',
    excerpt: 'A proven step-by-step strategy that covers NCERT fundamentals, practice sets, and revision techniques to help students score 90%+ in their board exams.',
    readTime: '5 min read',
    color: '#4F46E5',
    content: [
      { heading: '1. Build a Rock-Solid Foundation (Week 1–4)', body: 'Start by going through every NCERT chapter from the beginning. Don\'t skip the basics — even if you think you know them. Use the examples in the textbook as your first set of practice problems. For each chapter, make a one-page summary of key formulas and theorems. This becomes your revision sheet later.' },
      { heading: '2. Practice with Purpose (Week 5–8)', body: 'Move to the exercises at the end of each NCERT chapter. Solve every single problem — not just the ones your teacher assigned. Time yourself. If a problem takes more than 10 minutes, mark it and move on. Come back to marked problems after finishing the chapter. Use R.D. Sharma or R.S. Aggarwal for additional practice on weak topics.' },
      { heading: '3. Previous Year Papers (Week 9–10)', body: 'Download the last 5 years of CBSE board papers. Solve them under exam conditions — 3 hours, no breaks, no peeking. After each paper, grade yourself honestly. Identify which chapters cost you the most marks. Go back and revise those chapters specifically.' },
      { heading: '4. Revision and Mock Tests (Week 11–12)', body: 'Use your one-page summaries for rapid revision. Take at least 3 full-length mock tests. Focus on time management — many students know the answers but run out of time. Practice writing solutions neatly and showing all steps, as CBSE awards marks for methodology.' },
      { heading: 'Pro Tip from Shriyansh', body: 'The biggest mistake students make is jumping to advanced problems before mastering NCERT. I\'ve seen students go from 60% to 95% simply by completing every NCERT example and exercise thoroughly. The board exam is designed around NCERT — trust the process.' }
    ]
  },
  {
    tag: 'Study Tips',
    title: '5 Habits of Top-Performing Students',
    excerpt: 'Discover the daily routines and mindset shifts that separate average students from academic toppers. It\'s not about studying more — it\'s about studying smart.',
    readTime: '4 min read',
    color: '#F59E0B',
    content: [
      { heading: '1. They Study in Focused Blocks', body: 'Top students don\'t study for 6 hours straight. They use the Pomodoro technique — 45 minutes of intense focus followed by a 10-minute break. During those 45 minutes, phones are off, doors are closed, and distractions are eliminated. Quality always beats quantity.' },
      { heading: '2. They Teach What They Learn', body: 'The moment a topper finishes a chapter, they try to explain it to someone — a sibling, a friend, even an imaginary student. Teaching forces your brain to organize information and reveals gaps in your understanding that passive reading misses entirely.' },
      { heading: '3. They Review Before They Sleep', body: 'Neuroscience shows that your brain consolidates memories during sleep. Spending just 15 minutes before bed reviewing what you studied that day can dramatically improve long-term retention. Keep a small notebook by your bed for this purpose.' },
      { heading: '4. They Don\'t Fear Mistakes', body: 'Average students avoid hard problems. Toppers seek them out. Every wrong answer is a learning opportunity. Keep an "error log" — write down every mistake you make in practice, along with the correct approach. Review this log weekly.' },
      { heading: '5. They Have a System, Not Just Motivation', body: 'Motivation fades. Systems don\'t. Top students have fixed study schedules, organized notes, and clear weekly goals. They don\'t wait to "feel like studying" — they sit down at the same time every day because it\'s part of their routine.' }
    ]
  },
  {
    tag: 'Physics',
    title: 'Understanding Newton\'s Laws: Beyond the Textbook',
    excerpt: 'Real-world examples and visual explanations that make classical mechanics intuitive. Perfect for Class 9-11 students preparing for competitive exams.',
    readTime: '6 min read',
    color: '#10B981',
    content: [
      { heading: 'Why Newton\'s Laws Feel Confusing', body: 'Most textbooks present Newton\'s laws as abstract statements. But these laws describe the world you experience every second. The reason they feel confusing is that we teach them backwards — starting with the formula instead of the observation. Let\'s fix that.' },
      { heading: 'First Law: The Law of Laziness', body: 'Everything in the universe is lazy. Objects at rest want to stay at rest. Objects in motion want to keep moving. This is inertia. When a bus brakes suddenly and you lurch forward — that\'s your body obeying the First Law. Your body was moving and wanted to keep moving even though the bus stopped.' },
      { heading: 'Second Law: F = ma (The Engine of Physics)', body: 'Force equals mass times acceleration. But what does this really mean? It means heavier things are harder to push (more mass = more force needed). It means the same force on a lighter object makes it accelerate faster. Try pushing a shopping cart vs. pushing a car — same force, very different results.' },
      { heading: 'Third Law: The Universe is Fair', body: 'Every action has an equal and opposite reaction. When you push against a wall, the wall pushes back on you with exactly the same force. When a rocket expels gas downward, the gas pushes the rocket upward. The forces are always equal — it\'s the masses that determine who moves more.' },
      { heading: 'How to Solve Newton\'s Law Problems', body: 'Step 1: Draw a Free Body Diagram (FBD) for every object. Step 2: Identify ALL forces acting on each object. Step 3: Choose your coordinate system. Step 4: Apply F=ma in each direction. Step 5: Solve the equations. The FBD is the most important step — if your diagram is wrong, everything after is wrong.' }
    ]
  }
];

const BlogTips = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <>
      <section id="blog">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <span className="section-tag">Knowledge Hub</span>
            <h2 className="section-title">Academic <span className="text-gradient">Insights & Tips</span></h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-main)', maxWidth: '550px', margin: '0 auto' }}>
              Free resources and strategies from Shriyansh to help every student excel.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '30px' }}>
            {blogPosts.map((post, i) => (
              <motion.article
                key={i}
                className="premium-card"
                style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column', cursor: 'pointer' }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                onClick={() => setSelectedPost(post)}
                whileHover={{ y: -8 }}
              >
                <div style={{ height: '6px', background: post.color }} />
                <div style={{ padding: '40px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                    <span style={{ background: `${post.color}15`, color: post.color, padding: '6px 16px', borderRadius: '100px', fontSize: '0.8rem', fontWeight: '800' }}>
                      {post.tag}
                    </span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-main)', fontWeight: '600' }}>{post.readTime}</span>
                  </div>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: '800', color: 'var(--text-dark)', marginBottom: '16px', lineHeight: '1.4' }}>
                    {post.title}
                  </h3>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', lineHeight: '1.7', flex: 1 }}>
                    {post.excerpt}
                  </p>
                  <div style={{ marginTop: '24px' }}>
                    <span style={{ color: post.color, fontWeight: '800', fontSize: '0.9rem' }}>
                      Read Full Article →
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
              background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(8px)',
              zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: '40px 20px'
            }}
            onClick={() => setSelectedPost(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.95 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
              style={{
                background: 'white', borderRadius: '24px', maxWidth: '800px', width: '100%',
                maxHeight: '85vh', overflow: 'auto', position: 'relative'
              }}
            >
              <div style={{ height: '8px', background: selectedPost.color, borderRadius: '24px 24px 0 0' }} />
              
              <div style={{ padding: '50px 60px' }}>
                <button
                  onClick={() => setSelectedPost(null)}
                  style={{
                    position: 'absolute', top: '24px', right: '24px',
                    background: '#F1F5F9', border: 'none', borderRadius: '50%',
                    width: '44px', height: '44px', fontSize: '1.2rem',
                    cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#475569', fontWeight: '700'
                  }}
                >
                  ✕
                </button>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '24px' }}>
                  <span style={{ background: `${selectedPost.color}15`, color: selectedPost.color, padding: '6px 16px', borderRadius: '100px', fontSize: '0.8rem', fontWeight: '800' }}>
                    {selectedPost.tag}
                  </span>
                  <span style={{ fontSize: '0.85rem', color: '#94A3B8', fontWeight: '600' }}>{selectedPost.readTime}</span>
                </div>

                <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '2.2rem', fontWeight: '900', color: '#0F172A', lineHeight: '1.2', marginBottom: '16px', letterSpacing: '-1px' }}>
                  {selectedPost.title}
                </h2>

                <p style={{ fontSize: '0.95rem', color: '#94A3B8', marginBottom: '40px', fontWeight: '600' }}>
                  By <span style={{ color: selectedPost.color, fontWeight: '800' }}>Shriyansh Narayan Pandey</span> · Tutor2Home
                </p>

                {selectedPost.content.map((section, i) => (
                  <div key={i} style={{ marginBottom: '36px' }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#0F172A', marginBottom: '12px' }}>
                      {section.heading}
                    </h3>
                    <p style={{ fontSize: '1.05rem', lineHeight: '1.9', color: '#475569' }}>
                      {section.body}
                    </p>
                  </div>
                ))}

                <div style={{ borderTop: '1px solid #F1F5F9', paddingTop: '40px', marginTop: '20px', textAlign: 'center' }}>
                  <p style={{ fontSize: '1.1rem', color: '#475569', marginBottom: '24px' }}>
                    Want personalized help with this topic?
                  </p>
                  <button
                    className="btn-primary"
                    onClick={() => { setSelectedPost(null); document.getElementById('booking').scrollIntoView({ behavior: 'smooth' }); }}
                  >
                    Book a Free Session →
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default BlogTips;
