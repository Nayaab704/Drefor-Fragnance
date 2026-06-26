import { ArrowRight, BottleWine, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/Button";
import type { ProductPreview } from "@/types";

type ProductCardProps = {
  product: ProductPreview;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group flex min-h-[560px] flex-col overflow-hidden rounded-lg border border-champagne/12 bg-[linear-gradient(145deg,rgba(248,240,223,0.07),rgba(248,240,223,0.025))] transition duration-300 hover:-translate-y-1 hover:border-champagne/45 hover:shadow-[0_28px_90px_rgba(0,0,0,0.28)]">
      <div className="relative flex h-60 items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(216,181,109,0.25),transparent_36%),linear-gradient(145deg,rgba(216,181,109,0.12),rgba(5,4,3,0.84))]" />
        <div className="absolute inset-x-10 top-8 h-px bg-gradient-to-r from-transparent via-champagne/60 to-transparent" />
        <div className="absolute bottom-0 h-20 w-40 rounded-[50%] bg-black/60 blur-xl" />
        <div className="relative flex h-44 w-24 items-center justify-center transition duration-300 group-hover:scale-[1.03]">
          <div className="absolute top-0 h-5 w-8 border border-champagne/70 bg-black" />
          <div className="absolute top-5 h-4 w-12 border border-champagne/70 bg-black" />
          <div className="absolute top-9 h-32 w-[4.5rem] rounded-t-md border border-champagne/70 bg-gradient-to-b from-champagne/40 via-ivory/12 to-black" />
          <BottleWine aria-hidden="true" className="relative h-12 w-12 text-champagne" />
        </div>
        <span className="absolute right-4 top-4 rounded-full border border-champagne/20 bg-black/50 px-3 py-1 text-xs text-champagne">
          {product.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase text-champagne/70">
              {product.collection}
            </p>
            <h2 className="mt-2 font-serif text-3xl leading-tight text-ivory">
              {product.name}
            </h2>
          </div>
          <div className="text-right">
            <p className="font-semibold text-ivory">{product.price}</p>
            <p className="mt-1 text-xs text-ivory/50">{product.volume}</p>
          </div>
        </div>

        <p className="mt-5 text-sm leading-7 text-ivory/66">
          {product.description}
        </p>

        <div className="mt-5 border-y border-champagne/10 py-4">
          <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase text-champagne/70">
            <Sparkles aria-hidden="true" className="h-3.5 w-3.5" />
            Notes
          </p>
          <p className="text-sm leading-7 text-ivory/76">
            {product.notes.join(" / ")}
          </p>
        </div>

        <div className="mt-auto flex items-center justify-between gap-4 pt-6">
          <span className="rounded-full border border-champagne/15 px-3 py-1.5 text-xs text-ivory/58">
            {product.intensity}
          </span>
          <Button
            aria-label={`View details for ${product.name}`}
            className="border border-champagne/20 bg-transparent text-ivory hover:border-champagne hover:text-champagne"
            href={product.href}
            size="sm"
            variant="ghost"
          >
            View Details
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </article>
  );
}
