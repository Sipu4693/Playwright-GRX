import { test, expect } from '@playwright/test';

test('Login flow', async ({ page }) => {

  await page.goto('https://qa.goodrxmedicine.com/');

  await page.click(
    '#html-body > div.page-wrapper > header > div > div.switcher.switcher-account > div > div > ul > li.link.authorization-link > a'
  );

  
  await page.locator('input[name="login[username]"]').fill('sipu.nayak@moretasks.com');
  await page.locator('input[name="login[password]"]').fill('Admin@1234');
  
  await page.click('#login-form > div.actions > button');
   console.log('Login successfully completed');
  
  await expect(page).toHaveURL(/customer\/account/); 
});
