import { useState } from 'react';

const faqs = [
  {
    question: 'What codebases and repositories are included in the White-Label License?',
    answer:
      'You receive 100% full unencrypted source code for all 5 core platforms: 1) Super Admin Panel (SuperAdmin Multi-Tenant SaaS Portal in React/Vite); 2) Owner & Manager Panel (Merchant Web POS, Live 2D Floor Plan, Recipe BOM & Reporting in React/Vite); 3) Public Kitchen Display System (Real-Time Kitchen KDS & Station Routing); 4) Employee Crew App (Cross-Platform React Native mobile app for Waiter, Cashier, Chef & Driver); 5) Customer User App (Table QR Scan-to-Order & Online Storefront); and 6) High-Performance Core Server (Node.js/Express REST API with Socket.io real-time broker, ESC/POS hardware print engine, and MongoDB schemas).'
  },
  {
    question: 'Can I rebrand the software 100% with zero attribution to SavoryOps?',
    answer:
      'Yes, absolutely. The white-label commercial license grants you full legal rights to remove all logos, watermarks, brand names, and copyright notices. You can replace them with your own corporate brand name, logos, custom hex color palette, custom domain names (e.g. pos.yourbrand.com), and custom SMTP transactional email addresses. There will be zero trace of SavoryOps anywhere in the customer-facing or merchant-facing interfaces.'
  },
  {
    question: 'Are there any recurring royalties or per-transaction fees?',
    answer:
      'None whatsoever. You pay a one-time perpetual white-label license investment. We charge $0 monthly developer royalties and $0 per-order or per-transaction fees. 100% of the subscription fees and processing revenue you charge your restaurant clients goes directly into your corporate bank accounts.'
  },
  {
    question: 'Can I publish the mobile apps on my own Google Play & Apple App Store accounts?',
    answer:
      'Yes. Because we provide uncompiled React Native source code, you can build and publish the apps under your own Apple Developer and Google Play Console accounts. You can customize the package bundle IDs (e.g. com.yourbrand.waiter), app launcher icons, store graphics, splash screens, and descriptions.'
  },
  {
    question: 'How does thermal receipt and kitchen KOT printing work?',
    answer:
      'SavoryOps includes an enterprise ESC/POS thermal printing engine that communicates directly via Web Bluetooth, raw TCP/IP network sockets, and USB. Unlike competitor systems that force users to pop open browser print preview dialogs or run a dedicated 24/7 desktop PC, SavoryOps allows iPads, Android tablets, and phones to print directly and silently to 58mm and 80mm thermal receipt printers with automatic hardware paper cutting and station-specific routing (e.g., Bar drinks route to Bar printer, Steaks route to Grill printer).'
  },
  {
    question: 'How does the automated Recipe BOM ingredient deduction work?',
    answer:
      'While competitors only count finished menu items, SavoryOps features an automated Bill of Materials (BOM) engine. When an order is placed for a pizza, burger, or cocktail, our inventory-deduction-helper.js automatically calculates and subtracts the exact raw ingredients (e.g., 180g flour, 60g mozzarella, 120g beef, 50ml sauce) from the stock ledger in real time, triggering low-stock threshold warnings automatically.'
  },
  {
    question: 'What are the recommended server requirements for hosting?',
    answer:
      'Because of our lightweight Node.js Express and MongoDB architecture, a starter deployment can run comfortably on a $20–$40/month Cloud VPS (2–4 vCPUs, 4–8 GB RAM) on DigitalOcean, Hetzner, AWS, or GCP. For high-scale operations handling hundreds of restaurants and thousands of concurrent tables, you can easily scale horizontally with Docker containers, PM2 cluster mode, and MongoDB Atlas.'
  },
  {
    question: 'Do you provide cloud deployment and ongoing technical support?',
    answer:
      'Yes! Under our "Source Code + Turnkey Cloud Setup" plan, our senior DevOps engineers set up and configure everything directly on your cloud infrastructure (AWS, GCP, DigitalOcean, or VPS). We configure DNS, SSL certificates, payment gateways, SMTP email, and database backups, and provide 30 days of direct DevOps support and an architect-level code walkthrough.'
  },
  {
    question: 'Are you available to customize the code according to our specific requirements?',
    answer:
      'Yes, absolutely! While SavoryOps comes complete with 5 turnkey applications out-of-the-box, our senior engineering team is readily available for custom code development and bespoke feature engineering. Whether you need local payment gateway integrations, government fiscal tax compliance (ZATCA, DIAN, GST, KRA), custom hardware drivers (weighing scales, dual-screen pole displays, specialized printers), third-party ERP connectors (SAP, NetSuite, QuickBooks), or unique business workflows, we scope, build, test, and deliver the customized code directly into your private repository.'
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
            Clear, transparent answers regarding source code delivery, commercial resale rights, 
            mobile app compilation, and server infrastructure.
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
          <span>Have a question not answered here?</span>
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
