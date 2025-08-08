import { render, screen } from "@testing-library/react";
import AnalyticCard from "@/components/shared/AnalyticCard";

const MockIcon = () => <svg data-testid="mock-icon" />;

describe("AnalyticCard", () => {
  it("renders title, value and icon", () => {
    render(<AnalyticCard title="Total" value="42" icon={<MockIcon />} />);

    expect(screen.getByText("Total")).toBeInTheDocument();
    expect(screen.getByText("42")).toBeInTheDocument();
    expect(screen.getByTestId("mock-icon")).toBeInTheDocument();
  });
});
