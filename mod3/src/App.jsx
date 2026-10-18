import { useState } from "react";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(21);
  const [inputValue, setInputValue] = useState(7);

  const handleUpdate = (action) => {
    if (action === "inc") setCount((prev) => prev + 1);
    else if (action === "dec") setCount((prev) => Math.max(prev - 1, 0));
    else if (action === "reset") setCount(0);
    else if (action === "set") setCount(inputValue);
  };

  return (
    <>
      <h1>Counter</h1>
      <div className="card">count is {count}</div>
      <div>
        <button style={{ margin: "10px" }} onClick={() => handleUpdate("inc")}>
          increase
        </button>
        <button style={{ margin: "10px" }} onClick={() => handleUpdate("dec")}>
          decrease
        </button>
        <button style={{ margin: "10px" }} onClick={() => handleUpdate("reset")}>
          reset
        </button>
      </div>
      <div
        style={{
          margin: "10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(Number(e.target.value))}
          style={{
            width: "100px",
            padding: ".6em .6em",
            backgroundColor: "transparent",
            border: "1px solid grey",
            textAlign: "center",
          }}
        />
        <button onClick={() => handleUpdate("set")}>set to {inputValue}</button>
      </div>
    </>
  );
}