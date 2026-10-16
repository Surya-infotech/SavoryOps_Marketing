import React, { useState } from 'react';

const platforms = [
  {
    id: 'admin',
    name: 'SuperAdmin SaaS Portal',
    codebase: 'SavoryOps_AdminPanel',
    badge: 'Multi-Tenant Core',
    tagline: 'Your Central Command Center for Managing Tenant Subscriptions, MRR & Billing',
    image: '/images/posts/Post_01_Boost_Restaurant_Revenue.jpg',
    description:
      'The multi-tenant SuperAdmin gives you complete governance over your SaaS enterprise. Provision new restaurant tenants in seconds, configure monthly or annual subscription plans, track Monthly Recurring Revenue (MRR), manage custom domain DNS mappings, and configure international payment gateways.',
    features: [
      'Automated Multi-Tenant Provisioning & Database Isolation',
      'Flexible Subscription Tiers (Monthly, Annual & Custom Enterprise)',
      'Integrated Stripe, Razorpay & International Payment Gateways',
      'Custom Domain DNS Mapping for Each Restaurant Client',
      'Real-Time MRR, Churn & Active Subscriber Analytics Dashboard',
      'System-Wide Broadcast Alerts & Granular Role Permissions'
    ]
  },
  {
    id: 'owner',
    name: 'Restaurant Owner & Web POS',
    codebase: 'SavoryOps_OwnerWeb',
    badge: 'Merchant Operations',
    tagline: 'High-Throughput Point of Sale, 2D Floor Plan & Automated Inventory BOM',
    image: '/images/features/pos-system.jpg',
    description:
      'The all-in-one web portal for restaurant owners and branch managers. Features an ultra-responsive POS supporting Dine-In, Takeaway, Delivery, Pickup, and Quick Order. Includes an interactive 2D dining floor map, automated recipe Bill of Materials (BOM) inventory deductions, and 30+ financial Z-reports.',
    features: [
      'Multi-Mode POS: Dine-In, Takeaway, Delivery, Pickup & Counter QSR',
      'Live 2D Dining Floor Plan with Table Statuses & Running Timers',
      'Automated Recipe BOM: Deducts raw grams/ml of ingredients on order',
      'Universal ESC/POS Silent Thermal Printing (LAN, Bluetooth & USB)',
      '30+ Formatted Printable Reports with 1-Click PDF & Excel Exports',
      'Consolidated End-of-Day Z-Report and Day Close Reconciliation'
    ]
  },
  {
    id: 'kds',
    name: 'Interactive Kitchen Display (KDS)',
    codebase: 'PublicKotDisplay.jsx',
    badge: 'Kitchen Automation',
    tagline: 'Real-Time Floor Screen with Audio Chimes, Timers & Station-Wise Routing',
    image: '/images/features/kitchen-display-system.jpg',
    description:
      'Mountable touch screen display for the kitchen line. Eliminates lost paper slips with real-time WebSocket order firing, loud audio kitchen chimes, live urgency color timers, status progressions (Received &rarr; Cooking &rarr; Ready &rarr; Served), and intelligent multi-station routing (Grill, Bar, Pastry).',
    features: [
      'Sub-Second Real-Time WebSocket Order Firing with Audio Chimes',
      'Station-Wise KOT Routing (Hot Kitchen, Bar, Grill, Dessert Station)',
      'Color-Coded Urgency Timers (Normal &rarr; Warning &rarr; Critical Delayed)',
      'Price-Free Kitchen Tickets Stripping Financials for Staff Privacy',
      '1-Tap Order Status Transitions & Digital Bump Bar Integration',
      'Average Preparation Speed Analytics & Kitchen Throughput Metrics'
    ]
  },
  {
    id: 'employee',
    name: 'Staff & Waiter Mobile App',
    codebase: 'SavoryOpsEmployeeeApp',
    badge: 'Native Cross-Platform',
    tagline: 'Multi-Role React Native App for Waiters, Cashiers, Chefs & Delivery Drivers',
    image: '/images/features/waiter-mobile-pos.jpg',
    description:
      'A single, high-performance React Native mobile application supporting multiple staff roles on iOS and Android. Waiters punch tableside orders with nested modifiers; cashiers accept payments; kitchen staff bump orders; and delivery drivers track GPS routes with proof of delivery.',
    features: [
      'Tailored Operational Modes: Waiter, Cashier, Chef, Hostess & Driver',
      'Tableside Order Taking with Live Table Maps & Modifier Selection',
      'Silent ESC/POS Direct Socket & Bluetooth Printing from Tablets/Phones',
      'Delivery Driver Mode with GPS Map Directions & Delivery Confirmation',
      'Resilient Offline Mode with Automatic Server Sync on Reconnect',
      'Quick Cashier PIN Switching for Fast, Secure Terminal Handoffs'
    ]
  },
  {
    id: 'user',
    name: 'Customer Table QR & Storefront',
    codebase: 'SavoryOps_UserApp',
    badge: 'Customer Self-Order',
    tagline: 'Zero-Contact Per-Table QR Scan-to-Order & Direct Takeaway Storefront',
    image: '/images/features/qr-ordering.jpg',
    description:
      'Delight diners and slash front-of-house labor costs. Guests scan individual table QR codes to view appetizing digital menus, configure nested modifier choices (doneness, sides, toppings), add special chef notes, and fire orders straight to the kitchen without waiting for a waiter.',
    features: [
      'Per-Table Bound QR Codes (Directly Linked to Table # & Dining Area)',
      'Rich Visual Menu with Dietary Tags, Descriptions & High-Res Photos',
      'Nested Modifier Groups (e.g., Doneness, Choice of Sides, Extra Cheese)',
      'Dynamic Optional Gratuity / Tip Calculation with 1-Tap Opt-Out',
      'Direct Takeaway & Delivery Ordering with Zero 30% App Commissions',
      'Pre-Checkout Address Modal Capturing Tower, Floor & Apartment Details'
    ]
  },
  {
    id: 'server',
    name: 'Node.js REST API & Real-Time Engine',
    codebase: 'SavoryOps_Server',
    badge: 'Enterprise Backend',
    tagline: 'High-Concurrency Microservices, Universal ESC/POS Engine & Security',
    image: '/images/features/restaurant-operations.jpg',
    description:
      'The foundational backend powering thousands of concurrent transactions with sub-second response times. Built with clean Express.js and MongoDB Mongoose, it handles real-time Socket.io events, atomic inventory locks, universal hardware print queues, and strict branch-scoped RBAC security.',
    features: [
      'Modular RESTful Architecture with Fully Documented Controllers',
      'High-Concurrency Socket.io Event Broker for Zero-Latency Updates',
      'Universal ESC/POS Thermal Printing Engine (58mm & 80mm Hardware Auto-Cut)',
      'Automated Recipe BOM Inventory Deduction & Low-Stock Alerts',
      'Granular JWT Authentication & Role-Based Access Control (RBAC)',
      '100% DRM-Free, Self-Hosted Code with Zero Vendor Lock-In'
    ]
  }
];

const PlatformEcosystem = () => {
  const [activeTab, setActiveTab] = useState('admin');
  const activePlatform = platforms.find((p) => p.id === activeTab) || platforms[0];

  return (
    <section id="ecosystem" className="section-ecosystem">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header-center">
          <span className="badge-green">The 5-Platform Architecture</span>
          <h2 className="section-title">
            One Complete Codebase. <span className="glow-gradient-text">Five Turnkey Platforms.</span>
          </h2>
          <p className="section-description">
            Everything your clients need to operate a single café or a 500-location franchise. 
            All five unencrypted codebases are delivered with your white-label license.
          </p>
        </div>

        {/* Platform Navigation Tabs */}
        <div className="platform-tabs">
          {platforms.map((plat) => (
            <button
              key={plat.id}
              onClick={() => setActiveTab(plat.id)}
              className={`platform-tab-btn ${activeTab === plat.id ? 'active' : ''}`}
            >
              <span className="tab-pill">{plat.badge}</span>
              <span className="tab-title">{plat.name}</span>
              <code className="tab-code">{plat.codebase}</code>
            </button>
          ))}
        </div>

        {/* Active Platform Showcase Card */}
        <div className="platform-showcase-card glass-panel">
          <div className="showcase-content">
            <div className="showcase-header">
              <span className="badge-green">{activePlatform.badge}</span>
              <code className="code-tag">{activePlatform.codebase}</code>
            </div>
            <h3 className="showcase-title">{activePlatform.name}</h3>
            <p className="showcase-tagline">{activePlatform.tagline}</p>
            <p className="showcase-desc">{activePlatform.description}</p>

            <div className="showcase-features-grid">
              {activePlatform.features.map((feat, idx) => (
                <div key={idx} className="feature-item">
                  <span className="check-icon">✓</span>
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <div className="showcase-action-row">
              <a href="#licensing" className="btn-showcase-cta">
                Acquire {activePlatform.name} Codebase &rarr;
              </a>
              <span className="source-code-tag">100% Unencrypted Source Code Included</span>
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
                <span>Production-Tested in Real Venues</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformEcosystem;
