import { useReducer, useState } from "react";
import "./App.css";

function App2() {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "increment":
        return state + 1;
      case "decrement":
        return state - 1;
      default:
        return state;
    }
  }, 5);

  return (
    <>
      <h1>{state}</h1>
      <div className="card">
        <button onClick={() => dispatch({ type: "increment" })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "decrement" })}>
          Decrement
        </button>
      </div>
    </>
  );
}

export default App2;
