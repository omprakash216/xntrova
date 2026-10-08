import React from 'react';
import { siteData } from '../data/siteData';

export default function Results() {
  return (
    <section className="section section-white stats-section" aria-label="Key Growth Metrics">
      <div className="container">
        <div className="stats-editorial-grid">
          {siteData.stats.map((stat, idx) => (
            <div key={idx} className="stat-editorial-col">
              <div className="stat-big-number">{stat.value}</div>
              <div className="stat-big-label">{stat.label}</div>
              <div className="stat-caption">{stat.caption}</div>
              <div className="stat-change-tag">↑ {stat.change}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
