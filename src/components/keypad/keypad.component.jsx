import React from "react";

const Keypad = () => {
  return (
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

      <button name="7" className="btn">
        7
      </button>
      <button name="8" className="btn">
        8
      </button>
      <button name="9" className="btn">
        9
      </button>
      <button name="×" className="btn">
        ×
      </button>

      <button name="4" className="btn">
        4
      </button>
      <button name="5" className="btn">
        5
      </button>
      <button name="6" className="btn">
        6
      </button>
      <button name="-" className="btn">
        −
      </button>

      <button name="1" className="btn">
        1
      </button>
      <button name="2" className="btn">
        2
      </button>
      <button name="3" className="btn">
        3
      </button>
      <button name="+" className="btn">
        +
      </button>

      <button name="±" className="btn">
        ±
      </button>
      <button name="0" className="btn">
        0
      </button>
      <button name="," className="btn">
        ,
      </button>
      <button name="=" className="btn btn--big">
        =
      </button>
    </div>
  );
};

export default Keypad;
