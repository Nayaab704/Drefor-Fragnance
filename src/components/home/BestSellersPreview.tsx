"use client";

import { ArrowRight, BottleWine, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeUp, staggerContainer, viewportReveal } from "@/lib/animations";
import type { ProductPreview } from "@/types";

export function BestSellersPreview() {
  const shouldReduceMotion = Boolean(useReducedMotion());

  return (
    <section
      id="best-sellers"
      className="relative overflow-hidden bg-ivory px-4 py-[4.5rem] text-obsidian sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-obsidian/20 to-transparent" />
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportReveal}
          variants={fadeUp(shouldReduceMotion)}
        >
          <SectionHeading
            eyebrow="Best Sellers"
            title="The first signatures of the house."
            description="A Phase 1 preview of DREFOR fragrances, with placeholder product details ready for future product pages."
            className="[&_h2]:text-obsidian [&_p:last-child]:text-obsidian/65"
          />
        </motion.div>

        <motion.div
          className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={viewportReveal}
          variants={staggerContainer(shouldReduceMotion)}
        >
          {siteConfig.bestSellers.map((product) => (
            <ProductCard
              key={product.slug}
              product={product}
              reducedMotion={shouldReduceMotion}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ProductCard({
  product,
  reducedMotion,
}: {
  product: ProductPreview;
  reducedMotion: boolean;
}) {
  return (
    <motion.article
      variants={fadeUp(reducedMotion, 26)}
      className="group relative flex min-h-[560px] flex-col overflow-hidden rounded-lg border border-obsidian/10 bg-white shadow-[0_24px_80px_rgba(5,4,3,0.08)] transition duration-500 before:pointer-events-none before:absolute before:inset-y-0 before:left-0 before:w-px before:bg-champagne before:opacity-0 before:transition before:duration-500 before:content-[''] hover:-translate-y-1 hover:border-champagne/65 hover:shadow-[0_34px_110px_rgba(5,4,3,0.16)] hover:before:opacity-100"
    >
      <div className="relative flex h-56 items-center justify-center overflow-hidden bg-obsidian">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(216,181,109,0.26),transparent_36%),linear-gradient(145deg,rgba(216,181,109,0.12),rgba(5,4,3,0.8))] transition duration-700 group-hover:scale-105 group-hover:opacity-95" />
        <div className="absolute inset-0 translate-x-[-70%] bg-[linear-gradient(110deg,transparent,rgba(248,240,223,0.14),transparent)] opacity-0 transition duration-700 group-hover:translate-x-[70%] group-hover:opacity-100" />
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
            className="group/cta translate-y-1 border border-obsidian/15 bg-obsidian text-ivory opacity-90 transition-all duration-300 hover:border-champagne hover:bg-obsidian hover:text-champagne group-hover:translate-y-0 group-hover:opacity-100"
            aria-label={`View details for ${product.name}`}
          >
            View Details
            <ArrowRight
              aria-hidden="true"
              className="h-4 w-4 transition-transform duration-300 group-hover/cta:translate-x-1"
            />
          </Button>
        </div>
      </div>
    </motion.article>
  );
}
