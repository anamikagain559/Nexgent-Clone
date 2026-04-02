import React from 'react';
import { MapPin, Mail, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ paddingTop: '100px', paddingBottom: '40px', background: '#03140b', color: '#fff', position: 'relative', overflow: 'hidden' }}>
      {/* Background glow */}
      <div style={{ position: 'absolute', top: '10%', left: '50%', transform: 'translate(-50%, -50%)', width: '600px', height: '400px', background: 'radial-gradient(ellipse, rgba(34,197,94,0.08) 0%, transparent 70%)', pointerEvents: 'none' }}></div>
      
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        
        {/* CTA Section */}
        <div style={{ textAlign: 'center', marginBottom: '80px', paddingBottom: '60px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <h2 style={{ color: '#fff', marginBottom: '16px', fontSize: 'clamp(2rem, 4vw, 3rem)', fontFamily: 'var(--font-heading)', fontWeight: 500, letterSpacing: '-0.02em' }}>
            Ready to Get More Done
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '18px', maxWidth: '520px', margin: '0 auto 40px', lineHeight: 1.6 }}>
            Start organizing your tasks, collaborating with your team, and staying on top of deadlines all in one simple, powerful tool.
          </p>
          <a href="#" style={{ 
            display: 'inline-block',
            background: '#22c55e', 
            color: '#000', 
            textDecoration: 'none',
            borderRadius: '999px',
            fontSize: '15px',
            fontWeight: 600,
            padding: '16px 32px',
            boxShadow: '0 0 24px rgba(34,197,94,0.3)',
            transition: 'all 0.3s ease'
          }}>
            Get Started
          </a>
        </div>
        
        {/* Big NEXGENT branding */}
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', marginBottom: '16px' }}>
            <div style={{ width: '56px', height: '56px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#22c55e', transform: 'rotate(-12deg)' }}>
              <div style={{ width: '24px', height: '24px', background: '#000', borderRadius: '6px', transform: 'rotate(45deg)' }}></div>
            </div>
            <h2 style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(3rem, 8vw, 7rem)', fontWeight: 800, letterSpacing: '-0.05em', lineHeight: 1, color: '#fff' }}>NEXGENT</h2>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '15px', marginBottom: '0' }}>Join the 12,000+ businesses using Nexgent</p>
        </div>

        {/* Footer Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '40px', marginTop: '60px', marginBottom: '60px', paddingBottom: '60px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          
          {/* Contact */}
          <div>
            <h4 style={{ fontWeight: 600, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '24px', color: 'rgba(255,255,255,0.9)' }}>Get in Touch</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <a href="#" style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '14px', color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>
                <MapPin size={14} style={{ marginTop: '3px', flexShrink: 0, color: '#22c55e' }} />
                123 Creative Street, Innovation City, NY 10001
              </a>
              <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>
                <Mail size={14} style={{ flexShrink: 0, color: '#22c55e' }} />
                info@nexgent.com
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 style={{ fontWeight: 600, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '24px', color: 'rgba(255,255,255,0.9)' }}>Subscribe to our Newsletter</h4>
            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)', marginBottom: '16px', lineHeight: 1.6 }}>Get productivity tips & insights straight to your inbox.</p>
            <div style={{ display: 'flex', gap: '8px' }}>
              <input type="email" placeholder="Your email" style={{ flex: 1, padding: '10px 14px', borderRadius: '10px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', fontSize: '13px', outline: 'none' }} />
              <button style={{ padding: '10px 16px', borderRadius: '10px', background: '#22c55e', color: '#000', fontWeight: 600, fontSize: '13px', display: 'flex', alignItems: 'center' }}>Subscribe</button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontWeight: 600, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '24px', color: 'rgba(255,255,255,0.9)' }}>Quick Links</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {['Features', 'Benefits', 'Pricing', 'Comparison', 'FAQ', 'Join Now'].map(l => (
                <a key={l} href={`#${l.toLowerCase().replace(' ', '')}`} style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', transition: 'color 0.3s' }}
                   onMouseEnter={e => e.target.style.color = '#fff'}
                   onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.5)'}>{l}</a>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 style={{ fontWeight: 600, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '24px', color: 'rgba(255,255,255,0.9)' }}>Resources</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {['Changelog', 'Style Guide', 'License', 'Privacy Policy'].map(l => (
                <a key={l} href="#" style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', transition: 'color 0.3s' }}
                   onMouseEnter={e => e.target.style.color = '#fff'}
                   onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.5)'}>{l}</a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '13px', color: 'rgba(255,255,255,0.3)' }}>
          <p>© 2024 Nexgent. All rights reserved.</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            Powered by <a href="#" style={{ color: '#fff', fontWeight: 600, textDecoration: 'none' }}>Olynex</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
