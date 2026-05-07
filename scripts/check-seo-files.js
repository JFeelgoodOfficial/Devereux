#!/usr/bin/env node
'use strict'

const fs   = require('fs')
const path = require('path')

const ROOT     = path.resolve(__dirname, '..')
const failures = []

// ── 1. sitemap.xml ────────────────────────────────────────────────────────────
const SITEMAP = path.join(ROOT, 'sitemap.xml')
if (!fs.existsSync(SITEMAP)) {
  failures.push('Missing: sitemap.xml at repo root')
}

// ── 2. robots.txt ─────────────────────────────────────────────────────────────
const ROBOTS = path.join(ROOT, 'robots.txt')
if (!fs.existsSync(ROBOTS)) {
  failures.push('Missing: robots.txt at repo root')
}

// ── 3. Discover all .html files ───────────────────────────────────────────────
const SKIP = new Set(['node_modules', '.git', '.lighthouseci', 'playwright-report'])

function findHtml(dir, acc = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (SKIP.has(entry.name)) continue
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) findHtml(full, acc)
    else if (entry.name.endsWith('.html')) acc.push(full)
  }
  return acc
}

const htmlFiles = findHtml(ROOT)
console.log(`\nSEO audit — ${htmlFiles.length} HTML file(s) found:`)
htmlFiles.forEach(f => console.log(`  ${path.relative(ROOT, f)}`))

// ── 4. Sitemap <loc> coverage ─────────────────────────────────────────────────
if (fs.existsSync(SITEMAP)) {
  const xml  = fs.readFileSync(SITEMAP, 'utf8')
  const locs = [...xml.matchAll(/<loc>([\s\S]*?)<\/loc>/g)].map(m => m[1].trim())

  if (locs.length === 0) {
    failures.push('sitemap.xml exists but contains no <loc> entries')
  } else {
    for (const htmlFile of htmlFiles) {
      const rel      = path.relative(ROOT, htmlFile).replace(/\\/g, '/')
      const pagePath = rel === 'index.html' ? '/' : `/${rel}`

      const covered = locs.some(loc => {
        try {
          const { pathname } = new URL(loc)
          return pathname === pagePath || pathname === `/${rel}`
        } catch {
          return loc.endsWith(pagePath) || loc.endsWith(`/${rel}`)
        }
      })

      if (!covered) {
        failures.push(`sitemap.xml has no <loc> for "${rel}" (expected path: "${pagePath}")`)
      }
    }
  }
}

// ── Report ────────────────────────────────────────────────────────────────────
console.log()
if (failures.length > 0) {
  console.error('✗ SEO audit failed:')
  failures.forEach(f => console.error(`  - ${f}`))
  process.exit(1)
}

console.log('✓ SEO audit passed')
