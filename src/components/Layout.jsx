import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f8f9fa] text-slate-800 selection:bg-primary-500 selection:text-white font-sans">
      <Navbar />
      
      <main className="flex-grow flex flex-col pt-20">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}
