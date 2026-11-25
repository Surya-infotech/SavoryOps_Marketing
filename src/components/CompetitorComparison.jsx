
// Read demo restaurant website URL from .env (VITE_DEMO_USER_WEBSITE_URL)
const DEMO_USER_WEBSITE_URL =
  import.meta.env.VITE_DEMO_USER_WEBSITE_URL || 'https://harbourblue.savoryops.com/';

const comparisonRows = [
  {
    feature: 'Dine-In POS & 2D Floor Plan',
    savoryOps: '✅ Native 2D Floor Plan, live occupied/available status, table timers, and seat counts',
    foodlay: '❌ Completely Missing. Only supports Takeaway and Home Delivery',
    tabletrack: '⚠️ Basic table selector; lacks real-time floor status visual zoning'
  },
  {
    feature: 'Dedicated Restaurant Website & Storefront',
    badge: 'Turnkey Asset',
    savoryOps: '✅ Turnkey dedicated website for every restaurant with custom domain (Auto SSL), direct online table reservations, 0% commission takeaway & delivery ordering, interactive digital menu with dietary tags, and Google Maps locator.',
    demoLink: DEMO_USER_WEBSITE_URL,
    demoLinkText: '🚀 Test Live Restaurant Website (Harbour Blue) ↗',
    foodlay: '❌ Single-page template only. No standalone dedicated restaurant websites per client, no online table reservations, and zero custom domain mapping.',
    tabletrack: '❌ No Public Restaurant Website. Completely missing customer-facing storefront or reservation website; restricted to backend internal POS.'
  },
  {
    feature: 'Table QR Ordering',
    savoryOps: '✅ Turnkey per-table QR scan-to-order with live modifiers & instant kitchen firing',
    foodlay: '❌ Fake feature. 1 static branch code; view-only PDF menu; 0 scan-to-order',
    tabletrack: '⚠️ Fragmented add-on; lacks duplicate table order locking'
  },
  {
    feature: 'Automated WhatsApp & Real-Time Alerts',
    badge: 'Meta Cloud API',
    savoryOps: '✅ Automated WhatsApp digital receipts, kitchen status milestones, table booking confirmations, loud KDS chimes & nightly owner Z-Reports',
    foodlay: '❌ Manual SMS only with expensive third-party carrier setups; no WhatsApp bot or automation',
    tabletrack: '❌ Generic email notifications only; completely missing WhatsApp integration'
  },
  {
    feature: 'Raw Material Recipe BOM Inventory',
    savoryOps: '✅ Automated Recipe BOM deducting exact grams/ml of raw ingredients on order creation',
    foodlay: '❌ None. Only counts finished menu items; no recipe bill of materials',
    tabletrack: '❌ Finished item deduction only; no sub-ingredient recipe breakdowns'
  },
  {
    feature: 'Kitchen KOT Privacy (Price-Free)',
    savoryOps: '✅ Strips dish prices completely from kitchen slips for staff privacy and confidentiality',
    foodlay: '❌ No interactive KDS; generic basic print slips only',
    tabletrack: '❌ Author confirmed: "Printing without price is not available"'
  },
  {
    feature: 'Direct Tablet ESC/POS Printing',
    savoryOps: '✅ Silent Web Bluetooth printing (58mm/80mm ESC/POS & mini Cat 0x5178 printers) + Custom Branch Receipt & KOT Designer',
    foodlay: '⚠️ Manual browser dialog; cannot auto-print orders on arrival',
    tabletrack: '❌ Requires dedicated desktop PC running 24/7 or pops web print dialog'
  },
  {
    feature: '6-in-1 Adaptive Staff & Customer Mobile Apps',
    savoryOps: '✅ Full React Native/Expo source code: Waiter (Call Alerts), Cashier (Shifts & Z-Reports), Head Chef, Chef, Host, Driver + User App',
    foodlay: '❌ Only generic admin/driver; no waiter, host, head chef or cashier shift tools',
    tabletrack: '❌ Customer & Driver source code withheld behind external paywalls'
  },
  {
    feature: '34 Built-In Reports, Cashier Shifts & Fixed Assets',
    savoryOps: '✅ 34 owner reports across Sales, Menu, Dining, Inventory, Finance & Assets + Blind Shift Close, Z-Reports & Before/After Audit Diffs',
    foodlay: '❌ Promised in delayed v5.0 update; missing accounting & asset reconciliation',
    tabletrack: '❌ Unstyled raw CSV export only; deleting orders wipes audit trail'
  },
  {
    feature: 'Source Code & DRM Freedom',
    savoryOps: '✅ 100% Unencrypted Source Code. Self-hosted, zero IP lockouts, zero phone-home DRM',
    foodlay: '⚠️ Delayed updates and paywalled offline POS modules',
    tabletrack: '❌ Proprietary S3 auto-updater with 403 errors and IP lockouts'
  }
];

const CompetitorComparison = () => {
  return (
    <section id="comparison" className="section-comparison">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header-center">
          <span className="badge-green">Technical Due Diligence</span>
          <h2 className="section-title">
            Why SavoryOps Beats <span className="glow-gradient-text">CodeCanyon Competitors</span>
          </h2>
          <p className="section-description">
            We audited over 500 verified buyer complaints on competitor systems (FoodLay, TableTrack, Bhojon). 
            Here is how SavoryOps delivers production-grade hospitality architecture where others failed.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="table-scroll-hint">
          <span>👈 Swipe horizontally to view full technical matrix 👉</span>
        </div>
        <div className="comparison-table-wrapper glass-panel">
          <table className="comparison-table">
            <thead>
              <tr>
                <th className="th-feature">Critical Restaurant Capability</th>
                <th className="th-savoryops">
                  <div className="th-brand-header">
                    <img src="/logo.png" alt="SavoryOps" className="th-logo" />
                    <span>SavoryOps SaaS</span>
                  </div>
                  <span className="badge-gold">100% Fulfilled Natively</span>
                </th>
                <th className="th-competitor">
                  <span>FoodLay (dayonesoft)</span>
                  <span className="th-sub">CodeCanyon</span>
                </th>
                <th className="th-competitor">
                  <span>TableTrack (Froiden)</span>
                  <span className="th-sub">CodeCanyon</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? 'row-even' : 'row-odd'}>
                  <td className="td-feature">
                    <strong>{row.feature}</strong>
                    {row.badge && <span className="feature-row-badge">{row.badge}</span>}
                  </td>
                  <td className="td-savoryops">
                    <div className="savoryops-cell-content">
                      <span>{row.savoryOps}</span>
                      {row.demoLink && (
                        <a
                          href={row.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="table-demo-btn"
                        >
                          <span>{row.demoLinkText || '🚀 Launch Live Demo &rarr;'}</span>
                        </a>
                      )}
                    </div>
                  </td>
                  <td className="td-competitor td-comp-red">
                    <span>{row.foodlay}</span>
                  </td>
                  <td className="td-competitor td-comp-red">
                    <span>{row.tabletrack}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bottom Banner */}
        <div className="comparison-callout glass-panel">
          <div className="callout-text">
            <strong>Ready to inspect the actual codebase yourself?</strong>
            <p>Schedule a live 1-on-1 architecture walkthrough with our lead engineers.</p>
          </div>
          <a
            href="https://wa.me/917621908664?text=Hi%2C%20I%20would%20like%20to%20schedule%20a%20technical%20codebase%20walkthrough%20for%20SavoryOps"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-callout-action"
          >
            Schedule Code Review &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};

export default CompetitorComparison;
