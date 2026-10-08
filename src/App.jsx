import React, { useState } from 'react';
import { siteData } from './data/siteData';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ReviewsPlatform from './components/ReviewsPlatform';
import ServicesSection from './components/ServicesSection';
import ClientsSection from './components/ClientsSection';
import TurningPotentialSection from './components/TurningPotentialSection';
import FeaturedCaseStudiesSection from './components/FeaturedCaseStudiesSection';
import HowWeWorkSection from './components/HowWeWorkSection';
import ToolsSection from './components/ToolsSection';
import TestimonialsSection from './components/TestimonialsSection';
import ApproachAccordionSection from './components/ApproachAccordionSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';

import AuditModal from './components/AuditModal';
import ServicesModal from './components/ServicesModal';
import ServiceDetailModal from './components/ServiceDetailModal';

export default function App() {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  const [isServicesModalOpen, setIsServicesModalOpen] = useState(false);
  const [selectedServiceDetail, setSelectedServiceDetail] = useState(null);

  const handleOpenServiceDetail = (serviceName) => {
    // 1. Look up in siteData.serviceDetailsMap
    if (siteData.serviceDetailsMap && siteData.serviceDetailsMap[serviceName]) {
      setSelectedServiceDetail(siteData.serviceDetailsMap[serviceName]);
      return;
    }

    // 2. Fallback to searching by partial key or in allServices
    const foundKey = Object.keys(siteData.serviceDetailsMap || {}).find(k => 
      k.toLowerCase().includes(serviceName.toLowerCase()) || 
      serviceName.toLowerCase().includes(k.toLowerCase())
    );

    if (foundKey) {
      setSelectedServiceDetail(siteData.serviceDetailsMap[foundKey]);
    } else {
      setSelectedServiceDetail({
        title: serviceName,
        category: 'SPECIALIZED SERVICE',
        tagline: 'Tailored digital solutions engineered for sustainable commercial scale.',
        description: `Xntrova Technologies delivers specialized execution for ${serviceName}. Our multidisciplinary team aligns strategy, creative assets, and performance telemetry to generate compound ROI.`,
        highlights: [
          'Comprehensive audit and competitor benchmark analysis',
          'Dedicated account specialists and transparent communications',
          'Iterative sprint-based execution with closed-loop tracking',
          'Continuous performance optimization backed by measurable KPIs'
        ],
        deliverables: ['Custom Scope of Work', 'Dedicated Account Manager', 'Execution Roadmap', 'Monthly ROI Dashboard'],
        timeline: 'Kickoff within 3 to 5 business days upon scope approval.'
      });
    }
  };

  const handleSelectService = (serviceName) => {
    const el = document.getElementById('quote');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      // pre-populate service dropdown if desired
      const select = el.querySelector('select[name="service"]');
      if (select) {
        select.value = serviceName.includes('SEO') ? 'SEO' : serviceName.includes('PPC') ? 'PPC' : serviceName.includes('Social') ? 'Social Media' : serviceName.includes('Commerce') ? 'E-Commerce' : serviceName.includes('Content') ? 'Content' : serviceName.includes('Web') ? 'Web Development' : 'Performance';
      }
      const nameInput = el.querySelector('input[name="name"]');
      if (nameInput) nameInput.focus();
    }
  };

  React.useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.06, rootMargin: '0px 0px -30px 0px' }
    );

    const revealElements = document.querySelectorAll('.scroll-reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="xntrova-app-root">
      {/* 1. Top Bar */}
      <TopBar />

      {/* 2. Main Site Header */}
      <Header
        onOpenAudit={() => setIsAuditModalOpen(true)}
        onOpenServicesModal={() => setIsServicesModalOpen(true)}
        onSelectService={handleSelectService}
        onOpenServiceDetail={handleOpenServiceDetail}
      />

      <main>
        {/* 3. Hero Section with Midnight #001F2B & Working Audit Card (#quote) */}
        <Hero onOpenAudit={() => setIsAuditModalOpen(true)} />

        {/* 4. About Section with Orbital Graphic & Performance Overview */}
        <div className="scroll-reveal">
          <AboutSection />
        </div>

        {/* 5. Reviews Platform */}
        <ReviewsPlatform />

        {/* 6. Services 6 Image Cards Grid */}
        <div className="scroll-reveal">
          <ServicesSection
            onOpenAllServices={() => setIsServicesModalOpen(true)}
            onSelectService={handleOpenServiceDetail}
          />
        </div>

        {/* 7. Trusted by Thousands of Companies */}
        <div className="scroll-reveal">
          <ClientsSection />
        </div>

        {/* 8. Why Businesses Choose Xntrova / Performance */}
        <div className="scroll-reveal">
          <TurningPotentialSection />
        </div>

        {/* 9. Featured Work & Case Studies (Assessment Req 3) */}
        <div className="scroll-reveal">
          <FeaturedCaseStudiesSection onConsultCase={handleSelectService} />
        </div>

        {/* 10. How We Work / Process (Assessment Req 2) */}
        <div className="scroll-reveal">
          <HowWeWorkSection />
        </div>

        {/* 11. Tools We Work With */}
        <div className="scroll-reveal">
          <ToolsSection />
        </div>

        {/* 12. Words from Our Valued Clients */}
        <div className="scroll-reveal">
          <TestimonialsSection />
        </div>

        {/* 13. Boost Your Brand Growth Accordion */}
        <div className="scroll-reveal">
          <ApproachAccordionSection />
        </div>

        {/* 14. Frequently Asked Questions */}
        <div className="scroll-reveal">
          <FAQSection />
        </div>
      </main>

      {/* 13. Footer matching exact live layout + WhatsApp button */}
      <Footer
        onOpenAudit={() => setIsAuditModalOpen(true)}
        onOpenServicesModal={() => setIsServicesModalOpen(true)}
      />

      {/* Modals */}
      <AuditModal
        isOpen={isAuditModalOpen}
        onClose={() => setIsAuditModalOpen(false)}
      />

      <ServicesModal
        isOpen={isServicesModalOpen}
        onClose={() => setIsServicesModalOpen(false)}
        onSelectService={handleOpenServiceDetail}
      />

      <ServiceDetailModal
        service={selectedServiceDetail}
        isOpen={Boolean(selectedServiceDetail)}
        onClose={() => setSelectedServiceDetail(null)}
        onSelectForQuote={handleSelectService}
      />
    </div>
  );
}
