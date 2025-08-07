import AnalyticCard from "@/components/shared/AnalyticCard";
import { Activity, RadioTower, Signal } from "lucide-react";
import styles from "./Analytics.module.scss";
import type { CellTower } from "@/types/tower";
import {
  getActiveTowers,
  getAverageSignal,
  getTotalTowers,
} from "@/utils/analytics";

const Analytics = ({ towers }: { towers: CellTower[] }) => {
  return (
    <section className={styles.analyticsContainer}>
      <AnalyticCard
        title="Total Towers"
        icon={<RadioTower size={22} />}
        value={getTotalTowers(towers)}
      />
      <AnalyticCard
        title="Active Towers"
        icon={<Activity size={22} />}
        value={getActiveTowers(towers)}
      />
      <AnalyticCard
        title="Average Signal"
        icon={<Signal size={22} />}
        value={getAverageSignal(towers)}
      />
    </section>
  );
};

export default Analytics;
