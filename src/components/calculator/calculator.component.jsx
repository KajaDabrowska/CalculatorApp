import React from "react";
import { useState } from "react";

import Result from "../result/result.component";
import Keypad from "../keypad/keypad.component";

const Calculator = () => {
  const [result, setResult] = useState("0");

  //   FUNCS
  const reset = () => {
    setResult("0");
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
    }
  };

  const onClick = (button) => {
    // IMPORTANT
    // the whole bug was cause by not having else in front of if xD

    if (button === "=") {
      calculate();
    } else if (button === "C") {
      reset();
      console.log("C", result);
    } else if (button === "CE") {
      backspace();
    } else {
      //TODO
      //1. if result === 0 then change the zero into new value not add at the end
      setResult(result + button);
    }
  };

  console.log("RESULT FROM update: ", result);
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
