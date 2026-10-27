import { expect, test } from "@playwright/test";

test("home route renders the application scaffold", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: "Make My Marriage" })).toBeVisible();
});
