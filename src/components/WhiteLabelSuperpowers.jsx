
const superpowers = [
  {
    icon: '🌐',
    title: 'Custom Domain & Multi-Tenant DNS',
    image: '/images/features/asset-management.jpg',
    tagline: 'Your Brand, Your URL, Auto SSL',
    desc: 'Host the entire cloud platform under pos.yourbrand.com, app.yourbrand.com, or allocate table-specific branded subdomains for each client venue.',
    bullets: [
      'Dedicated custom domain with auto-renewing SSL certificate',
      'Multi-tenant database isolation preventing cross-account leaks',
      'Seamless multi-outlet and franchise hierarchy governance'
    ]
  },
  {
    icon: '🎨',
    title: '100% Visual Theme & Logo Freedom',
    image: '/images/features/staff-management.jpg',
    tagline: 'Zero Watermark, Zero SavoryOps Traces',
    desc: 'Embed your corporate logo, custom primary/secondary color palette, dark/light themes, and custom splash screens across all user interfaces.',
    bullets: [
      'Upload your own logo, app icons, and browser favicons',
      'Custom brand color hex codes applied platform-wide',
      'Zero watermark, zero attribution, and zero trace of SavoryOps'
    ]
  },
  {
    icon: '📱',
    title: 'Branded iOS & Android Mobile Apps',
    image: '/images/posts/Post_05_Customer_Engagement_5Star_Reviews.jpg',
    tagline: 'Published on YOUR Google Play & App Store',
    desc: 'Publish customized React Native mobile applications on Google Play Store & Apple App Store under your own corporate developer account.',
    bullets: [
      'Custom package IDs (e.g., com.yourcompany.pos)',
      'Personalized app icons, store screenshots, and descriptions',
      'Staff waiter app & customer tableside dine-in ordering'
    ]
  },
  {
    icon: '💻',
    title: '100% Unencrypted Full Source Code',
    image: '/images/posts/Post_03_Staff_Accuracy_Zero_Cashier_Theft.jpg',
    tagline: 'Perpetual Commercial IP Ownership',
    desc: 'Get full access to all uncompiled source code across the entire 5-platform ecosystem. No IonCube, no obfuscation, no remote kill-switches.',
    bullets: [
      'Full uncompiled React 19, Vite, Node.js & React Native code',
      'Complete MongoDB Mongoose schemas and data migration scripts',
      'Total freedom to build custom integrations and client features'
    ]
  },
  {
    icon: '💳',
    title: 'Your Payment Gateway & Pricing Plans',
    image: '/images/features/finance-management.jpg',
    tagline: 'Keep 100% of Your Software MRR',
    desc: 'Connect your own Stripe, Razorpay, PayPal, or regional gateway. Set your own subscription packages and collect 100% of customer payments directly.',
    bullets: [
      'Zero revenue share: keep 100% of your software MRR',
      'Create custom monthly, annual, or lifetime subscription tiers',
      'Client payments deposit straight into your corporate bank account'
    ]
  },
  {
    icon: '🚀',
    title: 'Direct Ordering: Zero Aggregator Cuts',
    image: '/images/posts/Post_06_Direct_Ordering_Zero_Commission.jpg',
    tagline: 'Save Restaurants 30% Delivery Fees',
    desc: 'Empower restaurant clients with direct digital QR ordering, takeaway, and delivery, eliminating the punitive 25-30% commissions charged by delivery aggregators.',
    bullets: [
      'Commission-free ordering directly on restaurant’s branded web app',
      'Built-in delivery driver dispatch mode with GPS navigation',
      'Direct customer database ownership for SMS & WhatsApp marketing'
    ]
  }
];

const WhiteLabelSuperpowers = () => {
  return (
    <section id="white-label-rights" className="section-superpowers">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header-center">
          <span className="badge-green">White-Label Rights &amp; Reseller Autonomy</span>
          <h2 className="section-title">
            Built for Agencies, Resellers &amp; <span className="glow-gradient-text">Hospitality SaaS Entrepreneurs</span>
          </h2>
          <p className="section-description">
            Everything you need to launch a profitable B2B restaurant technology business under your own brand identity. 
            No developer royalties, no vendor lock-in, and 100% recurring revenue retention.
          </p>
        </div>

        {/* Superpowers Grid */}
        <div className="superpowers-grid">
          {superpowers.map((sp, idx) => (
            <div key={idx} className="superpower-card glass-panel-interactive">
              <div className="sp-img-wrapper">
                <img src={sp.image} alt={sp.title} className="sp-img" />
                <span className="sp-icon-badge">{sp.icon}</span>
              </div>
              <div className="sp-body">
                <span className="sp-tagline">{sp.tagline}</span>
                <h3 className="sp-title">{sp.title}</h3>
                <p className="sp-desc">{sp.desc}</p>
                <div className="sp-bullets">
                  {sp.bullets.map((b, bIdx) => (
                    <div key={bIdx} className="sp-bullet-item">
                      <span className="sp-bullet-check">✓</span>
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhiteLabelSuperpowers;
