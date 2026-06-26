import Image from "next/image";
import { Mail, Sparkles } from "lucide-react";

import { siteConfig } from "@/config/site";

export function Footer() {
  const contactLink = siteConfig.footer.linkGroups
    .flatMap((group) => group.links)
    .find((link) => link.href.startsWith("mailto:"));

  return (
    <footer
      id="contact"
      className="border-t border-champagne/10 bg-black text-ivory"
    >
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-16">
        <div className="max-w-2xl">
          <div className="flex items-center gap-4">
            <div className="relative h-14 w-14 overflow-hidden rounded-full bg-obsidian">
              <Image
                src={siteConfig.assets.logo}
                alt=""
                width={306}
                height={204}
                sizes="306px"
                className="absolute left-1/2 top-1/2 h-[190px] w-auto max-w-none -translate-x-1/2 -translate-y-[40%] object-contain"
              />
            </div>
            <div>
              <p className="font-serif text-3xl leading-none text-ivory">
                {siteConfig.shortName}
              </p>
              <p className="mt-1 text-xs font-medium uppercase text-champagne/80">
                Fragrance
              </p>
            </div>
          </div>

          <p className="mt-6 max-w-lg font-serif text-2xl leading-tight text-ivory/90 sm:text-3xl">
            {siteConfig.footer.tagline}
          </p>

          {contactLink ? (
            <a
              href={contactLink.href}
              className="mt-7 inline-flex items-center gap-3 text-sm text-ivory/65 transition hover:text-champagne focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne"
              aria-label={contactLink.ariaLabel}
            >
              <Mail aria-hidden="true" className="h-4 w-4" />
              {contactLink.href.replace("mailto:", "")}
            </a>
          ) : null}
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          {siteConfig.footer.linkGroups.map((group) => (
            <div key={group.title}>
              <h2 className="inline-flex items-center gap-2 text-sm font-semibold text-champagne">
                <Sparkles aria-hidden="true" className="h-3.5 w-3.5" />
                {group.title}
              </h2>
              <ul className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <li key={`${group.title}-${link.href}`}>
                    <a
                      href={link.href}
                      className="text-sm text-ivory/65 transition hover:text-champagne focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne"
                      aria-label={link.ariaLabel}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-champagne/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 text-sm text-ivory/55 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>&copy; 2026 {siteConfig.name}. All rights reserved.</p>
          <div className="flex gap-5">
            {siteConfig.footer.legal.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="transition hover:text-champagne focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
