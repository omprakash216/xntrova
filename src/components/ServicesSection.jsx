import React from 'react';
import { siteData } from '../data/siteData';
import {
  ArrowRight,
  Search,
  Target,
  Share2,
  ShoppingCart,
  FileText,
  Code2
} from 'lucide-react';

const serviceIcons = {
  seo: Search,
  ppc: Target,
  smo: Share2,
  ecommerce: ShoppingCart,
  content: FileText,
  'web-dev': Code2,
};

export default function ServicesSection({ onOpenAllServices, onSelectService }) {
  return (
    <section id="services" className="section-services-block" aria-label="Our Digital Marketing Services">
      <div className="container">
        {/* Section Header */}
        <div className="services-section-head">
          <div className="services-eyebrow">
            <span className="eyebrow-dash"></span>
            <span>CAPABILITIES &amp; EXECUTION</span>
          </div>
          <h2 className="services-main-title">
            Best Digital Marketing Services in Delhi for Sustainable Business Growth
          </h2>
          <p className="services-sub-desc">
            From technical search dominance to high-converting performance funnels, we build predictable growth engines for ambitious brands.
          </p>
        </div>

        {/* 6 Image Service Cards Grid */}
        <div className="services-image-cards-grid">
          {siteData.services.map((svc, idx) => {
            const IconComponent = serviceIcons[svc.id] || Search;
            return (
              <div
                key={svc.id}
                id={svc.id}
                className="service-image-card"
                onClick={() => onSelectService(svc.title)}
              >
                {/* Top expanding accent glow line */}
                <div className="service-card-top-accent" />

                {/* Graphic Banner */}
                <div className="service-card-image-wrap">
                  <img
                    src={svc.image}
                    alt={svc.title}
                    className="service-card-img"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = `/images/service-${svc.id || 'seo'}.svg`;
                    }}
                  />
                  <div className="service-card-img-overlay" />
                  
                  <div className="service-badge-pill">
                    <span className="badge-pulse-dot" />
                    <span>{svc.badge}</span>
                  </div>

                  {svc.metric && (
                    <div className="service-metric-chip">
                      <span>{svc.metric}</span>
                    </div>
                  )}
                </div>

                {/* Body Content */}
                <div className="service-card-body">
                  {/* Category Eyebrow & Icon Row */}
                  <div className="service-card-category-row">
                    <div className="service-card-icon-frame" aria-hidden="true">
                      <IconComponent size={18} strokeWidth={2.2} />
                    </div>
                    <span className="service-card-num-label">0{idx + 1}</span>
                  </div>

                  <h3 className="service-card-heading">{svc.title}</h3>

                  {svc.tagline && (
                    <div className="service-card-tagline">
                      <span className="tagline-dot" />
                      <span>{svc.tagline}</span>
                    </div>
                  )}

                  <p className="service-card-text">{svc.description}</p>

                  {/* Practitioner Tags */}
                  {svc.tags && (
                    <div className="service-card-tags">
                      {svc.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="service-pill-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Interactive Action Row */}
                  <div className="service-card-action-row">
                    <span className="service-action-label">Explore Service</span>
                    <div className="service-action-icon-circle">
                      <ArrowRight size={15} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
