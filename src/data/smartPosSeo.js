/**
 * Single source for Smart POS copy + SEO (features UI, SmartPos.jsx, prerender, Vite plugin).
 */
export const smartPosCore = {
  title: 'Smart POS',
  slug: 'smart-pos',
  desc: 'Streamline front-of-house operations with our intuitive Point of Sale.',
  seoHeading: 'High-Speed Restaurant POS System for Effortless Billing',
  metaDescription:
    'High-speed restaurant Point of Sale with SavoryOps. Intuitive billing, split checks, multi-tender payments, and tax-aware checkout built for dinner rushes and reliable front-of-house operations.',
  keywords:
    'smart pos, restaurant point of sale, pos system, restaurant billing, split checks, multi-tender payments, front of house, tablet pos, checkout software, restaurant software, SavoryOps',
}

const SITE = 'https://savoryops.com'

/** Values injected into HTML head (prerender + runtime). */
export function getSmartPosStaticHead() {
  const c = smartPosCore
  return {
    documentTitle: `${c.title} - SavoryOps`,
    description: c.metaDescription,
    keywords: c.keywords,
    ogTitle: `${c.seoHeading} | SavoryOps`,
    ogDescription: c.desc,
    path: `/features/${c.slug}`,
    ogUrl: `${SITE}/features/${c.slug}`,
  }
}
