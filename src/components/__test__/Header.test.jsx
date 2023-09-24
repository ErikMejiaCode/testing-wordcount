import { describe } from "vitest";
import { Header } from "../Header";
import { render, screen } from "@testing-library/react";

describe("Test Header Component", () => {
  test("render the heading text", () => {
    render(<Header heading={"Word Counter"} />);
    const heading = screen.getByTestId("heading");
    expect(heading.innerHTML).toBe("Word Counter");
  });

  test("Render the subHeading text", () => {
    render(<Header subHeading={"Free online character and word count tool"} />);
    const subHeading = screen.getByTestId("subHeading");
    expect(subHeading.innerHTML).toBe(
      "Free online character and word count tool"
    );
  });
});
