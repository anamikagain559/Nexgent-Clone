import React from 'react';
import { Check, X } from 'lucide-react';

const Comparison = () => {
  const basicFeatures = [
    'Interfaces that slow teams down',
    'Limited tasks and workflows',
    'Poor integration tools and platform',
    'Weak collaboration features',
    'Basic reports with little insight',
    'Shallow reporting and insights',
    'Poor Analytics & Reports',
  ];

  const nexgentFeatures = [
    'Seamless integration with 200+',
    'Real-time progress tracking',
    'Advanced productivity analytics',
    'Faster task completion',
    'Productivity and performance',
    'Advanced Analytics & Reports',
    'Full visibility across teams',
  ];

  return (
    <section id="comparison" className="reveal" style={{ padding: '100px 0', background: '#fff' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <p className="reveal delay-100 section-label">Comparison</p>
        <h2 className="reveal delay-200 section-title" style={{ maxWidth: '700px', margin: '0 auto 16px' }}>
          Why Choose Nexgent
        </h2>
        <p className="reveal delay-200 section-desc">
          See how our smart task management platform compares with spreadsheets, basic to-do apps, and tools.
        </p>

        <div className="reveal delay-300" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', maxWidth: '700px', margin: '0 auto' }}>
          {/* Basic Apps */}
          <div style={{ background: '#f9fafb', borderRadius: '20px', padding: '32px 24px', border: '1px solid #e5e7eb' }}>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '22px', fontWeight: 400, color: '#111827', marginBottom: '24px' }}>Basic apps</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {basicFeatures.map((f, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <X size={16} style={{ color: '#d1d5db', flexShrink: 0 }} />
                  <span style={{ fontSize: '14px', color: '#9ca3af', textDecoration: i > 3 ? 'line-through' : 'none' }}>{f}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Nexgent */}
          <div style={{ background: '#03140b', borderRadius: '20px', padding: '32px 24px', border: '1px solid rgba(34,197,94,0.2)', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '-30px', right: '-30px', width: '120px', height: '120px', background: 'rgba(34,197,94,0.15)', borderRadius: '50%', filter: 'blur(40px)' }}></div>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '22px', fontWeight: 400, color: '#fff', marginBottom: '24px', position: 'relative', zIndex: 1 }}>Nexgent</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', position: 'relative', zIndex: 1 }}>
              {nexgentFeatures.map((f, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#22c55e', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Check size={12} style={{ color: '#000' }} />
                  </div>
                  <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.8)' }}>{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
