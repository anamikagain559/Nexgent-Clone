import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
const Hero = () => {
  return (
    <section id="home" style={{ position: 'relative', paddingTop: '140px', paddingBottom: '0', overflow: 'hidden', background: 'linear-gradient(180deg, #0a3d20 0%, #14532d 30%, #166534 50%, #14532d 70%, #0a3d20 100%)', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

      {/* Foggy green clouds */}
      <div style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', top: '10%', left: '20%', width: '500px', height: '400px', background: 'radial-gradient(ellipse, rgba(34,197,94,0.15) 0%, transparent 70%)', filter: 'blur(60px)' }}></div>
        <div style={{ position: 'absolute', top: '5%', right: '15%', width: '400px', height: '350px', background: 'radial-gradient(ellipse, rgba(34,197,94,0.12) 0%, transparent 70%)', filter: 'blur(50px)' }}></div>
        <div style={{ position: 'absolute', bottom: '30%', left: '50%', transform: 'translateX(-50%)', width: '700px', height: '400px', background: 'radial-gradient(ellipse, rgba(34,197,94,0.08) 0%, transparent 70%)', filter: 'blur(80px)' }}></div>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '30%', height: '100%', background: 'linear-gradient(90deg, rgba(0,0,0,0.3), transparent)' }}></div>
        <div style={{ position: 'absolute', top: 0, right: 0, width: '30%', height: '100%', background: 'linear-gradient(-90deg, rgba(0,0,0,0.3), transparent)' }}></div>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center', maxWidth: '900px' }}>

        {/* Badge — delay-0 (first to appear) */}
        <div className="hero-entrance hero-entrance-d0" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '10px 22px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.06)', color: '#fff', fontSize: '14px', fontWeight: 500, marginBottom: '36px', fontFamily: 'var(--font-body)', backdropFilter: 'blur(10px)' }}>
          <span style={{ display: 'flex', gap: '2px' }}>
            {'★★★★★'.split('').map((s, i) => (
              <span key={i} style={{ color: '#facc15', fontSize: '14px' }}>★</span>
            ))}
          </span>
          10k Reviews Rated 4.9 of 5
        </div>

        {/* Main Heading — delay-1 */}
        <h1 className="hero-entrance hero-entrance-d1" style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.8rem, 6vw, 4.5rem)', fontWeight: 400, lineHeight: 1.1, marginBottom: '24px', color: '#ffffff', letterSpacing: '-0.01em' }}>
          Take Control of <em style={{ fontStyle: 'italic' }}>Your Projects</em><br />With Nexgent
        </h1>

        {/* Description — delay-2 */}
        <p className="hero-entrance hero-entrance-d2" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '17px', lineHeight: 1.7, maxWidth: '560px', margin: '0 auto 40px', fontFamily: 'var(--font-body)' }}>
          A smart task management platform that helps teams and individuals plan, prioritize, and complete work faster without stress.
        </p>

        {/* CTA Button — delay-3 */}
        <div className="hero-entrance hero-entrance-d3" style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginBottom: '80px' }}>
          <a href="#" className="btn-primary" style={{ fontSize: '16px', padding: '16px 36px' }}>
            Get Template <ArrowUpRight size={18} />
          </a>
        </div>
      </div>

      {/* Dashboard — special longer animation with delay */}
      <motion.div
        className="hero-dashboard-entrance"
        style={{ width: '100%', maxWidth: '1100px', margin: '0 auto', padding: '0 20px', position: 'relative', zIndex: 10 }}
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div style={{ background: '#fff', borderRadius: '16px 16px 0 0', overflow: 'hidden', boxShadow: '0 -20px 80px rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.1)' }}>

          <div style={{ display: 'grid', gridTemplateColumns: '240px 1fr', minHeight: '500px' }}>
            {/* Sidebar */}
            <div style={{ background: '#fafbfc', borderRight: '1px solid #eee', padding: '20px 16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '28px' }}>
                <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#22c55e', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ width: '10px', height: '10px', background: '#fff', borderRadius: '3px', transform: 'rotate(45deg)' }}></div>
                </div>
                <span style={{ fontWeight: 700, fontSize: '16px', color: '#111' }}>Nexgent</span>
              </div>

              {[
                { name: 'Inbox', badge: '3' },
                { name: 'Team Members', badge: null },
                { name: 'All Updates', badge: '6' },
                { name: 'Settings', badge: null },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 12px', marginBottom: '2px', borderRadius: '8px', fontSize: '13px', color: '#555' }}>
                  <span>{item.name}</span>
                  {item.badge && <span style={{ background: '#fee2e2', color: '#ef4444', fontSize: '11px', padding: '1px 6px', borderRadius: '10px' }}>{item.badge}</span>}
                </div>
              ))}

              <div style={{ fontSize: '11px', color: '#999', fontWeight: 600, letterSpacing: '0.05em', marginTop: '20px', marginBottom: '10px', paddingLeft: '12px' }}>Main menu</div>
              <div style={{ padding: '10px 12px', borderRadius: '8px', fontSize: '13px', color: '#555', marginBottom: '2px' }}>Overview</div>
              <div style={{ padding: '10px 12px', borderRadius: '8px', fontSize: '13px', color: '#fff', background: '#22c55e', marginBottom: '2px', fontWeight: 500 }}>Projects</div>
              <div style={{ paddingLeft: '24px', marginTop: '4px' }}>
                {['Marketing', 'Development', 'Support'].map((s, i) => (
                  <div key={i} style={{ padding: '6px 12px', fontSize: '12px', color: i === 0 ? '#22c55e' : '#999' }}>{s}</div>
                ))}
              </div>
              <div style={{ fontSize: '11px', color: '#999', fontWeight: 600, letterSpacing: '0.05em', marginTop: '16px', marginBottom: '8px', paddingLeft: '12px' }}>Project view</div>
              {['Tasks', 'Planner'].map((s, i) => (
                <div key={i} style={{ padding: '6px 12px', fontSize: '12px', color: '#999' }}>{s}</div>
              ))}
            </div>

            {/* Main Content */}
            <div style={{ padding: '20px 24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', paddingBottom: '16px', borderBottom: '1px solid #f0f0f0' }}>
                <span style={{ fontWeight: 600, fontSize: '16px' }}>Dashboard</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ background: '#f5f5f5', borderRadius: '8px', padding: '8px 16px', fontSize: '12px', color: '#999' }}>🔍 Search</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#e5e7eb' }}></div>
                    <div>
                      <div style={{ fontSize: '12px', fontWeight: 600 }}>Lilly Byrne <span style={{ color: '#22c55e' }}>●</span></div>
                      <div style={{ fontSize: '10px', color: '#999' }}>byrne@example.com</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '24px' }}>
                {[
                  { label: 'Task Completed', value: '08', extra: '10+', color: '#22c55e' },
                  { label: 'New Task', value: '10', extra: '12+', color: '#3b82f6' },
                  { label: 'Project Done', value: '10', extra: '12+', color: '#3b82f6' },
                ].map((s, i) => (
                  <div key={i} style={{ background: '#f9fafb', borderRadius: '12px', padding: '18px', border: '1px solid #f0f0f0' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                      <span style={{ fontSize: '12px', color: '#999' }}>{s.label}</span>
                      <span style={{ fontSize: '20px', fontWeight: 700 }}>{s.value}</span>
                    </div>
                    <div style={{ height: '30px', position: 'relative' }}>
                      <svg width="100%" height="30" style={{ display: 'block' }}>
                        <path d={`M0,25 Q20,${10 + i * 5} 40,15 T80,${12 + i * 3} T120,${18 - i * 2} T160,10`} fill="none" stroke={s.color} strokeWidth="2" />
                      </svg>
                    </div>
                    <div style={{ fontSize: '12px', marginTop: '4px' }}>
                      <span style={{ color: s.color, fontWeight: 600 }}>{s.extra} more</span>
                      <span style={{ color: '#999' }}> from last week</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Task section */}
              <div style={{ fontWeight: 600, fontSize: '15px', marginBottom: '12px' }}>Task</div>
              {[1, 2].map((_, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', background: '#f9fafb', borderRadius: '10px', marginBottom: '8px', border: '1px solid #f0f0f0' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#22c55e', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ color: '#fff', fontSize: '10px' }}>▶</span>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '11px', color: '#999' }}>Start from</div>
                    <div style={{ fontSize: '12px', fontWeight: 500 }}>{i === 0 ? '9.00 am' : '3.00 am'}</div>
                  </div>
                  <div style={{ flex: 2 }}>
                    <div style={{ fontSize: '12px', fontWeight: 500 }}>Search Inspiration for project</div>
                    <div style={{ fontSize: '10px', color: '#22c55e' }}>🔗 www.taskboard.com • 💬 {i === 0 ? '10' : '3'} comments</div>
                  </div>
                  <div style={{ fontSize: '12px', color: '#22c55e', fontWeight: 500 }}>{i === 0 ? '24%' : '60%'} complete</div>
                  <div style={{ padding: '4px 12px', borderRadius: '6px', border: '1px solid #22c55e', color: '#22c55e', fontSize: '11px' }}>Reminder</div>
                </div>
              ))}

              {/* Kanban */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', marginTop: '16px' }}>
                {[
                  { label: 'New Task', count: 2, bg: '#22c55e' },
                  { label: 'In Progress', count: 7, bg: '#111' },
                  { label: 'Completed', count: 4, bg: '#22c55e' },
                ].map((col, i) => (
                  <div key={i}>
                    <div style={{ background: col.bg, color: '#fff', padding: '10px 14px', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '13px', fontWeight: 500, marginBottom: '6px' }}>
                      <span><span style={{ opacity: 0.6, marginRight: '6px' }}>{col.count}</span>{col.label}</span>
                      <span style={{ fontSize: '16px' }}>+</span>
                    </div>
                    <div style={{ background: '#f9fafb', borderRadius: '8px', padding: '12px', border: '1px solid #f0f0f0' }}>
                      <div style={{ fontSize: '10px', color: '#999' }}>TaskBoard</div>
                      <div style={{ fontSize: '13px', fontWeight: 600 }}>{['UI Animations', 'Development', 'UX Copywriter'][i]}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
