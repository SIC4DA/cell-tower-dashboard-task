import { render, screen } from "@testing-library/react";
import Analytics from "@/pages/home/components/Analytics";
import type { CellTower } from "@/types/tower";

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
    city: "Cairo",
    networkType: "5G",
    status: "offline",
    signalStrength: 2,
  },
  {
    id: "3",
    name: "C",
    city: "Luxor",
    networkType: "5G",
    status: "active",
    signalStrength: 5,
  },
];

describe("Analytics", () => {
  it("renders metrics for total, active and average signal", () => {
    render(<Analytics towers={towers} />);

    expect(screen.getByText("Total Towers")).toBeInTheDocument();
    expect(screen.getByText("Active Towers")).toBeInTheDocument();
    expect(screen.getByText("Average Signal")).toBeInTheDocument();

    expect(screen.getByText("3")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.getByText("4")).toBeInTheDocument();
  });
});
