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
        icon={<RadioTower />}
        value={getTotalTowers(towers)}
      />
      <AnalyticCard
        title="Active Towers"
        icon={<Activity />}
        value={getActiveTowers(towers)}
      />
      <AnalyticCard
        title="Average Signal"
        icon={<Signal />}
        value={getAverageSignal(towers)}
      />
    </section>
  );
};

export default Analytics;
