import { test, expect } from '@playwright/test';

test('Search flow with not found request submission', async ({ page }) => {
 
  await page.goto('https://qa.goodrxmedicine.com/');

 
  await page.fill('#search', 'cenforce');
  await page.keyboard.press('Enter');

  await page.locator('#product-item-info_874 > a.action.tocart.primary').click();
  await page.waitForTimeout(4000);
  //await page.reload();
  try {
    await page.click({state: '//*[@id="872"]',timeout: 5000 });
    await page.waitForTimeout(3000);
   
  } catch (error) {
    console.error('Error occurred while waiting for selector:', error);
  }
   const viewCartBtn = page.locator('#product_addtocart_form > a > button');
    console.log(await viewCartBtn.innerText());
    await page.locator('#product_addtocart_form > a > button').click();
 
});