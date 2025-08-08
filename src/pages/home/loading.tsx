import Skeleton from "@/components/shared/Skeleton";
import styles from "./loading.module.scss";

export default function HomeLoading() {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.analyticsLoadingRow}>
        <Skeleton height={121} />
        <Skeleton height={121} />
        <Skeleton height={121} />
      </div>
      <div className={styles.chartsLoadingRow}>
        <Skeleton height={329} />
        <Skeleton height={329} />
      </div>
      <div className={styles.tableLoadingRow}>
        <Skeleton height={32} width={120} style={{ marginBottom: "16px" }} />
        <div className={styles.tableFiltersLoadingRow}>
          <Skeleton height={44} style={{ flexGrow: 1, width: "unset" }} />
          <Skeleton height={44} width={150} />
          <Skeleton height={44} width={150} />
          <Skeleton height={44} width={150} />
        </div>
        <Skeleton height={300} />
      </div>
    </div>
  );
}
