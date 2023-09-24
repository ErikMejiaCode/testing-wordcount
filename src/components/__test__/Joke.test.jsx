import { describe } from "vitest";
import { Joke } from "../Joke";
import { render, screen, waitFor } from "@testing-library/react";

describe("Test Joke Component", () => {
  test("render joke text deconstructing", async () => {
    const { getByTestId } = render(<Joke />);

    await waitFor(() => {
      const jokeHeadline = getByTestId("jokeHeadline");
      expect(jokeHeadline.innerHTML).toBeTruthy();
    });
  });

  test("render joke text using screen", async () => {
    render(<Joke />);

    await waitFor(() => {
      const jokeHeadline = screen.getByTestId("jokeHeadline");
      expect(jokeHeadline.innerHTML).toBeTruthy();
    });
  });
});
