import Fuse from "fuse.js";
import type { FuseResult } from "fuse.js";

export const applyFilters = <T extends { id: string; name: string }>(
  data: T[],
  search: string,
  filters: Partial<Record<keyof T, string>>
): T[] => {
  const normalizedSearch = search.trim();

  const filteredByDropdowns = data.filter((item) => {
    const matchesFilters = (
      Object.entries(filters) as Array<[keyof T, string]>
    ).every(([key, value]) => {
      if (!value) return true;
      const itemValue = item[key];
      return String(itemValue).toLowerCase() === value.toLowerCase();
    });
    return matchesFilters;
  });

  if (!normalizedSearch) return filteredByDropdowns;

  const fuse = new Fuse(filteredByDropdowns, {
    keys: ["name"],
    isCaseSensitive: false,
    threshold: 0.4,
    ignoreLocation: true,
  });

  return fuse.search(normalizedSearch).map((result: FuseResult<T>) => result.item);
};
