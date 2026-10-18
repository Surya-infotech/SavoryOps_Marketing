import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
  useNavigate
} from 'react-router-dom';
import './App.css';
import { LanguageProvider } from './context/LanguageContext';
import SEOHead from './components/SEO/SEOHead';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PlatformEcosystem from './components/PlatformEcosystem';
import InteractiveFlow from './components/InteractiveFlow';
import WhiteLabelSuperpowers from './components/WhiteLabelSuperpowers';
import CompetitorComparison from './components/CompetitorComparison';
import RoiCalculator from './components/RoiCalculator';
import LicensingPlans from './components/LicensingPlans';
import InquiryForm from './components/InquiryForm';
import Faq from './components/Faq';
import Footer from './components/Footer';
import SEOLandingPage from './pages/seo/SEOLandingPage';
import ContactUs from './pages/ContactUs';

/** Short smooth scroll on route change so subpages start at the top */
const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // If navigating to an anchor like #inquiry, let browser/handler scroll to anchor
    if (location.hash) {
      const el = document.getElementById(location.hash.replace('#', ''));
      if (el) {
        const yOffset = -80;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname, location.hash]);

  return null;
};

/** Main Landing Page with White-Label Marketing Modules & SEO Head */
const HomePage = ({ selectedTier, handleSelectTier, handleOpenInquiry }) => {
  return (
    <main>
      {/* Home SEO Head */}
      <SEOHead
        title="SavoryOps - Complete Restaurant Management System | White-Label SaaS & Source Code"
        description="Transform your restaurant operations with SavoryOps. Complete restaurant management system with cloud POS, kitchen display system (KDS), inventory control, staff scheduling, table reservations, and multi-branch analytics."
        primaryKeyword="Restaurant Management System"
        keywords={[
          'restaurant management system',
          'restaurant POS system',
          'kitchen display system',
          'KDS software',
          'digital KOT',
          'restaurant inventory management',
          'food cost calculator',
          'Toast POS alternative',
          'Square restaurant alternative',
          'white label restaurant software'
        ]}
      />

      {/* 1. Hero Section */}
      <Hero onInquire={handleOpenInquiry} />

      {/* 2. 5-Platform Architecture Ecosystem */}
      <PlatformEcosystem />

      {/* 3. End-to-End Operational Workflow */}
      <InteractiveFlow />

      {/* 4. White-Label Agency Rights & Reseller Superpowers */}
      <WhiteLabelSuperpowers />

      {/* 5. Competitor Technical Audit Matrix */}
      <CompetitorComparison />

      {/* 6. Interactive ROI & MRR Calculator */}
      <RoiCalculator />

      {/* 7. Commercial Licensing Tiers */}
      <LicensingPlans onSelectTier={handleSelectTier} />

      {/* 8. White-Label Inquiry & Consultation Form */}
      <InquiryForm selectedTier={selectedTier} />

      {/* 9. Frequently Asked Questions */}
      <Faq />
    </main>
  );
};

const AppContent = () => {
  const [selectedTier, setSelectedTier] = useState('Source Code + Turnkey Cloud Setup');
  const location = useLocation();
  const navigate = useNavigate();

  const handleSelectTier = (tierName) => {
    setSelectedTier(tierName);
    if (location.pathname !== '/') {
      navigate('/#inquiry');
      setTimeout(() => {
        const formEl = document.getElementById('inquiry');
        if (formEl) {
          const yOffset = -80;
          const y = formEl.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 100);
      return;
    }

    const formEl = document.getElementById('inquiry');
    if (formEl) {
      const yOffset = -80;
      const y = formEl.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleOpenInquiry = () => {
    if (location.pathname !== '/') {
      navigate('/#inquiry');
      setTimeout(() => {
        const formEl = document.getElementById('inquiry');
        if (formEl) {
          const yOffset = -80;
          const y = formEl.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 100);
      return;
    }

    const formEl = document.getElementById('inquiry');
    if (formEl) {
      const yOffset = -80;
      const y = formEl.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Trailing slash normalization: /solutions/pos/ -> /solutions/pos
  if (location.pathname.length > 1 && location.pathname.endsWith('/')) {
    return <Navigate to={location.pathname.replace(/\/+$/, '')} replace />;
  }

  // Redirect /sitemap directly to static /sitemap.xml
  if (location.pathname.toLowerCase() === '/sitemap') {
    window.location.replace('/sitemap.xml');
    return null;
  }

  return (
    <div className="app">
      <ScrollToTop />

      {/* Top Navbar */}
      <Navbar onOpenInquiry={handleOpenInquiry} />

      {/* Routes: Home and Programmatic SEO Landing Pages */}
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              selectedTier={selectedTier}
              handleSelectTier={handleSelectTier}
              handleOpenInquiry={handleOpenInquiry}
            />
          }
        />

        {/* Programmatic SEO Solutions Pages */}
        <Route
          path="/solutions/restaurant-pos-system"
          element={<SEOLandingPage clusterId="restaurant-pos-system" />}
        />
        <Route
          path="/solutions/kitchen-display-system"
          element={<SEOLandingPage clusterId="kitchen-display-system" />}
        />
        <Route
          path="/solutions/kitchen-order-ticket-system"
          element={<SEOLandingPage clusterId="kitchen-order-ticket-system" />}
        />
        <Route
          path="/solutions/restaurant-inventory-management"
          element={<SEOLandingPage clusterId="restaurant-inventory-management" />}
        />
        <Route
          path="/solutions/cloud-kitchen-pos-system"
          element={<SEOLandingPage clusterId="cloud-kitchen-pos-system" />}
        />

        {/* Competitor Alternatives SEO Pages */}
        <Route
          path="/alternatives/toast-pos-alternative"
          element={<SEOLandingPage clusterId="toast-pos-alternative" />}
        />
        <Route
          path="/alternatives/square-pos-alternative"
          element={<SEOLandingPage clusterId="square-pos-alternative" />}
        />
        <Route
          path="/alternatives/touchbistro-alternative"
          element={<SEOLandingPage clusterId="touchbistro-alternative" />}
        />

        {/* Interactive Calculator & Resource Guide */}
        <Route
          path="/resources/food-cost-percentage-guide"
          element={<SEOLandingPage clusterId="food-cost-percentage-guide" />}
        />

        {/* Contact Us Page */}
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/contact" element={<ContactUs />} />

        {/* Catch-all fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      {/* Footer */}
      <Footer />
    </div>
  );
};

function App() {
  return (
    <LanguageProvider>
      <Router>
        <AppContent />
      </Router>
    </LanguageProvider>
  );
}

export default App;
