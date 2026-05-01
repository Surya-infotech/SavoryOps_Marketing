import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { MdStorefront, MdArrowForward } from 'react-icons/md';
import ownerDashboardImg from '../assets/Owner/Screenshot_1.png';
import ownerOpsImg from '../assets/Owner/Screenshot_7.png';
import ownerReportImg from '../assets/Owner/Screenshot_14.png';
import ownerBranchImg from '../assets/Owner/Screenshot_20.png';

export default function OwnerPanel() {
  const demoLink = import.meta.env.VITE_OWNER_PANEL_DEMO || '#';
  const buyNowLink = import.meta.env.VITE_BUY_NOW?.trim() || '/contact';
  const ownerCoreFeatures = [
    {
      title: 'Daily Operations Control',
      description: 'Track orders, kitchen updates, and ongoing service status in one place.',
    },
    {
      title: 'Branch Performance Tracking',
      description: 'Compare branch-level sales and identify high-performing locations quickly.',
    },
    {
      title: 'Staff & Shift Visibility',
      description: 'Monitor attendance, shift status, and workforce productivity effortlessly.',
    },
    {
      title: 'Revenue Focused Reporting',
      description: 'Use real-time reports to make faster pricing, menu, and campaign decisions.',
    },
  ];

  const ownerUseCases = [
    'Independent restaurant owners managing one or more outlets',
    'Franchise operators requiring centralized daily control',
    'Teams that need quick business decisions based on live data',
  ];
  const ownerShots = [
    { src: ownerOpsImg, alt: 'Owner panel operations dashboard' },
    { src: ownerReportImg, alt: 'Owner panel analytics and reports' },
    { src: ownerBranchImg, alt: 'Owner panel branch performance view' },
  ];
  const ownerKpis = [
    { value: '24/7', label: 'Business visibility for owners' },
    { value: 'Live', label: 'Order and sales monitoring' },
    { value: 'Multi-Branch', label: 'Centralized operational control' },
  ];

  return (
    <div className="marketing-shell min-h-screen pt-24 pb-20">
      <Helmet>
        <title>Owner Panel | SavoryOps</title>
      </Helmet>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="premium-card p-8 md:p-12 animate-slide-up overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="text-center lg:text-left">
              <div className="w-20 h-20 bg-primary-50 text-primary-500 rounded-3xl flex items-center justify-center text-5xl mx-auto lg:mx-0 mb-6 shadow-sm">
             <MdStorefront />
              </div>

              <p className="section-chip mb-4">Owner Dashboard</p>
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-5 tracking-tight">
                Scale Every Restaurant With a
                {' '}
                <span className="gradient-title">Smart Owner Panel</span>
              </h1>
              <p className="text-lg text-slate-500 mb-8 leading-relaxed font-medium">
                Built for restaurant decision-makers who need speed and clarity. Control daily operations, monitor team execution, and scale profit with actionable, real-time intelligence.
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
              <div className="absolute -top-10 -right-10 w-44 h-44 bg-primary-100 rounded-full blur-3xl opacity-70"></div>
              <img
                src={ownerDashboardImg}
                alt="SavoryOps owner panel main dashboard"
                className="relative z-10 rounded-3xl border border-slate-200 shadow-2xl shadow-primary-900/10 w-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
          {ownerKpis.map((item) => (
            <div key={item.label} className="premium-card px-6 py-5 rounded-2xl">
              <p className="text-2xl font-extrabold text-slate-900">{item.value}</p>
              <p className="text-slate-500 text-sm mt-1 font-medium">{item.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {ownerCoreFeatures.map((item, idx) => (
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
          <p className="text-xs font-bold tracking-[0.16em] uppercase text-primary-600 mb-3">Owner Panel Preview</p>
          <h3 className="text-3xl font-extrabold text-slate-900 mb-6 tracking-tight">Real product screenshots to build buyer trust.</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {ownerShots.map((shot) => (
              <div key={shot.alt} className="rounded-2xl border border-slate-200 overflow-hidden bg-slate-50">
                <img src={shot.src} alt={shot.alt} className="w-full h-52 object-cover" />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 bg-white border border-slate-200 rounded-3xl p-8 md:p-10 shadow-soft animate-slide-up">
          <p className="text-xs font-bold tracking-[0.16em] uppercase text-primary-600 mb-3">Who Should Use Owner Panel</p>
          <h3 className="text-3xl font-extrabold text-slate-900 mb-5 tracking-tight">Perfect for owners focused on growth and control.</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-600 font-medium">
            {ownerUseCases.map((useCase) => (
              <li key={useCase} className="bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4">
                {useCase}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 bg-primary-600 text-white rounded-3xl p-8 md:p-10 shadow-lg shadow-primary-500/20 animate-slide-up">
          <p className="text-primary-100 font-semibold mb-2">Marketing Pitch</p>
          <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
            Sell an Owner-Focused SaaS experience your clients can trust.
          </h3>
          <p className="text-primary-100 max-w-3xl leading-relaxed mb-7">
            Position SavoryOps Owner Panel as the daily business cockpit for restaurant clients. It gives them confidence to run operations smoothly while increasing revenue through informed decisions.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-primary-600 font-bold hover:bg-slate-100 transition-all"
          >
            Start Selling This Solution <MdArrowForward />
          </Link>
        </div>
      </div>
    </div>
  );
}
