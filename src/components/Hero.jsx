import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
const Hero = () => {
  return (
    <section id="home" style={{ 
      position: 'relative', 
      paddingTop: '160px', 
      paddingBottom: '0', 
      overflow: 'hidden', 
      backgroundColor: '#0a1d12',
      backgroundImage: 'url("https://cdn.prod.website-files.com/6994265eb4518368b938e54c/699bea6e310ee7e76ff9c1c5_Frame%209%20(1)-p-2000.webp")',
      backgroundSize: 'cover',
      backgroundPosition: 'top center',
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center' 
    }}>
      <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center', maxWidth: '900px' }}>
        
        {/* Badge */}
        <div style={{ 
          display: 'inline-flex', alignItems: 'center', gap: '8px', 
          padding: '10px 20px', borderRadius: '42px', 
          border: '1px solid #e6e6e6', background: 'transparent', 
          color: '#fff', fontSize: '14px', fontWeight: 500, 
          marginBottom: '36px', fontFamily: 'var(--font-body)' 
        }}>
          <span style={{ display: 'flex', gap: '2px' }}>
            {'★★★★★'.split('').map((s, i) => (
              <span key={i} style={{ color: '#facc15', fontSize: '14px' }}>★</span>
            ))}
          </span>
          10k Reviews Rated 4.9 of 5
        </div>

        {/* Main Heading */}
        <h1 style={{ 
          fontFamily: 'var(--font-heading)', 
          fontSize: '72px', 
          fontWeight: 400, 
          lineHeight: '120%', 
          marginBottom: '24px', 
          color: '#ffffff', 
          letterSpacing: '-1.44px' 
        }}>
          Take Control of <em style={{ fontFamily: 'var(--font-accent)', fontStyle: 'italic', fontWeight: 400 }}>Your Projects</em><br />With Nexgent
        </h1>

        {/* Description */}
        <p style={{ 
          color: '#e6e6e6', 
          fontSize: '18px', 
          lineHeight: '152%', 
          maxWidth: '560px', 
          margin: '0 auto 40px', 
          fontFamily: 'var(--font-body)' 
        }}>
          A smart task management platform that helps teams and individuals plan, prioritize, and complete work faster without stress.
        </p>

        {/* CTA Button */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginBottom: '80px' }}>
          <a href="#" style={{ 
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            backgroundColor: '#1caf61', color: '#fff', 
            fontSize: '16px', fontWeight: 600, 
            padding: '18px 24px', borderRadius: '6px',
            textDecoration: 'none', transition: 'background-color 0.3s'
          }}>
            Get Template <ArrowUpRight size={18} />
          </a>
        </div>
      </div>

      {/* Dashboard Image */}
      <motion.div
        style={{ 
          width: '100%', maxWidth: '1100px', margin: '0 auto', 
          padding: '0 20px', position: 'relative', zIndex: 10 
        }}
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div style={{
           position: 'absolute', top: '10%', left: '-5%', right: '-5%', bottom: '-10%',
           background: 'radial-gradient(ellipse at center, rgba(34,197,94,0.1) 0%, transparent 70%)',
           filter: 'blur(80px)', zIndex: -1, pointerEvents: 'none'
        }} />
        <img 
          src="https://cdn.prod.website-files.com/6994265eb4518368b938e54c/69c35e8fb0f37a20a2c1f77e_task%20(11)-p-1600.png" 
          alt="Nexgent Dashboard Overlay"
          style={{
            width: '100%', height: 'auto', display: 'block',
            borderRadius: '24px 24px 0 0',
            boxShadow: '0 -20px 80px rgba(0,0,0,0.3)',
            border: '1px solid rgba(255,255,255,0.05)'
          }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
