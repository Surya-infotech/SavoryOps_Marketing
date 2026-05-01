# SavoryOps Website Content Documentation

This document describes the content currently shown on the SavoryOps marketing website for:

- Owner Panel details
- Super Admin Panel details
- Feature-wise pages and highlights

## Main Product Ecosystem Shown on Website

The home page presents SavoryOps as a white-label ecosystem with these products:

- Custom Website (`/landing-page`)
- Super Admin (`/super-admin`)
- Owner Panel (`/owner-panel`)
- Employee App (`/employee-app`)
- User App (`/user-app`)

The messaging emphasizes:

- Complete source code access
- White-label branding support
- Rebranding and reselling to restaurant clients

## Owner Panel Details (Website Content)

**Route:** `/owner-panel`  
**Page title:** `Owner Panel | SavoryOps`

### Core Description Shown

"The dedicated management interface for restaurant owners. Oversee daily operations, track kitchen activities, monitor staff, and analyze real-time dynamic reports."

### Main Actions on Page

- **Live Demo** button
  - Uses environment variable `VITE_OWNER_PANEL_DEMO`
  - Opens external URL when value starts with `http`
  - Otherwise routes internally using React Router
- **Buy Source Code** button
  - Navigates to `/contact`

### Positioning

The page positions Owner Panel as the day-to-day operational control center for restaurant owners.

## Super Admin Panel Details (Website Content)

**Route:** `/super-admin`  
**Page title:** `Super Admin Panel | SavoryOps`

### Core Description Shown

"Full source code access to the ultimate control center. Manage all restaurants, branches, subscriptions, and system-wide configurations from a single, powerful dashboard."

### Main Actions on Page

- **Live Demo** button
  - Uses environment variable `VITE_SUPER_ADMIN_DEMO`
  - Opens external URL when value starts with `http`
  - Otherwise routes internally using React Router
- **Buy Source Code** button
  - Navigates to `/contact`

### Positioning

The page positions Super Admin as the global, system-level control panel for multi-restaurant and multi-branch operations.

## Feature-Wise Documentation (Shown on Website)

The website exposes a full features catalog via:

- Listing page: `/features`
- Individual feature pages: `/features/<slug>`

### Feature List with Website Slugs

1. Smart POS - `smart-pos`
2. Dynamic Dashboard - `dynamic-dashboard`
3. Multi Restaurant - `multi-restaurant`
4. Multi Branch Support - `multi-branch-support`
5. Live Analytics - `live-analytics`
6. Order Reports - `order-reports`
7. QR Based Menu - `qr-based-menu`
8. Table Reservation - `table-reservation`
9. KOT Feature - `kot-feature`
10. Combo Meals - `combo-meals`
11. Addon Meals - `addon-meals`
12. Branch Pricing - `branch-pricing`
13. Staff Scheduling - `staff-scheduling`
14. Digital Invoice - `digital-invoice`
15. Fiscal Year Reports - `fiscal-year-reports`
16. Multi Currency - `multi-currency`
17. Multi Language - `multi-language`
18. Customer Reviews - `customer-reviews`

### Feature Highlights by Category

#### Operations & Sales

- Smart POS: fast checkout, tax handling, multi-tender support, offline support
- Order Reports: deep ticket tracking, payment breakdowns, historical reporting
- Dynamic Dashboard: real-time branch visibility and KPI monitoring

#### Multi-Location & Scale

- Multi Restaurant: independent vendor operations under one platform
- Multi Branch Support: centralized control across multiple branches
- Branch Pricing: location-specific pricing overrides with global menu sync

#### Customer Experience

- QR Based Menu: contactless browsing, ordering, and table-side flow
- Table Reservation: booking and seating optimization tools
- Customer Reviews: post-order feedback and reputation management

#### Kitchen & Menu Intelligence

- KOT Feature: route orders to correct prep stations
- Combo Meals: bundled pricing and upsell-oriented combinations
- Addon Meals: rich modifier/add-on configuration

#### Finance, Globalization & Compliance

- Digital Invoice: paperless invoice generation and digital delivery
- Fiscal Year Reports: custom fiscal calendar reporting and exports
- Multi Currency: international currency handling and localization support
- Multi Language: multilingual UI and communication support

#### Workforce

- Staff Scheduling: shift planning, attendance tracking, and role-based access support

## Supporting Environment Variables for Website CTAs

These variables drive core demo and conversion actions used in website pages:

- `VITE_OWNER_PANEL_DEMO`
- `VITE_SUPER_ADMIN_DEMO`
- `VITE_LANDING_PAGE_DEMO`
- `VITE_BUY_NOW`

## Source of Documentation

This document is based on the current website page content and feature data defined in:

- `src/pages/OwnerPanel.jsx`
- `src/pages/SuperAdmin.jsx`
- `src/pages/Features.jsx`
- `src/data/featuresData.jsx`
- `src/pages/Home.jsx`
- `src/App.jsx`
