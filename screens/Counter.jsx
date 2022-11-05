import React from "react";
import "./counter.css";

export const Counter = (props) => {
  const count = props.num;
  const plus = () => {
    props.changeCount(count + 1);
  };
  const minus = () => {
    props.changeCount(count - 1);
  };
  return (
    <div className="cContainer">
      <button className="button" onClick={plus}>
        +
      </button>
      <button className="button" onClick={minus}>
        -
      </button>
    </div>
  );
};
