import { Helmet } from 'react-helmet-async';
import { featuresData } from '../data/featuresData';
import FeatureCard from '../components/FeatureCard';

export default function Features() {

  return (
    <div className="bg-[#f8f9fa] pt-0 pb-20 sm:pb-24 min-h-screen relative overflow-hidden">
      <Helmet>
        <title>Core Features | SavoryOps Restaurant Management System</title>
        <meta name="description" content="Explore our complete suite of restaurant management tools: Real-time inventory sync, lightning-fast POS, live analytics, online delivery, and kitchen routing." />
        <meta name="keywords" content="Restaurant Analytics, Point of Sale, Restaurant Inventory Tracking, Online Ordering App, Employee Scheduling System" />
      </Helmet>

      {/* Background blobs for contrast */}
      <div className="absolute top-0 right-0 w-full h-[600px] bg-white -z-20 border-b border-slate-100"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 mb-24 lg:mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Left Content Area */}
          <div className="text-center lg:text-left flex flex-col justify-center animate-slide-up pr-0 lg:pr-8">
            <h1 className="text-5xl md:text-6xl lg:text-[76px] font-extrabold tracking-tight text-slate-900 leading-[1.05] mb-6">
              The <br className="hidden lg:block" />
              <span className="text-primary-600">Restaurant App</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-500 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium mb-10">
              SavoryOps provides a complete suite of restaurant management tools to help owners streamline every operation, automate ordering, and boost revenue effortlessly.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 lg:mb-0">
              <a href={import.meta.env.VITE_LANDING_PAGE_DEMO} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary-600 hover:bg-primary-700 text-white font-bold text-base shadow-lg shadow-primary-500/20 transition-all hover:-translate-y-0.5 w-full sm:w-auto">
                View Demo
                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
              </a>
              <a href={import.meta.env.VITE_BUY_NOW} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-transparent hover:bg-slate-50 text-slate-700 font-bold text-base border border-slate-300 shadow-sm transition-all hover:-translate-y-0.5 w-full sm:w-auto">
                Buy Now
                <svg className="w-5 h-5 flex-shrink-0 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
              </a>
            </div>
          </div>

          {/* Right Visual Area (Simulated Overlapping App Cards) */}
          <div className="relative w-full h-[500px] lg:h-[600px] flex items-center justify-center animate-slide-up" style={{ animationDelay: '200ms' }}>
            {/* The soft purple/indigo block background from the screenshot */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[90%] h-[75%] bg-[#e0e1fe] rounded-3xl -z-10 shadow-inner"></div>

            {/* Pattern Dots */}
            <div className="absolute right-6 bottom-10 grid grid-cols-4 gap-3 opacity-30">
              {[...Array(16)].map((_, i) => (
                <div key={i} className="w-3 h-1 bg-[#4d51d8] rounded-full rotate-45"></div>
              ))}
            </div>

            {/* Simulated mockups floating over the background block */}
            <div className="relative w-full max-w-md mx-auto z-10">
              {/* Back Mockup */}
              <div className="absolute left-[-5%] lg:-left-12 -top-24 md:-top-16 w-3/4 max-w-[280px] rounded-[1.5rem] bg-white shadow-2xl shadow-indigo-900/10 border border-slate-100 overflow-hidden z-10 pointer-events-none">
                <img src="/assets/super_admin_ui.png" alt="SavoryOps Dashboard Features" className="w-[120%] h-auto object-cover opacity-95" />
              </div>

              {/* Front Mockup */}
              <div className="relative left-16 lg:left-24 top-16 md:top-24 w-[85%] max-w-[320px] rounded-[1.5rem] bg-white shadow-2xl shadow-indigo-900/20 border border-slate-100 overflow-hidden z-20 pointer-events-none">
                <img src="/assets/user_app_ui.png" alt="SavoryOps Customer App Detail" className="w-[120%] h-auto object-cover" />
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuresData.map((feature, idx) => (
              <div key={feature.title} className="animate-slide-up" style={{ animationDelay: `${(idx % 3) * 100}ms` }}>
                <FeatureCard feature={feature} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}