import { Helmet } from 'react-helmet-async';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import AppButton from '../components/ui/AppButton';
import AppIcon from '../components/ui/AppIcon';
import landingPagePricingPlansScreenshot from '../assets/Landing Page/Screenshot_1.png';
import landingPageContactUsScreenshot from '../assets/Landing Page/Screenshot_2.png';
import landingPageLanguageSupportScreenshot from '../assets/Landing Page/Screenshot_3.png';

export default function LandingPage() {
  const buyNowUrl = import.meta.env.VITE_BUY_NOW?.trim() || '';
  const buyNowIsExternal = buyNowUrl.startsWith('http');

  const highlights = [
    'Fully dynamic branding from Super Admin settings (name, colors, logos, favicon).',
    'Pricing cards display paid and free plans directly from platform configuration.',
    'Contact form sends leads to Super Admin for follow-up.',
    'Supports 8 languages with default-language behavior for first-time visitors.'
  ];

  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>Custom Landing Page | SavoryOps</title>
        <meta
          name="description"
          content="SavoryOps Landing Page with dynamic branding, pricing plans, lead capture, multilingual support, and owner onboarding access."
        />
      </Helmet>

      <div className="relative pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full blur-[100px] opacity-20 -z-10 translate-x-1/3 -translate-y-1/3 bg-primary-100"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-10 items-center">
            <div className="text-center lg:text-left animate-slide-up">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
                Landing Page Details
              </h1>
              <p className="text-xl text-slate-500 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                The SavoryOps Landing Page is the main growth and access gateway for the platform, combining branding control, conversion content, and onboarding entry points in one experience.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {highlights.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-left flex items-start gap-3"
                  >
                    <AppIcon tone="success" className="!rounded-full !w-7 !h-7 !text-emerald-700 !bg-emerald-100 mt-0.5 flex-shrink-0">
                      <CheckRoundedIcon fontSize="small" />
                    </AppIcon>
                    <p className="text-sm font-semibold text-slate-700">{item}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <AppButton
                  href={import.meta.env.VITE_LANDING_PAGE_DEMO}
                  className="sm:!w-auto !w-full !py-3.5 shadow-lg shadow-primary-500/20"
                  endIcon={<ArrowForwardRoundedIcon />}
                >
                  Live Demo
                </AppButton>
                {buyNowIsExternal ? (
                  <AppButton
                    href={buyNowUrl}
                    variant="outlined"
                    color="secondary"
                    className="sm:!w-auto !w-full !py-3.5"
                  >
                    Buy now
                  </AppButton>
                ) : (
                  <AppButton
                    to={buyNowUrl || '/contact'}
                    variant="outlined"
                    color="secondary"
                    className="sm:!w-auto !w-full !py-3.5"
                  >
                    Buy now
                  </AppButton>
                )}
              </div>
            </div>

            <div className="w-full bg-[#f8f9fa] border border-slate-100 rounded-[2rem] p-5 shadow-card animate-slide-up" style={{ animationDelay: '120ms' }}>
              <img
                src={landingPagePricingPlansScreenshot}
                alt="Landing page pricing section with paid and free plan cards"
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
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">Core Functional Sections</h2>
            <p className="text-slate-600 mb-6">
              Pricing and lead-capture areas are designed to convert visitors into platform owners while preserving clear plan comparison and direct contact intake.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <img
                src={landingPagePricingPlansScreenshot}
                alt="Pricing and plans on landing page"
                className="w-full h-auto object-cover rounded-2xl border border-slate-200"
                loading="lazy"
              />
              <img
                src={landingPageContactUsScreenshot}
                alt="Contact us section with lead capture form"
                className="w-full h-auto object-cover rounded-2xl border border-slate-200"
                loading="lazy"
              />
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <AppIcon tone="brand">
                <LanguageRoundedIcon />
              </AppIcon>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">Language Support & Localization</h2>
            </div>
            <p className="text-slate-600 mb-6">
              The landing page supports 8 languages, and default language behavior is controlled by Super Admin settings for first-time visitors.
            </p>
            <img
              src={landingPageLanguageSupportScreenshot}
              alt="Language support configuration for default landing page localization"
              className="w-full max-w-4xl h-auto object-cover rounded-2xl border border-slate-200"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
