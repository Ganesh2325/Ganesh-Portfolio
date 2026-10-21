import { chromium } from "playwright";
const b = await chromium.launch();
for (const [n, w, h] of [["desktop", 1440, 900], ["mobile", 390, 844]]) {
  const p = await b.newPage({ viewport: { width: w, height: h } });
  await p.goto(process.argv[2] ?? "https://ganesh-portfolio-iota.vercel.app/", { waitUntil: "networkidle" });
  await p.evaluate(async () => { for (let y = 0; y < document.body.scrollHeight; y += 250) { window.scrollTo(0, y); await new Promise(r => setTimeout(r, 120)); } window.scrollTo({ top: 0, behavior: "instant" }); });
  await p.waitForTimeout(1500);
  await p.screenshot({ path: `screenshots/${process.argv[3] ?? "reference-"}${n}.png`, fullPage: true });
}
await b.close();
