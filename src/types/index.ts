export type NavItem = {
  label: string;
  href: string;
  ariaLabel?: string;
};

export type CallToAction = NavItem;

export type Collection = {
  name: string;
  slug: "oud" | "amber" | "floral" | "fresh";
  description: string;
  note: string;
  href: string;
  accent: "gold" | "rose" | "sage" | "ivory";
};

export type ProductCategory = "Oud" | "Amber" | "Floral" | "Fresh" | "Musk";

export type ProductPreview = {
  name: string;
  slug: string;
  category: ProductCategory;
  collection: string;
  price: string;
  volume: string;
  description: string;
  notes: string[];
  intensity: string;
  href: string;
};

export type FooterLinkGroup = {
  title: string;
  links: NavItem[];
};

export type SiteConfig = {
  name: string;
  shortName: string;
  description: string;
  assets: {
    logo: string;
    hero: string;
  };
  navItems: NavItem[];
  hero: {
    eyebrow: string;
    headline: string;
    subheading: string;
    primaryCta: CallToAction;
    secondaryCta: CallToAction;
    imageAlt: string;
    signatureNotes: string[];
  };
  collections: Collection[];
  bestSellers: ProductPreview[];
  shopFilters: Array<"All" | ProductCategory>;
  shopSortOptions: Array<{
    label: string;
    value: "featured" | "price-asc" | "price-desc";
  }>;
  shopProducts: ProductPreview[];
  brandStory: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    values: string[];
    cta: CallToAction;
  };
  footer: {
    tagline: string;
    linkGroups: FooterLinkGroup[];
    legal: NavItem[];
  };
};
