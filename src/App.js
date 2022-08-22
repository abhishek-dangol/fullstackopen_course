import { useState } from "react";
import React from "react";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClickGood = () => {
    setGood(good + 1)
  }

   const handleClickNeutral = () => {
     setNeutral(neutral + 1);
   };
  
   const handleClickBad = () => {
     setBad(bad + 1);
   };

  return (
    <>
      <h2>give feedback</h2>
      <button onClick={handleClickGood}>good</button>
      <button onClick={handleClickNeutral}>neutral</button>
      <button onClick={handleClickBad}>bad</button>
      <h2>statistics</h2>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
    
    </>
  )
};

export default App;
