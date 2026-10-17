import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = ({ onOpenInquiry }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    setSolutionsDropdownOpen(false);
    if (location.pathname !== '/') {
      navigate(`/#${id}`);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const yOffset = -80;
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 100);
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const solutionsItems = [
    {
      title: 'Restaurant POS System',
      desc: 'Cloud billing, dine-in tables, takeaway & split checkout',
      path: '/solutions/restaurant-pos-system',
      badge: 'Popular'
    },
    {
      title: 'Kitchen Display System (KDS)',
      desc: 'Paperless real-time kitchen screens with color cook timers',
      path: '/solutions/kitchen-display-system',
      badge: 'Real-Time'
    },
    {
      title: 'Kitchen Order Ticket (KOT)',
      desc: 'Instant wireless printing & multi-station order routing',
      path: '/solutions/kitchen-order-ticket-system',
      badge: 'Auto Sync'
    },
    {
      title: 'Inventory & Recipe BOM',
      desc: 'Ingredient tracking, yield costing & auto stock deduction',
      path: '/solutions/restaurant-inventory-management',
      badge: 'Smart BOM'
    },
    {
      title: 'Cloud Kitchen POS',
      desc: 'Multi-brand virtual kitchen aggregator & unified dispatch',
      path: '/solutions/cloud-kitchen-pos-system'
    },
    {
      title: 'Toast POS Alternative',
      desc: 'Save 40% with zero processing locks and open hardware',
      path: '/alternatives/toast-pos-alternative',
      badge: 'Save 40%'
    },
    {
      title: 'Square POS Alternative',
      desc: 'Built for restaurants with no expensive per-seat charges',
      path: '/alternatives/square-pos-alternative'
    },
    {
      title: 'TouchBistro Alternative',
      desc: 'Hardware-agnostic POS with no locked processor contracts',
      path: '/alternatives/touchbistro-alternative'
    },
    {
      title: 'Food Cost Calculator & Guide',
      desc: 'Interactive live food cost percentage & plate margin calculator',
      path: '/resources/food-cost-percentage-guide',
      badge: 'Free Tool'
    }
  ];

  const isSolutionsActive = solutionsItems.some((item) => location.pathname === item.path);

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="top-banner">
        <div className="top-banner-content">
          <span className="top-banner-pill">White-Label License</span>
          <span>Acquire 100% Unencrypted Source Code &amp; Multi-Tenant SaaS Platform • Launch in &lt; 48 Hours</span>
          <a href="#licensing" onClick={(e) => { e.preventDefault(); scrollTo('licensing'); }} className="top-banner-link">
            Explore Tiers &rarr;
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`main-navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="navbar-container">
          <Link to="/" className="navbar-brand">
            <img src="/logo.png" alt="SavoryOps Logo" className="brand-logo" />
            <div className="brand-text">
              <span className="brand-name">Savory<span className="brand-accent">Ops</span></span>
              <span className="brand-badge">White Label SaaS</span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="nav-links">
            {/* Solutions Dropdown */}
            <div
              className="nav-dropdown"
              onMouseEnter={() => setSolutionsDropdownOpen(true)}
              onMouseLeave={() => setSolutionsDropdownOpen(false)}
            >
              <button
                className={`nav-dropdown-trigger ${isSolutionsActive ? 'active' : ''}`}
                onClick={() => setSolutionsDropdownOpen(!solutionsDropdownOpen)}
                aria-haspopup="true"
                aria-expanded={solutionsDropdownOpen}
              >
                <span>Solutions</span>
                <span style={{ fontSize: '0.7rem', transition: 'transform 0.2s', transform: solutionsDropdownOpen ? 'rotate(180deg)' : 'none' }}>▼</span>
              </button>

              <div className={`nav-dropdown-menu ${solutionsDropdownOpen ? 'show' : ''}`}>
                {solutionsItems.map((item, idx) => (
                  <Link
                    key={idx}
                    to={item.path}
                    className="nav-dropdown-item"
                    onClick={() => setSolutionsDropdownOpen(false)}
                  >
                    <div className="nav-dropdown-item-title">
                      <span>{item.title}</span>
                      {item.badge && <span className="nav-dropdown-badge">{item.badge}</span>}
                    </div>
                    <span className="nav-dropdown-item-desc">{item.desc}</span>
                  </Link>
                ))}
              </div>
            </div>

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
            <div style={{ padding: '8px 12px', borderBottom: '1px solid var(--border)' }}>
              <div style={{ color: '#22c55e', fontWeight: 700, fontSize: '0.82rem', marginBottom: 6, textTransform: 'uppercase' }}>
                SEO Solutions &amp; Tools
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 6 }}>
                {solutionsItems.map((item, idx) => (
                  <Link
                    key={idx}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    style={{ color: '#f3f5f3', fontSize: '0.88rem', textDecoration: 'none', padding: '4px 0' }}
                  >
                    • {item.title}
                  </Link>
                ))}
              </div>
            </div>

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
