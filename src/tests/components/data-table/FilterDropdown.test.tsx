import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FilterDropdown from "@/components/data-table/FilterDropdown";

describe("FilterDropdown", () => {
  it("renders label option and provided options", () => {
    render(
      <FilterDropdown
        label="Status"
        options={["Active", "Offline"]}
        selected=""
        onChange={() => {}}
      />
    );

    expect(screen.getByRole("combobox")).toBeInTheDocument();
    expect(
      screen.getByRole("option", { name: "All Status" })
    ).toBeInTheDocument();
    expect(screen.getByRole("option", { name: "Active" })).toBeInTheDocument();
    expect(screen.getByRole("option", { name: "Offline" })).toBeInTheDocument();
  });

  it("fires onChange when selecting an option", async () => {
    const user = userEvent.setup();
    const handleChange = jest.fn();
    render(
      <FilterDropdown
        label="Status"
        options={["Active", "Offline"]}
        selected=""
        onChange={handleChange}
      />
    );

    await user.selectOptions(screen.getByRole("combobox"), "Active");
    expect(handleChange).toHaveBeenCalledWith("Active");
  });
});
