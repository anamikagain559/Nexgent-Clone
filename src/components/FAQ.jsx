import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [open, setOpen] = useState(0);

  const faqs = [
    { q: 'Can I use Nexgent for team collaboration?', a: 'Absolutely. Nexgent is built for both individuals and teams, with real-time collaboration, comments, and task sharing.' },
    { q: 'Can I customize workflows and Nexgent?', a: 'Absolutely. Nexgent is built for both individuals and teams, with real-time collaboration, comments, and task sharing.' },
    { q: 'Does Nexgent support integrations?', a: 'Absolutely. Nexgent is built for both individuals and teams, with real-time collaboration, comments, and task sharing.' },
    { q: 'Can I upgrade or downgrade my plan later?', a: 'Absolutely. Nexgent is built for both individuals and teams, with real-time collaboration, comments, and task sharing.' },
    { q: 'Do I need a credit card to get started?', a: 'Absolutely. Nexgent is built for both individuals and teams, with real-time collaboration, comments, and task sharing.' },
  ];

  return (
    <section id="faq" className="reveal" style={{ padding: '100px 0', background: '#fff' }}>
      <div className="container" style={{ maxWidth: '700px', textAlign: 'center' }}>
        <p className="reveal delay-100 section-label">FAQ</p>
        <h2 className="reveal delay-200 section-title">
          Got Questions?
        </h2>
        <p className="reveal delay-200" style={{ color: '#6b7280', fontSize: '16px', maxWidth: '520px', margin: '0 auto 48px', lineHeight: 1.7 }}>
          Everything you need to know before getting started. Got questions? Let's clear things up.
        </p>

        <div className="reveal delay-300" style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {faqs.map((faq, i) => (
            <div key={i} style={{ borderBottom: '1px solid #f3f4f6', textAlign: 'left' }}>
              <button onClick={() => setOpen(open === i ? -1 : i)} style={{
                width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '20px 0', background: 'none', fontSize: '16px', fontWeight: 500,
                color: open === i ? '#22c55e' : '#111827', cursor: 'pointer', transition: 'color 0.3s',
                fontFamily: 'var(--font-body)'
              }}>
                {faq.q}
                <ChevronDown size={18} style={{ transition: 'transform 0.3s', transform: open === i ? 'rotate(180deg)' : 'none', flexShrink: 0, marginLeft: '16px', color: open === i ? '#22c55e' : '#9ca3af' }} />
              </button>
              <div style={{ overflow: 'hidden', maxHeight: open === i ? '200px' : '0px', transition: 'max-height 0.4s ease, opacity 0.3s ease', opacity: open === i ? 1 : 0 }}>
                <p style={{ color: '#6b7280', fontSize: '14px', lineHeight: 1.7, paddingBottom: '20px' }}>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
