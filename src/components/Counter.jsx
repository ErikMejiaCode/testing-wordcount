import { useState, useRef } from "react";

export const Counter = () => {
  const [charLength, setCharLength] = useState(0);
  const [wordLength, setWordLength] = useState(0);

  const textRef = useRef();

  const handleCount = () => {
    const value = textRef.current.value;
    setCharLength(value.length);
    value.length
      ? setWordLength(value.trim().split(" ").length)
      : setWordLength(0);
  };

  const handleButton = () => {
    textRef.current.value = "";
    handleCount();
  };

  return (
    <section className="counter">
      <textarea
        onChange={handleCount}
        ref={textRef}
        placeholder="Type or paste your text"
        data-testid="textArea"
      ></textarea>
      <button
        data-testid="clearBtn"
        onClick={handleButton}
        disabled={charLength ? "" : "disabled"}
      >
        Clear
      </button>

      <p className="result">
        <span data-testid="charLength">Character: {charLength}</span>
        <span data-testid="wordLength">Word: {wordLength}</span>
      </p>
    </section>
  );
};
