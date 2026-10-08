import React, { useState } from 'react';
import { siteData } from '../data/siteData';
import { ChevronDown } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="section-faq-block" aria-label="Frequently Asked Questions">
      <div className="container faq-container-box">
        <div className="faq-heading-group">
          <h2 className="faq-main-title">Frequently Asked Questions</h2>
          <p className="faq-sub-desc">
            Find quick answers to common questions about our digital marketing services.
          </p>
        </div>

        <div className="faq-accordion-rows">
          {siteData.faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className={`faq-card-row ${isOpen ? 'open' : ''}`}>
                <button
                  type="button"
                  className="faq-row-btn"
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-question-text">{faq.question}</span>
                  <ChevronDown
                    size={18}
                    className={`faq-arrow-icon ${isOpen ? 'rotate' : ''}`}
                  />
                </button>

                {isOpen && (
                  <div className="faq-answer-drawer">
                    <p>{faq.answer}</p>
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
