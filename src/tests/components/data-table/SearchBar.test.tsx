import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchBar from "@/components/data-table/SearchBar";

describe("SearchBar", () => {
  it("renders input with placeholder", () => {
    render(<SearchBar value="" onChange={() => {}} />);
    expect(
      screen.getByPlaceholderText("Search by name...")
    ).toBeInTheDocument();
  });

  it("calls onChange when typing", async () => {
    const user = userEvent.setup();
    const handleChange = jest.fn();
    render(<SearchBar value="" onChange={handleChange} />);

    await user.type(screen.getByPlaceholderText("Search by name..."), "abc");
    expect(handleChange).toHaveBeenCalled();
  });
});
