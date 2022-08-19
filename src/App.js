import React from "react";
import { useState } from 'react'


const App = () => {
  const [counter, setCounter] = useState(1000)
  setTimeout(
    () => setCounter(counter - 1),
    1000
  )

  return (
    <div>{counter}</div>
  )
};

export default App;
