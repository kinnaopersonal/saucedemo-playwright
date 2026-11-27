import { BrowserContext } from "@playwright/test";

export async function loginViaCookie(
  context: BrowserContext,
  username: string,
) {
  await context.addCookies([
    {
      name: "session-username",
      value: username,
      domain: "www.saucedemo.com",
      path: "/",
    },
  ]);
}
