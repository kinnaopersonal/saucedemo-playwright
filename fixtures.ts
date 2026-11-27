import { test as base } from "@playwright/test";
import { InventoryPage } from "./pages/InventoryPage";
import { loginViaCookie } from "./helpers/auth";
import { STANDARD_USER } from "./data/users";

type Options = { username: string };
type Fixtures = { inventoryPage: InventoryPage };

export const test = base.extend<Fixtures & Options>({
  username: [STANDARD_USER, { option: true }],

  inventoryPage: async ({ page, context, username }, use) => {
    await loginViaCookie(context, username);
    await page.goto("/inventory.html");
    const invPage = new InventoryPage(page);
    await use(invPage);
  },
});

export { expect } from "@playwright/test";
