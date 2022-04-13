import React from "react";
import { useState } from "react";

import Result from "../result/result.component";
import Keypad from "../keypad/keypad.component";

//TODO
// make maximum width (lengts) of the calculation, otherwise the calculator will be wide af

//TODO
// make a wide mode?

//TODO
// darkMode with LocalStorage

const Calculator = () => {
  const [result, setResult] = useState("");
  const [displayResult, setDisplayResult] = useState("");
  const [prevValue, setPrevValue] = useState("previous");
  const [parenthesisIsOpen, setParenthesisOpen] = useState(false);
  const [isAlmostEqual, setisAlmostEqual] = useState(false);
  const [darkMode, setDarkMode] = useState(null);

  const toggleParenthesisIsOpen = () => setParenthesisOpen(!parenthesisIsOpen);

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

  const hasPercantage = () => {
    console.log(result.includes("%"));
    if (result.includes("%")) {
      //replace the % with / 100
      const fixedRes = result.replace("%", "/100");

      return fixedRes;
    } else return result;
  };

  const checkForZeros = (value) => {
    if (value[0] === "0" && value[1] !== ".") {
      if (value.includes(".")) {
        const commaIndex = value.indexOf(".");

        const newVal = value.slice(commaIndex - 1);

        return newVal;
      } else {
        const newVal2 = value.slice(0, 1) + "." + value.slice(1);

        return newVal2;
      }
    } else return value;
  };

  const roundUp = (value) => {
    if (value.includes(".")) {
      if (value.length > 4) {
        setisAlmostEqual(true);
        const rounded = (+value).toFixed(3);

        return rounded;
      } else if (value.length === 4) {
        const rounded = (+value).toFixed(2);

        return rounded;
      }
    } else return value;
  };

  const calculate = () => {
    try {
      //set prev value
      setPrevValue(displayResult);

      // Check if value has % in it
      const percFixedValue = hasPercantage();

      // Check if value has no zeros at beginning
      const valueReadyForEval = checkForZeros(percFixedValue);

      // eslint-disable-next-line
      const value = (eval(valueReadyForEval) || "0") + "";

      // Round up (Max 3 places after comma)
      const rounded = roundUp(value);

      console.log(rounded);
      setResult(rounded);
      setDisplayResult(rounded);
    } catch (err) {
      setResult("error");
      setDisplayResult("error");
      console.error(err);
    }
  };

  const checkForDoubleSigns = (button) => {
    const lastChar = result.slice(-1);
    const lastCharNum = parseInt(result.slice(-1));

    const aNumber = new RegExp(/[0-9]/);
    const lastIsANum = aNumber.test(lastCharNum);
    const btnSsANum = parseInt(button) ? true : false;

    const signIsTheSameBtn = lastChar === button && !btnSsANum;
    const hasDoubleS = !btnSsANum && !lastIsANum;

    if (signIsTheSameBtn) {
      return {
        hasDoubleSign: true,
        isSameButton: true,
      };
    } else if (hasDoubleS && lastChar !== "" && !signIsTheSameBtn) {
      console.log("i work");
      return {
        hasDoubleSign: true,
        isSameButton: false,
      };
    } else {
      return {
        hasDoubleSign: false,
        isSameButton: false,
      };
    }
  };

  const checkSignAndDisplay = (button, isDivide, isMultiply) => {
    const { hasDoubleSign, isSameButton } = checkForDoubleSigns(button);
    console.log("RESULT", result);
    console.log(`hasDoubleSign: ${hasDoubleSign}, 
isSameButton: ${isSameButton}`);

    if (hasDoubleSign && isSameButton) {
      // Don't add the button again
      setDisplayResult(displayResult);
      setResult(result);
    } else if (hasDoubleSign && !isSameButton) {
      // Exchange last character for new sign
      const resultWithoutLastChar = result.slice(0, -1);
      const displayResultWithoutLastChar = displayResult.slice(0, -1);

      setDisplayResult(displayResultWithoutLastChar + button);
      setResult(resultWithoutLastChar + button);
    } else if (!hasDoubleSign) {
      if (isDivide || isMultiply) {
        setDisplayResult(displayResult + (isDivide ? "÷" : "×"));
        setResult(result + button);
      } else {
        setDisplayResult(displayResult + button);
        setResult(result + button);
      }
    }
  };

  const onClick = (button) => {
    setisAlmostEqual(false);

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
        //maybe just do it in the check (the isMultiple etc)
        checkSignAndDisplay(button, true);
        break;
      case "*":
        checkSignAndDisplay(button, null, true);
        break;

      default:
        checkSignAndDisplay(button);
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
