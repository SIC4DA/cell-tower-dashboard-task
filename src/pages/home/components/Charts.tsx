import type { CellTower } from "@/types/tower";
import BarChart from "./charts/BarChart";
import PieChart from "./charts/PieChart";
import styles from "./Charts.module.scss";

interface ChartsProps {
  towers: CellTower[];
}

const Charts = ({ towers }: ChartsProps) => {
  return (
    <section className={styles.chartsContainer}>
      <div className={styles.chartWrapper}>
        <h3 className={styles.chartTitle}>Distribution by City</h3>
        <BarChart towers={towers} />
      </div>
      <div className={styles.chartWrapper}>
        <h3 className={styles.chartTitle}>Active vs Offline</h3>
        <PieChart towers={towers} />
      </div>
    </section>
  );
};

export default Charts;
