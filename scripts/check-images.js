#!/usr/bin/env node
'use strict'

const fs = require('fs')
const path = require('path')

// ── Configuration ─────────────────────────────────────────────────────────────
const MAX_SIZE_BYTES = 500 * 1024  // 500 KB — raise if game sprites legitimately exceed this
const IMAGE_EXTS = new Set(['.png', '.jpg', '.jpeg', '.webp', '.gif', '.avif'])
const SKIP_DIRS  = new Set(['node_modules', '.git', '.lighthouseci', 'playwright-report'])
// ─────────────────────────────────────────────────────────────────────────────

const ROOT = path.resolve(__dirname, '..')

function walk(dir, results = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (SKIP_DIRS.has(entry.name)) continue
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      walk(full, results)
    } else if (IMAGE_EXTS.has(path.extname(entry.name).toLowerCase())) {
      results.push(full)
    }
  }
  return results
}

function fmt(bytes) {
  return bytes >= 1_048_576
    ? `${(bytes / 1_048_576).toFixed(1)} MB`
    : `${(bytes / 1_024).toFixed(1)} KB`
}

const images    = walk(ROOT)
let totalBytes  = 0
let violations  = 0
const webpHints = []

console.log(`\nImage audit — ${ROOT}\n`)

for (const imgPath of images) {
  const size = fs.statSync(imgPath).size
  const rel  = path.relative(ROOT, imgPath)
  const ext  = path.extname(imgPath).toLowerCase()
  totalBytes += size

  if (size > MAX_SIZE_BYTES) {
    console.error(`  ✗ OVER LIMIT  ${rel}  (${fmt(size)}, limit ${fmt(MAX_SIZE_BYTES)})`)
    violations++
  }

  if (ext === '.png') {
    webpHints.push(`  ⚠ PNG→WebP candidate: ${rel}  (${fmt(size)})`)
  }
}

if (webpHints.length) {
  console.log('\nWebP conversion candidates:')
  webpHints.forEach(l => console.log(l))
}

console.log(
  `\nSummary: ${images.length} image(s)  ·  total ${fmt(totalBytes)}  ·  ${violations} size violation(s)\n`
)

if (violations > 0) {
  console.error(`✗ Image audit failed — ${violations} file(s) exceed ${fmt(MAX_SIZE_BYTES)}`)
  process.exit(1)
}

console.log('✓ Image audit passed')
