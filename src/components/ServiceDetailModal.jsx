import React from 'react';
import { X, CheckCircle2, ArrowRight, Clock, Layers, Sparkles } from 'lucide-react';

export default function ServiceDetailModal({ service, isOpen, onClose, onSelectForQuote }) {
  if (!isOpen || !service) return null;

  const handleRequestQuote = () => {
    if (onSelectForQuote) {
      onSelectForQuote(service.title);
    }
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="service-detail-modal-window" onClick={(e) => e.stopPropagation()}>
        {/* Modal Top Header */}
        <div className="service-modal-header">
          <div>
            <div className="service-modal-category">
              <Sparkles size={14} className="service-modal-sparkle" />
              <span>{service.category || 'XNTROVA SERVICE'}</span>
            </div>
            <h2 className="service-modal-title">{service.title}</h2>
            {service.tagline && (
              <p className="service-modal-tagline">{service.tagline}</p>
            )}
          </div>
          <button
            type="button"
            className="service-modal-close"
            onClick={onClose}
            aria-label="Close dialog"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="service-modal-body">
          {/* Main Description */}
          <div className="service-modal-section">
            <h4 className="service-section-heading">Executive Overview</h4>
            <p className="service-overview-text">{service.description}</p>
          </div>

          {/* Key Strategic Highlights */}
          {service.highlights && service.highlights.length > 0 && (
            <div className="service-modal-section">
              <h4 className="service-section-heading">Strategic Scope & Capabilities</h4>
              <div className="service-highlights-grid">
                {service.highlights.map((item, idx) => (
                  <div key={idx} className="service-highlight-card">
                    <CheckCircle2 size={18} className="highlight-check-icon" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tangible Deliverables & Timeline */}
          <div className="service-meta-row">
            {service.deliverables && service.deliverables.length > 0 && (
              <div className="service-meta-col">
                <div className="meta-col-header">
                  <Layers size={16} color="var(--xn-primary)" />
                  <h5>Key Deliverables</h5>
                </div>
                <ul className="meta-deliverables-list">
                  {service.deliverables.map((del, dIdx) => (
                    <li key={dIdx}>{del}</li>
                  ))}
                </ul>
              </div>
            )}

            {service.timeline && (
              <div className="service-meta-col">
                <div className="meta-col-header">
                  <Clock size={16} color="var(--xn-accent-gold)" />
                  <h5>Execution Timeline</h5>
                </div>
                <p className="meta-timeline-text">{service.timeline}</p>
                <div className="meta-badge-guarantee">
                  ✓ 100% Performance-Driven Retainer
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="service-modal-footer">
          <button
            type="button"
            className="service-modal-btn-secondary"
            onClick={onClose}
          >
            Close
          </button>
          <button
            type="button"
            className="service-modal-btn-primary"
            onClick={handleRequestQuote}
          >
            <span>Get Free Proposal for this Service</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
