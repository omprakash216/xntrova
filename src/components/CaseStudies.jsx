import React, { useState } from 'react';
import { siteData } from '../data/siteData';
import { ArrowUpRight, TrendingUp } from 'lucide-react';

export default function CaseStudies({ onSelectCaseStudy }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredStudies = activeFilter === 'all'
    ? siteData.caseStudies
    : siteData.caseStudies.filter(c => c.filter === activeFilter);

  return (
    <section id="work" className="section section-dark" aria-label="Selected Work">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow section-eyebrow-dark">SELECTED WORK &amp; CASE STUDIES</div>
          <h2 className="section-heading" style={{ color: '#ffffff' }}>
            Work That Delivers Measurable Commercial Impact
          </h2>
          <p style={{ color: 'var(--dark-muted)' }}>
            Real challenges solved with technical search architecture, high-converting paid acquisition funnels, and UX engineering.
          </p>
        </div>

        {/* Interactive Filter Bar */}
        <div className="work-filter-bar">
          <button
            type="button"
            onClick={() => setActiveFilter('all')}
            className={`work-filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
          >
            All Work ({siteData.caseStudies.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter('ecommerce')}
            className={`work-filter-btn ${activeFilter === 'ecommerce' ? 'active' : ''}`}
          >
            E-Commerce DTC
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter('b2b')}
            className={`work-filter-btn ${activeFilter === 'b2b' ? 'active' : ''}`}
          >
            B2B SaaS &amp; Tech
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter('healthcare')}
            className={`work-filter-btn ${activeFilter === 'healthcare' ? 'active' : ''}`}
          >
            Healthcare &amp; Services
          </button>
        </div>

        {/* Large Editorial Project Blocks with Alternating Layouts */}
        <div className="work-editorial-list">
          {filteredStudies.map((item, index) => {
            const isReverse = index % 2 === 1;
            return (
              <div
                key={item.id}
                className={`work-block ${isReverse ? 'reverse' : ''}`}
              >
                {/* Visual Box Side */}
                <div className="work-visual-side">
                  <div
                    className="work-visual-box"
                    onClick={() => onSelectCaseStudy(item)}
                    role="button"
                    tabIndex={0}
                    style={{ cursor: 'pointer' }}
                  >
                    <div>
                      <div className="work-category-pill">{item.category}</div>
                      <h3 className="work-visual-title">{item.title}</h3>
                    </div>

                    <div>
                      <div className="work-services-tag">{item.services}</div>
                      <div className="work-impact-badge">
                        <TrendingUp size={13} />
                        <span>{item.impact}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Text Description Side */}
                <div className="work-text-side">
                  <p className="work-summary-text">{item.summary}</p>

                  <div className="work-deliverables-pills">
                    {item.deliverables.map((d, i) => (
                      <span key={i} className="work-chip">
                        {d}
                      </span>
                    ))}
                  </div>

                  <div>
                    <button
                      type="button"
                      onClick={() => onSelectCaseStudy(item)}
                      className="work-cta-link"
                    >
                      <span>Explore Case Study Methodology</span>
                      <ArrowUpRight size={18} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
