import React, { useState } from 'react';
import { siteData } from '../data/siteData';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prevIdx) => (prevIdx === 0 ? siteData.testimonials.length - 1 : prevIdx - 1));
  };

  const next = () => {
    setCurrentIndex((prevIdx) => (prevIdx === siteData.testimonials.length - 1 ? 0 : prevIdx + 1));
  };

  return (
    <section id="testimonials" className="section-testimonials-block" aria-label="Client Testimonials">
      <div className="container">
        <h2 className="testimonials-heading-title">Words from Our Valued Clients</h2>

        <div className="testimonials-carousel-wrapper">
          <div className="testimonials-cards-grid">
            {siteData.testimonials.map((t, idx) => (
              <div
                key={idx}
                className="client-testimonial-card"
              >
                {/* 5 Yellow Stars from screenshot */}
                <div className="testimonial-stars-row">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={15} fill="#F59E0B" color="#F59E0B" />
                  ))}
                </div>

                <p className="testimonial-quote-text">"{t.review}"</p>

                <div className="testimonial-author-row">
                  <div className="author-avatar-circle">
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <div className="author-name-text">{t.author}</div>
                    <div className="author-role-company">{t.role} · {t.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="testimonials-arrows-row">
            <button type="button" onClick={prev} className="carousel-nav-btn" aria-label="Previous review">
              <ChevronLeft size={20} />
            </button>
            <button type="button" onClick={next} className="carousel-nav-btn" aria-label="Next review">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
