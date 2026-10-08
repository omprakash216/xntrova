import React from 'react';

export default function TurningPotentialSection() {
  return (
    <section className="section-potential-block" aria-label="Turning Potential Into Performance">
      <div className="container potential-grid-container">
        {/* Left Side: Business Analytics Workspace Graphic */}
        <div className="potential-image-side">
          <div className="potential-image-frame">
            <img
              src="/images/analytics-dashboard.svg"
              alt="Turning digital attention into performance marketing results"
              className="potential-main-img"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = "/images/analytics-dashboard.svg";
              }}
            />
            <div className="potential-badge-float">
              <span className="potential-badge-kpi">+250%</span>
              <span className="potential-badge-text">Organic Compound Growth</span>
            </div>
          </div>
        </div>

        {/* Right Side: Editorial Narrative & 4 Benefit Points */}
        <div className="potential-text-side">
          <div className="section-eyebrow" style={{ marginBottom: '10px' }}>
            THE XNTROVA ADVANTAGE
          </div>
          <h2 className="potential-heading-title">
            Why Businesses Choose Xntrova
          </h2>

          <p className="potential-lead-paragraph">
            From strategy to execution, we combine data, creativity and technology to build digital experiences focused on measurable business outcomes.
          </p>

          {/* 4 Concise Benefit Points matching Section 1 */}
          <div className="why-choose-points-grid">
            <div className="why-point-card">
              <div className="why-point-header">
                <span className="why-point-num">01</span>
                <h3 className="why-point-title">Data-Driven Strategy</h3>
              </div>
              <p className="why-point-desc">
                Decisions backed by meaningful business data and actionable customer insights.
              </p>
            </div>

            <div className="why-point-card">
              <div className="why-point-header">
                <span className="why-point-num">02</span>
                <h3 className="why-point-title">Performance Focused</h3>
              </div>
              <p className="why-point-desc">
                Every campaign is designed and managed strictly around measurable business goals.
              </p>
            </div>

            <div className="why-point-card">
              <div className="why-point-header">
                <span className="why-point-num">03</span>
                <h3 className="why-point-title">Transparent Reporting</h3>
              </div>
              <p className="why-point-desc">
                Clear performance insights and open attribution without unnecessary complexity.
              </p>
            </div>

            <div className="why-point-card">
              <div className="why-point-header">
                <span className="why-point-num">04</span>
                <h3 className="why-point-title">Continuous Optimization</h3>
              </div>
              <p className="why-point-desc">
                Constant testing, analysis and systematic improvement to maximize campaign ROI.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
