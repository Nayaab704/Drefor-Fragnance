import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "DREFOR Fragrance",
  shortName: "DREFOR",
  description:
    "Luxury perfumes inspired by heritage, crafted for those who leave a lasting impression.",
  assets: {
    logo: "/images/drefor-logo.png",
    hero: "/images/drefor-hero-bg.png",
  },
  navItems: [
    { label: "Collection", href: "#collections" },
    { label: "Best Sellers", href: "#best-sellers" },
    { label: "Story", href: "#story" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    eyebrow: "DREFOR Fragrance",
    headline: "A Scent That Defines You",
    subheading:
      "Timeless fragrances inspired by heritage, crafted for those who leave a lasting impression.",
    primaryCta: {
      label: "Explore Collection",
      href: "#collections",
      ariaLabel: "Explore DREFOR fragrance collections",
    },
    secondaryCta: {
      label: "Discover Our Story",
      href: "#story",
      ariaLabel: "Discover the DREFOR brand story",
    },
    imageAlt: "DREFOR Gulf perfume bottle in warm gold light",
    signatureNotes: ["Oud", "Amber", "Floral", "Fresh"],
  },
  collections: [
    {
      name: "Oud",
      slug: "oud",
      description:
        "Deep woods, resin, and smoke composed for a signature that enters quietly and stays.",
      note: "Smoked woods",
      href: "#best-sellers",
      accent: "gold",
    },
    {
      name: "Amber",
      slug: "amber",
      description:
        "Golden balsam, spice, and velvet warmth for evening rituals and lasting trails.",
      note: "Golden warmth",
      href: "#best-sellers",
      accent: "ivory",
    },
    {
      name: "Floral",
      slug: "floral",
      description:
        "Petal, silk, and musk shaped into graceful compositions with modern restraint.",
      note: "Silken petals",
      href: "#best-sellers",
      accent: "rose",
    },
    {
      name: "Fresh",
      slug: "fresh",
      description:
        "Citrus, mineral air, and crisp aromatics for an effortless daily impression.",
      note: "Mineral clarity",
      href: "#best-sellers",
      accent: "sage",
    },
  ],
  bestSellers: [
    {
      name: "Gulf",
      slug: "gulf",
      category: "Oud",
      collection: "Oud Amber",
      price: "$185",
      volume: "100ml",
      description:
        "Saffron brightness over smoked oud, amber resin, and polished woods.",
      notes: ["Saffron", "Smoked Oud", "Amber Resin"],
      intensity: "Intense",
      href: "#best-sellers",
    },
    {
      name: "Noir Oud",
      slug: "noir-oud",
      category: "Oud",
      collection: "Oud",
      price: "$210",
      volume: "100ml",
      description:
        "Dark oud and incense softened with leather, tonka, and late-night warmth.",
      notes: ["Black Oud", "Incense", "Tonka"],
      intensity: "Deep",
      href: "#best-sellers",
    },
    {
      name: "Royal Amber",
      slug: "royal-amber",
      category: "Amber",
      collection: "Amber",
      price: "$175",
      volume: "100ml",
      description:
        "Luminous amber wrapped in vanilla, labdanum, and a soft trail of musk.",
      notes: ["Amber", "Labdanum", "Vanilla"],
      intensity: "Radiant",
      href: "#best-sellers",
    },
    {
      name: "White Musk",
      slug: "white-musk",
      category: "Musk",
      collection: "Fresh Floral",
      price: "$145",
      volume: "75ml",
      description:
        "Clean musk, white tea, and iris petals composed for quiet daily polish.",
      notes: ["White Tea", "Iris", "Clean Musk"],
      intensity: "Soft",
      href: "#best-sellers",
    },
  ],
  shopFilters: ["All", "Oud", "Amber", "Floral", "Fresh", "Musk"],
  shopSortOptions: [
    { label: "Featured", value: "featured" },
    { label: "Price Low to High", value: "price-asc" },
    { label: "Price High to Low", value: "price-desc" },
  ],
  shopProducts: [
    {
      name: "Gulf",
      slug: "gulf",
      category: "Oud",
      collection: "Oud Amber",
      price: "$185",
      volume: "100ml",
      description:
        "Saffron brightness over smoked oud, amber resin, and polished woods.",
      notes: ["Saffron", "Smoked Oud", "Amber Resin"],
      intensity: "Intense",
      href: "#",
    },
    {
      name: "Noir Oud",
      slug: "noir-oud",
      category: "Oud",
      collection: "Oud",
      price: "$210",
      volume: "100ml",
      description:
        "Dark oud and incense softened with leather, tonka, and late-night warmth.",
      notes: ["Black Oud", "Incense", "Tonka"],
      intensity: "Deep",
      href: "#",
    },
    {
      name: "Royal Amber",
      slug: "royal-amber",
      category: "Amber",
      collection: "Amber",
      price: "$175",
      volume: "100ml",
      description:
        "Luminous amber wrapped in vanilla, labdanum, and a soft trail of musk.",
      notes: ["Amber", "Labdanum", "Vanilla"],
      intensity: "Radiant",
      href: "#",
    },
    {
      name: "White Musk",
      slug: "white-musk",
      category: "Musk",
      collection: "Fresh Floral",
      price: "$145",
      volume: "75ml",
      description:
        "Clean musk, white tea, and iris petals composed for quiet daily polish.",
      notes: ["White Tea", "Iris", "Clean Musk"],
      intensity: "Soft",
      href: "#",
    },
    {
      name: "Amber Veil",
      slug: "amber-veil",
      category: "Amber",
      collection: "Amber Floral",
      price: "$165",
      volume: "75ml",
      description:
        "Golden amber draped with jasmine, vanilla, and polished skin musk.",
      notes: ["Jasmine", "Vanilla", "Soft Amber"],
      intensity: "Luminous",
      href: "#",
    },
    {
      name: "Floral Muse",
      slug: "floral-muse",
      category: "Floral",
      collection: "Floral",
      price: "$155",
      volume: "75ml",
      description:
        "Rose petals, peony, and white woods balanced with a sheer musky trail.",
      notes: ["Rose", "Peony", "White Woods"],
      intensity: "Elegant",
      href: "#",
    },
  ],
  brandStory: {
    eyebrow: "The DREFOR House",
    title: "Heritage notes, edited with modern restraint.",
    paragraphs: [
      "DREFOR is composed for presence without excess. Each scent begins with a classic material, then pares it back until only the most memorable trail remains.",
      "The house language is deliberate: rare woods, luminous amber, transparent florals, and clean musks shaped for daily rituals and evening arrival.",
    ],
    values: ["Measured intensity", "Polished raw materials", "Quiet longevity"],
    cta: {
      label: "Explore the Notes",
      href: "#collections",
      ariaLabel: "Explore DREFOR fragrance notes",
    },
  },
  footer: {
    tagline:
      "Luxury fragrances composed for quiet presence, warm rituals, and lasting memory.",
    linkGroups: [
      {
        title: "Explore",
        links: [
          { label: "Collections", href: "#collections" },
          { label: "Best Sellers", href: "#best-sellers" },
          { label: "Brand Story", href: "#story" },
        ],
      },
      {
        title: "House",
        links: [
          { label: "Contact", href: "mailto:hello@drefor.com" },
          { label: "Instagram", href: "https://instagram.com" },
          { label: "Customer Care", href: "mailto:care@drefor.com" },
        ],
      },
    ],
    legal: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
    ],
  },
};
