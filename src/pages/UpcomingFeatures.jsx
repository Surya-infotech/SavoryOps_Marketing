import { Helmet } from 'react-helmet-async';

export default function UpcomingFeatures() {
  const upcomingFeatures = [
    {
      quarter: 'Q3 2026',
      title: 'AI Menu Optimization',
      description: 'Leverage machine learning to suggest menu pricing adjustments based on real-time ingredient costs and local demand.',
      status: 'In Development',
      color: 'bg-emerald-100 text-emerald-600'
    },
    {
      quarter: 'Q4 2026',
      title: 'Robotic Kitchen Integration',
      description: 'Direct API endpoints to communicate orders directly to automated kitchen appliances and robotic prep stations.',
      status: 'Planning',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      quarter: 'Q1 2027',
      title: 'Global Franchise Synchronization',
      description: 'Advanced features for enterprise customers to deploy menu items and operational rules across 1,000+ locations instantly.',
      status: 'Research',
      color: 'bg-purple-100 text-purple-600'
    },
  ];

  return (
    <div className="bg-[#f8f9fa] py-24 sm:py-32 min-h-screen relative overflow-hidden">
      <Helmet>
        <title>Product Roadmap | SavoryOps Innovations in Restaurant Tech</title>
        <meta name="description" content="See what is coming to SavoryOps. We are continuously building groundbreaking features like AI Menu Pricing Optimization and Robotic Kitchen Integration." />
        <meta name="keywords" content="Restaurant Technology Innovations, AI for Restaurants, Automated Restaurant Kitchens, Next-Gen Restaurant Management" />
      </Helmet>

      {/* Decorative blobs */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary-50 rounded-full blur-[100px] -z-10 translate-x-1/2"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-2xl lg:text-center animate-slide-up mb-20">
          <h2 className="text-sm font-bold leading-7 text-primary-500 uppercase tracking-widest bg-primary-50 inline-block px-4 py-1 rounded-full mb-4">Innovation</h2>
          <p className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Product Roadmap
          </p>
          <p className="mt-6 text-xl leading-8 text-slate-500">
            We are constantly innovating. Here is a sneak peek at the groundbreaking features coming to the SavoryOps ecosystem.
          </p>
        </div>

        <div className="mx-auto max-w-3xl lg:max-w-4xl relative">
          {/* Vertical Line */}
          <div className="absolute left-[28px] md:left-1/2 top-4 bottom-4 w-1 bg-slate-200 rounded-full transform md:-translate-x-1/2 hidden md:block"></div>

          <div className="space-y-12">
            {upcomingFeatures.map((feature, idx) => (
              <div key={feature.title} className="relative flex flex-col md:flex-row items-center justify-between group animate-slide-up" style={{ animationDelay: `${idx * 0.1}s` }}>

                {/* Content Card */}
                <div className={`md:w-5/12 w-full ${idx % 2 !== 0 ? 'md:order-3' : 'md:text-right'}`}>
                  <div className="bg-white p-8 rounded-[2rem] shadow-card border border-slate-200 card-hover relative overflow-hidden text-left z-10">
                    <div className="mb-4">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${feature.color}`}>
                        {feature.status}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                    <p className="text-slate-500 leading-relaxed">{feature.description}</p>
                  </div>
                </div>

                {/* Center Node */}
                <div className="z-20 w-14 h-14 absolute left-0 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center -ml-7 md:ml-0 md:order-2 hidden md:flex">
                  <div className="w-6 h-6 rounded-full bg-white border-[6px] border-primary-500 shadow-lg ring-4 ring-primary-50"></div>
                </div>

                {/* Date/Quarter label */}
                <div className={`md:w-5/12 flex items-center ${idx % 2 !== 0 ? 'md:order-1 md:justify-end' : 'md:order-3'}`}>
                  <div className="px-6 py-4 rounded-2xl bg-white shadow-soft border border-slate-200 flex flex-col mt-4 md:mt-0 ml-12 md:ml-0 w-full md:w-auto text-center md:text-left z-10">
                    <span className="text-2xl font-black text-slate-900">{feature.quarter.split(' ')[0]}</span>
                    <span className="text-sm font-bold text-primary-500">{feature.quarter.split(' ')[1]}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Suggestion Box */}
        <div className="mt-32 text-center bg-white p-12 lg:p-16 rounded-[3rem] shadow-soft border border-slate-200 max-w-3xl mx-auto relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary-100 rounded-bl-[100px] -z-10"></div>
          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Have a brilliant idea?</h3>
            <p className="text-lg text-slate-500 mb-8 max-w-xl mx-auto">
              Our roadmap is driven by restaurateurs like you. If you need a specific feature to run your operations better, tell us.
            </p>
            <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-primary-500/30 transition-all transform hover:-translate-y-1">
              Submit Feature Request
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}