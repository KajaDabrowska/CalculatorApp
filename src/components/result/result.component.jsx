import React from "react";

const Result = ({ result, prevValue, isAlmostEqual }) => {
  //isAlmostEqual
  let previous = prevValue && prevValue !== "0" ? prevValue : "previous";

  let value = result ? result : "0";
  if (isAlmostEqual) value = "≈" + value;

  return (
    <div className="calc__window">
      <div className="window__previous">{previous}</div>
      <div className="window__current">{value}</div>
    </div>
  );
};

export default Result;
