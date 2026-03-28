import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { MdStorefront, MdArrowForward } from 'react-icons/md';

export default function OwnerPanel() {
  const demoLink = import.meta.env.VITE_OWNER_PANEL_DEMO || '#';

  return (
    <div className="bg-[#f8f9fa] min-h-screen pt-24 pb-20">
      <Helmet>
        <title>Owner Panel | SavoryOps</title>
      </Helmet>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[3rem] p-10 md:p-16 shadow-soft border border-slate-200 text-center max-w-4xl mx-auto animate-slide-up">
           <div className="w-24 h-24 bg-primary-50 text-primary-500 rounded-3xl flex items-center justify-center text-5xl mx-auto mb-8 shadow-sm">
             <MdStorefront />
           </div>
           
           <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Owner Panel</h1>
           <p className="text-lg text-slate-500 mb-10 leading-relaxed font-medium">
             The dedicated management interface for restaurant owners. Oversee daily operations, track kitchen activities, monitor staff, and analyze real-time dynamic reports.
           </p>

           <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
             {demoLink.startsWith('http') ? (
               <a href={demoLink} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-primary-500 text-white font-bold rounded-full shadow-lg shadow-primary-500/30 hover:-translate-y-1 transition-all flex items-center gap-2 text-[15px]">
                 Live Demo <MdArrowForward />
               </a>
             ) : (
               <Link to={demoLink} className="px-8 py-4 bg-primary-500 text-white font-bold rounded-full shadow-lg shadow-primary-500/30 hover:-translate-y-1 transition-all flex items-center gap-2 text-[15px]">
                 Live Demo <MdArrowForward />
               </Link>
             )}
             <Link to="/contact" className="px-8 py-4 bg-slate-900 text-white font-bold rounded-full shadow-lg hover:-translate-y-1 transition-all flex items-center gap-2 text-[15px]">
               Buy Source Code
             </Link>
           </div>
        </div>
      </div>
    </div>
  );
}
