// ~15s desktop scroll-through with full motion (Lenis + GSAP), recorded via Playwright.
import { chromium } from "playwright";
import { renameSync } from "node:fs";
const b = await chromium.launch();
const ctx = await b.newContext({ viewport: { width: 1440, height: 900 }, recordVideo: { dir: "/tmp/vid", size: { width: 1440, height: 900 } } });
const p = await ctx.newPage();
await p.goto("http://localhost:3000/", { waitUntil: "networkidle" });
await p.waitForTimeout(2500); // hero intro
await p.mouse.move(700, 450);
const total = await p.evaluate(() => document.body.scrollHeight - innerHeight);
const steps = 110;
for (let i = 0; i < steps; i++) { await p.mouse.wheel(0, total / steps); await p.waitForTimeout(110); }
await p.waitForTimeout(800);
const path = await p.video().path();
await ctx.close(); await b.close();
renameSync(path, "screenshots/scroll.webm");
