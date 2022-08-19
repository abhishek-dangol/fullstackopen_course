import React from "react";
import { useState } from 'react'


const App = () => {
  const [counter, setCounter] = useState(0)
  
  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  return (
    <>
      <div>{counter}</div>
      <button onClick={increaseByOne}>plus</button>
      <button onClick={setToZero}>Reset</button>
      <button onClick={decreaseByOne}>minus</button>
    </>
  );
};

export default App;
