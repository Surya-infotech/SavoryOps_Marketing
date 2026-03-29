import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const projectRoot = join(__dirname, '..', '..')

export function readSmartPosSeo() {
  return JSON.parse(
    readFileSync(join(projectRoot, 'src/data/smartPosStaticSeo.json'), 'utf8')
  )
}

function escapeAttr(text) {
  return text.replace(/&/g, '&amp;').replace(/"/g, '&quot;')
}

/** Mutates index.html string to Smart POS head tags (same output as production prerender). */
export function injectSmartPosMeta(html) {
  const seo = readSmartPosSeo()
  const site = 'https://savoryops.com'

  let out = html.replace(/<title>[^<]*<\/title>/, `<title>${escapeAttr(seo.documentTitle)}</title>`)

  out = out.replace(
    /<meta name="description"\s*\n\s*content="[^"]*"\s*\/>/,
    `<meta name="description"\n    content="${escapeAttr(seo.description)}" />`
  )

  out = out.replace(
    /<meta name="keywords"\s*\n\s*content="[^"]*"\s*\/>/,
    `<meta name="keywords"\n    content="${escapeAttr(seo.keywords)}" />`
  )

  out = out.replace(
    /<meta property="og:title" content="[^"]*" \/>/,
    `<meta property="og:title" content="${escapeAttr(seo.ogTitle)}" />`
  )

  out = out.replace(
    /<meta property="og:description"\s*\n\s*content="[^"]*"\s*\/>/,
    `<meta property="og:description"\n    content="${escapeAttr(seo.ogDescription)}" />`
  )

  out = out.replace(
    /<meta property="og:url" content="[^"]*" \/>/,
    `<meta property="og:url" content="${escapeAttr(site + seo.path)}" />`
  )

  out = out.replace(
    /<meta name="twitter:title" content="[^"]*" \/>/,
    `<meta name="twitter:title" content="${escapeAttr(seo.ogTitle)}" />`
  )

  out = out.replace(
    /<meta name="twitter:description"\s*\n\s*content="[^"]*"\s*\/>/,
    `<meta name="twitter:description"\n    content="${escapeAttr(seo.ogDescription)}" />`
  )

  return out
}
