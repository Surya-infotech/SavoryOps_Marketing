import { useState } from 'react';

const platforms = [
  {
    id: 'super-admin',
    name: 'Super Admin Panel',
    folder: 'SavoryOps_AdminPanel',
    badge: 'Multi-Tenant SaaS Core',
    tagline: 'Master Control Center for Managing Restaurant Tenants, Subscriptions & MRR',
    image: '/images/hero-ecosystem.jpg',
    demoUrl: 'https://adminpanel.savoryops.com',
    localDemoUrl: 'http://localhost:3100',
    credentials: {
      role: 'Super Administrator',
      email: 'admin@savoryops.com',
      password: 'Admin@123456'
    },
    description:
      'The central administration platform engineered for SaaS operators. Manage multiple restaurant tenant accounts with automated database isolation, configure recurring monthly/annual subscription plans, oversee platform-wide MRR analytics, configure global currency exchange rates, multi-tax structures, and deploy promotional broadcast banners across all tenant portals.',
    techStack: ['React 18', 'Vite', 'Material-UI (MUI)', 'Recharts', 'JSPDF', 'Sass', 'Multi-Tenant Architecture'],
    features: [
      'Automated Restaurant Tenant Provisioning & Multi-DB Isolation',
      'Recurring Subscription Billing Plans (Monthly, Yearly & Custom Enterprise)',
      'Global Currency Manager, International Taxes & Gateway Settings',
      'Real-Time MRR, Active Tenants & Churn Analytics Dashboard',
      'System-Wide Promotional Broadcasts, Banners & Announcements',
      'Granular Role-Based Permissions & Comprehensive Audit Activity Logs'
    ]
  },
  {
    id: 'owner-panel',
    name: 'Owner & Manager Panel',
    folder: 'SavoryOps_OwnerWeb',
    badge: 'Merchant Operations & POS',
    tagline: 'High-Throughput Web POS, Interactive 2D Floor Plan & Automated Recipe BOM',
    image: '/images/features/pos-system.jpg',
    demoUrl: 'https://website.savoryops.com/signin',
    localDemoUrl: 'http://localhost:5173/signin',
    credentials: {
      role: 'Restaurant Owner / Manager',
      email: 'marcus.vance@savoryops.com',
      password: 'Owner@123456',
      managerEmail: 'lachlan.murdoch@savoryops.com',
      managerPassword: 'Employee@123456'
    },
    description:
      'The flagship restaurant management system owner portal. Features an ultra-fast web point of sale (POS) with Dine-In, Takeaway, Delivery, Pickup, and Quick Order workflows. Includes an interactive visual 2D floor map with live table timers, automated recipe Bill of Materials (BOM) inventory deductions on order firing, universal silent ESC/POS thermal printing, and 30+ financial Z-reports.',
    techStack: ['React 18', 'Vite', 'Material-UI', 'Razorpay', 'CryptoJS', 'Excel & PDF Export', 'Socket.io'],
    features: [
      'Multi-Workflow Touch POS: Dine-In, Takeaway, Delivery, Pickup & QSR',
      'Interactive 2D Floor Plan with Real-Time Table Status & Running Timers',
      'Automated Recipe BOM Inventory Deduction (Raw Grams/ML Depletion)',
      'Universal Raw ESC/POS Thermal Printing (LAN, Bluetooth & USB Sockets)',
      '30+ Formatted Printable Audit Reports with 1-Click Excel & PDF Export',
      'Consolidated End-of-Day Z-Report, Shift Audits & Cash Register Reconciliation'
    ]
  },
  {
    id: 'user-app',
    name: 'Userapp (Customer App)',
    folder: 'SavoryOps_UserApp',
    badge: 'Customer Mobile & QR App',
    tagline: 'Contactless Table QR Scan-to-Order & Direct Food Delivery Storefront',
    image: '/images/features/qr-ordering.jpg',
    demoUrl: 'https://user.savoryops.com',
    localDemoUrl: 'http://localhost:8081',
    credentials: {
      role: 'Guest / Customer',
      note: 'One-click guest mode or instant mobile sign-in'
    },
    description:
      'Native cross-platform iOS, Android, and web mobile application for restaurant patrons. Guests scan per-table dynamic QR codes to explore appetizing digital menus with high-resolution food photos, customize nested modifier choices (doneness, sides, extra toppings, allergen notes), place zero-commission takeaway or delivery orders, and track live order preparation stages in real time.',
    techStack: ['React Native 0.86', 'Expo 57', 'React 19', 'React Navigation 7', 'Reanimated', 'TypeScript'],
    features: [
      'Per-Table Dynamic QR Scan-to-Order Directly Linked to Table Number',
      'Appetizing Visual Digital Menu with Dietary Icons, Allergens & Notes',
      'Multi-Level Nested Modifier Groups (Doneness, Choice of Sides, Add-ons)',
      'Pre-Checkout Address Selector (Tower, Floor, Apartment & Delivery Notes)',
      'Dynamic Optional Tip / Gratuity Calculation with 1-Tap Opt-Out',
      'Sub-Second Push Notifications & Real-Time Order Stage Progression'
    ]
  },
  {
    id: 'employee-app',
    name: 'Employee App (Crew App)',
    folder: 'SavoryOpsEmployeeeApp',
    badge: 'Native Staff App',
    tagline: 'Multi-Role Staff App for Waiters, Cashiers, Chefs & Delivery Drivers',
    image: '/images/features/waiter-mobile-pos.jpg',
    demoUrl: 'https://crew.savoryops.com',
    localDemoUrl: 'http://localhost:8081',
    credentials: {
      role: 'Crew Staff',
      note: 'Multi-role PIN switching (Waiter, Cashier, Kitchen, Driver)'
    },
    description:
      'A unified React Native staff application supporting 5 distinct crew roles in a single install. Waiters punch tableside orders with modifiers directly on handheld phones/tablets; kitchen staff bump orders on digital tickets; cashiers collect payments; and delivery drivers view GPS directions, customer delivery addresses, and proof-of-delivery signatures with resilient offline sync.',
    techStack: ['React Native 0.86', 'Expo 57', 'React 19', 'Gifted Charts', 'Safe Area Context', 'Bluetooth ESC/POS'],
    features: [
      'Multi-Role Switcher: Waiter, Cashier, Chef / Kitchen, Hostess & Driver',
      'Tableside Order Taking with Live Floor Tables & Nested Modifier Support',
      'Silent Bluetooth & Network ESC/POS Receipt Printing from Handhelds',
      'Delivery Driver Dashboard with GPS Route Mapping & Drop-off Confirmations',
      'Resilient Offline Mode with Automatic Cloud Sync on Connection Restore',
      'Quick Cashier PIN Authentication for Fast, Secure Terminal Handoffs'
    ]
  },
  {
    id: 'landing-page',
    name: 'Landing Page & Storefront',
    folder: 'SavoryOpsLandingPage',
    badge: 'Brand Website & Menu',
    tagline: 'High-Converting Restaurant Showcase, Table Booking & Digital Storefront',
    image: '/images/worldwide-partnership.jpg',
    demoUrl: 'https://website.savoryops.com',
    localDemoUrl: 'http://localhost:5173',
    credentials: {
      role: 'Public Diner',
      note: 'Open public storefront — explore menu & book tables'
    },
    description:
      'Turnkey public website for restaurants and culinary brands. Showcases appetizing signature dishes, enables direct online table reservations without third-party commission portals, displays branch opening hours and Google Maps directions, and provides 1-tap navigation to table QR ordering and direct pickup ordering.',
    techStack: ['React 19', 'Vite 7', 'Material-UI', 'React Router 7', 'Sass', 'SEO Schema Markup'],
    features: [
      'High-Converting Brand Presentation with Hero Visuals & Story Section',
      'Direct Online Table Reservation & Booking Request System',
      'Interactive Digital Menu Showcase with Categories, Tags & Pricing',
      'Multi-Branch Restaurant Locator with Google Maps & Contact Desks',
      'Seamless Integration with User App Ordering & Per-Table QR Menus',
      '100% Mobile Responsive with Instant Loading Speeds'
    ]
  }
];

const PlatformEcosystem = () => {
  const [activeTab, setActiveTab] = useState('super-admin');
  const [copiedKey, setCopiedKey] = useState(null);

  const activePlatform = platforms.find((p) => p.id === activeTab) || platforms[0];

  const handleCopy = (text, key) => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(text);
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2000);
    }
  };

  const scrollToInquiry = () => {
    const el = document.getElementById('inquiry');
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section id="ecosystem" className="section-ecosystem">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header-center">
          <span className="badge-green">THE COMPLETE 5-SOFTWARE SUITE</span>
          <h2 className="section-title">
            One Unified Architecture. <span className="glow-gradient-text">Five Turnkey Applications.</span>
          </h2>
          <p className="section-description">
            Explore the complete software ecosystem delivered with your white-label license. 
            All five unencrypted codebases are ready for immediate self-hosted deployment.
          </p>
        </div>

        {/* 5 Software Navigation Tabs */}
        <div className="software-tabs-grid">
          {platforms.map((plat) => (
            <button
              key={plat.id}
              onClick={() => setActiveTab(plat.id)}
              className={`software-tab-card ${activeTab === plat.id ? 'active' : ''}`}
            >
              <div className="tab-card-top">
                <span className="tab-badge">{plat.badge}</span>
                <span className="tab-demo-pill">Live Demo Available</span>
              </div>
              <strong className="tab-title">{plat.name}</strong>
              <code className="tab-folder">📁 {plat.folder}</code>
            </button>
          ))}
        </div>

        {/* Active Software Showcase Card */}
        <div className="platform-showcase-card glass-panel">
          <div className="showcase-content">
            <div className="showcase-header">
              <span className="badge-green">{activePlatform.badge}</span>
              <code className="code-tag">📁 D:\SavoryOps Saas\{activePlatform.folder}</code>
            </div>
            
            <h3 className="showcase-title">{activePlatform.name}</h3>
            <p className="showcase-tagline">{activePlatform.tagline}</p>
            <p className="showcase-desc">{activePlatform.description}</p>

            {/* Tech Stack Badges */}
            <div className="showcase-tech-strip">
              <span className="tech-strip-label">TECH STACK:</span>
              <div className="tech-pills-row">
                {activePlatform.techStack.map((tech, idx) => (
                  <span key={idx} className="tech-pill">{tech}</span>
                ))}
              </div>
            </div>

            {/* Feature Bullets */}
            <div className="showcase-features-grid">
              {activePlatform.features.map((feat, idx) => (
                <div key={idx} className="feature-item">
                  <span className="check-icon">✓</span>
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* Demo Link & Credentials Box */}
            <div className="showcase-demo-card">
              <div className="demo-card-header">
                <div className="demo-status-row">
                  <span className="pulse-indicator pulse-green"></span>
                  <span className="demo-status-text">LIVE DEMO READY</span>
                </div>
                <span className="demo-license-hint">Instant Access • No Signup Required</span>
              </div>

              {/* Credentials if applicable */}
              {activePlatform.credentials && activePlatform.credentials.email && (
                <div className="demo-credentials-row">
                  <div className="cred-field">
                    <span className="cred-label">Demo Email:</span>
                    <code className="cred-code">{activePlatform.credentials.email}</code>
                    <button
                      type="button"
                      onClick={() => handleCopy(activePlatform.credentials.email, 'email')}
                      className="btn-copy-cred"
                      title="Copy Email"
                    >
                      {copiedKey === 'email' ? '✓ Copied' : 'Copy'}
                    </button>
                  </div>
                  <div className="cred-field">
                    <span className="cred-label">Password:</span>
                    <code className="cred-code">{activePlatform.credentials.password}</code>
                    <button
                      type="button"
                      onClick={() => handleCopy(activePlatform.credentials.password, 'pass')}
                      className="btn-copy-cred"
                      title="Copy Password"
                    >
                      {copiedKey === 'pass' ? '✓ Copied' : 'Copy'}
                    </button>
                  </div>
                </div>
              )}

              {activePlatform.credentials && activePlatform.credentials.note && (
                <div className="demo-credentials-note">
                  <span className="note-icon">💡</span>
                  <span>{activePlatform.credentials.note}</span>
                </div>
              )}

              {/* Action Buttons: Demo Link + License Button */}
              <div className="showcase-action-row">
                <a
                  href={activePlatform.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-demo-link"
                >
                  <span className="demo-btn-icon">🚀</span>
                  <span>Launch {activePlatform.name} Demo &rarr;</span>
                </a>

                <button
                  onClick={scrollToInquiry}
                  className="btn-acquire-code"
                >
                  <span>Acquire Source Code</span>
                </button>
              </div>
            </div>
          </div>

          <div className="showcase-media">
            <div className="media-frame">
              <img
                src={activePlatform.image}
                alt={activePlatform.name}
                className="showcase-img"
              />
              <div className="media-overlay-badge">
                <span className="pulse-indicator"></span>
                <span>Production Codebase • 100% Unencrypted</span>
              </div>
            </div>

            {/* Quick Demo Preview Info Box */}
            <div className="media-info-card">
              <div className="media-info-row">
                <span className="info-title">{activePlatform.name}</span>
                <span className="info-badge">Turnkey</span>
              </div>
              <p className="media-info-desc">
                Source code path: <code>D:\SavoryOps Saas\{activePlatform.folder}</code>
              </p>
              <a
                href={activePlatform.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-media-direct-demo"
              >
                <span>Open Live Demo in New Window</span>
                <span className="ext-icon">↗</span>
              </a>
            </div>
          </div>
        </div>

        {/* 5-Software Quick Demo Links Summary Grid */}
        <div className="software-summary-grid">
          <div className="summary-grid-header">
            <h3 className="summary-title">Direct Software Demo Directory</h3>
            <p className="summary-subtitle">Access all 5 turnkey applications directly from your browser:</p>
          </div>

          <div className="summary-cards-container">
            {platforms.map((plat) => (
              <div key={plat.id} className="summary-card">
                <div className="summary-card-top">
                  <span className="summary-pill">{plat.badge}</span>
                  <code className="summary-code">📁 {plat.folder}</code>
                </div>
                <h4 className="summary-app-name">{plat.name}</h4>
                <p className="summary-tagline">{plat.tagline}</p>
                <div className="summary-actions">
                  <a
                    href={plat.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-summary-demo"
                  >
                    <span>Open Demo</span>
                    <span className="btn-arrow">&rarr;</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformEcosystem;
