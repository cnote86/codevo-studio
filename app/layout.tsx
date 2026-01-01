// app/layout.tsx
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Header from "@/components/Header";
import SmoothScroll from "@/components/SmoothScroll";
import PageTransition from "@/components/PageTransition";

// Separate viewport export (fixes Next.js 15 warnings)
export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0a0a0a",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://codevostudio.com"),
  title: {
    default: "Codevo Studio",
    template: "%s | Codevo Studio",
  },
  description:
    "Sharp, fast Next.js websites for small teams. Premium feel, clean build, measurable results.",
  alternates: { canonical: "/" },
  // viewport moved to separate export above
  // themeColor moved to separate export above
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "manifest",
        url: "/site.webmanifest",
      },
    ],
  },
  openGraph: {
    type: "website",
    url: "https://codevostudio.com",
    siteName: "Codevo Studio",
    title: "Codevo Studio",
    description:
      "Sharp, fast Next.js websites for small teams. Premium feel, clean build, measurable results.",
    images: [
      { url: "/opengraph-image.png", width: 1200, height: 630, alt: "Codevo Studio" },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll>
          <Header />
          <main className="pt-16 md:pt-20">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
          <WhatsAppButton />
        </SmoothScroll>
        <Analytics />
      </body>
    </html>
  );
}