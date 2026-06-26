"use client";

import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";

export function HeroSection() {
  const { hero } = siteConfig;

  return (
    <section className="relative isolate min-h-[68svh] overflow-hidden bg-obsidian md:min-h-[calc(100svh-8rem)]">
      <Image
        src={siteConfig.assets.hero}
        alt={hero.imageAlt}
        fill
        preload
        sizes="100vw"
        className="object-cover object-[66%_center] md:object-[68%_center] lg:object-[70%_center]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,4,3,0.95)_0%,rgba(5,4,3,0.82)_34%,rgba(5,4,3,0.46)_56%,rgba(5,4,3,0.12)_78%,rgba(5,4,3,0.04)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(5,4,3,0.82)_0%,rgba(5,4,3,0.10)_36%,rgba(5,4,3,0.34)_100%)]" />

      <div className="relative mx-auto flex max-w-7xl px-4 pb-16 pt-20 sm:px-6 sm:pb-20 sm:pt-24 lg:px-8 lg:pb-24 lg:pt-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase text-champagne">
            <Sparkles aria-hidden="true" className="h-4 w-4" />
            {hero.eyebrow}
          </p>
          <h1 className="mt-6 max-w-3xl font-serif text-5xl leading-none text-ivory sm:text-6xl lg:text-[4.25rem] lg:leading-[0.96]">
            {hero.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-ivory/78 sm:text-xl sm:leading-9">
            {hero.subheading}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button
              href={hero.primaryCta.href}
              size="lg"
              aria-label={hero.primaryCta.ariaLabel}
            >
              {hero.primaryCta.label}
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Button>
            <Button
              href={hero.secondaryCta.href}
              variant="secondary"
              size="lg"
              aria-label={hero.secondaryCta.ariaLabel}
            >
              {hero.secondaryCta.label}
            </Button>
          </div>

          <ul className="mt-10 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-4">
            {hero.signatureNotes.map((note) => (
              <li
                key={note}
                className="border border-champagne/15 bg-black/25 px-4 py-3 text-sm text-ivory/75 backdrop-blur"
              >
                {note}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
