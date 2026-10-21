// Full-page captures. Reduced motion is emulated so every scroll-triggered element is in its final, visible state.
import { chromium } from "playwright";
const b = await chromium.launch();
for (const [n, w, h] of [["desktop", 1440, 900], ["mobile", 390, 844]]) {
  const p = await b.newPage({ viewport: { width: w, height: h }, reducedMotion: "reduce" });
  await p.goto("http://localhost:3000/", { waitUntil: "networkidle" });
  await p.evaluate(async () => { for (let y = 0; y < document.body.scrollHeight; y += 400) { window.scrollTo(0, y); await new Promise(r => setTimeout(r, 60)); } window.scrollTo({ top: 0, behavior: "instant" }); });
  await p.waitForTimeout(800);
  console.log(n, "scrollWidth", await p.evaluate(() => document.documentElement.scrollWidth));
  await p.screenshot({ path: `screenshots/${n}.png`, fullPage: true });
}
await b.close();
