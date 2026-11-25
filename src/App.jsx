import { useState, useEffect } from 'react';
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
import DedicatedWebsiteAndNotifications from './components/DedicatedWebsiteAndNotifications';
import InteractiveFlow from './components/InteractiveFlow';
import WhiteLabelSuperpowers from './components/WhiteLabelSuperpowers';
import CompetitorComparison from './components/CompetitorComparison';
import RoiCalculator from './components/RoiCalculator';
import LicensingPlans from './components/LicensingPlans';
import CustomizationServices from './components/CustomizationServices';
import InquiryForm from './components/InquiryForm';
import Faq from './components/Faq';
import Footer from './components/Footer';
import ContactUs from './pages/ContactUs';
import PlatformsExplorer from './pages/PlatformsExplorer';

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

/** Redirects legacy product routes directly to the full product website */
const ExternalRedirectToProductSite = () => {
  const location = useLocation();
  useEffect(() => {
    window.location.replace(`https://website.savoryops.com${location.pathname}${location.search}`);
  }, [location]);
  return null;
};

/** Main Landing Page with White-Label Marketing Modules & SEO Head */
const HomePage = ({ selectedTier, handleSelectTier, handleOpenInquiry }) => {
  return (
    <main>
      {/* Home SEO Head */}
      <SEOHead
        title="SavoryOps - Complete Restaurant Management System | White-Label SaaS & Source Code"
        description="Transform your restaurant operations with SavoryOps. Complete restaurant management SaaS with cloud POS, kitchen display system (KDS), inventory control, dedicated restaurant websites, automated WhatsApp notifications, and multi-branch analytics."
        primaryKeyword="Restaurant Management System"
        keywords={[
          'restaurant management system',
          'restaurant POS system',
          'dedicated restaurant website',
          'restaurant whatsapp notifications',
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

      {/* 2. 7-Platform Architecture Ecosystem */}
      <PlatformEcosystem />

      {/* 2b. Dedicated Restaurant Website & Automated WhatsApp Suite */}
      <DedicatedWebsiteAndNotifications />

      {/* 3. Cross-Platform Operational Workflow */}
      <InteractiveFlow />

      {/* 4. White-Label Agency Rights & Reseller Superpowers */}
      <WhiteLabelSuperpowers />

      {/* 5. Competitor Technical Audit Matrix */}
      <CompetitorComparison />

      {/* 6. Interactive ROI & MRR Calculator */}
      <RoiCalculator />

      {/* 7. Commercial Licensing Tiers */}
      <LicensingPlans onSelectTier={handleSelectTier} />

      {/* 8. Bespoke Code Customization & Custom Development Services */}
      <CustomizationServices onInquire={handleSelectTier} />

      {/* 9. White-Label Inquiry & Consultation Form */}
      <InquiryForm selectedTier={selectedTier} />

      {/* 10. Frequently Asked Questions */}
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

        {/* 7-Platform Deep-Dive Feature Explorer */}
        <Route path="/platforms" element={<PlatformsExplorer />} />
        <Route path="/platforms/:platformId" element={<PlatformsExplorer />} />

        {/* Contact Us Page */}
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/contact" element={<ContactUs />} />

        {/* 301 Redirects to website.savoryops.com for all product/feature/blog URLs */}
        <Route path="/features/*" element={<ExternalRedirectToProductSite />} />
        <Route path="/features" element={<ExternalRedirectToProductSite />} />
        <Route path="/solutions/*" element={<ExternalRedirectToProductSite />} />
        <Route path="/solutions" element={<ExternalRedirectToProductSite />} />
        <Route path="/alternatives/*" element={<ExternalRedirectToProductSite />} />
        <Route path="/alternatives" element={<ExternalRedirectToProductSite />} />
        <Route path="/resources/*" element={<ExternalRedirectToProductSite />} />
        <Route path="/resources" element={<ExternalRedirectToProductSite />} />
        <Route path="/blog/*" element={<ExternalRedirectToProductSite />} />
        <Route path="/blog" element={<ExternalRedirectToProductSite />} />
        <Route path="/pricing" element={<ExternalRedirectToProductSite />} />
        <Route path="/faq" element={<ExternalRedirectToProductSite />} />
        <Route path="/about-us" element={<ExternalRedirectToProductSite />} />
        <Route path="/upcoming-features" element={<ExternalRedirectToProductSite />} />

        {/* Local White-Label & Account Redirects */}
        <Route path="/why-savoryops" element={<Navigate to="/" replace />} />
        <Route path="/partnership" element={<Navigate to="/contact-us" replace />} />
        <Route path="/privacy-policy" element={<Navigate to="/contact-us" replace />} />
        <Route path="/terms-and-conditions" element={<Navigate to="/contact-us" replace />} />
        <Route path="/data-deletion-policy" element={<Navigate to="/contact-us" replace />} />
        <Route path="/refund-and-cancellation-policy" element={<Navigate to="/contact-us" replace />} />
        <Route path="/signin" element={<Navigate to="/" replace />} />
        <Route path="/signup" element={<Navigate to="/" replace />} />

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
