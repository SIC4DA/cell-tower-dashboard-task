import { useMemo, useState } from "react";
import styles from "./DataTable.module.scss";
import SearchBar from "./SearchBar";
import FilterDropdown from "./FilterDropdown";
import { applyFilters } from "@/utils/dataTable";
import Table from "./Table";

export interface Column<T> {
  key: keyof T;
  label: string;
}

interface DataTableProps<T extends { id: string; name: string }> {
  data: T[];
  columns: Column<T>[];
  filterOptions?: { key: keyof T; label: string; options: string[] }[];
}

const DataTable = <T extends { id: string; name: string }>({
  data,
  columns,
  filterOptions,
}: DataTableProps<T>) => {
  const [search, setSearch] = useState<string>("");
  const [filters, setFilters] = useState<Partial<Record<keyof T, string>>>({});

  const handleFilterChange = (key: keyof T, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const filteredData = useMemo(() => {
    return applyFilters(data, search, filters);
  }, [data, search, filters]);

  return (
    <div className={styles.dataTableContainer}>
      <div className={styles.filtersContainer}>
        <SearchBar value={search} onChange={setSearch} />
        {filterOptions?.map((option) => (
          <FilterDropdown
            key={String(option.key)}
            label={option.label}
            options={option.options}
            selected={filters[option.key] ?? ""}
            onChange={(value) => handleFilterChange(option.key, value)}
          />
        ))}
      </div>
      <Table data={filteredData} columns={columns} />
    </div>
  );
};

export default DataTable;
