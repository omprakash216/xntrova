import React from 'react';
import { siteData } from '../data/siteData';

export default function Tools() {
  return (
    <section className="section-white" style={{ borderBottom: '1px solid var(--border-light)' }} aria-label="Platforms and Tools">
      <div className="container">
        <div className="tools-strip-container">
          <span className="tools-strip-label">
            PLATFORMS &amp; TOOLS WE DEPLOY:
          </span>

          <div className="tools-strip-items">
            {siteData.tools.map((tool, idx) => (
              <span key={idx} className="tool-name-text">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
