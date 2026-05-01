import { Helmet } from 'react-helmet-async';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import TranslateRoundedIcon from '@mui/icons-material/TranslateRounded';
import AppButton from '../components/ui/AppButton';
import AppIcon from '../components/ui/AppIcon';
import userAppScreenshotBusinessBranchExploration from '../assets/User App/Screenshot_20260429_073454_SavoryOps.jpg';
import userAppScreenshotSmartHeaderFeatures from '../assets/User App/Screenshot_20260429_073539_SavoryOps.jpg';
import userAppScreenshotRichCategories from '../assets/User App/Screenshot_20260429_073657_SavoryOps.jpg';
import userAppScreenshotCartManagement from '../assets/User App/Screenshot_20260429_073723_SavoryOps.jpg';
import userAppScreenshotLiveTracking from '../assets/User App/Screenshot_20260429_073800_SavoryOps.jpg';
import userAppScreenshotPostDiningFeatures from '../assets/User App/Screenshot_20260429_073828_SavoryOps.jpg';
import userAppScreenshotLanguageSupport from '../assets/User App/Screenshot_20260429_073844_SavoryOps.jpg';
import userAppScreenshotTableReservation from '../assets/User App/Screenshot_20260429_073929_SavoryOps.jpg';

export default function UserApp() {
  const buyNowUrl = import.meta.env.VITE_BUY_NOW?.trim() || '';
  const buyNowIsExternal = buyNowUrl.startsWith('http');

  const coreHighlights = [
    'Customers can browse business brands and branch options before ordering.',
    'Header tools include branch selector and QR scanner for instant table sync.',
    'Category-based digital menus support add-ons, combos, and transparent pricing.',
    'Live order tracking and post-payment invoice/review actions are built in.',
    'Language and localization settings support global customer usage.'
  ];

  const screenshotGrid = [
    {
      src: userAppScreenshotBusinessBranchExploration,
      alt: 'User app business and branch exploration screen'
    },
    {
      src: userAppScreenshotSmartHeaderFeatures,
      alt: 'User app header with branch selector and QR scanner'
    },
    {
      src: userAppScreenshotRichCategories,
      alt: 'User app categorized digital menu experience'
    },
    {
      src: userAppScreenshotCartManagement,
      alt: 'User app cart with add-ons and special instructions'
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>User App | SavoryOps</title>
        <meta
          name="description"
          content="SavoryOps User App detail page covering discovery, QR ordering, digital cart, tracking, table reservation, and multilingual personalization."
        />
      </Helmet>

      <div className="relative pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full blur-[100px] opacity-20 -z-10 translate-x-1/3 -translate-y-1/3 bg-indigo-100"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-10 items-center">
            <div className="text-center lg:text-left animate-slide-up">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
                User App Details
              </h1>
              <p className="text-xl text-slate-500 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                The SavoryOps User App gives customers complete control over discovery, ordering, reservation, tracking, and post-dining actions from one mobile experience.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {coreHighlights.map((item, idx) => (
                  <div key={idx} className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-left flex items-start gap-3">
                    <AppIcon tone="success" className="!rounded-full !w-7 !h-7 !text-emerald-700 !bg-emerald-100 mt-0.5 flex-shrink-0">
                      <CheckRoundedIcon fontSize="small" />
                    </AppIcon>
                    <p className="text-sm font-semibold text-slate-700">{item}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <AppButton
                  href={import.meta.env.VITE_USER_APP_DEMO}
                  className="sm:!w-auto !w-full !py-3.5 shadow-lg shadow-primary-500/20"
                  endIcon={<ArrowForwardRoundedIcon />}
                >
                  Live Demo
                </AppButton>
                {buyNowIsExternal ? (
                  <AppButton href={buyNowUrl} variant="outlined" color="secondary" className="sm:!w-auto !w-full !py-3.5">
                    Buy now
                  </AppButton>
                ) : (
                  <AppButton to={buyNowUrl || '/contact'} variant="outlined" color="secondary" className="sm:!w-auto !w-full !py-3.5">
                    Buy now
                  </AppButton>
                )}
              </div>
            </div>

            <div className="w-full bg-[#f8f9fa] border border-slate-100 rounded-[2rem] p-5 shadow-card animate-slide-up" style={{ animationDelay: '120ms' }}>
              <img
                src={userAppScreenshotLiveTracking}
                alt="User app live tracking timeline and order details"
                className="w-full h-auto object-cover rounded-2xl border border-slate-200"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 bg-[#f8f9fa] border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">Customer Journey Screens</h2>
            <p className="text-slate-600 mb-6">
              These screens represent core journey points from the documentation: discovery, QR-enabled entry, menu browsing, and checkout control.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {screenshotGrid.map((item) => (
                <img
                  key={item.src}
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-auto object-cover rounded-2xl border border-slate-200"
                  loading="lazy"
                />
              ))}
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <AppIcon tone="brand">
                <TranslateRoundedIcon />
              </AppIcon>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">Reservation, Reviews & Personalization</h2>
            </div>
            <p className="text-slate-600 mb-6">
              The app also supports table reservation tracking, post-order invoice and review actions, and multilingual personalization with localization controls.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <img
                src={userAppScreenshotTableReservation}
                alt="User app reservation status and booking details"
                className="w-full h-auto object-cover rounded-2xl border border-slate-200"
                loading="lazy"
              />
              <img
                src={userAppScreenshotPostDiningFeatures}
                alt="User app post dining invoice and review actions"
                className="w-full h-auto object-cover rounded-2xl border border-slate-200"
                loading="lazy"
              />
              <img
                src={userAppScreenshotLanguageSupport}
                alt="User app language settings with supported language list"
                className="w-full h-auto object-cover rounded-2xl border border-slate-200"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
