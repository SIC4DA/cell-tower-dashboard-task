import type { CellTower } from "@/types/tower";

export function getTotalTowers(towers: CellTower[]) {
  return towers.length.toString();
}

export function getActiveTowers(towers: CellTower[]) {
  return towers.filter((t) => t.status === "active").length.toString();
}

export function getAverageSignal(towers: CellTower[]) {
  if (towers.length === 0) return "0";
  const total = towers.reduce((sum, t) => sum + t.signalStrength, 0);
  return Math.round(total / towers.length).toString() ;
}
