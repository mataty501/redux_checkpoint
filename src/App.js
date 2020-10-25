import React, { useReducer } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { INCREAMENT_CONTER } from "./Redux/Actions/counterActions";
import { DECREAMENT_CONTER } from "./Redux/Actions/counterActions";

function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  return (
    <div className="App">
      <p>{counter}</p>
      <button onClick={() => dispatch({ type: INCREAMENT_CONTER })}>+</button>
      <button onClick={() => dispatch({ type: DECREAMENT_CONTER })}>-</button>
    </div>
  );
}

export default App;
