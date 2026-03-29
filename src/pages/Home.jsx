import { Link } from 'react-router-dom';
import { MdRestaurant, MdFastfood, MdTrendingUp, MdNotifications } from 'react-icons/md';
import logo from '../assets/logo.png';
import { featuresData } from '../data/featuresData';
import FeatureCard from '../components/FeatureCard';
import { faqs } from '../data/faqs';

export default function Home() {
  return (
    <div className="bg-[#f8f9fa] overflow-hidden min-h-screen">
      {/* Hero Section */}
      <div className="relative pt-12 pb-20 sm:pt-16 sm:pb-24 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-8">

        {/* Decorative Circle Background */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-50 rounded-full blur-[80px] -z-10 translate-x-1/3 -translate-y-1/4"></div>

        <div className="flex-1 text-center lg:text-left z-10 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 text-primary-600 text-sm font-semibold mb-6 border border-primary-100">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary-500"></span>
            </span>
            Source Code & White-Label Ready
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-6">
            Start your own <span className="text-primary-500">Restaurant SaaS</span> <br className="hidden lg:block" />
            business today.
          </h1>

          <p className="text-lg sm:text-xl text-slate-500 max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed">
            Purchase the complete SavoryOps platform. Rebrand it with your own logo, host it on your servers, and sell powerful restaurant software to local business owners.
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

        <div className="flex-1 w-full relative z-10 animate-slide-up">
          <div className="relative mx-auto w-full max-w-md lg:max-w-none lg:w-[110%] xl:w-[120%] h-[500px] flex items-center justify-center">

            {/* Main App Card */}
            <div className="absolute z-20 w-3/4 h-3/4 bg-white rounded-[2rem] shadow-soft border border-slate-200 p-6 flex flex-col animate-float">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center text-xl">
                    <MdRestaurant />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Table 4</h4>
                    <p className="text-xs text-slate-400">Order #3049</p>
                  </div>
                </div>
                <span className="font-bold text-primary-500">$45.00</span>
              </div>

              <div className="space-y-4">
                {[1, 2, 3].map(i => (
                  <div key={i} className="flex gap-4 items-center bg-slate-50 p-3 rounded-2xl">
                    <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-xl text-orange-500">
                      <MdFastfood />
                    </div>
                    <div className="flex-1">
                      <div className="h-2 w-24 bg-slate-200 rounded-full mb-2"></div>
                      <div className="h-2 w-16 bg-slate-200 rounded-full"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating Stats Card */}
            <div className="absolute z-30 -bottom-6 -left-6 bg-white rounded-2xl p-5 shadow-soft border border-slate-200 flex items-center gap-4 animate-float" style={{ animationDelay: '1s' }}>
              <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xl">
                <MdTrendingUp />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Daily Revenue</p>
                <p className="text-lg font-bold text-slate-900">$2,450.00</p>
              </div>
            </div>

            {/* Floating Notification */}
            <div className="absolute z-30 top-10 -right-6 bg-white rounded-2xl p-4 shadow-soft border border-slate-200 flex items-center gap-3 animate-float" style={{ animationDelay: '2s' }}>
              <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xl">
                <MdNotifications />
              </div>
              <div className="text-sm font-bold text-slate-900">New Order!</div>
            </div>

          </div>
        </div>
      </div>

      {/* Ecosystem Section (SavoryOps Native Theme) */}
      <div className="py-24 bg-white relative">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-4xl mx-auto mb-16 animate-slide-up">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-slate-900 text-white shadow-lg shadow-slate-900/20 mb-6 font-bold tracking-widest uppercase text-xs border border-slate-700/50">
              <svg className="w-4 h-4 text-primary-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path></svg>
              SavoryOps SaaS Products
            </div>
            <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.2]">
              One Powerful Ecosystem. <br className="hidden md:block" /> A Complete <span className="text-primary-500">White-Label Solution.</span>
            </h3>
            <p className="mt-6 text-slate-500 text-[15px] leading-[1.8] px-4 md:px-12 font-medium">
              Start your own restaurant tech company with our complete premium software suite. You will receive the <Link to="/super-admin" className="font-bold text-primary-600 hover:text-primary-500 transition-colors">Super Admin Panel</Link>, <Link to="/owner-panel" className="font-bold text-primary-600 hover:text-primary-500 transition-colors">Owner Dashboard</Link>, <Link to="/employee-app" className="font-bold text-primary-600 hover:text-primary-500 transition-colors">Employee App</Link>, <Link to="/user-app" className="font-bold text-primary-600 hover:text-primary-500 transition-colors">User App</Link>, and a <Link to="/landing-page" className="font-bold text-primary-600 hover:text-primary-500 transition-colors">Custom Website</Link>—all with complete source code access. Rebrand the ecosystem as your own and empower local restaurants under your own brand.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                label: 'LANDING PAGE',
                title: 'Custom Website',
                mockupImg: '/assets/landing_page_ui.png',
                widthClass: 'w-[95%] h-[260px]',
                delay: 0,
                demoLink: '/landing-page'
              },
              {
                label: 'SUPER ADMIN',
                title: 'Super Admin',
                mockupImg: '/assets/super_admin_ui.png',
                widthClass: 'w-[95%] h-[260px]',
                delay: 100,
                demoLink: '/super-admin'
              },
              {
                label: 'EMPLOYEE PANEL',
                title: 'Employee App',
                mockupImg: '/assets/employee_panel_ui.png',
                widthClass: 'w-[240px] h-[280px] mx-auto',
                yOffset: 'translate-y-12 translate-x-12',
                rounded: 'rounded-t-[2rem]',
                delay: 200,
                demoLink: '/employee-app'
              },
              {
                label: 'OWNER SPECIFIC WEBSITE',
                title: 'Owner Panel',
                mockupImg: '/assets/owner_panel_ui.png',
                widthClass: 'w-[95%] h-[260px]',
                delay: 300,
                demoLink: '/owner-panel'
              },
              {
                fullWidth: true,
                label: 'USER SPECIFIC APP',
                title: 'User App',
                mockupImg: '/assets/user_app_ui.png',
                widthClass: 'w-full max-w-[600px] h-[260px]',
                offsetClass: 'translate-x-12 translate-y-12',
                delay: 400,
                demoLink: '/user-app'
              }
            ].map((product, i) => (
              <div key={i} className={`bg-[#f8f9fa] border border-slate-100 shadow-sm rounded-[1.5rem] overflow-hidden relative flex flex-col md:flex-row items-center gap-0 lg:gap-8 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 animate-slide-up ${product.fullWidth ? 'lg:col-span-2' : ''}`} style={{ animationDelay: `${product.delay}ms` }}>

                {/* Left Content */}
                <div className="flex-1 w-full text-left relative z-20 p-8 md:p-8 lg:p-10 md:pr-0">
                  <p className="text-[10px] font-bold text-primary-500 uppercase tracking-widest mb-1.5">{product.label}</p>
                  <div className="text-2xl font-black text-slate-900 mb-4 flex items-center gap-2">
                    <img src={logo} className="h-5 w-auto object-contain" alt="SavoryOps Logo" />
                    <span className="tracking-tight text-lg">SavoryOps</span>
                  </div>
                  <h4 className="text-[26px] lg:text-[30px] font-extrabold text-slate-900 mb-6 leading-[1.3] whitespace-pre-line">{product.title}</h4>
                  <Link to={product.demoLink} className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-primary-500 hover:bg-primary-600 text-white font-bold text-sm shadow-xl shadow-primary-500/20 hover:-translate-y-1 transition-all z-30 relative">
                    View Details
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </Link>
                </div>

                {/* Right Mockup */}
                <div className="flex-1 w-full relative z-10 flex justify-end items-end h-[260px] md:h-[280px]">
                  <img
                    src={product.mockupImg}
                    alt={product.title.replace('\n', ' ')}
                    className={`${product.widthClass} ${product.offsetClass || 'translate-x-8 translate-y-8'} ${product.rounded || 'rounded-tl-[1rem]'} shadow-2xl border-t border-l border-slate-200 object-cover absolute bottom-0 right-0`}
                  />
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Go Live Timeline Section */}
      <div className="py-24 bg-white relative border-t border-slate-200 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-slate-50 rounded-full blur-[80px] -z-10 translate-x-1/2 -translate-y-1/2"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20 animate-slide-up">
            <h2 className="text-primary-500 font-bold tracking-wide uppercase text-sm mb-3">Implementation Roadmap</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.2]">
              Go Live Faster Than You Think
            </h3>
            <p className="mt-6 text-slate-500 text-lg">
              Launch your own white-label restaurant SaaS in just a few simple steps.
            </p>
          </div>

          <div className="max-w-5xl mx-auto relative animate-slide-up mb-12">
            <div className="bg-[#f2fbf5] border-2 border-white rounded-[2rem] shadow-sm p-8 md:p-14 flex flex-col md:flex-row items-center gap-12">

              {/* Left Column: Steps */}
              <div className="flex-1 w-full relative pl-2 md:pl-0">
                {/* The enclosing box and arrow */}
                <div className="absolute inset-y-[-24px] -inset-x-8 border border-dashed border-[#bbf7d0] rounded-xl pointer-events-none hidden md:block"></div>
                <div className="absolute right-[-48px] top-1/2 -translate-y-1/2 flex items-center hidden md:flex pointer-events-none text-[#bbf7d0]">
                  <div className="w-4 border-t border-dashed border-[#bbf7d0]"></div>
                  <svg className="w-5 h-5 -ml-1 text-[#bbf7d0]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </div>

                <div className="relative">
                  {/* Vertical dashed timeline */}
                  <div className="absolute left-[11.5px] top-4 bottom-4 w-px border-l border-dashed border-[#bbf7d0]"></div>

                  <div className="space-y-6 relative z-10">
                    {[
                      { title: 'Install & Setup', desc: 'Install and configure your system in under an hour.' },
                      { title: 'Branding & Domain Setup', desc: 'Apply your logo, colors, and connect your domain.' },
                      { title: 'Payment Gateway Integration', desc: 'Enable secure online payments for subscriptions & bookings.' },
                      { title: 'Subscription Plans & Pricing', desc: 'Create plans that match your revenue goals.' },
                      { title: 'Vendor Onboarding', desc: 'Add restaurants and activate their websites instantly.' },
                      { title: 'Final Review & Launch', desc: 'Test and go live with confidence.' }
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4">
                        {/* Checkmark Icon */}
                        <div className="bg-transparent z-10 flex-shrink-0 w-[24px] h-[24px] flex items-center justify-center mt-0.5 relative">
                          {/* bg block behind the circle to break the vertical line */}
                          <div className="absolute inset-0 bg-[#f2fbf5] rounded-full scale-[1.2]"></div>
                          <div className="relative w-[20px] h-[20px] rounded-full border-2 border-primary-500 flex items-center justify-center text-primary-500 bg-white">
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                          </div>
                        </div>
                        <div className="pb-1">
                          <h4 className="text-[15px] font-bold text-slate-900 mb-0.5 leading-tight">{item.title}</h4>
                          <p className="text-[13px] text-slate-500 font-medium">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Estimated Time */}
              <div className="flex-[0.8] w-full text-center flex flex-col items-center justify-center pl-0 md:pl-12">
                <div className="text-primary-600 mb-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <h4 className="text-[15px] font-bold text-slate-900 mb-1">Estimated Go-Live Time:</h4>
                <div className="text-3xl md:text-4xl font-semibold text-primary-600 mb-1 tracking-tight">1-3 Days</div>
                <p className="text-slate-500 text-[13px] font-medium">(Depending on customization)</p>
              </div>

            </div>
          </div>

          <div className="text-center animate-slide-up">
            <a href={import.meta.env.VITE_LANDING_PAGE_DEMO} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary-600 hover:bg-primary-700 text-white font-bold text-base shadow-lg shadow-primary-500/20 transition-all hover:-translate-y-0.5 w-full sm:w-auto">
              View Demo
              <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            </a>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-20 bg-[#f8f9fa] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-primary-500 font-bold tracking-wide uppercase text-sm mb-2">Capabilities</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900">Why Choose SavoryOps?</h3>
            <p className="mt-4 text-slate-500 text-lg">We provide an unmatched suite of tools to fully automate every dining flow.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuresData.map((service, i) => (
              <div key={service.title} className="animate-slide-up" style={{ animationDelay: `${(i % 3) * 100}ms` }}>
                <FeatureCard feature={service} />
              </div>
            ))}
          </div>

          <div className="mt-12 text-center animate-slide-up" style={{ animationDelay: '100ms' }}>
            <Link to="/features" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white hover:bg-slate-50 text-slate-800 font-bold text-[15px] shadow-sm border border-slate-200 transition-all hover:-translate-y-0.5">
              View All Features
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </Link>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-primary-500 font-bold tracking-wide uppercase text-sm mb-2">FAQs</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900">Frequently Asked Questions</h3>
            <p className="mt-4 text-slate-500 text-lg">Everything you need to know about SavoryOps.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.slice(0, 6).map((faq, i) => (
              <div key={i} className="bg-[#f8f9fa] p-8 rounded-[2rem] border border-slate-200 hover:shadow-soft transition-shadow duration-300">
                <h4 className="text-xl font-bold text-slate-900 mb-4">{faq.q}</h4>
                <p className="text-slate-500 leading-relaxed text-[15px]">{faq.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center animate-slide-up" style={{ animationDelay: '100ms' }}>
            <Link to="/faqs" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white hover:bg-slate-50 text-slate-800 font-bold text-[15px] shadow-sm border border-slate-200 transition-all hover:-translate-y-0.5">
              View All FAQs
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom CTA Block */}
      <div className="py-24 bg-[#f8f9fa]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[3rem] shadow-soft p-12 lg:p-16 text-center border border-slate-200 relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary-100 rounded-full blur-[60px] opacity-70"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-100 rounded-full blur-[60px] opacity-70"></div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">Ready to digitize your restaurant?</h2>
              <p className="text-lg text-slate-500 mb-10 max-w-2xl mx-auto">Join the future of dining. Implement SavoryOps today and watch your operational efficiency skyrocket.</p>
              <Link to="/contact" className="inline-block px-10 py-4 rounded-full bg-slate-900 text-white font-bold text-lg hover:bg-slate-800 transition-all transform hover:-translate-y-1 shadow-xl">
                Get Started Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}