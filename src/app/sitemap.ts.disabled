import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://gunrangeinsurance.com";
  const now = new Date();
  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/services`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/quote`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    // service pages
    { url: `${base}/services/gun-range-liability-insurance`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/indoor-shooting-range-insurance`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/outdoor-shooting-range-insurance`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/firearms-instructor-insurance`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/retail-gun-store-ffl-insurance`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/shooting-club-insurance`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/services/lead-abatement-environmental-insurance`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/services/range-safety-officer-insurance`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];
}
