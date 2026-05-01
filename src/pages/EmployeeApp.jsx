import { Helmet } from 'react-helmet-async';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import AppButton from '../components/ui/AppButton';
import AppIcon from '../components/ui/AppIcon';
import employeeAppScreenshotWaiterOrderCreation from '../assets/Employee App/Screenshot_20260429_074708_SavoryOps Employee.jpg';
import employeeAppScreenshotHeadChefKitchenDashboard from '../assets/Employee App/Screenshot_20260429_074739_SavoryOps Employee.jpg';
import employeeAppScreenshotHeadChefAssignments from '../assets/Employee App/Screenshot_20260429_074822_SavoryOps Employee.jpg';
import employeeAppScreenshotCashierDashboard from '../assets/Employee App/Screenshot_20260429_074841_SavoryOps Employee.jpg';
import employeeAppScreenshotHostFloorAwareness from '../assets/Employee App/Screenshot_20260429_074625_SavoryOps Employee.jpg';
import employeeAppScreenshotSettingsOverview from '../assets/Employee App/Screenshot_20260429_074932_SavoryOps Employee.jpg';
import employeeAppScreenshotSettingsLanguage from '../assets/Employee App/Screenshot_20260429_074915_SavoryOps Employee.jpg';
import employeeAppScreenshotSettingsDateTime from '../assets/Employee App/Screenshot_20260429_074923_SavoryOps Employee.jpg';

export default function EmployeeApp() {
  const buyNowUrl = import.meta.env.VITE_BUY_NOW?.trim() || '';
  const buyNowIsExternal = buyNowUrl.startsWith('http');

  const roleHighlights = [
    'Waiter flow supports QR-based order creation and ticket handling.',
    'Head Chef dashboard manages KOT visibility, delegation, and status updates.',
    'Chef/assignment workflow tracks item-level preparation responsibility.',
    'Cashier panel handles payment closure and billing status.',
    'Host view provides floor-awareness and booking support by area.'
  ];

  const roleScreenshots = [
    { src: employeeAppScreenshotWaiterOrderCreation, alt: 'Waiter order creation and QR flow' },
    { src: employeeAppScreenshotHeadChefKitchenDashboard, alt: 'Head chef kitchen dashboard and KOT queue' },
    { src: employeeAppScreenshotHeadChefAssignments, alt: 'Chef assignment and ticket execution flow' },
    { src: employeeAppScreenshotCashierDashboard, alt: 'Cashier dashboard with payment and order status' },
    { src: employeeAppScreenshotHostFloorAwareness, alt: 'Host floor awareness with area-wise table status' }
  ];

  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>Employee App | SavoryOps</title>
        <meta
          name="description"
          content="SavoryOps Employee App detail page showing role-based operations for waiter, chef, cashier, and host with personalization settings and screenshots."
        />
      </Helmet>

      <div className="relative pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full blur-[100px] opacity-20 -z-10 translate-x-1/3 -translate-y-1/3 bg-emerald-100"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-10 items-center">
            <div className="text-center lg:text-left animate-slide-up">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
                Employee App Details
              </h1>
              <p className="text-xl text-slate-500 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                The Employee App is role-based and branch-aware, adapting the interface for Waiters, Chefs, Cashiers, and Hosts so each staff member gets focused operational tools.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {roleHighlights.map((item, idx) => (
                  <div key={idx} className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-left flex items-start gap-3">
                    <AppIcon tone="success" className="!rounded-full !w-7 !h-7 !text-emerald-700 !bg-emerald-100 mt-0.5 flex-shrink-0">
                      <CheckRoundedIcon fontSize="small" />
                    </AppIcon>
                    <p className="text-sm font-semibold text-slate-700">{item}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <AppButton
                  href={import.meta.env.VITE_EMPLOYEE_PANEL_DEMO}
                  className="sm:!w-auto !w-full !py-3.5 shadow-lg shadow-primary-500/20"
                  endIcon={<ArrowForwardRoundedIcon />}
                >
                  Live Demo
                </AppButton>
                {buyNowIsExternal ? (
                  <AppButton href={buyNowUrl} variant="outlined" color="secondary" className="sm:!w-auto !w-full !py-3.5">
                    Buy now
                  </AppButton>
                ) : (
                  <AppButton to={buyNowUrl || '/contact'} variant="outlined" color="secondary" className="sm:!w-auto !w-full !py-3.5">
                    Buy now
                  </AppButton>
                )}
              </div>
            </div>

            <div className="w-full bg-[#f8f9fa] border border-slate-100 rounded-[2rem] p-5 shadow-card animate-slide-up" style={{ animationDelay: '120ms' }}>
              <img
                src={employeeAppScreenshotWaiterOrderCreation}
                alt="Employee app waiter order creation interface"
                className="w-full h-auto object-cover rounded-2xl border border-slate-200"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 bg-[#f8f9fa] border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">Role-Based Workflow Screens</h2>
            <p className="text-slate-600 mb-6">
              Each role receives dedicated screens and controls so kitchen, service, and billing operations remain synchronized throughout the day.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {roleScreenshots.map((item) => (
                <img
                  key={item.src}
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-auto object-cover rounded-2xl border border-slate-200"
                  loading="lazy"
                />
              ))}
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <AppIcon tone="brand">
                <SettingsRoundedIcon />
              </AppIcon>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">Personalization & Settings</h2>
            </div>
            <p className="text-slate-600 mb-6">
              Employees can personalize language and localization settings, and manage secure account actions from the app settings area.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <img
                src={employeeAppScreenshotSettingsOverview}
                alt="Employee app settings overview page"
                className="w-full h-auto object-cover rounded-2xl border border-slate-200"
                loading="lazy"
              />
              <img
                src={employeeAppScreenshotSettingsLanguage}
                alt="Employee app language selection screen"
                className="w-full h-auto object-cover rounded-2xl border border-slate-200"
                loading="lazy"
              />
              <img
                src={employeeAppScreenshotSettingsDateTime}
                alt="Employee app date and time format settings"
                className="w-full h-auto object-cover rounded-2xl border border-slate-200"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
