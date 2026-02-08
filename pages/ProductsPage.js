export class ProductsPage {
  constructor(page) {
    this.page = page;

    this.productsLink = page.locator('a[href="/products"]');
    this.searchInput = page.locator('#search_product');
    this.searchButton = page.locator('#submit_search');
    this.productTitles = page.locator('.productinfo p');
    this.noProductsMessage = page.locator('.features_items h2');
  }

  async navigate() {
    await this.productsLink.click();
    await this.searchInput.waitFor({ state: 'visible' });
  }

  async searchForProduct(keyword) {
    await this.searchInput.fill(keyword);
    await this.searchButton.click();
  }
}