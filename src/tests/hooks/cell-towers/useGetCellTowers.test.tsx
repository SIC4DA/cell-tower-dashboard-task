import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import useGetCellTowers from "@/hooks/cell-towers/useGetCellTowers";

jest.mock("@/mocks/CellTowers.json", () => [
  {
    id: "t-1",
    name: "Tower A",
    city: "Cairo",
    networkType: "4G",
    status: "active",
    signalStrength: 4,
  },
  {
    id: "t-2",
    name: "Tower B",
    city: "Alexandria",
    networkType: "5G",
    status: "offline",
    signalStrength: 2,
  },
]);

function TestComponent() {
  const { data, loading, error } = useGetCellTowers();

  return (
    <div>
      {loading && <span data-testid="loading">loading</span>}
      {error && <span role="alert">{error}</span>}
      {data && (
        <ul data-testid="towers">
          {data.map((tower) => (
            <li key={tower.id}>{tower.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

it("loads towers and shows them after the fake delay", async () => {
  render(<TestComponent />);

  expect(screen.getByTestId("loading")).toBeInTheDocument();

  await waitFor(
    () => {
      expect(screen.queryByTestId("loading")).not.toBeInTheDocument();
    },
    { timeout: 1000 }
  );

  expect(screen.getByTestId("towers")).toBeInTheDocument();
  expect(screen.getByText("Tower A")).toBeInTheDocument();
  expect(screen.getByText("Tower B")).toBeInTheDocument();
});
