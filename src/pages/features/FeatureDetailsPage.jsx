import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import { featuresData } from '../../data/featuresData';
import FeatureCard from '../../components/FeatureCard';
import AppButton from '../../components/ui/AppButton';
import AppIcon from '../../components/ui/AppIcon';

import superAdminScreenshot13 from '../../assets/Super Admin/Screenshot_13.png';
import superAdminScreenshot2 from '../../assets/Super Admin/Screenshot_2.png';
import ownerScreenshot3 from '../../assets/Owner/Screenshot_3.png';
import ownerScreenshot13 from '../../assets/Owner/Screenshot_13.png';
import ownerScreenshot23 from '../../assets/Owner/Screenshot_23.png';
import userAppScreenshotSmartHeaderFeatures from '../../assets/User App/Screenshot_20260429_073539_SavoryOps.jpg';
import userAppScreenshotTableReservation from '../../assets/User App/Screenshot_20260429_073929_SavoryOps.jpg';
import ownerScreenshot14 from '../../assets/Owner/Screenshot_14.png';
import ownerScreenshot9 from '../../assets/Owner/Screenshot_9.png';
import ownerScreenshot6 from '../../assets/Owner/Screenshot_6.png';
import ownerScreenshot10 from '../../assets/Owner/Screenshot_10.png';
import ownerScreenshot12 from '../../assets/Owner/Screenshot_12.png';
import userAppScreenshotPostDiningFeatures from '../../assets/User App/Screenshot_20260429_073828_SavoryOps.jpg';
import ownerScreenshot22 from '../../assets/Owner/Screenshot_22.png';
import userAppScreenshotFinancialTransparency from '../../assets/User App/Screenshot_20260429_073734_SavoryOps.jpg';
import userAppScreenshotLanguageSupport from '../../assets/User App/Screenshot_20260429_073844_SavoryOps.jpg';
import ownerScreenshot25 from '../../assets/Owner/Screenshot_25.png';
import orderScreenshotLiveStatus from '../../assets/Order/Screenshot_20260429_070103_SavoryOps.jpg';

const featureDocumentMeta = {
  'smart-pos': {
    image: orderScreenshotLiveStatus,
    imageAlt: 'Smart POS workflow with fast order lifecycle and payment visibility',
    highlights: [
      'Fast checkout flow supports high-order restaurant traffic.',
      'Status-driven order lifecycle keeps floor and kitchen synchronized.',
      'POS records are usable for reporting and operational reviews.'
    ]
  },
  'dynamic-dashboard': {
    image: superAdminScreenshot13,
    imageAlt: 'Dashboard metrics showing order, tax, and revenue insights',
    highlights: [
      'Real-time dashboard tracks revenue, tax, and order activity.',
      'Graph-based visibility helps owners compare periods quickly.',
      'Running-order widgets improve live operational control.'
    ]
  },
  'multi-restaurant': {
    image: superAdminScreenshot2,
    imageAlt: 'Multi-restaurant management with centralized visibility',
    highlights: [
      'Supports multiple restaurant businesses in one ecosystem.',
      'Independent business identity and control are preserved.',
      'Centralized oversight is available for platform operators.'
    ]
  },
  'multi-branch-support': {
    image: ownerScreenshot3,
    imageAlt: 'Branch setup and operational schedule management',
    highlights: [
      'Branch-level configuration controls hours and operating status.',
      'Per-branch settings support local operational flexibility.',
      'Customers see branch-specific availability and timings.'
    ]
  },
  'live-analytics': {
    image: ownerScreenshot13,
    imageAlt: 'Live analytics dashboard with business KPIs',
    highlights: [
      'KPI dashboard exposes live order and earnings signals.',
      'Data is filterable by branch and fiscal period.',
      'Analytics supports quick owner decisions during service.'
    ]
  },
  'order-reports': {
    image: ownerScreenshot23,
    imageAlt: 'Order and revenue report table with filters and export',
    highlights: [
      'Order-level report views provide financial transparency.',
      'Branch/date filters support targeted business analysis.',
      'Report export enables accounting and audit workflows.'
    ]
  },
  'qr-based-menu': {
    image: userAppScreenshotSmartHeaderFeatures,
    imageAlt: 'QR scanner and branch selector in user app',
    highlights: [
      'Customers can scan table QR for instant table context.',
      'QR flow reduces ordering friction in dine-in scenarios.',
      'Branch-linked digital menus improve ordering accuracy.'
    ]
  },
  'table-reservation': {
    image: userAppScreenshotTableReservation,
    imageAlt: 'Reservation tracking with booking status and schedule',
    highlights: [
      'Supports both pick-spot and quick-seat booking patterns.',
      'Reservation status is visible for customer follow-up.',
      'Feature activation can be controlled at branch level.'
    ]
  },
  'kot-feature': {
    image: ownerScreenshot14,
    imageAlt: 'Kitchen ticket tracking and KOT monitoring interface',
    highlights: [
      'KOT workflow connects order intake to kitchen execution.',
      'Ticket states help teams track preparation progress.',
      'Owner-side logs provide full kitchen visibility.'
    ]
  },
  'combo-meals': {
    image: ownerScreenshot9,
    imageAlt: 'Deals and bundles for combo meal configuration',
    highlights: [
      'Bundles group related items for better upsell.',
      'Combo setup supports structured offer creation.',
      'Availability rules help control promotion timing.'
    ]
  },
  'addon-meals': {
    image: ownerScreenshot6,
    imageAlt: 'Add-on management with pricing controls',
    highlights: [
      'Add-ons extend base menu items with paid modifiers.',
      'Pricing per add-on keeps customization transparent.',
      'Structured add-ons improve order clarity for kitchen teams.'
    ]
  },
  'branch-pricing': {
    image: ownerScreenshot10,
    imageAlt: 'Menu item management with branch-wise controls',
    highlights: [
      'Same item can have different prices by branch.',
      'Supports localized pricing strategy per location.',
      'Central item definitions stay aligned across branches.'
    ]
  },
  'staff-scheduling': {
    image: ownerScreenshot12,
    imageAlt: 'Employee role and branch assignment management',
    highlights: [
      'Owners assign employees by role and branch.',
      'Access is automatically gated based on assigned role.',
      'Workforce visibility improves operational planning.'
    ]
  },
  'digital-invoice': {
    image: userAppScreenshotPostDiningFeatures,
    imageAlt: 'Post-order invoice and customer actions',
    highlights: [
      'Customers can download invoices after payment completion.',
      'Digital invoice flow reduces dependence on paper slips.',
      'Invoice access improves post-order transparency.'
    ]
  },
  'fiscal-year-reports': {
    image: ownerScreenshot22,
    imageAlt: 'Fiscal year setup and period management',
    highlights: [
      'Business reports align with custom fiscal year windows.',
      'Owners can manage fiscal periods from panel settings.',
      'Year transitions are structured for continuity.'
    ]
  },
  'multi-currency': {
    image: userAppScreenshotFinancialTransparency,
    imageAlt: 'Bill breakdown with currency-aware totals',
    highlights: [
      'Price display adapts to configured branch currency.',
      'Tax and total are shown with localized currency context.',
      'Supports globally deployable pricing experiences.'
    ]
  },
  'multi-language': {
    image: userAppScreenshotLanguageSupport,
    imageAlt: 'Language selection with multiple supported languages',
    highlights: [
      'Users can switch app language from settings.',
      'Multilingual support improves customer comfort and reach.',
      'Language preference is available as personalization control.'
    ]
  },
  'customer-reviews': {
    image: ownerScreenshot25,
    imageAlt: 'Customer review management and branch feedback visibility',
    highlights: [
      'Review workflows collect post-order customer feedback.',
      'Owners can monitor branch-wise review quality.',
      'Feedback visibility supports continuous service improvement.'
    ]
  }
};

export default function FeatureDetailsPage({ slug }) {
  const feature = featuresData.find((item) => item.slug === slug);

  if (!feature) {
    return null;
  }

  const docMeta = featureDocumentMeta[slug];
  const otherFeatures = featuresData.filter((item) => item.slug !== feature.slug).slice(0, 3);

  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>{`${feature.title} | SavoryOps`}</title>
        <meta name="description" content={feature.desc} />
      </Helmet>

      <div className="relative pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden">
        <div className={`absolute top-0 right-0 w-[800px] h-[800px] rounded-full blur-[100px] opacity-20 -z-10 translate-x-1/3 -translate-y-1/3 ${feature.color.split(' ')[0]}`}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
            <div className="text-center lg:text-left animate-slide-up">
              <Link to="/features" className="inline-flex items-center gap-2 text-slate-500 font-medium hover:text-primary-600 transition-colors mb-8 group">
                <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                Back to All Features
              </Link>

              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-5 mb-8">
                <div className={`flex-shrink-0 inline-flex items-center justify-center w-20 h-20 rounded-[1.25rem] shadow-sm text-4xl ${feature.color}`}>
                  {feature.icon}
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
                  {feature.seoHeading}
                </h1>
              </div>

              <p className="text-xl text-slate-500 mb-12 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {feature.longDesc}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <AppButton
                  href={import.meta.env.VITE_LANDING_PAGE_DEMO}
                  className="sm:!w-auto !w-full !py-3.5 shadow-lg shadow-primary-500/20"
                  endIcon={<ArrowForwardRoundedIcon />}
                >
                  View Demo
                </AppButton>
                <AppButton
                  href={import.meta.env.VITE_BUY_NOW}
                  variant="outlined"
                  color="secondary"
                  className="sm:!w-auto !w-full !py-3.5"
                  endIcon={<ShoppingCartRoundedIcon />}
                >
                  Buy Now
                </AppButton>
              </div>
            </div>

            <div className="w-full max-w-lg mx-auto lg:max-w-none bg-[#f8f9fa] border border-slate-100 rounded-[2.5rem] p-5 shadow-card animate-slide-up" style={{ animationDelay: '100ms' }}>
              {docMeta?.image ? (
                <img
                  src={docMeta.image}
                  alt={docMeta.imageAlt}
                  className="w-full h-auto object-cover rounded-[1.5rem] border border-slate-200 shadow-sm"
                  loading="lazy"
                />
              ) : (
                <div className="h-[320px] rounded-[1.5rem] bg-white border border-slate-200 flex items-center justify-center text-slate-500">
                  Screenshot coming soon
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 lg:py-24 bg-[#f8f9fa] border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <div className="text-center max-w-3xl mb-16 animate-slide-up">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Documentation Highlights</h2>
            <p className="text-lg text-slate-500">Feature content and visual context aligned with the documentation references.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl mx-auto">
            {(docMeta?.highlights || feature.benefits).map((point, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow animate-slide-up" style={{ animationDelay: `${idx * 50}ms` }}>
                <AppIcon tone="success" className="!rounded-full !w-8 !h-8 !text-emerald-700 !bg-emerald-100 mt-1 flex-shrink-0">
                  <CheckRoundedIcon />
                </AppIcon>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1 leading-snug">{point}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="text-primary-500 font-bold tracking-wide uppercase text-sm mb-2">Ecosystem</h2>
              <h3 className="text-3xl font-extrabold text-slate-900 tracking-tight">Explore More Features</h3>
            </div>
            <AppButton to="/features" variant="outlined" color="secondary" endIcon={<ArrowForwardRoundedIcon />}>
              View Directory
            </AppButton>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {otherFeatures.map((item, idx) => (
              <div key={item.slug} className="animate-slide-up" style={{ animationDelay: `${(idx % 3) * 100}ms` }}>
                <FeatureCard feature={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
