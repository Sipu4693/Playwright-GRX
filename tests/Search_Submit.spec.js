import { test, expect } from '@playwright/test';

test('Search flow with not found request submission', async ({ page }) => {
 
  await page.goto('https://qa.goodrxmedicine.com/');

 
  await page.fill('#search', 'cenforce');
  await page.keyboard.press('Enter');

  
  await page.locator('#search').fill('');
  await page.fill('#search', 'cenforce8');
  await page.keyboard.press('Enter');

  
  await page.click('#maincontent > div.columns > div > div.notfound-container > button');

  
 // await page.getByPlaceholder('Enter your full name').fill('Sipu Nayak');
  await page.locator('#userName').fill('Sipu Nayak', { force: true });

  await page.locator('#userEmail').fill('sipu.n@flash.co', { force: true });

  await page.click('#submitRequestBtn');
   console.log('Search Submitted');
});
