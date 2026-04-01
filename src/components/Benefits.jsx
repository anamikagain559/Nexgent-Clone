import React from 'react';
import { Zap, Brain, BarChart, Clock, Users, Database, LayoutGrid } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    { icon: <Zap size={22} />, title: 'Get More Done, Faster', desc: 'Focus on the right tasks with clear priorities and real-time progress.' },
    { icon: <Brain size={22} />, title: 'Reduce Mental Overload', desc: 'Everything is organized in one place, so your team doesn\'t have to remember.' },
    { icon: <BarChart size={22} />, title: 'Maximize Your Output', desc: 'Track performance and productivity with clear insights and analytics.' },
    { icon: <Clock size={22} />, title: 'Stay on Top of Deadlines', desc: 'Smart reminders and live status updates keep work moving on time.' },
    { icon: <Users size={22} />, title: 'Seamless Team Sync', desc: 'Collaborate smoothly with comments, mentions, and shared task ownership.' },
    { icon: <Database size={22} />, title: 'Centralize Your Data', desc: 'Customize boards, statuses, and processes to match how your team works.' },
  ];

  return (
    <section id="benefits" className="reveal" style={{ padding: '100px 0', background: 'var(--body-bg)' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <div className="reveal delay-100 section-label">
          <LayoutGrid size={16} />
          Benefits
        </div>
        <h2 className="reveal delay-200 section-title" style={{ maxWidth: '600px', margin: '0 auto 16px' }}>
          Why Choose Us To<br /><em>Grow Smarter</em>
        </h2>
        <p className="reveal delay-200 section-desc">
          Unlock unmatched growth, efficiency, and innovation with our powerful Task solutions.
        </p>

        <div className="reveal delay-300" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', maxWidth: '1000px', margin: '0 auto' }}>
          {benefits.map((b, i) => (
            <div key={i} className="card" style={{ background: '#f3f5f8', textAlign: 'left', cursor: 'pointer' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(34,197,94,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#22c55e', marginBottom: '16px' }}>{b.icon}</div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', fontWeight: 400, color: 'var(--text-primary)', marginBottom: '8px' }}>{b.title}</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '13px', lineHeight: 1.6 }}>{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
