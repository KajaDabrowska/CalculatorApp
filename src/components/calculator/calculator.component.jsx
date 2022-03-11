import React from "react";
import { useState } from "react";

import Result from "../result/result.component";
import Keypad from "../keypad/keypad.component";

//TODO
// make maximum width (lengts) of the calculation, otherwise the calculator will be wide af

const Calculator = () => {
  const [result, setResult] = useState("");
  const [displayResult, setDisplayResult] = useState("");
  const [prevValue, setPrevValue] = useState("previous");
  const [parenthesisIsOpen, setParenthesisOpen] = useState(false);

  const toggleParenthesisIsOpen = () => setParenthesisOpen(!parenthesisIsOpen);

  //   FUNCS

  // const setResultAndDisplay = (mathRes, mathDis) => {
  //   setResult(mathRes);
  //   setDisplayResult(mathDis);
  // };

  const reset = () => {
    setResult("");
    setDisplayResult("");
    setPrevValue("previous");
  };

  const backspace = () => {
    setDisplayResult(displayResult.slice(0, -1));
    setResult(result.slice(0, -1));
  };

  const parenthesisFunc = () => {
    if (!parenthesisIsOpen) {
      setDisplayResult(displayResult + "(");
      setResult(result + "(");
      toggleParenthesisIsOpen();
    } else {
      setDisplayResult(displayResult + ")");
      setResult(result + ")");
      toggleParenthesisIsOpen();
    }
  };

  const calculate = () => {
    try {
      //set prev value
      setPrevValue(displayResult);

      //TODO (rounding up etc)
      // eslint-disable-next-line
      const value = (eval(result) || "0") + "";
      console.log(parseInt(value).toString() + (value % 1));
      console.log(parseInt(value + (value % 1)));
      // console.log(value.slice(2, 4));

      console.log(value.valueOf());
      console.log(parseInt(value).toFixed(3));
      // console.log(parseInt(value).toFixed(6));

      setResult(value);
      setDisplayResult(value);
    } catch (err) {
      setResult("error");
      setDisplayResult("error");
      console.error(err);
    }
  };

  const onClick = (button) => {
    //TODO what when someone clicks "=" when it's 0
    switch (button) {
      case "=":
        calculate();
        break;
      case "C":
        reset();
        break;
      case "CE":
        backspace();
        break;
      case "()":
        parenthesisFunc();
        break;
      case "/":
        setDisplayResult(displayResult + "÷");
        setResult(result + button);
        break;
      case "*":
        setDisplayResult(displayResult + "×");
        setResult(result + button);
        break;

      default:
        setDisplayResult(displayResult + button);
        setResult(result + button);
    }
  };

  return (
    <div className="container">
      <div className="calculator">
        <h1 className="calc__heading">Calculator</h1>

        <Result result={displayResult} prevValue={prevValue} />
        <Keypad onClick={onClick} />
      </div>
    </div>
  );
};

export default Calculator;

//onClick with else if statements:
// IMPORTANT
// the whole bug was cause by not having else in front of if xD

// if (button === "=") {
//   calculate();
// } else if (button === "C") {
//   reset();
// } else if (button === "CE") {
//   backspace();
// } else if (button === "()") {
//   if (!parenthesisIsOpen) {
//     setDisplayResult(displayResult + "(");
//     setResult(result + "(");
//     toggleParenthesisIsOpen();
//   } else {
//     setDisplayResult(displayResult + ")");
//     setResult(result + ")");
//     toggleParenthesisIsOpen();
//   }
// } else if (button === "/") {
//   setDisplayResult(displayResult + "÷");
//   setResult(result + button);
// } else if (button === "*") {
//   setDisplayResult(displayResult + "×");
//   setResult(result + button);
// } else {
//   setDisplayResult(displayResult + button);
//   setResult(result + button);
// }
