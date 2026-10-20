import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { WhatsAppIcon } from './Icons';

const Navbar = ({ onOpenInquiry }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // 'solutions' | 'platform' | 'whitelabel' | null
  const [mobileExpanded, setMobileExpanded] = useState({
    solutions: false,
    platform: false,
    whitelabel: false
  });

  const location = useLocation();
  const navigate = useNavigate();
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, []);

  const prevPathRef = useRef(location.pathname);
  useEffect(() => {
    if (prevPathRef.current !== location.pathname) {
      prevPathRef.current = location.pathname;
      setActiveDropdown(null);
      setMobileMenuOpen(false);
    }
  }, [location.pathname]);

  const scrollTo = (id) => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);

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

  const handleDropdownHover = (menu) => {
    setActiveDropdown(menu);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  const toggleDropdownClick = (menu, e) => {
    e.stopPropagation();
    setActiveDropdown((prev) => (prev === menu ? null : menu));
  };

  const toggleMobileSection = (section) => {
    setMobileExpanded((prev) => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  // 1. Solutions Mega Menu Data (9 Programmatic SEO Clusters)
  const solutionsGroups = [
    {
      heading: 'Point of Sale & Kitchen',
      tagline: 'High-speed touch billing, KDS & KOT',
      icon: '🛒',
      items: [
        {
          icon: '🍽️',
          title: 'Restaurant POS System',
          desc: 'High-speed touch billing, tables & split bills',
          path: '/solutions/restaurant-pos-system',
          badge: 'Popular',
          badgeType: 'emerald'
        },
        {
          icon: '🖥️',
          title: 'Kitchen Display (KDS)',
          desc: 'Paperless kitchen screens with countdown timers',
          path: '/solutions/kitchen-display-system',
          badge: 'Real-Time',
          badgeType: 'teal'
        },
        {
          icon: '🧾',
          title: 'Kitchen Order Ticket (KOT)',
          desc: 'Station splitting & void security audits',
          path: '/solutions/kitchen-order-ticket-system'
        },
        {
          icon: '☁️',
          title: 'Cloud Kitchen POS',
          desc: 'Multi-brand virtual kitchen aggregator hub',
          path: '/solutions/cloud-kitchen-pos-system'
        }
      ]
    },
    {
      heading: 'Operations & Margins',
      tagline: 'Recipe BOM & food cost calculation',
      icon: '📊',
      items: [
        {
          icon: '📦',
          title: 'Inventory & Recipe BOM',
          desc: 'Ingredient-level depletion & automated alerts',
          path: '/solutions/restaurant-inventory-management',
          badge: 'Smart BOM',
          badgeType: 'teal'
        },
        {
          icon: '🧮',
          title: 'Food Cost Calculator & Guide',
          desc: 'Interactive plate margin & COGS equation tool',
          path: '/resources/food-cost-percentage-guide',
          badge: 'Free Tool',
          badgeType: 'blue'
        }
      ]
    },
    {
      heading: 'Market Alternatives',
      tagline: 'Compare zero-lock-in software',
      icon: '⚖️',
      items: [
        {
          icon: '🍞',
          title: 'Toast POS Alternative',
          desc: 'Hardware-agnostic POS with 0% penalty processing',
          path: '/alternatives/toast-pos-alternative',
          badge: 'Save 40%',
          badgeType: 'amber'
        },
        {
          icon: '🔲',
          title: 'Square POS Alternative',
          desc: 'Built for restaurants with zero per-seat fees',
          path: '/alternatives/square-pos-alternative'
        },
        {
          icon: '🔄',
          title: 'TouchBistro Alternative',
          desc: 'Runs on iPad, Android tablets & Windows PCs',
          path: '/alternatives/touchbistro-alternative'
        }
      ]
    }
  ];

  // 2. Platform Dropdown Data
  const platformItems = [
    {
      icon: '🖥️',
      title: '5-Platform Architecture',
      desc: 'SuperAdmin SaaS, Merchant Web POS, Kitchen KDS, Waiter App & Table QR',
      targetId: 'ecosystem'
    },
    {
      icon: '⚡',
      title: 'Operational Workflow',
      desc: 'End-to-end guest ordering, station routing & final kitchen settlement',
      targetId: 'workflow'
    }
  ];

  // 3. White-Label Dropdown Data
  const whiteLabelItems = [
    {
      icon: '👑',
      title: 'White-Label Agency Rights',
      desc: '100% Unencrypted source code, custom domains & native mobile app publishing',
      targetId: 'white-label-rights'
    },
    {
      icon: '⚖️',
      title: 'Competitor Technical Audit',
      desc: 'Deep architecture feature matrix vs Toast, Square, TouchBistro & Clover',
      targetId: 'comparison'
    },
    {
      icon: '📈',
      title: 'Interactive ROI Calculator',
      desc: 'Forecast monthly recurring revenue (MRR) and payback timeline',
      targetId: 'roi-calculator'
    }
  ];

  const isSolutionsActive = solutionsGroups.some((g) =>
    g.items.some((i) => location.pathname === i.path)
  );

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="top-banner">
        <div className="top-banner-content">
          <span className="top-banner-pill">White-Label License</span>
          <span>Acquire 100% Unencrypted Source Code &amp; Multi-Tenant SaaS Platform • Launch in &lt; 48 Hours</span>
          <a
            href="#licensing"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('licensing');
            }}
            className="top-banner-link"
          >
            Explore Tiers &rarr;
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        ref={navRef}
        className={`main-navbar ${scrolled ? 'navbar-scrolled' : ''}`}
      >
        <div className="navbar-container">
          {/* Brand Logo & Name */}
          <Link to="/" className="navbar-brand">
            <img src="/logo.png" alt="SavoryOps Logo" className="brand-logo" />
            <div className="brand-text">
              <span className="brand-name">
                Savory<span className="brand-accent">Ops</span>
              </span>
              <span className="brand-badge">White Label SaaS</span>
            </div>
          </Link>

          {/* Desktop Organized Nav Links */}
          <div className="nav-links">
            {/* 1. Solutions Dropdown - Same Design as Platform Menu */}
            <div
              className="nav-dropdown"
              onMouseEnter={() => handleDropdownHover('solutions')}
              onMouseLeave={handleDropdownLeave}
            >
              <button
                className={`nav-dropdown-trigger ${isSolutionsActive || activeDropdown === 'solutions' ? 'active' : ''}`}
                onClick={(e) => toggleDropdownClick('solutions', e)}
                aria-haspopup="true"
                aria-expanded={activeDropdown === 'solutions'}
              >
                <span>Solutions</span>
                <span
                  className="dropdown-chevron"
                  style={{
                    transform: activeDropdown === 'solutions' ? 'rotate(180deg)' : 'rotate(0deg)'
                  }}
                >
                  ▾
                </span>
              </button>

              <div className={`nav-dropdown-menu solutions-menu ${activeDropdown === 'solutions' ? 'show' : ''}`}>
                <div className="solutions-menu-grid">
                  {/* Column 1: Point of Sale & Kitchen */}
                  <div className="solutions-menu-col">
                    <div className="menu-inner-header">POINT OF SALE &amp; KITCHEN</div>
                    <div className="platform-menu-items">
                      {solutionsGroups[0].items.map((item, idx) => (
                        <Link
                          key={idx}
                          to={item.path}
                          className="nav-card-link"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <span className="nav-card-icon">{item.icon}</span>
                          <div className="nav-card-body">
                            <div className="nav-card-title-row">
                              <span className="nav-card-title">{item.title}</span>
                              {item.badge && (
                                <span className={`subitem-badge badge-${item.badgeType || 'emerald'}`}>
                                  {item.badge}
                                </span>
                              )}
                            </div>
                            <span className="nav-card-desc">{item.desc}</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Column 2: Operations & Market Alternatives */}
                  <div className="solutions-menu-col">
                    <div className="menu-inner-header">OPERATIONS &amp; ALTERNATIVES</div>
                    <div className="platform-menu-items">
                      {[...solutionsGroups[1].items, ...solutionsGroups[2].items].map((item, idx) => (
                        <Link
                          key={idx}
                          to={item.path}
                          className="nav-card-link"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <span className="nav-card-icon">{item.icon}</span>
                          <div className="nav-card-body">
                            <div className="nav-card-title-row">
                              <span className="nav-card-title">{item.title}</span>
                              {item.badge && (
                                <span className={`subitem-badge badge-${item.badgeType || 'emerald'}`}>
                                  {item.badge}
                                </span>
                              )}
                            </div>
                            <span className="nav-card-desc">{item.desc}</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Platform Dropdown */}
            <div
              className="nav-dropdown"
              onMouseEnter={() => handleDropdownHover('platform')}
              onMouseLeave={handleDropdownLeave}
            >
              <button
                className={`nav-dropdown-trigger ${activeDropdown === 'platform' ? 'active' : ''}`}
                onClick={(e) => toggleDropdownClick('platform', e)}
                aria-haspopup="true"
                aria-expanded={activeDropdown === 'platform'}
              >
                <span>Platform</span>
                <span
                  className="dropdown-chevron"
                  style={{
                    transform: activeDropdown === 'platform' ? 'rotate(180deg)' : 'rotate(0deg)'
                  }}
                >
                  ▾
                </span>
              </button>

              <div className={`nav-dropdown-menu platform-menu ${activeDropdown === 'platform' ? 'show' : ''}`}>
                <div className="menu-inner-header">PLATFORM ARCHITECTURE</div>
                <div className="platform-menu-items">
                  {platformItems.map((item, idx) => (
                    <a
                      key={idx}
                      href={`#${item.targetId}`}
                      className="nav-card-link"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollTo(item.targetId);
                      }}
                    >
                      <span className="nav-card-icon">{item.icon}</span>
                      <div className="nav-card-body">
                        <span className="nav-card-title">{item.title}</span>
                        <span className="nav-card-desc">{item.desc}</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* 3. White-Label Dropdown */}
            <div
              className="nav-dropdown"
              onMouseEnter={() => handleDropdownHover('whitelabel')}
              onMouseLeave={handleDropdownLeave}
            >
              <button
                className={`nav-dropdown-trigger ${activeDropdown === 'whitelabel' ? 'active' : ''}`}
                onClick={(e) => toggleDropdownClick('whitelabel', e)}
                aria-haspopup="true"
                aria-expanded={activeDropdown === 'whitelabel'}
              >
                <span>White-Label</span>
                <span
                  className="dropdown-chevron"
                  style={{
                    transform: activeDropdown === 'whitelabel' ? 'rotate(180deg)' : 'rotate(0deg)'
                  }}
                >
                  ▾
                </span>
              </button>

              <div className={`nav-dropdown-menu whitelabel-menu ${activeDropdown === 'whitelabel' ? 'show' : ''}`}>
                <div className="menu-inner-header">AGENCY SUPERPOWERS</div>
                <div className="whitelabel-menu-items">
                  {whiteLabelItems.map((item, idx) => (
                    <a
                      key={idx}
                      href={`#${item.targetId}`}
                      className="nav-card-link"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollTo(item.targetId);
                      }}
                    >
                      <span className="nav-card-icon">{item.icon}</span>
                      <div className="nav-card-body">
                        <span className="nav-card-title">{item.title}</span>
                        <span className="nav-card-desc">{item.desc}</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* 4. Licensing Plans Direct Link */}
            <a
              href="#licensing"
              className="nav-direct-link"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('licensing');
              }}
            >
              Licensing Plans
            </a>

            {/* 5. FAQ Direct Link */}
            <a
              href="#faq"
              className="nav-direct-link"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('faq');
              }}
            >
              FAQ
            </a>

            {/* 6. Contact Us Link */}
            <Link
              to="/contact-us"
              className={`nav-direct-link ${location.pathname === '/contact-us' ? 'active' : ''}`}
              onClick={() => setActiveDropdown(null)}
            >
              Contact Us
            </Link>
          </div>

          {/* Action CTAs */}
          <div className="navbar-actions">
            <a
              href="https://wa.me/917621908664?text=Hi%2C%20I%20am%20interested%20in%20the%20SavoryOps%20SaaS%20White%20Label%20License%20and%20Source%20Code"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary-nav"
            >
              <span className="wa-icon">
                <WhatsAppIcon size={16} />
              </span>
              <span>WhatsApp</span>
            </a>
            <button
              onClick={() => (onOpenInquiry ? onOpenInquiry() : scrollTo('inquiry'))}
              className="btn-primary-nav"
            >
              Buy License
            </button>
            <button
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Accordion Drawer */}
        {mobileMenuOpen && (
          <div className="mobile-menu">
            {/* Solutions Section */}
            <div className={`mobile-section ${mobileExpanded.solutions ? 'open' : ''}`}>
              <button
                type="button"
                className="mobile-section-trigger"
                onClick={() => toggleMobileSection('solutions')}
                aria-expanded={mobileExpanded.solutions}
              >
                <div className="mobile-trigger-label">
                  <span className="mobile-section-icon">⚡</span>
                  <span>Solutions &amp; Modules</span>
                </div>
                <span className={`mobile-chevron ${mobileExpanded.solutions ? 'rotated' : ''}`}>
                  ▾
                </span>
              </button>
              {mobileExpanded.solutions && (
                <div className="mobile-section-content">
                  {solutionsGroups.map((group, gIdx) => (
                    <div key={gIdx} className="mobile-group-block">
                      <div className="mobile-group-title">{group.heading}</div>
                      <div className="mobile-group-items">
                        {group.items.map((item, idx) => (
                          <Link
                            key={idx}
                            to={item.path}
                            onClick={() => setMobileMenuOpen(false)}
                            className="mobile-subitem"
                          >
                            <div className="mobile-subitem-main">
                              <span className="mobile-subitem-icon">{item.icon}</span>
                              <div className="mobile-subitem-info">
                                <span className="mobile-subitem-title">{item.title}</span>
                                {item.desc && <span className="mobile-subitem-desc">{item.desc}</span>}
                              </div>
                            </div>
                            {item.badge && (
                              <span className={`subitem-badge badge-${item.badgeType || 'emerald'}`}>
                                {item.badge}
                              </span>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Platform Section */}
            <div className={`mobile-section ${mobileExpanded.platform ? 'open' : ''}`}>
              <button
                type="button"
                className="mobile-section-trigger"
                onClick={() => toggleMobileSection('platform')}
                aria-expanded={mobileExpanded.platform}
              >
                <div className="mobile-trigger-label">
                  <span className="mobile-section-icon">🖥️</span>
                  <span>Platform Architecture</span>
                </div>
                <span className={`mobile-chevron ${mobileExpanded.platform ? 'rotated' : ''}`}>
                  ▾
                </span>
              </button>
              {mobileExpanded.platform && (
                <div className="mobile-section-content">
                  <div className="mobile-group-items">
                    {platformItems.map((item, idx) => (
                      <a
                        key={idx}
                        href={`#${item.targetId}`}
                        onClick={(e) => {
                          e.preventDefault();
                          scrollTo(item.targetId);
                        }}
                        className="mobile-subitem"
                      >
                        <div className="mobile-subitem-main">
                          <span className="mobile-subitem-icon">{item.icon}</span>
                          <div className="mobile-subitem-info">
                            <span className="mobile-subitem-title">{item.title}</span>
                            {item.desc && <span className="mobile-subitem-desc">{item.desc}</span>}
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* White-Label Section */}
            <div className={`mobile-section ${mobileExpanded.whitelabel ? 'open' : ''}`}>
              <button
                type="button"
                className="mobile-section-trigger"
                onClick={() => toggleMobileSection('whitelabel')}
                aria-expanded={mobileExpanded.whitelabel}
              >
                <div className="mobile-trigger-label">
                  <span className="mobile-section-icon">👑</span>
                  <span>White-Label Rights</span>
                </div>
                <span className={`mobile-chevron ${mobileExpanded.whitelabel ? 'rotated' : ''}`}>
                  ▾
                </span>
              </button>
              {mobileExpanded.whitelabel && (
                <div className="mobile-section-content">
                  <div className="mobile-group-items">
                    {whiteLabelItems.map((item, idx) => (
                      <a
                        key={idx}
                        href={`#${item.targetId}`}
                        onClick={(e) => {
                          e.preventDefault();
                          scrollTo(item.targetId);
                        }}
                        className="mobile-subitem"
                      >
                        <div className="mobile-subitem-main">
                          <span className="mobile-subitem-icon">{item.icon}</span>
                          <div className="mobile-subitem-info">
                            <span className="mobile-subitem-title">{item.title}</span>
                            {item.desc && <span className="mobile-subitem-desc">{item.desc}</span>}
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Direct Links */}
            <div className="mobile-direct-links">
              <a
                href="#licensing"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo('licensing');
                }}
                className="mobile-direct-link"
              >
                <span>Licensing Plans</span>
                <span className="mobile-link-arrow">→</span>
              </a>
              <a
                href="#faq"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo('faq');
                }}
                className="mobile-direct-link"
              >
                <span>FAQ</span>
                <span className="mobile-link-arrow">→</span>
              </a>
              <Link
                to="/contact-us"
                onClick={() => setMobileMenuOpen(false)}
                className="mobile-direct-link"
              >
                <span>Contact Us</span>
                <span className="mobile-link-arrow">→</span>
              </Link>
            </div>

            <div className="mobile-menu-actions">
              <a
                href="https://wa.me/917621908664?text=Hi%2C%20I%20am%20interested%20in%20the%20SavoryOps%20SaaS%20White%20Label%20License%20and%20Source%20Code"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp-mobile"
                onClick={() => setMobileMenuOpen(false)}
              >
                <WhatsAppIcon size={18} />
                <span>Chat on WhatsApp</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenInquiry) {
                    onOpenInquiry();
                  } else {
                    scrollTo('inquiry');
                  }
                }}
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
