import React, { useState } from 'react';
import { siteData } from '../data/siteData';
import { Mail, Phone, MapPin, Send, CheckCircle2, ShieldCheck, Clock } from 'lucide-react';

export default function Contact({ preselectedService }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: preselectedService || 'Search Engine Optimization (SEO)',
    budget: '₹1L – ₹3L / month',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  React.useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.email.trim()) {
      errs.email = 'Work email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please provide a valid business email';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (!/^[\d\s+\-()]{8,18}$/.test(formData.phone.trim())) {
      errs.phone = 'Please provide a valid phone number (min 8 digits)';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please provide a brief description of your goals';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message should be at least 10 characters';
    }
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
    }, 600);
  };

  return (
    <section id="contact" className="section section-white" aria-label="Contact Xntrova">
      <div className="container">
        <div className="contact-layout-grid">
          {/* Left Column: Direct Agency Channels */}
          <div className="contact-info-panel">
            <div>
              <div className="section-eyebrow">LET'S TALK</div>
              <h2 className="section-heading">Have a project or growth goal in mind?</h2>
              <p className="text-lead" style={{ marginTop: '16px' }}>
                Schedule a direct strategic discovery session with our performance and technology directors in Delhi NCR.
              </p>
            </div>

            <div className="contact-channels-list">
              <div className="contact-channel-item">
                <div className="channel-icon-wrap">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="channel-label">Direct Communication</div>
                  <a href={`mailto:${siteData.brand.contactEmail}`} className="channel-value">
                    {siteData.brand.contactEmail}
                  </a>
                </div>
              </div>

              <div className="contact-channel-item">
                <div className="channel-icon-wrap">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="channel-label">Direct Consultation Line</div>
                  <a href={`tel:${siteData.brand.contactPhone.replace(/\s+/g, '')}`} className="channel-value">
                    {siteData.brand.contactPhone}
                  </a>
                </div>
              </div>

              <div className="contact-channel-item">
                <div className="channel-icon-wrap">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="channel-label">Headquarters</div>
                  <div className="channel-value">{siteData.brand.location}</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-subtle)', marginTop: '4px' }}>
                    {siteData.brand.workingHours}
                  </div>
                </div>
              </div>
            </div>

            <div style={{ padding: '20px', backgroundColor: 'var(--bg-subtle)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)', marginTop: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: 'var(--text-main)', fontWeight: 600 }}>
                <Clock size={16} color="var(--brand-primary)" />
                <span>Fast Turnaround SLA</span>
              </div>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                All inquiries receive a preliminary channel feasibility assessment and reply within 24 business hours.
              </p>
            </div>
          </div>

          {/* Right Column: Spacious Lead Form */}
          <div className="form-card-wrap">
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '36px 16px' }}>
                <CheckCircle2 size={52} color="#059669" style={{ margin: '0 auto 16px auto' }} />
                <h3 style={{ fontSize: '1.6rem', marginBottom: '10px' }}>Enquiry Received</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginBottom: '24px' }}>
                  Thank you, <strong>{formData.name}</strong>. Our senior growth consultant will review your goals and get in touch within 24 business hours.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      company: '',
                      service: 'Search Engine Optimization (SEO)',
                      budget: '₹1L – ₹3L / month',
                      message: ''
                    });
                  }}
                  className="btn btn-secondary btn-sm"
                >
                  Submit Another Project Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="lead-form-grid">
                  <div className="form-field-group">
                    <label htmlFor="name" className="input-label">Full Name *</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className={`input-control ${errors.name ? 'error' : ''}`}
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={handleChange}
                      disabled={isSubmitting}
                    />
                    {errors.name && <span className="field-error-msg">{errors.name}</span>}
                  </div>

                  <div className="form-field-group">
                    <label htmlFor="email" className="input-label">Work Email *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className={`input-control ${errors.email ? 'error' : ''}`}
                      placeholder="rahul@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      disabled={isSubmitting}
                    />
                    {errors.email && <span className="field-error-msg">{errors.email}</span>}
                  </div>

                  <div className="form-field-group">
                    <label htmlFor="phone" className="input-label">Phone Number *</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className={`input-control ${errors.phone ? 'error' : ''}`}
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                      disabled={isSubmitting}
                    />
                    {errors.phone && <span className="field-error-msg">{errors.phone}</span>}
                  </div>

                  <div className="form-field-group">
                    <label htmlFor="company" className="input-label">Company / Website</label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      className="input-control"
                      placeholder="company.com"
                      value={formData.company}
                      onChange={handleChange}
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="form-field-group full">
                    <label htmlFor="service" className="input-label">Primary Service Focus</label>
                    <select
                      id="service"
                      name="service"
                      className="input-control"
                      value={formData.service}
                      onChange={handleChange}
                      disabled={isSubmitting}
                    >
                      <option value="Search Engine Optimization (SEO)">Search Engine Optimization (SEO)</option>
                      <option value="Performance Marketing & PPC">Performance Marketing & PPC</option>
                      <option value="Social Media Optimization">Social Media Optimization</option>
                      <option value="E-Commerce Marketing">E-Commerce Marketing</option>
                      <option value="Content Marketing & Authority">Content Marketing & Authority</option>
                      <option value="Website Development & CRO">Website Development & CRO</option>
                      <option value="Comprehensive Growth Audit">Comprehensive Growth Audit (All Channels)</option>
                    </select>
                  </div>

                  <div className="form-field-group full">
                    <label htmlFor="message" className="input-label">Project Objectives &amp; Timeline *</label>
                    <textarea
                      id="message"
                      name="message"
                      className={`input-control ${errors.message ? 'error' : ''}`}
                      placeholder="Briefly describe your business goals, target monthly growth, or current pain points..."
                      value={formData.message}
                      onChange={handleChange}
                      disabled={isSubmitting}
                    />
                    {errors.message && <span className="field-error-msg">{errors.message}</span>}
                  </div>

                  <div className="form-field-group full" style={{ marginTop: '8px' }}>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn btn-primary"
                      style={{ width: '100%' }}
                    >
                      {isSubmitting ? (
                        <span>Processing Inquiry...</span>
                      ) : (
                        <>
                          <span>Submit Project Enquiry</span>
                          <Send size={16} />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
