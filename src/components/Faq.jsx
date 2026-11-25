import { useState } from 'react';
import { Link } from 'react-router-dom';

const faqs = [
  {
    question: 'What codebases and repositories are included in the White-Label License?',
    answer:
      'You receive 100% unencrypted source code for all 7 platforms: 1) Super Admin Panel (SavoryOps_AdminPanel in React 18/Vite); 2) Owner & Manager Panel (SavoryOps_OwnerWeb featuring Web POS, Cashier Shifts, Zero-Login Public POS/KOT/Customer Displays, Recipe BOM, Finance, Fixed Assets & 34 Reports); 3) SaaS Landing Page (SavoryOpsLandingPage with SEO clusters, Food Cost Calculator & Owner Onboarding); 4) Dedicated Restaurant Website (SavoryOps_UserWebsite with browser QR scanner, Call Waiter & online bookings); 5) Customer Mobile App (SavoryOps_UserApp in React Native/Expo 58); 6) 6-in-1 Employee Crew App (SavoryOpsEmployeeeApp adapting across Waiter, Cashier, Head Chef, Chef, Host & Delivery Driver); and 7) Core Backend & Cloud Engine (SavoryOps_Server in Node.js/Express with 4-tier MongoDB isolation, AWS Route 53/S3/SNS/Lambda, FCM/Expo Push & Meta WhatsApp Cloud API).'
  },
  {
    question: 'Can I rebrand the software 100% with zero attribution to SavoryOps?',
    answer:
      'Yes, absolutely. The white-label commercial license grants you full legal rights to remove all logos, watermarks, brand names, and copyright notices. You can replace them with your own corporate brand name, logos, custom hex color palette, custom domain names (e.g. pos.yourbrand.com), and custom AWS Route 53/SES email & subdomain rules. There will be zero trace of SavoryOps anywhere in the customer-facing or merchant-facing interfaces.'
  },
  {
    question: 'Are there any recurring royalties or per-transaction fees?',
    answer:
      'None whatsoever. You pay a one-time perpetual white-label license investment. We charge $0 monthly developer royalties and $0 per-order or per-transaction fees. 100% of the subscription fees and processing revenue you charge your restaurant clients goes directly into your corporate bank accounts.'
  },
  {
    question: 'Can I publish the mobile apps on my own Google Play & Apple App Store accounts?',
    answer:
      'Yes. Because we provide uncompiled React Native + Expo source code for both SavoryOps_UserApp and SavoryOpsEmployeeeApp, you can build and publish both apps under your own Apple Developer and Google Play Console accounts with custom package IDs, icons, splash screens, and Firebase/Expo push credentials.'
  },
  {
    question: 'How does thermal receipt, kitchen KOT printing & Customer Display (CFD) sync work?',
    answer:
      'SavoryOps Owner Web and Public KDS/POS portals include a Web Bluetooth thermal printing engine (bluetoothPrinter.js) supporting standard 58mm/80mm ESC/POS printers (Epson, Star, TVS, Xprinter) as well as mini Cat thermal printers (0x5178 raster protocol), paired with a per-branch Custom Print Designer for price-free KOTs and branded receipts. For dual-screen counters, the Public Customer Facing Display (/Public/CustomerDisplay) syncs in 0ms locally via the BroadcastChannel API with automatic backend HTTP sync fallback.'
  },
  {
    question: 'How do the automated Recipe BOM inventory, Finance & Fixed Assets modules work?',
    answer:
      'Whenever an order is placed via Web POS, Customer Website, Customer App, or Waiter App, inventory-deduction-helper.js automatically deducts exact raw ingredient quantities (including add-on recipes and UOM conversions) from branch stock and records entries in the Stock Ledger while firing low-stock alerts. Owners also get Purchase Orders, inter-branch Stock Transfers, Wastage Adjustments, an Income/Expense Finance Ledger with AP Aging & P&L, Fixed Asset valuation/maintenance/transfers, and 34 built-in reports.'
  },
  {
    question: 'How does multi-tenant database isolation & AWS Route 53 automation work?',
    answer:
      'SavoryOps_Server separates data across 4 database tiers: Admin DB (mainDB), Employee DB (employeeDB), Customer DB (customerDB), and dynamic per-tenant MongoDB databases managed by dbManager.js. Built-in AWS Route 53 helpers (route53TenantDns.js & route53WebsiteDns.js) automatically upsert CNAME records for new tenant portals and dedicated restaurant websites, while AWS S3 handles media, AWS SNS sends SMS OTPs, and AWS Lambda + SESv2 delivers transactional emails.'
  },
  {
    question: 'What languages and staff roles are supported out of the box?',
    answer:
      'All 6 UI applications ship with 18 built-in languages—including automatic Right-to-Left (RTL) layout rendering for Arabic and Farsi—plus English, Spanish, French, German, Italian, Portuguese, Portuguese (Brazil), Dutch, Greek, Polish, Romanian, Russian, Turkish, Estonian, and Chinese (Simplified & Traditional). On the staff side, the Employee App adapts across 6 distinct roles (Waiter, Cashier with full Shift/Z-Report controls, Head Chef, Chef, Host, Delivery Driver) alongside granular Manager RBAC in the Owner Portal.'
  },
  {
    question: 'What are the recommended server requirements for hosting?',
    answer:
      'Because of our lightweight Node.js Express and MongoDB architecture, a starter deployment runs comfortably on a Cloud VPS (2–4 vCPUs, 4–8 GB RAM) with PM2 or AWS Elastic Beanstalk (configurations included in .ebextensions and .platform). For high-scale deployments, scale horizontally with PM2 cluster mode, CloudFront + S3 static hosting for the Vite frontends, and MongoDB Atlas.'
  },
  {
    question: 'Do you provide cloud deployment, ongoing support & custom code development?',
    answer:
      'Yes! Under our "Source Code + Turnkey Cloud Setup" plan, our engineers deploy all backend and frontend platforms directly on your cloud (AWS, GCP, DigitalOcean, or VPS), configure Route 53/DNS, SSL, Razorpay/Stripe/PayPal gateways, Meta WhatsApp Cloud API, and Firebase/Expo push, plus deliver 30 days of DevOps support. We are also available for bespoke code customization—regional fiscalization (ZATCA, DIAN, GST), custom payment gateways, hardware drivers, or specialized workflows.'
  },
  {
    question: 'How do the Push notifications and Meta WhatsApp notifications work?',
    answer:
      'SavoryOps_Server integrates Meta WhatsApp Cloud API v21.0 (whatsappNotificationService.js) for automated customer order completed/delivered/cancelled alerts with digital receipt links and owner subscription notifications, alongside 30+ Firebase Admin FCM & Expo Push triggers (fcmNotificationService.js) routing real-time alerts to Customers, Waiters (table call alerts), Chefs/Head Chefs, Cashiers, Hosts, Delivery Drivers, Owners, and Super Admins.'
  }
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="section-faq">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header-center">
          <span className="badge-green">Frequently Asked Questions</span>
          <h2 className="section-title">
            Everything You Need to Know About <span className="glow-gradient-text">Our White-Label License</span>
          </h2>
          <p className="section-description">
            Clear, technical answers regarding all 7 source code repositories, commercial resale rights,
            mobile app compilation, AWS infrastructure, and bespoke customization.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="faq-list">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className={`faq-card glass-panel ${isOpen ? 'faq-card-open' : ''}`}>
                <button
                  onClick={() => toggle(idx)}
                  className="faq-question-btn"
                  aria-expanded={isOpen}
                >
                  <span className="faq-q-text">{faq.question}</span>
                  <span className="faq-toggle-icon">{isOpen ? '−' : '+'}</span>
                </button>
                {isOpen && (
                  <div className="faq-answer-content">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Support Callout */}
        <div className="faq-footer-callout">
          <span>Want to inspect every module, report &amp; API endpoint?</span>
          <Link to="/platforms" className="faq-ask-link" style={{ marginRight: '16px' }}>
            Browse 7-Platform Explorer &rarr;
          </Link>
          <a
            href="https://wa.me/917621908664?text=Hi%2C%20I%20have%20a%20specific%20question%20regarding%20the%20SavoryOps%20White%20Label%20source%20code"
            target="_blank"
            rel="noopener noreferrer"
            className="faq-ask-link"
          >
            Ask Us on WhatsApp (+91 7621908664) &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};

export default Faq;
