import React from 'react';
import { siteData } from '../data/siteData';

export default function Process() {
  return (
    <section id="process" className="section section-white" aria-label="Our Process">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">HOW WE WORK</div>
          <h2 className="section-heading">Framework For Predictable Growth</h2>
          <p>
            Disciplined execution from commercial discovery to compounding optimization.
          </p>
        </div>

        {/* Connecting Timeline (NO CARDS) */}
        <div className="process-timeline-wrap">
          {siteData.processSteps.map((step) => (
            <div key={step.step} className="process-step-item">
              <div className="process-node">{step.step}</div>
              <h3 className="process-step-name">{step.name}</h3>
              <p className="process-step-summary">{step.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
