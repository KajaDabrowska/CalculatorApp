import React from "react";

const Result = ({ result, prevValue }) => {
  return (
    <div className="calc__window">
      <div className="window__previous">
        {prevValue && prevValue !== "0" ? prevValue : "previous"}
      </div>
      <div className="window__current">{result ? result : "0"}</div>
    </div>
  );
};

export default Result;
