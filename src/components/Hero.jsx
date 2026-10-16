import React from 'react';

const Hero = ({ onInquire }) => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section">
      <div className="hero-glow-backdrop"></div>
      <div className="hero-container">
        {/* Top Badges */}
        <div className="hero-pill-badge">
          <span className="pill-dot"></span>
          <span>100% Unencrypted Source Code &amp; Multi-Tenant SaaS License</span>
          <span className="pill-tag">v3.1.0 Ready</span>
        </div>

        {/* Main Heading */}
        <h1 className="hero-title">
          Launch Your Own Restaurant Tech SaaS with <span className="glow-gradient-text">Complete White-Label Rights</span>
        </h1>

        {/* Subtitle */}
        <p className="hero-subtitle">
          Acquire the complete unencrypted source code for <strong>SavoryOps SaaS</strong>. A turnkey 5-platform restaurant management powerhouse: 
          <strong> SuperAdmin SaaS Portal</strong>, <strong>Merchant Web POS</strong>, <strong>Real-Time Kitchen KDS</strong>, 
          <strong> Native Cross-Platform Staff Mobile App</strong>, and <strong>Customer QR Scan-to-Order</strong>. 
          Zero recurring royalties, zero transaction cuts, and 100% intellectual property ownership.
        </p>

        {/* Action Buttons */}
        <div className="hero-cta-group">
          <button onClick={() => scrollTo('licensing')} className="btn-hero-primary">
            <span>Explore Licensing Packages</span>
            <span className="arrow-icon">&rarr;</span>
          </button>
          <button onClick={() => scrollTo('workflow')} className="btn-hero-secondary">
            <span>⚡ View Live Operational Flow</span>
          </button>
          <a
            href="https://wa.me/917621908664?text=Hello%2C%20I%20would%20like%20to%20request%20a%20live%20demo%20of%20SavoryOps%20SaaS%20White%20Label"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-hero-outline"
          >
            <span>Schedule Architect Walkthrough</span>
          </a>
        </div>

        {/* 4 Key Pillars Highlights */}
        <div className="hero-stats-grid">
          <div className="stat-card">
            <span className="stat-number">100%</span>
            <span className="stat-label">Full Source Code</span>
            <span className="stat-sub">Zero encrypted code or DRM locks</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">5 Platforms</span>
            <span className="stat-label">Complete Ecosystem</span>
            <span className="stat-sub">Admin, Owner, KDS, Waiter &amp; Customer</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">$0 Surcharges</span>
            <span className="stat-label">Keep 100% Revenue</span>
            <span className="stat-sub">No per-order or monthly vendor fees</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">&lt; 48 Hours</span>
            <span className="stat-label">Turnkey Cloud Launch</span>
            <span className="stat-sub">Custom domain &amp; SSL setup included</span>
          </div>
        </div>

        {/* 3D Mockup Showcase */}
        <div className="hero-mockup-wrapper">
          <div className="mockup-frame">
            <img
              src="/images/hero-ecosystem.jpg"
              alt="SavoryOps Complete White-Label SaaS Ecosystem"
              className="hero-main-img"
            />
            {/* Overlay Glass Tags */}
            <div className="floating-badge badge-pos">
              <span className="pulse-indicator"></span>
              <div>
                <strong>Unified Merchant POS</strong>
                <p>2D Dynamic Floor Map &amp; Dine-In</p>
              </div>
            </div>

            <div className="floating-badge badge-kds">
              <span className="pulse-indicator pulse-amber"></span>
              <div>
                <strong>Interactive Kitchen KDS</strong>
                <p>Station Routing &amp; Audio Chimes</p>
              </div>
            </div>

            <div className="floating-badge badge-qr">
              <span className="pulse-indicator"></span>
              <div>
                <strong>Table QR Self-Order</strong>
                <p>Nested Modifiers &amp; Live Cart</p>
              </div>
            </div>

            <div className="floating-badge badge-mobile">
              <span className="pulse-indicator pulse-blue"></span>
              <div>
                <strong>Native Staff Apps</strong>
                <p>Waiter, Cashier, Chef &amp; Driver</p>
              </div>
            </div>
          </div>
        </div>

        {/* Technologies Strip */}
        <div className="hero-tech-strip">
          <span className="tech-strip-label">ENGINEERED WITH MODERN PRODUCTION STACK:</span>
          <div className="tech-tags">
            <span className="tech-badge">React 19</span>
            <span className="tech-badge">Vite 8</span>
            <span className="tech-badge">Node.js Express</span>
            <span className="tech-badge">MongoDB Mongoose</span>
            <span className="tech-badge">Socket.io Real-Time</span>
            <span className="tech-badge">React Native (iOS &amp; Android)</span>
            <span className="tech-badge">Universal ESC/POS (LAN/Bluetooth/USB)</span>
            <span className="tech-badge">Material-UI (MUI)</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
