import {
  getTotalTowers,
  getActiveTowers,
  getAverageSignal,
} from "@/utils/analytics";
import type { CellTower } from "@/types/tower";

describe("analytics utils", () => {
  const towers: CellTower[] = [
    {
      id: "1",
      name: "A",
      city: "Cairo",
      networkType: "4G",
      status: "active",
      signalStrength: 4,
    },
    {
      id: "2",
      name: "B",
      city: "Luxor",
      networkType: "5G",
      status: "offline",
      signalStrength: 2,
    },
    {
      id: "3",
      name: "C",
      city: "Cairo",
      networkType: "4G",
      status: "active",
      signalStrength: 3,
    },
  ];

  it("getTotalTowers returns count as string", () => {
    expect(getTotalTowers(towers)).toBe("3");
  });

  it("getActiveTowers returns active count as string", () => {
    expect(getActiveTowers(towers)).toBe("2");
  });

  it("getAverageSignal returns rounded average as string", () => {
    expect(getAverageSignal(towers)).toBe("3");
    expect(getAverageSignal([] as CellTower[])).toBe("0");
  });
});
