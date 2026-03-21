import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { MdRestaurant, MdFastfood, MdTrendingUp, MdNotifications, MdComputer, MdInventory, MdDeliveryDining, MdGroups, MdLocalFireDepartment, MdBarChart, MdLanguage } from 'react-icons/md';
import logo from '../assets/logo.png';

export default function Home() {
  return (
    <div className="bg-[#f8f9fa] overflow-hidden min-h-screen">
      <Helmet>
        <title>SavoryOps | Premier Restaurant Management System & POS</title>
        <meta name="description" content="Discover SavoryOps, the all-in-one Restaurant Management System. Streamline your restaurant POS, online ordering, staff scheduling, and inventory management." />
        <meta name="keywords" content="Restaurant Management System, Restaurant POS Software, Kitchen Display System (KDS), Restaurant Staff Scheduling, Online Ordering Software" />
      </Helmet>
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
            Complete Restaurant Solution
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-6">
            Manage your <br className="hidden lg:block"/>
            <span className="text-primary-500">restaurant</span> with ease.
          </h1>
          
          <p className="text-lg sm:text-xl text-slate-500 max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed">
            From point-of-sale to delivery, inventory to staff scheduling. 
            SavoryOps is the all-in-one platform that connects every part of your dining experience.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link to="/contact" className="px-8 py-4 rounded-full bg-primary-500 hover:bg-primary-600 text-white font-bold text-[15px] shadow-lg shadow-primary-500/30 transition-all transform hover:-translate-y-0.5 text-center">
              Start Free Trial
            </Link>
            <Link to="/features" className="px-8 py-4 rounded-full bg-white hover:bg-slate-50 text-slate-700 font-bold text-[15px] shadow-soft border border-slate-200 transition-all text-center">
              Explore Features
            </Link>
          </div>
          
          <div className="mt-10 flex items-center justify-center lg:justify-start gap-4 text-sm text-slate-500 font-medium">
             <div className="flex -space-x-2">
                {[1,2,3,4].map(i => (
                  <img key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 object-cover" src={`https://i.pravatar.cc/100?img=${i+10}`} alt="avatar" />
                ))}
             </div>
             <span>Trusted by 2,000+ restaurants</span>
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
                  {[1,2,3].map(i => (
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
             <div className="absolute z-30 -bottom-6 -left-6 bg-white rounded-2xl p-5 shadow-soft border border-slate-200 flex items-center gap-4 animate-float" style={{ animationDelay: '1s'}}>
                <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xl">
                  <MdTrendingUp />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">Daily Revenue</p>
                  <p className="text-lg font-bold text-slate-900">$2,450.00</p>
                </div>
             </div>

             {/* Floating Notification */}
             <div className="absolute z-30 top-10 -right-6 bg-white rounded-2xl p-4 shadow-soft border border-slate-200 flex items-center gap-3 animate-float" style={{ animationDelay: '2s'}}>
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
            <h2 className="text-primary-500 font-bold tracking-widest uppercase text-[10px] mb-4">SavoryOps SaaS Products</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.2]">
              Five Powerful Products, One <br className="hidden md:block"/> Complete <span className="text-primary-500">SaaS Solution!</span>
            </h3>
            <p className="mt-6 text-slate-500 text-[15px] leading-[1.8] px-4 md:px-12 font-medium">
              SavoryOps offers a complete ecosystem to streamline dining management. From the <strong>Super Admin Panel</strong> for full control, to the <strong>Employee App</strong> for effortless daily operations, a <strong>Native Custom Website</strong> for independent brand management, and a <strong>User App</strong> to boost your online presence—everything you need to run and scale your restaurant business is included.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                 label: 'LANDING PAGE',
                 title: 'Full Website\nfor Your Brand',
                 mockupImg: '/assets/landing_page_ui.png',
                 widthClass: 'w-[85%] h-[240px]',
                 delay: 0
              },
              {
                 label: 'SUPER ADMIN',
                 title: 'Super Admin\nDashboard',
                 mockupImg: '/assets/super_admin_ui.png',
                 widthClass: 'w-[85%] h-[240px]',
                 delay: 100
              },
              {
                 label: 'EMPLOYEE PANEL',
                 title: 'Employee App\nfor Staff',
                 mockupImg: '/assets/employee_panel_ui.png',
                 widthClass: 'w-[200px] h-[260px] mx-auto',
                 yOffset: 'translate-y-12 translate-x-12',
                 rounded: 'rounded-t-[2rem]',
                 delay: 200
              },
              {
                 label: 'OWNER SPECIFIC WEBSITE',
                 title: 'Owner Panel\nfor Management',
                 mockupImg: '/assets/owner_panel_ui.png',
                 widthClass: 'w-[85%] h-[240px]',
                 delay: 300
              },
              {
                 fullWidth: true,
                 label: 'USER SPECIFIC APP',
                 title: 'User App\nfor Ordering',
                 mockupImg: '/assets/user_app_ui.png',
                 widthClass: 'w-full max-w-[500px] h-[240px]',
                 offsetClass: 'translate-x-12 translate-y-12',
                 delay: 400
              }
            ].map((product, i) => (
              <div key={i} className={`bg-[#f8f9fa] border border-slate-100 shadow-sm rounded-[1.5rem] overflow-hidden relative flex flex-col md:flex-row items-center gap-0 lg:gap-8 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 animate-slide-up ${product.fullWidth ? 'lg:col-span-2' : ''}`} style={{ animationDelay: `${product.delay}ms` }}>
                 
                 {/* Left Content */}
                 <div className="flex-1 w-full text-left relative z-20 p-8 md:p-12 md:pr-0">
                    <p className="text-[10px] font-bold text-primary-500 uppercase tracking-widest mb-1.5">{product.label}</p>
                    <div className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-2">
                       <img src={logo} className="h-6 w-auto object-contain" alt="SavoryOps Logo" />
                       <span className="tracking-tight text-xl">SavoryOps</span>
                    </div>
                    <h4 className="text-[28px] lg:text-[34px] font-extrabold text-slate-900 mb-8 leading-[1.3] whitespace-pre-line">{product.title}</h4>
                    <Link to="/products" className="inline-flex items-center justify-center px-6 py-3 bg-primary-500 text-white text-[13px] font-bold rounded-lg hover:bg-primary-600 transition-colors shadow-lg shadow-primary-500/20">
                       View Demo &rarr;
                    </Link>
                 </div>
                 
                 {/* Right Mockup */}
                 <div className="flex-1 w-full relative z-10 flex justify-end items-end h-[300px] md:h-[350px]">
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

      {/* Services Grid */}
      <div className="py-20 bg-[#f8f9fa] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-primary-500 font-bold tracking-wide uppercase text-sm mb-2">Capabilities</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900">Why Choose SavoryOps?</h3>
            <p className="mt-4 text-slate-500 text-lg">We provide an unmatched suite of tools to fully automate every dining flow.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Smart POS', icon: <MdComputer />, color: 'bg-blue-50 text-blue-500' },
              { title: 'Inventory Sync', icon: <MdInventory />, color: 'bg-emerald-50 text-emerald-500' },
              { title: 'Online Deliveries', icon: <MdDeliveryDining />, color: 'bg-orange-50 text-orange-500' },
              { title: 'Staff Scheduling', icon: <MdGroups />, color: 'bg-purple-50 text-purple-500' },
              { title: 'Kitchen Routing', icon: <MdLocalFireDepartment />, color: 'bg-rose-50 text-rose-500' },
              { title: 'Live Analytics', icon: <MdBarChart />, color: 'bg-sky-50 text-sky-500' }
            ].map((service, i) => (
              <div key={i} className="bg-white p-8 rounded-[2rem] shadow-card border border-slate-200 card-hover text-center flex flex-col items-center">
                <div className={`w-20 h-20 rounded-2xl ${service.color} flex items-center justify-center text-3xl mb-6 shadow-sm`}>
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
                <p className="text-slate-500 mb-6">Automate your {service.title.toLowerCase()} processes seamlessly with our connected platform.</p>
                <Link to="/features" className="text-primary-500 font-bold flex items-center gap-1 hover:text-primary-600 transition-colors">
                  View Detail
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </Link>
              </div>
            ))}
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
