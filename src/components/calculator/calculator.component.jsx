import React from "react";
import { useState } from "react";

import Result from "../result/result.component";
import Keypad from "../keypad/keypad.component";

const Calculator = () => {
  const [result, setResult] = useState("");
  const [parenthesisIsOpen, setParenthesisOpen] = useState(false);

  const toggleParenthesisIsOpen = () => setParenthesisOpen(!parenthesisIsOpen);

  //   FUNCS
  const reset = () => {
    setResult("");
  };

  const backspace = () => {
    setResult(result.slice(0, -1));
  };

  const calculate = () => {
    try {
      // eslint-disable-next-line
      const value = (eval(result) || "0") + "";

      setResult(value);
    } catch (err) {
      setResult("error");
      console.error(err);
    }
  };

  const onClick = (button) => {
    // IMPORTANT
    // the whole bug was cause by not having else in front of if xD

    if (button === "=") {
      calculate();
    } else if (button === "C") {
      reset();
    } else if (button === "CE") {
      backspace();
    } else if (button === "()") {
      if (!parenthesisIsOpen) {
        setResult(result + "(");
        toggleParenthesisIsOpen();
      } else {
        setResult(result + ")");
        toggleParenthesisIsOpen();
      }
    } else {
      setResult(result + button);
    }
  };

  return (
    <div className="container">
      <div className="calculator">
        <h1 className="calc__heading">Calculator</h1>

        <Result result={result} />
        <Keypad onClick={onClick} />
      </div>
    </div>
  );
};

export default Calculator;
