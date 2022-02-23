import React from "react";
import { useState } from "react";

import Result from "../result/result.component";
import Keypad from "../keypad/keypad.component";

const Calculator = () => {
  console.log("go");
  const [result, setValue] = useState(0);

  //   FUNCS

  const reset = () => setValue(0);

  const backspace = () => setValue(result.slice(0, -1));

  return (
    <div className="container">
      <div className="calculator">
        <h1 className="calc__heading">Calculator</h1>

        <Result result={result} />
        <Keypad />
      </div>
    </div>
  );
};

export default Calculator;
