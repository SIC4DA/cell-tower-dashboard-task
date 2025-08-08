import React from "react";
import styles from "./Skeleton.module.scss";

interface SkeletonProps {
  width?: string | number;
  height?: string | number;
  borderRadius?: string | number;
  style?: React.CSSProperties;
}

const Skeleton: React.FC<SkeletonProps> = ({
  width = "100%",
  height = 16,
  borderRadius = 4,
  style,
}) => {
  return (
    <div
      className={styles.skeleton}
      style={{
        width,
        height,
        borderRadius,
        ...style,
      }}
    />
  );
};

export default Skeleton;
