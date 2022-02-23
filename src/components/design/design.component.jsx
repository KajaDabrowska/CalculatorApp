import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  icrementByAmount,
  decrementByAmount,
} from "../../redux/counter";

import "./design.styles.css";

const Design = ({ result }) => {
  // const count = useSelector((state) => state.counter.value);
  // const dispatch = useDispatch();
  // console.log(count);
  console.log("calc go click");

  return (
    <div className="container">
      <div className="calculator">
        <h1 className="calc__heading">Calculator</h1>

        <div className="calc__window">
          <div className="window__previous">prev</div>
          <div className="window__current">00</div>
        </div>

        <div className="calc__btns">
          <button name="C" className="btn">
            C
          </button>
          <button name="()" className="btn">
            ()
          </button>
          <button name="%" className="btn">
            %
          </button>
          <button name="÷" className="btn">
            ÷
          </button>

          <button name="" className="btn">
            7
          </button>
          <button name="" className="btn">
            9
          </button>
          <button name="×" className="btn">
            ×
          </button>

          <button name="" className="btn">
            4
          </button>
          <button name="" className="btn">
            5
          </button>
          <button name="" className="btn">
            6
          </button>
          <button name="-" className="btn">
            −
          </button>

          <button name="" className="btn">
            1
          </button>
          <button name="" className="btn">
            2
          </button>
          <button name="" className="btn">
            3
          </button>
          <button name="+" className="btn">
            +
          </button>

          <button name="±" className="btn">
            ±
          </button>
          <button name="" className="btn">
            0
          </button>
          <button name="" className="btn">
            ,
          </button>
          <button name="" className="btn btn--big">
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Design;
