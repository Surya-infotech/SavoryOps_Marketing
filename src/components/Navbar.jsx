import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Features', path: '/features' },
  { name: 'Products', path: '/products' },
  { name: 'Roadmap', path: '/upcoming-features' },
  { name: 'Contact Us', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-soft py-2' : 'bg-white/80 backdrop-blur-md py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          
          {/* Brand/Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-3">
              <img src={logo} alt="SavoryOps Logo" className="h-10 w-auto" />
              <span className="text-2xl font-bold text-slate-900 tracking-tight">SavoryOps</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-full text-[15px] font-semibold transition-all duration-200 ${
                    isActive
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-slate-600 hover:text-primary-600 hover:bg-slate-50'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            
            <div className="ml-4 pl-4 border-l border-slate-200">
              <Link to="/contact" className="px-6 py-2.5 rounded-full bg-primary-500 text-white hover:bg-primary-600 transition-all text-[15px] font-bold shadow-lg shadow-primary-500/30 transform hover:-translate-y-0.5">
                 Book Demo
              </Link>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-xl text-slate-600 hover:text-primary-600 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="block h-7 w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-7 w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 shadow-soft absolute w-full left-0">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-2xl text-base font-semibold transition-all ${
                    isActive
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-slate-600 hover:text-primary-600 hover:bg-slate-50'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <div className="pt-4 mt-2 border-t border-slate-200">
              <Link to="/contact" onClick={() => setIsOpen(false)} className="block text-center w-full px-4 py-4 rounded-2xl bg-primary-500 text-white shadow-lg shadow-primary-500/30 text-base font-bold">
                Book a Demo
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
