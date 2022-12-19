import { test } from "@playwright/test"

test("test", async ({ page }) => {
  await page.goto("http://localhost:4173/")
  await page.getByRole("navigation").getByRole("link", { name: "Blog" }).click()
  await page.getByRole("link", { name: "About" }).click()
  await page.getByRole("link", { name: "Playground" }).click()
  await page.getByRole("navigation").getByRole("link", { name: "Blog" }).click()
  await page
    .locator("#what-is-creativity")
    .getByRole("link", { name: "ARIA Fail. Sorry!" })
    .first()
    .click()
  await page.getByRole("navigation").getByRole("link", { name: "Blog" }).click()
  await page
    .locator('[id="예상_표절을_읽고서"]')
    .getByRole("link", { name: "ARIA Fail. Sorry!" })
    .first()
    .click()
  await page.getByRole("navigation").getByRole("link", { name: "Blog" }).click()
  await page
    .getByRole("link", { name: "예상 표절을 읽고서" })
    .first()
    .click()
  await page
    .getByRole("navigation")
    .getByRole("listitem")
    .filter({ hasText: "Blog" })
    .click()
  await page.getByRole("navigation").getByRole("link", { name: "Blog" }).click()
  await page.getByRole("link", { name: "Playground" }).click()
  await page.getByRole("link", { name: "About" }).click()
  await page.getByRole("navigation").getByRole("link", { name: "Blog" }).click()
})
