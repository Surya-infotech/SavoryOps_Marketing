import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { featuresData } from '../../data/featuresData';
import FeatureCard from '../../components/FeatureCard';

export default function MultiCurrency() {
  const feature = featuresData.find(f => f.slug === 'multi-currency');

  // Get 3 other random features for the "Explore More" section
  const otherFeatures = featuresData.filter(f => f.slug !== feature.slug).slice(0, 3);

  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>{`${feature.title} | SavoryOps`}</title>
        <meta name="description" content={feature.desc} />
      </Helmet>

      {/* Hero Section */}
      <div className="relative pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden">
        <div className={`absolute top-0 right-0 w-[800px] h-[800px] rounded-full blur-[100px] opacity-20 -z-10 translate-x-1/3 -translate-y-1/3 ${feature.color.split(' ')[0]}`}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
            
            {/* Left Column: Text Content */}
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
                <div className={`mt-1 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white ${feature.color.split(' ')[0].replace('50', '500')}`}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                </div>
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
            <Link to="/features" className="inline-flex items-center gap-2 px-6 py-3 bg-slate-50 hover:bg-slate-100 text-slate-700 font-bold rounded-xl transition-colors border border-slate-200">
              View Directory
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </Link>
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
