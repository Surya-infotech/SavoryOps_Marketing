import { MdComputer, MdDashboard, MdRestaurant, MdStorefront, MdBarChart, MdAssessment, MdQrCodeScanner, MdEventSeat, MdAssignment, MdFastfood, MdLibraryAdd, MdPriceChange, MdGroups, MdReceipt, MdAccountBalance, MdPayments, MdLanguage, MdStarRate } from 'react-icons/md';

export const featuresData = [
  { title: 'Smart POS', icon: <MdComputer />, color: 'bg-blue-50 text-blue-500', desc: 'Streamline front-of-house operations with our intuitive Point of Sale.' },
  { title: 'Dynamic Dashboard', icon: <MdDashboard />, color: 'bg-indigo-50 text-indigo-500', desc: "Get a bird's-eye view of all branches with real-time earnings and order tracking." },
  { title: 'Multi Restaurant', icon: <MdRestaurant />, color: 'bg-amber-50 text-amber-500', desc: 'Run a marketplace or food court with independent vendor management.' },
  { title: 'Multi Branch Support', icon: <MdStorefront />, color: 'bg-orange-50 text-orange-500', desc: 'Manage multiple branches seamlessly from a centralized dashboard.' },
  { title: 'Live Analytics', icon: <MdBarChart />, color: 'bg-sky-50 text-sky-500', desc: 'Make data-driven decisions with real-time insight into sales.' },
  { title: 'Order Reports', icon: <MdAssessment />, color: 'bg-blue-50 text-blue-600', desc: 'Access granular transaction histories and deep-dive order insights.' },
  { title: 'QR Based Menu', icon: <MdQrCodeScanner />, color: 'bg-emerald-50 text-emerald-500', desc: 'Let customers browse and order directly from their smartphones.' },
  { title: 'Table Reservation', icon: <MdEventSeat />, color: 'bg-indigo-50 text-indigo-500', desc: 'Allow guests to book tables in advance to optimize seating.' },
  { title: 'KOT Feature', icon: <MdAssignment />, color: 'bg-rose-50 text-rose-500', desc: 'Generate clear Kitchen Order Tickets to keep your staff synchronized.' },
  { title: 'Combo Meals', icon: <MdFastfood />, color: 'bg-orange-50 text-orange-600', desc: 'Increase revenue by uniquely grouping items into attractive combos.' },
  { title: 'Addon Meals', icon: <MdLibraryAdd />, color: 'bg-purple-50 text-purple-600', desc: 'Upsell efficiently by offering custom meal add-ons and modifiers.' },
  { title: 'Branch Pricing', icon: <MdPriceChange />, color: 'bg-emerald-50 text-emerald-600', desc: 'Configure unique menu item prices specifically for individual locations.' },
  { title: 'Staff Scheduling', icon: <MdGroups />, color: 'bg-purple-50 text-purple-500', desc: 'Organize team shifts, track hours, and manage attendance easily.' },
  { title: 'Digital Invoice', icon: <MdReceipt />, color: 'bg-cyan-50 text-cyan-500', desc: 'Generate eco-friendly digital invoices and send them directly to customers.' },
  { title: 'Fiscal Year Reports', icon: <MdAccountBalance />, color: 'bg-green-50 text-green-600', desc: 'Export robust financial data aligned with your custom fiscal calendars.' },
  { title: 'Multi Currency', icon: <MdPayments />, color: 'bg-teal-50 text-teal-600', desc: 'Scale globally and accept international payments seamlessly.' },
  { title: 'Multi Language', icon: <MdLanguage />, color: 'bg-teal-50 text-teal-500', desc: 'Serve a diverse customer base by offering your menus in multiple languages.' },
  { title: 'Customer Reviews', icon: <MdStarRate />, color: 'bg-yellow-50 text-yellow-500', desc: 'Collect customer feedback effortlessly to improve service and build trust.' }
];