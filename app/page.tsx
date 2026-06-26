import { BestSellersPreview } from "@/components/home/BestSellersPreview";
import { BrandStory } from "@/components/home/BrandStory";
import { FeaturedCollections } from "@/components/home/FeaturedCollections";
import { HeroSection } from "@/components/home/HeroSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturedCollections />
      <BestSellersPreview />
      <BrandStory />
    </main>
  );
}
