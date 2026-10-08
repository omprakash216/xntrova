import React from 'react';
import { Star } from 'lucide-react';

export default function ReviewsPlatform() {
  const platforms = [
    { name: 'Clutch', rating: '4.9/5', color: '#E11D48' },
    { name: 'Trustpilot', rating: '4.8/5', color: '#00B67A' },
    { name: 'GoodFirms', rating: '4.9/5', color: '#2563EB' },
    { name: 'DesignRush', rating: 'Top Agency', color: '#0284C7' },
    { name: 'Google Reviews', rating: '4.9/5', color: '#EA4335' },
    { name: 'Glassdoor', rating: '4.8/5', color: '#0CAA41' }
  ];

  return (
    <section className="reviews-platform-section" aria-label="Review Platforms">
      <div className="container">
        <h2 className="reviews-platform-heading">Reviews Platform</h2>
      </div>

      {/* Infinite Seamless Marquee Track */}
      <div className="reviews-marquee-container">
        <div className="reviews-marquee-track">
          {/* Group 1 */}
          <div className="reviews-marquee-group">
            {platforms.map((p, idx) => (
              <div key={`p1-${idx}`} className="review-platform-pill">
                <span className="platform-name" style={{ color: p.color }}>{p.name}</span>
                <div className="platform-rating-wrap">
                  <Star size={13} fill="#F59E0B" color="#F59E0B" />
                  <span className="platform-score">{p.rating}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Group 2 (seamless duplication) */}
          <div className="reviews-marquee-group" aria-hidden="true">
            {platforms.map((p, idx) => (
              <div key={`p2-${idx}`} className="review-platform-pill">
                <span className="platform-name" style={{ color: p.color }}>{p.name}</span>
                <div className="platform-rating-wrap">
                  <Star size={13} fill="#F59E0B" color="#F59E0B" />
                  <span className="platform-score">{p.rating}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Group 3 (ensures ultra-wide displays never see gaps) */}
          <div className="reviews-marquee-group" aria-hidden="true">
            {platforms.map((p, idx) => (
              <div key={`p3-${idx}`} className="review-platform-pill">
                <span className="platform-name" style={{ color: p.color }}>{p.name}</span>
                <div className="platform-rating-wrap">
                  <Star size={13} fill="#F59E0B" color="#F59E0B" />
                  <span className="platform-score">{p.rating}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
