import React, { useState, useEffect } from 'react';

const Navbar = ({ onOpenInquiry }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="top-banner">
        <div className="top-banner-content">
          <span className="top-banner-pill">White-Label License</span>
          <span>Acquire 100% Unencrypted Source Code & Multi-Tenant SaaS Platform • Launch in &lt; 48 Hours</span>
          <a href="#licensing" onClick={(e) => { e.preventDefault(); scrollTo('licensing'); }} className="top-banner-link">
            Explore Tiers &rarr;
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`main-navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="navbar-container">
          <a href="#" className="navbar-brand">
            <img src="/logo.png" alt="SavoryOps Logo" className="brand-logo" />
            <div className="brand-text">
              <span className="brand-name">Savory<span className="brand-accent">Ops</span></span>
              <span className="brand-badge">White Label SaaS</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="nav-links">
            <a href="#ecosystem" onClick={(e) => { e.preventDefault(); scrollTo('ecosystem'); }}>5 Platforms</a>
            <a href="#workflow" onClick={(e) => { e.preventDefault(); scrollTo('workflow'); }}>Workflow</a>
            <a href="#white-label-rights" onClick={(e) => { e.preventDefault(); scrollTo('white-label-rights'); }}>White-Label Rights</a>
            <a href="#comparison" onClick={(e) => { e.preventDefault(); scrollTo('comparison'); }}>Competitor Audit</a>
            <a href="#roi-calculator" onClick={(e) => { e.preventDefault(); scrollTo('roi-calculator'); }}>ROI Calculator</a>
            <a href="#licensing" onClick={(e) => { e.preventDefault(); scrollTo('licensing'); }}>Licensing Plans</a>
            <a href="#faq" onClick={(e) => { e.preventDefault(); scrollTo('faq'); }}>FAQ</a>
          </div>

          {/* Action CTAs */}
          <div className="navbar-actions">
            <a
              href="https://wa.me/917621908664?text=Hi%2C%20I%20am%20interested%20in%20the%20SavoryOps%20SaaS%20White%20Label%20License%20and%20Source%20Code"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary-nav"
            >
              💬 WhatsApp
            </a>
            <button
              onClick={() => onOpenInquiry ? onOpenInquiry() : scrollTo('inquiry')}
              className="btn-primary-nav"
            >
              Buy License
            </button>
            <button
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="mobile-menu">
            <a href="#ecosystem" onClick={(e) => { e.preventDefault(); scrollTo('ecosystem'); }}>5 Platforms</a>
            <a href="#workflow" onClick={(e) => { e.preventDefault(); scrollTo('workflow'); }}>Workflow</a>
            <a href="#white-label-rights" onClick={(e) => { e.preventDefault(); scrollTo('white-label-rights'); }}>White-Label Rights</a>
            <a href="#comparison" onClick={(e) => { e.preventDefault(); scrollTo('comparison'); }}>Competitor Audit</a>
            <a href="#roi-calculator" onClick={(e) => { e.preventDefault(); scrollTo('roi-calculator'); }}>ROI Calculator</a>
            <a href="#licensing" onClick={(e) => { e.preventDefault(); scrollTo('licensing'); }}>Licensing Plans</a>
            <a href="#faq" onClick={(e) => { e.preventDefault(); scrollTo('faq'); }}>FAQ</a>
            <div className="mobile-menu-actions">
              <button
                onClick={() => { setMobileMenuOpen(false); scrollTo('inquiry'); }}
                className="btn-primary-mobile"
              >
                Inquire White-Label License
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
