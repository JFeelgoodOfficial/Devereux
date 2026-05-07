import { test, expect } from '@playwright/test'

// index.html is the only page — it is simultaneously the homepage and the game.
test.describe('Homepage — Devereux (index.html)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('page title contains "Devereux"', async ({ page }) => {
    await expect(page).toHaveTitle(/Devereux/i)
  })

  test('game canvas is present and visible', async ({ page }) => {
    await expect(page.locator('canvas')).toBeVisible()
  })

  test('game canvas has non-zero width and height', async ({ page }) => {
    const box = await page.locator('canvas').boundingBox()
    expect(box, 'canvas bounding box must not be null').not.toBeNull()
    expect(box!.width, 'canvas width must be > 0').toBeGreaterThan(0)
    expect(box!.height, 'canvas height must be > 0').toBeGreaterThan(0)
  })

  test('no navigation links exist (single-page game — no nav expected)', async ({ page }) => {
    // This game has no HTML navigation; assert no broken nav hrefs slip in.
    const navLinks = await page.locator('nav a').count()
    expect(navLinks).toBe(0)
  })

  test('zero console errors on load', async ({ page }) => {
    const errors: string[] = []
    page.on('console', msg => {
      if (msg.type() === 'error') errors.push(msg.text())
    })
    await page.goto('/')
    await page.waitForTimeout(3_000)
    expect(errors, `Unexpected console errors:\n${errors.join('\n')}`).toHaveLength(0)
  })

  test('no uncaught JavaScript exceptions on load', async ({ page }) => {
    const jsErrors: string[] = []
    page.on('pageerror', err => jsErrors.push(err.message))
    await page.goto('/')
    await page.waitForTimeout(3_000)
    expect(jsErrors, `Uncaught JS errors:\n${jsErrors.join('\n')}`).toHaveLength(0)
  })
})
