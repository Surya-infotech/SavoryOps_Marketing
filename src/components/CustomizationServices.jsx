import { WhatsAppIcon } from './Icons';

const customizationPillars = [
  {
    icon: '💳',
    title: 'Custom Payment Gateways & Regional Fiscal Compliance',
    badge: 'Popular Request',
    badgeType: 'emerald',
    desc: 'Need local payment rails or government-mandated tax compliance? We integrate any payment gateway and fiscalization protocol directly into your white-label platform.',
    features: [
      'Regional Gateways: Paystack, Mercado Pago, Moneris, Adyen, Midtrans & Local Banks',
      'Government Fiscal Invoicing: ZATCA (Saudi Arabia), DIAN (Colombia), GST (India), KRA (Kenya)',
      'Automated digital tax signing, QR-encoded thermal receipts, and fiscal audit logs'
    ]
  },
  {
    icon: '⚙️',
    title: 'Bespoke Modules & Custom Business Logic',
    badge: 'Tailored Logic',
    badgeType: 'teal',
    desc: 'Have a unique operational model or franchise requirement? Our core team develops tailored workflows and modules matching your exact functional specifications.',
    features: [
      'Hotel PMS Integrations (Opera, Cloudbeds, Mews) for room charge billing',
      'Specialized workflows: Drive-thru timers, buffet weighing, cinema & bowling billing',
      'Advanced multi-tier customer loyalty, wallet cashback & branded gift card systems'
    ]
  },
  {
    icon: '🔌',
    title: 'Custom Hardware & Peripheral Drivers',
    badge: 'Hardware Sync',
    badgeType: 'blue',
    desc: 'Bridge modern web and mobile apps with specialized POS hardware, embedded peripherals, and industrial kitchen automation systems.',
    features: [
      'Digital Weighing Scales (USB / Serial RS-232 / Bluetooth) for delis & groceries',
      'Customer-Facing Pole Displays, Dual-Screen Touch Terminals & Kitchen Buzzer Pagers',
      'Specialized ESC/POS thermal printers (Epson, Star, Sunmi, Xprinter, Bixolon)'
    ]
  },
  {
    icon: '🔄',
    title: 'Third-Party ERP & Delivery Aggregator Connectors',
    badge: 'API Integration',
    badgeType: 'amber',
    desc: 'Eliminate duplicate data entry by connecting your SavoryOps instance to central enterprise systems, accounting software, and online aggregators.',
    features: [
      'Two-Way ERP Sync: SAP, Oracle NetSuite, QuickBooks, Xero, Tally & Zoho Books',
      'Central Commissary & Multi-Warehouse Automated Stock Transfer Workflows',
      'Online Food Aggregator Webhooks & Direct Order Injection APIs'
    ]
  },
  {
    icon: '🎨',
    title: 'Exclusive UI/UX Frontends & Custom Client Apps',
    badge: 'Brand Experience',
    badgeType: 'emerald',
    desc: 'Want an entirely unique user experience for your brand? We design and build custom frontend layouts, bespoke waiter apps, and branded customer ordering interfaces.',
    features: [
      'Bespoke visual design systems matching your luxury or corporate identity',
      'Tailored native mobile workflows for specialized waitstaff or kitchen teams',
      'Custom customer table QR web apps with interactive 3D / photo-rich menus'
    ]
  },
  {
    icon: '🚀',
    title: 'Dedicated Engineering & Private Repository Delivery',
    badge: 'Turnkey Handover',
    badgeType: 'teal',
    desc: 'Work directly with the architects who built SavoryOps. We deliver clean, modular, and fully tested code straight into your private GitHub or GitLab repository.',
    features: [
      'Transparent milestone-based scoping with fixed pricing or dedicated sprint hours',
      'Direct communication with senior developers via private Slack, WhatsApp & Google Meet',
      'Comprehensive code reviews, automated unit tests, and production release support'
    ]
  }
];

const CustomizationServices = ({ onInquire }) => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleCustomQuote = () => {
    if (onInquire) {
      onInquire('Bespoke Feature Customization');
    } else {
      scrollTo('inquiry');
    }
  };

  return (
    <section id="customization" className="section-customization">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header-center">
          <span className="badge-green">Bespoke Engineering Services</span>
          <h2 className="section-title">
            We Customize &amp; Extend the Codebase <span className="glow-gradient-text">According to Your Requirements</span>
          </h2>
          <p className="section-description">
            Need custom features, local payment gateways, regional tax compliance, or unique workflows? 
            Our in-house engineering team is readily available to customize, extend, and deploy the SavoryOps source code 
            specifically tailored to your exact business specifications.
          </p>
        </div>

        {/* 6 Customization Pillars Grid */}
        <div className="customization-grid">
          {customizationPillars.map((pillar, idx) => (
            <div key={idx} className="customization-card glass-panel-interactive">
              <div className="cust-header-row">
                <span className="cust-icon-box">{pillar.icon}</span>
                <span className={`subitem-badge badge-${pillar.badgeType}`}>
                  {pillar.badge}
                </span>
              </div>
              <h3 className="cust-title">{pillar.title}</h3>
              <p className="cust-desc">{pillar.desc}</p>
              
              <div className="cust-features-list">
                {pillar.features.map((feat, fIdx) => (
                  <div key={fIdx} className="cust-feature-item">
                    <span className="cust-check-icon">✓</span>
                    <span className="cust-feature-text">{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="customization-cta-banner glass-panel">
          <div className="cust-cta-content">
            <span className="badge-gold">Tailored Development On Demand</span>
            <h3>Have a Specific Feature Specification or Client RFP?</h3>
            <p>
              Share your custom wireframes, integration documents, or feature wish list. 
              Our senior software architects will analyze your requirements, provide a transparent estimate, 
              and build it directly into your unencrypted source code repository.
            </p>
            <div className="cust-cta-actions">
              <button onClick={handleCustomQuote} className="btn-cust-primary">
                <span>Request Custom Development Quote</span>
                <span className="arrow-icon">&rarr;</span>
              </button>
              <a
                href="https://wa.me/917621908664?text=Hi%20SavoryOps%20Team%2C%20I%20am%20interested%20in%20custom%20code%20development%20and%20tailored%20features%20for%20my%20business%20requirements"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cust-whatsapp"
              >
                <WhatsAppIcon size={18} />
                <span>Discuss on WhatsApp (+91 7621908664)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomizationServices;
