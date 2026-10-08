import React from 'react';
import { siteData } from '../data/siteData';

export default function ToolsSection() {
  const row1 = siteData.toolsRow1 || [
    "Ahrefs", "SEMrush", "Meta Ads", "Mailchimp", "Google Analytics 4", "HubSpot", "Google Ads", "Adobe Cloud"
  ];
  const row2 = siteData.toolsRow2 || [
    "Shopify", "WordPress", "Salesforce", "Rank Math", "Moz Pro", "Canva", "Figma", "Klaviyo"
  ];

  return (
    <section className="section-tools-block" aria-label="Tools We Work With">
      <div className="container">
        <h2 className="tools-heading-title">Tools We Work With</h2>
      </div>

      <div className="tools-marquee-wrapper">
        {/* Row 1: Right to Left (Scrolls Left) */}
        <div className="tools-marquee-container" aria-label="Marketing & Analytics Tools">
          <div className="tools-marquee-track scroll-left">
            {/* Group 1 */}
            <div className="tools-marquee-group">
              {row1.map((tool, idx) => (
                <div key={`r1-g1-${idx}`} className="tool-logo-pill">
                  <span className="tool-name-highlight">{tool}</span>
                </div>
              ))}
            </div>

            {/* Group 2 (seamless duplication) */}
            <div className="tools-marquee-group" aria-hidden="true">
              {row1.map((tool, idx) => (
                <div key={`r1-g2-${idx}`} className="tool-logo-pill">
                  <span className="tool-name-highlight">{tool}</span>
                </div>
              ))}
            </div>

            {/* Group 3 (ultra-wide display coverage) */}
            <div className="tools-marquee-group" aria-hidden="true">
              {row1.map((tool, idx) => (
                <div key={`r1-g3-${idx}`} className="tool-logo-pill">
                  <span className="tool-name-highlight">{tool}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Row 2: Left to Right (Scrolls Right) */}
        <div className="tools-marquee-container" aria-label="Platform & CMS Tools">
          <div className="tools-marquee-track scroll-right">
            {/* Group 1 */}
            <div className="tools-marquee-group">
              {row2.map((tool, idx) => (
                <div key={`r2-g1-${idx}`} className="tool-logo-pill">
                  <span className="tool-name-highlight">{tool}</span>
                </div>
              ))}
            </div>

            {/* Group 2 (seamless duplication) */}
            <div className="tools-marquee-group" aria-hidden="true">
              {row2.map((tool, idx) => (
                <div key={`r2-g2-${idx}`} className="tool-logo-pill">
                  <span className="tool-name-highlight">{tool}</span>
                </div>
              ))}
            </div>

            {/* Group 3 (ultra-wide display coverage) */}
            <div className="tools-marquee-group" aria-hidden="true">
              {row2.map((tool, idx) => (
                <div key={`r2-g3-${idx}`} className="tool-logo-pill">
                  <span className="tool-name-highlight">{tool}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
