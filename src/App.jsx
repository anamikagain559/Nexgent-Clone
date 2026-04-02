import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PartnerBanner from './components/PartnerBanner';
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
import ProductOverview from './components/ProductOverview';

function App() {
  useScrollReveal();

  return (
    <div style={{ background: '#ffffff', minHeight: '100vh' }}>
      <Navbar />

      <main>
        <Hero />
        <PartnerBanner />
        <Features />
        <HowItWorks />
        <Benefits />
        <ProductOverview />
        <Comparison />
        <Pricing />
        <Testimonials />

        <FAQ />
      </main>

      <Footer />
    </div>
  );
}

export default App;
