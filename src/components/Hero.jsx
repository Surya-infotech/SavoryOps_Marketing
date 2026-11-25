import { Link } from 'react-router-dom';

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
          <span>100% Unencrypted Source Code • 7 Complete Codebases Included</span>
          <span className="pill-tag">v4.0 Ready</span>
        </div>

        {/* Main Heading */}
        <h1 className="hero-title">
          Launch Your Own Restaurant Tech SaaS with <span className="glow-gradient-text">Complete White-Label Rights</span>
        </h1>

        {/* Subtitle */}
        <p className="hero-subtitle">
          Acquire the complete unencrypted source code for <strong>SavoryOps SaaS</strong>—a 7-platform restaurant technology suite:
          <strong> Super Admin SaaS Panel</strong>, <strong>Owner &amp; Manager Web POS/KDS/ERP</strong>, <strong>SaaS Acquisition Landing Page</strong>,
          <strong> Dedicated Custom-Domain Restaurant Websites</strong>, <strong>Customer QR Mobile App</strong>, <strong>6-in-1 Adaptive Crew App</strong>, and
          <strong> Multi-Tenant Node.js + AWS Cloud Backend</strong>. Zero royalties, 100% IP ownership, and custom development available on demand.
        </p>

        {/* Action Buttons */}
        <div className="hero-cta-group">
          <button onClick={() => (onInquire ? onInquire() : scrollTo('licensing'))} className="btn-hero-primary">
            <span>Explore Licensing Packages</span>
            <span className="arrow-icon">&rarr;</span>
          </button>
          <Link to="/platforms" className="btn-hero-secondary">
            <span>🧭 Explore All 7 Platforms</span>
          </Link>
          <button onClick={() => scrollTo('workflow')} className="btn-hero-outline">
            <span>⚡ View Operational Flow</span>
          </button>
        </div>

        {/* 4 Key Pillars Highlights */}
        <div className="hero-stats-grid">
          <div className="stat-card">
            <span className="stat-number">7 Codebases</span>
            <span className="stat-label">Complete SaaS Suite</span>
            <span className="stat-sub">Admin, Owner POS, Websites, 2 Apps &amp; API</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">6 Roles · 34 Reports</span>
            <span className="stat-label">Deep Hospitality ERP</span>
            <span className="stat-sub">Recipe BOM, Finance, Assets, Shifts &amp; KDS</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">$0 Surcharges</span>
            <span className="stat-label">Keep 100% Revenue</span>
            <span className="stat-sub">Unencrypted IP with zero royalties ever</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">18 Languages</span>
            <span className="stat-label">Global + Native RTL</span>
            <span className="stat-sub">Arabic &amp; Farsi RTL + Route 53 Auto-DNS</span>
          </div>
        </div>

        {/* 3D Mockup Showcase */}
        <div className="hero-mockup-wrapper">
          <div className="mockup-frame">
            <img
              src="/images/hero-ecosystem.jpg"
              alt="SavoryOps Complete 7-Platform White-Label SaaS Ecosystem"
              className="hero-main-img"
            />
            {/* Overlay Glass Tags */}
            <div className="floating-badge badge-pos">
              <span className="pulse-indicator"></span>
              <div>
                <strong>Owner Web POS &amp; 0ms CFD</strong>
                <p>Station Shifts, KDS &amp; 34 Reports</p>
              </div>
            </div>

            <div className="floating-badge badge-kds">
              <span className="pulse-indicator pulse-amber"></span>
              <div>
                <strong>Zero-Login Public KDS</strong>
                <p>Deal Sub-Item Split &amp; Bluetooth Print</p>
              </div>
            </div>

            <div className="floating-badge badge-qr">
              <span className="pulse-indicator"></span>
              <div>
                <strong>QR Ordering &amp; Call Waiter</strong>
                <p>Dedicated Website + Customer App</p>
              </div>
            </div>

            <div className="floating-badge badge-mobile">
              <span className="pulse-indicator pulse-blue"></span>
              <div>
                <strong>6-in-1 Staff Crew App</strong>
                <p>Waiter, Cashier, Chef, HeadChef, Host &amp; Driver</p>
              </div>
            </div>
          </div>
        </div>

        {/* Special Capabilities Highlight Bar */}
        <div className="hero-feature-highlights">
          <Link to="/platforms/customer-website" className="hero-hl-pill">
            <span className="hl-pill-icon">🌐</span>
            <span><strong>Dedicated Restaurant Website:</strong> AWS Route 53 auto-DNS, table bookings, Call Waiter &amp; 0% commission ordering &rarr;</span>
          </Link>
          <Link to="/platforms/backend-server" className="hero-hl-pill">
            <span className="hl-pill-icon">☁️</span>
            <span><strong>Multi-DB Cloud Engine:</strong> Isolated tenant DBs, AWS S3/SNS/Lambda, FCM/Expo Push &amp; Meta WhatsApp Cloud API &rarr;</span>
          </Link>
        </div>

        {/* Technologies Strip */}
        <div className="hero-tech-strip">
          <span className="tech-strip-label">ENGINEERED WITH VERIFIED PRODUCTION STACK:</span>
          <div className="tech-tags">
            <span className="tech-badge">React 18 &amp; 19</span>
            <span className="tech-badge">Vite 6–8</span>
            <span className="tech-badge">Node.js + Express 4.22</span>
            <span className="tech-badge">MongoDB Multi-DB</span>
            <span className="tech-badge">React Native 0.88 + Expo 58</span>
            <span className="tech-badge">BroadcastChannel + FCM/Expo Push</span>
            <span className="tech-badge">Web Bluetooth ESC/POS</span>
            <span className="tech-badge">AWS Route53 · S3 · SNS · Lambda</span>
            <span className="tech-badge">Meta WhatsApp Cloud API v21</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
