import { useEffect } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Layout from './components/Layout'
import ScrollToTop from './components/ScrollToTop'
import { restoreDefaultMetaTags } from './utils/seoMetaTags'
import Home from './pages/Home'
import Features from './pages/Features'
import FeatureDetailsPage from './pages/features/FeatureDetailsPage';
import SuperAdmin from './pages/SuperAdmin'
import OwnerPanel from './pages/OwnerPanel'
import LandingPage from './pages/LandingPage'
import UserApp from './pages/UserApp'
import EmployeeApp from './pages/EmployeeApp'
import ContactUs from './pages/ContactUs'
import Faqs from './pages/Faqs'
import Documents from './pages/Documents'

function SEOHandler() {
  const location = useLocation()

  useEffect(() => {
    restoreDefaultMetaTags()
  }, [location.pathname])

  return null
}

function App() {
  return (
    <>
      <ScrollToTop />
      <SEOHandler />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="features" element={<Features />} />
          <Route path="features/smart-pos" element={<FeatureDetailsPage slug="smart-pos" />} />
          <Route path="features/dynamic-dashboard" element={<FeatureDetailsPage slug="dynamic-dashboard" />} />
          <Route path="features/multi-restaurant" element={<FeatureDetailsPage slug="multi-restaurant" />} />
          <Route path="features/multi-branch-support" element={<FeatureDetailsPage slug="multi-branch-support" />} />
          <Route path="features/live-analytics" element={<FeatureDetailsPage slug="live-analytics" />} />
          <Route path="features/order-reports" element={<FeatureDetailsPage slug="order-reports" />} />
          <Route path="features/qr-based-menu" element={<FeatureDetailsPage slug="qr-based-menu" />} />
          <Route path="features/table-reservation" element={<FeatureDetailsPage slug="table-reservation" />} />
          <Route path="features/kot-feature" element={<FeatureDetailsPage slug="kot-feature" />} />
          <Route path="features/combo-meals" element={<FeatureDetailsPage slug="combo-meals" />} />
          <Route path="features/addon-meals" element={<FeatureDetailsPage slug="addon-meals" />} />
          <Route path="features/branch-pricing" element={<FeatureDetailsPage slug="branch-pricing" />} />
          <Route path="features/staff-scheduling" element={<FeatureDetailsPage slug="staff-scheduling" />} />
          <Route path="features/digital-invoice" element={<FeatureDetailsPage slug="digital-invoice" />} />
          <Route path="features/fiscal-year-reports" element={<FeatureDetailsPage slug="fiscal-year-reports" />} />
          <Route path="features/multi-currency" element={<FeatureDetailsPage slug="multi-currency" />} />
          <Route path="features/multi-language" element={<FeatureDetailsPage slug="multi-language" />} />
          <Route path="features/customer-reviews" element={<FeatureDetailsPage slug="customer-reviews" />} />
          <Route path="super-admin" element={<SuperAdmin />} />
          <Route path="owner-panel" element={<OwnerPanel />} />
          <Route path="landing-page" element={<LandingPage />} />
          <Route path="user-app" element={<UserApp />} />
          <Route path="employee-app" element={<EmployeeApp />} />
          <Route path="documents" element={<Documents />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="faqs" element={<Faqs />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </>
  )
}

export default App