import React from 'react';
import { X, CheckCircle, ArrowRight } from 'lucide-react';

export default function CaseStudyModal({ caseItem, onClose, onConsultCase }) {
  if (!caseItem) return null;

  const servicesList = Array.isArray(caseItem.services)
    ? caseItem.services
    : (typeof caseItem.services === 'string' ? caseItem.services.split('·').map(s => s.trim()) : []);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-window" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <div className="section-eyebrow" style={{ fontSize: '0.75rem', marginBottom: '4px' }}>
              CASE STUDY OVERVIEW
            </div>
            <h3 style={{ fontSize: '1.35rem', color: 'var(--text-main)' }}>{caseItem.title}</h3>
          </div>
          <button type="button" className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            <X size={18} />
          </button>
        </div>

        <div className="modal-body">
          {/* Metadata */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '24px' }}>
            <span style={{ padding: '4px 10px', backgroundColor: 'var(--bg-subtle)', border: '1px solid var(--border-light)', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 600, color: 'var(--brand-primary)' }}>
              {caseItem.category}
            </span>
            {servicesList.map((svc, i) => (
              <span key={i} style={{ padding: '4px 10px', backgroundColor: 'var(--bg-surface)', borderRadius: '4px', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                {svc}
              </span>
            ))}
          </div>

          {/* Core Summary */}
          <div style={{ marginBottom: '24px' }}>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '8px' }}>
              Strategic Overview
            </h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.65' }}>
              {caseItem.summary || caseItem.challenge}
            </p>
          </div>

          {/* Key Deliverables */}
          {caseItem.deliverables && (
            <div style={{ marginBottom: '28px' }}>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '12px' }}>
                Operational Deliverables
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {caseItem.deliverables.map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.95rem', color: 'var(--text-main)' }}>
                    <CheckCircle size={18} color="var(--brand-primary)" style={{ flexShrink: 0 }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action Footer */}
          <div style={{ paddingTop: '20px', borderTop: '1px solid var(--border-light)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
            <span style={{ fontSize: '0.9rem', color: 'var(--text-subtle)' }}>
              Explore how this strategy applies to your business.
            </span>
            <button
              type="button"
              onClick={() => {
                onConsultCase(caseItem.category);
                onClose();
              }}
              className="btn btn-primary btn-sm"
            >
              <span>Discuss Similar Project</span>
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
