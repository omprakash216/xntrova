import React, { useState } from 'react';
import { siteData } from '../data/siteData';
import { Plus } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="section section-white" aria-label="Frequently Asked Questions">
      <div className="container">
        <div className="section-header center">
          <div className="section-eyebrow">COMMON INQUIRIES</div>
          <h2 className="section-heading">Frequently Asked Questions</h2>
          <p>
            Direct answers on timelines, strategic formulation, transparent reporting, and our collaborative model.
          </p>
        </div>

        {/* Minimal Accordion Rows (NO CARDS) */}
        <div className="faq-minimal-list">
          {siteData.faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className={`faq-row ${isOpen ? 'open' : ''}`}>
                <button
                  type="button"
                  className="faq-button"
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                  id={`faq-btn-${idx}`}
                >
                  <span>{faq.question}</span>
                  <div className="faq-icon-rotator">
                    <Plus size={20} />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${idx}`}
                    role="region"
                    aria-labelledby={`faq-btn-${idx}`}
                    className="faq-drawer"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
