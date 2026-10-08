import React from 'react';
import { siteData } from '../data/siteData';

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="section section-subtle" aria-label="Why Choose Xntrova">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">THE XNTROVA ADVANTAGE</div>
          <h2 className="section-heading">Why Businesses Choose Xntrova</h2>
          <p>
            We operate with the analytical rigor of an engineering firm and the velocity of a performance growth squad.
          </p>
        </div>

        {/* 2x2 Editorial Layout with hairline border accents (NO CARDS) */}
        <div className="why-editorial-grid">
          {siteData.whyChooseUs.map((item) => (
            <div key={item.number} className="why-editorial-item">
              <span className="why-editorial-num">{item.number}</span>
              <h3 className="why-editorial-title">{item.title}</h3>
              <p className="why-editorial-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
