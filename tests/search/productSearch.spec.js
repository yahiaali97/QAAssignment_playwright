import { test, expect } from '@playwright/test';
import { ProductsPage } from '../../pages/ProductsPage';
import products from '../../test-data/products.json';

test.describe('Product Search Feature', () => {

  test('Search for product using valid keyword', async ({ page }) => {
    const productsPage = new ProductsPage(page);

    await page.goto('https://automationexercise.com');
    await productsPage.navigate();
    await productsPage.searchForProduct(products.validProduct.keyword);

    await expect(productsPage.productTitles.first())
      .toContainText(products.validProduct.expectedResult);
  });

  test('Search for product using invalid keyword', async ({ page }) => {
    const productsPage = new ProductsPage(page);

    await page.goto('https://automationexercise.com');
    await productsPage.navigate();
    await productsPage.searchForProduct(products.invalidProduct.keyword);

    await expect(productsPage.noProductsMessage)
      .toContainText(products.invalidProduct.expectedMessage);
  });

});