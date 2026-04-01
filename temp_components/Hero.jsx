import React from 'react';

import { Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero pt-32 pb-20 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-[-10%] left-[20%] w-[40%] h-[40%] bg-accent-glow rounded-full blur-[120px] opacity-30"></div>
      <div className="absolute bottom-[20%] right-[10%] w-[30%] h-[30%] bg-accent-glow rounded-full blur-[100px] opacity-20"></div>

      <div className="container mx-auto px-4 text-center">
        {/* Badge */}
        <div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 glass px-4 py-1.5 rounded-full text-xs font-medium text-accent-primary mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-primary"></span>
          </span>
          Nexgent is now live!
        </div>

        {/* Headline */}
        <h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md-text-7xl font-bold mb-6 tracking-tight"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Take Control of Business <br /> <span className="text-gradient">With Nexgent</span>
        </h1>

        {/* Subtext */}
        <p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-text-secondary text-lg md-text-xl max-w-2xl mx-auto mb-10"
        >
          A unified tools to manage your projects, tasks, and members in a single app. 
          Powerful analytics to track your progress and performance.
        </p>

        {/* Buttons */}
        <div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm-flex-row items-center justify-center gap-4 mb-20"
        >
          <button className="btn-primary px-8 py-4 text-lg">Get Started</button>
          <button className="glass flex items-center gap-2 px-8 py-4 text-lg hover-bg-white-05 transition-colors">
            <Play size={20} fill="currentColor" /> Watch Demo
          </button>
        </div>

        {/* Dashboard Mockup (3D Tilted) */}
        <div 
          initial={{ opacity: 0, y: 100, rotateX: 20 }}
          animate={{ opacity: 1, y: 0, rotateX: 10 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mockup-container relative max-w-5xl mx-auto"
        >
          <div className="glass p-2 rounded-2xl border border-white-10 shadow-2xl overflow-hidden mockup-wrapper" style={{ transformStyle: 'preserve-3d' }}>
             <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" alt="Dashboard" className="w-full h-auto rounded-xl opacity-90" />
             {/* Overlaying CSS Dashboard elements */}
             <div className="absolute top-10 left-10 glass p-4 rounded-xl border border-white-20 shadow-xl hidden lg-block float-card">
               <div className="text-sm font-semibold mb-2">Total Tasks</div>
               <div className="text-2xl font-bold text-accent-primary">1,248</div>
               <div className="text-[10px] text-text-secondary mt-1">+12.5% from last month</div>
             </div>
             <div className="absolute top-1/2 right-10 glass p-4 rounded-xl border border-white-20 shadow-xl hidden lg-block float-card">
               <div className="text-sm font-semibold mb-2">Team Members</div>
               <div className="flex -space-x-2">
                 {[1,2,3,4].map(i => (
                   <div key={i} className="w-8 h-8 rounded-full border-2 border-black bg-gray-600"></div>
                 ))}
               </div>
             </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
