import React from 'react';
import { Sparkles } from 'lucide-react';

const Features = () => {
  return (
    <section id="features" className="reveal" style={{ padding: '100px 0', background: 'var(--body-bg)' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <div className="reveal delay-100 section-label">
          <Sparkles size={16} />
          Powerful Features
        </div>
        <h2 className="reveal delay-200 section-title" style={{ maxWidth: '650px', margin: '0 auto 16px' }}>
          Power Up Your Projects<br />With <em>Nexgent</em>
        </h2>
        <p className="reveal delay-200 section-desc">
          Simplify planning, enhance collaboration, and increase productivity with Nexgent.
        </p>

        {/* 2x2 Grid of Feature Cards with mockups */}
        <div className="reveal delay-300" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', maxWidth: '1000px', margin: '0 auto', textAlign: 'left' }}>
          
          {/* Card 1: Smart Task Management */}
          <div className="card" style={{ padding: '32px', background: '#f3f5f8' }}>
            <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', fontWeight: 400, color: 'var(--text-primary)', marginBottom: '10px' }}>Smart Task Management</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.6, marginBottom: '24px' }}>
              Create, assign, and organize tasks with due dates, priorities, and labels for better productivity.
            </p>
            {/* Timeline mockup */}
            <div style={{ background: '#fff', borderRadius: '12px', padding: '20px', border: '1px solid #e0e4ea' }}>
              {[
                { time: '08:00 AM', task: 'Development', color: '#dcfce7' },
                { time: '10:00 AM', task: 'UX Copywrite', color: '#fef3c7' },
                { time: '12:00 PM', task: 'Web Visual Design', color: '#ffe4c9' },
              ].map((t, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '10px 0', borderBottom: i < 2 ? '1px solid #f5f5f5' : 'none' }}>
                  <span style={{ fontSize: '11px', color: '#999', width: '70px', flexShrink: 0 }}>{t.time}</span>
                  <div style={{ height: '1px', width: '20px', background: '#ddd', flexShrink: 0 }}></div>
                  <div style={{ background: t.color, padding: '8px 16px', borderRadius: '8px', fontSize: '12px', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '10px', color: '#999' }}>Task</span>
                    <span style={{ fontWeight: 600, color: '#333' }}>{t.task}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2: Calendar & Deadlines */}
          <div className="card" style={{ padding: '32px', background: '#f3f5f8' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
              {/* Circular workflow diagram */}
              <div style={{ position: 'relative', width: '200px', height: '200px' }}>
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '60px', height: '60px', borderRadius: '50%', background: '#22c55e', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ width: '20px', height: '20px', border: '3px solid #fff', borderRadius: '50%' }}></div>
                </div>
                {/* Circle outline */}
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '160px', height: '160px', borderRadius: '50%', border: '2px solid #e0e4ea' }}></div>
                {/* Nodes */}
                {[
                  { label: 'Completed', top: '5px', left: '30px' },
                  { label: 'Process', top: '5px', right: '20px' },
                  { label: 'Remaining', bottom: '30px', left: '15px' },
                  { label: 'New Task', bottom: '30px', right: '10px' },
                ].map((n, i) => (
                  <div key={i} style={{ position: 'absolute', ...n, background: '#fff', padding: '6px 14px', borderRadius: '8px', fontSize: '11px', fontWeight: 500, border: '1px solid #e0e4ea', display: 'flex', alignItems: 'center', gap: '6px', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '3px', background: ['#22c55e', '#ef4444', '#f59e0b', '#3b82f6'][i] }}></div>
                    {n.label}
                  </div>
                ))}
              </div>
            </div>
            {/* Avatars */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '-4px', marginBottom: '20px' }}>
              {[1,2,3,4].map(i => (
                <div key={i} style={{ width: '32px', height: '32px', borderRadius: '50%', background: `hsl(${i*80}, 50%, 75%)`, border: '2px solid #fff', marginLeft: i > 1 ? '-8px' : 0 }}></div>
              ))}
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#f0f0f0', border: '2px solid #fff', marginLeft: '-8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: 600, color: '#666' }}>5+</div>
            </div>
            <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', fontWeight: 400, color: 'var(--text-primary)', marginBottom: '10px' }}>Calendar & Deadlines</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.6 }}>
              Visualize deadlines with calendar and timeline views for clearer planning and time management.
            </p>
          </div>

          {/* Card 3: Team Collaboration */}
          <div className="card" style={{ padding: '32px', background: '#f3f5f8' }}>
            <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', fontWeight: 400, color: 'var(--text-primary)', marginBottom: '10px' }}>Team Collaboration</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.6, marginBottom: '24px' }}>
              Comment, tag teammates, share files, and stay aligned in real time across tasks.
            </p>
            {/* File Attachment mockup */}
            <div style={{ background: '#fff', borderRadius: '12px', padding: '16px', border: '1px solid #e0e4ea' }}>
              <div style={{ fontWeight: 600, fontSize: '14px', marginBottom: '12px' }}>File Attachment</div>
              {[
                { name: 'Data-structures.xls', size: '1.4 MB', icon: '📊', bg: '#dcfce7' },
                { name: 'Team-Photos.jpg', size: '34 MB', icon: '🖼️', bg: '#dbeafe' },
                { name: 'Contact-data.csv', size: '1 MB', icon: '📋', bg: '#ffe4c9' },
              ].map((f, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '8px 0', borderBottom: i < 2 ? '1px solid #f5f5f5' : 'none' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: f.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' }}>{f.icon}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '13px', fontWeight: 500 }}>{f.name}</div>
                    <div style={{ fontSize: '11px', color: '#999' }}>Shared file</div>
                  </div>
                  <span style={{ fontSize: '12px', color: '#999' }}>{f.size}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 4: Smart Notifications */}
          <div className="card" style={{ padding: '32px', background: '#f3f5f8' }}>
            {/* Project timeline mockup */}
            <div style={{ background: '#fff', borderRadius: '12px', padding: '16px', border: '1px solid #e0e4ea', marginBottom: '24px' }}>
              {[
                { name: 'Project Manage', date: '05 Jan to 20 Jan 26', color: '#ef4444' },
                { name: 'In Progress', date: '08 Jan to 24 Jan 26', color: '#22c55e' },
                { name: 'Project Manage', date: '05 Jan to 20 Jan 26', color: '#ef4444' },
              ].map((p, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px', marginBottom: '6px', background: i === 1 ? '#f0fdf4' : '#fafafa', borderRadius: '10px', border: i === 1 ? '1px solid #bbf7d0' : '1px solid #f0f0f0' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: `${p.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ width: '12px', height: '12px', borderRadius: '4px', background: p.color }}></div>
                  </div>
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: 600 }}>{p.name}</div>
                    <div style={{ fontSize: '11px', color: '#999' }}>{p.date}</div>
                  </div>
                </div>
              ))}
            </div>
            <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', fontWeight: 400, color: 'var(--text-primary)', marginBottom: '10px' }}>Smart Notifications</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.6 }}>
              Never miss a task with real-time reminders and alerts that keep you on schedule.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
