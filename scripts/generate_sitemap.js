import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://savoryops.com';

// Only include canonical pages actually served on savoryops.com (White-Label Marketing Platform)
// Note: All product feature, solution, blog, and pricing URLs 301 redirect to website.savoryops.com
// and are indexed under website.savoryops.com/sitemap.xml.
const staticRoutes = [
  { path: '/', priority: '1.0', changefreq: 'daily' },
  { path: '/contact-us', priority: '0.8', changefreq: 'monthly' }
];

async function generateSitemap() {
  console.log('🌐 Generating clean canonical sitemap.xml for SavoryOps Marketing...');

  const currentDate = new Date().toISOString().split('T')[0];

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticRoutes
  .map(
    (route) => `  <url>
    <loc>${BASE_URL}${route.path}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  const sitemapPath = path.join(__dirname, '../public/sitemap.xml');
  fs.writeFileSync(sitemapPath, sitemapXml, 'utf8');

  console.log(`✅ sitemap.xml successfully generated with ${staticRoutes.length} canonical URLs at ${sitemapPath}`);
}

generateSitemap().catch((err) => {
  console.error('❌ Error generating sitemap:', err);
  process.exit(1);
});
