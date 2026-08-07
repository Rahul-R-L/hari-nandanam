import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://harinandanam.in";

  return [
    {
      url: base,
      lastModified: new Date(),
    },
    {
      url: `${base}/about`,
      lastModified: new Date(),
    },
    {
      url: `${base}/products`,
      lastModified: new Date(),
    },
    {
      url: `${base}/contact`,
      lastModified: new Date(),
    },


  ];
}