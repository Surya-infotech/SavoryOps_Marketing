import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { MdDashboard, MdArrowForward } from 'react-icons/md';
import superAdminDashboardImg from '../assets/Super Admin/Screenshot_1.png';
import superAdminSubscriptionImg from '../assets/Super Admin/Screenshot_10.png';
import superAdminConfigImg from '../assets/Super Admin/Screenshot_15.png';
import superAdminReportImg from '../assets/Super Admin/Screenshot_20.png';

export default function SuperAdmin() {
  const demoLink = import.meta.env.VITE_SUPER_ADMIN_DEMO || '#';
  const buyNowLink = import.meta.env.VITE_BUY_NOW?.trim() || '/contact';
  const superAdminFeatures = [
    {
      title: 'Multi-Restaurant Governance',
      description: 'Control all restaurants, brands, and outlets from one centralized command center.',
    },
    {
      title: 'Subscription & Plan Management',
      description: 'Create and manage pricing plans, billing cycles, and access permissions efficiently.',
    },
    {
      title: 'System-Wide Configuration',
      description: 'Apply global settings, business rules, and platform standards across every client.',
    },
    {
      title: 'Executive-Level Reporting',
      description: 'Get portfolio-wide insights to track expansion, retention, and profitability trends.',
    },
  ];

  const superAdminUseCases = [
    'SaaS founders building a white-label restaurant software business',
    'Enterprise teams managing many restaurant groups',
    'Operators who need unified billing, governance, and compliance control',
  ];
  const superAdminShots = [
    { src: superAdminSubscriptionImg, alt: 'Super admin subscription management' },
    { src: superAdminConfigImg, alt: 'Super admin system configuration view' },
    { src: superAdminReportImg, alt: 'Super admin portfolio analytics view' },
  ];
  const superAdminKpis = [
    { value: 'One Panel', label: 'Control all client restaurants' },
    { value: 'Scalable', label: 'Designed for multi-brand SaaS growth' },
    { value: 'Global', label: 'System-wide standards and governance' },
  ];

  return (
    <div className="marketing-shell min-h-screen pt-24 pb-20">
      <Helmet>
        <title>Super Admin Panel | SavoryOps</title>
      </Helmet>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="premium-card p-8 md:p-12 animate-slide-up overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="text-center lg:text-left">
              <div className="w-20 h-20 bg-primary-50 text-primary-500 rounded-3xl flex items-center justify-center text-5xl mx-auto lg:mx-0 mb-6 shadow-sm">
             <MdDashboard />
              </div>

              <p className="section-chip mb-4">Super Admin</p>
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-5 tracking-tight">
                Run Your SaaS Business From
                {' '}
                <span className="gradient-title">One Command Center</span>
              </h1>
              <p className="text-lg text-slate-500 mb-8 leading-relaxed font-medium">
                Your highest authority dashboard for scaling a restaurant SaaS ecosystem. Manage customers, branches, subscriptions, and global operations through one strategic control layer.
              </p>

              <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4">
                {demoLink.startsWith('http') ? (
                  <a href={demoLink} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-primary-500 text-white font-bold rounded-full shadow-lg shadow-primary-500/30 hover:-translate-y-1 transition-all flex items-center gap-2 text-[15px]">
                    Live Demo <MdArrowForward />
                  </a>
                ) : (
                  <Link to={demoLink} className="px-8 py-4 bg-primary-500 text-white font-bold rounded-full shadow-lg shadow-primary-500/30 hover:-translate-y-1 transition-all flex items-center gap-2 text-[15px]">
                    Live Demo <MdArrowForward />
                  </Link>
                )}
                {buyNowLink.startsWith('http') ? (
                  <a href={buyNowLink} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-slate-900 text-white font-bold rounded-full shadow-lg hover:-translate-y-1 transition-all flex items-center gap-2 text-[15px]">
                    Buy now
                  </a>
                ) : (
                  <Link to={buyNowLink} className="px-8 py-4 bg-slate-900 text-white font-bold rounded-full shadow-lg hover:-translate-y-1 transition-all flex items-center gap-2 text-[15px]">
                    Buy now
                  </Link>
                )}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-10 -right-10 w-44 h-44 bg-indigo-100 rounded-full blur-3xl opacity-70"></div>
              <img
                src={superAdminDashboardImg}
                alt="SavoryOps super admin main dashboard"
                className="relative z-10 rounded-3xl border border-slate-200 shadow-2xl shadow-indigo-900/10 w-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
          {superAdminKpis.map((item) => (
            <div key={item.label} className="premium-card px-6 py-5 rounded-2xl">
              <p className="text-2xl font-extrabold text-slate-900">{item.value}</p>
              <p className="text-slate-500 text-sm mt-1 font-medium">{item.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {superAdminFeatures.map((item, idx) => (
            <div
              key={item.title}
              className="bg-white border border-slate-200 rounded-3xl p-7 shadow-sm animate-slide-up"
              style={{ animationDelay: `${idx * 80}ms` }}
            >
              <h2 className="text-xl font-extrabold text-slate-900 mb-3">{item.title}</h2>
              <p className="text-slate-500 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-white border border-slate-200 rounded-3xl p-8 md:p-10 shadow-soft animate-slide-up">
          <p className="text-xs font-bold tracking-[0.16em] uppercase text-primary-600 mb-3">Super Admin Preview</p>
          <h3 className="text-3xl font-extrabold text-slate-900 mb-6 tracking-tight">Professional UI previews that increase buyer confidence.</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {superAdminShots.map((shot) => (
              <div key={shot.alt} className="rounded-2xl border border-slate-200 overflow-hidden bg-slate-50">
                <img src={shot.src} alt={shot.alt} className="w-full h-52 object-cover" />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 bg-white border border-slate-200 rounded-3xl p-8 md:p-10 shadow-soft animate-slide-up">
          <p className="text-xs font-bold tracking-[0.16em] uppercase text-primary-600 mb-3">Who Should Use Super Admin</p>
          <h3 className="text-3xl font-extrabold text-slate-900 mb-5 tracking-tight">Built for platform owners and scaling teams.</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-600 font-medium">
            {superAdminUseCases.map((useCase) => (
              <li key={useCase} className="bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4">
                {useCase}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 bg-slate-900 text-white rounded-3xl p-8 md:p-10 shadow-lg animate-slide-up">
          <p className="text-slate-300 font-semibold mb-2">Marketing Pitch</p>
          <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
            Promote enterprise-level control with a single Super Admin brain.
          </h3>
          <p className="text-slate-300 max-w-3xl leading-relaxed mb-7">
            Present this panel as the control tower for your software business. It helps you onboard more restaurants, standardize operations, and run a profitable multi-client platform with confidence.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-slate-900 font-bold hover:bg-slate-200 transition-all"
          >
            Get Source Code & Start Scaling <MdArrowForward />
          </Link>
        </div>
      </div>
    </div>
  );
}
