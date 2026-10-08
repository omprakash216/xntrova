import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';

export default function AuditModal({ isOpen, onClose }) {
  const [url, setUrl] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!url.trim()) {
      setError('Please provide your website URL');
      return;
    }
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError('Please provide a valid business email');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    setUrl('');
    setEmail('');
    setError('');
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={handleClose}>
      <div className="modal-window" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <div className="section-eyebrow" style={{ fontSize: '0.75rem', marginBottom: '4px' }}>
              COMPLIMENTARY DIAGNOSTIC
            </div>
            <h3 style={{ fontSize: '1.35rem', color: 'var(--text-main)' }}>Request Free Digital Audit</h3>
          </div>
          <button type="button" className="modal-close-btn" onClick={handleClose} aria-label="Close modal">
            <X size={18} />
          </button>
        </div>

        <div className="modal-body">
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '24px 0' }}>
              <CheckCircle2 size={44} color="#059669" style={{ margin: '0 auto 12px auto' }} />
              <h4 style={{ fontSize: '1.25rem', color: 'var(--text-main)', marginBottom: '8px' }}>
                Audit Diagnostic Initiated
              </h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.98rem', marginBottom: '20px' }}>
                We are scanning <strong>{url}</strong> for technical search bottlenecks, Core Web Vitals, and competitor gaps. Our report will be dispatched to <strong>{email}</strong> within 24–48 hours.
              </p>
              <button
                type="button"
                onClick={handleClose}
                className="btn btn-primary btn-sm"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.98rem' }}>
                Receive a targeted review of your search indexing, high-intent keyword opportunities, paid media efficiencies, and mobile performance.
              </p>

              <div className="form-field-group">
                <label className="input-label" htmlFor="audit-url">Website URL *</label>
                <input
                  id="audit-url"
                  type="text"
                  className="input-control"
                  placeholder="https://yourcompany.com"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                />
              </div>

              <div className="form-field-group">
                <label className="input-label" htmlFor="audit-email">Work Email *</label>
                <input
                  id="audit-email"
                  type="email"
                  className="input-control"
                  placeholder="you@yourcompany.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              {error && <div className="field-error-msg">{error}</div>}

              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: '100%', marginTop: '4px' }}
              >
                <span>Generate Free Audit</span>
                <ArrowRight size={16} />
              </button>

              <div style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--text-subtle)' }}>
                Zero spam. Strict agency confidentiality. Delivered by senior digital analysts.
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
