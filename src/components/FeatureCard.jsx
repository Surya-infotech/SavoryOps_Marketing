import { Link } from 'react-router-dom';

export default function FeatureCard({ feature, hideLink = false }) {
  return (
    <div className="bg-white p-8 rounded-[2rem] shadow-card border border-slate-200 card-hover text-center flex flex-col items-center h-full">
      <div className={`w-20 h-20 rounded-2xl ${feature.color} flex items-center justify-center text-3xl mb-6 shadow-sm`}>
        {feature.icon}
      </div>
      <h4 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h4>
      <p className="flex-auto text-slate-500 mb-6">{feature.desc}</p>
      
      {!hideLink && (
        <div className="mt-auto">
          <Link to="/features" className="text-primary-500 font-bold flex items-center gap-1 hover:text-primary-600 transition-colors">
            View Detail
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </Link>
        </div>
      )}
    </div>
  );
}