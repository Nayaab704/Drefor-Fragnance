import { SlidersHorizontal } from "lucide-react";

import { siteConfig } from "@/config/site";

export function ProductFilters() {
  return (
    <div className="rounded-lg border border-champagne/12 bg-ivory/[0.035] p-4 sm:p-5">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase text-champagne/80">
            <SlidersHorizontal aria-hidden="true" className="h-4 w-4" />
            Filter by family
          </p>
          <div
            aria-label="Filter products by fragrance family"
            className="flex flex-wrap gap-2"
            role="group"
          >
            {siteConfig.shopFilters.map((filter) => (
              <button
                aria-pressed={filter === "All"}
                className="min-h-10 rounded-full border border-champagne/15 px-4 text-sm text-ivory/72 transition duration-300 hover:border-champagne/45 hover:text-champagne focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne aria-pressed:border-champagne aria-pressed:bg-champagne aria-pressed:text-obsidian"
                key={filter}
                type="button"
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="min-w-full sm:min-w-64 lg:min-w-72">
          <label
            className="mb-3 block text-xs font-semibold uppercase text-champagne/80"
            htmlFor="shop-sort"
          >
            Sort collection
          </label>
          <select
            className="h-12 w-full rounded-full border border-champagne/20 bg-black px-5 text-sm text-ivory outline-none transition duration-300 hover:border-champagne/45 focus:border-champagne focus:ring-2 focus:ring-champagne/25"
            defaultValue={siteConfig.shopSortOptions[0]?.value}
            id="shop-sort"
          >
            {siteConfig.shopSortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
