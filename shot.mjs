import { chromium } from "playwright";
import { mkdirSync } from "node:fs";

mkdirSync("shots", { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1600, height: 1000 } });

await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
await page.waitForTimeout(1200);
await page.screenshot({ path: "shots/01-hero.png" });

for (const [id, name] of [
  ["services", "02-services"],
  ["why-us", "03-whyus"],
  ["gallery", "04-gallery"],
  ["reviews", "05-reviews"],
  ["faq", "06-faq"],
  ["contact", "07-contact"],
]) {
  await page.evaluate((elId) => {
    const el = document.getElementById(elId);
    if (el) window.scrollTo(0, el.getBoundingClientRect().top + window.scrollY - 30);
  }, id);
  await page.waitForTimeout(700);
  await page.screenshot({ path: `shots/${name}.png` });
}

await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
await page.waitForTimeout(500);
await page.screenshot({ path: "shots/08-footer.png" });

const mobile = await browser.newPage({ viewport: { width: 390, height: 844 } });
await mobile.goto("http://localhost:3000", { waitUntil: "networkidle" });
await mobile.waitForTimeout(1600);
await mobile.screenshot({ path: "shots/m-01-hero.png" });

await mobile.evaluate(() => {
  const el = document.getElementById("services");
  if (el) window.scrollTo(0, el.getBoundingClientRect().top + window.scrollY - 20);
});
await mobile.waitForTimeout(600);
await mobile.screenshot({ path: "shots/m-02-services.png" });

await mobile.evaluate(() => {
  const el = document.getElementById("gallery");
  if (el) window.scrollTo(0, el.getBoundingClientRect().top + window.scrollY - 20);
});
await mobile.waitForTimeout(900);
await mobile.screenshot({ path: "shots/m-03-gallery.png" });

const menuBtn = await mobile.$('button[aria-label="Open menu"]');
if (menuBtn) {
  await menuBtn.click();
  await mobile.waitForTimeout(600);
  await mobile.screenshot({ path: "shots/m-04-menu.png" });
}

await browser.close();
console.log("done");
