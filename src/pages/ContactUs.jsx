import { MdPhone, MdEmail } from 'react-icons/md';
import { Helmet } from 'react-helmet-async';

export default function ContactUs() {
  return (
    <div className="bg-[#f8f9fa] py-24 sm:py-32 min-h-screen relative overflow-hidden flex items-center">
      <Helmet>
        <title>Contact Sales | Request SavoryOps Software Demo</title>
        <meta name="description" content="Ready to upgrade your restaurant operations? Contact our team for a free SavoryOps software demo and learn how our POS and Inventory tools can skyrocket your revenue." />
        <meta name="keywords" content="Restaurant Software Demo, Contact SavoryOps, Restaurant POS Pricing, Business Contact" />
      </Helmet>
      {/* Decorative Orbs */}
      <div className="absolute -left-[20%] top-[10%] w-[50%] h-[50%] bg-primary-50 rounded-full blur-[120px] -z-10"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          <div className="animate-slide-up">
            <h2 className="text-sm font-bold leading-7 text-primary-500 uppercase tracking-widest bg-primary-50 inline-block px-4 py-1 rounded-full mb-4">Get In Touch</h2>
            <h3 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
              Let&apos;s talk about <br />
              <span className="text-primary-500">your restaurant.</span>
            </h3>
            <p className="text-xl text-slate-500 mb-12 max-w-lg">
              Ready to upgrade your operations? Our experts are here to tailor a demo specifically for your business needs.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-6 bg-white p-6 rounded-[2rem] shadow-sm border border-slate-200 card-hover">
                <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-500 flex items-center justify-center text-2xl shadow-sm">
                  <MdPhone />
                </div>
                <div>
                  <h4 className="text-slate-400 text-sm font-bold uppercase tracking-wider mb-1">Call Us Directly</h4>
                  <p className="text-slate-900 text-xl font-extrabold">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center gap-6 bg-white p-6 rounded-[2rem] shadow-sm border border-slate-200 card-hover">
                <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-500 flex items-center justify-center text-2xl shadow-sm">
                  <MdEmail />
                </div>
                <div>
                  <h4 className="text-slate-400 text-sm font-bold uppercase tracking-wider mb-1">Email Our Team</h4>
                  <p className="text-slate-900 text-xl font-extrabold">sales@savoryops.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 sm:p-12 rounded-[3rem] shadow-soft border border-slate-200 relative animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h4 className="text-2xl font-bold text-slate-900 mb-8 border-b border-slate-200 pb-6">Book a live demo</h4>

            <form action="#" method="POST" className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6 relative z-10">
              <div>
                <label htmlFor="first-name" className="block text-sm font-bold text-slate-700 mb-2">First name</label>
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  className="block w-full rounded-2xl border-0 py-3.5 px-4 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm shadow-inner transition-all border border-slate-200"
                  placeholder="Jane"
                />
              </div>

              <div>
                <label htmlFor="last-name" className="block text-sm font-bold text-slate-700 mb-2">Last name</label>
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  className="block w-full rounded-2xl border-0 py-3.5 px-4 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm shadow-inner transition-all border border-slate-200"
                  placeholder="Doe"
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="company" className="block text-sm font-bold text-slate-700 mb-2">Restaurant Name</label>
                <input
                  type="text"
                  name="company"
                  id="company"
                  className="block w-full rounded-2xl border-0 py-3.5 px-4 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm shadow-inner transition-all border border-slate-200"
                  placeholder="The Great Eatery"
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2">Work Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="block w-full rounded-2xl border-0 py-3.5 px-4 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm shadow-inner transition-all border border-slate-200"
                  placeholder="jane@greateatery.com"
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2">Message (Optional)</label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  className="block w-full rounded-2xl border-0 py-3.5 px-4 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm shadow-inner transition-all border border-slate-200 resize-none"
                  placeholder="How can we help you?"
                />
              </div>

              <div className="sm:col-span-2 mt-4">
                <button
                  type="submit"
                  className="block w-full rounded-full bg-primary-500 px-4 py-4 text-center text-lg font-bold text-white shadow-lg shadow-primary-500/30 hover:bg-primary-600 transition-all transform hover:-translate-y-0.5"
                >
                  Send Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}