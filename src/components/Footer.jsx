import React from 'react';

const Footer = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <footer className="main-footer">
      <div className="section-container">
        <div className="footer-top-grid">
          {/* Brand Info */}
          <div className="footer-brand-col">
            <div className="footer-brand-header">
              <img src="/logo.png" alt="SavoryOps Logo" className="footer-logo" />
              <div className="footer-brand-title">
                <span className="brand-name">Savory<span className="brand-accent">Ops</span></span>
                <span className="brand-sub">White-Label Restaurant Tech SaaS</span>
              </div>
            </div>
            <p className="footer-tagline">
              The premier turnkey, multi-tenant restaurant management SaaS ecosystem. 
              Delivered with 100% full unencrypted source code, native mobile applications, 
              and zero vendor royalties.
            </p>
            <div className="footer-trust-pills">
              <span className="trust-pill">✓ 100% Full Source Code</span>
              <span className="trust-pill">✓ Multi-Tenant SaaS</span>
              <span className="trust-pill">✓ $0 Royalties</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">The Ecosystem</h4>
            <ul className="footer-links-list">
              <li><a href="#ecosystem" onClick={(e) => { e.preventDefault(); scrollTo('ecosystem'); }}>SuperAdmin SaaS Panel</a></li>
              <li><a href="#ecosystem" onClick={(e) => { e.preventDefault(); scrollTo('ecosystem'); }}>Merchant Web POS &amp; Floor Map</a></li>
              <li><a href="#ecosystem" onClick={(e) => { e.preventDefault(); scrollTo('ecosystem'); }}>Interactive Kitchen KDS</a></li>
              <li><a href="#ecosystem" onClick={(e) => { e.preventDefault(); scrollTo('ecosystem'); }}>Waiter &amp; Driver Mobile Apps</a></li>
              <li><a href="#ecosystem" onClick={(e) => { e.preventDefault(); scrollTo('ecosystem'); }}>Customer Table QR Scan-to-Order</a></li>
              <li><a href="#ecosystem" onClick={(e) => { e.preventDefault(); scrollTo('ecosystem'); }}>Node.js REST API &amp; ESC/POS Engine</a></li>
            </ul>
          </div>

          {/* White-Label Autonomy */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">White-Label Rights</h4>
            <ul className="footer-links-list">
              <li><a href="#white-label-rights" onClick={(e) => { e.preventDefault(); scrollTo('white-label-rights'); }}>Custom Domain &amp; DNS Mapping</a></li>
              <li><a href="#white-label-rights" onClick={(e) => { e.preventDefault(); scrollTo('white-label-rights'); }}>100% Logo &amp; Color Rebranding</a></li>
              <li><a href="#white-label-rights" onClick={(e) => { e.preventDefault(); scrollTo('white-label-rights'); }}>App Store &amp; Play Store Publishing</a></li>
              <li><a href="#comparison" onClick={(e) => { e.preventDefault(); scrollTo('comparison'); }}>Competitor Technical Audit</a></li>
              <li><a href="#roi-calculator" onClick={(e) => { e.preventDefault(); scrollTo('roi-calculator'); }}>Interactive ROI Calculator</a></li>
              <li><a href="#licensing" onClick={(e) => { e.preventDefault(); scrollTo('licensing'); }}>Licensing &amp; Pricing Tiers</a></li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div className="footer-contact-col">
            <h4 className="footer-col-title">Commercial Desk</h4>
            <p className="contact-item">
              <span className="c-icon">💬</span>
              <a
                href="https://wa.me/917621908664?text=Hi%2C%20I%20want%20to%20inquire%20about%20the%20SavoryOps%20White%20Label%20License"
                target="_blank"
                rel="noopener noreferrer"
                className="c-link"
              >
                +91 7621908664 (WhatsApp Chat)
              </a>
            </p>
            <p className="contact-item">
              <span className="c-icon">✉️</span>
              <a href="mailto:info@savoryops.com" className="c-link">
                info@savoryops.com
              </a>
            </p>
            <p className="contact-item">
              <span className="c-icon">📍</span>
              <span>Surat, Gujarat, India</span>
            </p>
            <div className="footer-actions">
              <a
                href="https://wa.me/917621908664?text=Hello%20SavoryOps%2C%20I%20am%20ready%20to%20request%20a%20White%20Label%20demo"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-footer-chat"
              >
                Chat on WhatsApp &rarr;
              </a>
            </div>
          </div>
        </div>

        {/* Tech Stack Strip */}
        <div className="footer-tech-stack">
          <span className="tech-stack-title">ENTERPRISE PRODUCTION STACK:</span>
          <div className="tech-stack-badges">
            <span>React 19</span>
            <span>•</span>
            <span>Vite</span>
            <span>•</span>
            <span>Node.js / Express</span>
            <span>•</span>
            <span>MongoDB Mongoose</span>
            <span>•</span>
            <span>Socket.io Real-Time</span>
            <span>•</span>
            <span>React Native (iOS &amp; Android)</span>
            <span>•</span>
            <span>Universal ESC/POS (LAN/Bluetooth/USB)</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="copyright-text">
            &copy; 2026 SavoryOps SaaS. All rights reserved. 
            Full White-Label Commercial License and Source Code rights available.
          </p>
          <div className="footer-legal-links">
            <span className="legal-pill">100% Unencrypted Source Code</span>
            <span className="legal-pill">Zero Vendor Lock-In</span>
            <span className="legal-pill">Perpetual Commercial Rights</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
