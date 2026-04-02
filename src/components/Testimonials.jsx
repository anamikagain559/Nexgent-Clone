import React, { useState } from 'react';
import { Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      name: 'Edward Lawson',
      role: 'One request',
      quote: 'This tool completely transformed how our team works. Everything is clear and organized, so we always know who\'s responsible for what and when things are due. As a result, we meet deadlines more consistently and stay focused on our priorities. Its very helpful my works',
      avatar: 'https://i.pravatar.cc/150?img=11'
    },
    {
      name: 'Sarah Mitchell',
      role: 'Design Lead',
      quote: 'Our team has finally found a tool that just works. Planning, tracking, and delivering projects has never been smoother. The intuitive interface means onboarding new team members takes minutes instead of days.',
      avatar: 'https://i.pravatar.cc/150?img=5'
    },
    {
      name: 'James Cooper',
      role: 'Startup Founder',
      quote: 'We cut our project delivery time by 30% within the first month. It\'s fast, reliable, and the team loves using it daily. I can no longer imagine running our operations without this platform.',
      avatar: 'https://i.pravatar.cc/150?img=8'
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const currentReview = reviews[currentIndex];

  return (
    <section id="testimonials" style={{ padding: '60px 20px', background: '#f8f9fa', display: 'flex', alignItems: 'center' }}>
      {/* Inline styles for the rotation animation and simple responsiveness */}
      <style>
        {`
          @keyframes spin-slow {
            100% { transform: rotate(360deg); }
          }
          .rotate-text {
            animation: spin-slow 15s linear infinite;
          }
          .testimonial-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 60px;
            max-width: 1100px;
            margin: 0 auto;
            align-items: center;
          }
          @media (max-width: 900px) {
            .testimonial-container {
              grid-template-columns: 1fr;
              gap: 40px;
            }
          }
          .slider-btn {
            background: none;
            border: none;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #4b5563;
            transition: color 0.2s;
            padding: 4px;
          }
          .slider-btn:hover {
            color: #111827;
          }
        `}
      </style>

      <div className="testimonial-container">

        {/* Left Column */}
        <div>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            border: '1px solid #e5e7eb',
            padding: '6px 16px',
            borderRadius: '999px',
            fontSize: '14px',
            color: '#374151',
            marginBottom: '24px',
            background: '#fff'
          }}>
            <Sparkles size={16} strokeWidth={1.5} /> Testimonials
          </div>

          <h2 style={{ fontSize: '48px', color: '#111827', margin: '0 0 16px', fontWeight: 500, letterSpacing: '-0.02em' }}>
            What Our <span style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', fontWeight: 400 }}>Users Say</span>
          </h2>

          <p style={{ color: '#4b5563', fontSize: '18px', lineHeight: 1.6, maxWidth: '400px', margin: '0 0 48px' }}>
            Real stories from teams using Taskboard to stay organized, collaborate better, and deliver work on time.
          </p>

          {/* Rotating Stamp */}
          <div style={{ position: 'relative', width: '180px', height: '180px' }}>
            {/* SVG Circular Text */}
            <svg viewBox="0 0 100 100" width="180" height="180" className="rotate-text" style={{ position: 'absolute', top: 0, left: 0 }}>
              <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="none" />
              <text fontSize="10" letterSpacing="3.5" fill="#111827" fontWeight="500">
                <textPath href="#circlePath" startOffset="0%">
                  TRUSTED BY CLIENTS - OVER 1,000 OF THE WORLD -
                </textPath>
              </text>
            </svg>

            {/* Center Quote Icon */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              color: '#22c55e',
              fontSize: '96px',
              fontFamily: 'Georgia, serif',
              lineHeight: 0,
              paddingTop: '30px' // visually center the quote mark
            }}>
              ”
            </div>
          </div>
        </div>

        {/* Right Column - Slider Card */}
        <div style={{
          background: '#fff',
          borderRadius: '24px',
          padding: '48px',
          boxShadow: '0 20px 40px rgba(0,0,0,0.04)',
          position: 'relative'
        }}>
          <p style={{
            fontSize: '20px',
            color: '#111827',
            lineHeight: 1.6,
            marginBottom: '40px',
            minHeight: '160px' // Keeps card height stable between slides
          }}>
            “{currentReview.quote}”
          </p>

          <hr style={{ border: 'none', borderTop: '1px solid #e5e7eb', marginBottom: '32px' }} />

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            {/* User Info */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <img
                src={currentReview.avatar}
                alt={currentReview.name}
                style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover' }}
              />
              <div>
                <div style={{ fontWeight: 500, fontSize: '16px', color: '#111827' }}>{currentReview.name}</div>
                <div style={{ fontSize: '14px', color: '#6b7280', marginTop: '2px' }}>{currentReview.role}</div>
              </div>
            </div>

            {/* Slider Controls */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              border: '1px solid #e5e7eb',
              borderRadius: '999px',
              padding: '8px 16px',
            }}>
              <button onClick={handlePrev} className="slider-btn" aria-label="Previous review">
                <ChevronLeft size={18} />
              </button>

              <span style={{ fontSize: '14px', color: '#111827', fontWeight: 500, minWidth: '40px', textAlign: 'center' }}>
                {currentIndex + 1} / {reviews.length}
              </span>

              <button onClick={handleNext} className="slider-btn" aria-label="Next review">
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;