
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
                <span>Complete Source Code for All 7 Platforms (Super Admin, Owner POS/KDS/ERP, Landing Page, Customer Website, User App, 6-in-1 Crew App &amp; Node.js Server)</span>
              </div>
              <div className="license-feature-item">
                <span className="check-icon">✓</span>
                <span>Dedicated Restaurant Website + Zero-Login Public POS, KDS &amp; 0ms BroadcastChannel Customer Display (CFD)</span>
              </div>
              <div className="license-feature-item">
                <span className="check-icon">✓</span>
                <span>Omnichannel Alerts: Meta WhatsApp Cloud API v21.0, Firebase FCM &amp; Expo Push (30+ Triggers)</span>
              </div>
              <div className="license-feature-item">
                <span className="check-icon">✓</span>
                <span>Node.js/Express API with 4-Tier MongoDB Multi-DB Isolation, AWS Route 53 Auto-DNS, S3, SNS &amp; Lambda SESv2</span>
              </div>
              <div className="license-feature-item">
                <span className="check-icon">✓</span>
                <span>Complete React Native + Expo 58 Mobile Repositories (User App &amp; 6-Role Adaptive Employee App)</span>
              </div>
              <div className="license-feature-item">
                <span className="check-icon">✓</span>
                <span>Complete MongoDB Mongoose Schemas, 15+ CLI Database Seeders &amp; 18 Built-In Languages (+ RTL)</span>
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
                <span><strong>AWS Route 53 &amp; Custom Domain DNS</strong> with Automated Tenant/Website Subdomains &amp; SSL</span>
              </div>
              <div className="license-feature-item">
                <span className="check-icon-gold">✓</span>
                <span><strong>4-Tier MongoDB Provisioning</strong>, AWS S3 Media Storage, SNS SMS OTP &amp; Lambda SESv2 Emails</span>
              </div>
              <div className="license-feature-item">
                <span className="check-icon-gold">✓</span>
                <span><strong>Multi-Gateway Billing Setup</strong> (Razorpay, Stripe &amp; PayPal Sandbox/Live Modes)</span>
              </div>
              <div className="license-feature-item">
                <span className="check-icon-gold">✓</span>
                <span><strong>Meta WhatsApp Cloud API v21.0</strong> &amp; Firebase FCM / Expo Push Notification Configuration</span>
              </div>
              <div className="license-feature-item">
                <span className="check-icon-gold">✓</span>
                <span><strong>Dedicated Restaurant Website Setup</strong> with custom domain mapping &amp; online table booking engine</span>
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
            <span className="badge-gold">Bespoke Engineering &amp; Custom Code Development</span>
            <h3>Need Custom Features or Code Tailored to Your Specific Requirements?</h3>
            <p>
              We partner with digital marketing agencies, POS hardware distributors, and restaurant chains worldwide. 
              Our senior engineering team is readily available to customize the code, develop specialized modules, 
              integrate regional fiscal compliance (ZATCA, DIAN, GST), and connect custom hardware according to your exact requirements.
            </p>
            <div className="partnership-actions">
              <a
                href="#customization"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById('customization');
                  if (el) {
                    const yOffset = -80;
                    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                  }
                }}
                className="btn-partnership"
                style={{ marginRight: '10px' }}
              >
                Explore Customization Services &rarr;
              </a>
              <a
                href="https://wa.me/917621908664?text=Hi%2C%20I%20am%20interested%20in%20custom%20code%20development%20for%20SavoryOps"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-partnership"
                style={{ background: 'rgba(34, 197, 94, 0.16)', borderColor: 'rgba(34, 197, 94, 0.45)', color: '#4ade80' }}
              >
                Connect on WhatsApp &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LicensingPlans;
