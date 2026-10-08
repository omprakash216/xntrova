import React, { useState } from 'react';
import { 
  Globe, 
  ChevronDown, 
  Menu, 
  X, 
  Search, 
  Target, 
  Share2, 
  ShoppingCart, 
  Palette, 
  Megaphone, 
  Code2, 
  ArrowRight 
} from 'lucide-react';

export const serviceMegaMenu = [
  {
    colId: 'col-1',
    sections: [
      {
        title: 'SEO SERVICES',
        icon: Search,
        items: [
          { name: 'Search Engine Optimization', anchor: 'seo' },
          { name: 'Local SEO', anchor: 'quote', serviceValue: 'Local SEO' },
          { name: 'SEO Packages', anchor: 'quote', serviceValue: 'SEO Packages' }
        ]
      },
      {
        title: 'PERFORMANCE MARKETING',
        icon: Target,
        items: [
          { name: 'Paid Advertising (PPC)', anchor: 'ppc' }
        ]
      }
    ]
  },
  {
    colId: 'col-2',
    sections: [
      {
        title: 'SOCIAL MEDIA MARKETING',
        icon: Share2,
        items: [
          { name: 'Social Media Optimization', anchor: 'smo' },
          { name: 'Online Reputation Management', anchor: 'quote', serviceValue: 'ORM' }
        ]
      },
      {
        title: 'ECOMMERCE',
        icon: ShoppingCart,
        items: [
          { name: 'E-Commerce Marketing', anchor: 'ecommerce' },
          { name: 'Amazon Marketing', anchor: 'quote', serviceValue: 'Amazon Marketing' }
        ]
      },
      {
        title: 'STUDIO',
        icon: Palette,
        items: [
          { name: 'Graphic Design', anchor: 'quote', serviceValue: 'Graphic Design' }
        ]
      }
    ]
  },
  {
    colId: 'col-3',
    sections: [
      {
        title: 'MARKETING',
        icon: Megaphone,
        items: [
          { name: 'Content Marketing', anchor: 'content' },
          { name: 'Email Marketing', anchor: 'quote', serviceValue: 'Email Marketing' },
          { name: 'Video Marketing', anchor: 'quote', serviceValue: 'Video Marketing' }
        ]
      },
      {
        title: 'DEVELOPMENT',
        icon: Code2,
        items: [
          { name: 'Website Development', anchor: 'web-dev' },
          { name: 'Website Packages', anchor: 'quote', serviceValue: 'Website Packages' },
          { name: 'App Development', anchor: 'quote', serviceValue: 'App Development' }
        ]
      }
    ]
  }
];

export default function Header({ onOpenAudit, onOpenServicesModal, onSelectService, onOpenServiceDetail }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesAccordionOpen, setMobileServicesAccordionOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [isPinned, setIsPinned] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownTimerRef = React.useRef(null);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  React.useEffect(() => {
    const handleDocumentClick = (e) => {
      if (!e.target.closest('.services-dropdown-wrap') && !e.target.closest('.mega-menu-container')) {
        setServicesDropdown(false);
        setIsPinned(false);
      }
    };
    document.addEventListener('click', handleDocumentClick);
    return () => document.removeEventListener('click', handleDocumentClick);
  }, []);

  const handleMouseEnter = () => {
    if (dropdownTimerRef.current) clearTimeout(dropdownTimerRef.current);
    setServicesDropdown(true);
  };

  const handleMouseLeave = () => {
    if (!isPinned) {
      dropdownTimerRef.current = setTimeout(() => {
        setServicesDropdown(false);
      }, 250);
    }
  };

  const handleServicesNavClick = (e) => {
    e.preventDefault();
    setIsPinned((prev) => !prev);
    setServicesDropdown((prev) => !prev);
  };

  const scrollToSection = (e, href) => {
    if (e && e.preventDefault) e.preventDefault();
    setMobileMenuOpen(false);
    setServicesDropdown(false);
    setIsPinned(false);
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      window.history.pushState(null, '', href);
      setActiveSection(id);
    }
  };

  const handleServiceClick = (item) => {
    setServicesDropdown(false);
    setIsPinned(false);
    setMobileMenuOpen(false);

    // 1. Open the full details modal for this specific service
    if (onOpenServiceDetail) {
      onOpenServiceDetail(item.name);
    }

    // 2. If it corresponds to a card on the homepage, also smoothly scroll to it and highlight
    if (item.anchor && item.anchor !== 'quote') {
      const serviceCard = document.getElementById(item.anchor);
      if (serviceCard) {
        serviceCard.scrollIntoView({ behavior: 'smooth' });
        serviceCard.classList.add('service-card-highlighted');
        setTimeout(() => {
          serviceCard.classList.remove('service-card-highlighted');
        }, 2200);
      }
    }
  };

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        {/* Brand Logo with official logo.webp */}
        <a href="#hero" onClick={(e) => scrollToSection(e, '#hero')} className="brand-logo" aria-label="Xntrova Homepage">
          <img
            src="/logo.webp"
            alt="Xntrova Technologies"
            className="brand-logo-img header-brand-logo"
            width="170"
            height="38"
            loading="eager"
            decoding="async"
          />
        </a>

        {/* Desktop Primary Nav */}
        <nav className="desktop-nav" aria-label="Primary Navigation">
          <a
            href="#hero"
            onClick={(e) => scrollToSection(e, '#hero')}
            className={`desktop-nav-link ${activeSection === 'hero' ? 'active' : ''}`}
          >
            Home
          </a>

          <a
            href="#about"
            onClick={(e) => scrollToSection(e, '#about')}
            className={`desktop-nav-link ${activeSection === 'about' ? 'active' : ''}`}
          >
            About Us
          </a>

          {/* Services Mega-Menu Trigger */}
          <div
            className="services-dropdown-wrap"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <a
              href="#services"
              onClick={handleServicesNavClick}
              className={`desktop-nav-link flex-center gap-1 ${activeSection === 'services' || servicesDropdown ? 'active' : ''}`}
            >
              <span>Services</span>
              <ChevronDown size={14} className={`dropdown-arrow ${servicesDropdown ? 'rotate' : ''}`} />
            </a>

            {/* Authentic Multi-Column Mega-Menu matching screenshot */}
            {servicesDropdown && (
              <div 
                className="mega-menu-container"
                role="region"
                aria-label="Services Navigation Menu"
              >
                <div className="mega-menu-content">
                  {/* Left 3 Category Columns */}
                  <div className="mega-menu-grid">
                    {serviceMegaMenu.map((col) => (
                      <div key={col.colId} className="mega-menu-column">
                        {col.sections.map((sec, idx) => {
                          const IconComp = sec.icon;
                          return (
                            <div key={idx} className="mega-menu-group">
                              <div className="mega-menu-group-header">
                                <IconComp className="mega-menu-icon" size={17} strokeWidth={2.2} />
                                <span className="mega-menu-group-title">{sec.title}</span>
                              </div>
                              <div className="mega-menu-group-divider" />
                              <ul className="mega-menu-list">
                                {sec.items.map((it, iIdx) => (
                                  <li key={iIdx}>
                                    <button
                                      type="button"
                                      className="mega-menu-link-btn"
                                      onClick={() => handleServiceClick(it)}
                                    >
                                      {it.name}
                                    </button>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          );
                        })}
                      </div>
                    ))}
                  </div>

                  {/* Right Feature Panel Callout Box */}
                  <div className="mega-menu-sidebar">
                    <h3 className="mega-sidebar-title">Services</h3>
                    <p className="mega-sidebar-description">
                      One team across SEO, performance, social, commerce and web — built around where your customers are actually searching.
                    </p>
                    <button
                      type="button"
                      className="mega-sidebar-btn"
                      onClick={() => {
                        setServicesDropdown(false);
                        if (onOpenServicesModal) onOpenServicesModal();
                      }}
                    >
                      <span>View all services</span>
                      <ArrowRight size={16} className="btn-arrow" />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          <a
            href="#case-studies"
            onClick={(e) => scrollToSection(e, '#case-studies')}
            className={`desktop-nav-link ${activeSection === 'case-studies' ? 'active' : ''}`}
          >
            Case Studies
          </a>

          <a
            href="#process"
            onClick={(e) => scrollToSection(e, '#process')}
            className={`desktop-nav-link ${activeSection === 'process' ? 'active' : ''}`}
          >
            How We Work
          </a>
        </nav>

        {/* Right: Region selector & Contact button */}
        <div className="header-right-actions">
          <div className="region-badge">
            <Globe size={15} color="var(--xn-primary)" />
            <span>India</span>
            <ChevronDown size={12} />
          </div>

          <a
            href="#quote"
            onClick={(e) => scrollToSection(e, '#quote')}
            className="header-contact-btn"
          >
            Get Free Audit
          </a>

          {/* Mobile Menu Trigger */}
          <button
            type="button"
            className="mobile-hamburger-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-inner">
          <div className="mobile-nav-top">
            <a href="#hero" onClick={(e) => scrollToSection(e, '#hero')} className="brand-logo" aria-label="Xntrova Homepage">
              <img
                src="/logo.webp"
                alt="Xntrova Technologies"
                className="brand-logo-img mobile-drawer-logo"
                width="145"
                height="32"
                loading="eager"
                decoding="async"
              />
            </a>
            <button onClick={() => setMobileMenuOpen(false)} className="close-drawer-btn">
              <X size={22} />
            </button>
          </div>

          <div className="mobile-nav-list">
            <a href="#hero" onClick={(e) => scrollToSection(e, '#hero')} className="mobile-nav-link">Home</a>
            <a href="#about" onClick={(e) => scrollToSection(e, '#about')} className="mobile-nav-link">About Us</a>
            
            {/* Mobile Services Accordion */}
            <div className="mobile-services-accordion">
              <button 
                type="button" 
                className="mobile-services-trigger"
                onClick={() => setMobileServicesAccordionOpen(!mobileServicesAccordionOpen)}
              >
                <span>Services</span>
                <ChevronDown size={16} className={`dropdown-arrow ${mobileServicesAccordionOpen ? 'rotate' : ''}`} />
              </button>

              {mobileServicesAccordionOpen && (
                <div className="mobile-services-content">
                  {serviceMegaMenu.flatMap(col => col.sections).map((sec, idx) => (
                    <div key={idx} className="mobile-svc-category">
                      <div className="mobile-svc-category-name">{sec.title}</div>
                      {sec.items.map((it, iIdx) => (
                        <button
                          key={iIdx}
                          type="button"
                          className="mobile-svc-sublink"
                          onClick={() => handleServiceClick(it)}
                        >
                          {it.name}
                        </button>
                      ))}
                    </div>
                  ))}
                  <button 
                    type="button"
                    className="mobile-view-all-btn"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      if (onOpenServicesModal) onOpenServicesModal();
                    }}
                  >
                    View All Services →
                  </button>
                </div>
              )}
            </div>

            <a href="#case-studies" onClick={(e) => scrollToSection(e, '#case-studies')} className="mobile-nav-link">Case Studies</a>
            <a href="#process" onClick={(e) => scrollToSection(e, '#process')} className="mobile-nav-link">How We Work</a>
            <a href="#testimonials" onClick={(e) => scrollToSection(e, '#testimonials')} className="mobile-nav-link">Reviews</a>
            <a href="#faq" onClick={(e) => scrollToSection(e, '#faq')} className="mobile-nav-link">FAQ</a>
          </div>

          <div style={{ marginTop: 'auto', paddingTop: '24px' }}>
            <a href="#quote" onClick={(e) => scrollToSection(e, '#quote')} className="btn-accent-gold" style={{ width: '100%', textAlign: 'center', display: 'block' }}>
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
