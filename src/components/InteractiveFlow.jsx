import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PLATFORM_INTERACTIONS_FLOW } from '../data/platformsData';

const InteractiveFlow = () => {
  const [activeStep, setActiveStep] = useState(0);
  const currentStep = PLATFORM_INTERACTIONS_FLOW[activeStep];

  return (
    <section id="workflow" className="section-workflow">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header-center">
          <span className="badge-green">Cross-Platform Architecture &amp; Live Data Flow</span>
          <h2 className="section-title">
            How All <span className="glow-gradient-text">7 Platforms Work Together</span> in Real Time
          </h2>
          <p className="section-description">
            Follow a single hospitality lifecycle across every codebase—from Guest QR &amp; Waiter Call capture,
            through multi-DB Route 53 cloud routing, KOT deal splitting, 0ms BroadcastChannel CFD, Recipe BOM
            deduction, WhatsApp delivery receipts, to Super Admin MRR &amp; Audit Logs.
          </p>
        </div>

        {/* Step Progression Buttons */}
        <div className="flow-stepper-nav flow-stepper-nav-6">
          {PLATFORM_INTERACTIONS_FLOW.map((s, idx) => (
            <button
              key={s.step}
              type="button"
              onClick={() => setActiveStep(idx)}
              className={`flow-stepper-btn ${activeStep === idx ? 'active' : ''}`}
            >
              <span className="flow-step-num">{s.step}</span>
              <span className="flow-step-label">{s.platformTag.split('•')[0].trim()}</span>
            </button>
          ))}
        </div>

        {/* Flow Detail Display Card */}
        <div className="flow-card glass-panel">
          <div className="flow-card-grid">
            {/* Left Content Column */}
            <div className="flow-card-content">
              <div className="flow-step-header">
                <span className="badge-green">Step {currentStep.step} of 0{PLATFORM_INTERACTIONS_FLOW.length}</span>
                <span className="code-tag">{currentStep.workflowTag}</span>
              </div>
              <div className="flow-platform-pill">{currentStep.platformTag}</div>
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
                  type="button"
                  disabled={activeStep === 0}
                  onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                  className="btn-flow-nav"
                >
                  &larr; Previous Step
                </button>
                {activeStep < PLATFORM_INTERACTIONS_FLOW.length - 1 ? (
                  <button
                    type="button"
                    onClick={() =>
                      setActiveStep((prev) =>
                        Math.min(PLATFORM_INTERACTIONS_FLOW.length - 1, prev + 1)
                      )
                    }
                    className="btn-flow-nav btn-flow-next"
                  >
                    Next Operational Step &rarr;
                  </button>
                ) : (
                  <Link to="/platforms" className="btn-flow-nav btn-flow-next">
                    Explore All 7 Platforms &rarr;
                  </Link>
                )}
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
                  <strong>{currentStep.platformTag}</strong>
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
