import React from "react";
import { useState } from "react";

import Result from "../result/result.component";
import Keypad from "../keypad/keypad.component";

//TODO
// make maximum width (lengts) of the calculation, otherwise the calculator will be wide af

//TODO
// make a wide mode?

const Calculator = () => {
  const [result, setResult] = useState("");
  const [displayResult, setDisplayResult] = useState("");
  const [prevValue, setPrevValue] = useState("previous");
  const [parenthesisIsOpen, setParenthesisOpen] = useState(false);
  const [isAlmostEqual, setisAlmostEqual] = useState(false);
  const [darkMode, setDarkMode] = useState(null);

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

      // eslint-disable-next-line
      let value = (eval(result) || "0") + "";

      // let shortValue = null;
      // let shortValueWithSign = null;

      if (value.includes(".")) {
        setisAlmostEqual(true);
        value = (+value).toFixed(3);
        // shortValueWithSign = "≈" + shortValue;
      }

      setResult(value);
      setDisplayResult(value);
    } catch (err) {
      setResult("error");
      setDisplayResult("error");
      console.error(err);
    }
  };

  const onClick = (button) => {
    setisAlmostEqual(false);

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

  const themeToggle = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div className={`${darkMode ? "dark-mode" : "light-mode"}`}>
      <div>
        <div className="calculator">
          <div className="container">
            <h1 className="calc__heading">Calculator</h1>

            {darkMode ? (
              <button
                className="theme-toggle light-toggle"
                onClick={themeToggle}
                aria-label="light mode toggle"
              />
            ) : (
              <button
                className="theme-toggle dark-toggle"
                onClick={themeToggle}
                aria-label="dark mode toggle"
              />
            )}
          </div>

          <Result
            result={displayResult}
            prevValue={prevValue}
            isAlmostEqual={isAlmostEqual}
          />
          <Keypad onClick={onClick} />
        </div>
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
