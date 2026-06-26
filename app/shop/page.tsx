import type { Metadata } from "next";

import { ProductGrid } from "@/components/shop/ProductGrid";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `The DREFOR Collection | ${siteConfig.name}`,
  description: "Explore refined fragrances crafted for presence.",
};

export default function ShopPage() {
  return (
    <main className="bg-obsidian text-ivory">
      <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-champagne/35 to-transparent" />
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase text-champagne">
              Shop
            </p>
            <h1 className="mt-5 font-serif text-5xl leading-none text-ivory sm:text-6xl lg:text-[4.25rem] lg:leading-[0.96]">
              The DREFOR Collection
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-ivory/70">
              Explore refined fragrances crafted for presence.
            </p>
          </div>

          <ProductGrid />
        </div>
      </section>
    </main>
  );
}
