import React, { useState } from "react";
import "./CalculatorWidget.css";

const CalculatorWidget = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);

  const handleButtonClick = (value) => {
    if (value === "C") {
      setInput("");
      setResult(null);
    } else if (value === "=") {
      try {
        // Evaluate the expression using `eval`
        const evalResult = eval(input);
        setResult(evalResult);
      } catch (error) {
        setResult("Error");
      }
    } else {
      setInput((prev) => prev + value);
    }
  };

  const buttons = [
    "7",
    "8",
    "9",
    "÷",
    "4",
    "5",
    "6",
    "×",
    "1",
    "2",
    "3",
    "-",
    "C",
    "0",
    "=",
    "+",
  ];

  return (
    <div className="calculator-widget">
      <h3>Calculator</h3>
      <div className="calculator-display">
        <div className="calculator-input">{input || "0"}</div>
        <div className="calculator-result">{result !== null && `= ${result}`}</div>
      </div>
      <div className="calculator-buttons">
        {buttons.map((btn) => (
          <button
            key={btn}
            onClick={() => handleButtonClick(btn === "÷" ? "/" : btn === "×" ? "*" : btn)}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CalculatorWidget;
