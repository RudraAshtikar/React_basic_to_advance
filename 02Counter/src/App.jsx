import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);

  const addValue = () => {
    setCounter((counter) => counter + 1);
    setCounter((counter) => counter + 1);
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
