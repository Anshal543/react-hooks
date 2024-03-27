import { useReducer, useState } from "react";
import "./App.css";

const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};
function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1,number:state.number+1 };
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 ,number:state.number-1};
    default:
      return state;
  }
}

function App3() {
  const [state, dispatch] = useReducer(reducer, { count: 0,number:1 });

  function increment() {
    dispatch({ type: ACTIONS.INCREMENT });
  }

  function decrement() {
    dispatch({ type: ACTIONS.DECREMENT });
  }

  return (
    <>
      <button onClick={decrement}>-</button>
      <h1>{state.count}</h1>
      <h1>{state.number}</h1>
      <button onClick={increment}>+</button>
    </>
  );
}

export default App3;
