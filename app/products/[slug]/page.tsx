import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  getProductBySlug,
  products,
} from "@/data/products";

import ProductOverview from "@/components/products/ProductOverview";
import ProductDescription from "@/components/products/ProductDescription";
import ProductFeatures from "@/components/products/ProductFeatures";
import ProductInformation from "@/components/products/ProductInformation";
import ProductFAQ from "@/components/products/ProductFAQ";
import RelatedProducts from "@/components/products/RelatedProducts";
import ProductCTA from "@/components/products/ProductCTA";

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

/*
|--------------------------------------------------------------------------
| Static Product Pages
|--------------------------------------------------------------------------
|
| Generates the known product routes during the build.
|
*/

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

/*
|--------------------------------------------------------------------------
| SEO Metadata
|--------------------------------------------------------------------------
*/

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;

  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found | Hari Nandanam",
    };
  }

  return {
    title: product.seo.title,

    description: product.seo.description,

    keywords: product.seo.keywords,

    alternates: {
      canonical: `/products/${product.slug}`,
    },

    openGraph: {
      title: product.seo.title,
      description: product.seo.description,
      url: `/products/${product.slug}`,
      siteName: "Hari Nandanam",
      type: "website",
      images: [
        {
          url: product.heroImage,
          alt: `${product.name} - Hari Nandanam`,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: product.seo.title,
      description: product.seo.description,
      images: [product.heroImage],
    },
  };
}

/*
|--------------------------------------------------------------------------
| Product JSON-LD
|--------------------------------------------------------------------------
*/

function ProductStructuredData({
  product,
}: {
  product: ReturnType<typeof getProductBySlug>;
}) {
  if (!product) {
    return null;
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",

    name: product.name,

    description: product.description,

    image: product.images,

    brand: {
      "@type": "Brand",
      name: "Hari Nandanam",
    },

    category: product.category,

    manufacturer: {
      "@type": "Organization",
      name: "Unitech Industries",
    },

    url: `/products/${product.slug}`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  );
}

/*
|--------------------------------------------------------------------------
| Page
|--------------------------------------------------------------------------
*/

export default async function ProductPage({
  params,
}: ProductPageProps) {
  const { slug } = await params;

  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <>
      <ProductStructuredData product={product} />

      <main>
        <ProductOverview product={product} />

        <ProductDescription product={product} />

        <ProductFeatures product={product} />

        <ProductInformation product={product} />

        <ProductFAQ product={product} />

        <RelatedProducts product={product} />

        <ProductCTA />
      </main>
    </>
  );
}