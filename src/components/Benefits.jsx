import { motion } from "framer-motion";
import React from 'react';
import { Zap, Brain, BarChart, Clock, Users, Database } from 'lucide-react';

const Benefits = () => {

  const benefits = [
    { icon: <Zap />, title: 'Get More Done, Faster', desc: 'Focus on the right tasks with clear priorities and real-time progress for your whole team.' },
    { icon: <Brain />, title: 'Reduce Mental Overload', desc: 'Everything is organized in one place, so your team doesn\'t have to remember every detail.' },
    { icon: <Clock />, title: 'Stay on Top of Deadlines', desc: 'Smart reminders and live status updates keep work moving on time and budget.' },
    { icon: <Users />, title: 'Seamless Team Sync', desc: 'Collaborate smoothly with comments, mentions, and shared task ownership in real time.' },
    { icon: <Database />, title: 'Adapt to Any Workflow', desc: 'Capture all your project files and assets in one secure place with easy access control.' },
    { icon: <BarChart />, title: 'Make Smarter Decisions', desc: 'Track performance and productivity with clear insights and powerful visual analytics.' },
  ];

  return (
    <section id="benefits" style={{ padding: '120px 24px', background: '#f6f8fb' }}>
      <div className="container" style={{ maxWidth: '1240px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              border: '1px solid #e6e6e6',
              padding: '8px 20px',
              borderRadius: '34px',
              fontSize: '16px',
              fontWeight: 500,
              background: '#fff',
              color: '#0f0f0f',
              marginBottom: '20px',
              fontFamily: 'var(--font-heading)'
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.6 }}>
              <rect x="3" y="3" width="7" height="7"></rect>
              <rect x="14" y="3" width="7" height="7"></rect>
              <rect x="14" y="14" width="7" height="7"></rect>
              <rect x="3" y="14" width="7" height="7"></rect>
            </svg>
            Benefits
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{ 
              fontSize: '56px', 
              fontWeight: 400,
              fontFamily: 'var(--font-heading)',
              color: '#0f0f0f',
              letterSpacing: '-1.12px',
              lineHeight: 1.1,
              marginBottom: '16px'
            }}
          >
            Why Choose Us To <br />
            <em style={{ fontFamily: 'var(--font-accent)', fontStyle: 'italic', fontWeight: 400 }}>Grow Smarter</em>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ 
              color: '#5c5c5c', 
              fontSize: '18px',
              lineHeight: '152%',
              fontFamily: 'var(--font-body)',
              maxWidth: '600px',
              margin: '0 auto' 
            }}
          >
            Unlock unmatched growth, efficiency, and innovation with our powerful Task solutions.
          </motion.p>
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px'
        }}>

          {benefits.map((b, i) => (

            <motion.div
              key={i}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: "easeOut"
              }}
              style={{
                background: '#ffffff',
                textAlign: 'left',
                padding: '40px 36px',
                borderRadius: '32px',
                border: '1px solid rgba(0, 0, 0, 0.02)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              {/* ICON BLOCK (Matching Reference 'Green Square') */}
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '8px',
                background: '#1caf61',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                marginBottom: '32px'
              }}>
                {React.cloneElement(b.icon, { size: 28, strokeWidth: 2 })}
              </div>

              {/* TITLE */}
              <h4 style={{
                fontSize: '24px',
                fontWeight: 500,
                color: '#0f0f0f',
                fontFamily: 'var(--font-heading)',
                marginBottom: '16px',
                lineHeight: 1.3
              }}>
                {b.title}
              </h4>

              {/* DESC */}
              <p style={{
                color: '#5c5c5c',
                fontSize: '18px',
                lineHeight: '152%',
                fontFamily: 'var(--font-body)',
                margin: 0
              }}>
                {b.desc}
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Benefits;