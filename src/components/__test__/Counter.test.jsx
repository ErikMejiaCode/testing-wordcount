import { render } from "@testing-library/react";
import { Counter } from "../Counter";
import { describe, test } from "vitest";

describe("Counter", () => {
  test("render the textarea", () => {
    const { getByPlaceholderText } = render(<Counter />);
    const textArea = getByPlaceholderText("Type or paste your text");
    expect(textArea).toBeTruthy();
  });
});
