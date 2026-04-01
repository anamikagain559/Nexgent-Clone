import React from 'react';
import { PlusCircle, LayoutList, CheckCircle2 } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    { num: '01', icon: <PlusCircle size={28} />, title: 'Create Tasks', desc: 'Add tasks, set deadlines, and manage work in one place.' },
    { num: '02', icon: <LayoutList size={28} />, title: 'Organize & Prioritize', desc: 'Use boards, lists, and filters to stay focused and work efficiently.' },
    { num: '03', icon: <CheckCircle2 size={28} />, title: 'Track & Complete', desc: 'Monitor progress and finish work on time by tracking goals and milestones.' },
  ];

  return (
    <section className="reveal" style={{ padding: '100px 0', background: '#fff' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <p className="reveal delay-100 section-label">How It Works</p>
        <h2 className="reveal delay-200 section-title" style={{ maxWidth: '700px', margin: '0 auto 16px' }}>
          Simple Way To Working<br />With Team
        </h2>
        <p className="reveal delay-200 section-desc">
          Nexgent simplifies life by efficiently organizing tasks, keeping deadlines on track.
        </p>

        <div className="reveal delay-300" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', maxWidth: '900px', margin: '56px auto 0' }}>
          {steps.map((step, i) => (
            <div key={i} style={{ background: '#f9fafb', borderRadius: '20px', padding: '36px 24px', border: '1px solid #f0f0f0', textAlign: 'center', transition: 'all 0.3s', position: 'relative', overflow: 'hidden' }}
                 onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
                 onMouseLeave={e => e.currentTarget.style.transform = 'none'}>
              {/* Step number watermark */}
              <div style={{ position: 'absolute', top: '12px', right: '16px', fontFamily: 'var(--font-heading)', fontSize: '48px', color: 'rgba(0,0,0,0.04)', fontWeight: 400, lineHeight: 1 }}>{step.num}</div>
              <div style={{ width: '56px', height: '56px', borderRadius: '14px', background: '#fff', border: '1px solid #e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#22c55e', margin: '0 auto 20px', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
                {step.icon}
              </div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', fontWeight: 400, color: '#111827', marginBottom: '8px' }}>{step.title}</h3>
              <p style={{ color: '#6b7280', fontSize: '14px', lineHeight: 1.6 }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
