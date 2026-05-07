import { test, expect } from '@playwright/test'

// All HTML pages in the Devereux repo, as site-root-relative paths.
// Add an entry here whenever a new .html file is committed.
const PAGES: string[] = [
  '/', // index.html
]

for (const pagePath of PAGES) {
  test.describe(`SEO — ${pagePath}`, () => {
    test.beforeEach(async ({ page }) => {
      await page.goto(pagePath)
    })

    test('title contains "Devereux"', async ({ page }) => {
      await expect(page).toHaveTitle(/Devereux/i)
    })

    test('<meta name="description"> is present and non-empty', async ({ page }) => {
      const content = await page
        .locator('meta[name="description"]')
        .getAttribute('content')
      expect(content, 'meta[name="description"] is missing or has no content attribute').toBeTruthy()
      expect(content!.trim().length, 'meta description must not be blank').toBeGreaterThan(10)
    })

    test('og:title is present and non-empty', async ({ page }) => {
      const content = await page
        .locator('meta[property="og:title"]')
        .getAttribute('content')
      expect(content, 'og:title missing or empty').toBeTruthy()
      expect(content!.trim().length).toBeGreaterThan(0)
    })

    test('og:description is present and non-empty', async ({ page }) => {
      const content = await page
        .locator('meta[property="og:description"]')
        .getAttribute('content')
      expect(content, 'og:description missing or empty').toBeTruthy()
      expect(content!.trim().length).toBeGreaterThan(0)
    })

    test('og:image is present and non-empty', async ({ page }) => {
      const content = await page
        .locator('meta[property="og:image"]')
        .getAttribute('content')
      expect(content, 'og:image missing or empty').toBeTruthy()
      expect(content!.trim().length).toBeGreaterThan(0)
    })

    test('<link rel="canonical"> is present and non-empty', async ({ page }) => {
      const href = await page
        .locator('link[rel="canonical"]')
        .getAttribute('href')
      expect(href, 'canonical link is missing').toBeTruthy()
      expect(href!.trim().length).toBeGreaterThan(0)
    })

    test('JSON-LD structured data block is present', async ({ page }) => {
      const count = await page
        .locator('script[type="application/ld+json"]')
        .count()
      expect(count, 'No application/ld+json block found').toBeGreaterThan(0)
    })

    test('JSON-LD block contains valid JSON with an @type', async ({ page }) => {
      const raw = await page
        .locator('script[type="application/ld+json"]')
        .first()
        .textContent()
      expect(raw, 'JSON-LD block is empty').toBeTruthy()
      let parsed: unknown
      expect(() => {
        parsed = JSON.parse(raw!)
      }, 'JSON-LD must be valid JSON').not.toThrow()
      expect(
        (parsed as Record<string, unknown>)['@type'],
        'JSON-LD must declare an @type'
      ).toBeTruthy()
    })
  })
}
