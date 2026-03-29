import { useEffect } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Layout from './components/Layout'
import ScrollToTop from './components/ScrollToTop'
import { restoreDefaultMetaTags } from './utils/seoMetaTags'
import Home from './pages/Home'
import Features from './pages/Features'
import SmartPos from './pages/features/SmartPos';
import DynamicDashboard from './pages/features/DynamicDashboard';
import MultiRestaurant from './pages/features/MultiRestaurant';
import MultiBranchSupport from './pages/features/MultiBranchSupport';
import LiveAnalytics from './pages/features/LiveAnalytics';            
import OrderReports from './pages/features/OrderReports';
import QrBasedMenu from './pages/features/QrBasedMenu';
import TableReservation from './pages/features/TableReservation';
import KotFeature from './pages/features/KotFeature';
import ComboMeals from './pages/features/ComboMeals';
import AddonMeals from './pages/features/AddonMeals';
import BranchPricing from './pages/features/BranchPricing';
import StaffScheduling from './pages/features/StaffScheduling';
import DigitalInvoice from './pages/features/DigitalInvoice';
import FiscalYearReports from './pages/features/FiscalYearReports';
import MultiCurrency from './pages/features/MultiCurrency';
import MultiLanguage from './pages/features/MultiLanguage';
import CustomerReviews from './pages/features/CustomerReviews';
import SuperAdmin from './pages/SuperAdmin'
import OwnerPanel from './pages/OwnerPanel'
import LandingPage from './pages/LandingPage'
import UserApp from './pages/UserApp'
import EmployeeApp from './pages/EmployeeApp'
import UpcomingFeatures from './pages/UpcomingFeatures'
import ContactUs from './pages/ContactUs'
import Faqs from './pages/Faqs'

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
          <Route path="features/smart-pos" element={<SmartPos />} />
          <Route path="features/dynamic-dashboard" element={<DynamicDashboard />} />
          <Route path="features/multi-restaurant" element={<MultiRestaurant />} />
          <Route path="features/multi-branch-support" element={<MultiBranchSupport />} />
          <Route path="features/live-analytics" element={<LiveAnalytics />} />
          <Route path="features/order-reports" element={<OrderReports />} />
          <Route path="features/qr-based-menu" element={<QrBasedMenu />} />
          <Route path="features/table-reservation" element={<TableReservation />} />
          <Route path="features/kot-feature" element={<KotFeature />} />
          <Route path="features/combo-meals" element={<ComboMeals />} />
          <Route path="features/addon-meals" element={<AddonMeals />} />
          <Route path="features/branch-pricing" element={<BranchPricing />} />
          <Route path="features/staff-scheduling" element={<StaffScheduling />} />
          <Route path="features/digital-invoice" element={<DigitalInvoice />} />
          <Route path="features/fiscal-year-reports" element={<FiscalYearReports />} />
          <Route path="features/multi-currency" element={<MultiCurrency />} />
          <Route path="features/multi-language" element={<MultiLanguage />} />
          <Route path="features/customer-reviews" element={<CustomerReviews />} />
          <Route path="super-admin" element={<SuperAdmin />} />
          <Route path="owner-panel" element={<OwnerPanel />} />
          <Route path="landing-page" element={<LandingPage />} />
          <Route path="user-app" element={<UserApp />} />
          <Route path="employee-app" element={<EmployeeApp />} />
          <Route path="upcoming-features" element={<UpcomingFeatures />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="faqs" element={<Faqs />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </>
  )
}

export default App