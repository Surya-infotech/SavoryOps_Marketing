import { useMemo, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import SEOHead from '../components/SEO/SEOHead';
import { WhatsAppIcon } from '../components/Icons';
import {
  BACKEND_INTEGRATIONS,
  EMPLOYEE_ROLES,
  PLATFORMS_DATA,
  REPORT_CATEGORIES,
  SUPPORTED_LANGUAGES,
} from '../data/platformsData';

const PlatformsExplorer = () => {
  const { platformId } = useParams();
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState('');
  const [activeReportCat, setActiveReportCat] = useState('all');
  const [activeEmployeeRoleId, setActiveEmployeeRoleId] = useState(EMPLOYEE_ROLES[0].id);

  const activePlatform = useMemo(() => {
    if (!platformId) return PLATFORMS_DATA[0];
    return PLATFORMS_DATA.find((p) => p.id === platformId) || PLATFORMS_DATA[0];
  }, [platformId]);

  const handleSelectPlatform = (id) => {
    navigate(`/platforms/${id}`);
  };

  // Cross-platform search index across modules, highlights, 34 reports, 6 employee roles & backend integrations
  const searchResults = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return [];

    const matches = [];

    PLATFORMS_DATA.forEach((plat) => {
      plat.moduleGroups.forEach((group) => {
        const matchedItems = group.items.filter(
          (item) =>
            item.toLowerCase().includes(q) ||
            group.title.toLowerCase().includes(q) ||
            plat.name.toLowerCase().includes(q) ||
            plat.folder.toLowerCase().includes(q)
        );
        matchedItems.forEach((item) => {
          matches.push({
            platformId: plat.id,
            platformName: plat.shortName,
            folder: plat.folder,
            category: group.title,
            text: item,
          });
        });
      });

      plat.techStack.forEach((tech) => {
        if (tech.toLowerCase().includes(q)) {
          matches.push({
            platformId: plat.id,
            platformName: plat.shortName,
            folder: plat.folder,
            category: 'Tech Stack',
            text: `${tech} — ${plat.tagline}`,
          });
        }
      });
    });

    REPORT_CATEGORIES.forEach((cat) => {
      cat.reports.forEach((rep) => {
        if (
          rep.name.toLowerCase().includes(q) ||
          rep.desc.toLowerCase().includes(q) ||
          cat.title.toLowerCase().includes(q)
        ) {
          matches.push({
            platformId: 'owner-panel',
            platformName: 'Owner & POS Panel',
            folder: 'SavoryOps_OwnerWeb',
            category: `Reports · ${cat.title}`,
            text: `${rep.name}: ${rep.desc}`,
          });
        }
      });
    });

    EMPLOYEE_ROLES.forEach((role) => {
      const roleMatch =
        role.title.toLowerCase().includes(q) ||
        role.summary.toLowerCase().includes(q) ||
        role.capabilities.some((c) => c.toLowerCase().includes(q));
      if (roleMatch) {
        matches.push({
          platformId: 'employee-app',
          platformName: 'Employee Crew App',
          folder: 'SavoryOpsEmployeeeApp',
          category: `Staff Role · ${role.title}`,
          text: `${role.title} (${role.badge}): ${role.summary}`,
        });
      }
    });

    BACKEND_INTEGRATIONS.forEach((intg) => {
      if (
        intg.title.toLowerCase().includes(q) ||
        intg.details.toLowerCase().includes(q) ||
        intg.category.toLowerCase().includes(q)
      ) {
        matches.push({
          platformId: 'backend-server',
          platformName: 'Backend & Cloud Engine',
          folder: 'SavoryOps_Server',
          category: intg.category,
          text: `${intg.title} (${intg.badge}): ${intg.details}`,
        });
      }
    });

    return matches.slice(0, 24);
  }, [searchQuery]);

  const filteredReportCategories = useMemo(() => {
    if (activeReportCat === 'all') return REPORT_CATEGORIES;
    return REPORT_CATEGORIES.filter((cat) => cat.id === activeReportCat);
  }, [activeReportCat]);

  const totalReportsCount = useMemo(
    () => REPORT_CATEGORIES.reduce((acc, c) => acc + c.reports.length, 0),
    []
  );

  const activeEmployeeRole = useMemo(
    () => EMPLOYEE_ROLES.find((r) => r.id === activeEmployeeRoleId) || EMPLOYEE_ROLES[0],
    [activeEmployeeRoleId]
  );

  const seoTitle = platformId
    ? `${activePlatform.name} (${activePlatform.folder}) | SavoryOps 7-Platform Explorer`
    : '7-Platform Architecture & Complete Feature Explorer | SavoryOps White-Label SaaS';

  const seoDescription = platformId
    ? `${activePlatform.tagline}. ${activePlatform.description}`
    : 'Inspect every feature, module, role, report, and cloud integration across all 7 SavoryOps SaaS repositories: Super Admin, Owner POS, SaaS Landing Page, Customer Website, Customer App, 6-in-1 Employee App, and Node.js/AWS Backend.';

  return (
    <main className="platforms-explorer-page">
      <SEOHead
        title={seoTitle}
        description={seoDescription}
        primaryKeyword={`${activePlatform.name} Restaurant SaaS`}
        keywords={[
          'SavoryOps platforms',
          'restaurant management source code',
          'multi-tenant restaurant POS architecture',
          'restaurant super admin panel',
          'restaurant owner POS KDS',
          'waiter cashier chef host driver app',
          'white label restaurant SaaS',
        ]}
      />

      <div className="section-container">
        {/* Top Breadcrumb & Header */}
        <div className="explorer-header">
          <div className="explorer-breadcrumbs">
            <Link to="/" className="crumb-link">Home</Link>
            <span className="crumb-sep">/</span>
            <span className="crumb-current">7-Platform Explorer</span>
            {platformId && (
              <>
                <span className="crumb-sep">/</span>
                <span className="crumb-current">{activePlatform.shortName}</span>
              </>
            )}
          </div>

          <span className="badge-green">COMPLETE TECHNICAL SPECIFICATION · 7 REPOSITORIES</span>
          <h1 className="explorer-title">
            Explore Every Feature Across All <span className="glow-gradient-text">7 SavoryOps Platforms</span>
          </h1>
          <p className="explorer-subtitle">
            Inspect the exact modules, 6 staff mobile roles, 34 built-in owner reports, zero-login KDS/CFD kiosks,
            and AWS + MongoDB multi-tenant backend included in your unencrypted white-label source code license.
          </p>

          {/* Search Bar across all 7 platforms */}
          <div className="explorer-search-box glass-panel">
            <span className="search-icon" aria-hidden="true">🔍</span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search any feature, report, role, or AWS integration (e.g. Z-Report, Route 53, Recipe BOM, Host, BroadcastChannel, Bluetooth)..."
              className="explorer-search-input"
              aria-label="Search features across all 7 platforms"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="explorer-search-clear"
                aria-label="Clear search"
              >
                ✕ Clear
              </button>
            )}
          </div>

          {/* Live Search Results Panel */}
          {searchQuery.trim() && (
            <div className="explorer-search-results glass-panel">
              <div className="search-results-head">
                <strong>
                  {searchResults.length > 0
                    ? `Found ${searchResults.length}${searchResults.length === 24 ? '+' : ''} matching capabilities for "${searchQuery.trim()}"`
                    : `No matching capabilities found for "${searchQuery.trim()}"`}
                </strong>
                <span className="search-results-hint">Click any result to open that platform</span>
              </div>

              {searchResults.length > 0 && (
                <div className="search-results-grid">
                  {searchResults.map((res, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => {
                        handleSelectPlatform(res.platformId);
                        setSearchQuery('');
                      }}
                      className="search-result-card"
                    >
                      <div className="sr-top">
                        <span className="sr-platform">{res.platformName}</span>
                        <span className="sr-folder">{res.folder}</span>
                      </div>
                      <span className="sr-category">{res.category}</span>
                      <p className="sr-text">{res.text}</p>
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* 7-Platform Switcher Bar */}
        <div className="explorer-platform-tabs" role="tablist" aria-label="Select SavoryOps platform">
          {PLATFORMS_DATA.map((plat, index) => {
            const isActive = plat.id === activePlatform.id;
            return (
              <button
                key={plat.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => handleSelectPlatform(plat.id)}
                className={`explorer-tab-btn ${isActive ? 'active' : ''}`}
              >
                <div className="et-top">
                  <span className="et-num">0{index + 1}</span>
                  <span className="et-badge">{plat.badge}</span>
                </div>
                <strong className="et-name">{plat.shortName}</strong>
                <span className="et-folder">{plat.folder}</span>
              </button>
            );
          })}
        </div>

        {/* Active Platform Deep-Dive Card */}
        <section className="explorer-detail-shell glass-panel">
          <div className="detail-hero-grid">
            <div className="detail-hero-copy">
              <div className="detail-badges-row">
                <span className="badge-green">{activePlatform.badge}</span>
                <span className="code-tag">{activePlatform.folder}</span>
                <span className="turnkey-tag">100% Unencrypted Code</span>
              </div>

              <h2 className="detail-title">{activePlatform.name}</h2>
              <p className="detail-tagline">{activePlatform.tagline}</p>
              <p className="detail-desc">{activePlatform.description}</p>

              {/* Target Audience */}
              <div className="detail-audience-row">
                <span className="detail-meta-label">DESIGNED FOR:</span>
                <div className="detail-audience-pills">
                  {activePlatform.audience.map((role, idx) => (
                    <span key={idx} className="audience-pill">{role}</span>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="detail-tech-row">
                <span className="detail-meta-label">VERIFIED TECH STACK:</span>
                <div className="tech-pills-row">
                  {activePlatform.techStack.map((tech, idx) => (
                    <span key={idx} className="tech-pill">{tech}</span>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="detail-actions-row">
                {activePlatform.demoUrl ? (
                  <a
                    href={activePlatform.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-demo-link"
                  >
                    <span>🚀 Launch {activePlatform.shortName} Demo</span>
                    <span>&rarr;</span>
                  </a>
                ) : (
                  <Link to="/#inquiry" className="btn-demo-link">
                    <span>🏗️ Request Backend Architecture Walkthrough</span>
                    <span>&rarr;</span>
                  </Link>
                )}

                <Link to="/#inquiry" className="btn-acquire-code">
                  Acquire All 7 Codebases
                </Link>
              </div>
            </div>

            <div className="detail-hero-media">
              <div className="media-frame">
                <img
                  src={activePlatform.image}
                  alt={`${activePlatform.name} preview`}
                  className="showcase-img"
                />
                <div className="media-overlay-badge">
                  <span className="pulse-indicator"></span>
                  <span>Repo: {activePlatform.folder}</span>
                </div>
              </div>

              <div className="detail-highlights-box">
                <div className="dh-title">Core Capabilities Snapshot</div>
                <ul className="dh-list">
                  {activePlatform.highlights.map((hl, idx) => (
                    <li key={idx}>
                      <span className="check-icon">✓</span>
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Categorized Feature Modules */}
          <div className="explorer-modules-section">
            <div className="sub-section-head">
              <h3>Complete Module &amp; Feature Breakdown</h3>
              <p>Verified functional modules inside <code>{activePlatform.folder}</code></p>
            </div>

            <div className="explorer-modules-grid">
              {activePlatform.moduleGroups.map((group, gIdx) => (
                <div key={gIdx} className="explorer-module-card">
                  <div className="emc-header">
                    <span className="emc-icon">{group.icon}</span>
                    <h4>{group.title}</h4>
                  </div>
                  <ul className="emc-list">
                    {group.items.map((item, iIdx) => (
                      <li key={iIdx}>
                        <span className="check-icon">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* OWNER PANEL SPECIAL: 34 Reports Hub + Zero-Login Kiosks */}
          {activePlatform.id === 'owner-panel' && (
            <div className="explorer-specialized-block">
              <div className="sub-section-head">
                <span className="badge-gold">BUILT-IN ANALYTICS SUITE</span>
                <h3>All {totalReportsCount} Built-In Reports Across 6 Operational Categories</h3>
                <p>
                  Every report in <code>ReportHub.jsx</code> supports fiscal date filters, branch isolation,
                  manager permission gating, and one-click PDF/Excel export.
                </p>
              </div>

              <div className="report-filter-pills">
                <button
                  type="button"
                  onClick={() => setActiveReportCat('all')}
                  className={`report-pill-btn ${activeReportCat === 'all' ? 'active' : ''}`}
                >
                  All Reports ({totalReportsCount})
                </button>
                {REPORT_CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setActiveReportCat(cat.id)}
                    className={`report-pill-btn ${activeReportCat === cat.id ? 'active' : ''}`}
                  >
                    {cat.title} ({cat.reports.length})
                  </button>
                ))}
              </div>

              <div className="reports-categories-stack">
                {filteredReportCategories.map((cat) => (
                  <div key={cat.id} className="report-cat-group">
                    <div className="rcg-head">
                      <h4>{cat.title}</h4>
                      <span className="subitem-badge badge-emerald">{cat.reports.length} Reports</span>
                    </div>
                    <div className="reports-cards-grid">
                      {cat.reports.map((rep, rIdx) => (
                        <div key={rIdx} className="report-item-card">
                          <strong>{rep.name}</strong>
                          <p>{rep.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* EMPLOYEE APP SPECIAL: 6-Role Interactive Matrix */}
          {activePlatform.id === 'employee-app' && (
            <div className="explorer-specialized-block">
              <div className="sub-section-head">
                <span className="badge-gold">SINGLE INSTALL · 6 ADAPTIVE WORKSPACES</span>
                <h3>Interactive 6-Role Crew Matrix</h3>
                <p>
                  Select any staff role below to inspect how <code>SavoryOpsEmployeeeApp</code> adapts its tabs,
                  shift controls, charts, and push alerts automatically upon sign-in.
                </p>
              </div>

              <div className="roles-switcher-row">
                {EMPLOYEE_ROLES.map((role) => (
                  <button
                    key={role.id}
                    type="button"
                    onClick={() => setActiveEmployeeRoleId(role.id)}
                    className={`role-switch-btn ${activeEmployeeRole.id === role.id ? 'active' : ''}`}
                  >
                    <span className="role-emoji">{role.icon}</span>
                    <span>{role.title}</span>
                  </button>
                ))}
              </div>

              <div className="role-detail-panel">
                <div className="rdp-left">
                  <div className="rdp-header">
                    <span className="rdp-icon">{activeEmployeeRole.icon}</span>
                    <div>
                      <span className="subitem-badge badge-emerald">{activeEmployeeRole.badge}</span>
                      <h4>{activeEmployeeRole.title} Workspace</h4>
                    </div>
                  </div>
                  <p className="rdp-summary">{activeEmployeeRole.summary}</p>
                  <div className="rdp-screens">
                    <span className="detail-meta-label">INCLUDED SCREENS &amp; MODALS:</span>
                    <div className="tech-pills-row">
                      {activeEmployeeRole.screens.map((scr, idx) => (
                        <span key={idx} className="tech-pill">{scr}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="rdp-right">
                  <div className="dh-title">Role Capabilities</div>
                  <ul className="dh-list">
                    {activeEmployeeRole.capabilities.map((cap, idx) => (
                      <li key={idx}>
                        <span className="check-icon">✓</span>
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* BACKEND SERVER SPECIAL: Cloud & Multi-DB Architecture Grid */}
          {activePlatform.id === 'backend-server' && (
            <div className="explorer-specialized-block">
              <div className="sub-section-head">
                <span className="badge-gold">CLOUD &amp; MULTI-TENANT INFRASTRUCTURE</span>
                <h3>4-Tier Database Isolation &amp; AWS Cloud Integrations</h3>
                <p>
                  Production architecture inside <code>SavoryOps_Server</code> designed for self-hosted VPS,
                  PM2 clusters, or AWS Elastic Beanstalk deployments.
                </p>
              </div>

              <div className="backend-arch-grid">
                {BACKEND_INTEGRATIONS.map((intg, idx) => (
                  <div key={idx} className="backend-arch-card">
                    <div className="bac-top">
                      <span className="bac-cat">{intg.category}</span>
                      <span className="subitem-badge badge-teal">{intg.badge}</span>
                    </div>
                    <h4>{intg.title}</h4>
                    <p>{intg.details}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 18-Language + RTL Universal Support Strip (for UI platforms) */}
          {activePlatform.id !== 'backend-server' && (
            <div className="explorer-languages-strip">
              <div className="els-header">
                <span className="badge-green">GLOBAL LOCALIZATION</span>
                <h4>18 Built-In Languages with Automatic RTL Rendering</h4>
                <p>
                  Included natively across Super Admin, Owner Panel, Landing Page, Customer Website, User App, and Employee App.
                </p>
              </div>
              <div className="els-pills">
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <span key={lang.name} className={`lang-pill ${lang.rtl ? 'lang-pill-rtl' : ''}`}>
                    {lang.name}{lang.rtl ? ' · RTL' : ''}
                  </span>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* Bottom CTA */}
        <div className="notify-bottom-banner glass-panel" style={{ marginTop: '48px' }}>
          <div className="notify-banner-left">
            <span className="badge-gold">ALL 7 SOURCE CODE REPOSITORIES INCLUDED</span>
            <h3>Ready to Launch Your White-Label Hospitality SaaS with Full IP Ownership?</h3>
            <p>
              Acquire unencrypted source code for all 7 platforms with zero royalties, zero DRM lock-ins,
              and optional 48-hour turnkey cloud deployment or custom feature engineering.
            </p>
          </div>
          <div className="notify-banner-right">
            <Link to="/#inquiry" className="btn-notify-primary">
              <span>Request Source Code &amp; Demo &rarr;</span>
            </Link>
            <a
              href="https://wa.me/917621908664?text=Hello%2C%20I%20reviewed%20the%207-platform%20SavoryOps%20architecture%20and%20would%20like%20to%20discuss%20licensing"
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
    </main>
  );
};

export default PlatformsExplorer;
