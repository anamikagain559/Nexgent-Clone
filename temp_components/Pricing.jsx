import React from 'react';
import { Check } from 'lucide-react';


const plans = [
  {
    name: 'Basic',
    price: '0',
    features: ['Up to 5 Projects', 'Unlimited Members', 'Basic Analytics', 'Community Support']
  },
  {
    name: 'Pro',
    price: '29',
    popular: true,
    features: ['Unlimited Projects', 'Unlimited Members', 'Advanced Analytics', 'Automation (1000/mo)', 'Priority Support']
  },
  {
    name: 'Enterprise',
    price: '99',
    features: ['Unlimited Everything', 'Custom Integrations', 'AI Forecasting', 'Dedicated Manager', '24/7 Phone Support']
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-white-01">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-4"
          >
            Flexible Plans for Everyone
          </h2>
          <p className="text-text-secondary">Choose the plan that fits your business needs.</p>
        </div>

        <div className="pricing-grid">
          {plans.map((p, i) => (
            <div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`p-8 rounded-3xl border ${p.popular ? 'border-accent-primary bg-accent-primary-05' : 'border-white-10 glass'} relative overflow-hidden`}
            >
              {p.popular && (
                <div className="absolute top-0 right-0 bg-accent-primary text-black text-[10px] font-bold px-4 py-1 rounded-bl-xl uppercase tracking-wider">
                  Popular
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2 uppercase tracking-wide">{p.name}</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-bold">${p.price}</span>
                <span className="text-text-secondary">/mo</span>
              </div>
              
              <ul className="space-y-4 mb-8">
                {p.features.map(f => (
                  <li key={f} className="flex items-center gap-3 text-sm text-text-secondary">
                    <Check size={16} className="text-accent-primary" /> {f}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-xl font-bold transition-all ${p.popular ? 'btn-primary' : 'bg-white-10 hover-bg-white-20'}`}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
