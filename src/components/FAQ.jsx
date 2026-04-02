import React, { useState } from 'react';
import { HelpCircle, Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { q: 'Can I use Nexgent for team collaboration?', a: 'Absolutely. Nexgent is built for both individuals and teams, with real-time collaboration, comments, and task sharing.' },
    { q: 'Can I customize workflows and Nexgent?', a: 'Yes, you can fully customize your workflows to match your team\'s specific needs and processes.' },
    { q: 'Does Nexgent support integrations?', a: 'Nexgent integrates seamlessly with popular tools like Slack, Google Workspace, and GitHub to keep everything synced.' },
    { q: 'Can I upgrade or downgrade my plan later?', a: 'Of course. You can change your plan at any time from your account settings. Prorated charges will apply.' },
    { q: 'Do I need a credit card to get started?', a: 'No, you can start with our free tier without entering any credit card information.' },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Animation variants for the whole container to stagger children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="faq" style={{ padding: '60px 20px', background: '#f8f9fa', display: 'flex', alignItems: 'center' }}>
      <style>
        {`
          .faq-container {
            display: grid;
            grid-template-columns: 0.8fr 1.2fr;
            gap: 80px;
            max-width: 1100px;
            margin: 0 auto;
            width: 100%;
          }
          @media (max-width: 900px) {
            .faq-container {
              grid-template-columns: 1fr;
              gap: 40px;
            }
          }
        `}
      </style>

      <motion.div
        className="faq-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Left Side - Text Content */}
        <motion.div variants={itemVariants}>
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
            background: 'transparent'
          }}>
            <HelpCircle size={16} strokeWidth={1.5} /> FAQ
          </div>

          <h2 style={{ fontSize: '48px', color: '#111827', margin: '0 0 16px', fontWeight: 500, letterSpacing: '-0.02em' }}>
            Got <span style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', fontWeight: 400 }}>Questions?</span>
          </h2>

          <p style={{ color: '#6b7280', fontSize: '18px', lineHeight: 1.6, maxWidth: '400px' }}>
            Everything you need to know before getting started. Got questions? Let's clear things up.
          </p>
        </motion.div>

        {/* Right Side - FAQ Accordion */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;

            return (
              <motion.div
                key={i}
                variants={itemVariants}
                style={{
                  background: '#fff',
                  borderRadius: '16px',
                  border: '1px solid #f3f4f6',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.02)',
                  overflow: 'hidden'
                }}
              >
                <button
                  onClick={() => toggleFAQ(i)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '24px',
                    background: 'none',
                    border: 'none',
                    fontSize: '16px',
                    fontWeight: 500,
                    color: '#111827',
                    cursor: 'pointer',
                    textAlign: 'left'
                  }}
                >
                  {faq.q}

                  {/* Circular Icon Button */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: '#111827',
                    color: '#fff',
                    flexShrink: 0,
                    marginLeft: '16px',
                    transition: 'transform 0.3s ease'
                  }}>
                    {isOpen ? <Minus size={18} strokeWidth={2.5} /> : <Plus size={18} strokeWidth={2.5} />}
                  </div>
                </button>

                {/* Framer Motion AnimatePresence for smooth expand/collapse */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div style={{ padding: '0 24px 24px 24px' }}>
                        <p style={{ color: '#6b7280', fontSize: '15px', lineHeight: 1.6, margin: 0 }}>
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default FAQ;