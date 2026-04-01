import React, { useRef } from 'react';
import { MonitorSmartphone, Users, Target, Repeat } from 'lucide-react';

const ProductOverview = () => {
  const sectionRef = useRef(null);



  const bottomFeatures = [
    { icon: <Users size={24} />, title: 'Full Visibility Across', desc: 'See task status, owners, and deadlines at a glance no guessing.' },
    { icon: <Target size={24} />, title: 'Proactive, Not Reactive', desc: 'Get notified before deadlines slip, not after problems happen.' },
    { icon: <Repeat size={24} />, title: 'One Tool, One Workflow', desc: 'Replace multiple tools with a single, connected task management system.' },
  ];

  return (
    <section ref={sectionRef} className="reveal" style={{ padding: '0', background: 'var(--body-bg)' }}>
      <div style={{ margin: '0 24px', borderRadius: '32px', background: 'linear-gradient(180deg, #111 0%, #1a1a2e 50%, #111 100%)', padding: '80px 40px 60px', textAlign: 'center', overflow: 'hidden', position: 'relative' }}>
        
        <div className="reveal delay-100 section-label-dark">
          <MonitorSmartphone size={16} />
          Product Overview
        </div>
        <h2 className="reveal delay-200 section-title-dark" style={{ maxWidth: '600px', margin: '0 auto 16px' }}>
          Everything You Need to<br /><em style={{ fontStyle: 'italic' }}>Manage Tasks</em>
        </h2>
        <p className="reveal delay-200 section-desc-dark">
          Nexgent is a smart task management platform that helps teams plan, collaborate, and track progress easily.
        </p>

        {/* Dashboard with floating cards */}
        <div className="reveal delay-300" style={{ maxWidth: '950px', margin: '0 auto 60px', position: 'relative' }}>
          
          {/* Main Dashboard */}
          <div style={{ borderRadius: '16px', overflow: 'hidden', background: '#fff', boxShadow: '0 20px 80px rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.08)', position: 'relative', zIndex: 2 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr', minHeight: '480px' }}>
              {/* Sidebar */}
              <div style={{ background: '#fafbfc', borderRight: '1px solid #eee', padding: '18px 14px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
                  <div style={{ width: '26px', height: '26px', borderRadius: '50%', background: '#22c55e', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ width: '10px', height: '10px', background: '#fff', borderRadius: '3px', transform: 'rotate(45deg)' }}></div>
                  </div>
                  <span style={{ fontWeight: 700, fontSize: '15px', color: '#111' }}>Nexgent</span>
                </div>
                
                {[
                  { name: 'Inbox', badge: '3', icon: '📥' },
                  { name: 'Team Members', badge: null, icon: '👥' },
                  { name: 'All Updates', badge: '6', icon: '🔔' },
                  { name: 'Settings', badge: null, icon: '⚙️' },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '9px 12px', marginBottom: '2px', borderRadius: '8px', fontSize: '13px', color: '#555' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ fontSize: '12px' }}>{item.icon}</span>
                      <span>{item.name}</span>
                    </div>
                    {item.badge && <span style={{ background: '#fee2e2', color: '#ef4444', fontSize: '10px', padding: '1px 6px', borderRadius: '10px', fontWeight: 600 }}>{item.badge}</span>}
                  </div>
                ))}
                
                <div style={{ fontSize: '10px', color: '#aaa', fontWeight: 600, letterSpacing: '0.08em', marginTop: '18px', marginBottom: '8px', paddingLeft: '12px' }}>MAIN MENU</div>
                <div style={{ padding: '9px 12px', borderRadius: '8px', fontSize: '13px', color: '#555', marginBottom: '2px' }}>Overview</div>
                <div style={{ padding: '9px 12px', borderRadius: '8px', fontSize: '13px', color: '#fff', background: '#22c55e', marginBottom: '2px', fontWeight: 500 }}>Projects</div>
                <div style={{ paddingLeft: '20px', marginTop: '4px' }}>
                  {['Marketing', 'Development', 'Support'].map((s, i) => (
                    <div key={i} style={{ padding: '5px 12px', fontSize: '12px', color: i === 0 ? '#22c55e' : '#bbb' }}>{s}</div>
                  ))}
                </div>
                <div style={{ fontSize: '10px', color: '#aaa', fontWeight: 600, letterSpacing: '0.08em', marginTop: '14px', marginBottom: '6px', paddingLeft: '12px' }}>PROJECT VIEW</div>
                {['Tasks', 'Planner', 'File'].map((s, i) => (
                  <div key={i} style={{ padding: '5px 12px', fontSize: '12px', color: '#888' }}>{s}</div>
                ))}
                <div style={{ fontSize: '10px', color: '#aaa', fontWeight: 600, letterSpacing: '0.08em', marginTop: '14px', marginBottom: '6px', paddingLeft: '12px' }}>SETTINGS</div>
                {['Import', 'Trash'].map((s, i) => (
                  <div key={i} style={{ padding: '5px 12px', fontSize: '12px', color: '#888' }}>{s}</div>
                ))}
              </div>
              
              {/* Main Content */}
              <div style={{ padding: '18px 22px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px', paddingBottom: '14px', borderBottom: '1px solid #f0f0f0' }}>
                  <span style={{ fontWeight: 600, fontSize: '15px' }}>Dashboard</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ background: '#f5f5f5', borderRadius: '8px', padding: '7px 16px', fontSize: '12px', color: '#999', display: 'flex', alignItems: 'center', gap: '6px' }}>🔍 Search</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#e5e7eb' }}></div>
                      <div>
                        <div style={{ fontSize: '12px', fontWeight: 600 }}>Lilly Byrne</div>
                        <div style={{ fontSize: '10px', color: '#999' }}>byrne@example.com</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '14px', marginBottom: '20px' }}>
                  {[
                    { label: 'Task Completed', value: '08', extra: '10+', color: '#22c55e' },
                    { label: 'New Task', value: '10', extra: '12+', color: '#3b82f6' },
                    { label: 'Project Done', value: '10', extra: '12+', color: '#3b82f6' },
                  ].map((s, i) => (
                    <div key={i} style={{ background: '#f9fafb', borderRadius: '12px', padding: '16px', border: '1px solid #f0f0f0' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                        <span style={{ fontSize: '12px', color: '#999' }}>{s.label}</span>
                        <span style={{ fontSize: '22px', fontWeight: 700 }}>{s.value}</span>
                      </div>
                      <svg width="100%" height="30" style={{ display: 'block' }}>
                        <path d={`M0,25 Q30,${8+i*5} 60,15 T120,${10+i*3} T180,8`} fill="none" stroke={s.color} strokeWidth="2" opacity="0.7" />
                      </svg>
                      <div style={{ fontSize: '11px', marginTop: '6px' }}>
                        <span style={{ color: s.color, fontWeight: 600 }}>{s.extra} more</span>
                        <span style={{ color: '#999' }}> from last week</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Task section */}
                <div style={{ fontWeight: 600, fontSize: '14px', marginBottom: '10px' }}>Task</div>
                {[
                  { time: '9.00 am', progress: '24%' },
                  { time: '3.00 am', progress: '60%' },
                ].map((t, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 14px', background: '#f9fafb', borderRadius: '10px', marginBottom: '6px', border: '1px solid #f0f0f0', fontSize: '12px' }}>
                    <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#22c55e', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <span style={{ color: '#fff', fontSize: '9px' }}>▶</span>
                    </div>
                    <div style={{ minWidth: '65px' }}>
                      <div style={{ fontSize: '10px', color: '#999' }}>Start from</div>
                      <div style={{ fontWeight: 500, fontSize: '11px' }}>{t.time}</div>
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 500, fontSize: '12px' }}>Search Inspiration for project</div>
                      <div style={{ fontSize: '10px', color: '#22c55e' }}>🔗 www.taskboard.com • 💬 {i === 0 ? '10' : '3'} comments</div>
                    </div>
                    <div style={{ fontSize: '12px', fontWeight: 600, color: '#22c55e' }}>{t.progress} complete</div>
                    <div style={{ padding: '4px 10px', borderRadius: '6px', border: '1px solid #22c55e', color: '#22c55e', fontSize: '10px', fontWeight: 500 }}>Reminder</div>
                  </div>
                ))}

                {/* Kanban */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', marginTop: '14px' }}>
                  {[
                    { label: 'New Task', count: 2, bg: '#22c55e', task: 'UI Animations' },
                    { label: 'In Progress', count: 7, bg: '#111', task: 'Development' },
                    { label: 'Completed', count: 4, bg: '#22c55e', task: 'UX Copywriter' },
                  ].map((col, i) => (
                    <div key={i}>
                      <div style={{ background: col.bg, color: '#fff', padding: '8px 12px', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '12px', fontWeight: 500, marginBottom: '6px' }}>
                        <span><span style={{ background: 'rgba(255,255,255,0.2)', padding: '1px 5px', borderRadius: '4px', marginRight: '6px', fontSize: '10px' }}>{col.count}</span>{col.label}</span>
                        <span>+</span>
                      </div>
                      <div style={{ background: '#f9fafb', borderRadius: '8px', padding: '10px 12px', border: '1px solid #f0f0f0' }}>
                        <div style={{ fontSize: '10px', color: '#999' }}>TaskBoard</div>
                        <div style={{ fontSize: '13px', fontWeight: 600, marginBottom: '4px' }}>{col.task}</div>
                        <div style={{ fontSize: '10px', color: '#666' }}>Micro interactions, Loading and Progress, Navigation.</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Floating Card - Left (Copywriting) with float animation */}
          <div className="floating-card-left" style={{
            position: 'absolute',
            bottom: '60px',
            left: '-40px',
            zIndex: 5,
            width: '280px',
            background: '#fff',
            borderRadius: '16px',
            padding: '20px',
            boxShadow: '0 12px 40px rgba(0,0,0,0.2)',
            border: '1px solid rgba(200,200,200,0.3)',
          }}>
            <div style={{ display: 'inline-block', padding: '4px 12px', borderRadius: '6px', background: '#fee2e2', color: '#ef4444', fontSize: '11px', fontWeight: 600, marginBottom: '12px' }}>Copywriting</div>
            <div style={{ position: 'absolute', top: '16px', right: '16px', color: '#ccc', fontSize: '16px' }}>•••</div>
            <p style={{ fontSize: '13px', color: '#555', lineHeight: 1.5, marginBottom: '12px' }}>
              Sint ex excepteur proident adipisicing adipisicing occaecat pariatur.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '11px', color: '#999' }}>
              <span>📅 Mar 14</span>
              <span>❤️ 2</span>
              <span>📎 4</span>
            </div>
            <div style={{ position: 'absolute', bottom: '14px', right: '14px', width: '28px', height: '28px', borderRadius: '50%', background: '#f59e0b' }}></div>
          </div>

          {/* Floating Card - Right (UI Animations) with float animation */}
          <div className="floating-card-right" style={{
            position: 'absolute',
            top: '120px',
            right: '-50px',
            zIndex: 5,
            width: '300px',
            background: '#fff',
            borderRadius: '16px',
            padding: '20px',
            boxShadow: '0 12px 40px rgba(0,0,0,0.2)',
            border: '1px solid rgba(200,200,200,0.3)',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontSize: '12px', color: '#999' }}>Nexgent</span>
              <span style={{ color: '#ccc', fontSize: '16px' }}>•••</span>
            </div>
            <h4 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '8px', color: '#111' }}>UI Animations</h4>
            <p style={{ fontSize: '13px', color: '#555', lineHeight: 1.5, marginBottom: '14px' }}>
              Micro interactions, Loading and Progress, Navigation.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
              {[1,2,3].map(i => (
                <div key={i} style={{ width: '24px', height: '24px', borderRadius: '50%', background: `hsl(${i*90}, 40%, 65%)`, border: '2px solid #fff', marginLeft: i > 1 ? '-8px' : 0 }}></div>
              ))}
              <span style={{ fontSize: '10px', color: '#999', background: '#f0f0f0', padding: '2px 6px', borderRadius: '10px', marginLeft: '-4px' }}>6+</span>
              <span style={{ fontSize: '11px', color: '#999', marginLeft: '8px' }}>💬 5</span>
              <span style={{ fontSize: '11px', color: '#999' }}>📎 3</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '11px', color: '#999' }}>
              <span>📅 Nov 10</span>
              <span style={{ padding: '2px 8px', borderRadius: '6px', background: '#fef3c7', color: '#d97706', fontSize: '10px', fontWeight: 600 }}>Visual</span>
              <span style={{ padding: '2px 8px', borderRadius: '6px', background: '#fce7f3', color: '#db2777', fontSize: '10px', fontWeight: 600 }}>P2 🏆</span>
            </div>
          </div>
        </div>

        {/* Bottom 3 feature blocks */}
        <div className="reveal delay-400" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0', maxWidth: '1000px', margin: '0 auto' }}>
          {bottomFeatures.map((f, i) => (
            <div key={i} style={{ textAlign: 'center', padding: '40px 28px', borderLeft: i > 0 ? '1px solid rgba(255,255,255,0.08)' : 'none' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: '#22c55e', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', margin: '0 auto 20px' }}>{f.icon}</div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '22px', fontWeight: 400, color: '#fff', marginBottom: '10px' }}>{f.title}</h4>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px', lineHeight: 1.6 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductOverview;
