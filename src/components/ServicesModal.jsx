import React from 'react';
import { siteData } from '../data/siteData';
import { X, ArrowRight } from 'lucide-react';

export default function ServicesModal({ isOpen, onClose, onSelectService }) {
  if (!isOpen) return null;

  const handleServiceClick = (serviceTitle) => {
    onSelectService(serviceTitle);
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-window" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <div className="section-eyebrow" style={{ fontSize: '0.75rem', marginBottom: '4px' }}>
              COMPLETE CAPABILITIES
            </div>
            <h3 style={{ fontSize: '1.35rem', color: 'var(--text-main)' }}>All Specialized Services</h3>
          </div>
          <button type="button" className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            <X size={18} />
          </button>
        </div>

        <div className="modal-body">
          <p style={{ color: 'var(--text-muted)', fontSize: '0.98rem', marginBottom: '24px' }}>
            Xntrova Technologies delivers integrated digital marketing and engineering capabilities. Select any discipline to discuss scope and feasibility.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '14px' }}>
            {(siteData.allServices || []).map((service, index) => (
              <div
                key={index}
                onClick={() => handleServiceClick(service.title)}
                style={{
                  padding: '16px 20px',
                  backgroundColor: 'var(--bg-subtle)',
                  border: '1px solid var(--border-light)',
                  borderRadius: 'var(--radius-sm)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  cursor: 'pointer',
                  transition: 'all 180ms ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--brand-primary)';
                  e.currentTarget.style.backgroundColor = '#ffffff';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-light)';
                  e.currentTarget.style.backgroundColor = 'var(--bg-subtle)';
                  e.currentTarget.style.transform = 'none';
                }}
              >
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.98rem', color: 'var(--text-main)' }}>
                    {service.title}
                  </div>
                  <span style={{ display: 'inline-block', marginTop: '4px', fontSize: '0.75rem', color: 'var(--text-subtle)', fontFamily: 'var(--font-mono)' }}>
                    {service.category}
                  </span>
                </div>
                <ArrowRight size={16} color="var(--brand-primary)" />
              </div>
            ))}
          </div>

          <div style={{ marginTop: '28px', paddingTop: '20px', borderTop: '1px solid var(--border-light)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
            <span style={{ fontSize: '0.88rem', color: 'var(--text-subtle)' }}>
              Looking for full omnichannel retainer management?
            </span>
            <button
              type="button"
              onClick={() => {
                onSelectService('Comprehensive Growth Audit');
                onClose();
              }}
              className="btn btn-primary btn-sm"
            >
              Consult an Expert
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
