import React, { useState } from 'react';

const flowSteps = [
  {
    step: '01',
    title: 'Order Placement: Table QR or Mobile Waiter',
    subtitle: 'Context-Aware Digital Ordering with Modifiers',
    image: '/images/order-types/dine-in.jpg',
    codeRef: 'SavoryOps_UserApp / SavoryOpsEmployeeeApp',
    description:
      'A customer scans their unique table QR code or a waiter punches an order on their smartphone. Diners customize nested modifiers (e.g. choice of meat doneness, extra toppings, sides), add special kitchen requests, and include an optional tip that can be removed with 1 tap.',
    points: [
      'Per-table QR code automatically binds branch, area, and table ID',
      'Nested modifier groups with minimum and maximum selection rules',
      'Dynamic gratuity/tip calculator with 1-click opt-out removal',
      'Tableside ordering on waiter app instantly dispatches to kitchen'
    ]
  },
  {
    step: '02',
    title: 'Real-Time Floor Sync & POS Locking',
    subtitle: 'Atomic Socket.io Event & Table Status Update',
    image: '/images/order-types/quick-order.jpg',
    codeRef: 'SavoryOps_OwnerWeb / PosOrder.jsx',
    description:
      'The moment an order is fired, an atomic Socket.io event updates the cashier POS and floor map. The table status switches to "Occupied", preventing duplicate orders, and the running balance and table timer begin tracking in real time.',
    points: [
      'Instant 2D floor plan table color shift (Available &rarr; Occupied)',
      'Prevents race conditions & duplicate table occupancy conflicts',
      'Live billing totals, item running orders, and table timer tracking',
      'Supports split bills, joint tables, and table-to-table transfers'
    ]
  },
  {
    step: '03',
    title: 'Kitchen KDS Chime & Station KOT Auto-Cut',
    subtitle: 'Hardware Thermal Routing & Cook Stage Progression',
    image: '/images/posts/Post_04_Live_Order_Tracking_Kitchen_KDS.jpg',
    codeRef: 'PublicKotDisplay.jsx / bluetoothPrinter.js',
    description:
      'The order appears simultaneously on the kitchen KDS screen with an audible kitchen chime. Specialized station printers (Grill, Bar, Dessert) automatically print KOT tickets with bold station headers, hardware paper auto-cuts, and item prices completely hidden for staff privacy.',
    points: [
      'Audible chime alerts kitchen staff instantly to incoming tickets',
      'Price-Free KOT slips protect financial confidentiality in kitchen',
      'Station-specific hardware auto-cut thermal printing (58mm/80mm)',
      'Digital bump bar stages: Received &rarr; Cooking &rarr; Ready to Serve'
    ]
  },
  {
    step: '04',
    title: 'Automated Recipe BOM Inventory Deduction',
    subtitle: 'Precise Grams & Milliliters Deducted Instantly',
    image: '/images/features/inventory-management.jpg',
    codeRef: 'inventory-deduction-helper.js / supplier-controller.js',
    description:
      'Unlike competitor systems that only decrement finished menu items, SavoryOps executes an automated Bill of Materials (BOM) deduction. When a pizza or burger is ordered, exact grams of cheese, meat, flour, and sauce are automatically deducted from raw ingredient inventory.',
    points: [
      'Sub-item ingredient tracking down to grams, kilograms, and milliliters',
      'Automated purchase order triggers when raw materials breach low thresholds',
      'Supplier VAT/Tax ID audit logging for EU/GST fiscal compliance',
      'Food waste reduction and accurate gross margin tracking per dish'
    ]
  },
  {
    step: '05',
    title: 'Multi-Tender Checkout & Consolidated Z-Report',
    subtitle: 'Non-Destructive Refund Ledger & Shift Close',
    image: '/images/posts/Post_08_Automated_Z_Report_Cash_Close.jpg',
    codeRef: 'DayClose.jsx / dayclosereport-controller.js',
    description:
      'When the dining party is ready to leave, cashiers accept multi-tender payments (Cash, Card, UPI, Custom Tenders). At the end of the shift or past midnight, a consolidated Z-Report is generated with formatted print and PDF exports, verifying opening/closing drawer balances and immutable audit trails.',
    points: [
      'Multi-tender split billing (Cash + Card + Online wallet)',
      'Non-destructive refunds: cancelling paid orders creates immutable audit logs',
      'Consolidated Z-Report reconciling gross/net sales, tax, and drawer cash',
      '1-Click formatted styled print layouts (window.print()) & PDF export'
    ]
  }
];

const InteractiveFlow = () => {
  const [activeStep, setActiveStep] = useState(0);
  const currentStep = flowSteps[activeStep];

  return (
    <section id="workflow" className="section-workflow">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header-center">
          <span className="badge-green">End-to-End Operational Flow</span>
          <h2 className="section-title">
            Engineered for <span className="glow-gradient-text">Real-World Hospitality Workflows</span>
          </h2>
          <p className="section-description">
            Experience how orders flow effortlessly across the 5 platforms in SavoryOps—from the customer's phone 
            to the kitchen line, raw inventory reduction, and end-of-day register closing.
          </p>
        </div>

        {/* Step Progression Buttons */}
        <div className="flow-stepper-nav">
          {flowSteps.map((s, idx) => (
            <button
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={`flow-stepper-btn ${activeStep === idx ? 'active' : ''}`}
            >
              <span className="flow-step-num">{s.step}</span>
              <span className="flow-step-label">{s.title.split(':')[0]}</span>
            </button>
          ))}
        </div>

        {/* Flow Detail Display Card */}
        <div className="flow-card glass-panel">
          <div className="flow-card-grid">
            {/* Left Content Column */}
            <div className="flow-card-content">
              <div className="flow-step-header">
                <span className="badge-green">Step {currentStep.step} of 05</span>
                <code className="code-tag">{currentStep.codeRef}</code>
              </div>
              <h3 className="flow-heading">{currentStep.title}</h3>
              <p className="flow-subheading">{currentStep.subtitle}</p>
              <p className="flow-desc">{currentStep.description}</p>

              <div className="flow-points-list">
                {currentStep.points.map((pt, pIdx) => (
                  <div key={pIdx} className="flow-point">
                    <span className="flow-check">✓</span>
                    <span>{pt}</span>
                  </div>
                ))}
              </div>

              {/* Navigation Controls */}
              <div className="flow-controls">
                <button
                  disabled={activeStep === 0}
                  onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                  className="btn-flow-nav"
                >
                  &larr; Previous Step
                </button>
                <button
                  disabled={activeStep === flowSteps.length - 1}
                  onClick={() => setActiveStep((prev) => Math.min(flowSteps.length - 1, prev + 1))}
                  className="btn-flow-nav btn-flow-next"
                >
                  Next Operational Step &rarr;
                </button>
              </div>
            </div>

            {/* Right Media Column */}
            <div className="flow-card-media">
              <div className="flow-img-wrapper">
                <img
                  src={currentStep.image}
                  alt={currentStep.title}
                  className="flow-img"
                />
                <div className="flow-caption-overlay">
                  <strong>SavoryOps Architecture</strong>
                  <span>{currentStep.subtitle}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveFlow;
