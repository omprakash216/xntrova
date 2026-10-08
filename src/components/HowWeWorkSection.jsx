import React from 'react';
import { Compass, Target, Rocket, BarChart3, RefreshCw } from 'lucide-react';

const steps = [
  {
    step: '01',
    name: 'Discover',
    summary: 'Understand the business, audience, competition and commercial objectives.',
    icon: Compass,
  },
  {
    step: '02',
    name: 'Strategize',
    summary: 'Build a focused, data-backed digital growth strategy tailored to your niche.',
    icon: Target,
  },
  {
    step: '03',
    name: 'Execute',
    summary: 'Launch high-performing campaigns, content clusters, SEO, and UX experiences.',
    icon: Rocket,
  },
  {
    step: '04',
    name: 'Measure',
    summary: 'Track real commercial performance, attribution telemetry, and business KPIs.',
    icon: BarChart3,
  },
  {
    step: '05',
    name: 'Optimize',
    summary: 'Continuously test, analyze, and scale winning channels for compounding ROI.',
    icon: RefreshCw,
  },
];

export default function HowWeWorkSection() {
  return (
    <section id="process" className="section-how-we-work-block" aria-label="How We Work Process">
      <div className="container">
        {/* Section Header */}
        <div className="how-work-header">
          <div className="section-eyebrow" style={{ marginBottom: '8px' }}>
            STRUCTURED METHODOLOGY
          </div>
          <h2 className="how-work-title">
            How We Turn Strategy Into Growth
          </h2>
          <p className="how-work-subtitle">
            A structured approach that keeps every project focused, measurable and continuously improving.
          </p>
        </div>

        {/* Clean Horizontal Process Timeline */}
        <div className="process-horizontal-timeline">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={item.step} className="process-timeline-node">
                <div className="process-node-top">
                  <div className="process-node-badge">
                    <Icon size={16} className="process-icon" />
                    <span>{item.step}</span>
                  </div>
                  {idx < steps.length - 1 && (
                    <div className="process-connector-line" aria-hidden="true" />
                  )}
                </div>

                <div className="process-node-content">
                  <h3 className="process-step-title">{item.name}</h3>
                  <p className="process-step-desc">{item.summary}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
