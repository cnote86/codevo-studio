// app/sitemap.ts
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://codevostudio.com";
  return [
    { url: `${base}/`,        changeFrequency: "weekly",  priority: 1.0 },
    { url: `${base}/services`,changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/about`,   changeFrequency: "yearly",  priority: 0.6 },
    { url: `${base}/contact`, changeFrequency: "yearly",  priority: 0.6 },
  ];
}
