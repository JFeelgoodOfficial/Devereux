import { test, expect } from '@playwright/test'

// index.html hosts the entire Devereux game — the GDevelop-exported canvas
// is the primary interactive element. These tests verify runtime init and
// core playability signals on both desktop and mobile viewports.
test.describe('Game — Devereux (index.html)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('GDevelop runtime (gdjs) is exposed on window', async ({ page }) => {
    const gdjsPresent = await page.evaluate(
      () => typeof (window as unknown as { gdjs: unknown }).gdjs !== 'undefined'
    )
    expect(gdjsPresent, 'gdjs must be defined after scripts load').toBe(true)
  })

  test('game canvas renders at a non-trivial size (≥ 100 × 100 px)', async ({ page }) => {
    const canvas = page.locator('canvas')
    await expect(canvas).toBeVisible()
    const box = await canvas.boundingBox()
    expect(box).not.toBeNull()
    // Configured at 800×600 logical px; CSS may scale — assert minimum presence.
    expect(box!.width).toBeGreaterThan(100)
    expect(box!.height).toBeGreaterThan(100)
  })

  test('game loading completes within 15 s — canvas stays visible', async ({ page }) => {
    // The loading-screen renderer removes itself once assets finish loading.
    // If the game stalls the canvas may still exist but go invisible.
    await expect(page.locator('canvas')).toBeVisible({ timeout: 15_000 })
  })

  test('no <img> elements with broken or missing src', async ({ page }) => {
    const imgs = await page.locator('img').all()
    for (const img of imgs) {
      const src = await img.getAttribute('src')
      expect(src, 'img src must be non-empty').toBeTruthy()
      const naturalWidth = await img.evaluate(
        (el: HTMLImageElement) => el.naturalWidth
      )
      expect(naturalWidth, `img[src="${src}"] failed to load`).toBeGreaterThan(0)
    }
  })

  test('no interactive elements with href="#"', async ({ page }) => {
    const deadLinks = await page.locator('a[href="#"]').count()
    expect(deadLinks, 'href="#" elements must not exist').toBe(0)
  })

  test.describe('Mobile touch viewport — iPhone 14 (390 × 844)', () => {
    test.use({ viewport: { width: 390, height: 844 } })

    test('canvas is visible on mobile viewport', async ({ page }) => {
      await page.goto('/')
      await expect(page.locator('canvas')).toBeVisible()
    })

    test('canvas has non-zero size on mobile', async ({ page }) => {
      await page.goto('/')
      const box = await page.locator('canvas').boundingBox()
      expect(box).not.toBeNull()
      expect(box!.width).toBeGreaterThan(0)
      expect(box!.height).toBeGreaterThan(0)
    })

    test('tap on canvas does not throw a JavaScript exception', async ({ page }) => {
      await page.goto('/')
      const jsErrors: string[] = []
      page.on('pageerror', err => jsErrors.push(err.message))

      const canvas = page.locator('canvas')
      await canvas.waitFor({ state: 'visible' })
      await canvas.tap()
      await page.waitForTimeout(1_500)

      expect(jsErrors, `JS exceptions after tap:\n${jsErrors.join('\n')}`).toHaveLength(0)
    })
  })
})
