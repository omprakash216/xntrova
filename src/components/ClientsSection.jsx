import React from 'react';

export default function ClientsSection() {
  const row1 = [
    { name: 'ETEX Global', industry: 'Industrial', color: '#008bb9' },
    { name: 'NITDA', industry: 'Enterprise', color: '#0284c7' },
    { name: 'Aura Living', industry: 'Real Estate', color: '#0ea5e9' },
    { name: 'Nexus Healthcare', industry: 'Healthtech', color: '#0284c7' },
    { name: 'Apex Retail', industry: 'E-Commerce', color: '#008bb9' },
    { name: 'Meridian Cloud', industry: 'SaaS', color: '#0284c7' }
  ];

  const row2 = [
    { name: 'Vanguard Systems', industry: 'B2B Tech', color: '#008bb9' },
    { name: 'FinSphere Wealth', industry: 'FinTech', color: '#0ea5e9' },
    { name: 'Stratovate', industry: 'Consulting', color: '#0284c7' },
    { name: 'OmniLogistics', industry: 'Supply Chain', color: '#008bb9' },
    { name: 'NovaTech B2B', industry: 'Enterprise', color: '#0284c7' },
    { name: 'Crestline Brands', industry: 'Retail', color: '#0ea5e9' }
  ];

  return (
    <section className="section-clients-block" aria-label="Trusted Clients">
      <div className="container">
        <h2 className="clients-heading-text">Trusted by thousands of companies</h2>
      </div>

      <div className="clients-marquee-wrapper">
        {/* Row 1: Right to Left (Scrolls Left) */}
        <div className="clients-marquee-container" aria-label="Client Companies Row 1">
          <div className="clients-marquee-track scroll-left">
            {/* Group 1 */}
            <div className="clients-marquee-group">
              {row1.map((c, i) => (
                <div key={`c1-g1-${i}`} className="client-logo-card">
                  <span className="client-logo-initial" style={{ backgroundColor: c.color }}>{c.name.charAt(0)}</span>
                  <span className="client-logo-title">{c.name}</span>
                </div>
              ))}
            </div>

            {/* Group 2 (seamless duplication) */}
            <div className="clients-marquee-group" aria-hidden="true">
              {row1.map((c, i) => (
                <div key={`c1-g2-${i}`} className="client-logo-card">
                  <span className="client-logo-initial" style={{ backgroundColor: c.color }}>{c.name.charAt(0)}</span>
                  <span className="client-logo-title">{c.name}</span>
                </div>
              ))}
            </div>

            {/* Group 3 (ultra-wide display coverage) */}
            <div className="clients-marquee-group" aria-hidden="true">
              {row1.map((c, i) => (
                <div key={`c1-g3-${i}`} className="client-logo-card">
                  <span className="client-logo-initial" style={{ backgroundColor: c.color }}>{c.name.charAt(0)}</span>
                  <span className="client-logo-title">{c.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Row 2: Left to Right (Scrolls Right) */}
        <div className="clients-marquee-container" aria-label="Client Companies Row 2">
          <div className="clients-marquee-track scroll-right">
            {/* Group 1 */}
            <div className="clients-marquee-group">
              {row2.map((c, i) => (
                <div key={`c2-g1-${i}`} className="client-logo-card">
                  <span className="client-logo-initial" style={{ backgroundColor: c.color }}>{c.name.charAt(0)}</span>
                  <span className="client-logo-title">{c.name}</span>
                </div>
              ))}
            </div>

            {/* Group 2 (seamless duplication) */}
            <div className="clients-marquee-group" aria-hidden="true">
              {row2.map((c, i) => (
                <div key={`c2-g2-${i}`} className="client-logo-card">
                  <span className="client-logo-initial" style={{ backgroundColor: c.color }}>{c.name.charAt(0)}</span>
                  <span className="client-logo-title">{c.name}</span>
                </div>
              ))}
            </div>

            {/* Group 3 (ultra-wide display coverage) */}
            <div className="clients-marquee-group" aria-hidden="true">
              {row2.map((c, i) => (
                <div key={`c2-g3-${i}`} className="client-logo-card">
                  <span className="client-logo-initial" style={{ backgroundColor: c.color }}>{c.name.charAt(0)}</span>
                  <span className="client-logo-title">{c.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
