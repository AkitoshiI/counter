import "./display.css";
import React from "react";

export const Display = (props) => {
  const count = props.num;

  return (
    <div className="dContainer">
      <p id="display">{count}</p>
    </div>
  );
};
