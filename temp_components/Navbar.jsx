import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Features', href: '#features' },
    { name: 'Benefits', href: '#benefits' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Blog', href: '#blog' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-4' : 'py-6'}`}>
      <div className={`container mx-auto px-4 flex items-center justify-between transition-all duration-300 ${scrolled ? 'glass py-3 px-6' : ''}`}>
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-accent-primary rounded-lg flex items-center justify-center">
            <div className="w-4 h-4 bg-black rounded-sm transform rotate-45"></div>
          </div>
          <span className="text-xl font-bold tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
            NEXGENT
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md-flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-text-secondary hover:text-accent-primary transition-colors">
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md-block">
          <button className="btn-primary flex items-center gap-2 text-sm px-5 py-2">
            Get Started <ArrowRight size={16} />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md-hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-4 right-4 glass p-6 flex flex-col gap-4 md-hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-lg font-medium hover:text-accent-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button className="btn-primary w-full mt-4">Get Started</button>
          </div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
