"use client";

import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import {
  fadeInLeft,
  fadeUp,
  staggerContainer,
} from "@/lib/animations";

export function HeroSection() {
  const { hero } = siteConfig;
  const shouldReduceMotion = Boolean(useReducedMotion());

  return (
    <section className="relative isolate min-h-[72svh] overflow-hidden bg-obsidian md:min-h-[calc(100svh-7rem)]">
      <motion.div
        className="absolute inset-0 will-change-transform"
        initial={
          shouldReduceMotion
            ? { opacity: 0 }
            : { opacity: 0, scale: 1.045, x: 24 }
        }
        animate={
          shouldReduceMotion
            ? { opacity: 1, transition: { duration: 0.01 } }
            : {
                opacity: 1,
                scale: [1.035, 1.055, 1.04],
                x: [8, 0, 10],
                transition: {
                  opacity: { duration: 1.1, ease: "easeOut" },
                  scale: {
                    duration: 24,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "mirror",
                  },
                  x: {
                    duration: 24,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "mirror",
                  },
                },
              }
        }
      >
        <Image
          src={siteConfig.assets.hero}
          alt={hero.imageAlt}
          fill
          preload
          sizes="100vw"
          className="object-cover object-[66%_center] md:object-[68%_center] lg:object-[70%_center]"
        />
      </motion.div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,4,3,0.97)_0%,rgba(5,4,3,0.86)_32%,rgba(5,4,3,0.54)_56%,rgba(5,4,3,0.16)_80%,rgba(5,4,3,0.04)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(5,4,3,0.88)_0%,rgba(5,4,3,0.10)_38%,rgba(5,4,3,0.36)_100%)]" />

      <div className="relative mx-auto flex max-w-7xl px-4 pb-[4.5rem] pt-24 sm:px-6 sm:pb-[5.5rem] sm:pt-28 lg:px-8 lg:pb-28 lg:pt-36">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInLeft(shouldReduceMotion, 34)}
          className="max-w-3xl"
        >
          <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase text-champagne">
            <Sparkles aria-hidden="true" className="h-4 w-4" />
            {hero.eyebrow}
          </p>
          <h1 className="mt-7 max-w-3xl font-serif text-5xl leading-[0.98] text-ivory sm:text-6xl lg:text-[4.05rem] lg:leading-[0.98]">
            {hero.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-ivory/78 sm:text-xl sm:leading-9">
            {hero.subheading}
          </p>

          <motion.div
            className="mt-10 flex flex-col gap-3 sm:flex-row"
            variants={fadeUp(shouldReduceMotion, 16)}
          >
            <Button
              href={hero.primaryCta.href}
              size="lg"
              className="group/cta relative overflow-hidden before:absolute before:inset-y-0 before:-left-1/3 before:w-1/3 before:skew-x-[-20deg] before:bg-ivory/35 before:opacity-0 before:transition-all before:duration-700 before:content-[''] hover:before:left-[120%] hover:before:opacity-100"
              aria-label={hero.primaryCta.ariaLabel}
            >
              {hero.primaryCta.label}
              <ArrowRight
                aria-hidden="true"
                className="h-4 w-4 transition-transform duration-300 group-hover/cta:translate-x-1"
              />
            </Button>
            <Button
              href={hero.secondaryCta.href}
              variant="secondary"
              size="lg"
              className="group/cta"
              aria-label={hero.secondaryCta.ariaLabel}
            >
              {hero.secondaryCta.label}
              <ArrowRight
                aria-hidden="true"
                className="h-4 w-4 transition-transform duration-300 group-hover/cta:translate-x-1"
              />
            </Button>
          </motion.div>

          <motion.ul
            className="mt-11 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-4"
            initial="hidden"
            animate="visible"
            variants={staggerContainer(shouldReduceMotion)}
          >
            {hero.signatureNotes.map((note) => (
              <motion.li
                key={note}
                variants={fadeUp(shouldReduceMotion, 12)}
                className="border border-champagne/15 bg-black/25 px-4 py-3 text-sm text-ivory/75 backdrop-blur transition duration-300 hover:border-champagne/45 hover:bg-black/38 hover:text-ivory"
              >
                {note}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}
