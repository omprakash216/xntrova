import React, { useState } from 'react';
import { siteData } from '../data/siteData';
import { ChevronDown } from 'lucide-react';

export default function ApproachAccordionSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section className="section-boost-block" aria-label="Boost Brand Growth">
      <div className="container">
        <div className="section-boost-header">
          <div className="boost-eyebrow">
            <span>FRAMEWORK FOR GROWTH</span>
          </div>
          <h2 className="boost-heading-title">
            Boost Your Brand Growth With The Best Digital Marketing Company in Delhi
          </h2>
          <p className="boost-sub-text">
            Disciplined execution from commercial discovery to compounding ROI optimization.
          </p>
        </div>

        <div className="boost-grid-container">
          {/* Left Side: Analytics Dashboard Photo */}
          <div className="boost-image-side">
            <div className="boost-image-frame">
              <img
                src="/images/analytics-dashboard.svg"
                alt="Marketing growth telemetry and performance dashboard"
                className="boost-main-img"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = "/images/analytics-dashboard.svg";
                }}
              />
            </div>
          </div>

          {/* Right Side: Accordion */}
          <div className="boost-accordion-side">
            <div className="boost-accordion-list">
              {siteData.approachAccordions.map((item, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div key={idx} className={`boost-acc-item ${isOpen ? 'open' : ''}`}>
                    <button
                      type="button"
                      className="boost-acc-button"
                      onClick={() => toggle(idx)}
                      aria-expanded={isOpen}
                    >
                      <span className="boost-acc-title">{item.title}</span>
                      <ChevronDown
                        size={18}
                        className={`boost-acc-arrow ${isOpen ? 'rotate' : ''}`}
                      />
                    </button>

                    {isOpen && (
                      <div className="boost-acc-content">
                        <p>{item.content}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
