import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  icrementByAmount,
  decrementByAmount,
} from "../../redux/counter";

import "./design.styles.css";

const Calculator = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  // console.log(count);
  console.log("calc go click");
  console.log(1 + -1);

  return (
    <div className="container">
      <div className="calculator">
        <h1 className="calc__heading">Calculator</h1>

        <div className="calc__window">
          <div className="window__previous">prev</div>
          <div className="window__current">{count}</div>
        </div>

        <div className="calc__btns">
          <button className="btn">C</button>
          <button className="btn">()</button>
          <button className="btn">&#x25;</button>
          <button className="btn">&#xf7;</button>

          <button className="btn">7</button>
          <button className="btn">8</button>
          <button className="btn">9</button>
          <button className="btn">&#xd7;</button>

          <button className="btn">4</button>
          <button className="btn">5</button>
          <button className="btn">6</button>
          <button
            className="btn"
            aria-label="decrement value"
            onClick={() => dispatch(decrement())}
          >
            &#x2212;
          </button>

          <button className="btn">1</button>
          <button className="btn">2</button>
          <button className="btn">3</button>
          <button className="btn">&#x2b;</button>

          <button className="btn">&#xb1;</button>
          <button className="btn">0</button>
          <button className="btn">,</button>
          <button className="btn btn--big">=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
