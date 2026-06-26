import Image from "next/image";
import Link from "next/link";
import { Sparkles } from "lucide-react";

import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-champagne/10 bg-obsidian/92 backdrop-blur-xl">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-4 py-4 sm:px-6 lg:px-8"
      >
        <Link
          href="/"
          className="group flex min-w-0 items-center gap-3 sm:gap-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne"
          aria-label={`${siteConfig.name} home`}
        >
          <span
            aria-hidden="true"
            className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full bg-black/35 shadow-[0_12px_34px_rgba(216,181,109,0.14)] sm:h-12 sm:w-12 lg:h-[52px] lg:w-[52px]"
          >
            <Image
              src={siteConfig.assets.logo}
              alt=""
              width={306}
              height={204}
              sizes="(max-width: 640px) 258px, (max-width: 1024px) 282px, 306px"
              className="absolute left-1/2 top-1/2 h-[172px] w-auto max-w-none -translate-x-1/2 -translate-y-[40%] object-contain object-center sm:h-[188px] lg:h-[204px]"
            />
          </span>
          <span className="min-w-0 pt-0.5">
            <span className="block font-serif text-xl leading-none text-ivory sm:text-2xl lg:text-[1.65rem]">
              {siteConfig.shortName}
            </span>
            <span className="mt-1 block text-[0.58rem] font-medium uppercase text-champagne/80 sm:text-[0.66rem]">
              Fragrance
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {siteConfig.navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-ivory/75 transition hover:text-champagne focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne"
              aria-label={item.ariaLabel}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Button
          href={siteConfig.hero.primaryCta.href}
          variant="secondary"
          size="sm"
          className="hidden sm:inline-flex"
          aria-label={siteConfig.hero.primaryCta.ariaLabel}
        >
          <Sparkles aria-hidden="true" className="h-4 w-4" />
          {siteConfig.hero.primaryCta.label}
        </Button>
      </nav>

      <nav
        aria-label="Mobile navigation"
        className="border-t border-champagne/10 px-4 py-3 md:hidden"
      >
        <div className="flex gap-4 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {siteConfig.navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="shrink-0 text-sm text-ivory/75 transition hover:text-champagne focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne"
              aria-label={item.ariaLabel}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
