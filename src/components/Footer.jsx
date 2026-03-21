import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-8 mt-12 relative overflow-hidden">
      {/* Decorative background circle */}
      <div className="absolute top-[-20%] right-[-5%] w-[30%] h-[150%] bg-primary-50 rounded-full blur-[80px] -z-10 hidden md:block"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">
          
          <div className="md:col-span-4 lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <img src="/logo.png" alt="SavoryOps Logo" className="h-10 w-auto" />
              <span className="text-2xl font-bold text-slate-900 tracking-tight">SavoryOps</span>
            </div>
            <p className="text-slate-500 text-[15px] leading-relaxed max-w-sm">
              Create your tailor-made Restaurant Management System with our complete suite. Manage POS, Inventory, and Employees effortlessly.
            </p>
            <div className="mt-8 flex gap-4">
               {/* Social placeholders */}
               {['#bg-blue-600', '#bg-sky-500', '#bg-pink-600', '#bg-blue-800'].map((color, i) => (
                 <a key={i} href="#" className={`w-10 h-10 rounded-full flex items-center justify-center text-white shadow-sm hover:-translate-y-1 transition-transform`} style={{backgroundColor: color.replace('#', '')}}>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
                 </a>
               ))}
            </div>
          </div>
          
          <div className="md:col-span-2 lg:col-span-2">
            <h4 className="text-lg font-bold text-slate-900 mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/features" className="text-slate-500 hover:text-primary-600 transition-colors font-medium">Features</Link></li>
              <li><Link to="/products" className="text-slate-500 hover:text-primary-600 transition-colors font-medium">Products</Link></li>
              <li><Link to="/upcoming-features" className="text-slate-500 hover:text-primary-600 transition-colors font-medium">Our Roadmap</Link></li>
              <li><Link to="/contact" className="text-slate-500 hover:text-primary-600 transition-colors font-medium">Support</Link></li>
            </ul>
          </div>
          
          <div className="md:col-span-3 lg:col-span-2">
            <h4 className="text-lg font-bold text-slate-900 mb-6">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-500 hover:text-primary-600 transition-colors font-medium">About Us</a></li>
              <li><a href="#" className="text-slate-500 hover:text-primary-600 transition-colors font-medium">Privacy Policy</a></li>
              <li><a href="#" className="text-slate-500 hover:text-primary-600 transition-colors font-medium">Terms of Service</a></li>
              <li><a href="#" className="text-slate-500 hover:text-primary-600 transition-colors font-medium">FAQ</a></li>
            </ul>
          </div>

          <div className="md:col-span-3 lg:col-span-3">
            <h4 className="text-lg font-bold text-slate-900 mb-6">App Available On</h4>
            <div className="flex flex-col gap-4">
              <button className="flex items-center gap-3 bg-slate-900 text-white px-5 py-3 rounded-xl hover:bg-slate-800 transition-colors">
                <span className="text-2xl">🍎</span>
                <div className="text-left flex flex-col">
                  <span className="text-[10px] uppercase tracking-wider text-slate-300">Download on the</span>
                  <span className="text-sm font-semibold">App Store</span>
                </div>
              </button>
              <button className="flex items-center gap-3 bg-slate-900 text-white px-5 py-3 rounded-xl hover:bg-slate-800 transition-colors">
                <span className="text-2xl">▶️</span>
                <div className="text-left flex flex-col">
                  <span className="text-[10px] uppercase tracking-wider text-slate-300">GET IT ON</span>
                  <span className="text-sm font-semibold">Google Play</span>
                </div>
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-slate-200 text-center">
          <p className="text-slate-500 font-medium">&copy; {new Date().getFullYear()} SavoryOps Software. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
