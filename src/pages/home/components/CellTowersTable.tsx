import DataTable, { type Column } from "@/components/data-table/DataTable";
import type { CellTower } from "@/types/tower";
import styles from "./CellTowersTable.module.scss";

export type FilterOption<T> = {
  key: keyof T;
  label: string;
  options: string[];
};

const columns: Column<CellTower>[] = [
  { key: "id", label: "ID" },
  { key: "name", label: "Name" },
  { key: "status", label: "Status" },
  { key: "networkType", label: "Network Type" },
  { key: "city", label: "City" },
  { key: "signalStrength", label: "Signal Strength" },
];

const filterOptions: FilterOption<CellTower>[] = [
  { key: "status", label: "Status", options: ["Active", "Offline"] },
  {
    key: "networkType",
    label: "Network Type",
    options: ["4G", "5G"],
  },
  {
    key: "city",
    label: "City",
    options: ["Cairo", "Luxor", "Hurghada", "Alexandria"],
  },
];

const CellTowersTable = ({ data }: { data: CellTower[] }) => {
  return (
    <section className={styles.cellTowersTableContainer}>
      <h2>Cell Towers</h2>
      <DataTable data={data} columns={columns} filterOptions={filterOptions} />
    </section>
  );
};

export default CellTowersTable;
