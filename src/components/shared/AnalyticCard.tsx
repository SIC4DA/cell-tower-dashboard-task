import styles from "./AnalyticCard.module.scss";

interface AnalyticCardProps {
  title: string;
  icon: React.ReactNode;
  value: string;
}

const AnalyticCard = ({ title, icon, value }: AnalyticCardProps) => {
  return (
    <div className={styles.analyticCard}>
      <div className={styles.header}>
        <div className={styles.title}>{title}</div>
        <div className={styles.icon}>{icon}</div>
      </div>
      <div className={styles.value}>{value}</div>
    </div>
  );
};

export default AnalyticCard;
