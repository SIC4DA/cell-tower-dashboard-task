import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DataTable, { type Column } from "@/components/data-table/DataTable";
import type { FilterOption } from "@/pages/home/components/CellTowersTable";

jest.mock("@/hooks/shared/useDebounce", () => ({
  __esModule: true,
  default: (v: unknown) => v,
}));

type Row = { id: string; name: string; status: string; city: string };

const columns: Column<Row>[] = [
  { key: "id", label: "ID" },
  { key: "name", label: "Name" },
  { key: "status", label: "Status" },
  { key: "city", label: "City" },
];

const filterOptions: FilterOption<Row>[] = [
  { key: "status", label: "Status", options: ["Active", "Offline"] },
  { key: "city", label: "City", options: ["Cairo", "Luxor"] },
];

const data: Row[] = [
  { id: "1", name: "Tower A", status: "Active", city: "Cairo" },
  { id: "2", name: "Tower B", status: "Offline", city: "Luxor" },
  { id: "3", name: "Alpha", status: "Active", city: "Luxor" },
];

describe("DataTable", () => {
  it("filters by search input", async () => {
    const user = userEvent.setup();
    render(<DataTable<Row> data={data} columns={columns} filterOptions={[]} />);

    expect(screen.getByText("Tower A")).toBeInTheDocument();
    await user.type(screen.getByPlaceholderText("Search by name..."), "Alpha");
    expect(screen.queryByText("Tower A")).not.toBeInTheDocument();
    expect(screen.getByText("Alpha")).toBeInTheDocument();
  });

  it("applies dropdown filters", async () => {
    const user = userEvent.setup();
    render(
      <DataTable<Row>
        data={data}
        columns={columns}
        filterOptions={filterOptions as FilterOption<Row>[]}
      />
    );

    await user.selectOptions(screen.getAllByRole("combobox")[0], "Active");
    expect(screen.queryByText("Tower B")).not.toBeInTheDocument();
    expect(screen.getByText("Tower A")).toBeInTheDocument();
  });
});
