"use client";

import Image from "next/image";
import { ArrowRight, Check, Quote } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  fadeInLeft,
  fadeInRight,
  fadeUp,
  staggerContainer,
  viewportReveal,
} from "@/lib/animations";

export function BrandStory() {
  const { brandStory } = siteConfig;
  const shouldReduceMotion = Boolean(useReducedMotion());

  return (
    <section
      id="story"
      className="relative overflow-hidden bg-obsidian px-4 py-[4.5rem] sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-champagne/25 to-transparent" />
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportReveal}
          variants={fadeInLeft(shouldReduceMotion)}
          className="group relative min-h-[420px] overflow-hidden rounded-lg border border-champagne/15 bg-black shadow-[0_30px_100px_rgba(0,0,0,0.28)]"
        >
          <Image
            src={siteConfig.assets.logo}
            alt={`${siteConfig.name} gold logo`}
            fill
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="object-cover opacity-[0.88] transition duration-700 group-hover:scale-[1.025]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,4,3,0.10),rgba(5,4,3,0.64))]" />
          <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(216,181,109,0.16),transparent_48%,rgba(248,240,223,0.08))] opacity-55 transition duration-700 group-hover:translate-x-2 group-hover:opacity-80" />
          <div className="absolute bottom-6 left-6 right-6 border-t border-champagne/25 pt-5">
            <p className="max-w-sm font-serif text-2xl leading-tight text-ivory">
              Composed to be remembered in the room after you leave.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportReveal}
          variants={fadeInRight(shouldReduceMotion)}
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

          <motion.ul
            className="mt-8 grid gap-3 sm:grid-cols-3"
            variants={staggerContainer(shouldReduceMotion)}
          >
            {brandStory.values.map((value) => (
              <motion.li
                key={value}
                variants={fadeUp(shouldReduceMotion, 14)}
                className="flex min-h-20 items-center gap-3 border border-champagne/12 bg-ivory/[0.035] px-4 py-3 text-sm text-ivory/75 transition duration-300 hover:border-champagne/35 hover:bg-ivory/[0.055]"
              >
                <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-champagne text-obsidian">
                  <Check aria-hidden="true" className="h-4 w-4" />
                </span>
                {value}
              </motion.li>
            ))}
          </motion.ul>

          <Button
            href={brandStory.cta.href}
            variant="secondary"
            size="lg"
            className="group/cta mt-9"
            aria-label={brandStory.cta.ariaLabel}
          >
            {brandStory.cta.label}
            <ArrowRight
              aria-hidden="true"
              className="h-4 w-4 transition-transform duration-300 group-hover/cta:translate-x-1"
            />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
