import React, { useState } from 'react';
import { ArrowRight, Activity, Building2, ShoppingBag } from 'lucide-react';
import CaseStudyModal from './CaseStudyModal';

const caseStudiesData = [
  {
    id: 'healthcare',
    category: 'HEALTHCARE',
    title: 'Multispeciality Medical Network',
    services: 'SEO + Google Ads',
    icon: Activity,
    challenge: 'High patient acquisition costs and low visibility on high-intent local medical queries.',
    approach: 'Re-architected local search landing pages, restructured Google Search campaigns around condition-specific keywords, and implemented HIPAA-compliant call tracking.',
    result: 'Substantial increase in qualified appointment bookings and sustained reduction in cost per patient acquisition.',
    deliverables: [
      'Local SEO & Google Business Profile architecture',
      'High-intent medical search ad campaigns',
      'HIPAA-compliant call tracking & attribution',
      'Conversion-optimized patient booking flows'
    ]
  },
  {
    id: 'real-estate',
    category: 'REAL ESTATE',
    title: 'Premium Residential Developer',
    services: 'SEO + Content Marketing',
    icon: Building2,
    challenge: 'Low organic discoverability among high-net-worth property buyers and heavy reliance on third-party aggregators.',
    approach: 'Developed interactive neighborhood guides, optimized high-intent search hubs, and deployed targeted lead capture pages.',
    result: 'Established consistent first-page search positions and sustainable direct buyer inquiries.',
    deliverables: [
      'Comprehensive real estate content clusters',
      'Search architecture for luxury residential keywords',
      'Custom buyer lead qualification funnels',
      'Continuous rank monitoring & technical SEO'
    ]
  },
  {
    id: 'ecommerce',
    category: 'E-COMMERCE',
    title: 'Direct-to-Consumer Lifestyle Brand',
    services: 'Paid Advertising + CRO',
    icon: ShoppingBag,
    challenge: 'Stagnant storefront conversion rate and inefficient ad spend across acquisition channels.',
    approach: 'Audited cart abandonment friction, deployed Meta dynamic retargeting, and optimized product page mobile checkout flow.',
    result: 'Improved storefront checkout completion and sustained return on advertising spend (ROAS).',
    deliverables: [
      'Full-funnel storefront CRO audit & A/B testing',
      'Meta & Google Performance Max funnels',
      'Cart recovery & email retention flows',
      'ROAS-driven ad creative sprint schedule'
    ]
  }
];

export default function FeaturedCaseStudiesSection({ onConsultCase }) {
  const [selectedCase, setSelectedCase] = useState(null);

  return (
    <section id="case-studies" className="section-case-studies-block" aria-label="Featured Case Studies">
      <div className="container">
        {/* Section Header */}
        <div className="case-studies-header">
          <div className="section-eyebrow" style={{ marginBottom: '8px' }}>
            PROVEN METHODOLOGY
          </div>
          <h2 className="case-studies-title">
            Featured Work &amp; Case Studies
          </h2>
          <p className="case-studies-subtitle">
            Explore how strategy, technology and performance marketing can work together to create measurable digital growth.
          </p>
        </div>

        {/* 3 Case Study Cards Grid */}
        <div className="case-studies-grid">
          {caseStudiesData.map((cs) => {
            const Icon = cs.icon;
            return (
              <div
                key={cs.id}
                className="case-study-card"
                onClick={() => setSelectedCase(cs)}
              >
                {/* Card Top Category & Focus */}
                <div className="case-card-top-row">
                  <div className="case-category-pill">
                    <Icon size={14} className="case-pill-icon" />
                    <span>{cs.category}</span>
                  </div>
                  <span className="case-services-badge">{cs.services}</span>
                </div>

                <h3 className="case-card-title">{cs.title}</h3>

                {/* Structured Breakdown: Challenge, Approach, Result */}
                <div className="case-card-points-list">
                  <div className="case-point-row">
                    <span className="case-point-label">Challenge</span>
                    <p className="case-point-body">{cs.challenge}</p>
                  </div>

                  <div className="case-point-row">
                    <span className="case-point-label">Approach</span>
                    <p className="case-point-body">{cs.approach}</p>
                  </div>

                  <div className="case-point-row result-row">
                    <span className="case-point-label result-label">Result</span>
                    <p className="case-point-body result-body">{cs.result}</p>
                  </div>
                </div>

                {/* Action CTA Row */}
                <div className="case-card-footer">
                  <button
                    type="button"
                    className="case-view-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedCase(cs);
                    }}
                  >
                    <span>View Case Study</span>
                    <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Case Study Modal */}
      {selectedCase && (
        <CaseStudyModal
          caseItem={selectedCase}
          onClose={() => setSelectedCase(null)}
          onConsultCase={onConsultCase}
        />
      )}
    </section>
  );
}
