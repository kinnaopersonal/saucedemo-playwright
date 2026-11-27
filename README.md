# SauceDemo Playwright Tests

![Playwright Tests](https://github.com/kinnaopersonal/saucedemo-playwright/actions/workflows/playwright.yml/badge.svg)

End-to-end tests for [saucedemo.com](https://www.saucedemo.com/), written with **Playwright** and **TypeScript**.
This is a learning project, built step by step to practice the Page Object pattern, data-driven tests and Playwright fixtures.

## What is covered

- **Login**
  - successful login for all standard users (data-driven, including the slow `performance_glitch_user`);
  - failed login: locked out user, wrong password, non-existent user, empty username, empty password.
- **Protected pages**: opening `/inventory.html` and `/cart.html` without logging in redirects to the login page with an error.
- **Inventory**: adding and removing an item, cart badge behaviour.
- **Known issue**: `error_user` cannot remove an item from the cart. The test is marked with `test.fail()`, so it is reported as an expected failure.

## Tech stack

- Playwright Test
- TypeScript
- GitHub Actions for CI

## Project structure

```
data/        test data (users, login errors, protected pages)
helpers/     helper functions (login via cookie)
pages/       Page Objects (LoginPage, InventoryPage)
tests/       test specs
fixtures.ts  custom fixtures (inventoryPage, username option)
```

## Design notes

- Page Objects expose locators and actions; assertions live in the tests.
- Tests for inventory do not log in through the UI. The `inventoryPage` fixture sets the session cookie and opens the page directly. The UI login is covered separately in `login.spec.ts`. This shortcut works because SauceDemo keeps the session in a plain cookie; in a real project an API login or Playwright `storageState` would be used instead.
- The user for a group of tests is chosen with `test.use({ username: ... })`.

## How to run

```bash
npm ci
npx playwright install
npx playwright test                      # all browsers
npx playwright test --project=chromium   # Chromium only
npx playwright show-report               # open the HTML report
```

## Planned

- Tests for adding different products to the cart
- Cart page tests
- Checkout flow
