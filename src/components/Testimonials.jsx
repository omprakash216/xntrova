import React, { useState } from 'react';
import { siteData } from '../data/siteData';
import { Star, CheckCircle } from 'lucide-react';

export default function Testimonials() {
  const [selectedReview, setSelectedReview] = useState(0);

  const allReviews = [
    siteData.testimonials.featured,
    ...siteData.testimonials.supporting
  ];

  const current = allReviews[selectedReview];

  return (
    <section id="testimonials" className="section section-subtle" aria-label="Client Reviews">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">CLIENT PERSPECTIVES</div>
          <h2 className="section-heading">Partnerships Built On Measurable Outcomes</h2>
          <p>
            Feedback from founders and directors who rely on Xntrova for predictable digital acquisition and search authority.
          </p>
        </div>

        {/* Editorial Split: Featured Quote on Left, Supporting on Right */}
        <div className="testimonials-editorial-grid">
          {/* Left: Large Featured Quote */}
          <div className="featured-quote-container">
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '8px' }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="#f59e0b" color="#f59e0b" />
              ))}
              <span style={{ marginLeft: '8px', fontSize: '0.85rem', fontWeight: 700, color: '#059669', backgroundColor: '#ecfdf5', padding: '2px 8px', borderRadius: '4px' }}>
                {current.result}
              </span>
            </div>

            <blockquote className="featured-quote-body">
              "{current.quote}"
            </blockquote>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <div className="featured-author-name">{current.author}</div>
                <div className="featured-author-meta">{current.role} · {current.company}</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.8rem', color: '#059669' }}>
                <CheckCircle size={15} />
                <span>Verified Partner</span>
              </div>
            </div>
          </div>

          {/* Right: Supporting Quotes with Click to Feature */}
          <div className="supporting-quotes-list">
            {allReviews.map((item, idx) => {
              const isSelected = selectedReview === idx;
              return (
                <div
                  key={idx}
                  className="supporting-quote-item"
                  onClick={() => setSelectedReview(idx)}
                  role="button"
                  tabIndex={0}
                  style={{
                    cursor: 'pointer',
                    padding: '20px',
                    borderRadius: '8px',
                    backgroundColor: isSelected ? '#ffffff' : 'transparent',
                    boxShadow: isSelected ? 'var(--shadow-sm)' : 'none',
                    border: isSelected ? '1px solid var(--border-light)' : 'none'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <div style={{ display: 'flex', gap: '2px' }}>
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} fill="#f59e0b" color="#f59e0b" />
                      ))}
                    </div>
                    <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--brand-primary)' }}>
                      {item.result}
                    </span>
                  </div>
                  <p className="supporting-quote-text">"{item.quote}"</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '6px' }}>
                    <div className="supporting-author-name">{item.author}</div>
                    <div className="supporting-author-meta">{item.company}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
