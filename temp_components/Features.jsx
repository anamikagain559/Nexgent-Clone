import React from 'react';

import { Layout, BarChart, Users, Zap, Shield, Smartphone } from 'lucide-react';

const featureList = [
  { 
    title: 'Visual Workflow', 
    desc: 'Manage your tasks visually with our intuitive drag-and-drop board.',
    icon: <Layout className="text-accent-primary" />
  },
  { 
    title: 'Advanced Analytics', 
    desc: 'Deep dive into your teams performance with real-time data visualisations.',
    icon: <BarChart className="text-accent-primary" />
  },
  { 
    title: 'Team Collaboration', 
    desc: 'Communicate with your team members directly within the platform.',
    icon: <Users className="text-accent-primary" />
  },
  { 
    title: 'Automation Rules', 
    desc: 'Automate repetitive tasks and focus on what really matters.',
    icon: <Zap className="text-accent-primary" />
  },
  { 
    title: 'Bank-Grade Security', 
    desc: 'Your data is encrypted and protected with industry-leading security.',
    icon: <Shield className="text-accent-primary" />
  },
  { 
    title: 'Mobile App', 
    desc: 'Access your projects on the go with our dedicated mobile applications.',
    icon: <Smartphone className="text-accent-primary" />
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Power Up Your Process <br /> <span className="text-accent-primary">With Nexgent</span>
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto">
            Everything you need to manage your business in one place. 
            Built for modern teams who want to move faster.
          </p>
        </div>

        <div className="feature-grid">
          {featureList.map((f, i) => (
            <div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass p-8 hover:bg-white-05 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-accent-primary/10 flex items-center justify-center mb-6 border border-accent-primary/20 group-hover:scale-110 transition-transform">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{f.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
