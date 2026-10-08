import React from 'react';
import { siteData } from '../data/siteData';
import { Phone, Mail, MapPin, ArrowUp, MessageCircle } from 'lucide-react';

export default function Footer({ onOpenAudit, onOpenServicesModal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', `#${id}`);
    }
  };

  return (
    <>
      <footer className="xntrova-footer-section" aria-label="Site Footer">
        <div className="container">
          <div className="footer-cols-grid">
            {/* Col 1: Brand & Bio & Socials */}
            <div className="footer-brand-col">
              <a href="#hero" onClick={(e) => scrollToSection(e, 'hero')} className="brand-logo footer-logo" aria-label="Xntrova Homepage">
                <img
                  src="/logo.webp"
                  alt="Xntrova Technologies"
                  className="brand-logo-img footer-brand-logo"
                  width="170"
                  height="38"
                  loading="lazy"
                  decoding="async"
                />
              </a>

              <p className="footer-bio-text">
                Xntrova is a premier digital marketing agency in Delhi NCR offering customized digital marketing solutions designed to build organic authority, scale conversion, and accelerate business growth.
              </p>

              {/* Social Icons matching screenshot */}
              <div className="footer-social-row">
                <a
                  href={siteData.brand.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="footer-social-link"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>

                <a
                  href={siteData.brand.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="footer-social-link"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z" />
                  </svg>
                </a>

                <a
                  href={siteData.brand.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="footer-social-link"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>

                <a
                  href={siteData.brand.socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X Twitter"
                  className="footer-social-link"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Col 2: Services */}
            <div>
              <div className="footer-col-title">Services</div>
              <ul className="footer-links-list">
                {siteData.services.map((s) => (
                  <li key={s.id}>
                    <a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="footer-nav-link">
                      {s.title}
                    </a>
                  </li>
                ))}
                <li>
                  <button type="button" onClick={onOpenServicesModal} className="footer-view-all-link">
                    + View All 13 Services
                  </button>
                </li>
              </ul>
            </div>

            {/* Col 3: Company */}
            <div>
              <div className="footer-col-title">Company</div>
              <ul className="footer-links-list">
                <li><a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="footer-nav-link">About Us</a></li>
                <li><a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="footer-nav-link">Our Services</a></li>
                <li><a href="#case-studies" onClick={(e) => scrollToSection(e, 'case-studies')} className="footer-nav-link">Case Studies</a></li>
                <li><a href="#process" onClick={(e) => scrollToSection(e, 'process')} className="footer-nav-link">How We Work</a></li>
                <li><a href="#faq" onClick={(e) => scrollToSection(e, 'faq')} className="footer-nav-link">FAQ</a></li>
                <li><a href="#quote" onClick={(e) => scrollToSection(e, 'quote')} className="footer-nav-link">Contact Us</a></li>
              </ul>
            </div>

            {/* Col 4: Location & Contact Info matching screenshot */}
            <div>
              <div className="footer-col-title">Contact Us</div>
              <div className="footer-contact-items-wrap">
                <div className="footer-contact-item">
                  <MapPin size={18} className="footer-icon-accent" />
                  <span>{siteData.brand.address}</span>
                </div>

                <div className="footer-contact-item">
                  <Phone size={18} className="footer-icon-accent" />
                  <a href={`tel:${siteData.brand.phone.replace(/\s+/g, '')}`} className="footer-contact-val">
                    {siteData.brand.phone}
                  </a>
                </div>

                <div className="footer-contact-item">
                  <Mail size={18} className="footer-icon-accent" />
                  <a href={`mailto:${siteData.brand.email}`} className="footer-contact-val">
                    {siteData.brand.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="footer-bottom-bar">
            <div>
              © {new Date().getFullYear()} {siteData.brand.fullName}. All rights reserved.
            </div>

            <div style={{ display: 'flex', gap: '20px' }}>
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
            </div>

            <button type="button" onClick={scrollToTop} className="footer-back-to-top" aria-label="Back to top">
              <span>Back to top</span>
              <ArrowUp size={15} />
            </button>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Trigger Button on Bottom-Left matching screenshot */}
      <a
        href="https://api.whatsapp.com/send?phone=918683828646&text=Hello%20Xntrova%20Team"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp-btn"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        <MessageCircle size={26} color="#ffffff" />
      </a>
    </>
  );
}
