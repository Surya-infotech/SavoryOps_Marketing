import { Helmet } from 'react-helmet-async';
import { faqs } from '../data/faqs';

export default function Faqs() {
  return (
    <div className="bg-[#f8f9fa] min-h-screen pt-24 pb-24">
      <Helmet>
        <title>FAQs | SavoryOps</title>
        <meta name="description" content="Frequently Asked Questions about SavoryOps Restaurant Management System." />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-slate-500">Everything you need to know about the product and features.</p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white p-8 md:p-10 rounded-[2rem] shadow-sm border border-slate-200 animate-slide-up" style={{ animationDelay: `${i * 50}ms` }}>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{faq.q}</h3>
              <p className="text-slate-600 leading-relaxed text-[16px]">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}