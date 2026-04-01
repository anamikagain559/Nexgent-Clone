import React from 'react';
import { Check } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Basic',
      price: '$19',
      period: '/mo',
      desc: 'One request at a time. Pause or cancel anytime.',
      features: ['Up to 3 projects', 'Unlimited personal tasks', 'Basic task boards', 'Due dates & reminders', 'Mobile app access'],
      cta: 'Get Started',
      highlighted: false,
    },
    {
      name: 'Standard',
      price: '$49',
      period: '/mo',
      desc: 'One request at a time. Pause or cancel anytime.',
      features: ['Unlimited projects & tasks', 'Team collaboration & comments', 'Custom workflows & boards', 'Real-time progress tracking', '200+ integrations'],
      cta: 'Get Started',
      highlighted: true,
    },
    {
      name: 'Premium',
      price: '$99',
      period: '/mo',
      desc: 'One request at a time. Pause or cancel anytime.',
      features: ['Everything in Pro', 'Advanced permissions & roles', 'Automation & rules', 'Advanced productivity analytics', 'Team workload management'],
      cta: 'Get Started',
      highlighted: false,
    },
  ];

  return (
    <section id="pricing" className="reveal" style={{ padding: '100px 0', background: '#fff' }}>
      <div className="container" style={{ textAlign: 'center', maxWidth: '960px' }}>
        <p className="reveal delay-100 section-label">Pricing</p>
        <h2 className="reveal delay-200 section-title">
          Flexible Pricing for <br />Every Teams
        </h2>
        <p className="reveal delay-200 section-desc">
          Choose the plan that fits your team's workflow. Start free and scale as you grow.
        </p>

        <div className="reveal delay-300" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
          {plans.map((plan, i) => (
            <div key={i} style={{
              background: plan.highlighted ? '#03140b' : '#fff',
              borderRadius: '24px', padding: '36px 28px',
              border: plan.highlighted ? '1px solid rgba(34,197,94,0.3)' : '1px solid #e5e7eb',
              textAlign: 'left', transition: 'all 0.3s', position: 'relative', overflow: 'hidden',
              boxShadow: plan.highlighted ? '0 20px 60px rgba(0,0,0,0.2)' : 'none',
              transform: plan.highlighted ? 'scale(1.02)' : 'none',
            }}>
              {plan.highlighted && <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '100px', height: '100px', background: 'rgba(34,197,94,0.15)', borderRadius: '50%', filter: 'blur(40px)' }}></div>}
              
              <h3 style={{ fontFamily: 'var(--font-body)', fontSize: '16px', fontWeight: 600, color: plan.highlighted ? '#fff' : '#111827', marginBottom: '8px', position: 'relative', zIndex: 1 }}>{plan.name}</h3>
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: '4px', marginBottom: '20px', position: 'relative', zIndex: 1 }}>
                <span style={{ fontFamily: 'var(--font-heading)', fontSize: '42px', fontWeight: 400, color: plan.highlighted ? '#fff' : '#111827', lineHeight: 1 }}>{plan.price}</span>
                <span style={{ color: plan.highlighted ? 'rgba(255,255,255,0.4)' : '#9ca3af', fontSize: '14px', marginBottom: '6px' }}>{plan.period}</span>
              </div>
              <p style={{ color: plan.highlighted ? 'rgba(255,255,255,0.4)' : '#9ca3af', fontSize: '13px', marginBottom: '24px', paddingBottom: '24px', borderBottom: `1px solid ${plan.highlighted ? 'rgba(255,255,255,0.1)' : '#f3f4f6'}`, position: 'relative', zIndex: 1 }}>{plan.desc}</p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '28px', position: 'relative', zIndex: 1 }}>
                {plan.features.map((f, j) => (
                  <div key={j} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: plan.highlighted ? '#22c55e' : '#dcfce7', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Check size={12} style={{ color: plan.highlighted ? '#000' : '#16a34a' }} />
                    </div>
                    <span style={{ fontSize: '14px', color: plan.highlighted ? 'rgba(255,255,255,0.7)' : '#374151' }}>{f}</span>
                  </div>
                ))}
              </div>

              <button style={{
                width: '100%', padding: '14px', borderRadius: '14px', fontSize: '14px', fontWeight: 600, position: 'relative', zIndex: 1,
                background: plan.highlighted ? '#22c55e' : 'transparent',
                color: plan.highlighted ? '#000' : '#111827',
                border: plan.highlighted ? 'none' : '1px solid #e5e7eb',
                boxShadow: plan.highlighted ? '0 0 20px rgba(34,197,94,0.3)' : 'none',
                transition: 'all 0.3s'
              }}>{plan.cta}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
