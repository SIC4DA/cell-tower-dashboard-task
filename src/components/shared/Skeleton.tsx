import React from "react";
import styles from "./Skeleton.module.scss";

interface SkeletonProps {
  width?: string | number;
  height?: string | number; 
  style?: React.CSSProperties;
}

const Skeleton: React.FC<SkeletonProps> = ({
  width = "100%",
  height = 16,
  style,
}) => {
  return (
    <div
      className={styles.skeleton}
      style={{
        width,
        height,
        ...style,
      }}
    />
  );
};

export default Skeleton;
