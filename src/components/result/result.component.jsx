import React from "react";

const Result = ({ result }) => {
  return (
    <div className="calc__window">
      <div className="window__previous">prev</div>
      <div className="window__current">{result}</div>
    </div>
  );
};

export default Result;
