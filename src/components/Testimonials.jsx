import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    { 
      name: 'Edward Lawson', 
      role: 'Product Manager', 
      quote: 'This tool completely transformed how our team works. Everything is clear and organized, so we always know who\'s responsible for what and when things are due. As a result, we meet deadlines more consistently and stay focused on our priorities.', 
      avatar: 'EL',
      featured: true
    },
    { 
      name: 'Sarah Mitchell', 
      role: 'Design Lead', 
      quote: 'Our team has finally found a tool that just works. Planning, tracking, and delivering projects has never been smoother.', 
      avatar: 'SM',
      featured: false
    },
    { 
      name: 'James Cooper', 
      role: 'Startup Founder', 
      quote: 'We cut our project delivery time by 30% within the first month. It\'s intuitive, fast, and the team loves using it daily.', 
      avatar: 'JC',
      featured: false
    },
  ];

  return (
    <section id="testimonials" className="reveal" style={{ padding: '100px 0', background: '#f9fafb' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <p className="reveal delay-100 section-label">Testimonials</p>
        <h2 className="reveal delay-200 section-title" style={{ maxWidth: '600px', margin: '0 auto 16px' }}>
          What Our Users Say
        </h2>
        <p className="reveal delay-200 section-desc">
          Real stories from teams using Nexgent to stay organized, collaborate better, and deliver work on time.
        </p>

        <div className="reveal delay-300" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', maxWidth: '960px', margin: '0 auto' }}>
          {/* Featured testimonial - large */}
          <div style={{ background: '#03140b', borderRadius: '20px', padding: '36px 28px', border: '1px solid rgba(34,197,94,0.15)', textAlign: 'left', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '100px', height: '100px', background: 'rgba(34,197,94,0.1)', borderRadius: '50%', filter: 'blur(40px)' }}></div>
            <div style={{ display: 'flex', gap: '2px', marginBottom: '20px' }}>
              {[...Array(5)].map((_, j) => <Star key={j} size={14} fill="#22c55e" stroke="#22c55e" />)}
            </div>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '15px', lineHeight: 1.8, marginBottom: '28px', fontStyle: 'italic', position: 'relative', zIndex: 1 }}>
              "{reviews[0].quote}"
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', position: 'relative', zIndex: 1 }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: '#22c55e', color: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: 700 }}>{reviews[0].avatar}</div>
              <div>
                <div style={{ fontWeight: 600, fontSize: '15px', color: '#fff' }}>{reviews[0].name}</div>
                <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)' }}>{reviews[0].role}</div>
              </div>
            </div>
          </div>

          {/* Right side - 2 stacked testimonials */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {reviews.slice(1).map((r, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: '20px', padding: '28px 24px', border: '1px solid #e5e7eb', textAlign: 'left', transition: 'all 0.3s', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
                   onMouseEnter={e => e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.06)'}
                   onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}>
                <div>
                  <div style={{ display: 'flex', gap: '2px', marginBottom: '14px' }}>
                    {[...Array(5)].map((_, j) => <Star key={j} size={14} fill="#22c55e" stroke="#22c55e" />)}
                  </div>
                  <p style={{ color: '#374151', fontSize: '14px', lineHeight: 1.7, marginBottom: '20px', fontStyle: 'italic' }}>"{r.quote}"</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#03140b', color: '#22c55e', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: 700 }}>{r.avatar}</div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '14px', color: '#111827' }}>{r.name}</div>
                    <div style={{ fontSize: '12px', color: '#9ca3af' }}>{r.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
