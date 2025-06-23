import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);

  const addValue = () => {
    if (counter === 20) {
      alert("Value is already 20");
    } else {
      setCounter((counter) => counter + 1);
    }
  };

  const removeValue = () => {
    if (counter === 0) {
      alert("Value is already 0 ");
    } else {
      setCounter(counter - 1);
    }
  };
  return (
    <>
      <h1>Chai aur react</h1>
      <h2> Counter value {counter}</h2>
      <button onClick={addValue}>addValue{counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
    </>
  );
}

export default App;
