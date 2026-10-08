import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';

export default function FinalCTA({ onOpenAudit }) {
  const scrollToQuote = (e) => {
    e.preventDefault();
    const target = document.getElementById('quote');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      const nameInput = target.querySelector('input[name="name"]');
      if (nameInput) nameInput.focus();
    } else if (onOpenAudit) {
      onOpenAudit();
    }
  };

  return (
    <section className="section-final-cta" aria-label="Final Call to Action">
      <div className="container">
        <div className="final-cta-clean-box">
          <div className="final-cta-eyebrow">
            READY TO SCALE?
          </div>
          <h2 className="final-cta-heading">
            Ready to Grow Your Business?
          </h2>
          <p className="final-cta-subtext">
            Let's build a smarter digital strategy focused on visibility, engagement and measurable business growth.
          </p>

          <div className="final-cta-actions-row">
            <a
              href="#quote"
              onClick={scrollToQuote}
              className="btn-final-primary"
            >
              <span>Get Free Growth Audit</span>
              <ArrowRight size={16} />
            </a>

            <a
              href="https://api.whatsapp.com/send?phone=918683828646&text=Hi%20Xntrova%20Team%2C%20I%20would%20like%20to%20discuss%20our%20growth%20strategy."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-final-secondary"
            >
              <MessageCircle size={16} />
              <span>Talk to Our Team</span>
            </a>
          </div>

          <div className="final-cta-guarantee-note">
            <span>No obligation</span>
            <span className="dot-divider">•</span>
            <span>100% confidential</span>
            <span className="dot-divider">•</span>
            <span>Comprehensive diagnostic delivered within 48 hours</span>
          </div>
        </div>
      </div>
    </section>
  );
}
