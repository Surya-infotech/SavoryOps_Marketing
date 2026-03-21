import { MdInventory, MdPayment, MdBarChart, MdGroups, MdLanguage, MdRestaurantMenu } from 'react-icons/md';
import { Helmet } from 'react-helmet-async';

export default function Features() {
  const features = [
    { name: 'Inventory Management', description: 'Track your stock levels in real-time, set low-stock alerts, and manage supplier orders with ease.', icon: <MdInventory />, color: 'bg-emerald-50 text-emerald-600' },
    { name: 'Point of Sale (POS)', description: 'Lightning-fast order entry, split checks, and seamless payment processing right at the table.', icon: <MdPayment />, color: 'bg-blue-50 text-blue-600' },
    { name: 'Real-time Analytics', description: 'Make data-driven decisions with live dashboards showing sales, labor costs, and popular menu items.', icon: <MdBarChart />, color: 'bg-purple-50 text-purple-600' },
    { name: 'Employee Scheduling', description: 'Create schedules, manage shift swaps, and track timesheets without the hassle of spreadsheets.', icon: <MdGroups />, color: 'bg-orange-50 text-orange-600' },
    { name: 'Online Ordering', description: 'Integrate directly with your website and SavoryOps User App to accept orders commission-free.', icon: <MdLanguage />, color: 'bg-rose-50 text-rose-600' },
    { name: 'Kitchen Display', description: 'Route tickets to the right stations automatically and track ticket times to improve efficiency.', icon: <MdRestaurantMenu />, color: 'bg-sky-50 text-sky-600' },
  ];

  return (
    <div className="bg-[#f8f9fa] py-16 sm:py-24 min-h-screen">
      <Helmet>
        <title>Core Features | SavoryOps Restaurant Management System</title>
        <meta name="description" content="Explore our complete suite of restaurant management tools: Real-time inventory sync, lightning-fast POS, live analytics, online delivery, and kitchen routing." />
        <meta name="keywords" content="Restaurant Analytics, Point of Sale, Restaurant Inventory Tracking, Online Ordering App, Employee Scheduling System" />
      </Helmet>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center animate-slide-up">
          <h2 className="text-sm font-bold leading-7 text-primary-500 uppercase tracking-widest bg-primary-50 inline-block px-4 py-1 rounded-full mb-4">Core Features</h2>
          <p className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Everything you need. <br /> Nothing you do not.
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-500">
            SavoryOps isn&apos;t just a simple POS. It is a comprehensive suite of tools built specifically for the needs of modern restaurateurs.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {features.map((feature, idx) => (
              <div key={feature.name} className="flex flex-col bg-white p-10 rounded-[2rem] shadow-card border border-slate-200 card-hover animate-slide-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className={`h-16 w-16 mb-6 flex items-center justify-center rounded-2xl ${feature.color} text-3xl`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.name}</h3>
                <p className="flex-auto text-base leading-7 text-slate-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}