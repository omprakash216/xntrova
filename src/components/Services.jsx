import React, { useState } from 'react';
import { siteData } from '../data/siteData';
import { ArrowUpRight, Layers } from 'lucide-react';

export default function Services({ onSelectService, onOpenAllServices }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="services" className="section section-white" aria-label="Core Services">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">OUR CORE DISCIPLINES</div>
          <h2 className="section-heading">Core Growth Engines</h2>
          <p>
            Specialized digital capabilities engineered to scale organic authority, paid acquisition efficiency, and online revenue.
          </p>
        </div>

        {/* Numbered Interactive Horizontal Row List with Hover Expansion */}
        <div className="services-list-container">
          {siteData.coreServices.map((service, index) => {
            const isHovered = hoveredIndex === index;
            return (
              <div
                key={service.number}
                className="service-row-item"
                onClick={() => onSelectService(service.title)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onSelectService(service.title);
                  }
                }}
                aria-label={`Inquire about ${service.title}`}
              >
                <span className="service-row-num">{service.number}</span>

                <div className="service-row-title-wrap">
                  <h3 className="service-row-title">{service.title}</h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span className="service-row-tag">{service.tag}</span>
                    <span style={{ fontSize: '0.72rem', color: '#059669', backgroundColor: '#ecfdf5', padding: '1px 6px', borderRadius: '4px', fontWeight: 600 }}>
                      {service.metrics}
                    </span>
                  </div>
                </div>

                <div>
                  <div className="service-row-desc">{service.shortDesc}</div>
                  {/* Subtle Deliverables Reveal */}
                  <div className="service-deliverables-reveal">
                    {service.features.map((feat, fIdx) => (
                      <span key={fIdx} className="service-deliverable-chip">
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="service-row-arrow">
                  <ArrowUpRight size={22} />
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Services Action */}
        <div className="services-catalog-action">
          <span className="text-body">
            Need specialized capabilities? We also manage Email retention, Local SEO, Video ads, Mobile apps, and Online Reputation Management.
          </span>
          <button
            type="button"
            onClick={onOpenAllServices}
            className="btn btn-secondary btn-sm"
          >
            <Layers size={16} />
            <span>View All 13 Services</span>
          </button>
        </div>
      </div>
    </section>
  );
}
