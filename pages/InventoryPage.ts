import { Page, Locator } from "@playwright/test";

export class InventoryPage {
  readonly titleText: Locator;
  readonly backPackAddToCartButton: Locator;
  readonly backPackRemoveFromCartButton: Locator;
  readonly shoppingCartLink: Locator;
  readonly shoppingCartBadge: Locator;

  constructor(private readonly page: Page) {
    this.titleText = page.getByTestId("title");
    this.backPackAddToCartButton = page.getByTestId(
      "add-to-cart-sauce-labs-backpack",
    );
    this.backPackRemoveFromCartButton = page.getByTestId(
      "remove-sauce-labs-backpack",
    );
    this.shoppingCartLink = page.getByTestId("shopping-cart-link");
    this.shoppingCartBadge = page.getByTestId("shopping-cart-badge");
  }

  async addToCart() {
    await this.backPackAddToCartButton.click();
  }

  async removeFromCart() {
    await this.backPackRemoveFromCartButton.click();
  }
}
