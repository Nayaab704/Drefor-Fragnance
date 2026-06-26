import { ProductCard } from "@/components/shop/ProductCard";
import { ProductFilters } from "@/components/shop/ProductFilters";
import { siteConfig } from "@/config/site";

export function ProductGrid() {
  return (
    <section aria-labelledby="shop-products-heading" className="mt-12">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase text-champagne">
            Collection
          </p>
          <h2
            className="mt-3 font-serif text-3xl leading-tight text-ivory sm:text-4xl"
            id="shop-products-heading"
          >
            Signature fragrances
          </h2>
        </div>
        <p className="text-sm text-ivory/58">
          {siteConfig.shopProducts.length} fragrances
        </p>
      </div>

      <div className="mt-8">
        <ProductFilters />
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {siteConfig.shopProducts.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </section>
  );
}
