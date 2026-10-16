import React from 'react';

const LicensingPlans = ({ onSelectTier }) => {
  return (
    <section id="licensing" className="section-licensing">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header-center">
          <span className="badge-green">White-Label Commercial Packages</span>
          <h2 className="section-title">
            Transparent Licensing. <span className="glow-gradient-text">Zero Royalties Ever.</span>
          </h2>
          <p className="section-description">
            Choose whether you want our engineering team to handle end-to-end cloud deployment on your servers 
            or acquire the full source code for in-house engineering deployment.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="licensing-grid">
          {/* Tier 1: Source Code Only */}
          <div className="license-card glass-panel">
            <div className="license-badge-row">
              <span className="badge-neutral">Independent Deployment</span>
            </div>
            <h3 className="license-name">Full Source Code License</h3>
            <p className="license-desc">
              Acquire the complete uncompiled source code with perpetual white-label licensing rights. 
              Ideal for software agencies with in-house developers who prefer deploying on their own infrastructure.
            </p>

            <div className="license-price-box">
              <span className="price-label">Commercial White-Label License</span>
              <div className="price-val">Source Code Only</div>
              <span className="price-sub">One-time investment • 100% Perpetual IP ownership</span>
            </div>

            <div className="license-features-list">
              <div className="feature-group-title">INCLUDED IN THIS LICENSE:</div>
              <div className="license-feature-item">
                <span className="check-icon">✓</span>
                <span>Complete Source Code for All 5 Platforms (Admin, Owner POS, KDS, Waiter App &amp; Customer App)</span>
              </div>
              <div className="license-feature-item">
                <span className="check-icon">✓</span>
                <span>Complete Node.js REST API &amp; Socket.io Microservices Codebase</span>
              </div>
              <div className="license-feature-item">
                <span className="check-icon">✓</span>
                <span>Complete React Native (iOS &amp; Android) Mobile Repositories</span>
              </div>
              <div className="license-feature-item">
                <span className="check-icon">✓</span>
                <span>Complete MongoDB Mongoose Schemas &amp; Data Migration Scripts</span>
              </div>
              <div className="license-feature-item">
                <span className="check-icon">✓</span>
                <span>100% White-Label Rights: Rebrand under your corporate name &amp; logo</span>
              </div>
              <div className="license-feature-item">
                <span className="check-icon">✓</span>
                <span>Zero Monthly Royalties &amp; $0 Transaction Cuts Forever</span>
              </div>
              <div className="license-feature-item">
                <span className="check-icon">✓</span>
                <span>Customer-Managed Cloud Setup: You deploy on your own Docker/AWS/VPS</span>
              </div>
              <div className="license-feature-item">
                <span className="check-icon">✓</span>
                <span>Step-by-Step Architecture, Environment &amp; Deployment Guides</span>
              </div>
            </div>

            <button
              onClick={() => onSelectTier ? onSelectTier('Source Code License') : null}
              className="btn-license-action btn-license-neutral"
            >
              Inquire About Source Code License
            </button>
          </div>

          {/* Tier 2: Turnkey Setup (Highlighted) */}
          <div className="license-card glass-panel license-card-popular">
            <div className="popular-ribbon">MOST POPULAR / TURNKEY</div>
            <div className="license-badge-row">
              <span className="badge-green">Full Deployment Included</span>
            </div>
            <h3 className="license-name">Source Code + Turnkey Cloud Setup</h3>
            <p className="license-desc">
              Acquire the complete white-label source code with end-to-end cloud deployment handled by our senior engineering team 
              directly on your cloud server (AWS, GCP, DigitalOcean, Hetzner, or VPS).
            </p>

            <div className="license-price-box">
              <span className="price-label">Turnkey Cloud Launch Package</span>
              <div className="price-val glow-gradient-text">Source Code + Setup</div>
              <span className="price-sub">Launch your SaaS business in less than 48 hours</span>
            </div>

            <div className="license-features-list">
              <div className="feature-group-title">EVERYTHING IN SOURCE CODE LICENSE, PLUS:</div>
              <div className="license-feature-item">
                <span className="check-icon-gold">✓</span>
                <span><strong>Full Server Setup &amp; Deployment</strong> on Your Cloud (AWS, GCP, DigitalOcean, or VPS)</span>
              </div>
              <div className="license-feature-item">
                <span className="check-icon-gold">✓</span>
                <span><strong>Custom Domain DNS Mapping</strong> &amp; Auto-Renewing SSL Certificates</span>
              </div>
              <div className="license-feature-item">
                <span className="check-icon-gold">✓</span>
                <span><strong>Database Provisioning, Security Hardening</strong> &amp; Automated Daily Backups</span>
              </div>
              <div className="license-feature-item">
                <span className="check-icon-gold">✓</span>
                <span><strong>Payment Gateway Setup</strong> (Stripe, Razorpay, PayPal, etc.) &amp; Custom SMTP Email</span>
              </div>
              <div className="license-feature-item">
                <span className="check-icon-gold">✓</span>
                <span><strong>Mobile App Compilation</strong> with your custom package IDs, logo, and splash screens</span>
              </div>
              <div className="license-feature-item">
                <span className="check-icon-gold">✓</span>
                <span><strong>White-Labeled SuperAdmin SaaS Portal</strong> ready for immediate client onboarding</span>
              </div>
              <div className="license-feature-item">
                <span className="check-icon-gold">✓</span>
                <span><strong>1-on-1 Architect Code Walkthrough</strong> &amp; 30 Days of Dedicated DevOps Support</span>
              </div>
              <div className="license-feature-item">
                <span className="check-icon-gold">✓</span>
                <span><strong>Bespoke Customization Option:</strong> Tailor existing flows to your specific market needs</span>
              </div>
            </div>

            <button
              onClick={() => onSelectTier ? onSelectTier('Source Code + Turnkey Setup') : null}
              className="btn-license-action btn-license-primary"
            >
              Get Source Code + Turnkey Setup &rarr;
            </button>
          </div>
        </div>

        {/* Global Partnership Strip */}
        <div className="partnership-banner glass-panel">
          <div className="partnership-img-wrapper">
            <img src="/images/worldwide-partnership.jpg" alt="Worldwide Agency Partnership" className="partnership-img" />
          </div>
          <div className="partnership-info">
            <span className="badge-gold">Worldwide Agency Partnership</span>
            <h3>Looking for Multi-Country Franchise Deployment or Bespoke Engineering?</h3>
            <p>
              We partner with digital marketing agencies, POS hardware distributors, and payment processors worldwide. 
              Our senior engineering team is available for custom module creation, regional fiscal compliance (e.g. DIAN, ZATCA, GST), 
              and custom hardware integrations.
            </p>
            <div className="partnership-actions">
              <a
                href="https://wa.me/917621908664?text=Hi%2C%20I%20am%20interested%20in%20an%20agency%20partnership%20with%20SavoryOps"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-partnership"
              >
                Connect on WhatsApp (+91 7621908664) &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LicensingPlans;
