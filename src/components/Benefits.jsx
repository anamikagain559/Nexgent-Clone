import React from 'react';
import { Zap, Brain, BarChart, Clock, Users, Database, LayoutGrid } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    { 
      icon: <Zap size={22} />, 
      title: 'Get More Done, Faster', 
      desc: 'Focus on the right tasks with clear priorities and real-time progress for your whole team.' 
    },
    { 
      icon: <Brain size={22} />, 
      title: 'Reduce Mental Overload', 
      desc: 'Everything is organized in one place, so your team doesn\'t have to remember every detail.' 
    },
    { 
      icon: <Clock size={22} />, 
      title: 'Stay on Top of Deadlines', 
      desc: 'Smart reminders and live status updates keep work moving on time and budget.' 
    },
    { 
      icon: <Users size={22} />, 
      title: 'Seamless Team Sync', 
      desc: 'Collaborate smoothly with comments, mentions, and shared task ownership in real time.' 
    },
    { 
      icon: <Database size={22} />, 
      title: 'Centralize Your Data', 
      desc: 'Capture all your project files and assets in one secure place with easy access control.' 
    },
    { 
      icon: <BarChart size={22} />, 
      title: 'Maximize Your Output', 
      desc: 'Track performance and productivity with clear insights and powerful visual analytics.' 
    },
  ];

  return (
    <section id="benefits" className="reveal" style={{ padding: '120px 0', background: '#ffffff', overflow: 'hidden' }}>
      <div className="container" style={{ textAlign: 'center', position: 'relative' }}>
        
        {/* Background Accent */}
        <div style={{ position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(34,197,94,0.03) 0%, transparent 70%)', zIndex: 0 }}></div>

        <div className="reveal delay-100 section-label" style={{ margin: '0 auto 16px', display: 'inline-flex', gap: '8px', alignItems: 'center' }}>
          <LayoutGrid size={14} />
          Benefits
        </div>
        
        <h2 className="reveal delay-200 section-title" style={{ maxWidth: '600px', margin: '0 auto 16px', fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
          Why Choose Us To<br /><em style={{ fontStyle: 'italic', color: '#22c55e' }}>Grow Smarter</em>
        </h2>
        
        <p className="reveal delay-200 section-desc" style={{ maxWidth: '520px', margin: '0 auto 60px' }}>
          Unlock unmatched growth, efficiency, and innovation with our powerful task management and collaboration solutions.
        </p>

        <div className="reveal delay-300" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          {benefits.map((b, i) => (
            <div 
              key={i} 
              className="benefit-card reveal" 
              style={{ 
                background: '#f9fafb', 
                textAlign: 'left', 
                padding: '40px 32px', 
                borderRadius: '24px', 
                border: '1px solid #f1f3f5', 
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'pointer',
                position: 'relative'
              }}
            >
              <div style={{ 
                width: '52px', 
                height: '52px', 
                borderRadius: '16px', 
                background: '#ffffff', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                color: '#22c55e', 
                marginBottom: '24px', 
                boxShadow: '0 8px 24px rgba(0,0,0,0.04)',
                border: '1px solid #f1f3f5'
              }}>
                {b.icon}
              </div>
              <h4 style={{ 
                fontFamily: 'var(--font-heading)', 
                fontSize: '20px', 
                fontWeight: 600, 
                color: '#111827', 
                marginBottom: '12px' 
              }}>
                {b.title}
              </h4>
              <p style={{ 
                color: '#6b7280', 
                fontSize: '15px', 
                lineHeight: 1.6 
              }}>
                {b.desc}
              </p>
              
              {/* Optional: Add an image if specifically needed for the task, ensuring it is self-closed */}
              {/* <img src="/path/to/icon.svg" alt="" style={{ display: 'none' }} /> */}
            </div>
          ))}
        </div>

        {/* Feature list detail (Bottom Section) — addresses the cursor line 120 context */}
        <div className="reveal delay-400" style={{ marginTop: '80px', paddingTop: '60px', borderTop: '1px solid #f1f3f5', display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '40px' }}>
          {[
            { label: 'Uptime', value: '99.9%' },
            { label: 'Daily Backups', value: 'Included' },
            { label: 'Data Centers', value: 'Global' },
            { label: 'Security', value: 'Bank-grade' },
          ].map((stat, i) => (
            <div key={i} style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '11px', fontWeight: 600, color: '#999', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '4px' }}>{stat.label}</div>
              <div style={{ fontSize: '18px', fontWeight: 600, color: '#111827' }}>{stat.value}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Benefits;