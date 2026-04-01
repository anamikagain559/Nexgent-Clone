import React from 'react';
import { Twitter, Linkedin, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="pt-24 pb-12 border-t border-white-05 bg-black">
      <div className="container mx-auto px-4">
        {/* Top CTA */}
        <div className="glass p-10 md:p-16 mb-20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-glow blur-[100px] opacity-10"></div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to take your business <br /> to the Next Level?</h2>
          <button className="btn-primary px-10 py-5 text-lg inline-flex items-center gap-2">
            Get Started Now <ArrowRight size={20} />
          </button>
        </div>

        {/* Links Grid */}
        <div className="footer-grid mb-16">
          <div className="col-span-2">
             <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-accent-primary rounded-lg flex items-center justify-center">
                  <div className="w-4 h-4 bg-black rounded-sm transform rotate-45"></div>
                </div>
                <span className="text-xl font-bold tracking-tight">NEXGENT</span>
              </div>
              <p className="text-text-secondary text-sm max-w-xs mb-8">
                The unified business management platform built for modern teams. 
                Focus on growth, we take care of the rest.
              </p>
              <div className="flex gap-4">
                <Twitter size={20} className="text-text-muted hover:text-white cursor-pointer" />
                <Linkedin size={20} className="text-text-muted hover:text-white cursor-pointer" />
              </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest">Product</h4>
            <ul className="space-y-4 text-sm text-text-secondary">
              <li><a href="#" className="hover:text-white">Features</a></li>
              <li><a href="#" className="hover:text-white">Pricing</a></li>
              <li><a href="#" className="hover:text-white">Integrations</a></li>
              <li><a href="#" className="hover:text-white">API Reference</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest">Company</h4>
            <ul className="space-y-4 text-sm text-text-secondary">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Legal</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest">Resources</h4>
            <ul className="space-y-4 text-sm text-text-secondary">
              <li><a href="#" className="hover:text-white">Documentation</a></li>
              <li><a href="#" className="hover:text-white">Help Center</a></li>
              <li><a href="#" className="hover:text-white">Community</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white-05 text-xs text-text-muted gap-4">
          <p>© 2026 Nexgent Inc. All rights reserved.</p>
          <p>Made with ❤️ by Antigravity AI</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
