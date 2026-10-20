import { useState } from 'react';
import { WhatsAppIcon, MailIcon } from './Icons';

const InquiryForm = ({ selectedTier }) => {
  const [prevTier, setPrevTier] = useState(selectedTier);
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    licenseModel: selectedTier || 'Source Code + Turnkey Cloud Setup',
    timeline: 'Within 7 Days',
    message: ''
  });

  if (selectedTier && selectedTier !== prevTier) {
    setPrevTier(selectedTier);
    setForm((prev) => ({ ...prev, licenseModel: selectedTier }));
  }

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');

    try {
      const backendUrl = import.meta.env.VITE_BACKEND_URL;
      const response = await fetch(`${backendUrl}/Support/AddWhiteLabel`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: form.fullName,
          company: form.company,
          email: form.email,
          phone: form.phone,
          licenseModel: form.licenseModel,
          timeline: form.timeline,
          message: form.message
        }),
      });

      const data = await response.json();

      if (response.ok && data.success !== false) {
        setSubmitted(true);
      } else {
        setErrorMessage(data.message || 'Unable to submit your inquiry at this moment. Please try again.');
      }
    } catch (err) {
      console.error('Error submitting white label inquiry:', err);
      setErrorMessage('Network connection error. Please try again or reach out directly on WhatsApp.');
    } finally {
      setLoading(false);
    }
  };

  const openWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello SavoryOps Team! I want to inquire about the White-Label License:\n\n` +
      `• Name: ${form.fullName || 'Prospective Buyer'}\n` +
      `• Company: ${form.company || 'Agency/Business'}\n` +
      `• Email: ${form.email || 'N/A'}\n` +
      `• License Plan: ${form.licenseModel}\n` +
      `• Timeline: ${form.timeline}\n` +
      `• Details: ${form.message || 'Looking for demo & source code delivery'}`
    );
    window.open(`https://wa.me/917621908664?text=${text}`, '_blank');
  };

  return (
    <section id="inquiry" className="section-inquiry">
      <div className="section-container">
        <div className="inquiry-grid">
          {/* Left Info Column */}
          <div className="inquiry-info-col">
            <span className="badge-green">Fast-Track Onboarding</span>
            <h2 className="inquiry-title">
              Request White-Label License &amp; <span className="glow-gradient-text">Live Architecture Walkthrough</span>
            </h2>
            <p className="inquiry-description">
              Speak directly with our solutions architects. We will demonstrate the complete codebase, review your target 
              cloud infrastructure, and provide an uncompiled code walkthrough.
            </p>

            <div className="inquiry-highlights">
              <div className="inquiry-hl-item">
                <span className="hl-icon">⚡</span>
                <div>
                  <strong>Turnkey Setup Within 48 Hours</strong>
                  <p>Our team configures DNS, database, payment gateways, and compiles your mobile apps.</p>
                </div>
              </div>

              <div className="inquiry-hl-item">
                <span className="hl-icon">🔒</span>
                <div>
                  <strong>Direct Engineering Support</strong>
                  <p>30 days of direct DevOps support via Slack, WhatsApp, and Google Meet.</p>
                </div>
              </div>

              <div className="inquiry-hl-item">
                <span className="hl-icon">📁</span>
                <div>
                  <strong>Complete IP Ownership</strong>
                  <p>Perpetual commercial rights with zero royalties or hidden subscriptions.</p>
                </div>
              </div>

              <div className="inquiry-hl-item">
                <span className="hl-icon">🛠️</span>
                <div>
                  <strong>Available for Custom Code Development</strong>
                  <p>Need custom integrations, regional tax compliance, or unique features? We customize the code according to your exact requirements.</p>
                </div>
              </div>
            </div>

            <div className="direct-contact-card glass-panel">
              <span className="direct-label">NEED IMMEDIATE ASSISTANCE?</span>
              <div className="direct-links">
                <a
                  href="https://wa.me/917621908664?text=Hi%20SavoryOps%20team%2C%20I%20am%20ready%20to%20discuss%20the%20White%20Label%20License"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="direct-link-wa"
                >
                  <span className="wa-icon">
                    <WhatsAppIcon size={18} />
                  </span>
                  <div>
                    <span className="wa-title">Direct WhatsApp Chat</span>
                    <span className="wa-val">+91 7621908664 (Instant Reply)</span>
                  </div>
                </a>

                <a href="mailto:info@savoryops.com" className="direct-link-mail">
                  <span className="mail-icon">
                    <MailIcon size={18} />
                  </span>
                  <div>
                    <span className="mail-title">Official Commercial Desk</span>
                    <span className="mail-val">info@savoryops.com</span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="inquiry-form-col">
            <div className="inquiry-form-card glass-panel">
              <h3 className="form-card-title">Commercial License Inquiry</h3>
              <p className="form-card-sub">Submit your requirements to receive the licensing agreement &amp; live demo access.</p>

              {submitted ? (
                <div className="submit-success-box">
                  <div className="success-icon">✓</div>
                  <h4>Inquiry Successfully Received!</h4>
                  <p>Our senior technical director will review your submission and connect within 2 hours.</p>
                  <button onClick={openWhatsApp} className="btn-success-whatsapp">
                    <span>Open WhatsApp Chat Now</span>
                    <span className="wa-arrow">&rarr;</span>
                  </button>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-reset-form"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="license-inquiry-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="fullName">Full Name *</label>
                      <input
                        id="fullName"
                        type="text"
                        name="fullName"
                        required
                        value={form.fullName}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="form-input"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="company">Agency / Company Name</label>
                      <input
                        id="company"
                        type="text"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Apex Media LLC"
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email">Business Email *</label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john@agency.com"
                        className="form-input"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Phone / WhatsApp Number *</label>
                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="licenseModel">Desired License Model</label>
                      <select
                        id="licenseModel"
                        name="licenseModel"
                        value={form.licenseModel}
                        onChange={handleChange}
                        className="form-select"
                      >
                        <option value="Source Code + Turnkey Cloud Setup">Source Code + Turnkey Cloud Setup (Recommended)</option>
                        <option value="Full Source Code License (Self-Managed)">Full Source Code License (Self-Managed)</option>
                        <option value="Bespoke Feature Customization">Bespoke Code Customization (According to Your Requirements)</option>
                        <option value="Multi-Country Agency Franchise">Multi-Country Agency Franchise License</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="timeline">Deployment Timeline</label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={form.timeline}
                        onChange={handleChange}
                        className="form-select"
                      >
                        <option value="Within 7 Days">Ready to Launch (&lt; 7 Days)</option>
                        <option value="Within 30 Days">Within 30 Days</option>
                        <option value="1 to 3 Months">1 to 3 Months</option>
                        <option value="Just Evaluating">Exploring Options / Evaluation</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Custom Requirements or Questions</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="3"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your target market, number of restaurants, specific payment gateways, or custom integrations needed..."
                      className="form-textarea"
                    ></textarea>
                  </div>

                  {errorMessage && (
                    <div style={{
                      padding: '10px 14px',
                      backgroundColor: 'rgba(239, 68, 68, 0.15)',
                      border: '1px solid rgba(239, 68, 68, 0.4)',
                      borderRadius: '8px',
                      color: '#fca5a5',
                      fontSize: '0.88rem',
                      marginTop: '4px'
                    }}>
                      {errorMessage}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-submit-inquiry"
                  >
                    {loading ? 'Processing Submission...' : 'Submit Commercial Inquiry & Get Instant Access'}
                  </button>
                  <p className="form-disclaimer">
                    🔒 We respect your privacy. Zero spam. We guarantee an NDA upon request.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InquiryForm;
