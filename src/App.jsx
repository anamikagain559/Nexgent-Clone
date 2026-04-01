import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PartnerBanner from './components/PartnerBanner';
import ProductOverview from './components/ProductOverview';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Benefits from './components/Benefits';
import CoreDashboard from './components/CoreDashboard';
import Comparison from './components/Comparison';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import { useScrollReveal } from './hooks/useScrollReveal';
import './styles/components.css';

function App() {
  useScrollReveal();

  return (
    <div style={{ background: '#ffffff', minHeight: '100vh' }}>
      <Navbar />

      <main>
        <Hero />
        <PartnerBanner />
        <ProductOverview />
        <Features />
        <HowItWorks />
        <Benefits />
        <CoreDashboard />
        <Comparison />
        <Pricing />
        <Testimonials />
        <FAQ />

        {/* CTA Section */}
        <section className="reveal" style={{ padding: '100px 0', background: '#f9fafb', textAlign: 'center' }}>
          <div className="container">
            <h2 className="reveal delay-100 section-title" style={{ color: '#111827', marginBottom: '16px' }}>
              Ready to Get More Done
            </h2>
            <p className="reveal delay-200" style={{ color: '#6b7280', fontSize: '16px', maxWidth: '520px', margin: '0 auto 40px', lineHeight: 1.7 }}>
              Start organizing your tasks, collaborating with your team, and staying on top of deadlines all in one simple, powerful tool.
            </p>
            <a href="#" className="btn-primary reveal delay-300">
              Get Started
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
