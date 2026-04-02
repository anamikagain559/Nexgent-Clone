import React from 'react';
import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';

const Comparison = () => {
  const otherPlatforms = [
    'Interfaces that slow teams down',
    'Limited tasks and workflows',
    'Poor integration tools and platform',
    'Weak collaboration features',
    'Basic reports with little insight',
    'Shallow reporting and insights',
    'Poor Analytics & Reports',
  ];

  const nexgentFeatures = [
    'Interfaces that slow teams down', 
    'Seamless integration with 200+',
    'Real-time progress tracking',
    'Advanced productivity analytics',
    'Faster task completion',
    'productivity and performance',
    'Advanced Analytics & Reports',
  ];

  const iconX = "https://cdn.prod.website-files.com/6994265eb4518368b938e54c/699bd6557cc2bb01d64ab324_Frame%20(21).svg";
  const iconCheck = "https://cdn.prod.website-files.com/6994265eb4518368b938e54c/699bd6555845e951c6fb3fe0_Frame%20(22).svg";
  const vsLineLeft = "https://cdn.prod.website-files.com/6994265eb4518368b938e54c/699be08d8e72069262d7924f_Vector%209%20(1).svg";
  const vsLineRight = "https://cdn.prod.website-files.com/6994265eb4518368b938e54c/699be0ae17851445a78d4d61_Vector%208%20(1).svg";
  const vsBadge = "https://cdn.prod.website-files.com/6994265eb4518368b938e54c/699be119960f4f986635eb85_Frame%201000004987%20(1).svg";

  return (
    <section id="comparison" className="reveal" style={{ padding: '120px 24px', background: '#fafbfc' }}>
      <div className="container" style={{ maxWidth: '1080px', margin: '0 auto', position: 'relative' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              border: '1px solid #eaecf0',
              padding: '6px 16px',
              borderRadius: '999px',
              fontSize: '14px',
              fontWeight: 500,
              background: '#fff',
              color: '#344054',
              marginBottom: '20px',
              boxShadow: '0 1px 2px rgba(16, 24, 40, 0.05)'
            }}
          >
            <Trophy size={14} style={{ color: '#000' }} />
            Comparison
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
              fontWeight: 400,
              color: '#101828',
              fontFamily: 'var(--font-heading)',
              letterSpacing: '-0.02em',
              lineHeight: 1.1
            }}
          >
            Why Choose <em style={{ fontFamily: 'var(--font-accent)', fontStyle: 'italic', fontWeight: 400 }}>Nexgent</em>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ color: '#667085', marginTop: '20px', fontSize: '18px', maxWidth: '500px', margin: '20px auto 0', lineHeight: 1.6 }}
          >
            See how our smart task management platform compares with spreadsheets, basic to-do apps, and tools.
          </motion.p>
        </div>

        {/* Comparison Board */}
        <div style={{ position: 'relative', marginTop: '100px' }}>
          
          {/* Connector Graphic Base */}
          <div style={{
            position: 'absolute',
            top: '-60px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            zIndex: 10,
            width: '180px'
          }}>
            {/* VS Badge */}
            <div style={{ position: 'relative', zIndex: 11 }}>
               <img src={vsBadge} alt="VS" style={{ height: '36px', width: 'auto', display: 'block' }} />
            </div>

            {/* Lines Container underneath the badge */}
            <div style={{
              position: 'absolute',
              top: '18px', /* Adjust so lines tuck seamlessly behind the badge */
              left: 0,
              right: 0,
              display: 'flex',
              justifyContent: 'space-between', /* Pushes lines to extreme left and right to touch card borders */
              zIndex: 10
            }}>
              {/* Gray path branching left */}
              <img 
                src={vsLineLeft} 
                alt="" 
                style={{ display: 'block', height: '40px', width: '90px', objectFit: 'fill', flexShrink: 0 }} 
              />
              
              {/* Green path branching right */}
              <img 
                src={vsLineRight} 
                alt="" 
                style={{ display: 'block', height: '40px', width: '90px', objectFit: 'fill', flexShrink: 0 }} 
              />
            </div>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
            gap: '180px', /* Matches the 180px span of the lines above, so they touch perfectly */
            alignItems: 'stretch',
            position: 'relative',
            zIndex: 1
          }}>

            {/* LEFT CARD (Other Platforms) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{
                background: '#ffffff',
                borderRadius: '32px',
                padding: '16px',
                border: '1px solid #f0f0f0',
                boxShadow: '0 12px 32px rgba(0,0,0,0.02)',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div style={{
                background: '#f6f8fb',
                height: '260px',
                borderRadius: '24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '40px'
              }}>
                <h3 style={{
                  fontSize: '32px',
                  fontWeight: 400,
                  color: '#0f0f0f',
                  fontFamily: 'var(--font-heading)'
                }}>
                  Other Platforms
                </h3>
              </div>

              <div style={{ padding: '0 24px 32px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '26px' }}>
                  {otherPlatforms.map((f, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                      <img src={iconX} alt="" style={{ width: '24px', height: '24px', flexShrink: 0 }} />
                      <span style={{ fontSize: '15px', color: '#111827', fontWeight: 400 }}>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* RIGHT CARD (Nexgent) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{
                background: '#ffffff',
                borderRadius: '32px',
                padding: '16px',
                border: '2px solid rgba(28, 175, 97, 0.25)',
                boxShadow: '0 16px 48px rgba(28, 175, 97, 0.08)',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div style={{
                background: '#041d0e',
                height: '260px',
                borderRadius: '24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '40px',
                position: 'relative',
                overflow: 'hidden'
              }}>
                {/* Green Glow Inner Container */}
                <div style={{
                  position: 'absolute',
                  top: '-30%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '320px',
                  height: '320px',
                  background: 'radial-gradient(circle, rgba(28,175,97,0.45) 0%, rgba(4,29,14,0) 70%)',
                  pointerEvents: 'none'
                }}></div>
                {/* Left/Right Streaks */}
                <div style={{
                  position: 'absolute', top: '-10%', left: '15%', width: '1px', height: '120%', background: 'linear-gradient(to bottom, rgba(28,175,97,0.4), transparent)', transform: 'rotate(25deg)'
                }}></div>
                <div style={{
                  position: 'absolute', top: '-10%', right: '15%', width: '1px', height: '120%', background: 'linear-gradient(to bottom, rgba(28,175,97,0.4), transparent)', transform: 'rotate(-25deg)'
                }}></div>

                <div style={{ position: 'relative', zIndex: 2, display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <img 
                    src="https://cdn.prod.website-files.com/6994265eb4518368b938e54c/699aa7b4b9254eb870446a11_Delco_Products_logo%201%20(2).png" 
                    alt="Nexgent Logo" 
                    style={{ width: '36px', height: '36px', objectFit: 'contain' }} 
                  />
                  <span style={{ fontSize: '40px', color: '#fff', fontWeight: 500, fontFamily: 'var(--font-heading)', letterSpacing: '-0.5px' }}>
                    Nexgent
                  </span>
                </div>
              </div>

              <div style={{ padding: '0 24px 32px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '26px' }}>
                  {nexgentFeatures.map((f, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                      <img src={iconCheck} alt="" style={{ width: '24px', height: '24px', flexShrink: 0 }} />
                      <span style={{ fontSize: '15px', color: '#111827', fontWeight: 400 }}>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Comparison;
