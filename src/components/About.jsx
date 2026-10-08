import React from 'react';
import { siteData } from '../data/siteData';
import { ArrowRight } from 'lucide-react';

export default function About() {
  const scrollToContact = (e) => {
    e.preventDefault();
    const target = document.getElementById('contact');
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      window.history.pushState(null, '', '#contact');
    }
  };

  return (
    <section id="about" className="section section-subtle" aria-label="About Xntrova">
      <div className="container">
        <div className="about-editorial-grid">
          {/* Left Column: Heading + Concise Narrative + CTA */}
          <div className="about-editorial-left">
            <div>
              <div className="section-eyebrow">ABOUT XNTROVA</div>
              <h2 className="section-heading" style={{ whiteSpace: 'pre-line' }}>
                {siteData.about.heading}
              </h2>
            </div>

            <p className="text-lead">
              {siteData.about.summary}
            </p>

            <div>
              <a
                href="#contact"
                onClick={scrollToContact}
                className="btn btn-primary"
              >
                <span>Let's Grow Together</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>

          {/* Right Column: Clean Vertical Principle Rows (No cards!) */}
          <div className="about-principles-list">
            {siteData.about.principles.map((item) => (
              <div key={item.number} className="about-principle-row">
                <span className="principle-num">{item.number}</span>
                <div>
                  <h3 className="principle-title">{item.title}</h3>
                  <p className="principle-desc">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
