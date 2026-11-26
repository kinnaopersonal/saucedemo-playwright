import { test, expect } from "@playwright/test";
import { validLoginData, invalidLoginData } from "../data/users";
import { LoginPage } from "../pages/LoginPage";
import { InventoryPage } from "../pages/InventoryPage";
import { pagesAndErrors } from "../data/unauthorizedAccess";

test.describe("Success users logins", () => {
  for (const testData of validLoginData) {
    test(testData.testName, async ({ page }) => {
      const loginPage = new LoginPage(page);
      await loginPage.goto();
      await loginPage.login(testData.username, testData.password);
      const invPage = new InventoryPage(page);

      await expect(page).toHaveURL(/inventory/);
      await expect(invPage.titleText).toHaveText("Products", {
        timeout: testData.timeout,
      });
    });
  }
});

test.describe("Users login problems", () => {
  for (const testData of invalidLoginData) {
    test(testData.testName, async ({ page }) => {
      const loginPage = new LoginPage(page);
      await loginPage.goto();
      await loginPage.login(testData.username, testData.password);

      await expect(loginPage.errorMessage).toHaveText(testData.error);
    });
  }
});

test.describe("Opening protected pages without login", () => {
  for (const pageData of pagesAndErrors) {
    test(`Opening ${pageData.path} without login`, async ({ page }) => {
      await page.goto(pageData.path);
      const loginPage = new LoginPage(page);

      await expect(page).toHaveURL("/");
      await expect(loginPage.errorMessage).toHaveText(pageData.error);
    });
  }
});
