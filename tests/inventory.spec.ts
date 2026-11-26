import { test, expect } from "@playwright/test";
import { usersForAddRemoveInventory } from "../data/users";
import { InventoryPage } from "../pages/InventoryPage";
import { LoginPage } from "../pages/LoginPage";

test.describe("Standard user", () => {
  let invPage: InventoryPage;
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(
      usersForAddRemoveInventory.standard.username,
      usersForAddRemoveInventory.standard.password,
    );
    invPage = new InventoryPage(page);
  });

  test("User adds an item to the cart", async () => {
    await invPage.addToCart();

    await expect(invPage.backPackRemoveFromCartButton).toBeVisible();
    await expect(invPage.backPackAddToCartButton).toBeHidden();
  });

  test("User removes an item from the cart", async () => {
    await invPage.addToCart();
    await invPage.removeFromCart();

    await expect(invPage.backPackAddToCartButton).toBeVisible();
    await expect(invPage.backPackRemoveFromCartButton).toBeHidden();
  });

  test("No cart badge when no items in the cart", async () => {
    await expect(invPage.shoppingCartBadge).toBeHidden();
  });

  test("The cart badge is 1 when 1 item in the cart", async () => {
    await invPage.addToCart();

    await expect(invPage.shoppingCartBadge).toHaveText("1");
  });
});

test.describe("User with error", () => {
  // Test fails for error_user, should be fixed
  test.fail(
    "error_user isn't able to remove an item by clicking Remove button",
    async ({ page }) => {
      const loginPage = new LoginPage(page);
      await loginPage.goto();
      await loginPage.login(
        usersForAddRemoveInventory.error.username,
        usersForAddRemoveInventory.error.password,
      );
      const invPage = new InventoryPage(page);
      await invPage.addToCart();
      await invPage.removeFromCart();

      await expect(invPage.backPackAddToCartButton).toBeVisible();
      await expect(invPage.backPackRemoveFromCartButton).toBeHidden();
    },
  );
});
