import "./App.css";
import React, { useState } from "react";
import { Counter } from "../screens/Counter";
import { Display } from "../screens/Display";
function App() {
  const [count, setCount] = useState(0);
  const changeCount = (index) => {
    setCount(index);
  };
  return (
    <div className="App">
      <Display num={count} />
      <Counter num={count} changeCount={(index) => changeCount(index)} />
    </div>
  );
}

export default App;
