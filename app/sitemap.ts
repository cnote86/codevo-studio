// app/sitemap.ts
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://codevostudio.com";
  return [
    { url: `${base}/`,        changeFrequency: "weekly",  priority: 1.0 },
    { url: `${base}/portfolio`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/about`,    changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/contact`,  changeFrequency: "monthly", priority: 0.8 },
  ];
}
