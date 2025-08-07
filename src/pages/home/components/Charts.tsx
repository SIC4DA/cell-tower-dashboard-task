import type { CellTower } from "@/types/tower";
import BarChart from "./BarChart";
import PieChart from "./PieChart";
import styles from "./Charts.module.scss";

interface ChartsProps {
  towers: CellTower[];
}

const Charts = ({ towers }: ChartsProps) => {
  return (
    <section className={styles.chartsContainer}>
      <div className={styles.chartWrapper}>
        <h3>Distribution by City</h3>
        <BarChart towers={towers}  />
      </div>
      <div className={styles.chartWrapper}>
        <h3>Active vs Offline</h3>
        <PieChart towers={towers}  />
      </div>
    </section>
  );
};

export default Charts;
