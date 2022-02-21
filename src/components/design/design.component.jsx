import React from "react";

import "./design.styles.css";

const Calculator = () => {
  console.log("calc go click");

  return (
    <div className="container">
      <div className="calculator">
        <h1 className="calc__heading">Calculator</h1>

        <div className="calc__window">
          <div className="window__previous">322/10</div>
          <div className="window__current">32.2</div>
        </div>

        <div className="calc__btns">
          <div className="row">
            <button className="btn">c</button>
            <button className="btn">c</button>
            <button className="btn">c</button>
            <button className="btn">c</button>
          </div>
          <div className="row">
            <button className="btn">c</button>
            <button className="btn">c</button>
            <button className="btn">c</button>
            <button className="btn">c</button>
          </div>
          <div className="row">
            <button className="btn">c</button>
            <button className="btn">c</button>
            <button className="btn">c</button>
            <button className="btn">c</button>
          </div>
          <div className="row">
            <button className="btn">c</button>
            <button className="btn">c</button>
            <button className="btn">c</button>
          </div>
          <div className="row">
            <button className="btn">c</button>
            <button className="btn">c</button>
            <button className="btn">c</button>
          </div>
          <button className="btn btn--big">=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
