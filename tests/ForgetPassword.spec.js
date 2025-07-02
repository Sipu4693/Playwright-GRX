import { test, expect } from '@playwright/test';

test('Password reset', async ({ page }) => {

  await page.goto('https://qa.goodrxmedicine.com/');

  await page.click(
    '#html-body > div.page-wrapper > header > div > div.switcher.switcher-account > div > div > ul > li.link.authorization-link > a'
  );
  await page.locator('#forgot-password-link').click();
  await page.getByPlaceholder('Enter registered email').fill('sipu.nayak@moretasks.com');
  await page.click('#form-validate > div.actions-toolbar > div > button');
   console.log('Successfully submit the resetpassword button');
});
