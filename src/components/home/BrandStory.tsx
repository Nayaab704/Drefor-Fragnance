"use client";

import Image from "next/image";
import { ArrowRight, Check, Quote } from "lucide-react";
import { motion } from "framer-motion";

import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function BrandStory() {
  const { brandStory } = siteConfig;

  return (
    <section id="story" className="bg-obsidian px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative min-h-[400px] overflow-hidden rounded-lg border border-champagne/15 bg-black shadow-[0_30px_100px_rgba(0,0,0,0.28)]"
        >
          <Image
            src={siteConfig.assets.logo}
            alt={`${siteConfig.name} gold logo`}
            fill
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,4,3,0.12),rgba(5,4,3,0.58))]" />
          <div className="absolute bottom-6 left-6 right-6 border-t border-champagne/25 pt-5">
            <p className="max-w-sm font-serif text-2xl leading-tight text-ivory">
              Composed to be remembered in the room after you leave.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="mb-7 inline-flex h-12 w-12 items-center justify-center rounded-full border border-champagne/25 bg-champagne/10 text-champagne">
            <Quote aria-hidden="true" className="h-5 w-5" />
          </div>

          <SectionHeading
            eyebrow={brandStory.eyebrow}
            title={brandStory.title}
          />

          <div className="mt-7 space-y-5">
            {brandStory.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-base leading-8 text-ivory/70 sm:text-lg">
                {paragraph}
              </p>
            ))}
          </div>

          <ul className="mt-8 grid gap-3 sm:grid-cols-3">
            {brandStory.values.map((value) => (
              <li
                key={value}
                className="flex min-h-20 items-center gap-3 border border-champagne/12 bg-ivory/[0.035] px-4 py-3 text-sm text-ivory/75 transition duration-300 hover:border-champagne/35 hover:bg-ivory/[0.055]"
              >
                <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-champagne text-obsidian">
                  <Check aria-hidden="true" className="h-4 w-4" />
                </span>
                {value}
              </li>
            ))}
          </ul>

          <Button
            href={brandStory.cta.href}
            variant="secondary"
            size="lg"
            className="mt-9"
            aria-label={brandStory.cta.ariaLabel}
          >
            {brandStory.cta.label}
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
