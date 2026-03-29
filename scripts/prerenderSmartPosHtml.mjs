/**
 * After `vite build`, writes dist/features/smart-pos/index.html (production View Source + static hosts).
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { injectSmartPosMeta } from './shared/injectSmartPosHtml.mjs'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const dist = join(root, 'dist')
const indexPath = join(dist, 'index.html')

if (!existsSync(indexPath)) {
  console.error('prerenderSmartPosHtml: dist/index.html missing — run vite build first')
  process.exit(1)
}

let html = readFileSync(indexPath, 'utf8')
html = injectSmartPosMeta(html)

const outDir = join(dist, 'features', 'smart-pos')
mkdirSync(outDir, { recursive: true })
writeFileSync(join(outDir, 'index.html'), html, 'utf8')
console.log('prerenderSmartPosHtml: wrote dist/features/smart-pos/index.html')
