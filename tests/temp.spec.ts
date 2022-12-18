import { test } from "@playwright/test"

test("test", async ({ page }) => {
  await page.goto("http://localhost:4173/")
  await page.getByRole("navigation").getByRole("link", { name: "Blog" }).click()
  await page
    .getByRole("article")
    .filter({
      hasText:
        "서평개발 창의성에 대한 담론 2022-12-11T06:15:00.000Z 창의성(創意性, 문화어: 창발성, 영어: creativity)은 새로운",
    })
    .getByRole("link", { name: "ARIA Fail. Sorry!" })
    .click()
  await page.locator(".constraint > div:nth-child(2)").click()
  await page.getByRole("link", { name: "About" }).click()
  await page.getByRole("navigation").getByRole("link", { name: "Blog" }).click()
  await page.getByRole("link", { name: "Playground" }).click()
  await page.getByRole("navigation").getByRole("link", { name: "Blog" }).click()
  await page
    .getByText(
      "창의성(創意性, 문화어: 창발성, 영어: creativity)은 새로운 생각이나 개념을 찾아내거나 기존에 있던 생각이나 개념들을 새롭게 조합해 "
    )
    .click()
  await page
    .getByRole("article")
    .filter({
      hasText:
        "서평개발 창의성에 대한 담론 2022-12-11T06:15:00.000Z 창의성(創意性, 문화어: 창발성, 영어: creativity)은 새로운",
    })
    .getByRole("link", { name: "READ MORE" })
    .click()
  await page
    .getByRole("list")
    .filter({ hasText: "HomeBlogWhat is creativity" })
    .getByRole("link", { name: "Blog" })
    .click()
  await page.getByRole("link", { name: "About" }).click()
  await page.getByRole("navigation").getByRole("link", { name: "Blog" }).click()
  await page.getByRole("link", { name: "Playground" }).click()
  await page.getByRole("navigation").getByRole("link", { name: "Blog" }).click()
  await page.getByRole("link", { name: "About" }).click()
  await page
    .getByRole("navigation")
    .getByRole("link", { name: "About" })
    .click()
  await page
    .getByRole("navigation")
    .getByRole("link", { name: "About" })
    .click()
  await page.getByRole("navigation").getByRole("link", { name: "Blog" }).click()
  await page.getByRole("link", { name: "About" }).click()
  await page.getByRole("navigation").getByRole("link", { name: "Blog" }).click()
})
