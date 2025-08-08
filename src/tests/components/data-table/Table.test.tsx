import { render, screen, within } from "@testing-library/react";
import Table from "@/components/data-table/Table";
import type { Column } from "@/components/data-table/DataTable";

type Row = { id: string; name: string; status: string };

const columns: Column<Row>[] = [
  { key: "id", label: "ID" },
  { key: "name", label: "Name" },
  { key: "status", label: "Status" },
];

describe("Table", () => {
  it("renders headers and empty state when no data", () => {
    render(<Table<Row> data={[]} columns={columns} />);
    expect(screen.getByText("ID")).toBeInTheDocument();
    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByText("Status")).toBeInTheDocument();
    expect(screen.getByText("No data found")).toBeInTheDocument();
  });

  it("renders rows when data is provided", () => {
    const data: Row[] = [
      { id: "1", name: "Tower A", status: "Active" },
      { id: "2", name: "Tower B", status: "Offline" },
    ];

    render(<Table<Row> data={data} columns={columns} />);

    const rows = screen.getAllByRole("row");

    const bodyRows = rows.slice(1); // to exclude the header row
    expect(bodyRows).toHaveLength(2);

    const firstRow = bodyRows[0];
    expect(within(firstRow).getByText("1")).toBeInTheDocument();
    expect(within(firstRow).getByText("Tower A")).toBeInTheDocument();
    expect(within(firstRow).getByText("Active")).toBeInTheDocument();
  });
});
