import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { WhatsAppIcon, MailIcon, LocationIcon } from './Icons';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [newsletterMessage, setNewsletterMessage] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState(null); // 'success' | 'error'

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.trim()) {
      setNewsletterStatus('error');
      setNewsletterMessage('Please enter your email address.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(newsletterEmail.trim())) {
      setNewsletterStatus('error');
      setNewsletterMessage('Please enter a valid business email.');
      return;
    }

    setIsSubscribing(true);
    setNewsletterStatus(null);
    setNewsletterMessage('');

    try {
      const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8084';
      const response = await fetch(`${backendUrl}/Support/AddSubscriber`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: newsletterEmail.trim(),
          source: 'Marketing Website Newsletter'
        }),
      });

      const data = await response.json();

      if (response.ok && data.success !== false) {
        setNewsletterStatus('success');
        setNewsletterMessage(data.message || "Thank you for subscribing! You're all set to receive industry insights.");
        setNewsletterEmail('');
      } else {
        setNewsletterStatus('error');
        setNewsletterMessage(data.message || 'Subscription failed. Please try again.');
      }
    } catch (err) {
      console.error('Newsletter subscription error:', err);
      setNewsletterStatus('error');
      setNewsletterMessage('Unable to connect to server. Please try again later.');
    } finally {
      setIsSubscribing(false);
    }
  };

  const scrollTo = (id) => {
    if (location.pathname !== '/') {
      navigate(`/#${id}`);
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          const yOffset = -80;
          const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 100);
      return;
    }

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
        {/* Top Newsletter Card / Action Banner */}
        <div className="footer-newsletter-banner">
          <div className="newsletter-banner-left">
            <div className="newsletter-pill">
              <span className="newsletter-pill-icon">
                <MailIcon size={14} />
              </span>
              <span>STAY IN TOUCH</span>
            </div>
            <h3 className="newsletter-banner-title">
              Empowering Multi-Location Restaurants
            </h3>
            <p className="newsletter-banner-desc">
              Receive industry insights, operational playbooks &amp; product updates straight to your inbox.
            </p>
          </div>
          <div className="newsletter-banner-right">
            <form onSubmit={handleNewsletterSubmit} className="newsletter-inline-form">
              <div className="newsletter-input-group">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => {
                    setNewsletterEmail(e.target.value);
                    if (newsletterStatus) setNewsletterStatus(null);
                  }}
                  placeholder="Enter your business email"
                  className="newsletter-input"
                  disabled={isSubscribing}
                  required
                />
                <button
                  type="submit"
                  className="newsletter-submit-btn"
                  disabled={isSubscribing}
                >
                  {isSubscribing ? (
                    <span>Subscribing...</span>
                  ) : (
                    <>
                      <span>Subscribe</span>
                      <span style={{ fontSize: '1rem', marginLeft: '2px' }}>&rarr;</span>
                    </>
                  )}
                </button>
              </div>
              {newsletterMessage && (
                <div className={`newsletter-feedback ${newsletterStatus}`}>
                  <span>{newsletterStatus === 'success' ? '✓' : '⚠️'}</span>
                  <span>{newsletterMessage}</span>
                </div>
              )}
            </form>
          </div>
        </div>

        <div className="footer-top-grid">
          {/* Brand Info */}
          <div className="footer-brand-col">
            <div className="footer-brand-header">
              <Link to="/">
                <img src="/logo.png" alt="SavoryOps Logo" className="footer-logo" />
              </Link>
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

          {/* Solutions & SEO Guides Column */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Solutions &amp; Guides</h4>
            <ul className="footer-links-list">
              <li><Link to="/solutions/restaurant-pos-system">Restaurant POS System</Link></li>
              <li><Link to="/solutions/kitchen-display-system">Kitchen Display System (KDS)</Link></li>
              <li><Link to="/solutions/kitchen-order-ticket-system">Kitchen Order Ticket (KOT)</Link></li>
              <li><Link to="/solutions/restaurant-inventory-management">Inventory &amp; Recipe BOM</Link></li>
              <li><Link to="/solutions/cloud-kitchen-pos-system">Cloud Kitchen POS System</Link></li>
              <li><Link to="/resources/food-cost-percentage-guide">Food Cost Calculator Guide</Link></li>
              <li><a href="/sitemap.xml" target="_blank" rel="noopener noreferrer">XML Sitemap</a></li>
            </ul>
          </div>

          {/* Competitor Alternatives */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Alternatives</h4>
            <ul className="footer-links-list">
              <li><Link to="/alternatives/toast-pos-alternative">Toast POS Alternative</Link></li>
              <li><Link to="/alternatives/square-pos-alternative">Square POS Alternative</Link></li>
              <li><Link to="/alternatives/touchbistro-alternative">TouchBistro Alternative</Link></li>
              <li><a href="#comparison" onClick={(e) => { e.preventDefault(); scrollTo('comparison'); }}>Competitor Technical Audit</a></li>
              <li><a href="#roi-calculator" onClick={(e) => { e.preventDefault(); scrollTo('roi-calculator'); }}>Interactive ROI Calculator</a></li>
              <li><a href="#licensing" onClick={(e) => { e.preventDefault(); scrollTo('licensing'); }}>Licensing &amp; Pricing Tiers</a></li>
            </ul>
          </div>

          {/* The Ecosystem */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">The Ecosystem</h4>
            <ul className="footer-links-list">
              <li><a href="#ecosystem" onClick={(e) => { e.preventDefault(); scrollTo('ecosystem'); }}>SuperAdmin SaaS Panel</a></li>
              <li><a href="#ecosystem" onClick={(e) => { e.preventDefault(); scrollTo('ecosystem'); }}>Merchant Web POS &amp; Floor Map</a></li>
              <li><a href="#ecosystem" onClick={(e) => { e.preventDefault(); scrollTo('ecosystem'); }}>Interactive Kitchen KDS</a></li>
              <li><a href="#ecosystem" onClick={(e) => { e.preventDefault(); scrollTo('ecosystem'); }}>Waiter &amp; Driver Mobile Apps</a></li>
              <li><a href="#ecosystem" onClick={(e) => { e.preventDefault(); scrollTo('ecosystem'); }}>Customer Table QR Scan-to-Order</a></li>
              <li><a href="#white-label-rights" onClick={(e) => { e.preventDefault(); scrollTo('white-label-rights'); }}>White-Label Agency Rights</a></li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div className="footer-contact-col">
            <h4 className="footer-col-title">Commercial Desk</h4>
            <p className="contact-item">
              <span className="c-icon">
                <WhatsAppIcon size={16} />
              </span>
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
              <span className="c-icon">
                <MailIcon size={16} />
              </span>
              <a href="mailto:info@savoryops.com" className="c-link">
                info@savoryops.com
              </a>
            </p>
            <p className="contact-item">
              <span className="c-icon">
                <LocationIcon size={16} />
              </span>
              <span>Surat, Gujarat, India</span>
            </p>
            <div className="footer-actions">
              <Link
                to="/contact-us"
                className="btn-footer-chat"
              >
                Contact Us Page &rarr;
              </Link>
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
