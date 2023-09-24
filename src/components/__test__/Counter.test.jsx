import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { describe, test } from "vitest";
import userEvent from "@testing-library/user-event";
import { Counter } from "../Counter";

describe("Counter Component Test", () => {
  test("render the textarea", () => {
    const { getByPlaceholderText } = render(<Counter />);
    const textArea = getByPlaceholderText("Type or paste your text");
    expect(textArea).toBeTruthy();
  });

  test("render the character result", () => {
    const { getByTestId } = render(<Counter />);
    const charLength = getByTestId("charLength");
    expect(charLength.innerHTML).toBe("Character: 0");
  });

  test("render the word result", () => {
    render(<Counter />);
    const wordLength = screen.getByText("Word: 0");
    expect(wordLength).toBeInTheDocument();
  });

  //Tests below  require async/await - waitFor to ensure assertions are made after the componenets state updates have been processed

  test("change textarea and update result", async () => {
    render(<Counter />);
    const textArea = screen.getByTestId("textArea");
    const charLength = screen.getByTestId("charLength");
    const wordLength = screen.getByTestId("wordLength");

    userEvent.type(textArea, "erik");
    await waitFor(() => {
      expect(charLength.innerHTML).toBe("Character: 4");
      expect(wordLength.innerHTML).toBe("Word: 1");
    });
  });

  test("clearing textarea and update results", async () => {
    render(<Counter />);
    const textArea = screen.getByTestId("textArea");
    const clearBtn = screen.getAllByTestId("clearBtn");
    const charLength = screen.getByTestId("charLength");
    const wordLength = screen.getByTestId("wordLength");

    userEvent.click(textArea, "erik");

    userEvent.type(textArea, "erik");
    await waitFor(() => {
      expect(charLength.innerHTML).toBe("Character: 4");
      expect(wordLength.innerHTML).toBe("Word: 1");
    });

    //CLear the text area
    fireEvent.click(clearBtn[0]);
    await waitFor(() => {
      expect(charLength.innerHTML).toBe("Character: 0");
      expect(wordLength.innerHTML).toBe("Word: 0");
    });
  });
});
