import { render, screen } from "@testing-library/react";
import RequestError from "@/components/shared/RequestError";

describe("RequestError", () => {
  it("renders with default error message when no message is provided", () => {
    render(<RequestError />);

    expect(
      screen.getByText(
        "An error occurred while processing your request, please try again later."
      )
    ).toBeInTheDocument();
    expect(screen.getByText("Back to home")).toBeInTheDocument();
  });

  it("renders with custom error message when message is provided", () => {
    const customMessage = "Custom error message";
    render(<RequestError message={customMessage} />);

    expect(screen.getByText(customMessage)).toBeInTheDocument();
    expect(screen.getByText("Back to home")).toBeInTheDocument();
  });

  it("renders with null message and shows default message", () => {
    render(<RequestError message={null} />);

    expect(
      screen.getByText(
        "An error occurred while processing your request, please try again later."
      )
    ).toBeInTheDocument();
    expect(screen.getByText("Back to home")).toBeInTheDocument();
  });

  it("renders with empty string message and shows default message", () => {
    render(<RequestError message="" />);

    expect(
      screen.getByText(
        "An error occurred while processing your request, please try again later."
      )
    ).toBeInTheDocument();
    expect(screen.getByText("Back to home")).toBeInTheDocument();
  });

  it("renders the back to home link with correct href", () => {
    render(<RequestError />);

    const link = screen.getByRole("link", { name: "Back to home" });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/");
  });
});
