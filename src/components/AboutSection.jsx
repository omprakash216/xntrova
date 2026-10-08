import React, { useState, useEffect } from 'react';
import { Lightbulb, Compass, BarChart3, TrendingUp, Eye, Users, MousePointerClick, Gauge, Sparkles } from 'lucide-react';

export default function AboutSection() {
  const [activeNode, setActiveNode] = useState(0); // 0: Visibility, 1: Engage, 2: Convert, 3: Measure
  const [isPaused, setIsPaused] = useState(false);
  const [activeMetricTab, setActiveMetricTab] = useState('traffic'); // 'traffic', 'projects', 'clients'

  const orbitalNodes = [
    {
      id: 0,
      title: 'Build Visibility',
      desc: 'Increase your reach and stand out online.',
      icon: Eye,
      positionClass: 'top-left',
      x: 55,
      y: 55,
      stepLabel: 'STEP 1: VISIBILITY'
    },
    {
      id: 1,
      title: 'Engage Audience',
      desc: 'Turn visitors into loyal customers.',
      icon: Users,
      positionClass: 'top-right',
      x: 295,
      y: 55,
      stepLabel: 'STEP 2: ENGAGEMENT'
    },
    {
      id: 2,
      title: 'Drive Conversions',
      desc: 'Turn clicks into customers with smart strategies.',
      icon: MousePointerClick,
      positionClass: 'bottom-left',
      x: 55,
      y: 295,
      stepLabel: 'STEP 3: CONVERSIONS'
    },
    {
      id: 3,
      title: 'Measure & Improve',
      desc: 'Track performance and optimize continuously.',
      icon: Gauge,
      positionClass: 'bottom-right',
      x: 295,
      y: 295,
      stepLabel: 'STEP 4: SCALE & ROI'
    }
  ];

  // Auto-cycle gently through the 4 steps every 3.2 seconds unless hovered
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % 4);
    }, 3200);
    return () => clearInterval(interval);
  }, [isPaused]);

  const scrollToQuote = (e) => {
    e.preventDefault();
    const el = document.getElementById('quote');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="section-about-white" aria-label="About Xntrova">
      <div className="container about-grid-container">
        {/* Left Side: Editorial Content & 4 Strategy Pillars */}
        <div className="about-left-text">
          <div className="about-eyebrow-line">
            <span className="eyebrow-dash"></span>
            <span className="eyebrow-text">About Xntrova</span>
          </div>

          <h2 className="about-main-heading">
            <span>Driven By Ideas.</span>
            <br />
            <span>Focused on <span className="text-primary-blue">Results</span></span>
          </h2>

          <p className="about-intro-paragraph">
            At Xntrova, we believe that the key to great marketing is understanding people. Each of our strategies is rooted in fresh ideas, robust planning, and a clear focus on what truly matters. We combine creativity with data-driven decisions to create meaningful experiences that connect, engage, and inspire action.
          </p>

          <div className="about-bordered-highlight">
            Whether you want to shape your brand story, improve visibility, or drive conversion, we take a creative and data-driven approach to ensure the best possible results. Standing as the best digital marketing agency in Delhi NCR, we aim to create work that delivers measurable results.
          </div>

          {/* 4 Features Grid (Compact & Interactive) */}
          <div className="about-features-2x2">
            <div 
              className={`about-feat-item ${activeNode === 0 ? 'active' : ''}`}
              onMouseEnter={() => { setActiveNode(0); setIsPaused(true); }}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="about-feat-icon">
                <Lightbulb size={18} />
              </div>
              <div>
                <h3 className="about-feat-title">Creative Ideas</h3>
                <p className="about-feat-desc">Fresh thinking that builds powerful brand stories.</p>
              </div>
            </div>

            <div 
              className={`about-feat-item ${activeNode === 1 ? 'active' : ''}`}
              onMouseEnter={() => { setActiveNode(1); setIsPaused(true); }}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="about-feat-icon">
                <Compass size={18} />
              </div>
              <div>
                <h3 className="about-feat-title">Strategic Planning</h3>
                <p className="about-feat-desc">Smart strategies backed by deep market insights.</p>
              </div>
            </div>

            <div 
              className={`about-feat-item ${activeNode === 2 ? 'active' : ''}`}
              onMouseEnter={() => { setActiveNode(2); setIsPaused(true); }}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="about-feat-icon">
                <BarChart3 size={18} />
              </div>
              <div>
                <h3 className="about-feat-title">Data-Driven Decisions</h3>
                <p className="about-feat-desc">Decisions tied to real impact and conversion ROI.</p>
              </div>
            </div>

            <div 
              className={`about-feat-item ${activeNode === 3 ? 'active' : ''}`}
              onMouseEnter={() => { setActiveNode(3); setIsPaused(true); }}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="about-feat-icon">
                <TrendingUp size={18} />
              </div>
              <div>
                <h3 className="about-feat-title">Measurable Results</h3>
                <p className="about-feat-desc">Real compound results that drive sustainable growth.</p>
              </div>
            </div>
          </div>

          <div className="about-cta-action-row">
            <a href="#quote" onClick={scrollToQuote} className="btn-hero-primary">
              <span>Let's Grow Together</span>
            </a>
          </div>
        </div>

        {/* Right Side: Smart Animated Orbital Visual & Live Performance Telemetry */}
        <div className="about-right-visual">
          <div 
            className="orbital-diagram-wrap"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Background Dashed Rings */}
            <div className="orbit-ring-outer"></div>
            <div className="orbit-ring-inner"></div>

            {/* Smart Connecting Beam Lines with Active Laser Glow */}
            <svg className="orbit-cross-lines" viewBox="0 0 350 350" preserveAspectRatio="none">
              {orbitalNodes.map((node) => {
                const isActive = activeNode === node.id;
                return (
                  <g key={node.id}>
                    <line
                      x1="175"
                      y1="175"
                      x2={node.x}
                      y2={node.y}
                      stroke={isActive ? '#008BB9' : 'rgba(0, 139, 185, 0.2)'}
                      strokeWidth={isActive ? '2.5' : '1'}
                      strokeDasharray={isActive ? 'none' : '4 4'}
                      className={isActive ? 'orbit-active-beam' : ''}
                    />
                    {isActive && (
                      <circle
                        cx={(175 + node.x) / 2}
                        cy={(175 + node.y) / 2}
                        r="3.5"
                        fill="#00e5ff"
                        className="orbit-laser-pulse"
                      />
                    )}
                  </g>
                );
              })}
            </svg>

            {/* Center Circle with Animated Radar Wave & Dynamic State */}
            <div className="orbit-center-node">
              <div className="center-radar-ripple"></div>
              <div className="orbit-center-brand">XNTROVA</div>
              <div className="orbit-center-sub">
                {orbitalNodes[activeNode]?.stepLabel || 'DRIVEN BY RESULTS'}
              </div>
            </div>

            {/* 4 Interactive Satellite Floating Nodes */}
            {orbitalNodes.map((node) => {
              const IconComp = node.icon;
              const isActive = activeNode === node.id;
              return (
                <div
                  key={node.id}
                  className={`satellite-node ${node.positionClass} ${isActive ? 'node-active' : ''}`}
                  onClick={() => setActiveNode(node.id)}
                  onMouseEnter={() => { setActiveNode(node.id); setIsPaused(true); }}
                  onMouseLeave={() => setIsPaused(false)}
                >
                  <div className={`sat-icon-wrap ${isActive ? 'icon-active' : ''}`}>
                    <IconComp size={15} />
                  </div>
                  <div className="sat-text-title">{node.title}</div>
                  <div className="sat-text-desc">{node.desc}</div>
                </div>
              );
            })}
          </div>

          {/* Interactive Performance Overview Card */}
          <div className="performance-overview-card">
            <div className="perf-card-header">
              <span className="perf-card-title">Performance Overview</span>
              <span className="perf-growing-badge">
                <TrendingUp size={12} />
                <span>Growing</span>
              </span>
            </div>

            {/* Dynamic Smooth SVG Trendline */}
            <svg viewBox="0 0 280 44" className="perf-chart-svg" preserveAspectRatio="none">
              <path
                d="M4,38 C40,36 65,26 90,28 S140,18 170,16 S220,6 276,4"
                fill="none"
                stroke="var(--xn-primary)"
                strokeWidth="2.5"
                strokeLinecap="round"
                className="perf-line-animate"
              />
              <circle cx="276" cy="4" r="3.5" fill="#f59e0b" className="perf-dot-pulse" />
            </svg>

            <div className="perf-stats-row">
              <button
                type="button"
                className={`perf-stat-col ${activeMetricTab === 'traffic' ? 'selected' : ''}`}
                onClick={() => setActiveMetricTab('traffic')}
              >
                <div className="perf-stat-label">Organic Traffic</div>
                <div className="perf-stat-val">+250%</div>
              </button>

              <button
                type="button"
                className={`perf-stat-col ${activeMetricTab === 'projects' ? 'selected' : ''}`}
                onClick={() => setActiveMetricTab('projects')}
              >
                <div className="perf-stat-label">Projects</div>
                <div className="perf-stat-val">120+</div>
              </button>

              <button
                type="button"
                className={`perf-stat-col ${activeMetricTab === 'clients' ? 'selected' : ''}`}
                onClick={() => setActiveMetricTab('clients')}
              >
                <div className="perf-stat-label">Happy Clients</div>
                <div className="perf-stat-val">500+</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
