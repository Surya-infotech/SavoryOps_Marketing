import { MdComputer, MdDashboard, MdRestaurant, MdStorefront, MdBarChart, MdAssessment, MdQrCodeScanner, MdEventSeat, MdAssignment, MdFastfood, MdLibraryAdd, MdPriceChange, MdGroups, MdReceipt, MdAccountBalance, MdPayments, MdLanguage, MdStarRate } from 'react-icons/md';
import { smartPosCore } from './smartPosSeo';

export const featuresData = [
  {
    ...smartPosCore,
    icon: <MdComputer />,
    color: 'bg-blue-50 text-blue-500',
    longDesc:
      'Eliminate bottlenecks at the checkout counter with our lightning-fast, intuitive Point of Sale software. Designed to handle intense dinner rushes, our Smart POS seamlessly manages split checks, varying tax structures, and multi-tender payments without breaking a sweat. Fully cloud-based, it ensures your data is instantly backed up across your entire network.',
    benefits: [
      'Zero-lag order processing',
      'Offline mode support for uninterrupted service',
      'Hardware-agnostic (works on tablets, desktops)',
      'Automated tax calculations',
    ],
  },
  { 
    title: 'Dynamic Dashboard', 
    slug: 'dynamic-dashboard',
    icon: <MdDashboard />, 
    color: 'bg-indigo-50 text-indigo-500', 
    desc: "Get a bird's-eye view of all branches with real-time earnings and order tracking.",
    seoHeading: 'Centralized Admin Dashboard for Real-Time Oversight',
    longDesc: 'Stop guessing and start knowing. The dynamic administrator dashboard provides absolute transparency across your entire restaurant ecosystem. Monitor live sales, track granular inventory levels, and check employee shifts instantly from a single window. The UI is completely modular, allowing owners to prioritize critical KPIs.',
    benefits: ['Live revenue and sales tracking', 'Actionable insights displayed graphically', 'Low inventory auto-alerts', 'Cross-branch synchronization']
  },
  { 
    title: 'Multi Restaurant', 
    slug: 'multi-restaurant',
    icon: <MdRestaurant />, 
    color: 'bg-amber-50 text-amber-500', 
    desc: 'Run a marketplace or food court with independent vendor management.',
    seoHeading: 'Advanced Multi-Restaurant Ecosystem & Cloud Kitchen Support',
    longDesc: 'Whether you are managing a massive food court, a digital food hall, or a ghost kitchen, our multi-restaurant framework allows you to aggregate numerous vendors under one digital roof. Each restaurant operates entirely independently while you collect platform fees.',
    benefits: ['Independent vendor dashboards', 'Custom platform commission structures', 'Unified marketplace ordering app', 'Global reporting rollups']
  },
  { 
    title: 'Multi Branch Support', 
    slug: 'multi-branch-support',
    icon: <MdStorefront />, 
    color: 'bg-orange-50 text-orange-500', 
    desc: 'Manage multiple branches seamlessly from a centralized dashboard.',
    seoHeading: 'Franchise-Ready Multi-Branch Management',
    longDesc: 'Scaling your restaurant empire has never been easier. Oversee operations across an unlimited number of geographic locations without leaving your office. Instantly deploy new menu items globally or restrict pricing tiers to specific postal codes.',
    benefits: ['Centralized menu management', 'Branch-specific performance metrics', 'Standardized reporting across locations', 'Employee transfer capabilities']
  },
  { 
    title: 'Live Analytics', 
    slug: 'live-analytics',
    icon: <MdBarChart />, 
    color: 'bg-sky-50 text-sky-500', 
    desc: 'Make data-driven decisions with real-time insight into sales.',
    seoHeading: 'Real-Time Data Analytics & Business Intelligence',
    longDesc: 'Harness the power of your operational data. We translate complex transaction histories into beautiful, easy-to-read charts that give you immediate insight into peak ordering times, underperforming menu items, and seasonal revenue trends.',
    benefits: ['Predictive sales forecasting', 'Identify top-selling menu variants', 'Visual data representation', 'Exportable to CSV/PDF']
  },
  { 
    title: 'Order Reports', 
    slug: 'order-reports',
    icon: <MdAssessment />, 
    color: 'bg-blue-50 text-blue-600', 
    desc: 'Access granular transaction histories and deep-dive order insights.',
    seoHeading: 'Comprehensive Order and Transaction Reporting',
    longDesc: 'Deep-dive into every single ticket that passes through your digital infrastructure. Filter orders by date, payment method, branch, or employee to track down discrepancies, handle customer disputes, or fulfill audit requirements instantly.',
    benefits: ['Granular ticket searching', 'Tender-type breakdowns', 'Void/Discount tracking', 'Cloud-hosted historical data retention']
  },
  { 
    title: 'QR Based Menu', 
    slug: 'qr-based-menu',
    icon: <MdQrCodeScanner />, 
    color: 'bg-emerald-50 text-emerald-500', 
    desc: 'Let customers browse and order directly from their smartphones.',
    seoHeading: 'Contactless QR Menu Ordering System',
    longDesc: 'Elevate your dining experience and turn tables faster with contactless QR code menus. Guests simply scan the code at their table to view gorgeous, media-rich menus, place orders, and pay their bill—all without waiting for a server.',
    benefits: ['Reduce front-of-house labor costs', 'Increase upselling through digital prompts', 'Instantly update 86\'d items', 'Hygienic and paperless']
  },
  { 
    title: 'Table Reservation', 
    slug: 'table-reservation',
    icon: <MdEventSeat />, 
    color: 'bg-indigo-50 text-indigo-500', 
    desc: 'Allow guests to book tables in advance to optimize seating.',
    seoHeading: 'Intelligent Table Reservation and Layout Management',
    longDesc: 'Maximize your floor plan efficiency. Our visual table reservation system allows hosts to drag and drop bookings, manage party sizes, and estimate wait times with precision. The system automatically syncs with your online booking widget.',
    benefits: ['Visual floor plan builder', 'SMS confirmation integration', 'Waitlist management', 'Prevent overbooking dynamically']
  },
  { 
    title: 'KOT Feature', 
    slug: 'kot-feature',
    icon: <MdAssignment />, 
    color: 'bg-rose-50 text-rose-500', 
    desc: 'Generate clear Kitchen Order Tickets to keep your staff synchronized.',
    seoHeading: 'Automated Kitchen Order Tickets (KOT)',
    longDesc: 'Bridge the gap between front-of-house and the kitchen. The instant an order is punched into the POS, Kitchen Order Tickets are fired off to specific prep stations securely (e.g., drinks go to the bar, appetizers to the fry station).',
    benefits: ['Route items by category', 'Digital KDS (Kitchen Display System) support', 'Minimize verbal miscommunications', 'Track estimated prep times']
  },
  { 
    title: 'Combo Meals', 
    slug: 'combo-meals',
    icon: <MdFastfood />, 
    color: 'bg-orange-50 text-orange-600', 
    desc: 'Increase revenue by uniquely grouping items into attractive combos.',
    seoHeading: 'Dynamic Combo Meal Builders',
    longDesc: 'Drive higher average order values by grouping complementary items together. Our system lets you build flexible combos (e.g., "Pick 2 Sides", "Add a Drink for $1") that automatically reflect the correct grouped pricing and inventory deductions.',
    benefits: ['Boost average check size', 'Flexible multi-choice rules', 'Accurate stock deduction per item', 'Scheduled combo availability']
  },
  { 
    title: 'Addon Meals', 
    slug: 'addon-meals',
    icon: <MdLibraryAdd />, 
    color: 'bg-purple-50 text-purple-600', 
    desc: 'Upsell efficiently by offering custom meal add-ons and modifiers.',
    seoHeading: 'Customizable Modifiers and Add-Ons',
    longDesc: 'Give your guests exactly what they want. Support highly complex order modifiers, mandatory single-choice options (e.g., Meat Temperature), and optional multi-choice add-ons (e.g., Extra Cheese, Bacon) without cluttering the screen.',
    benefits: ['Enforced nested modifiers', 'Upsell premium ingredients easily', 'Clear kitchen instructions', 'Dietary restriction flags']
  },
  { 
    title: 'Branch Pricing', 
    slug: 'branch-pricing',
    icon: <MdPriceChange />, 
    color: 'bg-emerald-50 text-emerald-600', 
    desc: 'Configure unique menu item prices specifically for individual locations.',
    seoHeading: 'Location-Specific Branch Pricing Models',
    longDesc: 'A burger in Manhattan costs more to produce than a burger in Ohio. Our branch pricing engine allows you to utilize a unified global menu while overriding the final retail prices mapped to specific, high-overhead locations.',
    benefits: ['Localized profit margins', 'Centralized global menu sync', 'Scheduled holiday surge pricing', 'Bulk price update tools']
  },
  { 
    title: 'Staff Scheduling', 
    slug: 'staff-scheduling',
    icon: <MdGroups />, 
    color: 'bg-purple-50 text-purple-500', 
    desc: 'Organize team shifts, track hours, and manage attendance easily.',
    seoHeading: 'Integrated Employee Scheduling & Time Clock',
    longDesc: 'Throw out the paper schedules. Build staff rosters digitally while the system checks for overtime conflicts and availability. Staff can clock in/out directly through the POS utilizing secure PINs, directly feeding your payroll exports.',
    benefits: ['Digital clock-in/out integration', 'Overtime warning flags', 'Shift swapping approvals', 'Role-based access permissions']
  },
  { 
    title: 'Digital Invoice', 
    slug: 'digital-invoice',
    icon: <MdReceipt />, 
    color: 'bg-cyan-50 text-cyan-500', 
    desc: 'Generate eco-friendly digital invoices and send them directly to customers.',
    seoHeading: 'Eco-Friendly Digital Invoicing',
    longDesc: 'Reduce physical paper waste and offer a modern checkout experience by instantly generating PDF invoices. Delivery orders and corporate catering bookings can receive tax-compliant digital bills directly to their verified email addresses.',
    benefits: ['Zero thermal paper waste', 'Custom branded PDF layouts', 'Integrated payment links', 'Automatic tax compliance']
  },
  { 
    title: 'Fiscal Year Reports', 
    slug: 'fiscal-year-reports',
    icon: <MdAccountBalance />, 
    color: 'bg-green-50 text-green-600', 
    desc: 'Export robust financial data aligned with your custom fiscal calendars.',
    seoHeading: 'Custom Fiscal Year Accounting Reports',
    longDesc: 'Accountants love SavoryOps. Instead of manually structuring spreadsheets, define your organization\'s unique fiscal year start/end dates and let the software automatically generate P&L structures, tax liabilities, and revenue rollups.',
    benefits: ['P&L statement structuring', 'Custom fiscal calendar bounding', 'QuickBooks/Xero export ready', 'Tax liability summaries']
  },
  { 
    title: 'Multi Currency', 
    slug: 'multi-currency',
    icon: <MdPayments />, 
    color: 'bg-teal-50 text-teal-600', 
    desc: 'Scale globally and accept international payments seamlessly.',
    seoHeading: 'Global Multi-Currency Processing Integration',
    longDesc: 'Take your restaurant software internationally. Built with globalization in mind, SavoryOps inherently supports dozens of global currencies, applying accurate localization formatting for decimal placements and currency symbols in the UI.',
    benefits: ['Accept international cards', 'Localized formatting (e.g. £, ¥, €)', 'Auto daily exchange rate sync', 'Region-specific tax rules']
  },
  { 
    title: 'Multi Language', 
    slug: 'multi-language',
    icon: <MdLanguage />, 
    color: 'bg-teal-50 text-teal-500', 
    desc: 'Serve a diverse customer base by offering your menus in multiple languages.',
    seoHeading: 'Seamless Multi-Language Interface Support',
    longDesc: 'Break down language barriers in the kitchen and the dining room. Allow customers to browse their mobile QR menus in Spanish, while the KDS prints tickets in English, natively bridging communication gaps to ensure absolute order accuracy.',
    benefits: ['User-toggled language modes', 'Native RTL (Right-to-Left) support', 'Custom string translations', 'Bilingual kitchen tickets']
  },
  { 
    title: 'Customer Reviews', 
    slug: 'customer-reviews',
    icon: <MdStarRate />, 
    color: 'bg-yellow-50 text-yellow-500', 
    desc: 'Collect customer feedback effortlessly to improve service and build trust.',
    seoHeading: 'Automated Customer Review & Feedback Collection',
    longDesc: 'Protect your online reputation by intercepting reviews internally. Automatically prompt users to rate their food through the mobile app post-delivery, allowing you to resolve poor experiences privately before they hit Yelp or Google.',
    benefits: ['Post-order push notifications', 'Internal rating dashboards', 'Identify problematic menu items', 'Reward positive reviewers']
  }
];