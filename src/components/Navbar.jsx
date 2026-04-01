import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Features', 'Benefits', 'Pricing', 'Comparison', 'FAQ'];

  return (
    <nav style={{
      position: 'fixed', width: '100%', zIndex: 50, top: 0,
      transition: 'all 0.4s ease',
      background: scrolled ? 'rgba(3,20,11,0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
    }}>
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 0' }}>
          
          {/* Logo */}
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
            <div style={{ width: '34px', height: '34px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#22c55e' }}>
              <div style={{ width: '14px', height: '14px', background: '#000', borderRadius: '3px', transform: 'rotate(45deg)' }}></div>
            </div>
            <span style={{ fontSize: '20px', fontWeight: 700, letterSpacing: '-0.03em', color: '#fff', fontFamily: 'var(--font-body)' }}>Nexgent</span>
          </a>

          {/* Desktop Links */}
          <div className="nav-desktop" style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
            {navLinks.map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', fontWeight: 500, transition: 'color 0.3s', textDecoration: 'none' }}
                 onMouseEnter={e => e.target.style.color = '#22c55e'}
                 onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.7)'}
              >{item}</a>
            ))}
          </div>

          {/* CTA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <a href="#" className="nav-cta-btn" style={{
              padding: '10px 24px', borderRadius: '999px',
              background: '#fff', color: '#000', fontSize: '14px', fontWeight: 600,
              transition: 'all 0.3s', textDecoration: 'none'
            }}>Join Now</a>
            <button className="nav-mobile-btn" onClick={() => setIsOpen(!isOpen)} style={{ background: 'none', color: '#fff', padding: '4px', display: 'none' }}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="nav-mobile-menu" style={{ paddingBottom: '20px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '16px', textAlign: 'center' }}>
              {navLinks.map(item => (
                <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsOpen(false)} style={{ color: 'rgba(255,255,255,0.7)', fontSize: '15px', fontWeight: 500 }}>{item}</a>
              ))}
              <a href="#" style={{ padding: '10px 24px', borderRadius: '999px', background: '#fff', color: '#000', fontSize: '14px', fontWeight: 600, width: 'fit-content', margin: '8px auto 0' }}>Join Now</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
