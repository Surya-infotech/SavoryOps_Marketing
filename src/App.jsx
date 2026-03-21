import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Features from './pages/Features'
import Products from './pages/Products'
import UpcomingFeatures from './pages/UpcomingFeatures'
import ContactUs from './pages/ContactUs'
import Faqs from './pages/Faqs'

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="features" element={<Features />} />
          <Route path="products" element={<Products />} />
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