import { applyFilters } from "@/utils/dataTable";

type Row = { id: string; name: string; status: string; city: string };

const data: Row[] = [
  { id: "1", name: "Tower A", status: "Active", city: "Cairo" },
  { id: "2", name: "Tower B", status: "Offline", city: "Luxor" },
  { id: "3", name: "Alpha", status: "Active", city: "Luxor" },
];

describe("applyFilters", () => {
  it("filters by search query (case-insensitive substring)", () => {
    const result = applyFilters<Row>(data, "alp", {});
    expect(result.map((r) => r.id)).toEqual(["3"]);
  });

  it("filters by dropdown values", () => {
    const result = applyFilters<Row>(data, "", { status: "Active" } as Record<
      keyof Row,
      string
    >);
    expect(result.map((r) => r.id)).toEqual(["1", "3"]);
  });

  it("combines search and filters", () => {
    const result = applyFilters<Row>(data, "Tower", {
      city: "Cairo",
    } as Record<keyof Row, string>);
    expect(result.map((r) => r.id)).toEqual(["1"]);
  });
});
