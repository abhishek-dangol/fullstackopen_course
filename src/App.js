import React from "react";
import { useState } from 'react'



const App = () => {
  const [value, setValue] = useState(0)
  const handleClick = () => {
    setValue(value + 1)
  }
  
  return (
    <>
      <p>{value}</p>
      <button onClick={handleClick}></button>
    </>
  );
};

export default App;
