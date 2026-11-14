import { useState } from 'react';
import { WhatsAppIcon } from './Icons';

// Read demo restaurant website URL from .env (VITE_DEMO_USER_WEBSITE_URL)
const DEMO_USER_WEBSITE_URL =
  import.meta.env.VITE_DEMO_USER_WEBSITE_URL || 'https://harbourblue.savoryops.com/';

const DedicatedWebsiteAndNotifications = () => {
  const [activeChatTab, setActiveChatTab] = useState('order'); // 'order' | 'table' | 'owner'

  const scrollToInquiry = () => {
    const el = document.getElementById('inquiry');
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section id="website-notifications" className="section-website-notifications">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header-center">
          <span className="badge-green">TURNKEY DIGITAL ASSETS &amp; REAL-TIME ALERTS</span>
          <h2 className="section-title">
            Dedicated Restaurant Website &amp; <span className="glow-gradient-text">Automated WhatsApp Suite</span>
          </h2>
          <p className="section-description">
            Equip every restaurant client with an elegant, dedicated public website on their own custom domain 
            paired with an automated multi-channel notification engine delivering instant push alerts, audible kitchen chimes, 
            and interactive WhatsApp order updates.
          </p>
        </div>

        {/* 2-Column Showcase Grid */}
        <div className="web-notify-grid">
          {/* Pillar 1: Dedicated Restaurant Website */}
          <div className="web-notify-card glass-panel-interactive">
            <div className="card-top-pill">
              <span className="pill-icon">🌐</span>
              <span className="pill-text">BRANDED DIGITAL STOREFRONT</span>
            </div>

            <h3 className="card-heading">Dedicated Restaurant Website for Every Venue</h3>
            <p className="card-subheading">
              A high-converting, mobile-responsive brand showcase on a custom domain with zero aggregator commission cuts.
            </p>

            {/* Simulated Website Browser Frame */}
            <div className="browser-mock-frame">
              <div className="browser-header">
                <div className="browser-dots">
                  <span className="dot dot-red"></span>
                  <span className="dot dot-yellow"></span>
                  <span className="dot dot-green"></span>
                </div>
                <a
                  href={DEMO_USER_WEBSITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="browser-url-bar browser-url-bar-clickable"
                  title="Click to launch live demo restaurant website"
                >
                  <span className="lock-icon">🔒</span>
                  <span className="url-text">{DEMO_USER_WEBSITE_URL}</span>
                  <span className="ssl-badge">Auto SSL</span>
                  <span className="url-ext-arrow">↗</span>
                </a>
              </div>

              <div className="browser-body-preview">
                <div className="web-preview-nav">
                  <strong className="preview-brand">Harbour Blue Restaurant</strong>
                  <div className="preview-nav-links">
                    <span>Menu</span>
                    <span>Reservations</span>
                    <a
                      href={DEMO_USER_WEBSITE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="preview-order-btn"
                    >
                      Order Online ↗
                    </a>
                  </div>
                </div>

                <div className="web-preview-hero">
                  <div className="preview-hero-content">
                    <span className="preview-tag">Fine Dining &amp; Artisanal Cuisine</span>
                    <h4>Reserve Your Table or Order Direct</h4>
                    <p>Experience chef-curated dining with 1-click table reservations &amp; zero-commission delivery.</p>
                    <div className="preview-hero-actions">
                      <a
                        href={DEMO_USER_WEBSITE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mini-btn-primary"
                      >
                        Launch Live Demo ↗
                      </a>
                      <a
                        href={DEMO_USER_WEBSITE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mini-btn-secondary"
                      >
                        View Menu
                      </a>
                    </div>
                  </div>
                </div>

                <div className="web-preview-metrics">
                  <div className="mini-metric">
                    <strong>0% Cut</strong>
                    <span>Direct Ordering</span>
                  </div>
                  <div className="mini-metric">
                    <strong>100% Data</strong>
                    <span>Customer Ownership</span>
                  </div>
                  <div className="mini-metric">
                    <strong>Instant</strong>
                    <span>Table Confirmations</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Live Demo Launch Action Box */}
            <div className="web-demo-action-strip">
              <a
                href={DEMO_USER_WEBSITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-launch-website-demo"
              >
                <span>🚀 Launch Live Demo Restaurant Website</span>
                <span className="arrow-icon">&rarr;</span>
              </a>
              <span className="web-demo-hint">
                Harbour Blue • Instant Live Storefront
              </span>
            </div>

            {/* Feature Bullets */}
            <div className="web-features-list">
              <div className="web-feature-item">
                <span className="check-icon-gold">✓</span>
                <div>
                  <strong>Dedicated Custom Domain &amp; Subdomains:</strong>
                  <p>Host under <code>yourbrand.com</code> or generate client subdomains (e.g., <code>bistro.yourplatform.com</code>) with free automated SSL.</p>
                </div>
              </div>

              <div className="web-feature-item">
                <span className="check-icon-gold">✓</span>
                <div>
                  <strong>Direct Online Table Reservations:</strong>
                  <p>Guests select party size, calendar date, time slot, and seating area; automatically locks tables on the POS floor plan.</p>
                </div>
              </div>

              <div className="web-feature-item">
                <span className="check-icon-gold">✓</span>
                <div>
                  <strong>0% Commission Food Ordering Storefront:</strong>
                  <p>Save restaurants 25%–30% in delivery aggregator cuts with direct takeaway and pickup ordering.</p>
                </div>
              </div>

              <div className="web-feature-item">
                <span className="check-icon-gold">✓</span>
                <div>
                  <strong>Interactive Digital Menu &amp; Multi-Branch Locator:</strong>
                  <p>Dietary filters (Vegan, Halal, Gluten-Free), high-res food photos, branch locations, operating hours &amp; Google Maps.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Pillar 2: Automated WhatsApp & Push Notifications */}
          <div className="web-notify-card glass-panel-interactive">
            <div className="card-top-pill">
              <span className="pill-icon">💬</span>
              <span className="pill-text">AUTOMATED NOTIFICATIONS</span>
            </div>

            <h3 className="card-heading">Automated WhatsApp &amp; Real-Time Push Alerts</h3>
            <p className="card-subheading">
              Keep customers delighted and staff synchronized with instant push alerts, loud kitchen chimes, and automated WhatsApp receipts.
            </p>

            {/* Chat View Selector Tabs */}
            <div className="chat-tabs-row">
              <button
                onClick={() => setActiveChatTab('order')}
                className={`chat-tab-btn ${activeChatTab === 'order' ? 'active' : ''}`}
              >
                <span>🛒 Order Lifecycle</span>
              </button>
              <button
                onClick={() => setActiveChatTab('table')}
                className={`chat-tab-btn ${activeChatTab === 'table' ? 'active' : ''}`}
              >
                <span>📅 Table Booking</span>
              </button>
              <button
                onClick={() => setActiveChatTab('owner')}
                className={`chat-tab-btn ${activeChatTab === 'owner' ? 'active' : ''}`}
              >
                <span>📊 Owner Daily Report</span>
              </button>
            </div>

            {/* Simulated WhatsApp Phone Frame */}
            <div className="whatsapp-phone-frame">
              <div className="whatsapp-header">
                <div className="wa-avatar">
                  <span className="wa-avatar-icon">🍽️</span>
                  <span className="wa-status-dot"></span>
                </div>
                <div className="wa-header-info">
                  <div className="wa-name-row">
                    <strong>Harbour Blue Restaurant</strong>
                    <span className="wa-verified-badge">✓</span>
                  </div>
                  <span className="wa-status-text">SavoryOps Automated Desk • Online</span>
                </div>
                <div className="wa-header-icons">
                  <span className="wa-pill-tag">WhatsApp Cloud API</span>
                </div>
              </div>

              <div className="whatsapp-chat-body">
                {activeChatTab === 'order' && (
                  <>
                    <div className="chat-date-pill">TODAY</div>

                    {/* Message 1: Order Confirmed */}
                    <div className="wa-bubble wa-bubble-bot">
                      <p className="wa-bubble-title">🎉 <strong>Order #SAV-4921 Confirmed!</strong></p>
                      <p>Hi <strong>Alex</strong>, your order for <strong>2 items ($30.50)</strong> is confirmed at <strong>Harbour Blue</strong>.</p>
                      <a href="#inquiry" onClick={(e) => { e.preventDefault(); scrollToInquiry(); }} className="wa-bubble-link">
                        📄 Digital Receipt &rarr;
                      </a>
                      <span className="wa-time">19:42 ✓✓</span>
                    </div>

                    {/* Message 2: Live Tracking */}
                    <div className="wa-bubble wa-bubble-bot">
                      <p className="wa-bubble-title">🛵 <strong>Out for Delivery!</strong></p>
                      <p>Driver Carlos is heading your way with your order.</p>
                      <span className="wa-tracking-pill">📍 Live GPS Active</span>
                      <span className="wa-time">20:05 ✓✓</span>
                    </div>
                  </>
                )}

                {activeChatTab === 'table' && (
                  <>
                    <div className="chat-date-pill">TODAY</div>

                    <div className="wa-bubble wa-bubble-bot">
                      <p className="wa-bubble-title">📅 <strong>Table Reserved!</strong></p>
                      <p>Hi <strong>Sarah</strong>, table for <strong>4 guests</strong> is reserved for tonight at <strong>8:00 PM</strong> (Booth #12).</p>
                      <span className="wa-time">14:15 ✓✓</span>
                    </div>

                    <div className="wa-bubble wa-bubble-bot">
                      <p className="wa-bubble-title">🔔 <strong>Reminder: Table in 1 Hour</strong></p>
                      <p>We look forward to welcoming you at <strong>Harbour Blue</strong>!</p>
                      <span className="wa-time">19:00 ✓✓</span>
                    </div>
                  </>
                )}

                {activeChatTab === 'owner' && (
                  <>
                    <div className="chat-date-pill">SHIFT CLOSE REPORT</div>

                    <div className="wa-bubble wa-bubble-bot">
                      <p className="wa-bubble-title">📊 <strong>Daily Sales: $4,280.50</strong></p>
                      <p>148 orders completed today. Cash: $1,140.50 | Card: $3,140.00.</p>
                      <p style={{ marginTop: '4px', fontSize: '0.8rem', color: '#86efac' }}>
                        ✓ Z-Report PDF attached.
                      </p>
                      <span className="wa-time">23:45 ✓✓</span>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Feature Bullets */}
            <div className="web-features-list">
              <div className="web-feature-item">
                <span className="check-icon-gold">✓</span>
                <div>
                  <strong>Automated WhatsApp Notifications:</strong>
                  <p>Send instant order confirmations, live preparation stages, driver GPS links &amp; digital invoices via Meta WhatsApp Cloud API.</p>
                </div>
              </div>

              <div className="web-feature-item">
                <span className="check-icon-gold">✓</span>
                <div>
                  <strong>Instant Push Alerts &amp; Kitchen Audio Chimes:</strong>
                  <p>Sub-second browser and mobile push alerts with loud, distinct audible chimes on POS &amp; KDS screens so no order is ever missed.</p>
                </div>
              </div>

              <div className="web-feature-item">
                <span className="check-icon-gold">✓</span>
                <div>
                  <strong>Table Reservation WhatsApp Confirmations:</strong>
                  <p>Automated booking confirmations, guest modification requests, and 1-hour pre-arrival reminders straight to guest WhatsApp.</p>
                </div>
              </div>

              <div className="web-feature-item">
                <span className="check-icon-gold">✓</span>
                <div>
                  <strong>Owner WhatsApp Nightly Z-Reports:</strong>
                  <p>Consolidated daily sales, revenue breakdown, cash reconciliation, and PDF ledger sent directly to the restaurant owner's phone.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Fast Action Banner */}
        <div className="notify-bottom-banner glass-panel">
          <div className="notify-banner-left">
            <span className="badge-gold">ALL-IN-ONE WHITE-LABEL PACKAGE</span>
            <h3>Ready to Offer Dedicated Websites &amp; Automated WhatsApp to Your Clients?</h3>
            <p>
              Acquire the complete unencrypted source code with turnkey setup. Host unlimited restaurant websites 
              and connect your preferred WhatsApp messaging gateway with 100% intellectual property ownership.
            </p>
          </div>
          <div className="notify-banner-right">
            <button onClick={scrollToInquiry} className="btn-notify-primary">
              <span>Acquire White-Label License &rarr;</span>
            </button>
            <a
              href="https://wa.me/917621908664?text=Hello%2C%20I%20am%20interested%20in%20the%20Dedicated%20Restaurant%20Website%20and%20WhatsApp%20Notification%20features%20in%20SavoryOps"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-notify-whatsapp"
            >
              <WhatsAppIcon size={18} />
              <span>Discuss on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DedicatedWebsiteAndNotifications;
