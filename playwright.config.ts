import { defineConfig, devices } from '@playwright/test'

const BASE_URL = process.env.BASE_URL ?? 'http://localhost:3000'

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [['html'], ['list']],

  use: {
    baseURL: BASE_URL,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  projects: [
    {
      name: 'Chrome desktop',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'Firefox desktop',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'Mobile Safari (iPhone 14)',
      use: { ...devices['iPhone 14'] },
    },
    {
      name: 'Mobile Chrome (Pixel 7)',
      use: { ...devices['Pixel 7'] },
    },
  ],

  // Spins up `serve` locally when BASE_URL env is not set (i.e. not in CI).
  webServer: process.env.BASE_URL
    ? undefined
    : {
        command: 'npx serve . -p 3000 --no-clipboard',
        port: 3000,
        reuseExistingServer: !process.env.CI,
        timeout: 30_000,
      },
})
