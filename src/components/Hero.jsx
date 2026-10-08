import React, { useState } from 'react';
import { siteData } from '../data/siteData';
import { CheckCircle2, Send } from 'lucide-react';

export default function Hero({ onOpenAudit }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Name is required';
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Valid email is required';
    }
    if (!formData.phone.trim()) errs.phone = 'Phone is required';
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <section id="hero" className="hero-midnight-section" aria-label="Hero Section">
      {/* Background Ambience Layers matching screenshot */}
      <div className="hero-bg-overlay"></div>
      <div className="hero-radial-glow"></div>

      <div className="container hero-layout-container">
        {/* Left Side: Headline & Copy */}
        <div className="hero-left-content">
          <h1 className="hero-main-title">
            Scale Your Business With The Best Digital Marketing Agency in Delhi
          </h1>

          {/* Curved Accent Underline from screenshot */}
          <div className="curved-accent-line">
            <svg width="120" height="10" viewBox="0 0 120 10" fill="none">
              <path d="M2 7C24 2 96 2 118 7" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </div>

          <p className="hero-lead-paragraph">
            Unlock your business potential and connect with your targeted customers by partnering with Xntrova, the best digital marketing agency in Delhi.
          </p>

          <div className="hero-cta-button-wrap">
            <a href="#quote" className="btn-hero-primary">
              Get Free Digital Audit
            </a>
          </div>

          {/* Compact Trust Strip matching Section 6 instructions */}
          <div className="hero-trust-strip">
            <div className="hero-trust-item">
              <span className="hero-trust-stat">500+</span>
              <span className="hero-trust-label">Businesses Served</span>
            </div>
            <span className="hero-trust-separator" aria-hidden="true">•</span>
            <div className="hero-trust-item">
              <span className="hero-trust-stat">4.9/5</span>
              <span className="hero-trust-label">Client Rating</span>
            </div>
            <span className="hero-trust-separator" aria-hidden="true">•</span>
            <div className="hero-trust-item">
              <span className="hero-trust-stat">ROI Focus</span>
              <span className="hero-trust-label">Data-Driven Strategy</span>
            </div>
          </div>
        </div>

        {/* Right Side: Working "Get a Free Digital Audit" Card */}
        <div id="quote" className="hero-audit-card">
          <h2 className="audit-card-title">Get a Free Digital Audit</h2>
          <p className="audit-card-subtitle">
            Tell us about your business and we'll get back to you shortly.
          </p>

          {submitted ? (
            <div className="audit-success-state">
              <CheckCircle2 size={44} color="#059669" style={{ margin: '0 auto 12px auto' }} />
              <h3 style={{ fontSize: '1.25rem', color: '#0F172A', marginBottom: '8px' }}>
                Audit Request Received!
              </h3>
              <p style={{ color: '#475569', fontSize: '0.92rem', marginBottom: '16px' }}>
                Thank you, <strong>{formData.name}</strong>. Our digital strategy team is preparing your custom audit report for <strong>{formData.email}</strong>.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' });
                }}
                className="btn-reset-audit"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="audit-card-form">
              <div className="audit-form-grid">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name*"
                    value={formData.name}
                    onChange={handleChange}
                    className={`audit-input ${errors.name ? 'error' : ''}`}
                    disabled={isSubmitting}
                  />
                  {errors.name && <span className="audit-error-text">{errors.name}</span>}
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@company.com*"
                    value={formData.email}
                    onChange={handleChange}
                    className={`audit-input ${errors.email ? 'error' : ''}`}
                    disabled={isSubmitting}
                  />
                  {errors.email && <span className="audit-error-text">{errors.email}</span>}
                </div>
              </div>

              <div className="audit-form-grid">
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+91 98765 43210*"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`audit-input ${errors.phone ? 'error' : ''}`}
                    disabled={isSubmitting}
                  />
                  {errors.phone && <span className="audit-error-text">{errors.phone}</span>}
                </div>

                <div>
                  <input
                    type="text"
                    name="company"
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={handleChange}
                    className="audit-input"
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="audit-select"
                  disabled={isSubmitting}
                >
                  <option value="" disabled>Which service are you interested in?</option>
                  <option value="SEO">SEO (Search Engine Optimisation)</option>
                  <option value="PPC">PPC (Pay-Per-Click)</option>
                  <option value="Social Media">Social Media Marketing</option>
                  <option value="E-Commerce">E-Commerce Marketing</option>
                  <option value="Content">Content Marketing</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Performance">Performance Marketing</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Tell us about your business goals"
                  value={formData.message}
                  onChange={handleChange}
                  rows={2}
                  className="audit-textarea"
                  disabled={isSubmitting}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="audit-submit-btn"
              >
                {isSubmitting ? 'Preparing Your Audit...' : 'Get My Free Audit'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
