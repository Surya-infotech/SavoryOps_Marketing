import React, { useState } from 'react';

const RoiCalculator = () => {
  const [clients, setClients] = useState(30);
  const [monthlyFee, setMonthlyFee] = useState(119);
  const [setupFee, setSetupFee] = useState(450);

  const mrr = clients * monthlyFee;
  const arr = mrr * 12;
  const setupTotal = clients * setupFee;
  const firstYearTotal = arr + setupTotal;

  return (
    <section id="roi-calculator" className="section-roi">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header-center">
          <span className="badge-green">Financial Potential &amp; Business Model</span>
          <h2 className="section-title">
            Interactive White-Label <span className="glow-gradient-text">Revenue &amp; ROI Calculator</span>
          </h2>
          <p className="section-description">
            See how rapidly your restaurant SaaS venture generates recurring revenue. 
            Because SavoryOps charges $0 royalties and $0 per-transaction fees, you keep 100% of all software earnings.
          </p>
        </div>

        {/* Calculator Main Box */}
        <div className="roi-calculator-box glass-panel">
          <div className="roi-grid">
            {/* Controls Side */}
            <div className="roi-inputs">
              <h3 className="roi-box-title">Adjust Your Business Model Variables:</h3>

              {/* Slider 1: Number of Clients */}
              <div className="roi-slider-group">
                <div className="slider-header">
                  <label htmlFor="clients-slider">Active Restaurant Clients</label>
                  <span className="slider-value-badge">{clients} Venues</span>
                </div>
                <input
                  id="clients-slider"
                  type="range"
                  min="5"
                  max="150"
                  step="5"
                  value={clients}
                  onChange={(e) => setClients(Number(e.target.value))}
                  className="roi-range"
                />
                <div className="slider-range-labels">
                  <span>5 Venues</span>
                  <span>75 Venues</span>
                  <span>150 Venues</span>
                </div>
              </div>

              {/* Slider 2: Monthly Fee */}
              <div className="roi-slider-group">
                <div className="slider-header">
                  <label htmlFor="fee-slider">Monthly SaaS Fee / Restaurant</label>
                  <span className="slider-value-badge">${monthlyFee} / month</span>
                </div>
                <input
                  id="fee-slider"
                  type="range"
                  min="49"
                  max="349"
                  step="10"
                  value={monthlyFee}
                  onChange={(e) => setMonthlyFee(Number(e.target.value))}
                  className="roi-range"
                />
                <div className="slider-range-labels">
                  <span>$49/mo (Starter)</span>
                  <span>$199/mo (Standard)</span>
                  <span>$349/mo (Premium)</span>
                </div>
              </div>

              {/* Slider 3: Setup Fee */}
              <div className="roi-slider-group">
                <div className="slider-header">
                  <label htmlFor="setup-slider">Hardware &amp; Onboarding Setup Fee</label>
                  <span className="slider-value-badge">${setupFee} one-time</span>
                </div>
                <input
                  id="setup-slider"
                  type="range"
                  min="100"
                  max="1500"
                  step="50"
                  value={setupFee}
                  onChange={(e) => setSetupFee(Number(e.target.value))}
                  className="roi-range"
                />
                <div className="slider-range-labels">
                  <span>$100</span>
                  <span>$750</span>
                  <span>$1,500</span>
                </div>
              </div>

              <div className="roi-note-box">
                <span className="info-icon">💡</span>
                <p>
                  <strong>Zero Platform Royalty:</strong> Many SaaS frameworks take a 5–15% cut or per-order transaction fees. 
                  With SavoryOps White-Label License, 100% of these numbers flow straight into your bank account.
                </p>
              </div>
            </div>

            {/* Results Output Side */}
            <div className="roi-results">
              <h3 className="roi-box-title">Your Projected SaaS Revenue:</h3>

              <div className="result-metric-card highlighted-metric">
                <span className="metric-title">Monthly Recurring Revenue (MRR)</span>
                <div className="metric-amount glow-gradient-text">
                  ${mrr.toLocaleString()}
                  <span className="metric-freq">/ month</span>
                </div>
                <span className="metric-hint">Predictable recurring subscription cash flow</span>
              </div>

              <div className="result-sub-grid">
                <div className="result-metric-card">
                  <span className="metric-title">Annual Recurring Revenue (ARR)</span>
                  <div className="metric-amount-sub">${arr.toLocaleString()}</div>
                  <span className="metric-hint">Yearly subscription revenue</span>
                </div>

                <div className="result-metric-card">
                  <span className="metric-title">Setup &amp; Onboarding Fees</span>
                  <div className="metric-amount-sub">${setupTotal.toLocaleString()}</div>
                  <span className="metric-hint">Upfront onboarding revenue</span>
                </div>
              </div>

              <div className="result-total-card">
                <div className="total-header">
                  <span>YEAR 1 TOTAL GROSS CASH FLOW</span>
                  <span className="badge-gold">100% Retained</span>
                </div>
                <div className="total-amount">${firstYearTotal.toLocaleString()}</div>
                <p className="total-sub">
                  Based on onboarding {clients} restaurants at ${monthlyFee}/mo + ${setupFee} initial setup fee.
                </p>
              </div>

              <a href="#licensing" className="btn-roi-cta">
                Acquire SavoryOps White-Label License &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoiCalculator;
