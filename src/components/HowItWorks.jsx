import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MessageSquare, Paperclip, Snowflake } from 'lucide-react';

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="reveal" style={{ padding: '60px 20px 60px 20px', background: '#f9fafb' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="section-label-light"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              border: '1px solid #eaecf0',
              padding: '8px 16px',
              borderRadius: '999px',
              fontSize: '14px',
              fontWeight: 500,
              background: '#fff',
              color: '#344054',
              marginBottom: '20px',
              boxShadow: '0 1px 2px rgba(16, 24, 40, 0.05)'
            }}
          >
            <Snowflake size={14} className="text-accent-primary" />
            How It Works
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
              fontWeight: 600,
              color: '#101828',
              fontFamily: 'var(--font-heading)',
              letterSpacing: '-0.02em',
              lineHeight: 1.1
            }}
          >
            How it <span style={{ fontFamily: '"Playfair Display", serif', fontStyle: 'italic', fontWeight: 500 }}>Works</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ color: '#667085', marginTop: '20px', fontSize: '18px', maxWidth: '600px', margin: '20px auto 0' }}
          >
            Easily request designs, collaborate with our team, and get high-quality work fast.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '32px'
        }}>

          {/* Card 1: Create Tasks */}
          <HowItWorksCard
            index={0}
            title="Create Tasks"
            description="Add tasks, set deadlines, and manage work in one place."
            bgGradient="linear-gradient(180deg, #f0fdf4 0%, #ffffff 100%)"
          >
            <div style={{ position: 'relative', marginTop: '30px', height: '220px', overflow: 'hidden', borderRadius: '16px' }}>
              <motion.img
                src="https://cdn.prod.website-files.com/6994265eb4518368b938e54c/699d2f94cfa2f58c842bd86a_ae50f951d29f3ce16c2bd7c693e4a7ef_Frame%2012%20%281%29.svg"
                alt="Create Tasks Interface"
                style={{ width: '100%', height: 'auto', borderRadius: '12px', boxShadow: '0 20px 40px rgba(0,0,0,0.06)' }}
                whileHover={{ y: -15 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              />
              <img
                src="https://cdn.prod.website-files.com/6994265eb4518368b938e54c/699957f9d6e9321e84f2617a_Rectangle%2068.webp"
                alt=""
                style={{ position: 'absolute', bottom: '-40px', left: '50%', transform: 'translateX(-50%)', width: '80%', opacity: 0.6, pointerEvents: 'none' }}
              />
            </div>
          </HowItWorksCard>

          {/* Card 2: Organize & Prioritize */}
          <HowItWorksCard
            index={1}
            title="Organize & Prioritize"
            description="Use boards, lists, and filters to stay focused and work efficiently."
            bgGradient="linear-gradient(180deg, #fdf4ff 0%, #ffffff 100%)"
          >
            <div style={{ position: 'relative', marginTop: '30px', height: '220px', overflow: 'hidden', borderRadius: '16px' }}>
              <motion.img
                src="https://cdn.prod.website-files.com/6994265eb4518368b938e54c/69ad1020f6c11e652496f76b_Frame%201000005003.webp"
                alt="Organize Interface"
                style={{ width: '100%', height: 'auto', borderRadius: '12px', boxShadow: '0 20px 40px rgba(0,0,0,0.06)' }}
                whileHover={{ x: 20 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              />
              <img
                src="https://cdn.prod.website-files.com/6994265eb4518368b938e54c/699957f9d6e9321e84f2617a_Rectangle%2068.webp"
                alt=""
                style={{ position: 'absolute', bottom: '-40px', left: '50%', transform: 'translateX(-50%)', width: '80%', opacity: 0.6, pointerEvents: 'none' }}
              />
            </div>
          </HowItWorksCard>

          {/* Card 3: Track & Complete */}
          <HowItWorksCard 
            index={2}
            title="Track & Complete"
            description="Monitor progress and finish work on time by tracking goals."
            bgGradient="linear-gradient(180deg, #eff6ff 0%, #ffffff 100%)"
          >
            <div style={{ 
              position: 'relative', 
              marginTop: '20px', 
              height: '320px', 
              perspective: '1000px'
            }}>
              {/* Task Overlapping UI Stack */}
              <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                
                {/* Research (Back Card) */}
                <motion.img
                  src="https://cdn.prod.website-files.com/6994265eb4518368b938e54c/699aaa2c590786023ef47308_Frame%205.webp"
                  alt="Research Task Card"
                  style={{
                    position: 'absolute',
                    top: '20px',
                    left: '-40px',
                    width: '350px',
                    height: 'auto',
                    borderRadius: '16px',
                    boxShadow: '0 12px 32px rgba(16, 24, 40, 0.08)',
                    zIndex: 1
                  }}
                  whileHover={{ x: 20, y: -10, rotate: 2 }}
                />

                {/* Web Design (Front Card) */}
                <motion.img
                  src="https://cdn.prod.website-files.com/6994265eb4518368b938e54c/699aaa9e398643351f276d33_Frame%204.webp"
                  alt="Web Design Task Card"
                  style={{
                    position: 'absolute',
                    top: '135px',
                    right: '-40px',
                    width: '350px',
                    height: 'auto',
                    borderRadius: '16px',
                    boxShadow: '0 12px 32px rgba(16, 24, 40, 0.12)',
                    zIndex: 2
                  }}
                  whileHover={{ x: -20, y: 10, rotate: -2 }}
                />
              </div>

              <img 
                src="https://cdn.prod.website-files.com/6994265eb4518368b938e54c/699957f9d6e9321e84f2617a_Rectangle%2068.webp" 
                alt="" 
                style={{ position: 'absolute', bottom: '-80px', left: '50%', transform: 'translateX(-50%)', width: '80%', opacity: 0.6, pointerEvents: 'none' }} 
              />
            </div>
          </HowItWorksCard>

        </div>
      </div>
    </section>
  );
};

const HowItWorksCard = ({ index, title, description, bgGradient, children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 * index }}
      viewport={{ once: true }}
      style={{
        background: '#ffffff',
        borderRadius: '32px',
        padding: '40px',
        border: '1px solid #eaecf0',
        position: 'relative',
        boxShadow: '0 4px 12px rgba(16, 24, 40, 0.03)',
        overflow: 'hidden',
        height: '520px',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      {/* Gradient Background Accent */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: bgGradient,
        opacity: 0.4,
        zIndex: 0
      }}></div>

      <div style={{ position: 'relative', zIndex: 1, flex: 1 }}>
        <h3 style={{
          fontSize: '24px',
          fontWeight: 600,
          color: '#101828',
          fontFamily: 'var(--font-heading)',
          marginBottom: '12px'
        }}>
          {title}
        </h3>
        <p style={{
          color: '#667085',
          fontSize: '16px',
          lineHeight: 1.6,
          maxWidth: '280px'
        }}>
          {description}
        </p>
      </div>

      <div style={{ position: 'relative', zIndex: 1 }}>
        {children}
      </div>
    </motion.div>
  );
};

export default HowItWorks;