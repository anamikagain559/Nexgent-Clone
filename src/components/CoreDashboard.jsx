import React from 'react';
import { Zap, RefreshCw, Shield } from 'lucide-react';

const CoreDashboard = () => {
  return (
    <section style={{ padding: '100px 0', background: '#03140b', color: '#fff', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '600px', height: '400px', background: 'radial-gradient(ellipse, rgba(34,197,94,0.1) 0%, transparent 70%)', pointerEvents: 'none' }}></div>
      
      <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
        <p className="reveal delay-100" style={{ fontSize: '13px', fontWeight: 600, color: '#22c55e', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '16px' }}>ALL-IN-ONE PLATFORM</p>
        <h2 className="reveal delay-200" style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, color: '#fff', marginBottom: '16px', lineHeight: 1.15 }}>
          Simplify Your Business<br/>Projects
        </h2>
        <p className="reveal delay-300" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '16px', maxWidth: '560px', margin: '0 auto 48px', lineHeight: 1.7 }}>
          Nexgent is a smart task management platform that helps teams plan, collaborate, and track progress easily.
        </p>

        {/* Dashboard Mockup Card */}
        <div className="reveal delay-400" style={{ maxWidth: '900px', margin: '0 auto 60px', borderRadius: '16px', padding: '2px', background: 'linear-gradient(135deg, rgba(34,197,94,0.3), rgba(255,255,255,0.05))' }}>
          <div style={{ background: 'linear-gradient(180deg, #0a1f12, #03140b)', borderRadius: '14px', padding: '32px', position: 'relative', overflow: 'hidden' }}>
            {/* Fake dashboard UI */}
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '24px' }}>
              <div>
                <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '12px', padding: '24px', border: '1px solid rgba(255,255,255,0.08)', marginBottom: '16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                    <div style={{ height: '16px', width: '120px', background: 'rgba(255,255,255,0.08)', borderRadius: '6px' }}></div>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <div style={{ height: '28px', width: '60px', background: 'rgba(34,197,94,0.2)', borderRadius: '6px' }}></div>
                      <div style={{ height: '28px', width: '60px', background: 'rgba(255,255,255,0.05)', borderRadius: '6px' }}></div>
                    </div>
                  </div>
                  {/* Chart area */}
                  <div style={{ display: 'flex', alignItems: 'flex-end', gap: '6px', height: '140px' }}>
                    {[35, 55, 40, 75, 50, 85, 60, 95, 70, 80, 55, 65].map((h, i) => (
                      <div key={i} style={{ flex: 1, height: `${h}%`, background: i === 7 ? '#22c55e' : 'rgba(255,255,255,0.08)', borderRadius: '4px 4px 0 0', transition: 'all 0.3s' }}></div>
                    ))}
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '12px', padding: '16px', border: '1px solid rgba(255,255,255,0.08)', flex: 1 }}>
                  <div style={{ height: '12px', width: '80px', background: 'rgba(255,255,255,0.08)', borderRadius: '4px', marginBottom: '12px' }}></div>
                  <div style={{ fontSize: '24px', fontWeight: 700, color: '#22c55e', marginBottom: '4px' }}>87%</div>
                  <div style={{ height: '8px', width: '60px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px' }}></div>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '12px', padding: '16px', border: '1px solid rgba(255,255,255,0.08)', flex: 1 }}>
                  <div style={{ height: '12px', width: '80px', background: 'rgba(255,255,255,0.08)', borderRadius: '4px', marginBottom: '12px' }}></div>
                  <div style={{ fontSize: '24px', fontWeight: 700, color: '#fff', marginBottom: '4px' }}>2,847</div>
                  <div style={{ height: '8px', width: '60px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px' }}></div>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '12px', padding: '16px', border: '1px solid rgba(255,255,255,0.08)', flex: 1 }}>
                  <div style={{ height: '12px', width: '80px', background: 'rgba(255,255,255,0.08)', borderRadius: '4px', marginBottom: '12px' }}></div>
                  <div style={{ fontSize: '24px', fontWeight: 700, color: '#22c55e', marginBottom: '4px' }}>+24%</div>
                  <div style={{ height: '8px', width: '60px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom features */}
        <div className="reveal delay-400" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px', maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(34,197,94,0.15)' }}>
              <Zap size={22} style={{ color: '#22c55e' }} />
            </div>
            <h4 style={{ fontWeight: 600, color: '#fff', fontSize: '15px', fontFamily: 'var(--font-body)' }}>Proactive, Not Reactive</h4>
            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)', lineHeight: 1.6, textAlign: 'center' }}>Get notified before deadlines slip, not after problems happen.</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(34,197,94,0.15)' }}>
              <RefreshCw size={22} style={{ color: '#22c55e' }} />
            </div>
            <h4 style={{ fontWeight: 600, color: '#fff', fontSize: '15px', fontFamily: 'var(--font-body)' }}>One Tool, One Workflow</h4>
            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)', lineHeight: 1.6, textAlign: 'center' }}>Replace multiple tools with a single, connected task management system.</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(34,197,94,0.15)' }}>
              <Shield size={22} style={{ color: '#22c55e' }} />
            </div>
            <h4 style={{ fontWeight: 600, color: '#fff', fontSize: '15px', fontFamily: 'var(--font-body)' }}>Secure Platform</h4>
            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)', lineHeight: 1.6, textAlign: 'center' }}>See task status, owners, and deadlines at a glance — no guessing.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreDashboard;
