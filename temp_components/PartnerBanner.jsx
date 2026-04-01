import React from 'react';


const partners = [
  "Slack", "Google Calendar", "N Notion", "Drive", "D Dropbox", "Trello"
];

const PartnerBanner = () => {
  return (
    <section className="py-12 border-y border-white-05 bg-white-02">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm text-text-muted mb-8 uppercase tracking-widest">Trusted by 50,000+ teams</p>
        <div className="flex flex-wrap justify-center gap-8 md-gap-16 items-center opacity-40 grayscale hover:grayscale-0 transition-all">
          {partners.map((partner, idx) => (
            <div 
              key={partner}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="text-2xl font-bold text-white hover:text-accent-primary cursor-default"
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerBanner;
