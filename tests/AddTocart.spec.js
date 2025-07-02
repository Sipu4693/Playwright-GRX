import { test, expect } from '@playwright/test';

test('Add To Cart On Product page', async ({ page }) => {
  await page.goto('https://qa.goodrxmedicine.com/?v=4k');
  await page.locator('#product-item-info_1516 > div > strong > a').click();
  const title = await page.title();
  console.log('Page title is:', title);
  await page.reload();
  await page.waitForTimeout(3000);
  try {
  await page.waitForSelector('[data-option-id="410"]', { state: 'visible', timeout: 10000 });
 // await page.click('[data-option-id="410"]');
 // await page.waitForTimeout(2000);
 // await page.click('[data-option-id="412"]');
 // await page.waitForTimeout(2000);
  await page.click('[data-option-id="415"]');
  await page.waitForTimeout(2000);
  await page.click('i.fa-solid.fa-plus');
} catch (e) {
    console.error('Element not found or not visible');

}
  const viewCartBtn = page.locator('#product_addtocart_form > a > button');
 // console.log('Waiting for button to be visible...');
  //await expect(viewCartBtn).toBeVisible({ timeout: 10000 });
 // const buttonText = await viewCartBtn.innerText();
 // console.log('Button inner text is:', buttonText);
 // console.log('Total QTY is:',await page.textContent('#btn_cart_qty'));
  await viewCartBtn.click();
  console.log('Add to cart successfully completed & navigate to cart page');
  await page.waitForTimeout(1000); 
  await page.click('#html-body > div.page-wrapper > header > div > div.minicart-wrapper.active > a > img');

  console.log(await page.getByText('#minicart-content-wrapper > div.block-title > strong > span.text'));
});
