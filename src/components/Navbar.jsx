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
      paddingTop: scrolled ? '16px' : '32px',
      paddingBottom: scrolled ? '16px' : '0'
    }}>
      <div className="container" style={{ maxWidth: '1274px', padding: '0 15px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        
        {/* Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', textDecoration: 'none' }}>
          <img src="https://cdn.prod.website-files.com/6994265eb4518368b938e54c/699aa7b4b9254eb870446a11_Delco_Products_logo%201%20(2).png" alt="Delco Products Logo" style={{ height: '38px', width: 'auto', objectFit: 'contain' }} />
          <span style={{ fontSize: '22px', fontWeight: 700, letterSpacing: '-0.03em', color: '#fff', fontFamily: 'var(--font-heading)' }}>Nexgent</span>
        </a>

        {/* Desktop Links */}
        <div className="nav-desktop" style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          {navLinks.map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} style={{ color: '#e6e6e6', fontSize: '16px', fontWeight: 500, transition: 'color 0.3s', textDecoration: 'none' }}
               onMouseEnter={e => e.target.style.color = '#ffffff'}
               onMouseLeave={e => e.target.style.color = '#e6e6e6'}
            >{item}</a>
          ))}
        </div>

        {/* CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <a href="#" className="nav-cta-btn" style={{
            padding: '12px 24px', borderRadius: '50px',
            background: '#ffffff', color: '#0f0f0f', fontSize: '15px', fontWeight: 500,
            transition: 'all 0.3s', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center'
          }}>Join Now</a>
          <button className="nav-mobile-btn" onClick={() => setIsOpen(!isOpen)} style={{ background: 'none', color: '#fff', padding: '4px', display: 'none', border: 'none', cursor: 'pointer' }}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="nav-mobile-menu" style={{ padding: '20px 0', borderTop: '1px solid rgba(255,255,255,0.05)', background: 'rgba(3,20,11,0.98)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', textAlign: 'center' }}>
            {navLinks.map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsOpen(false)} style={{ color: '#e6e6e6', fontSize: '16px', fontWeight: 500, textDecoration: 'none' }}>{item}</a>
            ))}
            <a href="#" style={{ padding: '12px 24px', borderRadius: '50px', background: '#fff', color: '#000', fontSize: '15px', fontWeight: 600, width: 'fit-content', margin: '8px auto 0', textDecoration: 'none' }}>Join Now</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
