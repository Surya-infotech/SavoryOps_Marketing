import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://savoryops.com';

const staticRoutes = [
  '/',
  '/contact-us'
];

function getRouteMetadata(route) {
  // Tier 1: Homepage (1.0)
  if (route === '/') {
    return { priority: '1.0', changefreq: 'daily' };
  }

  // Tier 2: Primary High-Intent Commercial Pages & Solutions (0.9)
  if (
    route.startsWith('/solutions') ||
    route.startsWith('/alternatives')
  ) {
    return { priority: '0.9', changefreq: 'weekly' };
  }

  // Tier 3: Core Tools & Calculator Resources (0.8)
  if (route.startsWith('/resources')) {
    return { priority: '0.8', changefreq: 'weekly' };
  }

  // Default fallback
  return { priority: '0.7', changefreq: 'monthly' };
}

async function generateSitemap() {
  console.log('🌐 Generating comprehensive sitemap.xml for SavoryOps Marketing...');

  // 1. Load programmatic SEO clusters from keywords.json
  const keywordsFilePath = path.join(__dirname, '../src/data/keywords.json');
  let seoRoutes = [];
  if (fs.existsSync(keywordsFilePath)) {
    const keywordsData = JSON.parse(fs.readFileSync(keywordsFilePath, 'utf8'));
    seoRoutes = (keywordsData.clusters || []).map((c) => `/${c.slug}`);
  }

  const allRoutes = Array.from(new Set([...staticRoutes, ...seoRoutes]));
  const currentDate = new Date().toISOString().split('T')[0];

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes
  .map((route) => {
    const { priority, changefreq } = getRouteMetadata(route);

    return `  <url>
    <loc>${BASE_URL}${route}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  })
  .join('\n')}
</urlset>`;

  const sitemapPath = path.join(__dirname, '../public/sitemap.xml');
  fs.writeFileSync(sitemapPath, sitemapXml, 'utf8');

  console.log(`✅ sitemap.xml successfully generated with ${allRoutes.length} URLs at ${sitemapPath}`);
}

generateSitemap().catch((err) => {
  console.error('❌ Error generating sitemap:', err);
  process.exit(1);
});
