import { useEffect } from 'react';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import { featuresData } from '../../data/featuresData';
import { getSmartPosStaticHead } from '../../data/smartPosSeo';
import FeatureCard from '../../components/FeatureCard';
import AppButton from '../../components/ui/AppButton';
import AppIcon from '../../components/ui/AppIcon';

export default function SmartPos() {
  const feature = featuresData.find(f => f.slug === 'smart-pos');

  // Get 3 other random features for the "Explore More" section
  const otherFeatures = featuresData.filter(f => f.slug !== feature.slug).slice(0, 3);

  // Head strings come from src/data/smartPosSeo.js (same source as prerender / Vite plugin)
  useEffect(() => {
    window.scrollTo(0, 0);

    const head = getSmartPosStaticHead();
    document.title = head.documentTitle;

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', head.description);

    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', head.keywords);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', head.ogTitle);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', head.ogDescription);

    const ogUrlEl = document.querySelector('meta[property="og:url"]');
    if (ogUrlEl) ogUrlEl.setAttribute('content', head.ogUrl);

    const twTitle = document.querySelector('meta[name="twitter:title"]');
    if (twTitle) twTitle.setAttribute('content', head.ogTitle);

    const twDesc = document.querySelector('meta[name="twitter:description"]');
    if (twDesc) twDesc.setAttribute('content', head.ogDescription);
  }, []);

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative pt-6 pb-20 lg:pt-12 lg:pb-28 overflow-hidden">
        <div className={`absolute top-0 right-0 w-[800px] h-[800px] rounded-full blur-[100px] opacity-20 -z-10 translate-x-1/3 -translate-y-1/3 ${feature.color.split(' ')[0]}`}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">

            {/* Left Column: Text Content */}
            <div className="text-center lg:text-left animate-slide-up">

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

            {/* Right Column: Abstract Feature UI Graphic */}
            <div className="w-full max-w-lg mx-auto lg:max-w-none bg-[#f8f9fa] border border-slate-100 rounded-[2.5rem] p-10 shadow-card flex items-center justify-center relative overflow-hidden h-[400px] lg:h-[500px] animate-slide-up" style={{ animationDelay: '100ms' }}>
              <div className={`absolute -left-10 -bottom-10 text-[220px] opacity-[0.03] -rotate-12 ${feature.color.split(' ')[1]}`}>
                {feature.icon}
              </div>

              {/* Premium abstract software UI layered graphics */}
              <div className="absolute inset-0 flex flex-col items-center justify-center z-10 w-full h-full p-10 pointer-events-none">
                <div className="w-full max-w-[320px] bg-white rounded-[2rem] p-8 shadow-2xl border border-slate-100/60 backdrop-blur-md -rotate-2 hover:-rotate-1 transition-transform duration-700">
                  <div className="flex justify-between items-center mb-8">
                    <div className="flex gap-2.5">
                      <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                      <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                      <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                    </div>
                    <div className={`w-12 h-12 rounded-[1rem] flex items-center justify-center text-xl shadow-sm ${feature.color}`}>
                      {feature.icon}
                    </div>
                  </div>
                  <div className="space-y-5">
                    <div className="h-4 bg-slate-100 rounded-full w-3/4"></div>
                    <div className="h-4 bg-slate-100 rounded-full w-full"></div>
                    <div className="h-4 bg-slate-100 rounded-full w-5/6"></div>
                    <div className="h-24 bg-slate-50 rounded-2xl w-full mt-8 border border-slate-100/50"></div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Feature Deep Dive & Benefits Section */}
      <div className="py-20 lg:py-24 bg-[#f8f9fa] border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <div className="text-center max-w-3xl mb-16 animate-slide-up">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Core Benefits of {feature.title}</h2>
            <p className="text-lg text-slate-500">Why thousands of restaurant operations depend entirely on our {feature.title.toLowerCase()} infrastructure globally.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl mx-auto">
            {feature.benefits.map((benefit, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow animate-slide-up" style={{ animationDelay: `${idx * 50}ms` }}>
                <AppIcon tone="success" className="!rounded-full !w-8 !h-8 !text-emerald-700 !bg-emerald-100 mt-1 flex-shrink-0">
                  <CheckRoundedIcon />
                </AppIcon>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1 leading-snug">{benefit}</h4>
                  <p className="text-sm text-slate-500">Instantly unlocked the absolute moment you purchase and deploy the SavoryOps ecosystem locally.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Cross-Sell & Explore Features */}
      <div className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="text-primary-500 font-bold tracking-wide uppercase text-sm mb-2">Ecosystem Ecosystem</h2>
              <h3 className="text-3xl font-extrabold text-slate-900 tracking-tight">Explore More Features</h3>
            </div>
            <AppButton to="/features" variant="outlined" color="secondary" endIcon={<ArrowForwardRoundedIcon />}>
              View Directory
            </AppButton>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {otherFeatures.map((f, idx) => (
              <div key={f.slug} className="animate-slide-up" style={{ animationDelay: `${(idx % 3) * 100}ms` }}>
                <FeatureCard feature={f} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}