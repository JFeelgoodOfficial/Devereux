#!/usr/bin/env node
'use strict'

const fs   = require('fs')
const path = require('path')

const ROOT     = path.resolve(__dirname, '..')
const failures = []
const SKIP     = new Set(['node_modules', '.git', '.lighthouseci', 'playwright-report'])

function findHtml(dir, acc = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (SKIP.has(entry.name)) continue
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) findHtml(full, acc)
    else if (entry.name.endsWith('.html')) acc.push(full)
  }
  return acc
}

const DEAD_HREF    = /href\s*=\s*["']#["']/gi
const EMPTY_ACTION = /action\s*=\s*["']\s*["']/gi

for (const htmlFile of findHtml(ROOT)) {
  const content = fs.readFileSync(htmlFile, 'utf8')
  const rel     = path.relative(ROOT, htmlFile)

  const deadHrefs    = [...content.matchAll(DEAD_HREF)]
  const emptyActions = [...content.matchAll(EMPTY_ACTION)]

  if (deadHrefs.length)
    failures.push(`${rel}: ${deadHrefs.length} instance(s) of href="#"`)
  if (emptyActions.length)
    failures.push(`${rel}: ${emptyActions.length} instance(s) of empty action=""`)
}

if (failures.length > 0) {
  console.error('\n✗ Dead link check failed:')
  failures.forEach(f => console.error(`  - ${f}`))
  process.exit(1)
}

console.log('✓ No dead links (href="#" or empty action) found')
