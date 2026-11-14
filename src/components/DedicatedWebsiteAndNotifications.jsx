import { useState } from 'react';
import { WhatsAppIcon } from './Icons';

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
                <div className="browser-url-bar">
                  <span className="lock-icon">🔒</span>
                  <span className="url-text">https://www.thebistroguild.com</span>
                  <span className="ssl-badge">Auto SSL</span>
                </div>
              </div>

              <div className="browser-body-preview">
                <div className="web-preview-nav">
                  <strong className="preview-brand">The Bistro Guild</strong>
                  <div className="preview-nav-links">
                    <span>Menu</span>
                    <span>Reservations</span>
                    <span className="preview-order-btn">Order Online</span>
                  </div>
                </div>

                <div className="web-preview-hero">
                  <div className="preview-hero-content">
                    <span className="preview-tag">Wood-Fired &amp; Artisanal</span>
                    <h4>Reserve Your Table or Order Direct</h4>
                    <p>Experience chef-curated dining with 1-click table reservations &amp; takeaway.</p>
                    <div className="preview-hero-actions">
                      <span className="mini-btn-primary">Book Table</span>
                      <span className="mini-btn-secondary">View Menu</span>
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
                    <strong>The Bistro Guild</strong>
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
                      <p className="wa-bubble-title">🎉 <strong>Order Received &amp; Confirmed!</strong></p>
                      <p>Hello <strong>Alex</strong>, thank you for ordering with <strong>The Bistro Guild</strong>!</p>
                      <div className="wa-bill-box">
                        <div className="wa-bill-line">
                          <span>1x Truffle Wild Mushroom Pizza</span>
                          <span>$18.50</span>
                        </div>
                        <div className="wa-bill-line">
                          <span>1x Artisanal Burrata Salad</span>
                          <span>$12.00</span>
                        </div>
                        <div className="wa-bill-total">
                          <strong>Total Paid (Card):</strong>
                          <strong>$30.50</strong>
                        </div>
                      </div>
                      <a href="#inquiry" onClick={(e) => { e.preventDefault(); scrollToInquiry(); }} className="wa-bubble-link">
                        📄 View Itemized Digital Receipt &rarr;
                      </a>
                      <span className="wa-time">19:42 ✓✓</span>
                    </div>

                    {/* Message 2: Kitchen Progress */}
                    <div className="wa-bubble wa-bubble-bot">
                      <p className="wa-bubble-title">👨‍🍳 <strong>Kitchen Update: Food is Cooking!</strong></p>
                      <p>Chef Marco has fired ticket <strong>#SAV-4921</strong>. Your dishes are being freshly prepared.</p>
                      <span className="wa-progress-badge">Estimated Time: 14 Mins</span>
                      <span className="wa-time">19:46 ✓✓</span>
                    </div>

                    {/* Message 3: Out for Delivery */}
                    <div className="wa-bubble wa-bubble-bot">
                      <p className="wa-bubble-title">🛵 <strong>Out for Delivery!</strong></p>
                      <p>Driver Carlos has picked up your order and is heading your way.</p>
                      <span className="wa-tracking-pill">📍 Live GPS Driver Tracking Active</span>
                      <span className="wa-time">20:05 ✓✓</span>
                    </div>
                  </>
                )}

                {activeChatTab === 'table' && (
                  <>
                    <div className="chat-date-pill">TODAY</div>

                    <div className="wa-bubble wa-bubble-bot">
                      <p className="wa-bubble-title">📅 <strong>Table Reservation Confirmed!</strong></p>
                      <p>Hello <strong>Sarah Jenkins</strong>, your table reservation is locked in!</p>
                      <div className="wa-bill-box">
                        <div className="wa-bill-line">
                          <span><strong>Date:</strong> Tonight, Nov 14</span>
                          <span>8:00 PM</span>
                        </div>
                        <div className="wa-bill-line">
                          <span><strong>Guests:</strong> 4 Diners</span>
                          <span>Window Booth #12</span>
                        </div>
                        <div className="wa-bill-line">
                          <span><strong>Special Note:</strong> Birthday Celebration</span>
                        </div>
                      </div>
                      <p style={{ marginTop: '8px', fontSize: '0.85rem' }}>
                        Need to modify or add guests? Reply to this chat anytime!
                      </p>
                      <span className="wa-time">14:15 ✓✓</span>
                    </div>

                    <div className="wa-bubble wa-bubble-bot">
                      <p className="wa-bubble-title">🔔 <strong>Reminder: Your Table is in 1 Hour</strong></p>
                      <p>We are ready to welcome you at <strong>The Bistro Guild - Main Dining Room</strong>. See you soon!</p>
                      <span className="wa-time">19:00 ✓✓</span>
                    </div>
                  </>
                )}

                {activeChatTab === 'owner' && (
                  <>
                    <div className="chat-date-pill">SHIFT CLOSE REPORT</div>

                    <div className="wa-bubble wa-bubble-bot">
                      <p className="wa-bubble-title">📊 <strong>Nightly Sales &amp; Z-Report Summary</strong></p>
                      <p>Good evening Owner! Here is today's consolidated branch performance summary:</p>
                      <div className="wa-bill-box">
                        <div className="wa-bill-line">
                          <span>Gross Total Sales:</span>
                          <strong>$4,280.50</strong>
                        </div>
                        <div className="wa-bill-line">
                          <span>Total Completed Orders:</span>
                          <strong>148 Orders</strong>
                        </div>
                        <div className="wa-bill-line">
                          <span>Card / Online Tenders:</span>
                          <span>$3,140.00</span>
                        </div>
                        <div className="wa-bill-line">
                          <span>Cash in Drawer:</span>
                          <span>$1,140.50</span>
                        </div>
                        <div className="wa-bill-line">
                          <span>Average Table Turnaround:</span>
                          <span>38 mins</span>
                        </div>
                      </div>
                      <p style={{ marginTop: '8px', fontSize: '0.82rem', color: '#86efac' }}>
                        ✓ Immutable shift ledger closed. Printable PDF Z-Report attached.
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
                  <p>Send instant order confirmations, live preparation stages, driver GPS links &amp; digital invoices via WhatsApp Cloud API or Twilio.</p>
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
