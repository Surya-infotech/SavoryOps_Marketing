import React, { useState } from 'react';
import './App.css';
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

function App() {
  const [selectedTier, setSelectedTier] = useState('Source Code + Turnkey Cloud Setup');

  const handleSelectTier = (tierName) => {
    setSelectedTier(tierName);
    const formEl = document.getElementById('inquiry');
    if (formEl) {
      const yOffset = -80;
      const y = formEl.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleOpenInquiry = () => {
    const formEl = document.getElementById('inquiry');
    if (formEl) {
      const yOffset = -80;
      const y = formEl.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="app">
      {/* Top Navbar */}
      <Navbar onOpenInquiry={handleOpenInquiry} />

      {/* Main Content Sections */}
      <main>
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

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
