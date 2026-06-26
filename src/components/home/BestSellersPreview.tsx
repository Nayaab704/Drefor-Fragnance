"use client";

import { ArrowRight, BottleWine, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { ProductPreview } from "@/types";

export function BestSellersPreview() {
  return (
    <section
      id="best-sellers"
      className="relative overflow-hidden bg-ivory px-4 py-16 text-obsidian sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-obsidian/20 to-transparent" />
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <SectionHeading
            eyebrow="Best Sellers"
            title="The first signatures of the house."
            description="A Phase 1 preview of DREFOR fragrances, with placeholder product details ready for future product pages."
            className="[&_h2]:text-obsidian [&_p:last-child]:text-obsidian/65"
          />
        </motion.div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {siteConfig.bestSellers.map((product, index) => (
            <ProductCard index={index} key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({
  product,
  index,
}: {
  product: ProductPreview;
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: "easeOut" }}
      className="group flex min-h-[560px] flex-col overflow-hidden rounded-lg border border-obsidian/10 bg-white shadow-[0_24px_80px_rgba(5,4,3,0.08)] transition duration-300 hover:-translate-y-1 hover:border-champagne/60 hover:shadow-[0_30px_100px_rgba(5,4,3,0.14)]"
    >
      <div className="relative flex h-56 items-center justify-center overflow-hidden bg-obsidian">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(216,181,109,0.26),transparent_36%),linear-gradient(145deg,rgba(216,181,109,0.12),rgba(5,4,3,0.8))]" />
        <div className="absolute inset-x-8 top-8 h-px bg-gradient-to-r from-transparent via-champagne/55 to-transparent" />
        <div className="absolute bottom-0 h-16 w-36 rounded-[50%] bg-black/45 blur-xl" />
        <div className="relative flex h-40 w-24 items-center justify-center transition duration-300 group-hover:scale-[1.03]">
          <div className="absolute top-0 h-5 w-8 border border-champagne/70 bg-black" />
          <div className="absolute top-5 h-4 w-12 border border-champagne/70 bg-black" />
          <div className="absolute top-9 h-28 w-16 rounded-t-md border border-champagne/70 bg-gradient-to-b from-champagne/40 via-ivory/12 to-black" />
          <BottleWine aria-hidden="true" className="relative h-11 w-11 text-champagne" />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase text-obsidian/50">
              {product.collection}
            </p>
            <h3 className="mt-2 font-serif text-3xl leading-tight text-obsidian">
              {product.name}
            </h3>
          </div>
          <span className="rounded-full border border-obsidian/10 px-3 py-1 text-xs font-medium text-obsidian/55">
            {product.intensity}
          </span>
        </div>

        <p className="mt-5 text-sm leading-7 text-obsidian/66">
          {product.description}
        </p>

        <div className="mt-5 border-y border-obsidian/10 py-4">
          <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase text-obsidian/45">
            <Sparkles aria-hidden="true" className="h-3.5 w-3.5 text-champagne" />
            Scent Notes
          </p>
          <p className="text-sm leading-7 text-obsidian/72">
            {product.notes.join(" / ")}
          </p>
        </div>

        <div className="mt-auto flex items-end justify-between gap-4 pt-6">
          <div>
            <p className="font-semibold text-obsidian">{product.price}</p>
            <p className="mt-1 text-xs text-obsidian/50">{product.volume}</p>
          </div>
          <Button
            href={product.href}
            variant="ghost"
            size="sm"
            className="border border-obsidian/15 bg-obsidian text-ivory hover:border-champagne hover:bg-obsidian hover:text-champagne"
            aria-label={`View details for ${product.name}`}
          >
            View Details
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </motion.article>
  );
}
