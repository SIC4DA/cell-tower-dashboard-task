import type { Column } from "./DataTable";
import styles from "./DataTable.module.scss";

interface TableProps<T extends { id: string }> {
  data: T[];
  columns: Column<T>[];
}

const Table = <T extends { id: string }>({ data, columns }: TableProps<T>) => {
  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={String(col.key)}>{col.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              {columns.map((col) => (
                <td key={String(col.key)}>{String(row[col.key])}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
