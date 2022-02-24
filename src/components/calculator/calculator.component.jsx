import React from "react";
import { useState } from "react";

import Result from "../result/result.component";
import Keypad from "../keypad/keypad.component";

const Calculator = () => {
  // console.log("go");
  const [result, setValue] = useState("");
  // console.log(eval(result));
  // console.log((eval(result) || "") + "");
  // console.log(Function('"use strict";return (' + obj + ")")());

  //   FUNCS
  const reset = () => setValue("");

  const backspace = () => setValue(result.slice(0, -1));

  const calculate = () => {
    //BUG
    setValue((eval(result) || "") + "");
    // try {
    //   // setValue(eval(result));
    // } catch (err) {
    //   setValue("erro");
    // }
    console.log((eval(result) || "") + "");
  };

  const onClick = (button) => {
    if (button === "=") {
      //BUG
      calculate();
      console.log(button);
      console.log(result);
    }
    if (button === "C") {
      reset();
    }
    if (button === "CE") {
      backspace();
    } else {
      setValue(result + button);
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
