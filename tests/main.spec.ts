import { test, expect } from '@playwright/test';

test.describe('main', () => {
  test('email exists on about page', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('menuitem', { name: 'About' }).click();
    await page.getByRole('heading', { name: 'Opportunities' }).click();
    await page.getByRole('link', { name: 'info@ennabl.com' }).focus({ timeout: 1000 });
  });

  test('privacy policy', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('menuitem', { name: 'Mission' }).click();
    await page.getByRole('link', { name: 'Privacy Policy' }).click();
  });

  test('mission', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('menuitem', { name: 'Mission' }).click();
  });

  test('our story', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('menuitem', { name: 'About' }).click();
    await page.getByRole('heading', { name: 'Our Story' }).click();
  });

  test('news', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('menuitem', { name: 'NEWS & EVENTS' }).click();
  });
});
