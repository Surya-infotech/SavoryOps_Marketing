import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { injectSmartPosMeta } from '../scripts/shared/injectSmartPosHtml.mjs'

function pathname(req) {
  const raw = req.url?.split('?')[0] ?? ''
  try {
    return decodeURIComponent(raw)
  } catch {
    return raw
  }
}

function wantsHtml(req) {
  const a = req.headers.accept
  if (a == null || a === '') return true
  return a.includes('text/html') || a.includes('*/*')
}

/**
 * Serves Smart POS meta in the raw HTML response for /features/smart-pos so View Source matches Inspect
 * during `vite` and `vite preview` (SPA fallback would otherwise always return root index.html).
 */
export function smartPosHtmlPlugin() {
  return {
    name: 'smart-pos-html-view-source',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (req.method !== 'GET' && req.method !== 'HEAD') return next()
        const p = pathname(req)
        if (p !== '/features/smart-pos' && p !== '/features/smart-pos/') return next()
        if (!wantsHtml(req)) return next()

        try {
          const indexPath = join(server.config.root, 'index.html')
          let html = injectSmartPosMeta(readFileSync(indexPath, 'utf8'))
          // Required so @vitejs/plugin-react injects the Fast Refresh preamble (see plugin-react README).
          html = await server.transformIndexHtml(req.url, html)
          res.setHeader('Content-Type', 'text/html; charset=utf-8')
          res.end(html)
        } catch (e) {
          next(e)
        }
      })
    },
    configurePreviewServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.method !== 'GET' && req.method !== 'HEAD') return next()
        const p = pathname(req)
        if (p !== '/features/smart-pos' && p !== '/features/smart-pos/') return next()
        if (!wantsHtml(req)) return next()

        const outDir = join(server.config.root, server.config.build.outDir)
        const prerendered = join(outDir, 'features', 'smart-pos', 'index.html')
        let html
        if (existsSync(prerendered)) {
          html = readFileSync(prerendered, 'utf8')
        } else {
          const rootIndex = join(outDir, 'index.html')
          if (!existsSync(rootIndex)) return next()
          html = injectSmartPosMeta(readFileSync(rootIndex, 'utf8'))
        }
        res.setHeader('Content-Type', 'text/html; charset=utf-8')
        res.end(html)
      })
    },
  }
}
