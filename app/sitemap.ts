import type { MetadataRoute } from "next";
import { products } from "@/data/products";

const BASE_URL = "https://harinandanam.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/about`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/products`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/distributor`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  const productPages: MetadataRoute.Sitemap = products.map(
    (product) => ({
      url: `${BASE_URL}/products/${product.slug}`,
      changeFrequency: "monthly",
      priority: 0.8,
    })
  );

  return [
    ...staticPages,
    ...productPages,
  ];
}