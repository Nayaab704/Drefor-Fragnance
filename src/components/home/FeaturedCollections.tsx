"use client";

import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, Flame, Flower2, Gem, Waves } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import { siteConfig } from "@/config/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";
import { fadeUp, staggerContainer, viewportReveal } from "@/lib/animations";
import type { Collection } from "@/types";

const collectionIcons: Record<Collection["slug"], LucideIcon> = {
  oud: Flame,
  amber: Gem,
  floral: Flower2,
  fresh: Waves,
};

const accentClasses: Record<Collection["accent"], string> = {
  gold: "text-champagne bg-champagne/10 border-champagne/25 shadow-champagne/10",
  ivory: "text-ivory bg-ivory/10 border-ivory/20 shadow-ivory/10",
  rose: "text-soft-rose bg-soft-rose/10 border-soft-rose/25 shadow-soft-rose/10",
  sage: "text-soft-sage bg-soft-sage/10 border-soft-sage/25 shadow-soft-sage/10",
};

export function FeaturedCollections() {
  const shouldReduceMotion = Boolean(useReducedMotion());

  return (
    <section
      id="collections"
      className="relative overflow-hidden bg-obsidian px-4 py-[4.5rem] sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-champagne/35 to-transparent" />
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportReveal}
          variants={fadeUp(shouldReduceMotion)}
        >
          <SectionHeading
            eyebrow="Featured Collections"
            title="A wardrobe of scent, composed by mood."
            description="Four fragrance families form the foundation of DREFOR: deep woods, warm resins, elegant florals, and fresh signatures made to linger."
          />
        </motion.div>

        <motion.div
          className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={viewportReveal}
          variants={staggerContainer(shouldReduceMotion)}
        >
          {siteConfig.collections.map((collection, index) => (
            <CollectionCard
              collection={collection}
              index={index}
              key={collection.slug}
              reducedMotion={shouldReduceMotion}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function CollectionCard({
  collection,
  index,
  reducedMotion,
}: {
  collection: Collection;
  index: number;
  reducedMotion: boolean;
}) {
  const Icon = collectionIcons[collection.slug];

  return (
    <motion.article
      variants={fadeUp(reducedMotion, 26)}
      className="group relative flex min-h-[360px] flex-col justify-between overflow-hidden rounded-lg border border-champagne/12 bg-[linear-gradient(145deg,rgba(248,240,223,0.07),rgba(248,240,223,0.025))] p-6 transition duration-500 before:pointer-events-none before:absolute before:inset-0 before:-translate-x-full before:bg-[linear-gradient(115deg,transparent,rgba(216,181,109,0.12),transparent)] before:opacity-0 before:transition before:duration-700 before:content-[''] hover:-translate-y-1 hover:border-champagne/55 hover:bg-ivory/[0.06] hover:shadow-[0_30px_90px_rgba(216,181,109,0.14)] hover:before:translate-x-full hover:before:opacity-100"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(216,181,109,0.10),transparent_40%,rgba(248,240,223,0.05))] opacity-45 transition duration-700 group-hover:translate-x-2 group-hover:scale-[1.03] group-hover:opacity-80" />
      <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-champagne/45 to-transparent opacity-0 transition group-hover:opacity-100" />

      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <div
            className={cn(
              "inline-flex h-12 w-12 items-center justify-center rounded-full border shadow-lg transition duration-300 group-hover:scale-105",
              accentClasses[collection.accent],
            )}
          >
            <Icon aria-hidden="true" className="h-5 w-5" />
          </div>
          <span className="font-serif text-4xl text-ivory/[0.08]">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <p className="mt-8 text-xs font-medium uppercase text-champagne/70">
          Collection
        </p>
        <h3 className="mt-2 font-serif text-3xl text-ivory">{collection.name}</h3>
        <p className="mt-5 text-sm leading-7 text-ivory/68">
          {collection.description}
        </p>
      </div>

      <Link
        href={collection.href}
        className="relative mt-8 inline-flex items-center gap-2 text-sm font-medium text-champagne transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne"
        aria-label={`Explore ${collection.name} fragrances`}
      >
        {collection.note}
        <ArrowRight
          aria-hidden="true"
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
        />
      </Link>
    </motion.article>
  );
}
