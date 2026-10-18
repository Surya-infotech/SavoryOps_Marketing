import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEO/SEOHead';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phone: '',
    subject: 'White-Label License Inquiry',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const subjectOptions = [
    'White-Label License Inquiry',
    'Source Code & Architecture Audit',
    'Custom Feature Development',
    'Reseller & Agency Partnership',
    'Live Demo Request',
    'General Technical Inquiry'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (status) setStatus(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.fullname.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setFeedbackMessage('Please fill in all required fields (Name, Email, and Message).');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setStatus('error');
      setFeedbackMessage('Please provide a valid email address.');
      return;
    }

    setIsSubmitting(true);
    setStatus(null);
    setFeedbackMessage('');

    try {
      const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8084';
      const response = await fetch(`${backendUrl}/Support/AddContactUs`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          fullname: formData.fullname.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          subject: formData.subject,
          message: formData.message.trim()
        })
      });

      const data = await response.json();

      if (response.ok && data.success !== false) {
        setStatus('success');
        setFeedbackMessage(data.message || 'Thank you for reaching out! Your message has been sent successfully. Our team will contact you shortly.');
        setFormData({
          fullname: '',
          email: '',
          phone: '',
          subject: 'White-Label License Inquiry',
          message: ''
        });
      } else {
        setStatus('error');
        setFeedbackMessage(data.message || 'Failed to submit contact form. Please try again.');
      }
    } catch (err) {
      console.error('Contact form submission error:', err);
      setStatus('error');
      setFeedbackMessage('Unable to connect to the server. Please check your internet connection or reach out directly via WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="contact-page-wrapper">
      <SEOHead
        title="Contact Us | SavoryOps Restaurant Management SaaS & Source Code"
        description="Get in touch with the SavoryOps team. Reach out for White-Label SaaS licensing, full unencrypted source code acquisition, technical demonstrations, and custom feature engineering."
        primaryKeyword="Contact SavoryOps Restaurant POS"
        keywords={[
          'contact savoryops',
          'restaurant management software support',
          'white label restaurant pos inquiry',
          'pos source code consultation',
          'savoryops customer care'
        ]}
      />

      <div className="section-container">
        {/* Breadcrumb Navigation */}
        <nav className="contact-breadcrumb" aria-label="Breadcrumb">
          <Link to="/" className="breadcrumb-link">Home</Link>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">Contact Us</span>
        </nav>

        {/* Hero Header */}
        <div className="contact-header">
          <div className="contact-pill-badge">
            <span className="pill-dot"></span>
            <span>DIRECT COMMERCIAL &amp; TECHNICAL DESK</span>
          </div>
          <h1 className="contact-title">
            Let’s Build Your Restaurant <span className="gradient-text">SaaS Empire</span>
          </h1>
          <p className="contact-subtitle">
            Have questions regarding white-label licensing, complete unencrypted source code, 
            or bespoke enterprise integrations? Talk directly with our core engineering and solutions team.
          </p>
        </div>

        {/* Main Two-Column Grid */}
        <div className="contact-main-grid">
          {/* Left Column: Direct Contact Info & Value Props */}
          <div className="contact-info-col">
            <div className="contact-info-card direct-channels">
              <h3 className="info-card-title">Direct Communication Channels</h3>
              <p className="info-card-subtitle">
                We respond within 2 hours during active business hours.
              </p>

              <div className="channel-list">
                {/* WhatsApp */}
                <a
                  href="https://wa.me/917621908664?text=Hello%20SavoryOps%2C%20I%20would%20like%20to%20discuss%20the%20White-Label%20Restaurant%20System"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="channel-item whatsapp"
                >
                  <div className="channel-icon-box wa-box">💬</div>
                  <div className="channel-content">
                    <span className="channel-label">Instant WhatsApp Chat</span>
                    <strong className="channel-value">+91 7621908664</strong>
                    <span className="channel-hint">Instant response • Available 7 days a week</span>
                  </div>
                  <span className="channel-arrow">&rarr;</span>
                </a>

                {/* Email */}
                <a
                  href="mailto:info@savoryops.com"
                  className="channel-item email"
                >
                  <div className="channel-icon-box mail-box">✉️</div>
                  <div className="channel-content">
                    <span className="channel-label">Official Correspondence</span>
                    <strong className="channel-value">info@savoryops.com</strong>
                    <span className="channel-hint">Enterprise sales, licensing &amp; documentation</span>
                  </div>
                  <span className="channel-arrow">&rarr;</span>
                </a>

                {/* Office Location */}
                <div className="channel-item location">
                  <div className="channel-icon-box loc-box">📍</div>
                  <div className="channel-content">
                    <span className="channel-label">Global Headquarters</span>
                    <strong className="channel-value">Surat, Gujarat, India</strong>
                    <span className="channel-hint">Serving agencies &amp; restaurant groups worldwide</span>
                  </div>
                </div>
              </div>
            </div>

            {/* SLA & Assurance Card */}
            <div className="contact-info-card assurance-card">
              <h4 className="assurance-title">What Happens Next?</h4>
              <ul className="assurance-list">
                <li>
                  <span className="check-bullet">✓</span>
                  <div>
                    <strong>Fast Evaluation:</strong> We review your inquiry within 2 hours and verify your deployment requirements.
                  </div>
                </li>
                <li>
                  <span className="check-bullet">✓</span>
                  <div>
                    <strong>Live Architecture Tour:</strong> We provide a full screen-share walkthrough of the SuperAdmin, Merchant POS, Kitchen KDS, and mobile apps.
                  </div>
                </li>
                <li>
                  <span className="check-bullet">✓</span>
                  <div>
                    <strong>Zero Obligation:</strong> Transparent commercial licensing with full source code ownership rights and zero hidden fees.
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="contact-form-col">
            <div className="contact-form-card">
              <div className="form-card-header">
                <h2 className="form-title">Send Us a Direct Message</h2>
                <p className="form-subtitle">Fill in the form below and an engineer or account director will connect with you.</p>
              </div>

              {/* Status Alert Banner */}
              {status && (
                <div className={`contact-status-alert ${status}`} role="alert">
                  <span className="alert-icon">{status === 'success' ? '✓' : '⚠️'}</span>
                  <div className="alert-text">{feedbackMessage}</div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-actual-form" noValidate>
                {/* Full Name */}
                <div className="form-group">
                  <label htmlFor="fullname" className="form-label">
                    Full Name <span className="required-star">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullname"
                    name="fullname"
                    value={formData.fullname}
                    onChange={handleChange}
                    placeholder="e.g. Alex Morgan"
                    className="form-input"
                    disabled={isSubmitting}
                    required
                  />
                </div>

                {/* Email & Phone Grid */}
                <div className="form-row-2">
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Work Email <span className="required-star">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="alex@company.com"
                      className="form-input"
                      disabled={isSubmitting}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">
                      Phone / WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="form-input"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                {/* Inquiry Subject */}
                <div className="form-group">
                  <label htmlFor="subject" className="form-label">
                    Subject / Area of Interest
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-input form-select"
                    disabled={isSubmitting}
                  >
                    {subjectOptions.map((opt, i) => (
                      <option key={i} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    How Can We Help You? <span className="required-star">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your brand, current software stack, or specific requirements..."
                    className="form-input form-textarea"
                    disabled={isSubmitting}
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  id="contact-submit-btn"
                  className="contact-submit-button"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="btn-spinner-row">
                      <span className="btn-spinner"></span>
                      <span>Submitting Your Message...</span>
                    </span>
                  ) : (
                    <span className="btn-label-row">
                      <span>Send Message</span>
                      <span className="btn-arrow">&rarr;</span>
                    </span>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactUs;
