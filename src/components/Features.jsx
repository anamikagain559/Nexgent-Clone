import React from "react";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const Features = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const featureCards = [
    {
      title: "Smart Task Management",
      desc: "Create, assign, and organize tasks with due dates, priorities, and labels for better productivity.",
      image: "https://cdn.prod.website-files.com/6994265eb4518368b938e54c/69c35f369204d2bcb8182827_Frame%2026%20(2).png",
      col: "col-7",
      layout: "text-top",
    },
    {
      title: "Calendar & Deadlines",
      desc: "Visualize deadlines with calendar and timeline views for clearer planning and time management.",
      image: "https://cdn.prod.website-files.com/6994265eb4518368b938e54c/69c35f68b8583d77baa91037_task%20(12)-p-1600.png",
      col: "col-5",
      layout: "text-bottom",
    },
    {
      title: "Team Collaboration",
      desc: "Comment, tag teammates, share files, and stay aligned in real time across tasks.",
      image: "https://cdn.prod.website-files.com/6994265eb4518368b938e54c/69c35e8fb0f37a20a2c1f77e_task%20(11)-p-1600.png",
      col: "col-7",
      layout: "text-top",
    },
    {
      title: "Smart Notifications",
      desc: "Never miss a task with real-time reminders and alerts that keep you on schedule.",
      image: "https://cdn.prod.website-files.com/6994265eb4518368b938e54c/69c35fc7b918dae367ced4fb_Frame%204%20(2).png",
      col: "col-5",
      layout: "text-bottom",
    },
  ];

  return (
    <section className="features-section" id="features">
      <div className="features-container">
        <motion.div 
          className="features-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="label-pill">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.6 }}>
              <path d="M12 2v20"></path>
              <path d="M17 5 7 19"></path>
              <path d="M7 5l10 14"></path>
              <path d="M22 12H2"></path>
            </svg>
            Powerful Features
          </div>
          <h2 className="features-title">
            Power Up Your Projects <br className="hidden sm:block" />
            With <i>Nexgent</i>
          </h2>
          <p className="features-description">
            Simplify planning, enhance collaboration, and increase productivity with Nexgent.
          </p>
        </motion.div>

        <motion.div 
          className="features-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {featureCards.map((card, index) => (
            <motion.div 
              key={index} 
              className={`feature-card ${card.col} ${card.layout}`}
              variants={itemVariants}
            >
              <div className="feature-card-content">
                <h3 className="feature-card-title">{card.title}</h3>
                <p className="feature-card-desc">{card.desc}</p>
              </div>
              <div className="feature-card-visual">
                <img src={card.image} alt={card.title} loading="lazy" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;