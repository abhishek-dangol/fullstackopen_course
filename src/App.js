import { useState } from "react";
import React from "react";

const Statistics = (props) => {
  if (!props.hasFeedback) {
    return <p>No feedback has been given</p>
  }
  return (
    <>
      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
      <p>all {props.total}</p>
      <p>average {(props.good + props.bad + props.neutral) / props.total}</p>
    </>
  );
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [hasFeedback, setHasFeedback] = useState(false);

  const total = good + bad + neutral;

  const handleClickGood = () => {
    setHasFeedback(true);
    setGood(good + 1)
  }

  const handleClickNeutral = () => {
     setHasFeedback(true);
     setNeutral(neutral + 1);
   };
  
  const handleClickBad = () => {
    setHasFeedback(true);
     setBad(bad - 1);
   };
  
  const statisticsProps = {
    hasFeedback: hasFeedback,
    good: good,
    neutral: neutral,
    bad: bad,
    total: total,
  };

  return (
    <>
      <h2>Give Feedback</h2>
      <button onClick={handleClickGood}>good</button>
      <button onClick={handleClickNeutral}>neutral</button>
      <button onClick={handleClickBad}>bad</button>
      <h2>statistics</h2>
      <Statistics {...statisticsProps} />
    </>
  )
};

export default App;
