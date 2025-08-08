export const applyFilters = <T extends { id: string; name: string }>(
  data: T[],
  search: string,
  filters: Partial<Record<keyof T, string>>
): T[] => {
  return data.filter((item) => {
    const matchesSearch = item.name
      .toLowerCase()
      .includes(search.trim().toLowerCase());

    const matchesFilters = (
      Object.entries(filters) as Array<[keyof T, string]>
    ).every(([key, value]) => {
      if (!value) return true;
      const itemValue = item[key];
      return String(itemValue).toLowerCase() === value.toLowerCase();
    });

    return matchesSearch && matchesFilters;
  });
};
