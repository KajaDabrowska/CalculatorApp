import React from "react";

const Keypad = ({ onClick }) => {
  // console.log("20÷1");
  return (
    <div className="calc__btns">
      <button
        name="C"
        className="btn"
        onClick={(e) => {
          onClick(e.target.name);
        }}
      >
        C
      </button>
      <button
        name="CE"
        className="btn tiny-pad"
        onClick={(e) => {
          onClick(e.target.name);
        }}
      >
        ⌫
      </button>
      <button
        name="%"
        className="btn sm-pad"
        onClick={(e) => onClick(e.target.name)}
      >
        %
      </button>
      <button name="/" className="btn" onClick={(e) => onClick(e.target.name)}>
        ÷
      </button>

      <button name="7" className="btn" onClick={(e) => onClick(e.target.name)}>
        7
      </button>
      <button name="8" className="btn" onClick={(e) => onClick(e.target.name)}>
        8
      </button>
      <button name="9" className="btn" onClick={(e) => onClick(e.target.name)}>
        9
      </button>
      <button name="*" className="btn" onClick={(e) => onClick(e.target.name)}>
        ×
      </button>

      <button name="4" className="btn" onClick={(e) => onClick(e.target.name)}>
        4
      </button>
      <button name="5" className="btn" onClick={(e) => onClick(e.target.name)}>
        5
      </button>
      <button name="6" className="btn" onClick={(e) => onClick(e.target.name)}>
        6
      </button>
      <button name="-" className="btn" onClick={(e) => onClick(e.target.name)}>
        −
      </button>

      <button name="1" className="btn" onClick={(e) => onClick(e.target.name)}>
        1
      </button>
      <button name="2" className="btn" onClick={(e) => onClick(e.target.name)}>
        2
      </button>
      <button name="3" className="btn" onClick={(e) => onClick(e.target.name)}>
        3
      </button>
      <button name="+" className="btn" onClick={(e) => onClick(e.target.name)}>
        +
      </button>

      <button name="()" className="btn" onClick={(e) => onClick(e.target.name)}>
        ()
      </button>
      <button name="0" className="btn" onClick={(e) => onClick(e.target.name)}>
        0
      </button>
      <button name="," className="btn" onClick={(e) => onClick(e.target.name)}>
        ,
      </button>
      <button
        name="="
        className="btn btn--big"
        onClick={(e) => {
          onClick(e.target.name);
        }}
      >
        =
      </button>
    </div>
  );
};

export default Keypad;
