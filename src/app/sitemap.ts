import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: "https://ordinalstorage.tech",
      lastModified: new Date(),
      changeFrequency: "always",
      priority: 1,
    },
  ];
}
