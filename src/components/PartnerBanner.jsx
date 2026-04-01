import React from 'react';

const PartnerBanner = () => {
  const logos = [
    { name: 'Loom', color: '#625DF5' },
    { name: 'Notion', color: '#000' },
    { name: 'Slack', color: '#4A154B' },
    { name: 'Linear', color: '#5E6AD2' },
    { name: 'Figma', color: '#F24E1E' },
    { name: 'Asana', color: '#F06A6A' },
  ];
  
  return (
    <section className="reveal" style={{ background: '#fff', padding: '60px 0', borderBottom: '1px solid #f3f4f6' }}>
      <div className="container">
        <p style={{ textAlign: 'center', fontSize: '13px', fontWeight: 600, color: '#9ca3af', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '32px' }}>
          Trusted by teams at over 1,000 of the world
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '48px', opacity: 0.55 }}>
          {logos.map((logo, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '18px', fontWeight: 700, color: '#374151', letterSpacing: '-0.02em', cursor: 'pointer', transition: 'opacity 0.3s' }}
                 onMouseEnter={e => e.currentTarget.style.opacity = '1'}
                 onMouseLeave={e => e.currentTarget.style.opacity = '0.7'}>
              <div style={{ width: '24px', height: '24px', background: logo.color, borderRadius: '5px', opacity: 0.7 }}></div>
              {logo.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerBanner;
