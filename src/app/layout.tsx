import type { Metadata, Viewport } from "next";
import { Inter, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { profile } from "@/data/profile";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], variable: "--font-inter", display: "swap" });
const display = Instrument_Serif({ subsets: ["latin"], weight: "400", variable: "--ff-display", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--ff-mono", display: "swap" });
const description = `${profile.headline}. ${profile.pitch}`;
const title = `${profile.name} | ${profile.role}`;

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title,
  description,
  keywords: ["Maheshwaram Ganesh", "Full-Stack Developer", "AI Developer", "RAG", "AI Agents", "Next.js", "Portfolio"],
  authors: [{ name: profile.name, url: profile.github }],
  openGraph: { type: "website", title, description, siteName: profile.name, url: "/", locale: "en_IN", images: [{ url: profile.photo, alt: profile.name }] },
  twitter: { card: "summary", title, description, images: [profile.photo] },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#111111" },
    { media: "(prefers-color-scheme: light)", color: "#f4f2ee" },
  ],
};

// Dark is the default (as on the previous portfolio); a saved choice wins. Runs before paint to avoid a flash.
const themeScript = `try{document.documentElement.dataset.theme=localStorage.getItem('theme')||'dark'}catch(e){document.documentElement.dataset.theme='dark'}`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="dark" className={`${inter.variable} ${display.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      </head>
      <body className="font-sans leading-relaxed antialiased">
        {children}
      </body>
    </html>
  );
}
