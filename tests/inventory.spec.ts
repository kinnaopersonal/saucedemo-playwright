import { test, expect } from "../fixtures";
import { ERROR_USER } from "../data/users";

test.describe("Standard user", () => {
  test("User adds an item to the cart", async ({ inventoryPage }) => {
    await inventoryPage.addToCart();

    await expect(inventoryPage.backPackRemoveFromCartButton).toBeVisible();
    await expect(inventoryPage.backPackAddToCartButton).toBeHidden();
  });

  test("User removes an item from the cart", async ({ inventoryPage }) => {
    await inventoryPage.addToCart();
    await inventoryPage.removeFromCart();

    await expect(inventoryPage.backPackAddToCartButton).toBeVisible();
    await expect(inventoryPage.backPackRemoveFromCartButton).toBeHidden();
  });

  test("No cart badge when no items in the cart", async ({ inventoryPage }) => {
    await expect(inventoryPage.shoppingCartBadge).toBeHidden();
  });

  test("The cart badge is 1 when 1 item in the cart", async ({
    inventoryPage,
  }) => {
    await inventoryPage.addToCart();

    await expect(inventoryPage.shoppingCartBadge).toHaveText("1");
  });
});

test.describe("Username = error_user", () => {
  test.use({ username: ERROR_USER });

  // Test fails for error_user, should be fixed => After clicking Remove the button name should be changed to Add to cart
  test.fail(
    "User isn't able to remove an item by clicking Remove button",
    async ({ inventoryPage }) => {
      await inventoryPage.addToCart();
      await inventoryPage.removeFromCart();

      await expect(inventoryPage.backPackAddToCartButton).toBeVisible();
      await expect(inventoryPage.backPackRemoveFromCartButton).toBeHidden();
    },
  );
});
