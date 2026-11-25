import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PLATFORMS_DATA } from '../data/platformsData';

const PlatformEcosystem = () => {
  const [activeTab, setActiveTab] = useState(PLATFORMS_DATA[0].id);
  const [activeModuleIdx, setActiveModuleIdx] = useState(0);

  const activePlatform =
    PLATFORMS_DATA.find((p) => p.id === activeTab) || PLATFORMS_DATA[0];
  const activeModuleGroup =
    activePlatform.moduleGroups[activeModuleIdx] || activePlatform.moduleGroups[0];

  const handleSelectPlatform = (id) => {
    setActiveTab(id);
    setActiveModuleIdx(0);
  };

  const scrollToInquiry = () => {
    const el = document.getElementById('inquiry');
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section id="ecosystem" className="section-ecosystem">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header-center">
          <span className="badge-green">THE COMPLETE 7-PLATFORM SAAS ECOSYSTEM</span>
          <h2 className="section-title">
            7 Interconnected Codebases.{' '}
            <span className="glow-gradient-text">One Unified Hospitality Platform.</span>
          </h2>
          <p className="section-description">
            Every white-label license delivers all 7 production repositories—Super Admin Panel, Owner &amp; POS Web,
            SaaS Landing Page, Dedicated Restaurant Websites, Customer App, 6-in-1 Crew App, and the Multi-Tenant Node.js/AWS Backend.
          </p>
        </div>

        {/* 7 Software Navigation Tabs */}
        <div className="software-tabs-grid software-tabs-grid-7">
          {PLATFORMS_DATA.map((plat, idx) => (
            <button
              key={plat.id}
              type="button"
              onClick={() => handleSelectPlatform(plat.id)}
              className={`software-tab-card ${activeTab === plat.id ? 'active' : ''}`}
            >
              <div className="tab-card-top">
                <span className="tab-badge">0{idx + 1} · {plat.badge}</span>
                <span className="tab-demo-pill">
                  {plat.demoUrl ? 'Live Demo' : 'Core API'}
                </span>
              </div>
              <strong className="tab-title">{plat.shortName}</strong>
            </button>
          ))}
        </div>

        {/* Active Software Showcase Card */}
        <div className="platform-showcase-card glass-panel">
          <div className="showcase-content">
            <div className="showcase-header">
              <span className="badge-green">{activePlatform.badge}</span>
              <span className="turnkey-tag">100% Unencrypted Source</span>
            </div>

            <h3 className="showcase-title">{activePlatform.name}</h3>
            <p className="showcase-tagline">{activePlatform.tagline}</p>
            <p className="showcase-desc">{activePlatform.description}</p>

            {/* Tech Stack Badges */}
            <div className="showcase-tech-strip">
              <span className="tech-strip-label">TECH STACK:</span>
              <div className="tech-pills-row">
                {activePlatform.techStack.map((tech, idx) => (
                  <span key={idx} className="tech-pill">{tech}</span>
                ))}
              </div>
            </div>

            {/* Interactive Module Sub-Tabs inside Platform Showcase */}
            <div className="ecosystem-module-explorer">
              <div className="eme-header-row">
                <span className="tech-strip-label">MODULE BREAKDOWN:</span>
                <Link
                  to={`/platforms/${activePlatform.id}`}
                  className="eme-deepdive-link"
                >
                  Open Full Spec &amp; Search &rarr;
                </Link>
              </div>

              <div className="eme-tabs-row">
                {activePlatform.moduleGroups.map((grp, idx) => (
                  <button
                    key={grp.title}
                    type="button"
                    onClick={() => setActiveModuleIdx(idx)}
                    className={`eme-tab-pill ${activeModuleIdx === idx ? 'active' : ''}`}
                  >
                    <span>{grp.icon}</span>
                    <span>{grp.title}</span>
                  </button>
                ))}
              </div>

              <div className="showcase-features-grid eme-active-panel">
                {activeModuleGroup.items.map((feat, idx) => (
                  <div key={idx} className="feature-item">
                    <span className="check-icon">✓</span>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Demo / Deep-Dive Action Box */}
            <div className="showcase-demo-card">
              <div className="demo-card-header">
                <div className="demo-status-row">
                  <span className="pulse-indicator pulse-green"></span>
                  <span className="demo-status-text">
                    {activePlatform.demoUrl ? 'LIVE DEMO & FULL SPEC READY' : 'PRODUCTION API & CLOUD ARCHITECTURE'}
                  </span>
                </div>
                <span className="demo-license-hint">
                  {activePlatform.moduleGroups.length} Core Modules • 18 Languages (UI)
                </span>
              </div>

              <div className="showcase-action-row">
                {activePlatform.demoUrl ? (
                  <a
                    href={activePlatform.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-demo-link"
                  >
                    <span className="demo-btn-icon">🚀</span>
                    <span>Launch {activePlatform.shortName} Demo &rarr;</span>
                  </a>
                ) : (
                  <button
                    type="button"
                    onClick={scrollToInquiry}
                    className="btn-demo-link"
                  >
                    <span className="demo-btn-icon">🏗️</span>
                    <span>Request Backend Walkthrough &rarr;</span>
                  </button>
                )}

                <Link
                  to={`/platforms/${activePlatform.id}`}
                  className="btn-acquire-code"
                >
                  <span>View All {activePlatform.shortName} Features</span>
                </Link>
              </div>
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
                <span>{activePlatform.badge} • Unencrypted</span>
              </div>
            </div>

            {/* Quick Capabilities & Highlights Box */}
            <div className="media-info-card">
              <div className="media-info-row">
                <span className="info-title">Platform Highlights</span>
                <span className="info-badge">{activePlatform.audience[0]}</span>
              </div>
              <ul className="media-highlights-list">
                {activePlatform.highlights.slice(0, 4).map((hl, idx) => (
                  <li key={idx}>
                    <span className="check-icon">✓</span>
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
              <Link
                to={`/platforms/${activePlatform.id}`}
                className="btn-media-direct-demo"
              >
                <span>Inspect Full {activePlatform.shortName} Architecture</span>
                <span className="ext-icon">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>

        {/* 7-Platform Quick Demo & Spec Directory */}
        <div className="software-summary-grid">
          <div className="summary-grid-header summary-grid-header-flex">
            <div>
              <h3 className="summary-title">Complete 7-Platform Software Directory</h3>
              <p className="summary-subtitle">
                Every frontend, native mobile app, dedicated website, and cloud server included in your repository bundle:
              </p>
            </div>
            <Link to="/platforms" className="btn-explore-all-platforms">
              <span>🔍 Search All 7 Platforms &amp; 34 Reports</span>
              <span>&rarr;</span>
            </Link>
          </div>

          <div className="summary-cards-container summary-cards-7">
            {PLATFORMS_DATA.map((plat, idx) => (
              <div key={plat.id} className="summary-card">
                <div className="summary-card-top">
                  <div className="summary-card-badges">
                    <span className="summary-pill">0{idx + 1} · {plat.badge}</span>
                    <span className="summary-status-tag">
                      {plat.demoUrl ? 'Demo Ready' : 'API Core'}
                    </span>
                  </div>
                </div>
                <h4 className="summary-app-name">{plat.name}</h4>
                <p className="summary-tagline">{plat.tagline}</p>
                <div className="summary-actions summary-actions-split">
                  <Link
                    to={`/platforms/${plat.id}`}
                    className="btn-summary-spec"
                  >
                    <span>Full Specs</span>
                    <span>&rarr;</span>
                  </Link>
                  {plat.demoUrl ? (
                    <a
                      href={plat.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-summary-demo"
                    >
                      <span>Live Demo</span>
                      <span className="btn-arrow">↗</span>
                    </a>
                  ) : (
                    <button
                      type="button"
                      onClick={scrollToInquiry}
                      className="btn-summary-demo"
                    >
                      <span>Walkthrough</span>
                      <span className="btn-arrow">&rarr;</span>
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformEcosystem;
