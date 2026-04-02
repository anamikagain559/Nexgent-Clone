import React from 'react';
import { motion } from 'framer-motion';

const Features = () => {
  return (
    <section style={{ padding: '100px 20px', background: '#f8f9fa', fontFamily: 'var(--font-body, system-ui, sans-serif)' }}>
      <style>
        {`
          .features-container {
            display: flex;
            flex-direction: column;
            gap: 32px;
            max-width: 1100px;
            margin: 0 auto;
          }
          .features-row-1 {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 32px;
          }
          .features-row-2 {
            display: grid;
            grid-template-columns: 1.5fr 1fr; /* Team Collab is wider, Notifications is narrower */
            gap: 32px;
          }
          .feature-card {
            background: #ffffff;
            border-radius: 32px;
            border: 1px solid rgba(0, 0, 0, 0.04);
            box-shadow: 0 12px 40px rgba(0, 0, 0, 0.02);
            overflow: hidden;
            display: flex;
            flex-direction: column;
            cursor: pointer;
          }
          @media (max-width: 900px) {
            .features-row-1, .features-row-2 {
              grid-template-columns: 1fr;
            }
          }
        `}
      </style>

      {/* Header Section */}
      <div style={{ textAlign: 'center', marginBottom: '80px' }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          border: '1px solid #e5e7eb',
          padding: '6px 16px',
          borderRadius: '999px',
          fontSize: '14px',
          color: '#374151',
          marginBottom: '24px',
          background: '#fff'
        }}>
          <img
            src="https://cdn.prod.website-files.com/6994265eb4518368b938e54c/6999434a4a9a3fe7ea1ade4f_Frame%20(24).webp"
            alt="icon"
            style={{ width: '16px', height: '16px' }}
          />
          Powerful Features
        </div>

        <h2 style={{ fontSize: '48px', color: '#111827', margin: '0 0 16px', fontWeight: 500, letterSpacing: '-0.02em', lineHeight: 1.1 }}>
          Power Up Your Projects<br />
          With <span style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', fontWeight: 400 }}>Nexgent</span>
        </h2>

        <p style={{ color: '#6b7280', fontSize: '18px', lineHeight: 1.6, maxWidth: '500px', margin: '0 auto' }}>
          Simplify planning, enhance collaboration, and increase productivity with Nexgent.
        </p>
      </div>

      <div className="features-container">

        <div className="features-row-1">
          {/* Card 1: Smart Task Management (45 Degree Rotation) */}
          <motion.div
            className="feature-card"
            style={{ padding: '48px 48px 0', minHeight: '520px' }}
            initial="rest"
            whileHover="hover"
            animate="rest"
          >
            <div>
              <h3 style={{ fontSize: '24px', fontWeight: 600, color: '#111827', marginBottom: '12px' }}>
                Smart Task Management
              </h3>
              <p style={{ color: '#6b7280', fontSize: '16px', lineHeight: 1.6, marginBottom: '40px' }}>
                Create, assign, and organize tasks with due dates, priorities, and labels for better productivity.
              </p>
            </div>
            <div style={{ position: 'relative', marginTop: 'auto', display: 'flex', justifyContent: 'center' }}>
              <motion.img
                variants={{
                  rest: { rotate: 0 },
                  hover: { rotate: 45 } // Here, 45 is given instead of 120
                }}
                transition={{ duration: 0.6, type: "spring" }}
                src="https://cdn.prod.website-files.com/6994265eb4518368b938e54c/69996ac1a85b23427ef3a28f_Frame%20238%20(1).webp"
                alt="Smart Task Management Layout"
                style={{ width: '100%', maxWidth: '400px', objectFit: 'contain', borderTopLeftRadius: '16px', borderTopRightRadius: '16px', zIndex: 2 }}
              />
              <img
                src="https://cdn.prod.website-files.com/6994265eb4518368b938e54c/699957f9d6e9321e84f2617a_Rectangle%2068.webp"
                alt="shadow"
                style={{ position: 'absolute', bottom: 0, width: '100%', opacity: 0.5, zIndex: 1 }}
              />
            </div>
          </motion.div>

          {/* Card 2: Calendar & Deadlines */}
          <motion.div
            className="feature-card"
            style={{ padding: '48px' }}
            initial="rest"
            whileHover="hover"
            animate="rest"
          >
            <div style={{ position: 'relative', height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '32px' }}>
              <img
                src="https://cdn.prod.website-files.com/6994265eb4518368b938e54c/69ae8228c6670e7502c5ec80_Frame%201000004996.webp"
                alt="Calendar Base"
                style={{ width: '80%', objectFit: 'contain' }}
              />

              <motion.img
                src="https://cdn.prod.website-files.com/6994265eb4518368b938e54c/699970afd1611a42826579d0_Frame%201000005001.svg"
                alt="Completed"
                variants={{ rest: { x: 0, y: 0 }, hover: { x: 30, y: 30 } }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                style={{ position: 'absolute', top: '15%', left: '0%', width: '110px' }}
              />
              <motion.img
                src="https://cdn.prod.website-files.com/6994265eb4518368b938e54c/6999712c6bb9abc579cbc0a2_Frame%201000005000.svg"
                alt="Process"
                variants={{ rest: { x: 0, y: 0 }, hover: { x: -30, y: 30 } }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                style={{ position: 'absolute', top: '5%', right: '0%', width: '100px' }}
              />
              <motion.img
                src="https://cdn.prod.website-files.com/6994265eb4518368b938e54c/699970e18df9d2079ba6c899_Frame%201000004999.svg"
                alt="Remaining"
                variants={{ rest: { x: 0, y: 0 }, hover: { x: 30, y: -30 } }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                style={{ position: 'absolute', bottom: '20%', left: '-5%', width: '120px' }}
              />
              <motion.img
                src="https://cdn.prod.website-files.com/6994265eb4518368b938e54c/699971412aea09bf1aba6bc8_Frame%201000005002.svg"
                alt="New Task"
                variants={{ rest: { x: 0, y: 0 }, hover: { x: -30, y: -30 } }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                style={{ position: 'absolute', bottom: '25%', right: '-5%', width: '100px' }}
              />
            </div>
            <div>
              <h3 style={{ fontSize: '24px', fontWeight: 600, color: '#111827', marginBottom: '12px' }}>
                Calendar & Deadlines
              </h3>
              <p style={{ color: '#6b7280', fontSize: '16px', lineHeight: 1.6 }}>
                Visualize deadlines with calendar and timeline views for clearer planning and time management.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="features-row-2">
          {/* Card 3: Team Collaboration */}
          <motion.div
            className="feature-card"
            style={{ padding: '48px 0 0 0' }}
            initial="rest"
            whileHover="hover"
            animate="rest"
          >
            <div style={{ padding: '0 48px' }}>
              <h3 style={{ fontSize: '24px', fontWeight: 600, color: '#111827', marginBottom: '12px' }}>
                Team Collaboration
              </h3>
              <p style={{ color: '#6b7280', fontSize: '16px', lineHeight: 1.6, maxWidth: '400px' }}>
                Comment, tag teammates, share files, and stay aligned in real time across tasks.
              </p>
            </div>
            <div style={{ position: 'relative', height: '280px', marginTop: '32px', overflow: 'hidden' }}>
              {/* Left Image - Project Members (Swapped from Right) */}
              <img
                src="https://cdn.prod.website-files.com/6994265eb4518368b938e54c/699a704e69a00e6786701461_Frame%2017.webp"
                alt="Project Members"
                style={{ position: 'absolute', left: '-5%', bottom: '30px', width: '40%', zIndex: 1 }}
              />

              {/* Center Image - Action Required (Swapped from Left) */}
              <img
                src="https://cdn.prod.website-files.com/6994265eb4518368b938e54c/699a6fe00fe19f906bcaeaac_Frame%2038.webp"
                alt="Action Required"
                style={{ position: 'absolute', left: '30%', bottom: '20px', width: '35%', zIndex: 2 }}
              />

              {/* Animated Right Image - Project Status (Swapped from Center) */}
              <motion.img
                variants={{
                  rest: { y: 0 },
                  hover: { y: -30 }
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                src="https://cdn.prod.website-files.com/6994265eb4518368b938e54c/699a70baa59e3c8bc8384217_Frame%2037.webp"
                alt="Project Status"
                style={{ position: 'absolute', right: '-10%', bottom: '-20px', width: '50%', zIndex: 3 }}
              />
            </div>
          </motion.div>

          {/* Card 4: Smart Notifications */}
          <motion.div
            className="feature-card"
            style={{ padding: '48px', justifyContent: 'space-between' }}
            initial="rest"
            whileHover="hover"
            animate="rest"
          >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', marginBottom: '40px', marginTop: '10px' }}>
              <motion.img
                variants={{
                  rest: { x: -15, scale: 1 },
                  hover: { x: 0, scale: 1.05 }
                }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                src="https://cdn.prod.website-files.com/6994265eb4518368b938e54c/699a79df7c45b30b06d31335_Group%201000003890.svg"
                alt="Project Manage Alert"
                style={{ width: '100%', maxWidth: '280px' }}
              />
              <motion.img
                variants={{
                  rest: { scale: 1.02 },
                  hover: { scale: 1.05 }
                }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                src="https://cdn.prod.website-files.com/6994265eb4518368b938e54c/69ae4cd704260a97e203d945_Group%201000003892.webp"
                alt="In Progress Alert"
                style={{ width: '100%', maxWidth: '300px', zIndex: 2 }}
              />
              <motion.img
                variants={{
                  rest: { x: 15, scale: 1 },
                  hover: { x: 0, scale: 1.05 }
                }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                src="https://cdn.prod.website-files.com/6994265eb4518368b938e54c/699a79df7c45b30b06d31335_Group%201000003890.svg"
                alt="Project Manage Alert"
                style={{ width: '100%', maxWidth: '280px' }}
              />
            </div>
            <div>
              <h3 style={{ fontSize: '24px', fontWeight: 600, color: '#111827', marginBottom: '12px' }}>
                Smart Notifications
              </h3>
              <p style={{ color: '#6b7280', fontSize: '16px', lineHeight: 1.6 }}>
                Never miss a task with real-time reminders and alerts that keep you on schedule.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Features;