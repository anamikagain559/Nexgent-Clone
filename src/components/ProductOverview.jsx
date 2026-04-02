import React, { useRef } from 'react';
import { MonitorSmartphone, LayoutGrid, Calendar, Users, Bell } from 'lucide-react';

const ProductOverview = () => {
  const sectionRef = useRef(null);

  const cardStyle = {
    background: '#f9fafb',
    borderRadius: '24px',
    padding: '40px',
    border: '1px solid #f0f0f0',
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  };

  return (
    <section ref={sectionRef} className="reveal" style={{ padding: '0', background: '#f8f9fa' }}>
      <div style={{ margin: '0 24px', borderRadius: '32px', background: '#fff', padding: '80px 40px 60px', textAlign: 'center', overflow: 'hidden', position: 'relative', boxShadow: '0 20px 80px rgba(0,0,0,0.05)' }}>

        <div className="reveal delay-100 section-label" style={{ marginBottom: '20px' }}>
          <MonitorSmartphone size={16} /> Product Overview
        </div>
        <h2 className="reveal delay-200 section-title" style={{ maxWidth: '600px', margin: '0 auto 16px', lineHeight: 1.2 }}>
          Power Up Your Projects<br /> With <span style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', fontWeight: 400 }}>Nexgent</span>
        </h2>
        <p className="reveal delay-200 section-desc" style={{ color: '#666', fontSize: '16px', maxWidth: '500px', margin: '0 auto 48px' }}>
          Simplify planning, enhance collaboration, and increase productivity with Nexgent.
        </p>

        {/* Main 2x2 Grid */}
        <div className="reveal delay-300" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px', maxWidth: '1100px', margin: '0 auto' }}>

          {/* Grid Item 1: Smart Task Management */}
          <div style={cardStyle}>
            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#22c55e', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><LayoutGrid size={24} /></div>
              <div>
                <h4 style={{ fontSize: '20px', fontWeight: 600, color: '#111' }}>Smart Task Management</h4>
                <p style={{ fontSize: '14px', color: '#666' }}>Create, assign, and organize tasks with due dates, priorities, and labels for better productivity.</p>
              </div>
            </div>
            {/* Mockup Timeline */}
            <div style={{ background: '#fff', padding: '16px', borderRadius: '12px', border: '1px solid #eee' }}>
              {/* Simplified Time Axis and Task Blocks */}
              <div style={{ display: 'flex', gap: '16px' }}>
                <div style={{ fontSize: '12px', color: '#999', width: '60px', textAlign: 'right' }}>
                  08:00 AM<br /><div style={{ height: '60px' }}></div>
                  10:00 AM<br /><div style={{ height: '60px' }}></div>
                  12:00 PM
                </div>
                <div style={{ flex: 1, position: 'relative' }}>
                  <div style={{ height: '30px', background: '#d1fae5', borderRadius: '8px', marginBottom: '8px', padding: '6px', fontSize: '12px', color: '#166534' }}>Research</div>
                  <div style={{ height: '30px', background: '#fee2e2', borderRadius: '8px', marginBottom: '8px', padding: '6px', fontSize: '12px', color: '#b91c1c' }}>UX Design</div>
                  <div style={{ height: '30px', background: '#e0f2fe', borderRadius: '8px', padding: '6px', fontSize: '12px', color: '#0369a1' }}>Development</div>
                  {/* Add avatar dot */}
                  <div style={{ position: 'absolute', top: '35px', left: '120px', width: '24px', height: '24px', borderRadius: '50%', background: '#eee', border: '2px solid #fff' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Grid Item 2: Calendar & Deadlines */}
          <div style={cardStyle}>
            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#22c55e', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Calendar size={24} /></div>
              <div>
                <h4 style={{ fontSize: '20px', fontWeight: 600, color: '#111' }}>Calendar & Deadlines</h4>
                <p style={{ fontSize: '14px', color: '#666' }}>Visualize deadlines with calendar and timeline views for clearer planning and time management.</p>
              </div>
            </div>
            {/* Mockup */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', background: '#fff', padding: '16px', borderRadius: '12px', border: '1px solid #eee', position: 'relative', minHeight: '180px' }}>
              {/* Central Circle */}
              <div style={{ width: '100px', height: '100px', borderRadius: '50%', background: '#fff', border: '12px solid #22c55e', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, fontSize: '18px' }}>60%</div>
              {/* Avatars */}
              <div style={{ display: 'flex', gap: '4px', position: 'absolute', top: '16px', left: '16px' }}>
                {[1, 2, 3, 4].map(i => <div key={i} style={{ width: '24px', height: '24px', borderRadius: '50%', background: `hsl(${i * 40}, 60%, 70%)`, border: '2px solid #fff' }}></div>)}
                <div style={{ fontSize: '10px', color: '#666', marginLeft: '4px' }}>+5</div>
              </div>
              {/* Status Pills */}
              <div style={{ position: 'absolute', top: '16px', right: '16px', background: '#d1fae5', color: '#166534', fontSize: '11px', padding: '3px 8px', borderRadius: '99px' }}>Completed</div>
              <div style={{ position: 'absolute', top: '50px', right: '16px', background: '#fee2e2', color: '#b91c1c', fontSize: '11px', padding: '3px 8px', borderRadius: '99px' }}>Remaining</div>
              <div style={{ position: 'absolute', top: '84px', right: '16px', background: '#e0f2fe', color: '#0369a1', fontSize: '11px', padding: '3px 8px', borderRadius: '99px' }}>Process</div>
              <div style={{ position: 'absolute', top: '118px', right: '16px', background: '#fef3c7', color: '#d97706', fontSize: '11px', padding: '3px 8px', borderRadius: '99px' }}>New Task</div>
            </div>
          </div>

          {/* Grid Item 3: Team Collaboration */}
          <div style={cardStyle}>
            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#22c55e', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Users size={24} /></div>
              <div>
                <h4 style={{ fontSize: '20px', fontWeight: 600, color: '#111' }}>Team Collaboration</h4>
                <p style={{ fontSize: '14px', color: '#666' }}>Comment, tag teammates, share files, and stay aligned in real-time across tasks.</p>
              </div>
            </div>
            {/* Mockup Tables */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 0.8fr', gap: '16px' }}>
              {/* Left Table - Status */}
              <div style={{ background: '#fff', padding: '16px', borderRadius: '12px', border: '1px solid #eee' }}>
                <div style={{ fontWeight: 600, fontSize: '13px', marginBottom: '10px' }}>Project Status</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #eee', paddingBottom: '6px', fontSize: '11px', color: '#999', marginBottom: '8px' }}>
                  <span>Project</span><span>Status</span>
                </div>
                {[
                  { project: 'Page Redesign', status: 'On Track', color: '#22c55e' },
                  { project: 'Pitch Deck', status: 'At Risk', color: '#ef4444' },
                  { project: 'New IOS Dev', status: 'Off Track', color: '#ef4444' },
                ].map((row, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '6px' }}>
                    <span style={{ color: '#111' }}>{row.project}</span>
                    <span style={{ padding: '2px 8px', borderRadius: '6px', background: row.color + '10', color: row.color, fontSize: '10px' }}>{row.status}</span>
                  </div>
                ))}
              </div>
              {/* Right Table - Members */}
              <div style={{ background: '#fff', padding: '16px', borderRadius: '12px', border: '1px solid #eee' }}>
                <div style={{ fontWeight: 600, fontSize: '13px', marginBottom: '10px' }}>Project Members</div>
                {[
                  { name: 'Brooklyn', role: 'Project Owner' },
                  { name: 'Jerome Bell', role: 'Developer' },
                ].map((member, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                    <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: `hsl(${i * 90}, 50%, 75%)`, border: '2px solid #fff' }}></div>
                    <div>
                      <div style={{ fontSize: '12px', fontWeight: 500, color: '#111' }}>{member.name}</div>
                      <div style={{ fontSize: '10px', color: '#999' }}>{member.role}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Grid Item 4: Smart Notifications */}
          <div style={cardStyle}>
            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#22c55e', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Bell size={24} /></div>
              <div>
                <h4 style={{ fontSize: '20px', fontWeight: 600, color: '#111' }}>Smart Notifications</h4>
                <p style={{ fontSize: '14px', color: '#666' }}>Never miss a task with real-time reminders and alerts that keep you on schedule.</p>
              </div>
            </div>
            {/* Mockup Notifications */}
            <div style={{ background: '#fff', padding: '16px', borderRadius: '12px', border: '1px solid #eee', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ border: '1px solid #eee', borderRadius: '8px', padding: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '13px', color: '#111' }}>Project Manage</div>
                  <div style={{ fontSize: '10px', color: '#999' }}>05 Jan to 20 Jan 26</div>
                </div>
                <div style={{ width: '24px', height: '24px', background: '#fee2e2', borderRadius: '6px', border: '1px solid #eee' }}></div>
              </div>
              <div style={{ border: '1px solid #22c55e', borderRadius: '8px', padding: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#d1fae510' }}>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '13px', color: '#111' }}>In Progress</div>
                  <div style={{ fontSize: '10px', color: '#999' }}>08 Jan to 24 Jan 26</div>
                </div>
                <div style={{ width: '24px', height: '24px', background: '#eee', borderRadius: '6px', border: '1px solid #eee' }}></div>
              </div>
              <div style={{ border: '1px solid #eee', borderRadius: '8px', padding: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '13px', color: '#111' }}>Project Manage</div>
                  <div style={{ fontSize: '10px', color: '#999' }}>05 Jan to 20 Jan 26</div>
                </div>
                <div style={{ width: '24px', height: '24px', background: '#e0f2fe', borderRadius: '6px', border: '1px solid #eee' }}></div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ProductOverview;