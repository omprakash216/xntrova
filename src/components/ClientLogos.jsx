import React from 'react';
import { siteData } from '../data/siteData';
import { Star, ShieldCheck, Award } from 'lucide-react';

export default function ClientLogos() {
  return (
    <section className="trust-section" aria-label="Review Platforms and Trusted Brands">
      <div className="container">
        {/* Top: Verified Review Platforms */}
        <div className="review-badges-strip">
          {siteData.reviewBadges.map((badge, idx) => (
            <div key={idx} className="review-badge-item">
              <div style={{ width: 34, height: 34, borderRadius: '6px', backgroundColor: 'var(--bg-subtle)', border: '1px solid var(--border-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--brand-primary)' }}>
                {idx === 0 ? <Award size={18} /> : idx === 1 ? <Star size={18} fill="#f59e0b" color="#f59e0b" /> : <ShieldCheck size={18} />}
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ fontWeight: 700, fontSize: '0.92rem', color: 'var(--text-main)' }}>{badge.platform}</span>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--brand-primary)', backgroundColor: 'rgba(29,78,216,0.08)', padding: '1px 6px', borderRadius: '4px' }}>
                    {badge.score}
                  </span>
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-subtle)' }}>
                  {badge.badge} · {badge.reviews}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom: Client Brands Matrix */}
        <div className="trust-header-split">
          <span className="section-eyebrow" style={{ fontSize: '0.75rem', marginBottom: 0 }}>
            TRUSTED BY AMBITIOUS BUSINESSES ACROSS INDUSTRIES:
          </span>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-subtle)', fontFamily: 'var(--font-mono)' }}>
            E-COMMERCE • B2B SAAS • HEALTHCARE • FINTECH
          </span>
        </div>

        <div className="trust-logos-wrap">
          {siteData.clientLogos.map((client, idx) => (
            <span key={idx} className="trust-logo-text">
              {client}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
