import { MdPhoneIphone, MdPerson, MdBusinessCenter, MdPublic, MdComputer } from 'react-icons/md';
import { Helmet } from 'react-helmet-async';

export default function Products() {
  const products = [
    {
      title: 'User App',
      description: 'Give your customers the ultimate convenience. Allow them to browse digital menus, place pickup or delivery orders, book tables, and manage their loyalty rewards directly from their smartphones.',
      color: 'bg-emerald-50 text-emerald-500',
      icon: <MdPhoneIphone />
    },
    {
      title: 'Employee App',
      description: 'Equip your staff with a mobile tool to take orders at the table, receive instantly routed tickets, manage their upcoming shifts, and punch in/out seamlessly.',
      color: 'bg-blue-50 text-blue-500',
      icon: <MdPerson />
    },
    {
      title: 'Owner Panel',
      description: 'Your restaurant in your pocket. Access high-level analytics, monitor real-time sales, approve inventory orders, and get notifications on critical alerts from anywhere in the world.',
      color: 'bg-purple-50 text-purple-500',
      icon: <MdBusinessCenter />
    },
    {
      title: 'Super Admin Panel',
      description: 'Designed for enterprise and franchise management. Oversee multiple locations, standardize menus across regions, manage global permissions, and generate consolidated financial reports.',
      color: 'bg-orange-50 text-orange-500',
      icon: <MdPublic />
    },
    {
      title: 'Website Builder',
      description: 'Launch your restaurant\'s online presence in minutes. Create a stunning website that integrates natively with SavoryOps for online ordering without third-party fees.',
      color: 'bg-rose-50 text-rose-500',
      icon: <MdComputer />
    },
  ];

  return (
    <div className="bg-[#f8f9fa] py-16 sm:py-24 min-h-screen">
      <Helmet>
        <title>Software Ecosystem | SavoryOps Restaurant Products</title>
        <meta name="description" content="Discover the unified SavoryOps ecosystem: Custom User App, Employee POS App, Comprehensive Owner Panel, Multi-Location Admin Panel, and Restaurant Website Builder." />
        <meta name="keywords" content="Restaurant Apps, Employee Management Software, Restaurant Owner Dashboard, Multi-Location Restaurant Franchise Software" />
      </Helmet>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center animate-slide-up mb-20">
          <h2 className="text-sm font-bold leading-7 text-primary-500 uppercase tracking-widest bg-primary-50 inline-block px-4 py-1 rounded-full mb-4">The Suite</h2>
          <p className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Cohesive Ecosystem
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-500">
            A family of applications designed to work flawlessly together, syncing data instantly across your entire business.
          </p>
        </div>

        <div className="space-y-24 lg:space-y-32">
          {products.map((product, index) => (
            <div key={product.title} className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center animate-slide-up ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`} style={{ animationDelay: '0.1s' }}>

              <div className="flex-1 w-full relative">
                <div className={`aspect-[4/3] rounded-[3rem] ${product.color.split(' ')[0]} shadow-soft border border-slate-200 flex flex-col items-center justify-center p-8 overflow-hidden relative group`}>

                  {/* Mockup decoration */}
                  <div className="absolute -bottom-10 w-3/4 h-[80%] bg-white/50 backdrop-blur-md rounded-t-3xl shadow-soft border-t border-l border-r border-slate-200 flex flex-col items-center pt-8">
                    <span className={`text-6xl mb-4 transform group-hover:-translate-y-2 transition-transform duration-500 ${product.color.split(' ')[1]}`}>{product.icon}</span>
                    <div className="h-4 w-3/4 bg-slate-200 rounded-full mb-3"></div>
                    <div className="h-4 w-1/2 bg-slate-200 rounded-full mb-8"></div>
                    <div className="w-full flex-1 bg-white border-t border-slate-200 rounded-t-xl"></div>
                  </div>

                </div>
              </div>

              <div className="flex-1 w-full relative z-10 text-center lg:text-left">
                <h3 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 mb-6">{product.title}</h3>
                <p className="text-lg leading-8 text-slate-500 mb-8 max-w-xl mx-auto lg:mx-0">
                  {product.description}
                </p>
                <button className="px-8 py-4 rounded-full bg-white shadow-soft border border-slate-200 text-slate-900 font-bold hover:text-primary-600 transition-all card-hover inline-flex items-center gap-2">
                  Explore {product.title}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </button>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}